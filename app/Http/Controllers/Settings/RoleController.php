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

        return redirect()->route('settings.roles.index')
            ->with('success', 'Role created successfully.');
    }

    /**
     * Display the specified role (redirects to edit).
     */
    public function show(Role $role)
    {
        return redirect()->route('settings.roles.edit', $role);
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

        return redirect()->route('settings.roles.index')
            ->with('success', 'Role updated successfully.');
    }

    /**
     * Remove the specified role.
     */
    public function destroy(Role $role)
    {
        // Prevent deleting system roles
        if (in_array($role->name, ['super-admin', 'admin', 'manager', 'staff', 'employee', 'viewer'])) {
            return redirect()->route('settings.roles.index')
                ->with('error', 'Cannot delete system roles.');
        }

        $role->delete();

        return redirect()->route('settings.roles.index')
            ->with('success', 'Role deleted successfully.');
    }

    /**
     * Group permissions by module for UI display.
     */
    private function groupPermissions($permissions): array
    {
        $grouped = [];

        foreach ($permissions as $permission) {
            $parts = explode('.', $permission->name);
            $resource = $parts[0] ?? 'general';

            if (!isset($grouped[$resource])) {
                $grouped[$resource] = [];
            }

            $grouped[$resource][] = [
                'id' => $permission->id,
                'name' => $permission->name,
                'action' => $parts[1] ?? $permission->name,
            ];
        }

        ksort($grouped);

        return $grouped;
    }
}
