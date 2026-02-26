<?php

namespace App\Providers;

use App\Actions\Fortify\CreateNewUser;
use App\Actions\Fortify\ResetUserPassword;
use App\Http\Responses\FailedTwoFactorLoginResponse;
use App\Http\Responses\LogoutResponse;
use App\Models\User;
use App\Services\LoginSettingsService;
use App\Services\TwoFactorLockoutService;
use App\Services\UserOtpService;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Laravel\Fortify\Contracts\FailedTwoFactorLoginResponse as FailedTwoFactorLoginResponseContract;
use Laravel\Fortify\Contracts\LogoutResponse as LogoutResponseContract;
use Laravel\Fortify\Features;
use Laravel\Fortify\Fortify;

class FortifyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(LogoutResponseContract::class, LogoutResponse::class);
        $this->app->singleton(FailedTwoFactorLoginResponseContract::class, FailedTwoFactorLoginResponse::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configureActions();
        $this->configureViews();
        $this->configureRateLimiting();
    }

    /**
     * Configure Fortify actions.
     */
    private function configureActions(): void
    {
        Fortify::resetUserPasswordsUsing(ResetUserPassword::class);
        Fortify::createUsersUsing(CreateNewUser::class);

        // Custom authentication with IP lockout
        Fortify::authenticateUsing(function (Request $request) {
            $lockoutService = app(TwoFactorLockoutService::class);

            // Debug: Always log the IP check
            \Log::info('Login attempt from IP: ' . $request->ip() . ', is locked: ' . ($lockoutService->isLoginLocked($request) ? 'YES' : 'NO'));

            // Check if IP is locked - BLOCK ALL login attempts
            if ($lockoutService->isLoginLocked($request)) {
                $lockoutInfo = $lockoutService->getLoginLockoutInfo($request);
                \Log::info('Blocking login - IP is locked: ' . $request->ip());

                throw ValidationException::withMessages([
                    Fortify::username() => [$lockoutInfo['message']],
                ]);
            }

            $user = User::where('email', $request->email)->first();

            if (! $user || ! Hash::check($request->password, $user->password)) {
                // Record failed attempt
                $lockoutResult = $lockoutService->recordFailedLoginAttempt($request);

                if ($lockoutResult['locked']) {
                    throw ValidationException::withMessages([
                        Fortify::username() => [$lockoutResult['message']],
                    ]);
                }

                // Show remaining attempts in error message
                $remainingAttempts = $lockoutResult['remaining_attempts'] ?? 0;
                throw ValidationException::withMessages([
                    Fortify::username() => ["Invalid credentials. {$remainingAttempts} attempt(s) remaining before lockout."],
                ]);
            }

            // Check if user is suspended - block login
            if ($user->isSuspended()) {
                throw ValidationException::withMessages([
                    Fortify::username() => [
                        'Your account has been suspended. '.
                        ($user->suspended_reason ? "Reason: {$user->suspended_reason}" : 'Please contact support.'),
                    ],
                ]);
            }

            // Clear lockout on successful authentication
            $lockoutService->clearLoginLockout($request);

            return $user;
        });
    }

    /**
     * Configure Fortify views.
     */
    private function configureViews(): void
    {
        Fortify::loginView(function (Request $request) {
            $lockoutService = app(TwoFactorLockoutService::class);

            try {
                $settingsService = app(LoginSettingsService::class);
                $loginSettings = $settingsService->getSettings();
            } catch (\Exception $e) {
                report($e);
                $loginSettings = [
                    'app_name' => config('app.name', 'Universe'),
                    'title' => 'Welcome back',
                    'subtitle' => 'Enter your credentials to access your account',
                    'image' => '/img/dev.png',
                    'logo' => '',
                    'quote_text' => '',
                    'quote_author' => '',
                    'quote_company' => '',
                    'show_social_login' => false,
                    'show_remember_me' => true,
                ];
            }

            try {
                $status = $request->session()->get('status');
            } catch (\Exception $e) {
                $status = null;
            }

            // Check login lockout status
            $loginLockoutInfo = $lockoutService->getLoginLockoutInfo($request);

            // Check 2FA lockout status - also block login if locked from 2FA
            $twoFactorLockoutInfo = $lockoutService->get2FALockoutInfo($request);

            // Use whichever lockout is active (prioritize 2FA lockout)
            $lockoutInfo = $twoFactorLockoutInfo['locked'] ? $twoFactorLockoutInfo : $loginLockoutInfo;

            return Inertia::render('auth/Login', [
                'canResetPassword' => Features::enabled(Features::resetPasswords()),
                'canRegister' => Features::enabled(Features::registration()),
                'status' => $status,
                'loginSettings' => $loginSettings,
                'lockout' => $lockoutInfo['locked'] ? $lockoutInfo : null,
            ]);
        });

        Fortify::resetPasswordView(fn (Request $request) => Inertia::render('auth/ResetPassword', [
            'email' => $request->email,
            'token' => $request->route('token'),
        ]));

        Fortify::requestPasswordResetLinkView(fn (Request $request) => Inertia::render('auth/ForgotPassword', [
            'status' => $request->session()->get('status'),
        ]));

        Fortify::verifyEmailView(fn (Request $request) => Inertia::render('auth/VerifyEmail', [
            'status' => $request->session()->get('status'),
        ]));

        Fortify::registerView(fn () => Inertia::render('auth/Register'));

        Fortify::twoFactorChallengeView(function (Request $request) {
            $loginId = $request->session()->get('login.id');
            \Log::info('2FA Challenge View - login.id from session: ' . ($loginId ?? 'NULL'));

            $user = User::find($loginId);
            \Log::info('2FA Challenge View - User found: ' . ($user ? 'YES (ID: ' . $user->id . ')' : 'NO'));

            $method = $user?->two_factor_method ?? 'email';
            \Log::info('2FA Challenge View - Method: ' . $method);

            $lockoutService = app(TwoFactorLockoutService::class);

            // If email method, send OTP automatically
            if ($user && $method === 'email') {
                \Log::info('2FA Challenge View - Attempting to send OTP email');
                $otpService = app(UserOtpService::class);
                $result = $otpService->sendOtp($user);
                \Log::info('2FA Challenge View - OTP send result: ' . json_encode($result));
            } else {
                \Log::info('2FA Challenge View - NOT sending email. User: ' . ($user ? 'exists' : 'null') . ', Method: ' . $method);
            }

            // Check 2FA lockout status
            $lockoutInfo = $lockoutService->get2FALockoutInfo($request);

            return Inertia::render('auth/TwoFactorChallenge', [
                'twoFactorMethod' => $method,
                'email' => $user ? $this->maskEmail($user->email) : null,
                'lockout' => $lockoutInfo['locked'] ? $lockoutInfo : null,
            ]);
        });

        Fortify::confirmPasswordView(fn () => Inertia::render('auth/ConfirmPassword'));
    }

    /**
     * Configure rate limiting.
     */
    private function configureRateLimiting(): void
    {
        RateLimiter::for('two-factor', function (Request $request) {
            return Limit::perMinute(5)->by($request->session()->get('login.id'));
        });

        RateLimiter::for('login', function (Request $request) {
            $throttleKey = Str::transliterate(Str::lower($request->input(Fortify::username())).'|'.$request->ip());

            return Limit::perMinute(5)->by($throttleKey);
        });
    }

    /**
     * Mask email for display.
     */
    private function maskEmail(string $email): string
    {
        $parts = explode('@', $email);
        if (count($parts) !== 2) {
            return $email;
        }

        $name = $parts[0];
        $domain = $parts[1];

        if (strlen($name) <= 2) {
            return $name.'***@'.$domain;
        }

        return substr($name, 0, 2).str_repeat('*', min(strlen($name) - 2, 5)).'@'.$domain;
    }
}
