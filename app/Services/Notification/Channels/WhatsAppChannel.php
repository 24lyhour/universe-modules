<?php

namespace App\Services\Notification\Channels;

use App\Contracts\NotificationResult;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Http;

/**
 * WhatsAppChannel
 *
 * WhatsApp Business API notification channel.
 *
 * Supports:
 * - Meta (Facebook) Cloud API
 * - Twilio WhatsApp
 * - 360dialog
 * - Custom providers
 *
 * Configuration:
 * 1. Add to config/services.php:
 *    'whatsapp' => [
 *        'provider' => env('WHATSAPP_PROVIDER', 'meta'), // meta, twilio, 360dialog
 *        'phone_number_id' => env('WHATSAPP_PHONE_ID'),
 *        'access_token' => env('WHATSAPP_ACCESS_TOKEN'),
 *    ]
 */
class WhatsAppChannel extends AbstractChannel
{
    protected array $defaultConfig = [
        'provider' => 'meta',
    ];

    public function getChannelId(): string
    {
        return 'whatsapp';
    }

    public function getDisplayName(): string
    {
        return 'WhatsApp';
    }

    public function isAvailable(array $config = []): bool
    {
        $config = $this->mergeConfig($config);
        $provider = $config['provider'] ?? 'meta';

        return match ($provider) {
            'meta' => !empty(config('services.whatsapp.phone_number_id')) &&
                      !empty(config('services.whatsapp.access_token')),
            'twilio' => !empty(config('services.twilio.sid')) &&
                        !empty(config('services.twilio.whatsapp_from')),
            '360dialog' => !empty(config('services.whatsapp.api_key')),
            default => false,
        };
    }

    public function canSendTo(Model $notifiable): bool
    {
        return !empty($this->getRecipientId($notifiable));
    }

    public function getRecipientId(Model $notifiable): ?string
    {
        // Try WhatsApp-specific field first
        return $notifiable->whatsapp_number
            ?? $notifiable->whatsapp
            ?? $notifiable->phone
            ?? $notifiable->phone_number
            ?? null;
    }

    public function send(Model $notifiable, array $payload, array $config = []): NotificationResult
    {
        $phone = $this->getRecipientId($notifiable);

        if (!$phone) {
            return NotificationResult::skipped(
                channel: $this->getChannelId(),
                reason: 'No WhatsApp number available',
                recipientId: null
            );
        }

        // Normalize phone number (remove +, spaces, etc.)
        $phone = preg_replace('/[^0-9]/', '', $phone);

        $config = $this->mergeConfig($config);
        $provider = $config['provider'] ?? 'meta';

        try {
            $result = match ($provider) {
                'meta' => $this->sendViaMeta($phone, $payload, $config),
                'twilio' => $this->sendViaTwilio($phone, $payload),
                '360dialog' => $this->sendVia360Dialog($phone, $payload),
                default => throw new \Exception("Unknown WhatsApp provider: {$provider}"),
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
                error: $result['error'] ?? 'WhatsApp send failed',
                recipientId: $phone
            );
        } catch (\Exception $e) {
            $this->log('error', 'WhatsApp notification failed', [
                'error' => $e->getMessage(),
                'phone' => substr($phone, 0, -4) . '****',
            ]);

            return NotificationResult::failure(
                channel: $this->getChannelId(),
                error: $e->getMessage(),
                recipientId: $phone
            );
        }
    }

    /**
     * Send via Meta (Facebook) Cloud API.
     */
    protected function sendViaMeta(string $phone, array $payload, array $config): array
    {
        $phoneNumberId = config('services.whatsapp.phone_number_id');
        $accessToken = config('services.whatsapp.access_token');
        $extracted = $this->extractPayload($payload);

        // Build message based on type
        $messageData = [
            'messaging_product' => 'whatsapp',
            'recipient_type' => 'individual',
            'to' => $phone,
        ];

        // Use template if provided
        if (!empty($config['template'])) {
            $messageData['type'] = 'template';
            $messageData['template'] = [
                'name' => $config['template'],
                'language' => ['code' => $config['language'] ?? 'en'],
                'components' => $config['template_components'] ?? [],
            ];
        } else {
            // Send text message
            $text = $extracted['title']
                ? "*{$extracted['title']}*\n\n{$extracted['body']}"
                : $extracted['body'];

            $messageData['type'] = 'text';
            $messageData['text'] = ['body' => $text];
        }

        $response = Http::withToken($accessToken)
            ->post("https://graph.facebook.com/v18.0/{$phoneNumberId}/messages", $messageData);

        if ($response->successful()) {
            return [
                'success' => true,
                'message_id' => $response->json('messages.0.id'),
            ];
        }

        return [
            'success' => false,
            'error' => $response->json('error.message') ?? 'Meta API error',
        ];
    }

    /**
     * Send via Twilio WhatsApp.
     */
    protected function sendViaTwilio(string $phone, array $payload): array
    {
        $sid = config('services.twilio.sid');
        $token = config('services.twilio.token');
        $from = config('services.twilio.whatsapp_from');
        $extracted = $this->extractPayload($payload);

        $message = $extracted['title']
            ? "*{$extracted['title']}*\n\n{$extracted['body']}"
            : $extracted['body'];

        $response = Http::withBasicAuth($sid, $token)
            ->asForm()
            ->post("https://api.twilio.com/2010-04-01/Accounts/{$sid}/Messages.json", [
                'From' => "whatsapp:{$from}",
                'To' => "whatsapp:+{$phone}",
                'Body' => $message,
            ]);

        if ($response->successful()) {
            return ['success' => true, 'message_id' => $response->json('sid')];
        }

        return ['success' => false, 'error' => $response->json('message') ?? 'Twilio error'];
    }

    /**
     * Send via 360dialog.
     */
    protected function sendVia360Dialog(string $phone, array $payload): array
    {
        $apiKey = config('services.whatsapp.api_key');
        $extracted = $this->extractPayload($payload);

        $message = $extracted['title']
            ? "*{$extracted['title']}*\n\n{$extracted['body']}"
            : $extracted['body'];

        $response = Http::withHeaders([
            'D360-API-KEY' => $apiKey,
        ])->post('https://waba.360dialog.io/v1/messages', [
            'to' => $phone,
            'type' => 'text',
            'text' => ['body' => $message],
        ]);

        if ($response->successful()) {
            return ['success' => true, 'message_id' => $response->json('messages.0.id')];
        }

        return ['success' => false, 'error' => $response->json('error.message') ?? '360dialog error'];
    }

    public function getRequiredConfig(): array
    {
        return ['provider'];
    }
}
