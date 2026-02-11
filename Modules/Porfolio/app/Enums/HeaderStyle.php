<?php

namespace Modules\Porfolio\Enums;

enum HeaderStyle: string
{
    case DEFAULT = 'default';
    case CENTERED = 'centered';
    case MINIMAL = 'minimal';
    case FULL_WIDTH = 'full-width';

    public function label(): string
    {
        return match ($this) {
            self::DEFAULT => 'Default',
            self::CENTERED => 'Centered',
            self::MINIMAL => 'Minimal',
            self::FULL_WIDTH => 'Full Width',
        };
    }

    public static function options(): array
    {
        return array_map(
            fn(self $style) => ['value' => $style->value, 'label' => $style->label()],
            self::cases()
        );
    }
}
