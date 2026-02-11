<?php

namespace Modules\Porfolio\Enums;

enum SectionType: string
{
    case HERO = 'hero';
    case ABOUT = 'about';
    case SERVICES = 'services';
    case PORTFOLIO = 'portfolio';
    case TESTIMONIALS = 'testimonials';
    case TEAM = 'team';
    case CONTACT = 'contact';
    case CTA = 'cta';
    case FEATURES = 'features';
    case STATS = 'stats';
    case FAQ = 'faq';
    case PRICING = 'pricing';
    case GALLERY = 'gallery';
    case CUSTOM = 'custom';

    public function label(): string
    {
        return match ($this) {
            self::HERO => 'Hero Section',
            self::ABOUT => 'About Section',
            self::SERVICES => 'Services Section',
            self::PORTFOLIO => 'Portfolio Section',
            self::TESTIMONIALS => 'Testimonials Section',
            self::TEAM => 'Team Section',
            self::CONTACT => 'Contact Section',
            self::CTA => 'Call to Action',
            self::FEATURES => 'Features Section',
            self::STATS => 'Statistics Section',
            self::FAQ => 'FAQ Section',
            self::PRICING => 'Pricing Section',
            self::GALLERY => 'Gallery Section',
            self::CUSTOM => 'Custom Section',
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
