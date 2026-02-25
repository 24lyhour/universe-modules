<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Support\Facades\Cache;

class Setting extends Model
{
    protected $fillable = [
        'group',
        'key',
        'value',
        'type',
        'tenant_type',
        'tenant_id',
    ];

    /**
     * Get the tenant that owns this setting.
     */
    public function tenant(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * Get a setting value by group and key (global settings only).
     */
    public static function getValue(string $group, string $key, mixed $default = null): mixed
    {
        try {
            $cacheKey = "settings.global.{$group}.{$key}";

            return Cache::remember($cacheKey, 3600, function () use ($group, $key, $default) {
                $setting = static::where('group', $group)
                    ->where('key', $key)
                    ->whereNull('tenant_type')
                    ->whereNull('tenant_id')
                    ->first();

                if (! $setting) {
                    return $default;
                }

                return static::castValue($setting->value, $setting->type);
            });
        } catch (\Exception $e) {
            report($e);

            return $default;
        }
    }

    /**
     * Get a tenant-specific setting value with fallback to global.
     */
    public static function getTenantValue(string $group, string $key, ?string $tenantType, ?int $tenantId, mixed $default = null): mixed
    {
        // If no tenant, return global setting
        if (! $tenantType || ! $tenantId) {
            return static::getValue($group, $key, $default);
        }

        try {
            $cacheKey = "settings.{$tenantType}.{$tenantId}.{$group}.{$key}";

            return Cache::remember($cacheKey, 3600, function () use ($group, $key, $tenantType, $tenantId, $default) {
                // First try tenant-specific setting
                $setting = static::where('group', $group)
                    ->where('key', $key)
                    ->where('tenant_type', $tenantType)
                    ->where('tenant_id', $tenantId)
                    ->first();

                if ($setting) {
                    return static::castValue($setting->value, $setting->type);
                }

                // Fallback to global setting
                $globalSetting = static::where('group', $group)
                    ->where('key', $key)
                    ->whereNull('tenant_type')
                    ->whereNull('tenant_id')
                    ->first();

                if ($globalSetting) {
                    return static::castValue($globalSetting->value, $globalSetting->type);
                }

                return $default;
            });
        } catch (\Exception $e) {
            report($e);

            return $default;
        }
    }

    /**
     * Set a setting value (global settings).
     */
    public static function setValue(string $group, string $key, mixed $value, string $type = 'string'): void
    {
        static::updateOrCreate(
            ['group' => $group, 'key' => $key, 'tenant_type' => null, 'tenant_id' => null],
            ['value' => (string) $value, 'type' => $type]
        );

        Cache::forget("settings.global.{$group}.{$key}");
        Cache::forget("settings.global.{$group}");
    }

    /**
     * Set a tenant-specific setting value.
     */
    public static function setTenantValue(string $group, string $key, mixed $value, string $tenantType, int $tenantId, string $type = 'string'): void
    {
        static::updateOrCreate(
            ['group' => $group, 'key' => $key, 'tenant_type' => $tenantType, 'tenant_id' => $tenantId],
            ['value' => (string) $value, 'type' => $type]
        );

        Cache::forget("settings.{$tenantType}.{$tenantId}.{$group}.{$key}");
        Cache::forget("settings.{$tenantType}.{$tenantId}.{$group}");
    }

    /**
     * Get all settings for a group (global settings only).
     */
    public static function getGroup(string $group): array
    {
        try {
            $cacheKey = "settings.global.{$group}";

            return Cache::remember($cacheKey, 3600, function () use ($group) {
                $settings = static::where('group', $group)
                    ->whereNull('tenant_type')
                    ->whereNull('tenant_id')
                    ->get();

                return $settings->mapWithKeys(function ($setting) {
                    return [$setting->key => static::castValue($setting->value, $setting->type)];
                })->toArray();
            });
        } catch (\Exception $e) {
            report($e);

            return [];
        }
    }

    /**
     * Get all tenant-specific settings for a group with fallback to global.
     */
    public static function getTenantGroup(string $group, ?string $tenantType, ?int $tenantId): array
    {
        // If no tenant, return global settings
        if (! $tenantType || ! $tenantId) {
            return static::getGroup($group);
        }

        try {
            $cacheKey = "settings.{$tenantType}.{$tenantId}.{$group}";

            return Cache::remember($cacheKey, 3600, function () use ($group, $tenantType, $tenantId) {
                // Get global settings first
                $globalSettings = static::where('group', $group)
                    ->whereNull('tenant_type')
                    ->whereNull('tenant_id')
                    ->get()
                    ->mapWithKeys(function ($setting) {
                        return [$setting->key => static::castValue($setting->value, $setting->type)];
                    })
                    ->toArray();

                // Get tenant-specific settings and override
                $tenantSettings = static::where('group', $group)
                    ->where('tenant_type', $tenantType)
                    ->where('tenant_id', $tenantId)
                    ->get()
                    ->mapWithKeys(function ($setting) {
                        return [$setting->key => static::castValue($setting->value, $setting->type)];
                    })
                    ->toArray();

                return array_merge($globalSettings, $tenantSettings);
            });
        } catch (\Exception $e) {
            report($e);

            return [];
        }
    }

    /**
     * Cast value based on type.
     */
    protected static function castValue(mixed $value, string $type): mixed
    {
        return match ($type) {
            'integer' => (int) $value,
            'boolean' => filter_var($value, FILTER_VALIDATE_BOOLEAN),
            'json' => json_decode($value, true),
            default => $value,
        };
    }

    /**
     * Clear cache for a group (both global and tenant-specific).
     */
    public static function clearGroupCache(string $group, ?string $tenantType = null, ?int $tenantId = null): void
    {
        if ($tenantType && $tenantId) {
            // Clear tenant-specific cache
            $settings = static::where('group', $group)
                ->where('tenant_type', $tenantType)
                ->where('tenant_id', $tenantId)
                ->get();

            foreach ($settings as $setting) {
                Cache::forget("settings.{$tenantType}.{$tenantId}.{$group}.{$setting->key}");
            }
            Cache::forget("settings.{$tenantType}.{$tenantId}.{$group}");
        }

        // Always clear global cache too
        $globalSettings = static::where('group', $group)
            ->whereNull('tenant_type')
            ->whereNull('tenant_id')
            ->get();

        foreach ($globalSettings as $setting) {
            Cache::forget("settings.global.{$group}.{$setting->key}");
        }
        Cache::forget("settings.global.{$group}");
    }
}
