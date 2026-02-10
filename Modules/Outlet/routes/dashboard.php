<?php

use Illuminate\Support\Facades\Route;
use Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController;

Route::middleware(['auth', 'verified'])->prefix('dashboard')->name('outlet.')->group(function () {
    Route::resource('outlets', OutletDashboardController::class)->names('outlets');
    Route::get('outlets/{outlet}/delete', [OutletDashboardController::class, 'confirmDelete'])->name('outlets.confirm-delete');
});
