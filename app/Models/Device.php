<?php

namespace App\Models;

use App\Traits\HasUuid;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Support\Str;

/**
 * Device Model
 *
 * Tracks user devices for push notifications and login security.
 * Supports polymorphic relationships (User, Customer, Employee, etc.)
 *
 * @property int $id
 * @property string $uuid
 * @property string $deviceable_type
 * @property int $deviceable_id
 * @property string|null $device_id
 * @property string $device_type
 * @property string|null $device_name
 * @property string|null $fcm_token
 * @property string|null $device_os
 * @property string|null $device_os_version
 * @property string|null $device_model
 * @property string|null $device_brand
 * @property string|null $browser
 * @property string|null $browser_version
 * @property string|null $ip_address
 * @property string|null $location
 * @property float|null $latitude
 * @property float|null $longitude
 * @property \Carbon\Carbon|null $last_used_at
 * @property \Carbon\Carbon|null $last_login_at
 * @property bool $is_active
 * @property bool $is_trusted
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
class Device extends Model
{
    protected $table = 'devices';

    protected $fillable = [
        'uuid',
        'deviceable_type',
        'deviceable_id',
        'device_id',
        'device_type',
        'device_name',
        'fcm_token',
        'device_os',
        'device_os_version',
        'device_model',
        'device_brand',
        'browser',
        'browser_version',
        'ip_address',
        'location',
        'latitude',
        'longitude',
        'last_used_at',
        'last_login_at',
        'is_active',
        'is_trusted',
    ];

    protected $casts = [
        'deviceable_id' => 'integer',
        'latitude' => 'decimal:8',
        'longitude' => 'decimal:8',
        'last_used_at' => 'datetime',
        'last_login_at' => 'datetime',
        'is_active' => 'boolean',
        'is_trusted' => 'boolean',
    ];

    protected $hidden = [
        'fcm_token',
    ];

    /**
     * Boot the model.
     */
    protected static function boot(): void
    {
        parent::boot();

        static::creating(function (Device $device) {
            if (empty($device->uuid)) {
                $device->uuid = (string) Str::uuid();
            }
        });
    }

    // =========================================================================
    // RELATIONSHIPS
    // =========================================================================

    /**
     * Get the owning model (User, Customer, Employee, etc.).
     */
    public function deviceable(): MorphTo
    {
        return $this->morphTo();
    }

    // =========================================================================
    // SCOPES
    // =========================================================================

    /**
     * Scope to active devices only.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope to trusted devices.
     */
    public function scopeTrusted($query)
    {
        return $query->where('is_trusted', true);
    }

    /**
     * Scope to devices with FCM token.
     */
    public function scopeWithFcmToken($query)
    {
        return $query->whereNotNull('fcm_token');
    }

    /**
     * Scope to a specific device type.
     */
    public function scopeOfType($query, string $type)
    {
        return $query->where('device_type', $type);
    }

    /**
     * Scope to devices used recently.
     */
    public function scopeRecentlyUsed($query, int $days = 30)
    {
        return $query->where('last_used_at', '>=', now()->subDays($days));
    }

    // =========================================================================
    // METHODS
    // =========================================================================

    /**
     * Update the last used timestamp.
     */
    public function touchLastUsed(): self
    {
        $this->update(['last_used_at' => now()]);
        return $this;
    }

    /**
     * Record a login.
     */
    public function recordLogin(?string $ipAddress = null): self
    {
        $data = [
            'last_login_at' => now(),
            'last_used_at' => now(),
        ];

        if ($ipAddress) {
            $data['ip_address'] = $ipAddress;
        }

        $this->update($data);
        return $this;
    }

    /**
     * Update FCM token.
     */
    public function updateFcmToken(string $token): self
    {
        $this->update(['fcm_token' => $token]);
        return $this;
    }

    /**
     * Mark device as trusted.
     */
    public function markAsTrusted(): self
    {
        $this->update(['is_trusted' => true]);
        return $this;
    }

    /**
     * Mark device as untrusted.
     */
    public function markAsUntrusted(): self
    {
        $this->update(['is_trusted' => false]);
        return $this;
    }

    /**
     * Deactivate the device.
     */
    public function deactivate(): self
    {
        $this->update([
            'is_active' => false,
            'fcm_token' => null,
        ]);
        return $this;
    }

    /**
     * Activate the device.
     */
    public function activate(): self
    {
        $this->update(['is_active' => true]);
        return $this;
    }

    /**
     * Check if this is a new/unknown device for the user.
     */
    public static function isNewDevice(
        Model $user,
        ?string $deviceId = null,
        ?string $ipAddress = null,
        ?string $userAgent = null
    ): bool {
        $query = static::where('deviceable_type', get_class($user))
            ->where('deviceable_id', $user->getKey())
            ->where('is_active', true);

        // Check by device_id if provided
        if ($deviceId) {
            return !$query->where('device_id', $deviceId)->exists();
        }

        // Fallback: check by IP + browser combination
        if ($ipAddress && $userAgent) {
            $browser = static::parseBrowser($userAgent);
            return !$query->where('ip_address', $ipAddress)
                ->where('browser', $browser)
                ->exists();
        }

        // If no identifiers, consider it new
        return true;
    }

    /**
     * Create or update a device for a user.
     */
    public static function registerDevice(Model $user, array $data): self
    {
        $deviceId = $data['device_id'] ?? null;

        // Try to find existing device
        $device = null;
        if ($deviceId) {
            $device = static::where('deviceable_type', get_class($user))
                ->where('deviceable_id', $user->getKey())
                ->where('device_id', $deviceId)
                ->first();
        }

        if ($device) {
            // Update existing device
            $device->update(array_merge($data, [
                'last_used_at' => now(),
                'is_active' => true,
            ]));
        } else {
            // Create new device
            $device = static::create(array_merge($data, [
                'deviceable_type' => get_class($user),
                'deviceable_id' => $user->getKey(),
                'last_used_at' => now(),
                'is_active' => true,
            ]));
        }

        return $device;
    }

    /**
     * Parse browser from user agent.
     */
    public static function parseBrowser(?string $userAgent): ?string
    {
        if (!$userAgent) {
            return null;
        }

        if (str_contains($userAgent, 'Firefox')) return 'Firefox';
        if (str_contains($userAgent, 'Edg')) return 'Edge';
        if (str_contains($userAgent, 'Chrome')) return 'Chrome';
        if (str_contains($userAgent, 'Safari')) return 'Safari';
        if (str_contains($userAgent, 'Opera')) return 'Opera';

        return 'Unknown';
    }

    /**
     * Parse OS from user agent.
     */
    public static function parseOS(?string $userAgent): ?string
    {
        if (!$userAgent) {
            return null;
        }

        if (str_contains($userAgent, 'Windows')) return 'Windows';
        if (str_contains($userAgent, 'Mac')) return 'macOS';
        if (str_contains($userAgent, 'Linux')) return 'Linux';
        if (str_contains($userAgent, 'Android')) return 'Android';
        if (str_contains($userAgent, 'iPhone') || str_contains($userAgent, 'iPad')) return 'iOS';

        return 'Unknown';
    }

    /**
     * Get device display name.
     */
    public function getDisplayName(): string
    {
        if ($this->device_name) {
            return $this->device_name;
        }

        $parts = array_filter([
            $this->device_brand,
            $this->device_model,
        ]);

        if (!empty($parts)) {
            return implode(' ', $parts);
        }

        return $this->device_type . ' - ' . ($this->browser ?? 'Unknown');
    }

    /**
     * Get a summary of the device for display.
     */
    public function getSummary(): array
    {
        return [
            'id' => $this->id,
            'uuid' => $this->uuid,
            'name' => $this->getDisplayName(),
            'type' => $this->device_type,
            'os' => $this->device_os,
            'browser' => $this->browser,
            'location' => $this->location,
            'ip' => $this->ip_address,
            'last_used' => $this->last_used_at?->diffForHumans(),
            'is_trusted' => $this->is_trusted,
            'is_current' => false, // Set by caller
        ];
    }
}
