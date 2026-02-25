<?php

namespace App\Actions\Settings;

use App\Models\Setting;
use App\Services\LoginSettingsService;
use App\Services\TenantService;
use Illuminate\Support\Facades\Storage;

class RemoveLoginImageAction
{
    public function __construct(
        protected LoginSettingsService $settingsService,
        protected TenantService $tenantService,
    ) {}

    /**
     * Remove the login background image and reset to default.
     */
    public function execute(): void
    {
        $hasTenant = $this->tenantService->hasTenant();
        $tenantType = $hasTenant ? $this->tenantService->getTenantType() : null;
        $tenantId = $hasTenant ? $this->tenantService->getTenantId() : null;

        $currentImage = $hasTenant
            ? Setting::getTenantValue('login', 'image', $tenantType, $tenantId)
            : Setting::getValue('login', 'image');

        if ($currentImage && str_starts_with($currentImage, '/storage/')) {
            $path = str_replace('/storage/', '', $currentImage);
            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
        }

        // Reset to default image
        if ($hasTenant) {
            Setting::setTenantValue('login', 'image', $this->settingsService->getDefaultImage(), $tenantType, $tenantId, 'string');
        } else {
            Setting::setValue('login', 'image', $this->settingsService->getDefaultImage(), 'string');
        }
    }
}
