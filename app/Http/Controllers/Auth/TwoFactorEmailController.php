<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\UserOtpService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class TwoFactorEmailController extends Controller
{
    public function __construct(
        protected UserOtpService $otpService
    ) {}

    /**
     * Send a new two-factor authentication code via email.
     */
    public function send(Request $request): JsonResponse
    {
        $user = $this->getAuthenticatingUser($request);

        if (! $user) {
            return response()->json([
                'success' => false,
                'message' => 'No authentication session found.',
            ], 422);
        }

        $result = $this->otpService->sendOtp($user);

        return response()->json($result, $result['success'] ? 200 : 422);
    }

    /**
     * Verify the two-factor authentication code.
     */
    public function verify(Request $request): JsonResponse
    {
        $request->validate([
            'code' => ['required', 'string', 'size:6'],
        ]);

        $user = $this->getAuthenticatingUser($request);

        if (! $user) {
            return response()->json([
                'success' => false,
                'message' => 'No authentication session found.',
            ], 422);
        }

        $result = $this->otpService->verifyOtp($user, $request->code);

        if (! $result['success']) {
            return response()->json($result, 422);
        }

        // Authentication successful - log the user in
        Auth::login($user, $request->session()->get('login.remember', false));

        // Clear the login session data
        $request->session()->forget(['login.id', 'login.remember']);

        return response()->json([
            'success' => true,
            'message' => 'Verification successful.',
            'redirect' => config('fortify.home', '/dashboard'),
        ]);
    }

    /**
     * Get the user that is being authenticated.
     */
    protected function getAuthenticatingUser(Request $request): ?User
    {
        $userId = $request->session()->get('login.id');

        if (! $userId) {
            return null;
        }

        return User::find($userId);
    }
}
