<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\Widget;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class WidgetController extends Controller
{
    /**
     * Module to permission mapping for dashboard widgets.
     */
    protected array $modulePermissions = [
        'Customer' => 'dashboard.customer',
        'Menu' => 'dashboard.menu',
        'Outlet' => 'dashboard.outlet',
        'Product' => 'dashboard.product',
        'Order' => 'dashboard.order',
        'Wallets' => 'dashboard.wallets',
        'Employee' => 'dashboard.employee',
        'School' => 'dashboard.school',
    ];

    /**
     * Get modules the user has permission to access.
     */
    protected function getAllowedModules(): array
    {
        $user = Auth::user();

        // Super-admin sees all modules
        if ($user->hasRole('super-admin')) {
            return array_keys($this->modulePermissions);
        }

        // Filter modules by user permissions
        $allowedModules = [];
        foreach ($this->modulePermissions as $module => $permission) {
            if ($user->can($permission)) {
                $allowedModules[] = $module;
            }
        }

        return $allowedModules;
    }

    public function index(Request $request): Response
    {
        $status = $request->get('status');
        $allowedModules = $this->getAllowedModules();

        // Base query filtered by allowed modules
        $baseQuery = Widget::dashboard()->whereIn('module', $allowedModules);

        $query = (clone $baseQuery)->orderBy('sort_order');

        if ($status === 'active') {
            $query->where('status', true);
        } elseif ($status === 'inactive') {
            $query->where('status', false);
        }

        $widgets = $query->get();

        // Stats based on allowed modules only
        $widgetStats = [
            'total' => (clone $baseQuery)->count(),
            'active' => (clone $baseQuery)->where('status', true)->count(),
            'inactive' => (clone $baseQuery)->where('status', false)->count(),
        ];

        return Inertia::render('dashboard/Settings', [
            'widgetItems' => $widgets,
            'widgetStats' => $widgetStats,
            'currentStatus' => $status,
            'allowedModules' => $allowedModules,
        ]);
    }

    public function update(Request $request, Widget $widget)
    {
        // Check if user has permission for this widget's module
        $allowedModules = $this->getAllowedModules();
        if (!in_array($widget->module, $allowedModules)) {
            abort(403, 'You do not have permission to modify this widget.');
        }

        $validated = $request->validate([
            'status' => 'sometimes|boolean',
            'sort_order' => 'sometimes|integer|min:0',
        ]);

        $widget->update($validated);

        return back()->with('success', 'Widget updated successfully.');
    }

    public function updateOrder(Request $request)
    {
        $validated = $request->validate([
            'widgets' => 'required|array',
            'widgets.*.id' => 'required|exists:widgets,id',
            'widgets.*.sort_order' => 'required|integer|min:0',
        ]);

        $allowedModules = $this->getAllowedModules();

        foreach ($validated['widgets'] as $item) {
            // Only update widgets the user has permission for
            Widget::where('id', $item['id'])
                ->whereIn('module', $allowedModules)
                ->update(['sort_order' => $item['sort_order']]);
        }

        return back()->with('success', 'Widget order updated successfully.');
    }

    public function toggleModule(Request $request)
    {
        $validated = $request->validate([
            'module' => 'required|string',
            'status' => 'required|boolean',
        ]);

        // Check if user has permission for this module
        $allowedModules = $this->getAllowedModules();
        if (!in_array($validated['module'], $allowedModules)) {
            abort(403, 'You do not have permission to modify this module.');
        }

        Widget::dashboard()
            ->where('module', $validated['module'])
            ->update(['status' => $validated['status']]);

        return back()->with('success', 'Module widgets updated successfully.');
    }
}
