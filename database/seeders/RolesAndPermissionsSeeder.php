<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // Define all modules and their resources
        $modules = [
            // Employee Module
            'employee' => ['employees', 'employee_types', 'attendances'],

            // School Module
            'school' => ['schools', 'departments', 'classrooms', 'courses', 'programs', 'equipment'],

            // Blog Module
            'blog' => ['posts'],

            // Company Module
            'company' => ['companies'],

            // Hotel Module
            'hotel' => ['hotels'],

            // Customer Module
            'customer' => ['customers', 'customer_otps'],

            // Movice Module
            'movice' => ['movices'],

            // Outlet Module
            'outlet' => ['outlets', 'outlet_types'],

            // Portfolio Module
            'portfolio' => [
                'portfolios', 'pages', 'sections', 'services',
                'testimonials', 'headers', 'footers', 'site_settings', 'contact_messages'
            ],

            // Menu Module
            'menu' => ['menus', 'menu_types', 'categories'],

            // Wallets Module
            'wallets' => ['wallets', 'transactions'],

            // Product Module
            'product' => [
                'products', 'product_variants', 'product_attributes',
                'product_attribute_values', 'product_add_ons', 'product_upsells'
            ],

            // Booking Module
            'booking' => ['bookings'],

            // Order Module
            'order' => ['orders'],

            // Payment Module
            'payment' => ['payments'],

            // Report Module
            'report' => ['reports'],

            // User Management
            'user' => ['users', 'roles', 'permissions'],

            // Settings (includes activity logs for professional organization)
            'settings' => ['settings', 'configurations', 'activity_logs'],

            // Dashboard
            'dashboard' => ['analytics', 'reports'],
        ];

        // CRUD actions
        $actions = ['view', 'view_any', 'create', 'update', 'delete', 'restore', 'force_delete'];

        // Additional special permissions
        $specialPermissions = [
            // Attendance specific
            'attendances.check_in',
            'attendances.check_out',
            'attendances.scan_qr',
            'attendances.export',
            'attendances.import',

            // Employee specific
            'employees.export',
            'employees.import',
            'employees.assign_department',
            'employees.manage_schedule',

            // School specific
            'schools.manage_departments',
            'schools.manage_programs',
            'schools.view_statistics',

            // User specific
            'users.assign_roles',
            'users.manage_permissions',
            'users.impersonate',
            'users.suspend',
            'users.unsuspend',

            // Dashboard specific
            'dashboard.view',
            'dashboard.view_analytics',
            'dashboard.export_reports',

            // Dashboard widget permissions (controls which widgets user can see)
            'dashboard.customer',
            'dashboard.menu',
            'dashboard.outlet',
            'dashboard.product',
            'dashboard.order',
            'dashboard.wallets',
            'dashboard.employee',
            'dashboard.school',
            'dashboard.booking',
            'dashboard.payment',
            'dashboard.report',
         

            // Settings
            'settings.manage',
            'settings.view_logs',

            // Activity Log specific
            'activity_logs.export',
            'activity_logs.clear',
            'activity_logs.view_details',

            // API access
            'api.access',
            'api.manage_tokens',
        ];

        // Create permissions for each module resource
        $permissions = [];
        foreach ($modules as $module => $resources) {
            foreach ($resources as $resource) {
                foreach ($actions as $action) {
                    $permissions[] = "{$resource}.{$action}";
                }
            }
        }

        // Add special permissions
        $permissions = array_merge($permissions, $specialPermissions);

        // Create all permissions
        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission, 'guard_name' => 'web']);
        }

        // Create roles and assign permissions
        $this->createRoles($permissions);

        $this->command->info('Roles and permissions seeded successfully!');
        $this->command->info('Created ' . count($permissions) . ' permissions');
    }

    /**
     * Create roles with their permissions.
     */
    private function createRoles(array $allPermissions): void
    {
        // Super Admin - has all permissions
        $superAdmin = Role::firstOrCreate(['name' => 'super-admin', 'guard_name' => 'web']);
        $superAdmin->syncPermissions($allPermissions);

        // Admin - has most permissions except force delete and some sensitive ones
        $adminPermissions = array_filter($allPermissions, function ($permission) {
            return !str_contains($permission, 'force_delete')
                && !str_contains($permission, 'impersonate')
                && !str_contains($permission, 'manage_permissions');
        });
        $admin = Role::firstOrCreate(['name' => 'admin', 'guard_name' => 'web']);
        $admin->syncPermissions($adminPermissions);

        // Manager - can view, create, update but limited delete
        $managerPermissions = array_filter($allPermissions, function ($permission) {
            return !str_contains($permission, 'force_delete')
                && !str_contains($permission, 'restore')
                && !str_contains($permission, 'impersonate')
                && !str_contains($permission, 'manage_permissions')
                && !str_contains($permission, 'assign_roles')
                && !str_contains($permission, 'manage_tokens')
                && !str_contains($permission, 'settings.');
        });
        $manager = Role::firstOrCreate(['name' => 'manager', 'guard_name' => 'web']);
        $manager->syncPermissions($managerPermissions);

        // Staff - can view and create, limited update, no delete
        $staffPermissions = array_filter($allPermissions, function ($permission) {
            // Staff can view and create most things
            if (str_contains($permission, 'view') || str_contains($permission, 'view_any')) {
                return true;
            }
            // Staff can create some things
            if (str_contains($permission, 'create') && !str_contains($permission, 'users.') && !str_contains($permission, 'roles.')) {
                return true;
            }
            // Staff can update their own area
            if (str_contains($permission, 'update') && (
                str_contains($permission, 'attendances') ||
                str_contains($permission, 'posts') ||
                str_contains($permission, 'portfolios')
            )) {
                return true;
            }
            // Attendance specific
            if (str_contains($permission, 'check_in') ||
                str_contains($permission, 'check_out') ||
                str_contains($permission, 'scan_qr')) {
                return true;
            }
            // Dashboard
            if ($permission === 'dashboard.view') {
                return true;
            }
            return false;
        });
        $staff = Role::firstOrCreate(['name' => 'staff', 'guard_name' => 'web']);
        $staff->syncPermissions($staffPermissions);

        // Employee - basic permissions for employees to check attendance
        $employeePermissions = [
            'dashboard.view',
            'attendances.view',
            'attendances.view_any',
            'attendances.check_in',
            'attendances.check_out',
            'attendances.scan_qr',
            'employees.view',
            'employees.view_any',
        ];
        $employee = Role::firstOrCreate(['name' => 'employee', 'guard_name' => 'web']);
        $employee->syncPermissions($employeePermissions);

        // Guest/Viewer - read-only access
        $viewerPermissions = array_filter($allPermissions, function ($permission) {
            return str_contains($permission, 'view');
        });
        $viewer = Role::firstOrCreate(['name' => 'viewer', 'guard_name' => 'web']);
        $viewer->syncPermissions($viewerPermissions);

        $this->command->info('Created roles: super-admin, admin, manager, staff, employee, viewer');
    }
}
