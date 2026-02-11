<?php

namespace Modules\Porfolio\Enums;

enum PageTemplate: string
{
    case DEFAULT = 'default';
    case HOMEPAGE = 'homepage';
    case ABOUT = 'about';
    case PORTFOLIO = 'portfolio';
    case CONTACT = 'contact';
    case BLOG = 'blog';
    case SERVICES = 'services';
    case LANDING = 'landing';

    public function label(): string
    {
        return match ($this) {
            self::DEFAULT => 'Default',
            self::HOMEPAGE => 'Homepage',
            self::ABOUT => 'About',
            self::PORTFOLIO => 'Portfolio',
            self::CONTACT => 'Contact',
            self::BLOG => 'Blog',
            self::SERVICES => 'Services',
            self::LANDING => 'Landing Page',
        };
    }

    public static function options(): array
    {
        return array_map(
            fn(self $template) => ['value' => $template->value, 'label' => $template->label()],
            self::cases()
        );
    }
}
