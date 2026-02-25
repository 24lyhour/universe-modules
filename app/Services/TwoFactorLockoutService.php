<?php

namespace App\Services;

use App\Models\TwoFactorLockout;
use App\Models\User;
use Illuminate\Http\Request;

class TwoFactorLockoutService
{
    /**
     * Maximum failed attempts before lockout.
     */
    protected int $maxAttempts = 3;

    /**
     * Lockout duration in minutes.
     */
    protected int $lockoutMinutes = 60;

    /**
     * Lockout type constants.
     */
    public const TYPE_LOGIN = 'login';
    public const TYPE_TWO_FACTOR = 'two_factor';

    /**
     * Check if IP is locked for a user.
     */
    public function isLocked(Request $request, ?User $user = null): bool
    {
        $lockout = $this->getLockout($request->ip(), $user?->id);

        return $lockout && $lockout->isLocked();
    }

    /**
     * Get lockout info for response.
     */
    public function getLockoutInfo(Request $request, ?User $user = null): array
    {
        $lockout = $this->getLockout($request->ip(), $user?->id);

        if (! $lockout || ! $lockout->isLocked()) {
            return ['locked' => false];
        }

        return [
            'locked' => true,
            'remaining_minutes' => $lockout->getRemainingMinutes(),
            'message' => "Too many failed attempts. Please try again in {$lockout->getRemainingMinutes()} minutes.",
        ];
    }

    /**
     * Record a failed attempt.
     */
    public function recordFailedAttempt(Request $request, ?User $user = null): array
    {
        $lockout = $this->getOrCreateLockout($request->ip(), $user?->id);

        // If already locked, return lockout info
        if ($lockout->isLocked()) {
            return [
                'locked' => true,
                'remaining_minutes' => $lockout->getRemainingMinutes(),
                'message' => "Too many failed attempts. Please try again in {$lockout->getRemainingMinutes()} minutes.",
            ];
        }

        // Increment attempts
        $lockout->increment('attempts');
        $lockout->update(['last_attempt_at' => now()]);

        $remainingAttempts = $this->maxAttempts - $lockout->attempts;

        // Check if should lock
        if ($lockout->attempts >= $this->maxAttempts) {
            $lockout->update([
                'locked_until' => now()->addMinutes($this->lockoutMinutes),
            ]);

            return [
                'locked' => true,
                'remaining_minutes' => $this->lockoutMinutes,
                'message' => "Too many failed attempts. Your IP has been locked for {$this->lockoutMinutes} minutes.",
            ];
        }

        return [
            'locked' => false,
            'remaining_attempts' => $remainingAttempts,
            'message' => "Invalid code. {$remainingAttempts} attempt(s) remaining before lockout.",
        ];
    }

    /**
     * Clear lockout on successful verification.
     */
    public function clearOnSuccess(Request $request, ?User $user = null): void
    {
        $lockout = $this->getLockout($request->ip(), $user?->id);

        if ($lockout) {
            $lockout->clearLockout();
        }
    }

    /**
     * Get lockout record.
     */
    protected function getLockout(string $ip, ?int $userId): ?TwoFactorLockout
    {
        return TwoFactorLockout::where('ip_address', $ip)
            ->where('user_id', $userId)
            ->first();
    }

    /**
     * Get or create lockout record.
     */
    protected function getOrCreateLockout(string $ip, ?int $userId): TwoFactorLockout
    {
        return TwoFactorLockout::firstOrCreate(
            [
                'ip_address' => $ip,
                'user_id' => $userId,
            ],
            [
                'attempts' => 0,
                'locked_until' => null,
                'last_attempt_at' => null,
            ]
        );
    }

    /**
     * Clean up old lockout records (for scheduled cleanup).
     */
    public function cleanupOldRecords(): int
    {
        return TwoFactorLockout::where('locked_until', '<', now()->subDay())
            ->orWhere(function ($query) {
                $query->whereNull('locked_until')
                    ->where('last_attempt_at', '<', now()->subDay());
            })
            ->delete();
    }

    // =============================================
    // 2FA LOCKOUT METHODS (IP-based for 2FA challenge)
    // =============================================

    /**
     * Check if IP is locked for 2FA verification.
     */
    public function is2FALocked(Request $request): bool
    {
        $lockout = $this->get2FALockout($request->ip());

        return $lockout && $lockout->isLocked();
    }

    /**
     * Get 2FA lockout info for response.
     */
    public function get2FALockoutInfo(Request $request): array
    {
        $lockout = $this->get2FALockout($request->ip());

        if (! $lockout || ! $lockout->isLocked()) {
            return ['locked' => false];
        }

        return [
            'locked' => true,
            'remaining_minutes' => $lockout->getRemainingMinutes(),
            'message' => "Too many failed verification attempts. Please try again in {$lockout->getRemainingMinutes()} minutes.",
        ];
    }

    /**
     * Record a failed 2FA attempt.
     */
    public function record2FAFailedAttempt(Request $request): array
    {
        $lockout = $this->getOrCreate2FALockout($request->ip());

        // If already locked, return lockout info
        if ($lockout->isLocked()) {
            return [
                'locked' => true,
                'remaining_minutes' => $lockout->getRemainingMinutes(),
                'message' => "Too many failed verification attempts. Please try again in {$lockout->getRemainingMinutes()} minutes.",
            ];
        }

        // Increment attempts
        $lockout->increment('attempts');
        $lockout->update(['last_attempt_at' => now()]);

        $remainingAttempts = $this->maxAttempts - $lockout->attempts;

        // Check if should lock
        if ($lockout->attempts >= $this->maxAttempts) {
            $lockout->update([
                'locked_until' => now()->addMinutes($this->lockoutMinutes),
            ]);

            return [
                'locked' => true,
                'remaining_minutes' => $this->lockoutMinutes,
                'message' => "Too many failed verification attempts. Your IP has been locked for {$this->lockoutMinutes} minutes.",
            ];
        }

        return [
            'locked' => false,
            'remaining_attempts' => $remainingAttempts,
            'message' => "Invalid code. {$remainingAttempts} attempt(s) remaining before lockout.",
        ];
    }

    /**
     * Clear 2FA lockout on successful verification.
     */
    public function clear2FALockout(Request $request): void
    {
        $lockout = $this->get2FALockout($request->ip());

        if ($lockout) {
            $lockout->clearLockout();
        }
    }

    /**
     * Get 2FA lockout record (type = two_factor).
     */
    protected function get2FALockout(string $ip): ?TwoFactorLockout
    {
        return TwoFactorLockout::where('ip_address', $ip)
            ->where('type', self::TYPE_TWO_FACTOR)
            ->first();
    }

    /**
     * Get or create 2FA lockout record.
     */
    protected function getOrCreate2FALockout(string $ip): TwoFactorLockout
    {
        return TwoFactorLockout::firstOrCreate(
            [
                'ip_address' => $ip,
                'type' => self::TYPE_TWO_FACTOR,
            ],
            [
                'attempts' => 0,
                'locked_until' => null,
                'last_attempt_at' => null,
            ]
        );
    }

    // =============================================
    // LOGIN LOCKOUT METHODS (IP-based only)
    // =============================================

    /**
     * Check if IP is locked for login.
     */
    public function isLoginLocked(Request $request): bool
    {
        $lockout = $this->getLoginLockout($request->ip());

        return $lockout && $lockout->isLocked();
    }

    /**
     * Get login lockout info for response.
     */
    public function getLoginLockoutInfo(Request $request): array
    {
        $lockout = $this->getLoginLockout($request->ip());

        if (! $lockout || ! $lockout->isLocked()) {
            return ['locked' => false];
        }

        return [
            'locked' => true,
            'remaining_minutes' => $lockout->getRemainingMinutes(),
            'message' => "Too many failed login attempts. Please try again in {$lockout->getRemainingMinutes()} minutes.",
        ];
    }

    /**
     * Record a failed login attempt.
     */
    public function recordFailedLoginAttempt(Request $request): array
    {
        $lockout = $this->getOrCreateLoginLockout($request->ip());

        // If already locked, return lockout info
        if ($lockout->isLocked()) {
            return [
                'locked' => true,
                'remaining_minutes' => $lockout->getRemainingMinutes(),
                'message' => "Too many failed login attempts. Please try again in {$lockout->getRemainingMinutes()} minutes.",
            ];
        }

        // Increment attempts
        $lockout->increment('attempts');
        $lockout->update(['last_attempt_at' => now()]);

        $remainingAttempts = $this->maxAttempts - $lockout->attempts;

        // Check if should lock
        if ($lockout->attempts >= $this->maxAttempts) {
            $lockout->update([
                'locked_until' => now()->addMinutes($this->lockoutMinutes),
            ]);

            return [
                'locked' => true,
                'remaining_minutes' => $this->lockoutMinutes,
                'message' => "Too many failed login attempts. Your IP has been locked for {$this->lockoutMinutes} minutes.",
            ];
        }

        return [
            'locked' => false,
            'remaining_attempts' => $remainingAttempts,
        ];
    }

    /**
     * Clear login lockout on successful login.
     */
    public function clearLoginLockout(Request $request): void
    {
        $lockout = $this->getLoginLockout($request->ip());

        if ($lockout) {
            $lockout->clearLockout();
        }
    }

    /**
     * Get login lockout record.
     */
    protected function getLoginLockout(string $ip): ?TwoFactorLockout
    {
        return TwoFactorLockout::where('ip_address', $ip)
            ->where('type', self::TYPE_LOGIN)
            ->first();
    }

    /**
     * Get or create login lockout record.
     */
    protected function getOrCreateLoginLockout(string $ip): TwoFactorLockout
    {
        return TwoFactorLockout::firstOrCreate(
            [
                'ip_address' => $ip,
                'type' => self::TYPE_LOGIN,
            ],
            [
                'attempts' => 0,
                'locked_until' => null,
                'last_attempt_at' => null,
            ]
        );
    }
}
