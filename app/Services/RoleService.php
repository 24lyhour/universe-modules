<?php

namespace App\Services;

use Illuminate\Support\Collection;
use Spatie\Permission\Models\Permission;

class RoleService
{
    public function __construct(
        protected TenantService $tenantService
    ) {}

    /**
     * Get module resources mapping from config.
     */
    public function getModuleResourceMap(): array
    {
        return config('tenant-permissions.module_resources', []);
    }

    /**
     * Get tenant modules mapping from config.
     */
    public function getTenantModules(): array
    {
        return config('tenant-permissions.tenant_modules', []);
    }

    /**
     * Get widget module mapping from config.
     */
    public function getWidgetModuleMap(): array
    {
        return config('tenant-permissions.widget_modules', []);
    }

    /**
     * Check if the current user is a super-admin.
     */
    public function isSuperAdmin(): bool
    {
        return auth()->user()?->hasRole('super-admin') ?? false;
    }

    /**
     * Check if the current user can manage all modules (super-admin or admin without tenant).
     */
    public function canManageAllModules(): bool
    {
        $user = auth()->user();
        if (!$user) {
            return false;
        }

        // Super-admin can always manage all
        if ($user->hasRole('super-admin')) {
            return true;
        }

        // Admin without tenant can manage all
        if ($user->hasRole('admin') && !$this->tenantService->hasTenant()) {
            return true;
        }

        return false;
    }

    /**
     * Get allowed modules based on user's tenant type.
     * Returns null if all modules are allowed (super-admin/admin).
     */
    public function getAllowedModules(): ?array
    {
        if ($this->canManageAllModules()) {
            return null; // All modules allowed
        }

        $tenantModules = $this->getTenantModules();

        // Start with common modules
        $allowedModules = $tenantModules['common'] ?? [];

        // Add modules based on tenant type
        foreach ($tenantModules as $tenantType => $modules) {
            if ($tenantType !== 'common' && $this->tenantService->hasTenantType($tenantType)) {
                $allowedModules = array_merge($allowedModules, $modules);
            }
        }

        return array_unique($allowedModules);
    }

    /**
     * Get allowed permission IDs based on user's role and tenant type.
     */
    public function getAllowedPermissionIds(): ?array
    {
        $allowedModules = $this->getAllowedModules();

        if ($allowedModules === null) {
            return null; // All permissions allowed (super-admin or admin)
        }

        $moduleResourceMap = $this->getModuleResourceMap();
        $widgetModuleMap = $this->getWidgetModuleMap();

        // Build allowed resources from allowed modules
        $allowedResources = [];
        foreach ($allowedModules as $module) {
            if (isset($moduleResourceMap[$module])) {
                $allowedResources = array_merge($allowedResources, $moduleResourceMap[$module]);
            }
        }

        // Filter permissions
        $allowedPermissions = Permission::all()->filter(function ($permission) use ($allowedResources, $allowedModules, $widgetModuleMap) {
            $parts = explode('.', $permission->name);
            $resource = $parts[0] ?? '';

            // Handle dashboard widget permissions
            if ($resource === 'dashboard' && isset($parts[1]) && isset($widgetModuleMap[$parts[1]])) {
                return in_array($widgetModuleMap[$parts[1]], $allowedModules);
            }

            return in_array($resource, $allowedResources);
        });

        return $allowedPermissions->pluck('id')->toArray();
    }

    /**
     * Filter permission IDs to only allowed ones for tenant users.
     * For tenant users updating roles, preserves out-of-scope permissions.
     */
    public function filterPermissionIds(array $permissionIds, ?array $existingPermissionIds = null): array
    {
        $allowedPermissionIds = $this->getAllowedPermissionIds();

        if ($allowedPermissionIds === null) {
            return $permissionIds; // Super-admin can use all permissions
        }

        $filteredIds = array_intersect($permissionIds, $allowedPermissionIds);

        // If updating, preserve existing permissions outside of user's scope
        if ($existingPermissionIds !== null) {
            $outOfScopePermissions = array_filter(
                $existingPermissionIds,
                fn ($id) => !in_array($id, $allowedPermissionIds)
            );

            $filteredIds = array_merge($filteredIds, $outOfScopePermissions);
        }

        return array_values(array_unique($filteredIds));
    }

    /**
     * Group permissions by module then by resource for hierarchical UI display.
     */
    public function groupPermissions(Collection $permissions, ?array $allowedModules = null): array
    {
        $moduleResourceMap = $this->getModuleResourceMap();
        $widgetModuleMap = $this->getWidgetModuleMap();

        // Get allowed widget actions based on allowed modules
        $allowedWidgetActions = array_keys($widgetModuleMap);
        if ($allowedModules !== null) {
            $allowedWidgetActions = array_keys(
                array_filter($widgetModuleMap, fn ($module) => in_array($module, $allowedModules))
            );
        }

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

            // Special handling for dashboard widget permissions
            if ($resource === 'dashboard' && isset($widgetModuleMap[$action])) {
                // Skip if this widget action is not allowed
                if (!in_array($action, $allowedWidgetActions)) {
                    continue;
                }
                $resource = 'dashboard_widgets';
                $action = ucfirst($action);
            }

            // Find the module for this resource
            $module = $resourceToModule[$resource] ?? 'Other';

            // Skip if module is not in allowed list
            if ($allowedModules !== null && !in_array($module, $allowedModules)) {
                continue;
            }

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

        // Sort modules and resources
        ksort($grouped);
        foreach ($grouped as &$moduleData) {
            ksort($moduleData['resources']);
        }

        return $grouped;
    }

    /**
     * Get system roles that cannot be deleted.
     */
    public function getSystemRoles(): array
    {
        return ['super-admin', 'admin', 'manager', 'staff', 'employee', 'viewer'];
    }

    /**
     * Check if a role is a system role.
     */
    public function isSystemRole(string $roleName): bool
    {
        return in_array($roleName, $this->getSystemRoles());
    }
}
