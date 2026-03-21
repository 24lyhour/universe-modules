<?php

namespace App\Traits;

use App\Events\NewDeviceLogin;
use App\Models\Device;
use Illuminate\Database\Eloquent\Relations\MorphMany;

/**
 * HasDevices Trait
 *
 * Provides device management capabilities to any model.
 * Handles device registration, FCM tokens, and new device detection.
 *
 * @example
 * class User extends Model {
 *     use HasDevices;
 * }
 *
 * // Register device on login
 * $device = $user->registerDevice([
 *     'device_id' => 'unique-id',
 *     'device_type' => 'mobile',
 *     'fcm_token' => 'token',
 *     'device_os' => 'iOS',
 * ]);
 *
 * // Check for new device
 * if ($user->isNewDevice($deviceId, $ip, $userAgent)) {
 *     // Send notification
 * }
 *
 * // Get all devices
 * $devices = $user->devices;
 * $activeDevices = $user->activeDevices;
 */
trait HasDevices
{
    // =========================================================================
    // RELATIONSHIPS
    // =========================================================================

    /**
     * Get all devices for this model.
     */
    public function devices(): MorphMany
    {
        return $this->morphMany(Device::class, 'deviceable');
    }

    /**
     * Get active devices.
     */
    public function activeDevices(): MorphMany
    {
        return $this->devices()->active();
    }

    /**
     * Get trusted devices.
     */
    public function trustedDevices(): MorphMany
    {
        return $this->devices()->trusted();
    }

    /**
     * Get devices with FCM tokens (for push notifications).
     */
    public function pushDevices(): MorphMany
    {
        return $this->devices()->active()->withFcmToken();
    }

    // =========================================================================
    // DEVICE REGISTRATION
    // =========================================================================

    /**
     * Register a device for this user.
     *
     * @param array $data Device data
     * @param bool $checkNewDevice Whether to dispatch NewDeviceLogin event
     * @return Device
     */
    public function registerDevice(array $data, bool $checkNewDevice = true): Device
    {
        $deviceId = $data['device_id'] ?? null;
        $ipAddress = $data['ip_address'] ?? request()->ip();
        $userAgent = $data['user_agent'] ?? request()->userAgent();

        // Check if this is a new device before registering
        $isNew = $checkNewDevice && Device::isNewDevice($this, $deviceId, $ipAddress, $userAgent);

        // Auto-parse browser and OS if not provided
        if (empty($data['browser']) && $userAgent) {
            $data['browser'] = Device::parseBrowser($userAgent);
        }
        if (empty($data['device_os']) && $userAgent) {
            $data['device_os'] = Device::parseOS($userAgent);
        }
        if (empty($data['ip_address'])) {
            $data['ip_address'] = $ipAddress;
        }

        // Register device
        $device = Device::registerDevice($this, $data);

        // Dispatch event if new device
        if ($isNew) {
            NewDeviceLogin::dispatch($this, [
                'device_id' => $device->id,
                'device_name' => $device->getDisplayName(),
                'ip' => $device->ip_address,
                'browser' => $device->browser,
                'os' => $device->device_os,
                'location' => $device->location,
            ], false);
        }

        return $device;
    }

    /**
     * Register device and record login in one call.
     */
    public function registerDeviceLogin(array $data): Device
    {
        $device = $this->registerDevice($data);
        $device->recordLogin($data['ip_address'] ?? request()->ip());
        return $device;
    }

    // =========================================================================
    // DEVICE CHECKS
    // =========================================================================

    /**
     * Check if this is a new/unknown device.
     */
    public function isNewDevice(
        ?string $deviceId = null,
        ?string $ipAddress = null,
        ?string $userAgent = null
    ): bool {
        return Device::isNewDevice($this, $deviceId, $ipAddress, $userAgent);
    }

    /**
     * Check if user has any registered devices.
     */
    public function hasDevices(): bool
    {
        return $this->devices()->exists();
    }

    /**
     * Check if user has any active devices with FCM tokens.
     */
    public function hasPushDevices(): bool
    {
        return $this->pushDevices()->exists();
    }

    // =========================================================================
    // FCM TOKEN MANAGEMENT
    // =========================================================================

    /**
     * Get all active FCM tokens for this user.
     */
    public function getFcmTokens(): array
    {
        return $this->pushDevices()
            ->pluck('fcm_token')
            ->filter()
            ->unique()
            ->values()
            ->toArray();
    }

    /**
     * Get the most recent FCM token.
     */
    public function getLatestFcmToken(): ?string
    {
        return $this->pushDevices()
            ->orderByDesc('last_used_at')
            ->value('fcm_token');
    }

    /**
     * Update FCM token for a device.
     */
    public function updateDeviceFcmToken(string $deviceId, string $fcmToken): ?Device
    {
        $device = $this->devices()->where('device_id', $deviceId)->first();

        if ($device) {
            $device->updateFcmToken($fcmToken);
            return $device;
        }

        return null;
    }

    /**
     * Store FCM token (creates device if not exists).
     */
    public function storeFcmToken(string $fcmToken, array $deviceData = []): Device
    {
        // Check if token already exists on another device
        $existingDevice = $this->devices()
            ->where('fcm_token', $fcmToken)
            ->first();

        if ($existingDevice) {
            $existingDevice->touchLastUsed();
            return $existingDevice;
        }

        // Create new device with token
        return $this->registerDevice(array_merge($deviceData, [
            'fcm_token' => $fcmToken,
            'device_type' => $deviceData['device_type'] ?? 'mobile',
        ]), false);
    }

    /**
     * Remove FCM token (for logout).
     */
    public function removeFcmToken(string $fcmToken): bool
    {
        return $this->devices()
            ->where('fcm_token', $fcmToken)
            ->update(['fcm_token' => null]) > 0;
    }

    // =========================================================================
    // DEVICE MANAGEMENT
    // =========================================================================

    /**
     * Get device by ID.
     */
    public function getDevice(int $deviceId): ?Device
    {
        return $this->devices()->find($deviceId);
    }

    /**
     * Get device by UUID.
     */
    public function getDeviceByUuid(string $uuid): ?Device
    {
        return $this->devices()->where('uuid', $uuid)->first();
    }

    /**
     * Deactivate a device (logout from device).
     */
    public function deactivateDevice(int $deviceId): bool
    {
        $device = $this->getDevice($deviceId);

        if ($device) {
            $device->deactivate();
            return true;
        }

        return false;
    }

    /**
     * Deactivate all devices (logout from all devices).
     */
    public function deactivateAllDevices(): int
    {
        return $this->devices()->update([
            'is_active' => false,
            'fcm_token' => null,
        ]);
    }

    /**
     * Deactivate all devices except the current one.
     */
    public function deactivateOtherDevices(int $currentDeviceId): int
    {
        return $this->devices()
            ->where('id', '!=', $currentDeviceId)
            ->update([
                'is_active' => false,
                'fcm_token' => null,
            ]);
    }

    /**
     * Trust a device.
     */
    public function trustDevice(int $deviceId): bool
    {
        $device = $this->getDevice($deviceId);

        if ($device) {
            $device->markAsTrusted();
            return true;
        }

        return false;
    }

    /**
     * Untrust a device.
     */
    public function untrustDevice(int $deviceId): bool
    {
        $device = $this->getDevice($deviceId);

        if ($device) {
            $device->markAsUntrusted();
            return true;
        }

        return false;
    }

    /**
     * Delete a device permanently.
     */
    public function deleteDevice(int $deviceId): bool
    {
        return $this->devices()->where('id', $deviceId)->delete() > 0;
    }

    /**
     * Delete inactive devices older than X days.
     */
    public function cleanOldDevices(int $daysOld = 90): int
    {
        return $this->devices()
            ->where('is_active', false)
            ->where('updated_at', '<', now()->subDays($daysOld))
            ->delete();
    }

    // =========================================================================
    // DEVICE INFO
    // =========================================================================

    /**
     * Get all devices as summary array.
     */
    public function getDevicesSummary(): array
    {
        return $this->devices()
            ->orderByDesc('last_used_at')
            ->get()
            ->map(fn(Device $device) => $device->getSummary())
            ->toArray();
    }

    /**
     * Get device count.
     */
    public function getDevicesCount(): int
    {
        return $this->devices()->count();
    }

    /**
     * Get active device count.
     */
    public function getActiveDevicesCount(): int
    {
        return $this->activeDevices()->count();
    }

    // =========================================================================
    // GPS / LOCATION MANAGEMENT
    // =========================================================================

    /**
     * Get devices with location data.
     */
    public function devicesWithLocation(): MorphMany
    {
        return $this->devices()->withLocation();
    }

    /**
     * Get devices with GPS enabled.
     */
    public function gpsEnabledDevices(): MorphMany
    {
        return $this->devices()->active()->gpsEnabled();
    }

    /**
     * Update location for a device.
     *
     * @param int $deviceId
     * @param float $latitude
     * @param float $longitude
     * @param float|null $accuracy
     * @param string|null $location
     * @return Device|null
     */
    public function updateDeviceLocation(
        int $deviceId,
        float $latitude,
        float $longitude,
        ?float $accuracy = null,
        ?string $location = null
    ): ?Device {
        $device = $this->getDevice($deviceId);

        if ($device) {
            $device->updateLocation($latitude, $longitude, $accuracy, $location);
            return $device;
        }

        return null;
    }

    /**
     * Update location for a device by device_id (mobile identifier).
     */
    public function updateDeviceLocationById(
        string $deviceUniqueId,
        float $latitude,
        float $longitude,
        ?float $accuracy = null,
        ?string $location = null
    ): ?Device {
        $device = $this->devices()->where('device_id', $deviceUniqueId)->first();

        if ($device) {
            $device->updateLocation($latitude, $longitude, $accuracy, $location);
            return $device;
        }

        return null;
    }

    /**
     * Get all device locations.
     */
    public function getDeviceLocations(): array
    {
        return $this->devicesWithLocation()
            ->active()
            ->orderByDesc('location_updated_at')
            ->get()
            ->map(fn(Device $device) => [
                'id' => $device->id,
                'uuid' => $device->uuid,
                'name' => $device->getDisplayName(),
                'location' => $device->getLocationSummary(),
            ])
            ->toArray();
    }

    /**
     * Get latest location from any device.
     */
    public function getLatestLocation(): ?array
    {
        $device = $this->devicesWithLocation()
            ->active()
            ->orderByDesc('location_updated_at')
            ->first();

        return $device?->getCoordinates();
    }

    /**
     * Get devices within radius of a point.
     *
     * @param float $latitude Center latitude
     * @param float $longitude Center longitude
     * @param float $radiusKm Radius in kilometers
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getDevicesWithinRadius(
        float $latitude,
        float $longitude,
        float $radiusKm
    ) {
        return $this->devices()
            ->active()
            ->withinRadius($latitude, $longitude, $radiusKm)
            ->get();
    }

    /**
     * Check if any device is within radius of a point.
     */
    public function hasDeviceWithinRadius(
        float $latitude,
        float $longitude,
        float $radiusKm
    ): bool {
        return $this->devices()
            ->active()
            ->withinRadius($latitude, $longitude, $radiusKm)
            ->exists();
    }

    /**
     * Clear location for all devices.
     */
    public function clearAllDeviceLocations(): int
    {
        return $this->devices()->update([
            'latitude' => null,
            'longitude' => null,
            'accuracy' => null,
            'location_updated_at' => null,
            'gps_enabled' => false,
        ]);
    }
}
