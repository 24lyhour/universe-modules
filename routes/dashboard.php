<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Settings\LoginSettingsController;
use App\Http\Controllers\Settings\RoleController;
use App\Http\Controllers\Settings\UserRoleController;
use App\Http\Controllers\Settings\WidgetController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Dashboard Settings (Widgets)
    Route::get('dashboard/settings', [WidgetController::class, 'index'])->name('dashboard.settings');
    Route::patch('dashboard/settings/widgets/{widget}', [WidgetController::class, 'update'])->name('dashboard.widgets.update');
    Route::post('dashboard/settings/widgets/order', [WidgetController::class, 'updateOrder'])->name('dashboard.widgets.order');
    Route::post('dashboard/settings/widgets/toggle-module', [WidgetController::class, 'toggleModule'])->name('dashboard.widgets.toggle-module');

    // Login Settings
    Route::get('dashboard/settings/login', [LoginSettingsController::class, 'index'])->name('settings.login');
    Route::post('dashboard/settings/login', [LoginSettingsController::class, 'update'])->name('settings.login.update');
    Route::delete('dashboard/settings/login/image', [LoginSettingsController::class, 'removeImage'])->name('settings.login.remove-image');
    Route::delete('dashboard/settings/login/logo', [LoginSettingsController::class, 'removeLogo'])->name('settings.login.remove-logo');

    // Roles & Permissions Management (protected by permission middleware)
    Route::middleware('permission:roles.view_any')->group(function () {
        Route::get('dashboard/settings/roles', [RoleController::class, 'index'])->name('settings.roles.index');
    });
    Route::middleware('permission:roles.create')->group(function () {
        Route::get('dashboard/settings/roles/create', [RoleController::class, 'create'])->name('settings.roles.create');
        Route::post('dashboard/settings/roles', [RoleController::class, 'store'])->name('settings.roles.store');
    });
    Route::middleware('permission:roles.view')->group(function () {
        Route::get('dashboard/settings/roles/{role}', [RoleController::class, 'show'])->name('settings.roles.show');
    });
    Route::middleware('permission:roles.update')->group(function () {
        Route::get('dashboard/settings/roles/{role}/edit', [RoleController::class, 'edit'])->name('settings.roles.edit');
        Route::put('dashboard/settings/roles/{role}', [RoleController::class, 'update'])->name('settings.roles.update');
    });
    Route::middleware('permission:roles.delete')->group(function () {
        Route::delete('dashboard/settings/roles/{role}', [RoleController::class, 'destroy'])->name('settings.roles.destroy');
    });

    // User Role Management (protected by permission middleware)
    Route::middleware('permission:users.view_any')->group(function () {
        Route::get('dashboard/settings/users', [UserRoleController::class, 'index'])->name('settings.users.index');
    });
    Route::middleware('permission:users.assign_roles')->group(function () {
        Route::get('dashboard/settings/users/{user}/edit', [UserRoleController::class, 'edit'])->name('settings.users.edit');
        Route::put('dashboard/settings/users/{user}', [UserRoleController::class, 'update'])->name('settings.users.update');
        Route::post('dashboard/settings/users/{user}/assign-role', [UserRoleController::class, 'assignRole'])->name('settings.users.assign-role');
        Route::post('dashboard/settings/users/{user}/remove-role', [UserRoleController::class, 'removeRole'])->name('settings.users.remove-role');
    });
});
