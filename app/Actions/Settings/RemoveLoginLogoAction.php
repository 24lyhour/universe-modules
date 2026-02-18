<?php

namespace App\Actions\Settings;

use App\Models\Setting;
use Illuminate\Support\Facades\Storage;

class RemoveLoginLogoAction
{
    /**
     * Remove the login logo.
     */
    public function execute(): void
    {
        $currentLogo = Setting::getValue('login', 'logo');

        if ($currentLogo && str_starts_with($currentLogo, '/storage/')) {
            $path = str_replace('/storage/', '', $currentLogo);
            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
        }

        // Clear logo
        Setting::setValue('login', 'logo', '', 'string');
    }
}
