<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Setting extends Model
{
    protected $fillable = [
        'group',
        'key',
        'value',
        'type',
    ];

    /**
     * Get a setting value by group and key.
     */
    public static function getValue(string $group, string $key, mixed $default = null): mixed
    {
        try {
            $cacheKey = "settings.{$group}.{$key}";

            return Cache::remember($cacheKey, 3600, function () use ($group, $key, $default) {
                $setting = static::where('group', $group)->where('key', $key)->first();

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
     * Set a setting value.
     */
    public static function setValue(string $group, string $key, mixed $value, string $type = 'string'): void
    {
        static::updateOrCreate(
            ['group' => $group, 'key' => $key],
            ['value' => (string) $value, 'type' => $type]
        );

        Cache::forget("settings.{$group}.{$key}");
        Cache::forget("settings.{$group}");
    }

    /**
     * Get all settings for a group.
     */
    public static function getGroup(string $group): array
    {
        try {
            $cacheKey = "settings.{$group}";

            return Cache::remember($cacheKey, 3600, function () use ($group) {
                $settings = static::where('group', $group)->get();

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
     * Clear cache for a group.
     */
    public static function clearGroupCache(string $group): void
    {
        $settings = static::where('group', $group)->get();

        foreach ($settings as $setting) {
            Cache::forget("settings.{$group}.{$setting->key}");
        }

        Cache::forget("settings.{$group}");
    }
}
