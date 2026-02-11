<?php

namespace Modules\Porfolio\Enums;

enum HeaderPosition: string
{
    case FIXED = 'fixed';
    case STICKY = 'sticky';
    case STATIC = 'static';

    public function label(): string
    {
        return match ($this) {
            self::FIXED => 'Fixed',
            self::STICKY => 'Sticky',
            self::STATIC => 'Static',
        };
    }

    public static function options(): array
    {
        return array_map(
            fn(self $position) => ['value' => $position->value, 'label' => $position->label()],
            self::cases()
        );
    }
}
