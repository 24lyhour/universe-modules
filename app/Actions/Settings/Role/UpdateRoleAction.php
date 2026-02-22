<?php

namespace App\Actions\Settings\Role;

use App\Services\RoleService;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UpdateRoleAction
{
    public function __construct(
        protected RoleService $roleService
    ) {}

    /**
     * Update an existing role with permissions.
     */
    public function execute(Role $role, array $validated): Role
    {
        // Update role name (except for super-admin)
        if ($role->name !== 'super-admin' && isset($validated['name'])) {
            $role->update(['name' => $validated['name']]);
        }

        // Update permissions if provided
        if (isset($validated['permissions'])) {
            $existingPermissionIds = $role->permissions->pluck('id')->toArray();

            // Filter permissions, preserving out-of-scope permissions for tenant users
            $permissionIds = $this->roleService->filterPermissionIds(
                $validated['permissions'],
                $existingPermissionIds
            );

            $role->syncPermissions(Permission::whereIn('id', $permissionIds)->get());
        }

        return $role;
    }
}
