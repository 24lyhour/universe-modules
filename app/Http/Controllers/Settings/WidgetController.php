<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Widget;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class WidgetController extends Controller
{
    public function index(Request $request): Response
    {
        $status = $request->get('status');
        $activeTab = $request->get('tab', 'widgets');

        $query = Widget::dashboard()->orderBy('sort_order');

        if ($status === 'active') {
            $query->where('status', true);
        } elseif ($status === 'inactive') {
            $query->where('status', false);
        }

        $widgets = $query->get();

        $widgetStats = [
            'total' => Widget::dashboard()->count(),
            'active' => Widget::dashboard()->where('status', true)->count(),
            'inactive' => Widget::dashboard()->where('status', false)->count(),
        ];

        // Roles data (only if user has permission)
        $roles = [];
        $groupedPermissions = [];
        if ($request->user()?->can('roles.view_any')) {
            $roles = Role::with('permissions')
                ->withCount('users')
                ->orderBy('name')
                ->get()
                ->map(fn ($role) => [
                    'id' => $role->id,
                    'name' => $role->name,
                    'guard_name' => $role->guard_name,
                    'permissions' => $role->permissions->map(fn ($p) => ['id' => $p->id, 'name' => $p->name]),
                    'users_count' => $role->users_count,
                    'created_at' => $role->created_at,
                ]);

            $permissions = Permission::orderBy('name')->get();
            $groupedPermissions = $this->groupPermissions($permissions);
        }

        // Users data (only if user has permission)
        $users = [];
        $roleList = [];
        if ($request->user()?->can('users.view_any')) {
            $usersQuery = User::with('roles')->orderBy('name');

            if ($request->filled('user_search')) {
                $usersQuery->where(function ($q) use ($request) {
                    $q->where('name', 'like', '%' . $request->user_search . '%')
                        ->orWhere('email', 'like', '%' . $request->user_search . '%');
                });
            }

            if ($request->filled('role_filter')) {
                $usersQuery->whereHas('roles', function ($q) use ($request) {
                    $q->where('name', $request->role_filter);
                });
            }

            $users = $usersQuery->paginate(10)->withQueryString();
            $roleList = Role::orderBy('name')->get(['id', 'name']);
        }

        return Inertia::render('dashboard/Settings', [
            'widgetItems' => $widgets,
            'widgetStats' => $widgetStats,
            'currentStatus' => $status,
            'activeTab' => $activeTab,
            // Roles data
            'roleItems' => $roles,
            'groupedPermissions' => $groupedPermissions,
            // Users data
            'userItems' => $users,
            'roleList' => $roleList,
            'filters' => [
                'user_search' => $request->user_search,
                'role_filter' => $request->role_filter,
            ],
            // Permission flags for UI
            'canManageRoles' => $request->user()?->can('roles.view_any') ?? false,
            'canManageUsers' => $request->user()?->can('users.view_any') ?? false,
        ]);
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

    public function update(Request $request, Widget $widget)
    {
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

        foreach ($validated['widgets'] as $item) {
            Widget::where('id', $item['id'])->update(['sort_order' => $item['sort_order']]);
        }

        return back()->with('success', 'Widget order updated successfully.');
    }

    public function toggleModule(Request $request)
    {
        $validated = $request->validate([
            'module' => 'required|string',
            'status' => 'required|boolean',
        ]);

        Widget::dashboard()
            ->where('module', $validated['module'])
            ->update(['status' => $validated['status']]);

        return back()->with('success', 'Module widgets updated successfully.');
    }
}
