<?php

namespace App\Http\Responses;

use App\Services\TwoFactorLockoutService;
use Illuminate\Validation\ValidationException;
use Laravel\Fortify\Contracts\FailedTwoFactorLoginResponse as FailedTwoFactorLoginResponseContract;

class FailedTwoFactorLoginResponse implements FailedTwoFactorLoginResponseContract
{
    public function __construct(
        protected TwoFactorLockoutService $lockoutService
    ) {}

    public function toResponse($request)
    {
        // Record failed 2FA attempt
        $result = $this->lockoutService->record2FAFailedAttempt($request);

        $message = $result['locked']
            ? $result['message']
            : ($result['message'] ?? 'The provided two factor authentication code was invalid.');

        throw ValidationException::withMessages([
            'code' => [$message],
        ])->redirectTo($request->session()->pull('two_factor.redirect', '/two-factor-challenge'));
    }
}
