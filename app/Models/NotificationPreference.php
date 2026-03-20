<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

/**
 * NotificationPreference
 *
 * Stores notification channel preferences for any notifiable model.
 * Supports multi-tenant configurations.
 *
 * @property int $id
 * @property string $notifiable_type
 * @property int $notifiable_id
 * @property array $preferences
 * @property string|null $tenant_type
 * @property int|null $tenant_id
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
class NotificationPreference extends Model
{
    protected $fillable = [
        'notifiable_type',
        'notifiable_id',
        'preferences',
        'tenant_type',
        'tenant_id',
    ];

    protected $casts = [
        'preferences' => 'array',
        'notifiable_id' => 'integer',
        'tenant_id' => 'integer',
    ];

    /**
     * Default channel preferences.
     */
    protected static array $defaultPreferences = [
        'push' => true,
        'email' => true,
        'database' => true,
        'sms' => false,
        'telegram' => false,
        'whatsapp' => false,
    ];

    /**
     * Get the notifiable model.
     */
    public function notifiable(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * Get the tenant model.
     */
    public function tenant(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * Check if a specific channel is enabled.
     */
    public function isChannelEnabled(string $channel): bool
    {
        $preferences = $this->preferences ?? [];

        // If not explicitly set, use default
        if (!isset($preferences[$channel])) {
            return self::$defaultPreferences[$channel] ?? true;
        }

        return (bool) $preferences[$channel];
    }

    /**
     * Get all enabled channels.
     */
    public function getEnabledChannels(): array
    {
        $preferences = array_merge(self::$defaultPreferences, $this->preferences ?? []);

        return array_keys(array_filter($preferences, fn($enabled) => $enabled === true));
    }

    /**
     * Enable a channel.
     */
    public function enableChannel(string $channel): self
    {
        $preferences = $this->preferences ?? [];
        $preferences[$channel] = true;
        $this->update(['preferences' => $preferences]);

        return $this;
    }

    /**
     * Disable a channel.
     */
    public function disableChannel(string $channel): self
    {
        $preferences = $this->preferences ?? [];
        $preferences[$channel] = false;
        $this->update(['preferences' => $preferences]);

        return $this;
    }

    /**
     * Toggle a channel.
     */
    public function toggleChannel(string $channel): self
    {
        if ($this->isChannelEnabled($channel)) {
            return $this->disableChannel($channel);
        }

        return $this->enableChannel($channel);
    }

    /**
     * Set multiple preferences at once.
     */
    public function setPreferences(array $preferences): self
    {
        $this->update(['preferences' => array_merge($this->preferences ?? [], $preferences)]);

        return $this;
    }

    /**
     * Reset to default preferences.
     */
    public function resetToDefaults(): self
    {
        $this->update(['preferences' => self::$defaultPreferences]);

        return $this;
    }

    /**
     * Scope to a specific notifiable.
     */
    public function scopeForNotifiable($query, Model $notifiable)
    {
        return $query->where('notifiable_type', get_class($notifiable))
            ->where('notifiable_id', $notifiable->getKey());
    }

    /**
     * Scope to a specific tenant.
     */
    public function scopeForTenant($query, string $tenantType, int $tenantId)
    {
        return $query->where('tenant_type', $tenantType)
            ->where('tenant_id', $tenantId);
    }
}
