<?php

namespace App\Http\Middleware;

use App\Services\TwoFactorLockoutService;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Laravel\Fortify\Fortify;
use Symfony\Component\HttpFoundation\Response;

class CheckLoginLockout
{
    public function __construct(
        protected TwoFactorLockoutService $lockoutService
    ) {}

    /**
     * Handle an incoming request.
     * Block login attempts if IP is locked (from login or 2FA).
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Only check POST requests (actual login attempts)
        if ($request->isMethod('post')) {
            // Check login lockout
            if ($this->lockoutService->isLoginLocked($request)) {
                $lockoutInfo = $this->lockoutService->getLoginLockoutInfo($request);

                throw ValidationException::withMessages([
                    Fortify::username() => [$lockoutInfo['message']],
                ]);
            }

            // Also check 2FA lockout - block login if locked from 2FA
            if ($this->lockoutService->is2FALocked($request)) {
                $lockoutInfo = $this->lockoutService->get2FALockoutInfo($request);

                throw ValidationException::withMessages([
                    Fortify::username() => [$lockoutInfo['message']],
                ]);
            }
        }

        return $next($request);
    }
}
