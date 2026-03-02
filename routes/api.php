<?php

use App\Http\Controllers\Api\AiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Health Check Endpoint (Railway)
|--------------------------------------------------------------------------
*/
Route::get('/health', function () {
    try {
        // Check database connection
        DB::connection()->getPdo();
        $dbStatus = 'connected';
    } catch (\Exception $e) {
        $dbStatus = 'disconnected';
    }

    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
        'database' => $dbStatus,
        'php_version' => PHP_VERSION,
        'laravel_version' => app()->version(),
    ]);
});

/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

/*
|--------------------------------------------------------------------------
| AI Editor Endpoint
|--------------------------------------------------------------------------
*/
Route::post('/ai/editor', [AiController::class, 'editor'])
    ->middleware(['web', 'auth'])
    ->name('api.ai.editor');
