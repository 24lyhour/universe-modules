<?php

namespace App\Services\Notification\Channels;

use App\Contracts\NotificationResult;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Http;

/**
 * SmsChannel
 *
 * SMS notification channel.
 * Supports multiple SMS providers via configuration.
 *
 * Supported providers:
 * - twilio: Twilio SMS
 * - nexmo: Vonage/Nexmo SMS
 * - messagebird: MessageBird SMS
 * - custom: Custom API endpoint
 */
class SmsChannel extends AbstractChannel
{
    protected array $defaultConfig = [
        'provider' => 'twilio',
    ];

    public function getChannelId(): string
    {
        return 'sms';
    }

    public function getDisplayName(): string
    {
        return 'SMS';
    }

    public function isAvailable(array $config = []): bool
    {
        $config = $this->mergeConfig($config);
        $provider = $config['provider'] ?? 'twilio';

        return match ($provider) {
            'twilio' => !empty(config('services.twilio.sid')) && !empty(config('services.twilio.token')),
            'nexmo' => !empty(config('services.nexmo.key')) && !empty(config('services.nexmo.secret')),
            'messagebird' => !empty(config('services.messagebird.access_key')),
            'custom' => !empty($config['api_url']),
            default => false,
        };
    }

    public function canSendTo(Model $notifiable): bool
    {
        return !empty($this->getRecipientId($notifiable));
    }

    public function getRecipientId(Model $notifiable): ?string
    {
        // Try notification phone method first
        if (method_exists($notifiable, 'getNotificationPhone')) {
            return $notifiable->getNotificationPhone();
        }

        return $notifiable->phone ?? $notifiable->phone_number ?? $notifiable->mobile ?? null;
    }

    public function send(Model $notifiable, array $payload, array $config = []): NotificationResult
    {
        $phone = $this->getRecipientId($notifiable);

        if (!$phone) {
            return NotificationResult::skipped(
                channel: $this->getChannelId(),
                reason: 'No phone number available',
                recipientId: null
            );
        }

        $extracted = $this->extractPayload($payload);
        $config = $this->mergeConfig($config);
        $message = $extracted['body'];

        // Optionally prepend title
        if (!empty($extracted['title']) && ($config['include_title'] ?? true)) {
            $message = $extracted['title'] . ': ' . $message;
        }

        try {
            $result = match ($config['provider'] ?? 'twilio') {
                'twilio' => $this->sendViaTwilio($phone, $message),
                'nexmo' => $this->sendViaNexmo($phone, $message),
                'messagebird' => $this->sendViaMessageBird($phone, $message),
                'custom' => $this->sendViaCustomApi($phone, $message, $config),
                default => throw new \Exception("Unknown SMS provider: {$config['provider']}"),
            };

            if ($result['success']) {
                return NotificationResult::success(
                    channel: $this->getChannelId(),
                    recipientId: $phone,
                    messageId: $result['message_id'] ?? null
                );
            }

            return NotificationResult::failure(
                channel: $this->getChannelId(),
                error: $result['error'] ?? 'SMS send failed',
                recipientId: $phone
            );
        } catch (\Exception $e) {
            $this->log('error', 'SMS notification failed', [
                'error' => $e->getMessage(),
                'phone' => substr($phone, 0, -4) . '****', // Mask phone
            ]);

            return NotificationResult::failure(
                channel: $this->getChannelId(),
                error: $e->getMessage(),
                recipientId: $phone
            );
        }
    }

    protected function sendViaTwilio(string $phone, string $message): array
    {
        $sid = config('services.twilio.sid');
        $token = config('services.twilio.token');
        $from = config('services.twilio.from');

        $response = Http::withBasicAuth($sid, $token)
            ->asForm()
            ->post("https://api.twilio.com/2010-04-01/Accounts/{$sid}/Messages.json", [
                'From' => $from,
                'To' => $phone,
                'Body' => $message,
            ]);

        if ($response->successful()) {
            return ['success' => true, 'message_id' => $response->json('sid')];
        }

        return ['success' => false, 'error' => $response->json('message') ?? 'Twilio error'];
    }

    protected function sendViaNexmo(string $phone, string $message): array
    {
        $response = Http::post('https://rest.nexmo.com/sms/json', [
            'api_key' => config('services.nexmo.key'),
            'api_secret' => config('services.nexmo.secret'),
            'from' => config('services.nexmo.from'),
            'to' => $phone,
            'text' => $message,
        ]);

        $data = $response->json();

        if (($data['messages'][0]['status'] ?? '1') === '0') {
            return ['success' => true, 'message_id' => $data['messages'][0]['message-id'] ?? null];
        }

        return ['success' => false, 'error' => $data['messages'][0]['error-text'] ?? 'Nexmo error'];
    }

    protected function sendViaMessageBird(string $phone, string $message): array
    {
        $response = Http::withHeaders([
            'Authorization' => 'AccessKey ' . config('services.messagebird.access_key'),
        ])->post('https://rest.messagebird.com/messages', [
            'originator' => config('services.messagebird.from'),
            'recipients' => [$phone],
            'body' => $message,
        ]);

        if ($response->successful()) {
            return ['success' => true, 'message_id' => $response->json('id')];
        }

        return ['success' => false, 'error' => $response->json('errors.0.description') ?? 'MessageBird error'];
    }

    protected function sendViaCustomApi(string $phone, string $message, array $config): array
    {
        $response = Http::withHeaders($config['headers'] ?? [])
            ->post($config['api_url'], [
                'phone' => $phone,
                'message' => $message,
                ...$config['extra_params'] ?? [],
            ]);

        if ($response->successful()) {
            return ['success' => true, 'message_id' => $response->json('id')];
        }

        return ['success' => false, 'error' => $response->body()];
    }

    public function getRequiredConfig(): array
    {
        return ['provider'];
    }
}
