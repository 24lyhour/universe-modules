<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\TwoFactorAuthenticationRequest;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Fortify\Features;

class TwoFactorAuthenticationController extends Controller implements HasMiddleware
{
    /**
     * Get the middleware that should be assigned to the controller.
     */
    public static function middleware(): array
    {
        return Features::optionEnabled(Features::twoFactorAuthentication(), 'confirmPassword')
            ? [new Middleware('password.confirm', only: ['show'])]
            : [];
    }

    /**
     * Show the user's two-factor authentication settings page.
     */
    public function show(TwoFactorAuthenticationRequest $request): Response
    {
        $request->ensureStateIsValid();
        $user = $request->user();

        return Inertia::render('settings/TwoFactor', [
            'twoFactorEnabled' => $user->hasEnabledTwoFactorAuthentication(),
            'requiresConfirmation' => Features::optionEnabled(Features::twoFactorAuthentication(), 'confirm'),
            'twoFactorMethod' => $user->two_factor_method ?? 'email',
        ]);
    }

    /**
     * Update the user's two-factor authentication method.
     */
    public function updateMethod(TwoFactorAuthenticationRequest $request): \Illuminate\Http\RedirectResponse
    {
        $request->validate([
            'method' => ['required', 'in:email,totp'],
        ]);

        $user = $request->user();
        $method = $request->input('method');

        // If switching to TOTP, they need to set it up first
        if ($method === 'totp' && !$user->two_factor_secret) {
            return back()->with('error', 'Please set up authenticator app first.');
        }

        $user->update(['two_factor_method' => $method]);

        // If enabling 2FA with email method for the first time
        if ($method === 'email' && !$user->hasTwoFactorEnabled()) {
            $user->enableTwoFactor('email');
        }

        return back()->with('status', '2FA method updated successfully.');
    }
}
