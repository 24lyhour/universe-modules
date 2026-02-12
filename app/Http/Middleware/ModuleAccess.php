<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ModuleAccess
{
    /**
     * The modules that are enabled by default.
     *
     * @var array<string>
     */
    protected array $defaultModules = [
        'blog',
        'booking',
        'company',
        'customer',
        'hotel',
        'menu',
        'movice',
        'order',
        'outlet',
        'payment',
        'porfolio',
        'product',
        'report',
        'wallets',
    ];

    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     * @param  string  $module  The module name to check access for
     */
    public function handle(Request $request, Closure $next, string $module): Response
    {
        $user = $request->user();

        // Redirect to login if not authenticated
        if (! $user) {
            return redirect()->route('login');
        }

        // Check if user has access to the module
        if (! $this->userHasModuleAccess($user, $module)) {
            abort(403, "You don't have access to the {$module} module.");
        }

        // Share module info with the request for use in views/components
        $request->merge(['current_module' => $module]);

        return $next($request);
    }

    /**
     * Check if a user has access to a specific module.
     */
    protected function userHasModuleAccess($user, string $module): bool
    {
        // Option 1: Check if module is in the default enabled list
        if (in_array($module, $this->defaultModules)) {
            return true;
        }

        // Option 2: Check user's module permissions (if you have a permissions system)
        // Example with Spatie Permission package:
        // if ($user->hasPermissionTo("access-{$module}-module")) {
        //     return true;
        // }

        // Option 3: Check user's role-based module access
        // if ($user->hasRole('admin')) {
        //     return true;
        // }

        // Option 4: Check user's subscription or plan
        // $enabledModules = $user->subscription?->modules ?? [];
        // if (in_array($module, $enabledModules)) {
        //     return true;
        // }

        return false;
    }

    /**
     * Perform actions after the response has been sent to the browser.
     * Useful for logging module access.
     */
    public function terminate(Request $request, Response $response): void
    {
        // Log module access for analytics
        // Example:
        // if ($request->user() && $request->get('current_module')) {
        //     \Log::info('Module accessed', [
        //         'user_id' => $request->user()->id,
        //         'module' => $request->get('current_module'),
        //         'path' => $request->path(),
        //     ]);
        // }
    }
}
