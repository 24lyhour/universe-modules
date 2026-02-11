<?php

namespace Modules\Porfolio\Enums;

enum SettingGroup: string
{
    case GENERAL = 'general';
    case CONTACT = 'contact';
    case SOCIAL = 'social';
    case SEO = 'seo';
    case APPEARANCE = 'appearance';
    case ANALYTICS = 'analytics';

    public function label(): string
    {
        return match ($this) {
            self::GENERAL => 'General Settings',
            self::CONTACT => 'Contact Information',
            self::SOCIAL => 'Social Media',
            self::SEO => 'SEO Settings',
            self::APPEARANCE => 'Appearance',
            self::ANALYTICS => 'Analytics',
        };
    }

    public static function options(): array
    {
        return array_map(
            fn(self $group) => ['value' => $group->value, 'label' => $group->label()],
            self::cases()
        );
    }
}
