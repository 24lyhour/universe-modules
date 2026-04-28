<?php

namespace Database\Seeders;

use App\Enums\CorePermissionEnum;
use Illuminate\Database\Seeder;
use Modules\Booking\Enums\PermissionEnum as BookingPermission;
use Modules\Menu\Enums\PermissionEnum as MenuPermission;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

/**
 * Seeds permissions and role assignments.
 *
 * Permissions come from two places:
 *
 *  1) ENUMS — preferred. CorePermissionEnum (parent app) plus one
 *     PermissionEnum per migrated module (see permissionEnums()).
 *
 *  2) Inline registry — legacy modules not yet migrated to the enum
 *     pattern. Each module declares CRUD resources and per-resource
 *     extras (toggle_status, export, etc.). Migrate them one by one
 *     by creating a Modules\<Name>\Enums\PermissionEnum and registering
 *     it in permissionEnums() — then drop its block from $modules.
 */
class RolesAndPermissionsSeeder extends Seeder
{
    /** Standard CRUD applied to every resource in the inline registry. */
    private const CRUD = ['view', 'view_any', 'create', 'update', 'delete', 'restore', 'force_delete'];

    public function run(): void
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = $this->collectPermissions();

        foreach ($permissions as $name) {
            Permission::firstOrCreate(['name' => $name, 'guard_name' => 'web']);
        }

        $this->createRoles($permissions);

        $this->command->info('Roles and permissions seeded successfully!');
        $this->command->info('Created ' . count($permissions) . ' permissions');
    }

    // ─── Aggregation ───────────────────────────────────────────────

    /**
     * Merge enum-based permissions and the legacy inline registry,
     * deduplicate, and return.
     *
     * @return array<int, string>
     */
    protected function collectPermissions(): array
    {
        $sources = array_merge(
            CorePermissionEnum::values(),
            ...array_map(
                static fn (string $enum): array => $enum::values(),
                $this->permissionEnums(),
            ),
            $this->buildLegacyPermissions(),
        );

        return array_values(array_unique($sources));
    }

    /**
     * FQCN list of module PermissionEnum classes.
     * Add a class here when migrating a module to the enum pattern.
     *
     * @return array<int, class-string>
     */
    protected function permissionEnums(): array
    {
        return [
            MenuPermission::class,
            BookingPermission::class,
        ];
    }

    // ─── Legacy inline registry ────────────────────────────────────

    /**
     * Modules NOT yet migrated to PermissionEnum classes.
     * When a module gets its own enum, remove its block here.
     *
     * Note: Menu and Booking are absent — they're sourced from enums.
     *
     * @return array<int, string>
     */
    protected function buildLegacyPermissions(): array
    {
        $out = [];
        foreach ($this->legacyModules() as $config) {
            foreach ($config['resources'] ?? [] as $resource) {
                foreach (self::CRUD as $action) {
                    $out[] = "{$resource}.{$action}";
                }
            }
            foreach ($config['extras'] ?? [] as $resource => $actions) {
                foreach ($actions as $action) {
                    $out[] = "{$resource}.{$action}";
                }
            }
            foreach ($config['module'] ?? [] as $key) {
                $out[] = $key;
            }
        }
        return $out;
    }

    /**
     * @return array<string, array{resources?:array,extras?:array,module?:array}>
     */
    protected function legacyModules(): array
    {
        return [
            'employee' => [
                'resources' => [
                    'employees', 'employee_types', 'attendances', 'locations',
                    'attendance_scans', 'employee_experiences', 'permission_requests',
                    'employee_family_members', 'employee_academic_levels',
                    'employee_foreign_languages', 'employee_job_experiences',
                ],
                'extras' => [
                    'attendances' => [
                        'check_in', 'check_out', 'scan_qr', 'export', 'import',
                        'view_analytics', 'view_reports', 'bulk_update', 'bulk_delete',
                    ],
                    'locations' => [
                        'export', 'import', 'manage_schedule', 'toggle_status', 'view_map',
                        'generate_qr', 'scan_qr', 'assign_department', 'view_analytics',
                        'manage_geofence', 'manage_polygon', 'view_scans',
                    ],
                    'attendance_scans' => ['export', 'view_details', 'verify', 'view_map'],
                    'employees' => [
                        'export', 'import', 'assign_department', 'manage_schedule',
                        'view_attendance', 'generate_qr',
                        'create_account', 'change_password', 'manage_account',
                        'bulk_delete', 'toggle_status',
                    ],
                    'employee_types' => ['export', 'import'],
                    'permission_requests' => [
                        'approve', 'reject', 'review', 'export',
                        'create_own', 'view_own',
                    ],
                ],
            ],

            'school' => [
                'resources' => ['schools', 'departments', 'classrooms', 'courses', 'programs', 'equipment'],
                'extras' => [
                    'schools' => [
                        'export', 'import', 'manage_departments', 'manage_programs',
                        'view_statistics', 'view_analytics', 'manage_settings',
                    ],
                    'departments' => [
                        'export', 'import', 'generate_qr', 'scan_qr', 'assign_location',
                        'view_analytics', 'manage_geofence', 'view_employees', 'assign_head',
                    ],
                    'classrooms' => ['export', 'import', 'assign_department', 'manage_schedule', 'view_capacity'],
                    'courses' => ['export', 'import', 'assign_program', 'manage_schedule'],
                    'programs' => ['export', 'import', 'assign_courses', 'view_statistics'],
                    'equipment' => ['export', 'import', 'assign_classroom', 'track_status'],
                ],
            ],

            'blog' => [
                'resources' => ['posts', 'banners', 'special_offers', 'slider_shows'],
                'extras' => [
                    'posts' => ['publish', 'unpublish', 'export'],
                ],
            ],

            'company' => [
                'resources' => ['companies'],
            ],

            'hotel' => [
                'resources' => [
                    'hotels', 'hotel_categories', 'hotel_amenities',
                    'hotel_rooms', 'hotel_reviews', 'hotel_provinces', 'hotel_room_policies',
                ],
                'extras' => [
                    'hotels' => ['toggle_status', 'export', 'import'],
                    'hotel_rooms' => ['toggle_status', 'mute', 'unmute'],
                    'hotel_reviews' => ['approve', 'reject', 'reply'],
                ],
            ],

            'customer' => [
                'resources' => ['customers', 'customer_otps'],
                'extras' => [
                    'customers' => ['export', 'import', 'suspend', 'unsuspend'],
                ],
            ],

            'movice' => [
                'resources' => ['movices'],
            ],

            'outlet' => [
                'resources' => ['outlets', 'outlet_types'],
                'extras' => [
                    'outlets' => ['toggle_status', 'export', 'import', 'manage_schedule'],
                ],
            ],

            'portfolio' => [
                'resources' => [
                    'portfolios', 'pages', 'sections', 'services',
                    'testimonials', 'headers', 'footers', 'site_settings', 'contact_messages',
                ],
            ],

            'wallets' => [
                'resources' => ['wallets', 'transactions'],
                'extras' => [
                    'wallets' => ['top_up', 'withdraw', 'freeze', 'unfreeze'],
                    'transactions' => ['export', 'refund'],
                ],
            ],

            'product' => [
                'resources' => [
                    'products', 'product_types', 'brands', 'product_variants',
                    'product_attributes', 'product_attribute_values',
                    'product_add_ons', 'product_upsells',
                ],
                'extras' => [
                    'products' => ['toggle_status', 'mute', 'unmute', 'export', 'import', 'bulk_delete'],
                ],
            ],

            'order' => [
                'resources' => [
                    'orders', 'order_items', 'order_shipping',
                    'carts', 'cart_items',
                    'product_reviews', 'outlet_reviews',
                    'shipping_zones', 'refunds',
                ],
                'extras' => [
                    'orders' => [
                        'export', 'import', 'update_status', 'update_payment_status',
                        'status_modal', 'cancel', 'refund', 'print', 'track',
                        'assign_driver', 'view_map', 'bulk_update_status', 'bulk_delete',
                    ],
                    'carts' => [
                        'export', 'convert_to_order', 'toggle_status',
                        'clear_items', 'checkout', 'bulk_delete',
                    ],
                    'product_reviews' => [
                        'export', 'reply', 'toggle_active', 'approve', 'reject', 'bulk_delete',
                    ],
                    'outlet_reviews' => [
                        'export', 'reply', 'toggle_active', 'approve', 'reject', 'bulk_delete',
                    ],
                    'shipping_zones' => [
                        'export', 'import', 'toggle_active', 'check_delivery',
                        'view_map', 'bulk_delete',
                    ],
                    'refunds' => ['export', 'approve', 'reject', 'process'],
                ],
            ],

            'payment' => [
                'resources' => ['payments'],
                'extras' => [
                    'payments' => ['refund', 'export', 'reconcile'],
                ],
            ],

            'report' => [
                'resources' => ['reports'],
            ],
        ];
    }

    // ─── Role assignment ───────────────────────────────────────────

    /** @param  array<int, string>  $allPermissions */
    private function createRoles(array $allPermissions): void
    {
        $this->syncRole('super-admin', $allPermissions);

        $admin = $this->filter($allPermissions, fn ($p) =>
            !$this->matches($p, ['force_delete', 'impersonate', 'manage_permissions'])
        );
        $this->syncRole('admin', $admin);

        $manager = $this->filter($allPermissions, fn ($p) =>
            !$this->matches($p, [
                'force_delete', 'restore', 'impersonate',
                'manage_permissions', 'assign_roles', 'manage_tokens',
            ]) && !str_starts_with($p, 'settings.')
        );
        $this->syncRole('manager', $manager);

        $staff = $this->filter($allPermissions, function (string $p): bool {
            if ($this->matches($p, ['view', 'view_any'])) return true;

            if (str_ends_with($p, '.create')
                && !str_starts_with($p, 'users.')
                && !str_starts_with($p, 'roles.')
                && !str_starts_with($p, 'permissions.')) {
                return true;
            }

            if (str_ends_with($p, '.update') && $this->matches($p, ['attendances', 'posts', 'portfolios'])) {
                return true;
            }

            if ($this->matches($p, ['check_in', 'check_out', 'scan_qr'])) return true;

            return $p === CorePermissionEnum::DASHBOARD_VIEW->value
                || $p === CorePermissionEnum::USERS_FORCE_LOGOUT->value;
        });
        $this->syncRole('staff', $staff);

        $this->syncRole('employee', [
            CorePermissionEnum::DASHBOARD_VIEW->value,
            CorePermissionEnum::DASHBOARD_EMPLOYEE->value,
            CorePermissionEnum::USERS_FORCE_LOGOUT->value,
            // Attendance + employee profile are still in the legacy registry
            // for now — bare strings until those modules get their enums.
            'attendances.view', 'attendances.view_any',
            'attendances.check_in', 'attendances.check_out', 'attendances.scan_qr',
            'employees.view', 'employees.view_any',
            'permission_requests.view', 'permission_requests.view_any',
            'permission_requests.create', 'permission_requests.create_own',
            'permission_requests.view_own',
            'locations.view', 'locations.view_any', 'locations.scan_qr',
        ]);

        $viewer = $this->filter($allPermissions, fn ($p) =>
            str_contains($p, 'view') || $p === CorePermissionEnum::USERS_FORCE_LOGOUT->value
        );
        $this->syncRole('viewer', $viewer);

        $this->command->info('Created roles: super-admin, admin, manager, staff, employee, viewer');
    }

    private function syncRole(string $name, array $permissions): void
    {
        $role = Role::firstOrCreate(['name' => $name, 'guard_name' => 'web']);
        $role->syncPermissions($permissions);
    }

    /** @param  array<int,string>  $set */
    private function filter(array $set, callable $predicate): array
    {
        return array_values(array_filter($set, $predicate));
    }

    private function matches(string $permission, array $needles): bool
    {
        foreach ($needles as $needle) {
            if (str_contains($permission, $needle)) {
                return true;
            }
        }
        return false;
    }
}
