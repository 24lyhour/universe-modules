<?php

namespace App\Services\Notification\Channels;

use App\Contracts\NotificationResult;
use App\Services\FirebaseService;
use App\Traits\HasDevices;
use Illuminate\Database\Eloquent\Model;

/**
 * PushChannel
 *
 * Firebase Cloud Messaging (FCM) push notification channel.
 * Supports both single token (on model) and multiple devices (via HasDevices trait).
 */
class PushChannel extends AbstractChannel
{
    public function __construct(
        protected FirebaseService $firebaseService
    ) {}

    public function getChannelId(): string
    {
        return 'push';
    }

    public function getDisplayName(): string
    {
        return 'Push Notification';
    }

    public function isAvailable(array $config = []): bool
    {
        return $this->firebaseService->isConfigured();
    }

    public function canSendTo(Model $notifiable): bool
    {
        $tokens = $this->getAllFcmTokens($notifiable);
        return !empty($tokens);
    }

    public function getRecipientId(Model $notifiable): ?string
    {
        $tokens = $this->getAllFcmTokens($notifiable);
        return $tokens[0] ?? null;
    }

    /**
     * Get all FCM tokens for a notifiable.
     * Checks both direct model attributes and devices table.
     */
    protected function getAllFcmTokens(Model $notifiable): array
    {
        $tokens = [];

        // 1. Check if model uses HasDevices trait - get tokens from devices table
        if ($this->hasDevicesTrait($notifiable)) {
            $deviceTokens = $notifiable->pushDevices()->pluck('fcm_token')->filter()->toArray();
            $tokens = array_merge($tokens, $deviceTokens);
        }

        // 2. Check direct model attributes as fallback
        $directToken = $notifiable->fcm_token
            ?? $notifiable->device_token
            ?? $notifiable->push_token
            ?? null;

        if ($directToken && !in_array($directToken, $tokens)) {
            $tokens[] = $directToken;
        }

        return array_values(array_unique(array_filter($tokens)));
    }

    /**
     * Check if model uses HasDevices trait.
     */
    protected function hasDevicesTrait(Model $notifiable): bool
    {
        return in_array(HasDevices::class, class_uses_recursive($notifiable));
    }

    public function send(Model $notifiable, array $payload, array $config = []): NotificationResult
    {
        $tokens = $this->getAllFcmTokens($notifiable);

        if (empty($tokens)) {
            return NotificationResult::skipped(
                channel: $this->getChannelId(),
                reason: 'No FCM token available',
                recipientId: null
            );
        }

        $extracted = $this->extractPayload($payload);
        $sendToAll = $config['send_to_all_devices'] ?? true;

        // If multiple tokens and send_to_all is true, send to all devices
        if ($sendToAll && count($tokens) > 1) {
            return $this->sendToMultipleDevices($notifiable, $tokens, $extracted);
        }

        // Send to first/primary token only
        return $this->sendToSingleDevice($notifiable, $tokens[0], $extracted);
    }

    /**
     * Send to a single device.
     */
    protected function sendToSingleDevice(Model $notifiable, string $token, array $extracted): NotificationResult
    {
        try {
            $success = $this->firebaseService->sendToDevice(
                token: $token,
                title: $extracted['title'],
                body: $extracted['body'],
                data: array_merge($extracted['data'], [
                    'notifiable_type' => get_class($notifiable),
                    'notifiable_id' => $notifiable->getKey(),
                ])
            );

            if ($success) {
                return NotificationResult::success(
                    channel: $this->getChannelId(),
                    recipientId: $token,
                    metadata: ['notifiable_id' => $notifiable->getKey()]
                );
            }

            return NotificationResult::failure(
                channel: $this->getChannelId(),
                error: 'FCM send failed',
                recipientId: $token
            );
        } catch (\Exception $e) {
            $this->log('error', 'Push notification failed', [
                'error' => $e->getMessage(),
                'notifiable_id' => $notifiable->getKey(),
            ]);

            return NotificationResult::failure(
                channel: $this->getChannelId(),
                error: $e->getMessage(),
                recipientId: $token
            );
        }
    }

    /**
     * Send to multiple devices.
     */
    protected function sendToMultipleDevices(Model $notifiable, array $tokens, array $extracted): NotificationResult
    {
        try {
            $success = $this->firebaseService->sendToDevices(
                tokens: $tokens,
                title: $extracted['title'],
                body: $extracted['body'],
                data: array_merge($extracted['data'], [
                    'notifiable_type' => get_class($notifiable),
                    'notifiable_id' => $notifiable->getKey(),
                ])
            );

            $tokenCount = count($tokens);

            if ($success) {
                return NotificationResult::success(
                    channel: $this->getChannelId(),
                    recipientId: implode(',', array_slice($tokens, 0, 2)) . ($tokenCount > 2 ? '...' : ''),
                    metadata: [
                        'notifiable_id' => $notifiable->getKey(),
                        'device_count' => $tokenCount,
                    ]
                );
            }

            return NotificationResult::failure(
                channel: $this->getChannelId(),
                error: 'FCM multi-device send failed',
                recipientId: "{$tokenCount} devices"
            );
        } catch (\Exception $e) {
            $this->log('error', 'Push notification to multiple devices failed', [
                'error' => $e->getMessage(),
                'notifiable_id' => $notifiable->getKey(),
                'device_count' => count($tokens),
            ]);

            return NotificationResult::failure(
                channel: $this->getChannelId(),
                error: $e->getMessage(),
                recipientId: count($tokens) . ' devices'
            );
        }
    }

    /**
     * Send to topic.
     */
    public function sendToTopic(string $topic, array $payload, array $config = []): NotificationResult
    {
        $extracted = $this->extractPayload($payload);

        try {
            $success = $this->firebaseService->sendToTopic(
                topic: $topic,
                title: $extracted['title'],
                body: $extracted['body'],
                data: $extracted['data']
            );

            if ($success) {
                return NotificationResult::success(
                    channel: $this->getChannelId(),
                    recipientId: "topic:$topic"
                );
            }

            return NotificationResult::failure(
                channel: $this->getChannelId(),
                error: 'Topic send failed',
                recipientId: "topic:$topic"
            );
        } catch (\Exception $e) {
            return NotificationResult::failure(
                channel: $this->getChannelId(),
                error: $e->getMessage(),
                recipientId: "topic:$topic"
            );
        }
    }

    public function getRequiredConfig(): array
    {
        return []; // Uses FirebaseService config
    }
}
