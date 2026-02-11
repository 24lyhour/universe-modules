<?php

namespace Modules\Porfolio\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Cache;

class SiteSetting extends Model
{
    use HasFactory;

    protected $table = 'portfolio_site_settings';

    protected $fillable = [
        'group',
        'key',
        'value',
        'type',
        'label',
        'description',
        'options',
        'is_public',
        'sort_order',
    ];

    protected $casts = [
        'options' => 'array',
        'is_public' => 'boolean',
        'sort_order' => 'integer',
    ];

    /**
     * Setting types
     */
    const TYPE_TEXT = 'text';
    const TYPE_TEXTAREA = 'textarea';
    const TYPE_NUMBER = 'number';
    const TYPE_BOOLEAN = 'boolean';
    const TYPE_SELECT = 'select';
    const TYPE_IMAGE = 'image';
    const TYPE_COLOR = 'color';
    const TYPE_JSON = 'json';
    const TYPE_EMAIL = 'email';
    const TYPE_URL = 'url';

    /**
     * Setting groups
     */
    const GROUP_GENERAL = 'general';
    const GROUP_CONTACT = 'contact';
    const GROUP_SOCIAL = 'social';
    const GROUP_SEO = 'seo';
    const GROUP_APPEARANCE = 'appearance';
    const GROUP_ANALYTICS = 'analytics';

    /**
     * Get setting by key
     */
    public static function get(string $key, $default = null)
    {
        $setting = Cache::remember("site_setting_{$key}", 3600, function () use ($key) {
            return static::where('key', $key)->first();
        });

        if (!$setting) {
            return $default;
        }

        return static::castValue($setting->value, $setting->type);
    }

    /**
     * Set setting value
     */
    public static function set(string $key, $value): void
    {
        $setting = static::where('key', $key)->first();

        if ($setting) {
            $setting->update(['value' => $value]);
        } else {
            static::create([
                'key' => $key,
                'value' => $value,
                'type' => self::TYPE_TEXT,
            ]);
        }

        Cache::forget("site_setting_{$key}");
        Cache::forget('site_settings_all');
    }

    /**
     * Get all settings by group
     */
    public static function getByGroup(string $group): array
    {
        $settings = static::where('group', $group)->orderBy('sort_order')->get();

        $result = [];
        foreach ($settings as $setting) {
            $result[$setting->key] = static::castValue($setting->value, $setting->type);
        }

        return $result;
    }

    /**
     * Get all public settings
     */
    public static function getPublicSettings(): array
    {
        return Cache::remember('site_settings_public', 3600, function () {
            $settings = static::where('is_public', true)->get();

            $result = [];
            foreach ($settings as $setting) {
                $result[$setting->key] = static::castValue($setting->value, $setting->type);
            }

            return $result;
        });
    }

    /**
     * Cast value based on type
     */
    protected static function castValue($value, string $type)
    {
        return match ($type) {
            self::TYPE_BOOLEAN => (bool) $value,
            self::TYPE_NUMBER => (int) $value,
            self::TYPE_JSON => json_decode($value, true),
            default => $value,
        };
    }
}
