<?php

/*
|--------------------------------------------------------------------------
| Tenant API v1
|--------------------------------------------------------------------------
|
| Endpoints for an authenticated dashboard user (Sanctum bearer token) to
| manage the resources owned by their tenant — outlets, hotels, menus,
| products, orders, etc.
|
| Mounted at:    /api/tenant/v1/...
| Auth:          auth:sanctum
| Tenant scope:  SetTenantContext middleware sets the current tenant from
|                the authenticated user; controllers should still call
|                ->forTenant(...) on every query as a defence-in-depth.
|
| Conventions:
|   - All routes are versioned under /api/tenant/v1
|   - Resource keys are UUIDs (matches Inertia dashboard side)
|   - Naming: api.tenant.v1.{module}.{resource}.{action}
|
*/

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Modules\Hotel\Http\Controllers\Api\V1\Tenant\HotelController;
use Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController;

// ─── Public auth (no token required) ────────────────────────────
Route::post('/auth/login', function (Request $request) {
    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required', 'string'],
        'device_name' => ['nullable', 'string', 'max:120'],
    ]);

    if (!Auth::attempt($credentials, false)) {
        return response()->json(['message' => 'Invalid credentials.'], 401);
    }

    $user = $request->user() ?? Auth::user();
    $token = $user->createToken($credentials['device_name'] ?? 'tenant-api')->plainTextToken;

    return response()->json([
        'data' => [
            'token' => $token,
            'token_type' => 'Bearer',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'tenant_type' => $user->tenant_type,
                'tenant_id' => $user->tenant_id,
            ],
        ],
    ]);
})->name('auth.login');

Route::middleware(['auth:sanctum', 'tenant'])->group(function () {
    Route::post('/auth/logout', function (Request $request) {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out.']);
    })->name('auth.logout');

    // ─── Identity ───────────────────────────────────────────────
    // Quick "who am I" probe for the mobile app.
    Route::get('/me', function (\Illuminate\Http\Request $request) {
        $user = $request->user();
        return response()->json([
            'data' => [
                'id' => $user->id,
                'uuid' => $user->uuid ?? null,
                'name' => $user->name,
                'email' => $user->email,
                'tenant_type' => $user->tenant_type,
                'tenant_id' => $user->tenant_id,
            ],
        ]);
    })->name('me');

    // ─── Outlet ─────────────────────────────────────────────────
    Route::prefix('outlets')->name('outlets.')->group(function () {
        Route::get('/', [OutletController::class, 'index'])->name('index');
        Route::post('/', [OutletController::class, 'store'])->name('store');
        Route::get('{outlet:uuid}', [OutletController::class, 'show'])->name('show');
        Route::patch('{outlet:uuid}', [OutletController::class, 'update'])->name('update');
        Route::delete('{outlet:uuid}', [OutletController::class, 'destroy'])->name('destroy');
    });

    // ─── Hotel ──────────────────────────────────────────────────
    Route::prefix('hotels')->name('hotels.')->group(function () {
        Route::get('/', [HotelController::class, 'index'])->name('index');
        Route::post('/', [HotelController::class, 'store'])->name('store');
        Route::get('{hotel:uuid}', [HotelController::class, 'show'])->name('show');
        Route::patch('{hotel:uuid}', [HotelController::class, 'update'])->name('update');
        Route::delete('{hotel:uuid}', [HotelController::class, 'destroy'])->name('destroy');
    });
});
