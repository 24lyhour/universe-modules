<?php

namespace App\Actions\Settings;

use App\Models\Setting;
use App\Services\TenantService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UpdateLoginSettingsAction
{
    public function __construct(
        protected TenantService $tenantService
    ) {}

    /**
     * Update login settings (tenant-scoped if user has tenant).
     */
    public function execute(Request $request, array $validated): void
    {
        $hasTenant = $this->tenantService->hasTenant();
        $tenantType = $hasTenant ? $this->tenantService->getTenantType() : null;
        $tenantId = $hasTenant ? $this->tenantService->getTenantId() : null;

        // Handle image - either file upload or URL from media library
        if ($request->hasFile('image')) {
            $this->deleteOldImage($tenantType, $tenantId);
            $path = $request->file('image')->store('login', 'public');
            $validated['image'] = '/storage/'.$path;
        } elseif (! empty($validated['image_url'])) {
            $validated['image'] = $validated['image_url'];
        } else {
            unset($validated['image']);
        }
        unset($validated['image_url']);

        // Handle logo - either file upload or URL from media library
        if ($request->hasFile('logo')) {
            $this->deleteOldLogo($tenantType, $tenantId);
            $path = $request->file('logo')->store('login/logos', 'public');
            $validated['logo'] = '/storage/'.$path;
        } elseif (! empty($validated['logo_url'])) {
            $validated['logo'] = $validated['logo_url'];
        } else {
            unset($validated['logo']);
        }
        unset($validated['logo_url']);

        // Save settings (tenant-scoped or global)
        foreach ($validated as $key => $value) {
            $type = is_bool($value) ? 'boolean' : 'string';

            if ($hasTenant) {
                Setting::setTenantValue('login', $key, $value, $tenantType, $tenantId, $type);
            } else {
                Setting::setValue('login', $key, $value, $type);
            }
        }
    }

    /**
     * Delete old image if it exists in storage.
     */
    private function deleteOldImage(?string $tenantType, ?int $tenantId): void
    {
        $oldImage = $tenantType && $tenantId
            ? Setting::getTenantValue('login', 'image', $tenantType, $tenantId)
            : Setting::getValue('login', 'image');

        if ($oldImage && str_starts_with($oldImage, '/storage/')) {
            $path = str_replace('/storage/', '', $oldImage);
            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
        }
    }

    /**
     * Delete old logo if it exists in storage.
     */
    private function deleteOldLogo(?string $tenantType, ?int $tenantId): void
    {
        $oldLogo = $tenantType && $tenantId
            ? Setting::getTenantValue('login', 'logo', $tenantType, $tenantId)
            : Setting::getValue('login', 'logo');

        if ($oldLogo && str_starts_with($oldLogo, '/storage/')) {
            $path = str_replace('/storage/', '', $oldLogo);
            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
        }
    }
}
