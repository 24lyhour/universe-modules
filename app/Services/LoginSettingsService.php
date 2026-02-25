<?php

namespace App\Services;

use App\Models\Setting;

class LoginSettingsService
{
    /**
     * Default login settings.
     */
    protected array $defaults = [
        'app_name' => 'Kouchlyhour',
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

    public function __construct(
        protected TenantService $tenantService
    ) {}

    /**
     * Get default settings.
     */
    public function getDefaults(): array
    {
        return $this->defaults;
    }

    /**
     * Get all login settings merged with defaults.
     * Uses tenant-specific settings if user has a tenant, falls back to global.
     */
    public function getSettings(): array
    {
        try {
            if ($this->tenantService->hasTenant()) {
                $settings = Setting::getTenantGroup(
                    'login',
                    $this->tenantService->getTenantType(),
                    $this->tenantService->getTenantId()
                );
            } else {
                $settings = Setting::getGroup('login');
            }
        } catch (\Exception $e) {
            // If database/cache fails, return defaults to prevent 502
            report($e);
            $settings = [];
        }

        return array_merge($this->getDefaults(), $settings);
    }

    /**
     * Get settings for a specific tenant.
     */
    public function getSettingsForTenant(?string $tenantType, ?int $tenantId): array
    {
        try {
            $settings = Setting::getTenantGroup('login', $tenantType, $tenantId);
        } catch (\Exception $e) {
            report($e);
            $settings = [];
        }

        return array_merge($this->getDefaults(), $settings);
    }

    /**
     * Get current tenant info for display purposes.
     */
    public function getCurrentTenantInfo(): ?array
    {
        if (! $this->tenantService->hasTenant()) {
            return null;
        }

        return [
            'type' => $this->tenantService->getShortTenantType(),
            'name' => $this->tenantService->getTenantName(),
            'id' => $this->tenantService->getTenantId(),
            'full_type' => $this->tenantService->getTenantType(),
        ];
    }

    /**
     * Check if current user has a tenant.
     */
    public function hasTenant(): bool
    {
        return $this->tenantService->hasTenant();
    }

    /**
     * Get default image path.
     */
    public function getDefaultImage(): string
    {
        return $this->defaults['image'];
    }
}
