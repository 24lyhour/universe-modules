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
        'toggle-status' => 'update',
        'restore' => 'restore',
        'force-delete' => 'force_delete',
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
