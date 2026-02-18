<?php

namespace App\Actions\Settings;

use App\Models\Setting;
use App\Services\LoginSettingsService;
use Illuminate\Support\Facades\Storage;

class RemoveLoginImageAction
{
    public function __construct(
        protected LoginSettingsService $settingsService,
    ) {}

    /**
     * Remove the login background image and reset to default.
     */
    public function execute(): void
    {
        $currentImage = Setting::getValue('login', 'image');

        if ($currentImage && str_starts_with($currentImage, '/storage/')) {
            $path = str_replace('/storage/', '', $currentImage);
            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
        }

        // Reset to default image
        Setting::setValue('login', 'image', $this->settingsService->getDefaultImage(), 'string');
    }
}
