<?php

namespace App\Services\Notification\Channels;

use App\Contracts\NotificationResult;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Mail;
use Illuminate\Mail\Message;

/**
 * EmailChannel
 *
 * Email notification channel using Laravel's Mail facade.
 */
class EmailChannel extends AbstractChannel
{
    public function getChannelId(): string
    {
        return 'email';
    }

    public function getDisplayName(): string
    {
        return 'Email';
    }

    public function isAvailable(array $config = []): bool
    {
        return config('mail.default') !== null;
    }

    public function canSendTo(Model $notifiable): bool
    {
        return !empty($this->getRecipientId($notifiable));
    }

    public function getRecipientId(Model $notifiable): ?string
    {
        // Try notification email first, then regular email
        if (method_exists($notifiable, 'getNotificationEmail')) {
            return $notifiable->getNotificationEmail();
        }

        return $notifiable->email ?? null;
    }

    public function send(Model $notifiable, array $payload, array $config = []): NotificationResult
    {
        $email = $this->getRecipientId($notifiable);

        if (!$email) {
            return NotificationResult::skipped(
                channel: $this->getChannelId(),
                reason: 'No email address available',
                recipientId: null
            );
        }

        $extracted = $this->extractPayload($payload);
        $config = $this->mergeConfig($config);

        try {
            // Use template if provided, otherwise send raw
            if ($extracted['template']) {
                Mail::send($extracted['template'], [
                    'notifiable' => $notifiable,
                    'title' => $extracted['title'],
                    'body' => $extracted['body'],
                    'data' => $extracted['data'],
                    'actionUrl' => $extracted['action_url'],
                ], function (Message $message) use ($email, $extracted, $notifiable) {
                    $message->to($email, $this->getRecipientName($notifiable))
                        ->subject($extracted['subject']);
                });
            } else {
                Mail::raw($extracted['body'], function (Message $message) use ($email, $extracted, $notifiable) {
                    $message->to($email, $this->getRecipientName($notifiable))
                        ->subject($extracted['subject']);
                });
            }

            return NotificationResult::success(
                channel: $this->getChannelId(),
                recipientId: $email,
                metadata: ['notifiable_id' => $notifiable->getKey()]
            );
        } catch (\Exception $e) {
            $this->log('error', 'Email notification failed', [
                'error' => $e->getMessage(),
                'email' => $email,
            ]);

            return NotificationResult::failure(
                channel: $this->getChannelId(),
                error: $e->getMessage(),
                recipientId: $email
            );
        }
    }

    /**
     * Get recipient name for email.
     */
    protected function getRecipientName(Model $notifiable): ?string
    {
        return $notifiable->name ?? $notifiable->full_name ?? null;
    }

    public function getRequiredConfig(): array
    {
        return [];
    }
}
