<?php

namespace App\Actions\Settings\Role;

use App\Services\RoleService;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class CreateRoleAction
{
    public function __construct(
        protected RoleService $roleService
    ) {}

    /**
     * Create a new role with permissions.
     */
    public function execute(array $validated): Role
    {
        // Filter permissions to only allowed ones for tenant users
        $permissionIds = $this->roleService->filterPermissionIds(
            $validated['permissions'] ?? []
        );

        $role = Role::create([
            'name' => $validated['name'],
            'guard_name' => 'web',
        ]);

        if (!empty($permissionIds)) {
            $role->syncPermissions(Permission::whereIn('id', $permissionIds)->get());
        }

        return $role;
    }
}
