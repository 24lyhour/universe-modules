<?php

namespace Modules\Porfolio\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Porfolio\Models\SiteSetting;

class SiteSettingSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            // General Settings
            [
                'group' => 'general',
                'key' => 'site_name',
                'value' => 'Portfolio',
                'type' => 'text',
                'label' => 'Site Name',
                'description' => 'The name of your website',
                'is_public' => true,
                'sort_order' => 1,
            ],
            [
                'group' => 'general',
                'key' => 'site_tagline',
                'value' => 'Creative Digital Agency',
                'type' => 'text',
                'label' => 'Site Tagline',
                'description' => 'A short description of your website',
                'is_public' => true,
                'sort_order' => 2,
            ],
            [
                'group' => 'general',
                'key' => 'site_logo',
                'value' => '/images/logo.svg',
                'type' => 'image',
                'label' => 'Site Logo',
                'description' => 'The main logo of your website',
                'is_public' => true,
                'sort_order' => 3,
            ],
            [
                'group' => 'general',
                'key' => 'favicon',
                'value' => '/favicon.ico',
                'type' => 'image',
                'label' => 'Favicon',
                'description' => 'The favicon for your website',
                'is_public' => true,
                'sort_order' => 4,
            ],

            // Contact Settings
            [
                'group' => 'contact',
                'key' => 'contact_email',
                'value' => 'hello@example.com',
                'type' => 'email',
                'label' => 'Contact Email',
                'description' => 'Main contact email address',
                'is_public' => true,
                'sort_order' => 1,
            ],
            [
                'group' => 'contact',
                'key' => 'contact_phone',
                'value' => '+1 (555) 123-4567',
                'type' => 'text',
                'label' => 'Contact Phone',
                'description' => 'Main contact phone number',
                'is_public' => true,
                'sort_order' => 2,
            ],
            [
                'group' => 'contact',
                'key' => 'contact_address',
                'value' => '123 Creative Street, Design City, DC 12345',
                'type' => 'textarea',
                'label' => 'Address',
                'description' => 'Physical address',
                'is_public' => true,
                'sort_order' => 3,
            ],

            // Social Media
            [
                'group' => 'social',
                'key' => 'social_twitter',
                'value' => 'https://twitter.com/',
                'type' => 'url',
                'label' => 'Twitter URL',
                'description' => 'Your Twitter profile URL',
                'is_public' => true,
                'sort_order' => 1,
            ],
            [
                'group' => 'social',
                'key' => 'social_linkedin',
                'value' => 'https://linkedin.com/',
                'type' => 'url',
                'label' => 'LinkedIn URL',
                'description' => 'Your LinkedIn profile URL',
                'is_public' => true,
                'sort_order' => 2,
            ],
            [
                'group' => 'social',
                'key' => 'social_github',
                'value' => 'https://github.com/',
                'type' => 'url',
                'label' => 'GitHub URL',
                'description' => 'Your GitHub profile URL',
                'is_public' => true,
                'sort_order' => 3,
            ],
            [
                'group' => 'social',
                'key' => 'social_instagram',
                'value' => 'https://instagram.com/',
                'type' => 'url',
                'label' => 'Instagram URL',
                'description' => 'Your Instagram profile URL',
                'is_public' => true,
                'sort_order' => 4,
            ],

            // SEO Settings
            [
                'group' => 'seo',
                'key' => 'meta_title',
                'value' => 'Portfolio - Creative Digital Agency',
                'type' => 'text',
                'label' => 'Default Meta Title',
                'description' => 'Default title for search engines',
                'is_public' => true,
                'sort_order' => 1,
            ],
            [
                'group' => 'seo',
                'key' => 'meta_description',
                'value' => 'We create stunning digital experiences that help businesses grow.',
                'type' => 'textarea',
                'label' => 'Default Meta Description',
                'description' => 'Default description for search engines',
                'is_public' => true,
                'sort_order' => 2,
            ],

            // Appearance
            [
                'group' => 'appearance',
                'key' => 'primary_color',
                'value' => '#3B82F6',
                'type' => 'color',
                'label' => 'Primary Color',
                'description' => 'Main brand color',
                'is_public' => true,
                'sort_order' => 1,
            ],
            [
                'group' => 'appearance',
                'key' => 'secondary_color',
                'value' => '#10B981',
                'type' => 'color',
                'label' => 'Secondary Color',
                'description' => 'Secondary brand color',
                'is_public' => true,
                'sort_order' => 2,
            ],
        ];

        foreach ($settings as $setting) {
            SiteSetting::create($setting);
        }
    }
}
