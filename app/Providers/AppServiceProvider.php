<?php

namespace App\Providers;

use App\Services\MenuService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->registerDashboardMenuItems();
    }

    /**
     * Register dashboard menu items in the sidebar.
     */
    protected function registerDashboardMenuItems(): void
    {
        $this->app->booted(function () {
            // Register Dashboard Settings in footer navigation
            MenuService::addMenuItem(
                menu: 'footer',
                id: 'dashboard-settings',
                title: __('Settings'),
                url: '/dashboard/settings',
                icon: 'Settings',
                order: 50,
                permissions: null,
                route: 'dashboard.settings'
            );

            MenuService::addSubmenuItem(
                'footer',
                'dashboard-settings',
                __('Dashboard'),
                '/dashboard/settings',
                10,
                null,
                'dashboard.settings',
                'LayoutGrid'
            );

            MenuService::addSubmenuItem(
                'footer',
                'dashboard-settings',
                __('Wallet Settings'),
                '/dashboard/settings/wallet',
                20,
                null,
                'settings.wallet',
                'Wallet'
            );

            MenuService::addSubmenuItem(
                'footer',
                'dashboard-settings',
                __('Login Settings'),
                '/dashboard/settings/login',
                30,
                null,
                'settings.login',
                'LogIn'
            );

            MenuService::addSubmenuItem(
                'footer',
                'dashboard-settings',
                __('Product Settings'),
                '/dashboard/products/settings',
                40,
                null,
                'dashboard.product.settings',
                'Package'
            );
        });
    }

    /**
     * Register any application services.
     */
    public function register(): void
    {
        if ($this->app->environment('local') && class_exists(TelescopeServiceProvider::class)) {
            $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
            $this->app->register(TelescopeServiceProvider::class);
        }
}
}
