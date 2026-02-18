<?php

namespace App\Services;

use App\Models\Setting;

class LoginSettingsService
{
    /**
     * Default login settings.
     */
    protected array $defaults = [
        'app_name' => '',
        'title' => 'Welcome back',
        'subtitle' => 'Enter your credentials to access your account',
        'image' => '/img/dev.png',
        'logo' => '',
        'quote_text' => 'Kouchlyhour has streamlined our workflow and boosted productivity. The elegant design and powerful features make it a joy to use every day.',
        'quote_author' => 'Kouchlyhour',
        'quote_company' => 'Ly hour kouch Manager at Innovate Inc.',
        'show_social_login' => true,
        'show_remember_me' => true,
    ];

    /**
     * Get default settings.
     */
    public function getDefaults(): array
    {
        $defaults = $this->defaults;
        $defaults['app_name'] = config('app.name', 'Kouchlyhour');

        return $defaults;
    }

    /**
     * Get all login settings merged with defaults.
     */
    public function getSettings(): array
    {
        $settings = Setting::getGroup('login');

        return array_merge($this->getDefaults(), $settings);
    }

    /**
     * Get default image path.
     */
    public function getDefaultImage(): string
    {
        return $this->defaults['image'];
    }
}
