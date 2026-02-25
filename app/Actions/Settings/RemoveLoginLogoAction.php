<?php

namespace App\Actions\Settings;

use App\Models\Setting;
use App\Services\TenantService;
use Illuminate\Support\Facades\Storage;

class RemoveLoginLogoAction
{
    public function __construct(
        protected TenantService $tenantService,
    ) {}

    /**
     * Remove the login logo.
     */
    public function execute(): void
    {
        $hasTenant = $this->tenantService->hasTenant();
        $tenantType = $hasTenant ? $this->tenantService->getTenantType() : null;
        $tenantId = $hasTenant ? $this->tenantService->getTenantId() : null;

        $currentLogo = $hasTenant
            ? Setting::getTenantValue('login', 'logo', $tenantType, $tenantId)
            : Setting::getValue('login', 'logo');

        if ($currentLogo && str_starts_with($currentLogo, '/storage/')) {
            $path = str_replace('/storage/', '', $currentLogo);
            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
        }

        // Clear logo
        if ($hasTenant) {
            Setting::setTenantValue('login', 'logo', '', $tenantType, $tenantId, 'string');
        } else {
            Setting::setValue('login', 'logo', '', 'string');
        }
    }
}
