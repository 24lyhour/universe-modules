<?php

use Illuminate\Support\Facades\Route;
use Modules\Movice\Http\Controllers\MoviceController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('movices', MoviceController::class)->names('movice');
});
