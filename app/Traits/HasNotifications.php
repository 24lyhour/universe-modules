<?php

namespace App\Traits;

use App\Contracts\NotificationResult;
use App\Models\NotificationPreference;
use App\Services\Notification\NotificationService;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Support\Facades\App;

/**
 * HasNotifications Trait
 *
 * A powerful, reusable trait that provides multi-channel notification
 * capabilities to any Eloquent model. Supports Push, Email, SMS,
 * Telegram, WhatsApp, and Database (in-app) notifications.
 *
 * @example Basic Usage:
 * ```php
 * class Employee extends Model {
 *     use HasNotifications;
 * }
 *
 * // Send notification through all enabled channels
 * $employee->sendNotification('reminder', [
 *     'title' => 'Shift Reminder',
 *     'body' => 'Your shift starts in 30 minutes',
 * ]);
 *
 * // Send to specific channels
 * $employee->sendNotification('alert', $data, ['push', 'telegram']);
 *
 * // Quick channel-specific methods
 * $employee->notifyViaPush('Alert', 'Something happened');
 * $employee->notifyViaEmail('Subject', 'Email body');
 * $employee->notifyViaTelegram('Title', 'Message');
 * $employee->notifyViaSms('Your OTP is 123456');
 * ```
 *
 * @example Notification Preferences:
 * ```php
 * // Enable/disable channels
 * $user->enableNotificationChannel('telegram');
 * $user->disableNotificationChannel('sms');
 *
 * // Update multiple preferences
 * $user->updateNotificationPreferences([
 *     'push' => true,
 *     'email' => true,
 *     'sms' => false,
 *     'telegram' => true,
 * ]);
 *
 * // Check if channel is enabled
 * if ($user->canReceiveNotification('push')) { ... }
 * ```
 *
 * @example In-App Notifications:
 * ```php
 * // Get notifications
 * $notifications = $user->databaseNotifications;
 * $unread = $user->unreadNotifications;
 * $count = $user->getUnreadNotificationsCount();
 *
 * // Mark as read
 * $user->markNotificationAsRead($notificationId);
 * $user->markAllNotificationsAsRead();
 *
 * // Clean up old notifications
 * $user->deleteOldNotifications(30); // Older than 30 days
 * ```
 *
 * @property-read NotificationPreference|null $notificationPreference
 * @property-read \Illuminate\Database\Eloquent\Collection|DatabaseNotification[] $databaseNotifications
 * @property-read \Illuminate\Database\Eloquent\Collection|DatabaseNotification[] $unreadNotifications
 */
trait HasNotifications
{
    /**
     * Boot the trait.
     */
    public static function bootHasNotifications(): void
    {
        // Clean up notification preferences when model is deleted
        static::deleting(function ($model) {
            if (method_exists($model, 'notificationPreference')) {
                $model->notificationPreference()->delete();
            }
        });
    }

    // =========================================================================
    // RELATIONSHIPS
    // =========================================================================

    /**
     * Get the notification preference for this model.
     */
    public function notificationPreference(): MorphOne
    {
        return $this->morphOne(NotificationPreference::class, 'notifiable');
    }

    // Note: databaseNotifications(), unreadNotifications(), readNotifications()
    // are provided by Laravel's Notifiable trait. Use those instead.

    // =========================================================================
    // SEND NOTIFICATIONS
    // =========================================================================

    /**
     * Get the notification service instance.
     */
    protected function getNotificationService(): NotificationService
    {
        return App::make(NotificationService::class);
    }

    /**
     * Send a notification through specified channels.
     *
     * @param string $type The notification type/template key
     * @param array $payload Notification data (title, body, data, etc.)
     * @param array|string|null $channels Channels to use or null for all enabled
     * @return array<string, NotificationResult>
     */
    public function sendNotification(string $type, array $payload = [], array|string|null $channels = null): array
    {
        return $this->getNotificationService()->send($this, $type, $payload, $channels);
    }

    /**
     * Send notification with tenant context.
     *
     * @param mixed $tenant Tenant model or array [type, id]
     * @param string $type Notification type
     * @param array $payload Notification data
     * @param array|string|null $channels Channels to use
     * @return array<string, NotificationResult>
     */
    public function sendTenantNotification(
        mixed $tenant,
        string $type,
        array $payload = [],
        array|string|null $channels = null
    ): array {
        $service = $this->getNotificationService();

        if (is_array($tenant)) {
            $service->forTenant($tenant[0], $tenant[1]);
        } else {
            $service->forTenant($tenant);
        }

        return $service->send($this, $type, $payload, $channels);
    }

    // =========================================================================
    // CHANNEL-SPECIFIC QUICK METHODS
    // =========================================================================

    /**
     * Send a push notification (FCM).
     */
    public function notifyViaPush(string $title, string $body, array $data = []): NotificationResult
    {
        return $this->getNotificationService()->push($this, $title, $body, $data);
    }

    /**
     * Send an email notification.
     */
    public function notifyViaEmail(string $subject, string $message, ?string $template = null): NotificationResult
    {
        return $this->getNotificationService()->email($this, $subject, $message, $template);
    }

    /**
     * Send an SMS notification.
     */
    public function notifyViaSms(string $message): NotificationResult
    {
        return $this->getNotificationService()->sms($this, $message);
    }

    /**
     * Send a Telegram notification.
     */
    public function notifyViaTelegram(string $title, string $body, ?string $actionUrl = null): NotificationResult
    {
        return $this->getNotificationService()->telegram($this, $title, $body, $actionUrl);
    }

    /**
     * Send a WhatsApp notification.
     */
    public function notifyViaWhatsApp(string $message): NotificationResult
    {
        return $this->getNotificationService()->whatsapp($this, $message);
    }

    /**
     * Create an in-app (database) notification.
     */
    public function notifyViaDatabase(string $title, string $body, array $data = []): NotificationResult
    {
        return $this->getNotificationService()->database($this, $title, $body, $data);
    }

    // =========================================================================
    // DEVICE LOGIN NOTIFICATIONS
    // =========================================================================

    /**
     * Send a new device login notification.
     *
     * @param array $deviceInfo Device information (ip, browser, os, location, etc.)
     * @param array|string|null $channels Channels to use
     * @return array<string, NotificationResult>
     */
    public function notifyNewDeviceLogin(array $deviceInfo = [], array|string|null $channels = null): array
    {
        $ip = $deviceInfo['ip'] ?? request()->ip();
        $browser = $deviceInfo['browser'] ?? $this->detectBrowser();
        $os = $deviceInfo['os'] ?? $this->detectOS();
        $location = $deviceInfo['location'] ?? 'Unknown location';
        $time = now()->format('M d, Y \a\t H:i');

        return $this->sendNotification('device_login', [
            'title' => 'New Device Login',
            'body' => "A new login was detected on your account from {$browser} on {$os}.",
            'data' => [
                'ip' => $ip,
                'browser' => $browser,
                'os' => $os,
                'location' => $location,
                'time' => $time,
                'device_info' => $deviceInfo,
            ],
            'action_url' => route('settings.security') ?? null,
        ], $channels ?? ['email', 'push', 'database']);
    }

    /**
     * Send a suspicious login alert.
     */
    public function notifySuspiciousLogin(array $deviceInfo = [], string $reason = 'Unusual activity detected'): array
    {
        return $this->sendNotification('suspicious_login', [
            'title' => '⚠️ Security Alert',
            'body' => "Suspicious login attempt detected: {$reason}",
            'data' => [
                'reason' => $reason,
                'device_info' => $deviceInfo,
                'time' => now()->toIso8601String(),
            ],
        ], ['email', 'push', 'telegram', 'database']);
    }

    /**
     * Detect browser from User-Agent.
     */
    protected function detectBrowser(): string
    {
        $userAgent = request()->userAgent() ?? '';

        if (str_contains($userAgent, 'Firefox')) return 'Firefox';
        if (str_contains($userAgent, 'Chrome')) return 'Chrome';
        if (str_contains($userAgent, 'Safari')) return 'Safari';
        if (str_contains($userAgent, 'Edge')) return 'Edge';
        if (str_contains($userAgent, 'Opera')) return 'Opera';

        return 'Unknown Browser';
    }

    /**
     * Detect OS from User-Agent.
     */
    protected function detectOS(): string
    {
        $userAgent = request()->userAgent() ?? '';

        if (str_contains($userAgent, 'Windows')) return 'Windows';
        if (str_contains($userAgent, 'Mac')) return 'macOS';
        if (str_contains($userAgent, 'Linux')) return 'Linux';
        if (str_contains($userAgent, 'Android')) return 'Android';
        if (str_contains($userAgent, 'iPhone') || str_contains($userAgent, 'iPad')) return 'iOS';

        return 'Unknown OS';
    }

    // =========================================================================
    // NOTIFICATION PREFERENCES
    // =========================================================================

    /**
     * Check if this model can receive notifications on a specific channel.
     */
    public function canReceiveNotification(string $channel): bool
    {
        $preference = $this->notificationPreference;

        if (!$preference) {
            return true; // Default: allow all
        }

        return $preference->isChannelEnabled($channel);
    }

    /**
     * Get all enabled notification channels for this model.
     */
    public function getEnabledNotificationChannels(): array
    {
        $preference = $this->notificationPreference;

        if (!$preference) {
            return config('notifications.default_channels', ['push', 'email', 'database']);
        }

        return $preference->getEnabledChannels();
    }

    /**
     * Update notification preferences.
     *
     * @param array $preferences Array of channel => enabled status
     */
    public function updateNotificationPreferences(array $preferences): NotificationPreference
    {
        return $this->notificationPreference()->updateOrCreate(
            ['notifiable_type' => get_class($this), 'notifiable_id' => $this->getKey()],
            ['preferences' => $preferences]
        );
    }

    /**
     * Enable a notification channel.
     */
    public function enableNotificationChannel(string $channel): NotificationPreference
    {
        $preference = $this->notificationPreference;

        if (!$preference) {
            return $this->notificationPreference()->create([
                'preferences' => [$channel => true],
            ]);
        }

        $preferences = $preference->preferences ?? [];
        $preferences[$channel] = true;
        $preference->update(['preferences' => $preferences]);

        return $preference->fresh();
    }

    /**
     * Disable a notification channel.
     */
    public function disableNotificationChannel(string $channel): NotificationPreference
    {
        $preference = $this->notificationPreference;

        if (!$preference) {
            return $this->notificationPreference()->create([
                'preferences' => [$channel => false],
            ]);
        }

        $preferences = $preference->preferences ?? [];
        $preferences[$channel] = false;
        $preference->update(['preferences' => $preferences]);

        return $preference->fresh();
    }

    // =========================================================================
    // RECIPIENT IDENTIFIERS (Override these in your model if needed)
    // =========================================================================

    /**
     * Get the FCM token for push notifications.
     */
    public function getFcmToken(): ?string
    {
        return $this->fcm_token ?? $this->device_token ?? $this->push_token ?? null;
    }

    /**
     * Get the email address for email notifications.
     */
    public function getNotificationEmail(): ?string
    {
        return $this->email ?? null;
    }

    /**
     * Get the phone number for SMS/WhatsApp notifications.
     */
    public function getNotificationPhone(): ?string
    {
        return $this->phone ?? $this->phone_number ?? $this->mobile ?? null;
    }

    /**
     * Get the Telegram chat ID.
     */
    public function getTelegramChatId(): ?string
    {
        return $this->telegram_chat_id ?? $this->telegram_id ?? null;
    }

    // =========================================================================
    // IN-APP NOTIFICATION MANAGEMENT
    // =========================================================================

    /**
     * Mark all notifications as read.
     */
    public function markAllNotificationsAsRead(): int
    {
        return $this->unreadNotifications()->update(['read_at' => now()]);
    }

    /**
     * Mark a specific notification as read.
     */
    public function markNotificationAsRead(string $notificationId): bool
    {
        return $this->databaseNotifications()
            ->where('id', $notificationId)
            ->update(['read_at' => now()]) > 0;
    }

    /**
     * Mark a specific notification as unread.
     */
    public function markNotificationAsUnread(string $notificationId): bool
    {
        return $this->databaseNotifications()
            ->where('id', $notificationId)
            ->update(['read_at' => null]) > 0;
    }

    /**
     * Get the count of unread notifications.
     */
    public function getUnreadNotificationsCount(): int
    {
        return $this->unreadNotifications()->count();
    }

    /**
     * Delete a specific notification.
     */
    public function deleteNotification(string $notificationId): bool
    {
        return $this->databaseNotifications()
            ->where('id', $notificationId)
            ->delete() > 0;
    }

    /**
     * Delete old notifications.
     *
     * @param int $daysOld Delete notifications older than this many days
     */
    public function deleteOldNotifications(int $daysOld = 30): int
    {
        return $this->databaseNotifications()
            ->where('created_at', '<', now()->subDays($daysOld))
            ->delete();
    }

    /**
     * Delete all read notifications.
     */
    public function deleteReadNotifications(): int
    {
        return $this->readNotifications()->delete();
    }

    /**
     * Get notifications by type.
     */
    public function getNotificationsByType(string $type): \Illuminate\Database\Eloquent\Collection
    {
        return $this->databaseNotifications()
            ->where('type', $type)
            ->get();
    }

    /**
     * Get paginated notifications.
     */
    public function getPaginatedNotifications(int $perPage = 15)
    {
        return $this->databaseNotifications()->paginate($perPage);
    }
}
