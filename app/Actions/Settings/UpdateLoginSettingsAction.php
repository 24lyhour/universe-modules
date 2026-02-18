<?php

namespace App\Actions\Settings;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UpdateLoginSettingsAction
{
    /**
     * Update login settings.
     */
    public function execute(Request $request, array $validated): void
    {
        // Handle image - either file upload or URL from media library
        if ($request->hasFile('image')) {
            $this->deleteOldImage();
            $path = $request->file('image')->store('login', 'public');
            $validated['image'] = '/storage/' . $path;
        } elseif (!empty($validated['image_url'])) {
            $validated['image'] = $validated['image_url'];
        } else {
            unset($validated['image']);
        }
        unset($validated['image_url']);

        // Handle logo - either file upload or URL from media library
        if ($request->hasFile('logo')) {
            $this->deleteOldLogo();
            $path = $request->file('logo')->store('login/logos', 'public');
            $validated['logo'] = '/storage/' . $path;
        } elseif (!empty($validated['logo_url'])) {
            $validated['logo'] = $validated['logo_url'];
        } else {
            unset($validated['logo']);
        }
        unset($validated['logo_url']);

        // Save settings
        foreach ($validated as $key => $value) {
            $type = is_bool($value) ? 'boolean' : 'string';
            Setting::setValue('login', $key, $value, $type);
        }
    }

    /**
     * Delete old image if it exists in storage.
     */
    private function deleteOldImage(): void
    {
        $oldImage = Setting::getValue('login', 'image');
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
    private function deleteOldLogo(): void
    {
        $oldLogo = Setting::getValue('login', 'logo');
        if ($oldLogo && str_starts_with($oldLogo, '/storage/')) {
            $path = str_replace('/storage/', '', $oldLogo);
            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
        }
    }
}
