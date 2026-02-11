<?php

namespace Modules\Porfolio\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Porfolio\Models\SiteSetting;
use Modules\Porfolio\Enums\SettingGroup;
use Modules\Porfolio\Enums\SettingType;

class SiteSettingController extends Controller
{
    public function index(): Response
    {
        $settings = SiteSetting::query()
            ->orderBy('group')
            ->orderBy('sort_order')
            ->get()
            ->groupBy('group');

        return Inertia::render('porfolio::dashboard/settings/Index', [
            'settings' => $settings,
            'groups' => SettingGroup::options(),
            'types' => SettingType::options(),
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'settings' => 'required|array',
            'settings.*.key' => 'required|string',
            'settings.*.value' => 'nullable',
        ]);

        foreach ($validated['settings'] as $setting) {
            SiteSetting::where('key', $setting['key'])
                ->update(['value' => $setting['value']]);
        }

        // Clear cache
        cache()->forget('site_settings_public');
        cache()->forget('site_settings_all');

        return redirect()->route('porfolio.settings.index')
            ->with('success', 'Settings updated successfully.');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'group' => 'required|string|max:50',
            'key' => 'required|string|max:100|unique:site_settings,key',
            'value' => 'nullable',
            'type' => 'required|string|max:20',
            'label' => 'required|string|max:255',
            'description' => 'nullable|string',
            'options' => 'nullable|array',
            'is_public' => 'boolean',
            'sort_order' => 'nullable|integer|min:0',
        ]);

        SiteSetting::create($validated);

        return redirect()->route('porfolio.settings.index')
            ->with('success', 'Setting created successfully.');
    }

    public function destroy(string $key): RedirectResponse
    {
        $setting = SiteSetting::where('key', $key)->firstOrFail();
        $setting->delete();

        cache()->forget("site_setting_{$key}");

        return redirect()->route('porfolio.settings.index')
            ->with('success', 'Setting deleted successfully.');
    }
}
