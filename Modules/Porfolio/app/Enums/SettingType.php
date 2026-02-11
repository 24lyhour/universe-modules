<?php

namespace Modules\Porfolio\Enums;

enum SettingType: string
{
    case TEXT = 'text';
    case TEXTAREA = 'textarea';
    case NUMBER = 'number';
    case BOOLEAN = 'boolean';
    case SELECT = 'select';
    case IMAGE = 'image';
    case COLOR = 'color';
    case JSON = 'json';
    case EMAIL = 'email';
    case URL = 'url';

    public function label(): string
    {
        return match ($this) {
            self::TEXT => 'Text',
            self::TEXTAREA => 'Textarea',
            self::NUMBER => 'Number',
            self::BOOLEAN => 'Boolean',
            self::SELECT => 'Select',
            self::IMAGE => 'Image',
            self::COLOR => 'Color',
            self::JSON => 'JSON',
            self::EMAIL => 'Email',
            self::URL => 'URL',
        };
    }

    public static function options(): array
    {
        return array_map(
            fn(self $type) => ['value' => $type->value, 'label' => $type->label()],
            self::cases()
        );
    }
}
