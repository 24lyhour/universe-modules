<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Settings\WidgetController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Dashboard Settings (Widgets)
    Route::get('dashboard/settings', [WidgetController::class, 'index'])->name('dashboard.settings');
    Route::patch('dashboard/settings/widgets/{widget}', [WidgetController::class, 'update'])->name('dashboard.widgets.update');
    Route::post('dashboard/settings/widgets/order', [WidgetController::class, 'updateOrder'])->name('dashboard.widgets.order');
    Route::post('dashboard/settings/widgets/toggle-module', [WidgetController::class, 'toggleModule'])->name('dashboard.widgets.toggle-module');
});
