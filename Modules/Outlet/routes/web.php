<?php

use Illuminate\Support\Facades\Route;
use Modules\Outlet\Http\Controllers\OutletController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('outlets', OutletController::class)->names('outlet');
});
