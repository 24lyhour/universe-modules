<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class LoginSettingsController extends Controller
{
    /**
     * Default login settings.
     */
    protected array $defaults = [
        'app_name' => '',
        'title' => 'Welcome back',
        'subtitle' => 'Enter your credentials to access your account',
        'image' => '/img/3.jpg',
        'logo' => '',
        'quote_text' => 'This platform has transformed how we manage our business operations. The intuitive interface and powerful features make it indispensable.',
        'quote_author' => 'Alex Johnson',
        'quote_company' => 'CEO at TechCorp',
        'show_social_login' => true,
        'show_remember_me' => true,
    ];

    /**
     * Display login settings page.
     */
    public function index(): Response
    {
        $loginSettings = Setting::getGroup('login');

        // Merge with defaults for any missing settings
        $defaults = $this->defaults;
        $defaults['app_name'] = config('app.name', 'Universe');
        $loginSettings = array_merge($defaults, $loginSettings);

        return Inertia::render('settings/Login', [
            'loginSettings' => $loginSettings,
        ]);
    }

    /**
     * Update login settings.
     */
    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'app_name' => 'nullable|string|max:50',
            'title' => 'required|string|max:100',
            'subtitle' => 'required|string|max:200',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:5120',
            'image_url' => 'nullable|string|url',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp,svg|max:2048',
            'logo_url' => 'nullable|string|url',
            'quote_text' => 'nullable|string|max:500',
            'quote_author' => 'nullable|string|max:100',
            'quote_company' => 'nullable|string|max:100',
            'show_social_login' => 'boolean',
            'show_remember_me' => 'boolean',
        ]);

        // Handle image - either file upload or URL from media library
        if ($request->hasFile('image')) {
            // Delete old image if it exists and is not the default
            $oldImage = Setting::getValue('login', 'image');
            if ($oldImage && $oldImage !== '/img/3.jpg' && Storage::disk('public')->exists(str_replace('/storage/', '', $oldImage))) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $oldImage));
            }

            // Store new image
            $path = $request->file('image')->store('login', 'public');
            $validated['image'] = '/storage/' . $path;
        } elseif (!empty($validated['image_url'])) {
            // Use URL from media library
            $validated['image'] = $validated['image_url'];
        } else {
            // Keep existing image
            unset($validated['image']);
        }
        unset($validated['image_url']);

        // Handle logo - either file upload or URL from media library
        if ($request->hasFile('logo')) {
            // Delete old logo if it exists
            $oldLogo = Setting::getValue('login', 'logo');
            if ($oldLogo && Storage::disk('public')->exists(str_replace('/storage/', '', $oldLogo))) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $oldLogo));
            }

            // Store new logo
            $path = $request->file('logo')->store('login/logos', 'public');
            $validated['logo'] = '/storage/' . $path;
        } elseif (!empty($validated['logo_url'])) {
            // Use URL from media library
            $validated['logo'] = $validated['logo_url'];
        } else {
            // Keep existing logo
            unset($validated['logo']);
        }
        unset($validated['logo_url']);

        // Save settings
        foreach ($validated as $key => $value) {
            $type = is_bool($value) ? 'boolean' : 'string';
            Setting::setValue('login', $key, $value, $type);
        }

        return back()->with('success', 'Login settings updated successfully.');
    }

    /**
     * Remove the login background image.
     */
    public function removeImage(): RedirectResponse
    {
        $currentImage = Setting::getValue('login', 'image');

        if ($currentImage && $currentImage !== '/img/3.jpg') {
            $path = str_replace('/storage/', '', $currentImage);
            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
        }

        // Reset to default
        Setting::setValue('login', 'image', '/img/3.jpg', 'string');

        return back()->with('success', 'Login image reset to default.');
    }

    /**
     * Remove the login logo.
     */
    public function removeLogo(): RedirectResponse
    {
        $currentLogo = Setting::getValue('login', 'logo');

        if ($currentLogo) {
            $path = str_replace('/storage/', '', $currentLogo);
            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
        }

        // Clear logo
        Setting::setValue('login', 'logo', '', 'string');

        return back()->with('success', 'Logo removed.');
    }
}
