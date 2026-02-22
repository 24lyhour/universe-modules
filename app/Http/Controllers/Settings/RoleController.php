<?php

namespace App\Http\Controllers\Settings;

use App\Actions\Settings\Role\CreateRoleAction;
use App\Actions\Settings\Role\DeleteRoleAction;
use App\Actions\Settings\Role\UpdateRoleAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\StoreRoleRequest;
use App\Http\Requests\Settings\UpdateRoleRequest;
use App\Services\RoleService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public function __construct(
        protected RoleService $roleService
    ) {}

    /**
     * Display a listing of roles.
     */
    public function index(Request $request): Response
    {
        $query = Role::with('permissions')
            ->withCount('users');

        // Tenant users (non-super-admin) cannot see super-admin role
        if (!$this->roleService->isSuperAdmin()) {
            $query->where('name', '!=', 'super-admin');
        }

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
        $allowedModules = $this->roleService->getAllowedModules();
        $groupedPermissions = $this->roleService->groupPermissions($permissions, $allowedModules);

        return Inertia::render('dashboard/settings/roles/Create', [
            'groupedPermissions' => $groupedPermissions,
        ]);
    }

    /**
     * Show the form for editing the specified role.
     */
    public function edit(Role $role): Response
    {
        // Prevent non-super-admin from editing super-admin role
        if ($role->name === 'super-admin' && !$this->roleService->isSuperAdmin()) {
            abort(403, 'You are not authorized to edit this role.');
        }

        $role->load('permissions');
        $permissions = Permission::orderBy('name')->get();
        $allowedModules = $this->roleService->getAllowedModules();
        $groupedPermissions = $this->roleService->groupPermissions($permissions, $allowedModules);

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
    public function store(StoreRoleRequest $request, CreateRoleAction $action): RedirectResponse
    {
        $action->execute($request->validated());

        return redirect()->route('roles.index')
            ->with('success', 'Role created successfully.');
    }

    /**
     * Display the specified role (redirects to edit).
     */
    public function show(Role $role): RedirectResponse
    {
        // Prevent non-super-admin from viewing super-admin role
        if ($role->name === 'super-admin' && !$this->roleService->isSuperAdmin()) {
            abort(403, 'You are not authorized to view this role.');
        }

        return redirect()->route('roles.edit', $role);
    }

    /**
     * Update the specified role.
     */
    public function update(UpdateRoleRequest $request, Role $role, UpdateRoleAction $action): RedirectResponse
    {
        $action->execute($role, $request->validated());

        return redirect()->route('roles.index')
            ->with('success', 'Role updated successfully.');
    }

    /**
     * Remove the specified role.
     */
    public function destroy(Role $role, DeleteRoleAction $action): RedirectResponse
    {
        try {
            $action->execute($role);

            return redirect()->route('roles.index')
                ->with('success', 'Role deleted successfully.');
        } catch (\Exception $e) {
            return redirect()->route('roles.index')
                ->with('error', $e->getMessage());
        }
    }
}
