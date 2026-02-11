<?php

namespace Modules\Porfolio\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Modules\Porfolio\Models\Footer;

class FooterSeeder extends Seeder
{
    public function run(): void
    {
        Footer::create([
            'uuid' => Str::uuid(),
            'title' => 'Main Footer',
            'description' => 'Building exceptional digital experiences with passion and precision.',
            'copyright_text' => '© ' . date('Y') . ' Portfolio. All rights reserved.',
            'logo' => '/images/logo-white.svg',
            'social_links' => [
                ['platform' => 'twitter', 'url' => 'https://twitter.com/', 'icon' => 'twitter'],
                ['platform' => 'linkedin', 'url' => 'https://linkedin.com/', 'icon' => 'linkedin'],
                ['platform' => 'github', 'url' => 'https://github.com/', 'icon' => 'github'],
                ['platform' => 'instagram', 'url' => 'https://instagram.com/', 'icon' => 'instagram'],
            ],
            'contact_email' => 'hello@example.com',
            'contact_phone' => '+1 (555) 123-4567',
            'contact_address' => '123 Creative Street, Design City, DC 12345',
            'quick_links' => [
                ['label' => 'Home', 'url' => '/'],
                ['label' => 'About', 'url' => '/about'],
                ['label' => 'Portfolio', 'url' => '/portfolio'],
                ['label' => 'Services', 'url' => '/services'],
                ['label' => 'Contact', 'url' => '/contact'],
                ['label' => 'Privacy Policy', 'url' => '/privacy'],
            ],
            'newsletter_enabled' => true,
            'newsletter_title' => 'Subscribe to Our Newsletter',
            'newsletter_description' => 'Get the latest updates and insights delivered to your inbox.',
            'columns' => [
                [
                    'title' => 'Company',
                    'links' => [
                        ['label' => 'About Us', 'url' => '/about'],
                        ['label' => 'Our Team', 'url' => '/team'],
                        ['label' => 'Careers', 'url' => '/careers'],
                    ]
                ],
                [
                    'title' => 'Services',
                    'links' => [
                        ['label' => 'Web Development', 'url' => '/services/web-development'],
                        ['label' => 'Mobile Apps', 'url' => '/services/mobile-apps'],
                        ['label' => 'UI/UX Design', 'url' => '/services/design'],
                    ]
                ],
            ],
            'is_active' => true,
            'sort_order' => 1,
        ]);
    }
}
