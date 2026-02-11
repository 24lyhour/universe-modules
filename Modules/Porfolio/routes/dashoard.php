<?php

use Illuminate\Support\Facades\Route;
use Modules\Porfolio\Http\Controllers\PorfolioController;
use Modules\Porfolio\Http\Controllers\HeaderController;
use Modules\Porfolio\Http\Controllers\FooterController;
use Modules\Porfolio\Http\Controllers\PageController;
use Modules\Porfolio\Http\Controllers\ServiceController;
use Modules\Porfolio\Http\Controllers\TestimonialController;
use Modules\Porfolio\Http\Controllers\SiteSettingController;
use Modules\Porfolio\Http\Controllers\ContactMessageController;
use Modules\Porfolio\Http\Middleware\DashboardMiddleware;

Route::middleware(['auth', 'verified', 'module:porfolio', DashboardMiddleware::class])
    ->prefix('dashboard')
    ->group(function () {
        // Portfolio CRUD
        Route::resource('portfolios', PorfolioController::class)->names('porfolio');

        // Headers CRUD
        Route::resource('headers', HeaderController::class)->names('porfolio.headers');

        // Footers CRUD
        Route::resource('footers', FooterController::class)->names('porfolio.footers');

        // Pages CRUD
        Route::resource('pages', PageController::class)->names('porfolio.pages');

        // Services CRUD
        Route::resource('services', ServiceController::class)->names('porfolio.services');

        // Testimonials CRUD
        Route::resource('testimonials', TestimonialController::class)->names('porfolio.testimonials');

        // Site Settings
        Route::get('settings', [SiteSettingController::class, 'index'])->name('porfolio.settings.index');
        Route::put('settings', [SiteSettingController::class, 'update'])->name('porfolio.settings.update');
        Route::post('settings', [SiteSettingController::class, 'store'])->name('porfolio.settings.store');
        Route::delete('settings/{key}', [SiteSettingController::class, 'destroy'])->name('porfolio.settings.destroy');

        // Contact Messages
        Route::get('messages', [ContactMessageController::class, 'index'])->name('porfolio.messages.index');
        Route::get('messages/{id}', [ContactMessageController::class, 'show'])->name('porfolio.messages.show');
        Route::delete('messages/{id}', [ContactMessageController::class, 'destroy'])->name('porfolio.messages.destroy');
        Route::post('messages/{id}/read', [ContactMessageController::class, 'markAsRead'])->name('porfolio.messages.markAsRead');
        Route::post('messages/{id}/replied', [ContactMessageController::class, 'markAsReplied'])->name('porfolio.messages.markAsReplied');
    });
