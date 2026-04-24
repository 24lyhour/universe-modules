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
            // Employee Module (includes Geofence/Locations)
            'employee' => [
                'employees', 'employee_types', 'attendances', 'locations',
                'attendance_scans', 'employee_experiences', 'permission_requests',
                'employee_family_members', 'employee_academic_levels',
                'employee_foreign_languages', 'employee_job_experiences'
            ],

            // School Module
            'school' => ['schools', 'departments', 'classrooms', 'courses', 'programs', 'equipment'],

            // Blog Module
            'blog' => ['posts', 'banners', 'special_offers', 'slider_shows'],

            // Company Module
            'company' => ['companies'],

            // Hotel Module
            'hotel' => ['hotels', 'hotel_categories', 'hotel_amenities', 'hotel_rooms', 'hotel_reviews', 'hotel_provinces', 'hotel_room_policies'],

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
                'products', 'product_types', 'brands', 'product_variants', 'product_attributes',
                'product_attribute_values', 'product_add_ons', 'product_upsells'
            ],

            // Booking Module
            'booking' => ['bookings', 'booking_addons', 'booking_room_rates'],

            // Order Module
            'order' => [
                'orders', 'order_items', 'order_shipping',
                'carts', 'cart_items',
                'product_reviews', 'outlet_reviews',
                'shipping_zones', 'refunds'
            ],

            // Payment Module
            'payment' => ['payments'],

            // Report Module
            'report' => ['reports'],

            // Media Module (for avatars, images, files)
            'media' => ['media'],

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

            // Geofence Location specific
            'locations.export',
            'locations.import',
            'locations.manage_schedule',
            'locations.toggle_status',
            'locations.view_map',
            'locations.generate_qr',
            'locations.scan_qr',
            'locations.assign_department',
            'locations.view_analytics',
            'locations.manage_geofence',
            'locations.manage_polygon',
            'locations.view_scans',

            // Attendance Scans specific
            'attendance_scans.export',
            'attendance_scans.view_details',
            'attendance_scans.verify',
            'attendance_scans.view_map',

            // Attendance Analytics specific
            'attendances.view_analytics',
            'attendances.view_reports',
            'attendances.bulk_update',
            'attendances.bulk_delete',

            // Employee specific
            'employees.export',
            'employees.import',
            'employees.assign_department',
            'employees.manage_schedule',
            'employees.view_attendance',
            'employees.generate_qr',

            // Employee Types specific
            'employee_types.export',
            'employee_types.import',

            // Permission Requests specific
            'permission_requests.approve',
            'permission_requests.reject',
            'permission_requests.review',
            'permission_requests.export',
            'permission_requests.create_own',
            'permission_requests.view_own',

            // Employee account management
            'employees.create_account',
            'employees.change_password',
            'employees.manage_account',
            'employees.bulk_delete',
            'employees.toggle_status',

            // School specific
            'schools.export',
            'schools.import',
            'schools.manage_departments',
            'schools.manage_programs',
            'schools.view_statistics',
            'schools.view_analytics',
            'schools.manage_settings',

            // Department specific
            'departments.export',
            'departments.import',
            'departments.generate_qr',
            'departments.scan_qr',
            'departments.assign_location',
            'departments.view_analytics',
            'departments.manage_geofence',
            'departments.view_employees',
            'departments.assign_head',

            // Classroom specific
            'classrooms.export',
            'classrooms.import',
            'classrooms.assign_department',
            'classrooms.manage_schedule',
            'classrooms.view_capacity',

            // Course specific
            'courses.export',
            'courses.import',
            'courses.assign_program',
            'courses.manage_schedule',

            // Program specific
            'programs.export',
            'programs.import',
            'programs.assign_courses',
            'programs.view_statistics',

            // Equipment specific
            'equipment.export',
            'equipment.import',
            'equipment.assign_classroom',
            'equipment.track_status',

            // User specific
            'users.assign_roles',
            'users.manage_permissions',
            'users.impersonate',
            'users.suspend',
            'users.unsuspend',
            'users.force_logout',

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
            'dashboard.hotel',
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

            // ==========================================
            // ORDER MODULE PERMISSIONS
            // ==========================================

            // Order specific
            'orders.export',
            'orders.import',
            'orders.update_status',
            'orders.update_payment_status',
            'orders.status_modal',
            'orders.cancel',
            'orders.refund',
            'orders.print',
            'orders.track',
            'orders.assign_driver',
            'orders.view_map',
            'orders.bulk_update_status',
            'orders.bulk_delete',

            // Cart specific
            'carts.export',
            'carts.convert_to_order',
            'carts.toggle_status',
            'carts.clear_items',
            'carts.checkout',
            'carts.bulk_delete',

            // Product Reviews specific
            'product_reviews.export',
            'product_reviews.reply',
            'product_reviews.toggle_active',
            'product_reviews.approve',
            'product_reviews.reject',
            'product_reviews.bulk_delete',

            // Outlet Reviews specific
            'outlet_reviews.export',
            'outlet_reviews.reply',
            'outlet_reviews.toggle_active',
            'outlet_reviews.approve',
            'outlet_reviews.reject',
            'outlet_reviews.bulk_delete',

            // Shipping Zones specific
            'shipping_zones.export',
            'shipping_zones.import',
            'shipping_zones.toggle_active',
            'shipping_zones.check_delivery',
            'shipping_zones.view_map',
            'shipping_zones.bulk_delete',

            // Refunds specific
            'refunds.export',
            'refunds.approve',
            'refunds.reject',
            'refunds.process',
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
            // Force logout - default for all users
            if ($permission === 'users.force_logout') {
                return true;
            }
            return false;
        });
        $staff = Role::firstOrCreate(['name' => 'staff', 'guard_name' => 'web']);
        $staff->syncPermissions($staffPermissions);

        // Employee - basic permissions for employees to check attendance and manage their own data
        $employeePermissions = [
            'dashboard.view',
            'dashboard.employee',
            // Attendance
            'attendances.view',
            'attendances.view_any',
            'attendances.check_in',
            'attendances.check_out',
            'attendances.scan_qr',
            // Employee profile
            'employees.view',
            'employees.view_any',
            // Permission requests (own)
            'permission_requests.view',
            'permission_requests.view_any',
            'permission_requests.create',
            'permission_requests.create_own',
            'permission_requests.view_own',
            // Locations (for scanning)
            'locations.view',
            'locations.view_any',
            'locations.scan_qr',
            // User
            'users.force_logout',
        ];
        $employee = Role::firstOrCreate(['name' => 'employee', 'guard_name' => 'web']);
        $employee->syncPermissions($employeePermissions);

        // Guest/Viewer - read-only access
        $viewerPermissions = array_filter($allPermissions, function ($permission) {
            // View permissions
            if (str_contains($permission, 'view')) {
                return true;
            }
            // Force logout - default for all users
            if ($permission === 'users.force_logout') {
                return true;
            }
            return false;
        });
        $viewer = Role::firstOrCreate(['name' => 'viewer', 'guard_name' => 'web']);
        $viewer->syncPermissions($viewerPermissions);

        $this->command->info('Created roles: super-admin, admin, manager, staff, employee, viewer');
    }
}
