<?php

use Illuminate\Support\Facades\Route;
use Modules\Porfolio\Http\Controllers\KioskController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Public web routes for the Portfolio Kiosk website.
| These routes are loaded by the RouteServiceProvider.
|
*/

Route::middleware(['web'])->group(function () {
    // Homepage
    Route::get('/', [KioskController::class, 'home'])->name('home');

    // About page
    Route::get('/about', [KioskController::class, 'about'])->name('about');

    // Portfolio pages
    Route::get('/portfolio', [KioskController::class, 'portfolioIndex'])->name('portfolio.index');
    Route::get('/portfolio/{slug}', [KioskController::class, 'portfolioShow'])->name('portfolio.show');

    // Services pages
    Route::get('/services', [KioskController::class, 'servicesIndex'])->name('services.index');
    Route::get('/services/{slug}', [KioskController::class, 'serviceShow'])->name('services.show');

    // Contact page
    Route::get('/contact', [KioskController::class, 'contact'])->name('contact');
    Route::post('/contact', [KioskController::class, 'submitContact'])->name('contact.submit');

    // Dynamic page by slug (catch-all for custom pages)
    Route::get('/page/{slug}', [KioskController::class, 'page'])->name('page.show');
});
