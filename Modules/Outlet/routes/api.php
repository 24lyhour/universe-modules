<?php

use Illuminate\Support\Facades\Route;
use Modules\Outlet\Http\Controllers\OutletController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('outlets', OutletController::class)->names('outlet');
});
