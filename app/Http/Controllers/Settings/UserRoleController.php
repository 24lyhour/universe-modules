<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Role;

class UserRoleController extends Controller
{
    /**
     * Display a listing of users with their roles.
     */
    public function index(Request $request): Response
    {
        $query = User::with('roles')
            ->orderBy('name');

        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->search . '%')
                    ->orWhere('email', 'like', '%' . $request->search . '%');
            });
        }

        if ($request->filled('role')) {
            $query->whereHas('roles', function ($q) use ($request) {
                $q->where('name', $request->role);
            });
        }

        $users = $query->paginate(10)->withQueryString();

        $roles = Role::orderBy('name')->get(['id', 'name']);

        return Inertia::render('dashboard/settings/Users/Index', [
            'userItems' => $users,
            'roleList' => $roles,
            'filters' => [
                'search' => $request->search,
                'role' => $request->role,
            ],
        ]);
    }

    /**
     * Update user roles.
     */
    public function update(Request $request, User $user)
    {
        $validated = $request->validate([
            'roles' => 'required|array',
            'roles.*' => 'exists:roles,id',
        ]);

        $roles = Role::whereIn('id', $validated['roles'])->get();
        $user->syncRoles($roles);

        return redirect()->route('settings.users.index')
            ->with('success', 'User roles updated successfully.');
    }

    /**
     * Assign a single role to user.
     */
    public function assignRole(Request $request, User $user)
    {
        $validated = $request->validate([
            'role' => 'required|exists:roles,name',
        ]);

        $user->assignRole($validated['role']);

        return redirect()->back()
            ->with('success', 'Role assigned successfully.');
    }

    /**
     * Remove a role from user.
     */
    public function removeRole(Request $request, User $user)
    {
        $validated = $request->validate([
            'role' => 'required|exists:roles,name',
        ]);

        // Prevent removing super-admin from the last super-admin
        if ($validated['role'] === 'super-admin') {
            $superAdminCount = User::role('super-admin')->count();
            if ($superAdminCount <= 1 && $user->hasRole('super-admin')) {
                return redirect()->back()
                    ->with('error', 'Cannot remove the last super-admin role.');
            }
        }

        $user->removeRole($validated['role']);

        return redirect()->back()
            ->with('success', 'Role removed successfully.');
    }
}
