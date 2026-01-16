<?php

use Illuminate\Support\Facades\Route;
use Modules\Movice\Http\Controllers\MoviceController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('movices', MoviceController::class)->names('movice');
});
