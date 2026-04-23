<?php

namespace App\Traits;

/**
 * Reusable notification channel preferences (Push, Email, Telegram).
 *
 * Stored in a single JSON column `notification_settings` on the host model:
 *   { "frm_token": true, "email": true, "telegram": false }
 *
 * Add this column with a migration:
 *   $table->json('notification_settings')->nullable()->after('status');
 *
 * Usage:
 *   class User extends Model {
 *       use HasNotificationSettings;
 *   }
 *
 *   $user->notifiesVia('email');          // bool
 *   $user->enableNotification('frm_token');
 *   $user->disableNotification('telegram');
 *   $user->setNotificationSettings(['frm_token' => false, 'email' => true]);
 *   $user->enabledChannels();             // ['email']
 */
trait HasNotificationSettings
{
    /**
     * Notification channels this trait understands.
     * Override in the model to restrict which channels apply.
     *
     * @var array<int, string>
     */
    protected array $notificationChannels = ['frm_token', 'email', 'telegram'];

    /**
     * Default state for a channel when no preference has been set.
     * Defaults to "enabled" for every channel — opt-out model.
     */
    protected function defaultNotificationSetting(string $channel): bool
    {
        return true;
    }

    /**
     * Boot the trait — ensure the column is cast to array.
     */
    protected static function bootHasNotificationSettings(): void
    {
        static::retrieved(function ($model) {
            $casts = $model->getCasts();
            if (!isset($casts['notification_settings'])) {
                $model->mergeCasts(['notification_settings' => 'array']);
            }
        });
    }

    /**
     * Is the given channel enabled for this model?
     */
    public function notifiesVia(string $channel): bool
    {
        $channel = strtolower($channel);
        if (!in_array($channel, $this->notificationChannels, true)) {
            return false;
        }

        $settings = $this->notification_settings ?? [];
        return (bool) ($settings[$channel] ?? $this->defaultNotificationSetting($channel));
    }

    /**
     * Enable a channel.
     */
    public function enableNotification(string $channel): bool
    {
        return $this->setChannelState($channel, true);
    }

    /**
     * Disable a channel.
     */
    public function disableNotification(string $channel): bool
    {
        return $this->setChannelState($channel, false);
    }

    /**
     * Toggle a channel and return the new state.
     */
    public function toggleNotification(string $channel): bool
    {
        $next = !$this->notifiesVia($channel);
        $this->setChannelState($channel, $next);
        return $next;
    }

    /**
     * Replace all settings at once. Unknown channels are ignored.
     *
     * @param  array<string, bool>  $settings
     */
    public function setNotificationSettings(array $settings): bool
    {
        $current = $this->notification_settings ?? [];
        foreach ($settings as $channel => $enabled) {
            $channel = strtolower($channel);
            if (in_array($channel, $this->notificationChannels, true)) {
                $current[$channel] = (bool) $enabled;
            }
        }
        $this->notification_settings = $current;
        return $this->save();
    }

    /**
     * List of currently enabled channels.
     *
     * @return array<int, string>
     */
    public function enabledChannels(): array
    {
        return array_values(array_filter(
            $this->notificationChannels,
            fn (string $c) => $this->notifiesVia($c),
        ));
    }

    /**
     * Full resolved state for UI (every channel → bool).
     *
     * @return array<string, bool>
     */
    public function notificationSettingsResolved(): array
    {
        $out = [];
        foreach ($this->notificationChannels as $channel) {
            $out[$channel] = $this->notifiesVia($channel);
        }
        return $out;
    }

    /**
     * Convenience shortcuts.
     */
    public function isTokenPushEnabled(): bool
    {
        return $this->notifiesVia('frm_token');
    }

    public function isEmailEnabled(): bool
    {
        return $this->notifiesVia('email');
    }

    public function isTelegramEnabled(): bool
    {
        return $this->notifiesVia('telegram');
    }

    protected function setChannelState(string $channel, bool $state): bool
    {
        $channel = strtolower($channel);
        if (!in_array($channel, $this->notificationChannels, true)) {
            return false;
        }
        $current = $this->notification_settings ?? [];
        $current[$channel] = $state;
        $this->notification_settings = $current;
        return $this->save();
    }
}
