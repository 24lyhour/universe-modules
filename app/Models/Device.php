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
 * @property float|null $accuracy GPS accuracy in meters
 * @property bool $gps_enabled Whether GPS is enabled on this device
 * @property \Carbon\Carbon|null $location_updated_at
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
        'accuracy',
        'gps_enabled',
        'location_updated_at',
        'last_used_at',
        'last_login_at',
        'is_active',
        'is_trusted',
    ];

    protected $casts = [
        'deviceable_id' => 'integer',
        'latitude' => 'decimal:8',
        'longitude' => 'decimal:8',
        'accuracy' => 'decimal:2',
        'gps_enabled' => 'boolean',
        'location_updated_at' => 'datetime',
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
            'has_location' => $this->hasLocation(),
            'gps_enabled' => $this->gps_enabled,
        ];
    }

    // =========================================================================
    // GPS / LOCATION METHODS
    // =========================================================================

    /**
     * Update device location.
     *
     * @param float $latitude
     * @param float $longitude
     * @param float|null $accuracy GPS accuracy in meters
     * @param string|null $location Human-readable location (City, Country)
     */
    public function updateLocation(
        float $latitude,
        float $longitude,
        ?float $accuracy = null,
        ?string $location = null
    ): self {
        $data = [
            'latitude' => $latitude,
            'longitude' => $longitude,
            'location_updated_at' => now(),
            'gps_enabled' => true,
        ];

        if ($accuracy !== null) {
            $data['accuracy'] = $accuracy;
        }

        if ($location !== null) {
            $data['location'] = $location;
        }

        $this->update($data);
        return $this;
    }

    /**
     * Check if device has location data.
     */
    public function hasLocation(): bool
    {
        return $this->latitude !== null && $this->longitude !== null;
    }

    /**
     * Check if location is recent (within specified minutes).
     */
    public function hasRecentLocation(int $minutes = 30): bool
    {
        if (!$this->hasLocation() || !$this->location_updated_at) {
            return false;
        }

        return $this->location_updated_at->diffInMinutes(now()) <= $minutes;
    }

    /**
     * Get coordinates as array.
     */
    public function getCoordinates(): ?array
    {
        if (!$this->hasLocation()) {
            return null;
        }

        return [
            'latitude' => (float) $this->latitude,
            'longitude' => (float) $this->longitude,
            'accuracy' => $this->accuracy ? (float) $this->accuracy : null,
            'updated_at' => $this->location_updated_at?->toIso8601String(),
        ];
    }

    /**
     * Calculate distance to another point in kilometers.
     * Uses Haversine formula.
     *
     * @param float $latitude Target latitude
     * @param float $longitude Target longitude
     * @return float|null Distance in kilometers, null if no location
     */
    public function distanceTo(float $latitude, float $longitude): ?float
    {
        if (!$this->hasLocation()) {
            return null;
        }

        return static::calculateDistance(
            (float) $this->latitude,
            (float) $this->longitude,
            $latitude,
            $longitude
        );
    }

    /**
     * Check if device is within radius of a point.
     *
     * @param float $latitude Target latitude
     * @param float $longitude Target longitude
     * @param float $radiusKm Radius in kilometers
     * @return bool True if within radius
     */
    public function isWithinRadius(float $latitude, float $longitude, float $radiusKm): bool
    {
        $distance = $this->distanceTo($latitude, $longitude);

        if ($distance === null) {
            return false;
        }

        return $distance <= $radiusKm;
    }

    /**
     * Calculate distance between two points using Haversine formula.
     *
     * @param float $lat1 Point 1 latitude
     * @param float $lon1 Point 1 longitude
     * @param float $lat2 Point 2 latitude
     * @param float $lon2 Point 2 longitude
     * @return float Distance in kilometers
     */
    public static function calculateDistance(
        float $lat1,
        float $lon1,
        float $lat2,
        float $lon2
    ): float {
        $earthRadius = 6371; // Earth's radius in kilometers

        $latDiff = deg2rad($lat2 - $lat1);
        $lonDiff = deg2rad($lon2 - $lon1);

        $a = sin($latDiff / 2) * sin($latDiff / 2) +
            cos(deg2rad($lat1)) * cos(deg2rad($lat2)) *
            sin($lonDiff / 2) * sin($lonDiff / 2);

        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));

        return $earthRadius * $c;
    }

    /**
     * Scope to devices with location data.
     */
    public function scopeWithLocation($query)
    {
        return $query->whereNotNull('latitude')->whereNotNull('longitude');
    }

    /**
     * Scope to devices with GPS enabled.
     */
    public function scopeGpsEnabled($query)
    {
        return $query->where('gps_enabled', true);
    }

    /**
     * Scope to devices within radius of a point.
     *
     * @param float $latitude Center latitude
     * @param float $longitude Center longitude
     * @param float $radiusKm Radius in kilometers
     */
    public function scopeWithinRadius($query, float $latitude, float $longitude, float $radiusKm)
    {
        // Using raw SQL for performance with large datasets
        // This uses the spherical law of cosines for simplicity
        $earthRadius = 6371;

        return $query->whereNotNull('latitude')
            ->whereNotNull('longitude')
            ->whereRaw("
                ({$earthRadius} * acos(
                    cos(radians(?)) * cos(radians(latitude)) *
                    cos(radians(longitude) - radians(?)) +
                    sin(radians(?)) * sin(radians(latitude))
                )) <= ?
            ", [$latitude, $longitude, $latitude, $radiusKm]);
    }

    /**
     * Scope to devices with recent location updates.
     */
    public function scopeRecentlyLocated($query, int $minutes = 30)
    {
        return $query->where('location_updated_at', '>=', now()->subMinutes($minutes));
    }

    /**
     * Clear location data.
     */
    public function clearLocation(): self
    {
        $this->update([
            'latitude' => null,
            'longitude' => null,
            'accuracy' => null,
            'location' => null,
            'location_updated_at' => null,
            'gps_enabled' => false,
        ]);

        return $this;
    }

    /**
     * Get location summary for API response.
     */
    public function getLocationSummary(): array
    {
        return [
            'has_location' => $this->hasLocation(),
            'gps_enabled' => $this->gps_enabled,
            'coordinates' => $this->getCoordinates(),
            'location_name' => $this->location,
            'is_recent' => $this->hasRecentLocation(),
        ];
    }
}
