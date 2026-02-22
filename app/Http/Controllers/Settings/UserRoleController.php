<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserTenant;
use App\Services\TenantService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Outlet\Models\Outlet;
use Modules\School\Models\School;
use Spatie\Permission\Models\Role;

class UserRoleController extends Controller
{
    /**
     * Display a listing of users with their roles.
     * Tenant users only see users that share the same tenant(s).
     */
    public function index(Request $request): Response
    {
        $query = User::with('roles')
            ->orderBy('name');

        // Filter by tenant - tenant users only see users in their tenant(s)
        $tenantService = app(TenantService::class);
        $currentUser = Auth::user();

        // Only filter if current user has tenant(s) and is not super-admin
        if ($tenantService->hasTenant() && !$currentUser->hasRole('super-admin')) {
            $allTenantIds = $tenantService->getAllTenantIds();

            $query->where(function ($q) use ($allTenantIds) {
                // Get user IDs that have access to any of the same tenants
                $userIdsWithSharedTenants = UserTenant::where(function ($subQuery) use ($allTenantIds) {
                    foreach ($allTenantIds as $tenantType => $tenantIds) {
                        $fullClassName = $this->getTenantClassName($tenantType);
                        $subQuery->orWhere(function ($tq) use ($fullClassName, $tenantIds) {
                            $tq->where('tenant_type', $fullClassName)
                               ->whereIn('tenant_id', $tenantIds);
                        });
                    }
                })->pluck('user_id')->unique()->toArray();

                $q->whereIn('id', $userIdsWithSharedTenants);
            });
        }

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

        $roles = Role::withCount('permissions')->orderBy('name')->get(['id', 'name']);

        return Inertia::render('dashboard/settings/users/Index', [
            'users' => $users,
            'roles' => $roles,
            'filters' => [
                'search' => $request->search,
                'role' => $request->role,
            ],
        ]);
    }

    /**
     * Get full class name for tenant type.
     */
    private function getTenantClassName(string $shortType): string
    {
        $map = [
            'School' => School::class,
            'Outlet' => Outlet::class,
        ];

        return $map[$shortType] ?? $shortType;
    }

    /**
     * Show the form for creating a new user.
     * Tenant users cannot assign super-admin role and can only assign their tenants.
     */
    public function create(): Response
    {
        $tenantService = app(TenantService::class);
        $currentUser = Auth::user();
        $isSuperAdmin = $currentUser->hasRole('super-admin');

        // Get roles - filter out super-admin for non-super-admin users
        $rolesQuery = Role::withCount('permissions')->orderBy('name');
        if (!$isSuperAdmin) {
            $rolesQuery->where('name', '!=', 'super-admin');
        }
        $roles = $rolesQuery->get(['id', 'name']);

        // Get available tenants - filtered by current user's tenant access unless super-admin
        $schoolQuery = School::allRecords()
            ->select('id', 'name', 'code', 'type')
            ->where('status', true)
            ->orderBy('name');

        $outletQuery = Outlet::allRecords()
            ->select('id', 'name', 'address', 'status')
            ->where('status', 'active')
            ->orderBy('name');

        // If not super-admin, filter to only show tenants the current user has access to
        if (!$isSuperAdmin && $tenantService->hasTenant()) {
            $schoolIds = $tenantService->getSchoolIds();
            $outletIds = $tenantService->getOutletIds();

            if (!empty($schoolIds)) {
                $schoolQuery->whereIn('id', $schoolIds);
            } else {
                $schoolQuery->whereRaw('1 = 0'); // No schools available
            }

            if (!empty($outletIds)) {
                $outletQuery->whereIn('id', $outletIds);
            } else {
                $outletQuery->whereRaw('1 = 0'); // No outlets available
            }
        }

        $schools = $schoolQuery->get()->map(fn ($school) => [
            'id' => $school->id,
            'name' => $school->name,
            'code' => $school->code,
            'type' => 'School',
            'label' => $school->name . ' (' . $school->code . ')',
        ]);

        $outlets = $outletQuery->get()->map(fn ($outlet) => [
            'id' => $outlet->id,
            'name' => $outlet->name,
            'code' => '',
            'type' => 'Outlet',
            'label' => $outlet->name,
        ]);

        // Get current user's tenants for pre-selection (non-super-admin only)
        $currentUserTenants = [];
        if (!$isSuperAdmin && $tenantService->hasTenant()) {
            // Pre-select current user's tenants
            $allTenantIds = $tenantService->getAllTenantIds();
            $primaryTenantType = $tenantService->getShortTenantType();
            $primaryTenantId = $tenantService->getTenantId();

            foreach ($allTenantIds as $type => $ids) {
                foreach ($ids as $id) {
                    $currentUserTenants[] = [
                        'tenant_type' => $type,
                        'tenant_id' => $id,
                        'is_primary' => ($type === $primaryTenantType && $id === $primaryTenantId),
                    ];
                }
            }
        }

        return Inertia::render('dashboard/settings/users/Create', [
            'roles' => $roles,
            'availableTenants' => [
                'schools' => $schools,
                'outlets' => $outlets,
            ],
            'currentUserTenants' => $currentUserTenants,
            'isSuperAdmin' => $isSuperAdmin,
        ]);
    }

    /**
     * Store a newly created user.
     * Tenant users cannot assign super-admin role and must assign their tenants.
     */
    public function store(Request $request)
    {
        $currentUser = Auth::user();
        $isSuperAdmin = $currentUser->hasRole('super-admin');
        $tenantService = app(TenantService::class);

        // Tenants are required for non-super-admin users
        $tenantsRule = $isSuperAdmin ? 'nullable|array' : 'required|array|min:1';

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'nullable|string|max:20',
            'password' => ['required', 'confirmed', Password::defaults()],
            'roles' => 'array',
            'roles.*' => 'exists:roles,id',
            'tenants' => $tenantsRule,
            'tenants.*.tenant_type' => 'required_with:tenants|string|in:School,Outlet',
            'tenants.*.tenant_id' => 'required_with:tenants|integer',
            'tenants.*.is_primary' => 'boolean',
        ]);

        // Prevent non-super-admins from assigning super-admin role
        if (!$isSuperAdmin && !empty($validated['roles'])) {
            $superAdminRole = Role::where('name', 'super-admin')->first();
            if ($superAdminRole && in_array($superAdminRole->id, $validated['roles'])) {
                return redirect()->back()
                    ->with('error', 'You cannot assign super-admin role.');
            }
        }

        // Map short type to full class name
        $tenantClassMap = [
            'School' => School::class,
            'Outlet' => Outlet::class,
        ];

        DB::transaction(function () use ($validated, $tenantClassMap, $tenantService, $isSuperAdmin) {
            // Determine primary tenant for user creation
            $tenants = $validated['tenants'] ?? [];
            $primaryTenantType = null;
            $primaryTenantId = null;

            if (!empty($tenants)) {
                $primaryTenant = collect($tenants)->firstWhere('is_primary', true) ?? $tenants[0];
                $primaryTenantType = $tenantClassMap[$primaryTenant['tenant_type']] ?? null;
                $primaryTenantId = $primaryTenant['tenant_id'];
            }

            // Create user
            $user = User::create([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'phone' => $validated['phone'] ?? null,
                'password' => Hash::make($validated['password']),
                'tenant_type' => $primaryTenantType,
                'tenant_id' => $primaryTenantId,
            ]);

            // Assign roles
            if (!empty($validated['roles'])) {
                $roles = Role::whereIn('id', $validated['roles'])->get();
                $user->syncRoles($roles);
            }

            // Create UserTenant records for all tenants
            foreach ($tenants as $tenant) {
                UserTenant::create([
                    'user_id' => $user->id,
                    'tenant_type' => $tenantClassMap[$tenant['tenant_type']] ?? null,
                    'tenant_id' => $tenant['tenant_id'],
                    'is_primary' => $tenant['is_primary'] ?? false,
                ]);
            }
        });

        return redirect()->route('users.index')
            ->with('success', 'User created successfully.');
    }

    /**
     * Show the form for editing user roles.
     * Tenant users can only assign their own tenants to other users.
     */
    public function edit(User $user): Response
    {
        $user->load(['roles', 'tenant', 'tenantAccess']);

        $tenantService = app(TenantService::class);
        $currentUser = Auth::user();
        $isSuperAdmin = $currentUser->hasRole('super-admin');

        // Get roles - filter out super-admin for non-super-admin users
        $rolesQuery = Role::withCount('permissions')->orderBy('name');
        if (!$isSuperAdmin) {
            $rolesQuery->where('name', '!=', 'super-admin');
        }
        $roles = $rolesQuery->get(['id', 'name']);

        // Get available tenants - filtered by current user's tenant access unless super-admin
        $schoolQuery = School::allRecords()
            ->select('id', 'name', 'code', 'type')
            ->where('status', true)
            ->orderBy('name');

        $outletQuery = Outlet::allRecords()
            ->select('id', 'name', 'address', 'status')
            ->where('status', 'active')
            ->orderBy('name');

        // If not super-admin, filter to only show tenants the current user has access to
        if (!$isSuperAdmin && $tenantService->hasTenant()) {
            $schoolIds = $tenantService->getSchoolIds();
            $outletIds = $tenantService->getOutletIds();

            if (!empty($schoolIds)) {
                $schoolQuery->whereIn('id', $schoolIds);
            } else {
                $schoolQuery->whereRaw('1 = 0'); // No schools available
            }

            if (!empty($outletIds)) {
                $outletQuery->whereIn('id', $outletIds);
            } else {
                $outletQuery->whereRaw('1 = 0'); // No outlets available
            }
        }

        $schools = $schoolQuery->get()->map(fn ($school) => [
            'id' => $school->id,
            'name' => $school->name,
            'code' => $school->code,
            'type' => 'School',
            'label' => $school->name . ' (' . $school->code . ')',
        ]);

        $outlets = $outletQuery->get()->map(fn ($outlet) => [
            'id' => $outlet->id,
            'name' => $outlet->name,
            'code' => '',
            'type' => 'Outlet',
            'label' => $outlet->name,
        ]);

        // Build tenant access array
        $tenantAccess = $user->tenantAccess->map(fn ($access) => [
            'tenant_type' => class_basename($access->tenant_type),
            'tenant_id' => $access->tenant_id,
            'is_primary' => $access->is_primary,
        ])->toArray();

        return Inertia::render('dashboard/settings/users/Edit', [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'avatar' => $user->getFirstMediaUrl('avatar') ?: null,
                'created_at' => $user->created_at,
                'tenant_type' => $user->tenant_type ? class_basename($user->tenant_type) : null,
                'tenant_id' => $user->tenant_id,
                'tenant_name' => $user->tenant?->name,
                'tenant_access' => $tenantAccess,
                'roles' => $user->roles->map(fn ($r) => [
                    'id' => $r->id,
                    'name' => $r->name,
                ]),
            ],
            'roles' => $roles,
            'availableTenants' => [
                'schools' => $schools,
                'outlets' => $outlets,
            ],
        ]);
    }

    /**
     * Update user roles and password.
     * Tenant users cannot assign super-admin role.
     */
    public function update(Request $request, User $user)
    {
        $currentUser = Auth::user();
        $isSuperAdmin = $currentUser->hasRole('super-admin');

        $validated = $request->validate([
            'roles' => 'required|array',
            'roles.*' => 'exists:roles,id',
            'password' => ['nullable', 'confirmed', Password::defaults()],
            'tenants' => 'nullable|array',
            'tenants.*.tenant_type' => 'required_with:tenants|string|in:School,Outlet,Company',
            'tenants.*.tenant_id' => 'required_with:tenants|integer',
            'tenants.*.is_primary' => 'boolean',
        ]);

        // Prevent non-super-admins from assigning super-admin role
        if (!$isSuperAdmin && !empty($validated['roles'])) {
            $superAdminRole = Role::where('name', 'super-admin')->first();
            if ($superAdminRole && in_array($superAdminRole->id, $validated['roles'])) {
                return redirect()->back()
                    ->with('error', 'You cannot assign super-admin role.');
            }
        }

        // Map short type to full class name
        $tenantClassMap = [
            'School' => School::class,
            'Outlet' => Outlet::class,
        ];

        DB::transaction(function () use ($validated, $user, $tenantClassMap) {
            // Update roles
            $roles = Role::whereIn('id', $validated['roles'])->get();
            $user->syncRoles($roles);

            // Update password if provided
            if (!empty($validated['password'])) {
                $user->update([
                    'password' => Hash::make($validated['password']),
                ]);
            }

            // Clear existing tenant assignments
            UserTenant::where('user_id', $user->id)->delete();

            $tenants = $validated['tenants'] ?? [];

            if (empty($tenants)) {
                // No tenants - clear primary tenant on user
                $user->update([
                    'tenant_type' => null,
                    'tenant_id' => null,
                ]);
            } else {
                // Find primary tenant
                $primaryTenant = collect($tenants)->firstWhere('is_primary', true) ?? $tenants[0];

                // Update primary tenant on user
                $user->update([
                    'tenant_type' => $tenantClassMap[$primaryTenant['tenant_type']] ?? null,
                    'tenant_id' => $primaryTenant['tenant_id'],
                ]);

                // Create UserTenant records for all tenants
                foreach ($tenants as $tenant) {
                    UserTenant::create([
                        'user_id' => $user->id,
                        'tenant_type' => $tenantClassMap[$tenant['tenant_type']] ?? null,
                        'tenant_id' => $tenant['tenant_id'],
                        'is_primary' => $tenant['is_primary'] ?? false,
                    ]);
                }
            }
        });

        return redirect()->route('users.index')
            ->with('success', 'User updated successfully.');
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
