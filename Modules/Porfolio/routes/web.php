<?php

use Illuminate\Support\Facades\Route;
use Modules\Porfolio\Http\Controllers\PorfolioController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('porfolios', PorfolioController::class)->names('porfolio');
});
