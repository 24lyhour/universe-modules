<?php

namespace Modules\Porfolio\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class DashboardMiddleware
{
    /**
     * Handle an incoming request.
     *
     * Menu items are now registered in PorfolioServiceProvider.
     * This middleware can be used for other Portfolio-specific request handling.
     */
    public function handle(Request $request, Closure $next)
    {
        return $next($request);
    }
}
