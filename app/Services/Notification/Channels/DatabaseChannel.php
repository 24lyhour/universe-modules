<?php

namespace App\Services\Notification\Channels;

use App\Contracts\NotificationResult;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

/**
 * DatabaseChannel
 *
 * Database notification channel for in-app notifications.
 * Stores notifications in Laravel's notifications table.
 */
class DatabaseChannel extends AbstractChannel
{
    public function getChannelId(): string
    {
        return 'database';
    }

    public function getDisplayName(): string
    {
        return 'In-App Notification';
    }

    public function isAvailable(array $config = []): bool
    {
        return true; // Always available
    }

    public function canSendTo(Model $notifiable): bool
    {
        return true; // Can always store in database
    }

    public function getRecipientId(Model $notifiable): ?string
    {
        return (string) $notifiable->getKey();
    }

    public function send(Model $notifiable, array $payload, array $config = []): NotificationResult
    {
        $extracted = $this->extractPayload($payload);

        try {
            $notificationId = Str::uuid()->toString();

            DB::table('notifications')->insert([
                'id' => $notificationId,
                'type' => $payload['notification_type'] ?? 'App\\Notifications\\GenericNotification',
                'notifiable_type' => get_class($notifiable),
                'notifiable_id' => $notifiable->getKey(),
                'data' => json_encode([
                    'title' => $extracted['title'],
                    'body' => $extracted['body'],
                    'data' => $extracted['data'],
                    'action_url' => $extracted['action_url'],
                    'image' => $extracted['image'],
                    'type' => $payload['type'] ?? 'general',
                    'tenant_type' => $payload['tenant_type'] ?? null,
                    'tenant_id' => $payload['tenant_id'] ?? null,
                ]),
                'read_at' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            return NotificationResult::success(
                channel: $this->getChannelId(),
                recipientId: (string) $notifiable->getKey(),
                messageId: $notificationId,
                metadata: ['notifiable_id' => $notifiable->getKey()]
            );
        } catch (\Exception $e) {
            $this->log('error', 'Database notification failed', [
                'error' => $e->getMessage(),
                'notifiable_id' => $notifiable->getKey(),
            ]);

            return NotificationResult::failure(
                channel: $this->getChannelId(),
                error: $e->getMessage(),
                recipientId: (string) $notifiable->getKey()
            );
        }
    }

    public function getRequiredConfig(): array
    {
        return [];
    }
}
