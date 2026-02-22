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
                'description' => 'Overview of menu and category counts',
                'module' => 'Menu',
                'type' => 'dashboard',
                'chart_type' => 'stats',
                'sort_order' => 2,
                'status' => true,
            ],
            [
                'name' => 'Menu Category Distribution',
                'description' => 'Categories with vs without products',
                'module' => 'Menu',
                'type' => 'dashboard',
                'chart_type' => 'distribution',
                'sort_order' => 3,
                'status' => true,
            ],
            [
                'name' => 'Outlet Statistics',
                'description' => 'Overview of outlet counts and status',
                'module' => 'Outlet',
                'type' => 'dashboard',
                'chart_type' => 'stats',
                'sort_order' => 4,
                'status' => true,
            ],
            // Chart widgets
            [
                'name' => 'Customer Growth',
                'description' => 'Customer registration trend over time',
                'module' => 'Customer',
                'type' => 'dashboard',
                'chart_type' => 'area',
                'sort_order' => 5,
                'status' => true,
            ],
            [
                'name' => 'Menu Top Categories',
                'description' => 'Top categories by product count',
                'module' => 'Menu',
                'type' => 'dashboard',
                'chart_type' => 'bar',
                'sort_order' => 6,
                'status' => true,
            ],
            [
                'name' => 'Menu Growth Trend',
                'description' => 'Categories and products added over time',
                'module' => 'Menu',
                'type' => 'dashboard',
                'chart_type' => 'area',
                'sort_order' => 7,
                'status' => true,
            ],
            [
                'name' => 'Customer Status',
                'description' => 'Customer distribution by status',
                'module' => 'Customer',
                'type' => 'dashboard',
                'chart_type' => 'donut',
                'sort_order' => 8,
                'status' => true,
            ],
            [
                'name' => 'Outlet Performance',
                'description' => 'Outlet performance comparison',
                'module' => 'Outlet',
                'type' => 'dashboard',
                'chart_type' => 'bar',
                'sort_order' => 9,
                'status' => true,
            ],
            // Product widgets
            [
                'name' => 'Product Statistics',
                'description' => 'Overview of product counts and inventory',
                'module' => 'Product',
                'type' => 'dashboard',
                'chart_type' => 'stats',
                'sort_order' => 10,
                'status' => true,
            ],
            // Order widgets
            [
                'name' => 'Order Statistics',
                'description' => 'Overview of order counts and revenue',
                'module' => 'Order',
                'type' => 'dashboard',
                'chart_type' => 'stats',
                'sort_order' => 11,
                'status' => true,
            ],
            // Wallet widgets
            [
                'name' => 'Wallet Statistics',
                'description' => 'Overview of wallet balances and status',
                'module' => 'Wallets',
                'type' => 'dashboard',
                'chart_type' => 'stats',
                'sort_order' => 12,
                'status' => true,
            ],
            [
                'name' => 'Wallet Balance Trend',
                'description' => 'Balance growth over time',
                'module' => 'Wallets',
                'type' => 'dashboard',
                'chart_type' => 'area',
                'sort_order' => 13,
                'status' => true,
            ],
            [
                'name' => 'Wallet Status Distribution',
                'description' => 'Active vs Inactive wallets',
                'module' => 'Wallets',
                'type' => 'dashboard',
                'chart_type' => 'donut',
                'sort_order' => 14,
                'status' => true,
            ],
            [
                'name' => 'Wallet Balance Distribution',
                'description' => 'Available vs Locked balance',
                'module' => 'Wallets',
                'type' => 'dashboard',
                'chart_type' => 'bar',
                'sort_order' => 15,
                'status' => true,
            ],
            // Transaction widgets
            [
                'name' => 'Transaction Statistics',
                'description' => 'Overview of transaction counts and volumes',
                'module' => 'Wallets',
                'type' => 'dashboard',
                'chart_type' => 'stats',
                'sort_order' => 16,
                'status' => true,
            ],
            [
                'name' => 'Transaction Volume Trend',
                'description' => 'Transaction volume over time',
                'module' => 'Wallets',
                'type' => 'dashboard',
                'chart_type' => 'area',
                'sort_order' => 17,
                'status' => true,
            ],
            [
                'name' => 'Transaction Status Distribution',
                'description' => 'Completed, Pending, Failed transactions',
                'module' => 'Wallets',
                'type' => 'dashboard',
                'chart_type' => 'donut',
                'sort_order' => 18,
                'status' => true,
            ],
            [
                'name' => 'Transaction Type Breakdown',
                'description' => 'Deposits, Withdrawals, Transfers, Payments',
                'module' => 'Wallets',
                'type' => 'dashboard',
                'chart_type' => 'bar',
                'sort_order' => 19,
                'status' => true,
            ],
            // Employee widgets
            [
                'name' => 'Employee Statistics',
                'description' => 'Overview of employee counts and status',
                'module' => 'Employee',
                'type' => 'dashboard',
                'chart_type' => 'stats',
                'sort_order' => 20,
                'status' => true,
            ],
            [
                'name' => 'Employee Growth Trend',
                'description' => 'New employees over time',
                'module' => 'Employee',
                'type' => 'dashboard',
                'chart_type' => 'area',
                'sort_order' => 21,
                'status' => true,
            ],
            [
                'name' => 'Attendance Overview',
                'description' => 'Daily attendance tracking',
                'module' => 'Employee',
                'type' => 'dashboard',
                'chart_type' => 'bar',
                'sort_order' => 22,
                'status' => true,
            ],
            // School widgets
            [
                'name' => 'School Statistics',
                'description' => 'Overview of schools, departments, and classrooms',
                'module' => 'School',
                'type' => 'dashboard',
                'chart_type' => 'stats',
                'sort_order' => 23,
                'status' => true,
            ],
            [
                'name' => 'School Growth Trend',
                'description' => 'Schools and departments over time',
                'module' => 'School',
                'type' => 'dashboard',
                'chart_type' => 'area',
                'sort_order' => 24,
                'status' => true,
            ],
            [
                'name' => 'Departments by School',
                'description' => 'Department distribution across schools',
                'module' => 'School',
                'type' => 'dashboard',
                'chart_type' => 'bar',
                'sort_order' => 25,
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
