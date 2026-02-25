<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Settings\ActivityLogController;
use App\Http\Controllers\Settings\AvatarController;
use App\Http\Controllers\Settings\LoginSettingsController;
use App\Http\Controllers\Settings\RoleController;
use App\Http\Controllers\Settings\UserRoleController;
use App\Http\Controllers\Settings\WidgetController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Dashboard Routes
|--------------------------------------------------------------------------
|
| Using 'auto.permission' middleware which automatically resolves permissions
| from route names. Route naming pattern: {resource}.{action}
|
*/

Route::middleware(['auth', 'verified', 'auto.permission'])->group(function () {
    // Dashboard - special route name kept for compatibility
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Dashboard Settings (Widgets) - route name: settings.* -> permission: settings.*
    Route::get('dashboard/settings', [WidgetController::class, 'index'])->name('settings.index');
    Route::patch('dashboard/settings/widgets/{widget}', [WidgetController::class, 'update'])->name('settings.update');
    Route::post('dashboard/settings/widgets/order', [WidgetController::class, 'updateOrder'])->name('settings.order');
    Route::post('dashboard/settings/widgets/toggle-module', [WidgetController::class, 'toggleModule'])->name('settings.toggle');

    // Login Settings - auto.permission maps to settings.manage via specialRoutes
    Route::get('dashboard/settings/login', [LoginSettingsController::class, 'index'])->name('login-settings.index');
    Route::post('dashboard/settings/login', [LoginSettingsController::class, 'update'])->name('login-settings.update');
    Route::delete('dashboard/settings/login/image', [LoginSettingsController::class, 'removeImage'])->name('login-settings.remove-image');
    Route::delete('dashboard/settings/login/logo', [LoginSettingsController::class, 'removeLogo'])->name('login-settings.remove-logo');

    // Roles Management
    Route::get('dashboard/settings/roles/create', [RoleController::class, 'create'])->name('roles.create');
    Route::post('dashboard/settings/roles', [RoleController::class, 'store'])->name('roles.store');
    Route::get('dashboard/settings/roles', [RoleController::class, 'index'])->name('roles.index');
    Route::get('dashboard/settings/roles/{role}', [RoleController::class, 'show'])->name('roles.show');
    Route::get('dashboard/settings/roles/{role}/edit', [RoleController::class, 'edit'])->name('roles.edit');
    Route::put('dashboard/settings/roles/{role}', [RoleController::class, 'update'])->name('roles.update');
    Route::delete('dashboard/settings/roles/{role}', [RoleController::class, 'destroy'])->name('roles.destroy');

    // User Management
    Route::get('dashboard/settings/users/create', [UserRoleController::class, 'create'])->name('users.create');
    Route::post('dashboard/settings/users', [UserRoleController::class, 'store'])->name('users.store');
    Route::get('dashboard/settings/users', [UserRoleController::class, 'index'])->name('users.index');
    Route::get('dashboard/settings/users/{user}/edit', [UserRoleController::class, 'edit'])->name('users.edit');
    Route::put('dashboard/settings/users/{user}', [UserRoleController::class, 'update'])->name('users.update');
    Route::post('dashboard/settings/users/{user}/assign-role', [UserRoleController::class, 'assignRole'])->name('users.assign-role');
    Route::post('dashboard/settings/users/{user}/remove-role', [UserRoleController::class, 'removeRole'])->name('users.remove-role');

    // Activity Log
    Route::get('dashboard/settings/activity-log', [ActivityLogController::class, 'index'])->name('activity-log.index');
    Route::get('dashboard/settings/activity-log/export', [ActivityLogController::class, 'export'])->name('activity-log.export');
    Route::post('dashboard/settings/activity-log/clear', [ActivityLogController::class, 'clear'])->name('activity-log.clear');

    // User Actions (from Activity Log)
    Route::post('dashboard/settings/users/{user}/suspend', [ActivityLogController::class, 'suspendUser'])->name('users.suspend');
    Route::post('dashboard/settings/users/{user}/unsuspend', [ActivityLogController::class, 'unsuspendUser'])->name('users.unsuspend');
    Route::post('dashboard/settings/users/{user}/force-logout', [ActivityLogController::class, 'forceLogout'])->name('users.force-logout');
    Route::delete('dashboard/settings/users/{user}', [ActivityLogController::class, 'deleteUser'])->name('users.delete');
});

/*
|--------------------------------------------------------------------------
| Avatar Routes (No media permission required)
|--------------------------------------------------------------------------
|
| These routes allow any authenticated user to upload avatars and browse
| media library without requiring media.* permissions. This enables
| user profile avatars while keeping the full media library permission-gated.
|
*/
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard/avatar/media', [AvatarController::class, 'index'])->name('avatar.media');
    Route::post('dashboard/avatar/upload', [AvatarController::class, 'upload'])->name('avatar.upload');
    Route::delete('dashboard/avatar', [AvatarController::class, 'destroy'])->name('avatar.destroy');
});
