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
