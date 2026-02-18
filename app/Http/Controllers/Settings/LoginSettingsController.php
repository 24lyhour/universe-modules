<?php

namespace App\Http\Controllers\Settings;

use App\Actions\Settings\RemoveLoginImageAction;
use App\Actions\Settings\RemoveLoginLogoAction;
use App\Actions\Settings\UpdateLoginSettingsAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\UpdateLoginSettingsRequest;
use App\Services\LoginSettingsService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class LoginSettingsController extends Controller
{
    public function __construct(
        protected LoginSettingsService $settingsService,
        protected UpdateLoginSettingsAction $updateAction,
        protected RemoveLoginImageAction $removeImageAction,
        protected RemoveLoginLogoAction $removeLogoAction,
    ) {}

    /**
     * Display login settings page.
     */
    public function index(): Response
    {
        return Inertia::render('settings/Login', [
            'loginSettings' => $this->settingsService->getSettings(),
        ]);
    }

    /**
     * Update login settings.
     */
    public function update(UpdateLoginSettingsRequest $request): RedirectResponse
    {
        $this->updateAction->execute($request, $request->validated());

        return back()->with('success', 'Login settings updated successfully.');
    }

    /**
     * Remove the login background image (resets to default).
     */
    public function removeImage(): RedirectResponse
    {
        $this->removeImageAction->execute();

        return back()->with('success', 'Background reset to default.');
    }

    /**
     * Remove the login logo.
     */
    public function removeLogo(): RedirectResponse
    {
        $this->removeLogoAction->execute();

        return back()->with('success', 'Logo removed.');
    }
}
