<?php

namespace Database\Seeders;

use App\Models\Widget;
use Illuminate\Database\Seeder;

class WidgetSeeder extends Seeder
{
    public function run(): void
    {
        $widgets = [
            // Stats widgets
            [
                'name' => 'Customer Statistics',
                'description' => 'Overview of customer counts and status',
                'module' => 'Customer',
                'type' => 'dashboard',
                'chart_type' => 'stats',
                'sort_order' => 1,
                'status' => true,
            ],
            [
                'name' => 'Menu Statistics',
                'description' => 'Overview of menu counts and status',
                'module' => 'Menu',
                'type' => 'dashboard',
                'chart_type' => 'stats',
                'sort_order' => 2,
                'status' => true,
            ],
            [
                'name' => 'Outlet Statistics',
                'description' => 'Overview of outlet counts and status',
                'module' => 'Outlet',
                'type' => 'dashboard',
                'chart_type' => 'stats',
                'sort_order' => 3,
                'status' => true,
            ],
            // Chart widgets
            [
                'name' => 'Customer Growth',
                'description' => 'Customer registration trend over time',
                'module' => 'Customer',
                'type' => 'dashboard',
                'chart_type' => 'area',
                'sort_order' => 4,
                'status' => true,
            ],
            [
                'name' => 'Menu by Category',
                'description' => 'Distribution of menus by category',
                'module' => 'Menu',
                'type' => 'dashboard',
                'chart_type' => 'bar',
                'sort_order' => 5,
                'status' => true,
            ],
            [
                'name' => 'Customer Status',
                'description' => 'Customer distribution by status',
                'module' => 'Customer',
                'type' => 'dashboard',
                'chart_type' => 'donut',
                'sort_order' => 6,
                'status' => true,
            ],
            [
                'name' => 'Outlet Performance',
                'description' => 'Outlet performance comparison',
                'module' => 'Outlet',
                'type' => 'dashboard',
                'chart_type' => 'bar',
                'sort_order' => 7,
                'status' => true,
            ],
            // Product widgets
            [
                'name' => 'Product Statistics',
                'description' => 'Overview of product counts and inventory',
                'module' => 'Product',
                'type' => 'dashboard',
                'chart_type' => 'stats',
                'sort_order' => 8,
                'status' => true,
            ],
            // Order widgets
            [
                'name' => 'Order Statistics',
                'description' => 'Overview of order counts and revenue',
                'module' => 'Order',
                'type' => 'dashboard',
                'chart_type' => 'stats',
                'sort_order' => 9,
                'status' => true,
            ],
            // Wallet widgets
            [
                'name' => 'Wallet Statistics',
                'description' => 'Overview of wallet balances and status',
                'module' => 'Wallets',
                'type' => 'dashboard',
                'chart_type' => 'stats',
                'sort_order' => 10,
                'status' => true,
            ],
        ];

        foreach ($widgets as $widget) {
            Widget::updateOrCreate(
                ['name' => $widget['name'], 'module' => $widget['module']],
                $widget
            );
        }
    }
}
