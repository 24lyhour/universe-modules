<?php

namespace App\Contracts;

use Illuminate\Database\Eloquent\Model;

/**
 * NotificationChannelInterface
 *
 * Contract for notification channels. Implement this interface to create
 * custom notification channels (e.g., Telegram, WhatsApp, Slack, etc.).
 *
 * @example
 * class TelegramChannel implements NotificationChannelInterface
 * {
 *     public function send(Model $notifiable, array $payload, array $config = []): NotificationResult
 *     {
 *         // Send via Telegram API
 *     }
 * }
 */
interface NotificationChannelInterface
{
    /**
     * Get the unique channel identifier.
     *
     * @return string e.g., 'push', 'email', 'sms', 'telegram', 'database'
     */
    public function getChannelId(): string;

    /**
     * Get the display name for the channel.
     *
     * @return string e.g., 'Push Notification', 'Email', 'Telegram'
     */
    public function getDisplayName(): string;

    /**
     * Check if this channel is available/configured.
     *
     * @param array $config Channel configuration
     * @return bool
     */
    public function isAvailable(array $config = []): bool;

    /**
     * Check if the notifiable can receive notifications via this channel.
     *
     * @param Model $notifiable The model receiving the notification
     * @return bool
     */
    public function canSendTo(Model $notifiable): bool;

    /**
     * Get the recipient identifier for this channel (e.g., email, phone, chat_id).
     *
     * @param Model $notifiable The model receiving the notification
     * @return string|null
     */
    public function getRecipientId(Model $notifiable): ?string;

    /**
     * Send the notification.
     *
     * @param Model $notifiable The model receiving the notification
     * @param array $payload Notification payload (title, body, data, etc.)
     * @param array $config Channel-specific configuration
     * @return NotificationResult
     */
    public function send(Model $notifiable, array $payload, array $config = []): NotificationResult;

    /**
     * Send to multiple recipients (batch send).
     *
     * @param array $notifiables Array of models
     * @param array $payload Notification payload
     * @param array $config Channel-specific configuration
     * @return array<NotificationResult>
     */
    public function sendBatch(array $notifiables, array $payload, array $config = []): array;

    /**
     * Get required configuration keys for this channel.
     *
     * @return array e.g., ['api_key', 'bot_token']
     */
    public function getRequiredConfig(): array;

    /**
     * Validate the channel configuration.
     *
     * @param array $config
     * @return bool
     */
    public function validateConfig(array $config): bool;
}
