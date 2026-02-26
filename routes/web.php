<?php

use App\Http\Controllers\Auth\TwoFactorEmailController;
use App\Http\Middleware\Check2FALockout;
use App\Http\Middleware\CheckLoginLockout;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;
use Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController;

// Override Fortify login route with lockout middleware
Route::middleware(['web', CheckLoginLockout::class])
    ->post('/login', [AuthenticatedSessionController::class, 'store'])
    ->name('login.store');

// Override Fortify two-factor login route with 2FA lockout middleware
Route::middleware(['web', Check2FALockout::class])
    ->post('/two-factor-challenge', [TwoFactorAuthenticatedSessionController::class, 'store'])
    ->name('two-factor.login');

// Two-factor email authentication routes (for users in 2FA challenge)
Route::middleware(['web', Check2FALockout::class])->group(function () {
    Route::post('/two-factor/email/send', [TwoFactorEmailController::class, 'send'])
        ->name('two-factor.email.send');
    Route::post('/two-factor/email/verify', [TwoFactorEmailController::class, 'verify'])
        ->name('two-factor.email.verify');
});

// The homepage is handled by the Porfolio module's KioskController
// for the public-facing portfolio website

require __DIR__.'/dashboard.php';
require __DIR__.'/settings.php';

// Temporary debug route for mail config (REMOVE AFTER DEBUGGING)
Route::get('/debug/mail-config', function () {
    if (!config('app.debug')) {
        abort(404);
    }

    return response()->json([
        'mail_mailer' => config('mail.default'),
        'mail_host' => config('mail.mailers.smtp.host'),
        'mail_port' => config('mail.mailers.smtp.port'),
        'mail_username' => config('mail.mailers.smtp.username') ? 'SET' : 'NOT SET',
        'mail_password' => config('mail.mailers.smtp.password') ? 'SET' : 'NOT SET',
        'mail_encryption' => config('mail.mailers.smtp.encryption') ?? env('MAIL_ENCRYPTION'),
        'mail_from_address' => config('mail.from.address'),
        'mail_from_name' => config('mail.from.name'),
        'mail_from_address_raw' => env('MAIL_FROM_ADDRESS'),
    ]);
});

// Temporary test email route (REMOVE AFTER DEBUGGING)
Route::get('/debug/test-email', function () {
    if (!config('app.debug')) {
        abort(404);
    }

    try {
        \Illuminate\Support\Facades\Mail::raw('Test email from Universe - ' . now(), function ($message) {
            $message->to(config('mail.from.address'))
                    ->subject('Test Email - ' . config('app.name'));
        });

        return response()->json([
            'success' => true,
            'message' => 'Email sent successfully to: ' . config('mail.from.address'),
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'success' => false,
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString(),
        ], 500);
    }
});
