<?php

namespace App\Actions\Settings\Role;

use App\Services\RoleService;
use Spatie\Permission\Models\Role;

class DeleteRoleAction
{
    public function __construct(
        protected RoleService $roleService
    ) {}

    /**
     * Delete a role.
     *
     * @throws \Exception if role cannot be deleted
     */
    public function execute(Role $role): bool
    {
        // Prevent non-super-admin from deleting super-admin role
        if ($role->name === 'super-admin' && !$this->roleService->isSuperAdmin()) {
            throw new \Exception('You are not authorized to delete this role.');
        }

        // Prevent deleting system roles
        if ($this->roleService->isSystemRole($role->name)) {
            throw new \Exception('Cannot delete system roles.');
        }

        return $role->delete();
    }

    /**
     * Check if role can be deleted.
     */
    public function canDelete(Role $role): bool
    {
        if ($role->name === 'super-admin' && !$this->roleService->isSuperAdmin()) {
            return false;
        }

        return !$this->roleService->isSystemRole($role->name);
    }
}
