<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ModuleAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     * @param  string  $module
     */
    public function handle(Request $request, Closure $next, string $module): Response
    {
        // Check if user has access to the specified module
        // You can customize this logic based on your requirements:
        // - Check user roles/permissions
        // - Check module subscription status
        // - Check user's enabled modules

        $user = $request->user();

        if (!$user) {
            return redirect()->route('login');
        }

        // Example: Check if user has permission to access the module
        // You can implement your own logic here
        // if (!$user->hasModuleAccess($module)) {
        //     abort(403, "You don't have access to the {$module} module.");
        // }

        // For now, allow all authenticated users to access modules
        // You can add role-based or permission-based checks here

        return $next($request);
    }
}
