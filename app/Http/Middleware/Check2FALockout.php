<?php

namespace App\Http\Middleware;

use App\Services\TwoFactorLockoutService;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Check2FALockout
{
    public function __construct(
        protected TwoFactorLockoutService $lockoutService
    ) {}

    public function handle(Request $request, Closure $next): Response
    {
        if ($this->lockoutService->is2FALocked($request)) {
            $lockoutInfo = $this->lockoutService->get2FALockoutInfo($request);

            if ($request->expectsJson()) {
                return response()->json([
                    'message' => $lockoutInfo['message'],
                    'locked' => true,
                    'remaining_minutes' => $lockoutInfo['remaining_minutes'],
                ], 429);
            }

            return back()->withErrors([
                'code' => $lockoutInfo['message'],
            ]);
        }

        return $next($request);
    }
}
