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

        // ==========================================
        // ORDER MODULE ROUTES
        // ==========================================

        // Orders
        'order.orders.index' => 'orders.view_any',
        'order.orders.create' => 'orders.create',
        'order.orders.store' => 'orders.create',
        'order.orders.show' => 'orders.view',
        'order.orders.edit' => 'orders.update',
        'order.orders.update' => 'orders.update',
        'order.orders.destroy' => 'orders.delete',
        'order.orders.status-modal' => 'orders.status_modal',
        'order.orders.update-status' => 'orders.update_status',
        'order.orders.update-payment-status' => 'orders.update_payment_status',
        'order.orders.export' => 'orders.export',
        'order.orders.import' => 'orders.import',
        'order.orders.cancel' => 'orders.cancel',
        'order.orders.refund' => 'orders.refund',
        'order.orders.print' => 'orders.print',
        'order.orders.track' => 'orders.track',
        'order.orders.assign-driver' => 'orders.assign_driver',
        'order.orders.bulk-delete' => 'orders.bulk_delete',

        // Carts
        'order.carts.index' => 'carts.view_any',
        'order.carts.create' => 'carts.create',
        'order.carts.store' => 'carts.create',
        'order.carts.show' => 'carts.view',
        'order.carts.edit' => 'carts.update',
        'order.carts.update' => 'carts.update',
        'order.carts.destroy' => 'carts.delete',
        'order.carts.convert-to-order' => 'carts.convert_to_order',
        'order.carts.toggle-status' => 'carts.toggle_status',
        'order.carts.clear-items' => 'carts.clear_items',
        'order.carts.export' => 'carts.export',
        'order.carts.bulk-delete' => 'carts.bulk_delete',

        // Product Reviews
        'order.product-reviews.index' => 'product_reviews.view_any',
        'order.product-reviews.create' => 'product_reviews.create',
        'order.product-reviews.store' => 'product_reviews.create',
        'order.product-reviews.show' => 'product_reviews.view',
        'order.product-reviews.edit' => 'product_reviews.update',
        'order.product-reviews.update' => 'product_reviews.update',
        'order.product-reviews.destroy' => 'product_reviews.delete',
        'order.product-reviews.reply-modal' => 'product_reviews.reply',
        'order.product-reviews.reply' => 'product_reviews.reply',
        'order.product-reviews.toggle-active' => 'product_reviews.toggle_active',
        'order.product-reviews.export' => 'product_reviews.export',
        'order.product-reviews.bulk-delete' => 'product_reviews.bulk_delete',

        // Outlet Reviews
        'order.outlet-reviews.index' => 'outlet_reviews.view_any',
        'order.outlet-reviews.create' => 'outlet_reviews.create',
        'order.outlet-reviews.store' => 'outlet_reviews.create',
        'order.outlet-reviews.show' => 'outlet_reviews.view',
        'order.outlet-reviews.edit' => 'outlet_reviews.update',
        'order.outlet-reviews.update' => 'outlet_reviews.update',
        'order.outlet-reviews.destroy' => 'outlet_reviews.delete',
        'order.outlet-reviews.reply-modal' => 'outlet_reviews.reply',
        'order.outlet-reviews.reply' => 'outlet_reviews.reply',
        'order.outlet-reviews.toggle-active' => 'outlet_reviews.toggle_active',
        'order.outlet-reviews.export' => 'outlet_reviews.export',
        'order.outlet-reviews.bulk-delete' => 'outlet_reviews.bulk_delete',

        // ==========================================
        // MENU MODULE — non-CRUD routes
        // ==========================================
        'menu.menus.schedule' => 'menus.schedule',
        'menu.menus.update-schedule' => 'menus.schedule',
        'menu.menus.mute' => 'menus.mute',
        'menu.menus.mute.apply' => 'menus.mute',
        'menu.menus.unmute' => 'menus.unmute',
        'menu.menus.toggle-status' => 'menus.toggle_status',
        'menu.menu-types.toggle-status' => 'menu_types.toggle_status',
        'menu.categories.toggle-status' => 'categories.toggle_status',
        'menu.categories.reorder' => 'categories.reorder',
        'menu.categories.sync' => 'categories.sync_products',

        // ==========================================
        // BOOKING MODULE — state-machine transitions
        // ==========================================
        'booking.bookings.index' => 'bookings.view_any',
        'booking.bookings.create' => 'bookings.create',
        'booking.bookings.store' => 'bookings.create',
        'booking.bookings.show' => 'bookings.view',
        'booking.bookings.update' => 'bookings.update',
        'booking.bookings.destroy' => 'bookings.delete',
        'booking.bookings.calendar' => 'bookings.view_calendar',
        'booking.bookings.update-status' => 'bookings.update_status',
        'booking.bookings.bulk-delete' => 'bookings.delete',

        // ==========================================
        // HOTEL MODULE — toggle / mute
        // ==========================================
        'hotel.hotels.toggle-status' => 'hotels.toggle_status',
        'hotel.rooms.toggle-status' => 'hotel_rooms.toggle_status',
        'hotel.rooms.mute' => 'hotel_rooms.mute',
        'hotel.rooms.unmute' => 'hotel_rooms.unmute',
        'hotel.reviews.approve' => 'hotel_reviews.approve',
        'hotel.reviews.reject' => 'hotel_reviews.reject',
        'hotel.reviews.reply' => 'hotel_reviews.reply',

        // ==========================================
        // PRODUCT MODULE — toggle / mute / bulk
        // ==========================================
        'product.products.toggle-status' => 'products.toggle_status',
        'product.products.mute' => 'products.mute',
        'product.products.unmute' => 'products.unmute',
        'product.products.bulk-delete' => 'products.bulk_delete',

        // ==========================================
        // OUTLET MODULE — toggle / schedule
        // ==========================================
        'outlet.outlets.toggle-status' => 'outlets.toggle_status',
        'outlet.outlets.manage-schedule' => 'outlets.manage_schedule',

        // ==========================================
        // PAYMENT MODULE — non-CRUD
        // ==========================================
        'payment.payments.refund' => 'payments.refund',
        'payment.payments.export' => 'payments.export',
        'payment.payments.reconcile' => 'payments.reconcile',

        // Shipping Zones
        'order.shipping-zones.index' => 'shipping_zones.view_any',
        'order.shipping-zones.create' => 'shipping_zones.create',
        'order.shipping-zones.store' => 'shipping_zones.create',
        'order.shipping-zones.show' => 'shipping_zones.view',
        'order.shipping-zones.edit' => 'shipping_zones.update',
        'order.shipping-zones.update' => 'shipping_zones.update',
        'order.shipping-zones.destroy' => 'shipping_zones.delete',
        'order.shipping-zones.toggle-active' => 'shipping_zones.toggle_active',
        'order.shipping-zones.check-delivery' => 'shipping_zones.check_delivery',
        'order.shipping-zones.export' => 'shipping_zones.export',
        'order.shipping-zones.import' => 'shipping_zones.import',
        'order.shipping-zones.bulk-delete' => 'shipping_zones.bulk_delete',
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
