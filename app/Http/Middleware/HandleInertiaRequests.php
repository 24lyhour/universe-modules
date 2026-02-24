<?php

namespace App\Http\Middleware;

use App\Models\Setting;
use App\Services\MenuService;
use App\Services\TenantService;
use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        [$message, $author] = str(Inspiring::quotes()->random())->explode('-');

        // Safely get tenant data
        try {
            $tenantService = app(TenantService::class);
            $tenantData = $tenantService->toArray();
        } catch (\Exception $e) {
            report($e);
            $tenantData = ['has_tenant' => false, 'tenant_type' => null, 'tenant_id' => null, 'tenant_name' => null, 'all_tenant_ids' => []];
        }

        // Safely get user roles and permissions
        $roles = [];
        $permissions = [];
        if ($request->user()) {
            try {
                $roles = $request->user()->getRoleNames() ?? [];
                $permissions = $request->user()->getAllPermissions()->pluck('name') ?? [];
            } catch (\Exception $e) {
                report($e);
            }
        }

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'quote' => ['message' => trim($message), 'author' => trim($author)],
            'auth' => [
                'user' => $request->user(),
                'roles' => $roles,
                'permissions' => $permissions,
            ],
            'tenant' => $tenantData,
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
            'menus' => [
                'primary' => $request->user()
                    ? MenuService::getMenuForUser('primary', $request->user())
                    : [],
                'footer' => $request->user()
                    ? MenuService::getMenuForUser('footer', $request->user())
                    : [],
            ],
            'appBranding' => [
                'logo' => Setting::getValue('login', 'logo', ''),
                'name' => Setting::getValue('login', 'app_name', '') ?: config('app.name'),
            ],
            'flash' => [
                'success' => fn () => $this->safeSessionGet($request, 'success'),
                'error' => fn () => $this->safeSessionGet($request, 'error'),
                'warning' => fn () => $this->safeSessionGet($request, 'warning'),
                'info' => fn () => $this->safeSessionGet($request, 'info'),
            ],
        ];
    }

    /**
     * Safely get a value from the session.
     */
    private function safeSessionGet(Request $request, string $key): mixed
    {
        try {
            return $request->session()->get($key);
        } catch (\Exception $e) {
            return null;
        }
    }
}
