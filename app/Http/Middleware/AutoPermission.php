<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Auto-Permission Middleware
 *
 * Automatically checks permissions based on route name pattern.
 * Route name pattern: {prefix}.{resource}.{action}
 * Permission pattern: {resource}.{action}
 *
 * Examples:
 * - Route: employee.employees.index -> Permission: employees.view_any
 * - Route: employee.employees.create -> Permission: employees.create
 * - Route: employee.employees.store -> Permission: employees.create
 * - Route: employee.employees.show -> Permission: employees.view
 * - Route: employee.employees.edit -> Permission: employees.update
 * - Route: employee.employees.update -> Permission: employees.update
 * - Route: employee.employees.destroy -> Permission: employees.delete
 */
class AutoPermission
{
    /**
     * Map route actions to permission actions
     */
    protected array $actionMap = [
        'index' => 'view_any',
        'create' => 'create',
        'store' => 'create',
        'show' => 'view',
        'edit' => 'update',
        'update' => 'update',
        'destroy' => 'delete',
        'confirm-delete' => 'delete',
        'delete' => 'delete',
        'bulk-delete' => 'delete',
        'toggle-status' => 'update',
        'restore' => 'restore',
        'force-delete' => 'force_delete',
        // Import/Export actions
        'import' => 'import',
        'export' => 'export',
        'template' => 'import',
        'preview' => 'import',
    ];

    /**
     * Routes that skip permission checks (accessible to all authenticated users)
     */
    protected array $skipRoutes = [
        'dashboard', // Main dashboard is accessible to all authenticated users
        'settings.index', // Settings dashboard
        'settings.update',
        'settings.order',
        'settings.toggle',
        'dashboard.product.settings', // Product settings
        'dashboard.product.settings.update',
        'media.index', // Media browsing for avatar/image selection
        'media.upload', // Media upload for avatar/image
    ];

    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next, ?string $resource = null): Response
    {
        $user = $request->user();

        // Super-admin bypasses all permission checks
        if ($user && $user->hasRole('super-admin')) {
            return $next($request);
        }

        $routeName = $request->route()->getName();

        if (!$routeName) {
            return $next($request);
        }

        // Skip permission check for routes in skipRoutes
        if (in_array($routeName, $this->skipRoutes)) {
            return $next($request);
        }

        // If resource is explicitly provided, use it
        if ($resource) {
            $permission = $this->resolvePermissionFromResource($routeName, $resource);
        } else {
            $permission = $this->resolvePermissionFromRoute($routeName);
        }

        if ($permission && $user && !$user->can($permission)) {
            abort(403, "You don't have permission to perform this action.");
        }

        return $next($request);
    }

    /**
     * Special routes that map to specific permissions
     */
    protected array $specialRoutes = [
        // Login Settings - maps to settings.manage permission
        'login-settings.index' => 'settings.manage',
        'login-settings.update' => 'settings.manage',
        'login-settings.remove-image' => 'settings.manage',
        'login-settings.remove-logo' => 'settings.manage',

        // School Module - Import/Export routes
        'school.departments.import' => 'departments.import',
        'school.departments.import.store' => 'departments.import',
        'school.departments.import.preview' => 'departments.import',
        'school.departments.export' => 'departments.export',
        'school.classrooms.import' => 'classrooms.import',
        'school.classrooms.import.store' => 'classrooms.import',
        'school.classrooms.import.preview' => 'classrooms.import',
        'school.classrooms.export' => 'classrooms.export',
        'school.courses.import' => 'courses.import',
        'school.courses.import.store' => 'courses.import',
        'school.courses.import.preview' => 'courses.import',
        'school.courses.export' => 'courses.export',
        'school.programs.import' => 'programs.import',
        'school.programs.import.store' => 'programs.import',
        'school.programs.import.preview' => 'programs.import',
        'school.programs.export' => 'programs.export',
        'school.equipment.import' => 'equipment.import',
        'school.equipment.import.store' => 'equipment.import',
        'school.equipment.import.preview' => 'equipment.import',
        'school.equipment.export' => 'equipment.export',

        // Employee Module - Import/Export routes
        'employee.employees.import' => 'employees.import',
        'employee.employees.import.store' => 'employees.import',
        'employee.employees.import.preview' => 'employees.import',
        'employee.employees.import.failed' => 'employees.import',
        'employee.employees.export' => 'employees.export',
        'employee.attendances.import' => 'attendances.import',
        'employee.attendances.import.store' => 'attendances.import',
        'employee.attendances.import.preview' => 'attendances.import',
        'employee.attendances.export' => 'attendances.export',
    ];

    /**
     * Resolve permission from route name automatically
     * Route format: {module}.{resource}.{action} or {resource}.{action}
     */
    protected function resolvePermissionFromRoute(string $routeName): ?string
    {
        // Check for special single-name routes
        if (isset($this->specialRoutes[$routeName])) {
            return $this->specialRoutes[$routeName];
        }

        $parts = explode('.', $routeName);

        if (count($parts) < 2) {
            // Single part route name - treat as resource with view_any permission
            $resource = str_replace('-', '_', $routeName);
            return "{$resource}.view_any";
        }

        // Handle compound import/export routes like: module.resource.import.store
        // or module.resource.import.preview -> should resolve to resource.import
        if (count($parts) >= 3) {
            $lastPart = end($parts);
            $secondLastPart = $parts[count($parts) - 2];

            // Check if this is an import/export compound route
            if (in_array($secondLastPart, ['import', 'export']) && in_array($lastPart, ['store', 'preview', 'failed', 'template'])) {
                // Get the resource (third from end)
                $resource = str_replace('-', '_', $parts[count($parts) - 3]);
                return "{$resource}.{$secondLastPart}";
            }
        }

        // Get the last two parts (resource.action)
        $action = array_pop($parts);
        $resource = array_pop($parts);

        // Convert hyphenated resource names to underscored (e.g., employee-types -> employee_types)
        $resource = str_replace('-', '_', $resource);

        // Map the action to permission action
        $permissionAction = $this->actionMap[$action] ?? $action;

        return "{$resource}.{$permissionAction}";
    }

    /**
     * Resolve permission when resource is explicitly provided
     */
    protected function resolvePermissionFromResource(string $routeName, string $resource): ?string
    {
        $parts = explode('.', $routeName);
        $action = end($parts);

        $permissionAction = $this->actionMap[$action] ?? $action;

        return "{$resource}.{$permissionAction}";
    }
}
