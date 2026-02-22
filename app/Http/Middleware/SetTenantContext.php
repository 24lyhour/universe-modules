<?php

namespace App\Http\Middleware;

use App\Services\TenantService;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * SetTenantContext Middleware
 *
 * Sets the current tenant context based on the authenticated user.
 * Should be applied after authentication middleware.
 */
class SetTenantContext
{
    public function __construct(
        protected TenantService $tenantService
    ) {}

    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Set tenant from authenticated user
        if ($request->user()) {
            $this->tenantService->setFromUser($request->user());
        }

        return $next($request);
    }
}
