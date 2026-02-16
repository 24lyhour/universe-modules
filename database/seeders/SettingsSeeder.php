<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    /**
     * Seed the application settings.
     */
    public function run(): void
    {
        $this->seedWalletSettings();
        $this->seedLoginSettings();
    }

    /**
     * Seed wallet settings.
     */
    protected function seedWalletSettings(): void
    {
        $settings = [
            ['key' => 'id_prefix', 'value' => 'W', 'type' => 'string'],
            ['key' => 'id_padding', 'value' => '8', 'type' => 'integer'],
            ['key' => 'number_prefix', 'value' => 'WLT', 'type' => 'string'],
            ['key' => 'number_separator', 'value' => '-', 'type' => 'string'],
            ['key' => 'number_date_format', 'value' => 'Ymd', 'type' => 'string'],
            ['key' => 'number_random_length', 'value' => '5', 'type' => 'integer'],
            ['key' => 'default_currency', 'value' => 'USD', 'type' => 'string'],
        ];

        foreach ($settings as $setting) {
            Setting::firstOrCreate(
                ['group' => 'wallet', 'key' => $setting['key']],
                ['value' => $setting['value'], 'type' => $setting['type']]
            );
        }
    }

    /**
     * Seed login page settings.
     */
    protected function seedLoginSettings(): void
    {
        $settings = [
            ['key' => 'title', 'value'    => 'Welcome back', 'type' => 'string'],
            ['key' => 'subtitle', 'value' => 'Enter your credentials to access your account', 'type' => 'string'],
            ['key' => 'image', 'value'    => '/img/3.jpg', 'type' => 'string'],
            ['key' => 'logo', 'value' => '', 'type' => 'string'],
            ['key' => 'quote_text', 'value' => 'This platform has transformed how we manage our business operations. The intuitive interface and powerful features make it indispensable.', 'type' => 'string'],
            ['key' => 'quote_author', 'value' => 'Kouchlyhour', 'type' => 'string'],
            ['key' => 'quote_company', 'value' => 'CEO at Kouchlyhour', 'type' => 'string'],
            ['key' => 'show_social_login', 'value' => '1', 'type' => 'boolean'],
            ['key' => 'show_remember_me', 'value' => '1', 'type' => 'boolean'],
        ];

        foreach ($settings as $setting) {
            Setting::firstOrCreate(
                ['group' => 'login', 'key' => $setting['key']],
                ['value' => $setting['value'], 'type' => $setting['type']]
            );
        }
    }
}
