<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of roles.
     */
    public function index(Request $request): Response
    {
        $query = Role::with('permissions')
            ->withCount('users');

        if ($request->filled('search')) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }

        $roles = $query->orderBy('name')->paginate(10)->withQueryString();

        return Inertia::render('dashboard/settings/roles/Index', [
            'roles' => $roles,
            'filters' => [
                'search' => $request->search,
            ],
        ]);
    }

    /**
     * Show the form for creating a new role.
     */
    public function create(): Response
    {
        $permissions = Permission::orderBy('name')->get();
        $groupedPermissions = $this->groupPermissions($permissions);

        return Inertia::render('dashboard/settings/roles/Create', [
            'groupedPermissions' => $groupedPermissions,
        ]);
    }

    /**
     * Show the form for editing the specified role.
     */
    public function edit(Role $role): Response
    {
        $role->load('permissions');
        $permissions = Permission::orderBy('name')->get();
        $groupedPermissions = $this->groupPermissions($permissions);

        return Inertia::render('dashboard/settings/roles/Edit', [
            'role' => [
                'id' => $role->id,
                'name' => $role->name,
                'guard_name' => $role->guard_name,
                'permissions' => $role->permissions->map(fn ($p) => [
                    'id' => $p->id,
                    'name' => $p->name,
                ]),
            ],
            'groupedPermissions' => $groupedPermissions,
        ]);
    }

    /**
     * Store a newly created role.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:roles,name',
            'permissions' => 'array',
            'permissions.*' => 'exists:permissions,id',
        ]);

        $role = Role::create([
            'name' => $validated['name'],
            'guard_name' => 'web',
        ]);

        if (!empty($validated['permissions'])) {
            $role->syncPermissions(Permission::whereIn('id', $validated['permissions'])->get());
        }

        return redirect()->route('roles.index')
            ->with('success', 'Role created successfully.');
    }

    /**
     * Display the specified role (redirects to edit).
     */
    public function show(Role $role)
    {
        return redirect()->route('roles.edit', $role);
    }

    /**
     * Update the specified role.
     */
    public function update(Request $request, Role $role)
    {
        // Prevent editing super-admin role name
        $validated = $request->validate([
            'name' => $role->name === 'super-admin'
                ? 'sometimes'
                : 'required|string|max:255|unique:roles,name,' . $role->id,
            'permissions' => 'array',
            'permissions.*' => 'exists:permissions,id',
        ]);

        if ($role->name !== 'super-admin' && isset($validated['name'])) {
            $role->update(['name' => $validated['name']]);
        }

        if (isset($validated['permissions'])) {
            $role->syncPermissions(Permission::whereIn('id', $validated['permissions'])->get());
        }

        return redirect()->route('roles.index')
            ->with('success', 'Role updated successfully.');
    }

    /**
     * Remove the specified role.
     */
    public function destroy(Role $role)
    {
        // Prevent deleting system roles
        if (in_array($role->name, ['super-admin', 'admin', 'manager', 'staff', 'employee', 'viewer'])) {
            return redirect()->route('roles.index')
                ->with('error', 'Cannot delete system roles.');
        }

        $role->delete();

        return redirect()->route('roles.index')
            ->with('success', 'Role deleted successfully.');
    }

    /**
     * Group permissions by module then by resource for hierarchical UI display.
     */
    private function groupPermissions($permissions): array
    {
        // Define module to resources mapping
        $moduleResourceMap = [
            'Employee' => ['employees', 'employee_types', 'attendances'],
            'School' => ['schools', 'departments', 'classrooms', 'courses', 'programs', 'equipment'],
            'Blog' => ['posts'],
            'Company' => ['companies'],
            'Hotel' => ['hotels'],
            'Customer' => ['customers', 'customer_otps'],
            'Movie' => ['movices'],
            'Outlet' => ['outlets', 'outlet_types'],
            'Portfolio' => ['portfolios', 'pages', 'sections', 'services', 'testimonials', 'headers', 'footers', 'site_settings', 'contact_messages'],
            'Menu' => ['menus', 'menu_types', 'categories'],
            'Wallets' => ['wallets', 'transactions'],
            'Product' => ['products', 'product_variants', 'product_attributes', 'product_attribute_values', 'product_add_ons', 'product_upsells'],
            'Booking' => ['bookings'],
            'Order' => ['orders'],
            'Payment' => ['payments'],
            'Report' => ['reports'],
            'User Management' => ['users', 'roles', 'permissions'],
            'Settings' => ['settings', 'configurations', 'login_settings'],
            'Dashboard' => ['dashboard', 'analytics'],
        ];

        // Create reverse mapping: resource -> module
        $resourceToModule = [];
        foreach ($moduleResourceMap as $module => $resources) {
            foreach ($resources as $resource) {
                $resourceToModule[$resource] = $module;
            }
        }

        // Group permissions by module then by resource
        $grouped = [];

        foreach ($permissions as $permission) {
            $parts = explode('.', $permission->name);
            $resource = $parts[0] ?? 'general';
            $action = $parts[1] ?? $permission->name;

            // Find the module for this resource
            $module = $resourceToModule[$resource] ?? 'Other';

            if (!isset($grouped[$module])) {
                $grouped[$module] = [
                    'resources' => [],
                    'totalPermissions' => 0,
                ];
            }

            if (!isset($grouped[$module]['resources'][$resource])) {
                $grouped[$module]['resources'][$resource] = [];
            }

            $grouped[$module]['resources'][$resource][] = [
                'id' => $permission->id,
                'name' => $permission->name,
                'action' => $action,
            ];

            $grouped[$module]['totalPermissions']++;
        }

        // Sort modules and resources within each module
        ksort($grouped);
        foreach ($grouped as &$moduleData) {
            ksort($moduleData['resources']);
        }

        return $grouped;
    }
}
