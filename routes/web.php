<?php

use App\Http\Controllers\Auth\TwoFactorEmailController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

// Two-factor email authentication routes (for users in 2FA challenge)
Route::middleware(['web'])->group(function () {
    Route::post('/two-factor/email/send', [TwoFactorEmailController::class, 'send'])
        ->name('two-factor.email.send');
    Route::post('/two-factor/email/verify', [TwoFactorEmailController::class, 'verify'])
        ->name('two-factor.email.verify');
});

// The homepage is handled by the Porfolio module's KioskController
// for the public-facing portfolio website

require __DIR__.'/dashboard.php';
require __DIR__.'/settings.php';
