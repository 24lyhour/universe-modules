<?php

namespace App\Services;

use App\Models\User;
use App\Notifications\TwoFactorCodeNotification;
use Illuminate\Support\Facades\Hash;

class UserOtpService
{
    /**
     * OTP expiration time in minutes.
     */
    protected int $expirationMinutes = 5;

    /**
     * OTP length.
     */
    protected int $otpLength = 6;

    /**
     * Maximum failed attempts.
     */
    protected int $maxAttempts = 5;

    /**
     * Cooldown between OTP sends in seconds.
     */
    protected int $cooldownSeconds = 60;

    /**
     * Generate a random OTP code.
     */
    public function generateCode(): string
    {
        return str_pad((string) random_int(0, 999999), $this->otpLength, '0', STR_PAD_LEFT);
    }

    /**
     * Send OTP to user's email.
     */
    public function sendOtp(User $user): array
    {
        // Check rate limit
        $canSend = $this->canSendOtp($user);
        if (! $canSend['can_send']) {
            return $canSend;
        }

        // Generate new OTP
        $code = $this->generateCode();

        // Store hashed OTP in user record
        $user->update([
            'two_factor_email_code' => Hash::make($code),
            'two_factor_email_expires_at' => now()->addMinutes($this->expirationMinutes),
            'two_factor_email_attempts' => 0,
            'two_factor_email_sent_at' => now(),
        ]);

        // Send email notification immediately (not queued)
        $user->notifyNow(new TwoFactorCodeNotification($code, $this->expirationMinutes));

        return [
            'success' => true,
            'message' => 'Verification code sent to your email.',
            'expires_in' => $this->expirationMinutes * 60,
            'email' => $this->maskEmail($user->email),
        ];
    }

    /**
     * Verify OTP code for user.
     */
    public function verifyOtp(User $user, string $code): array
    {
        // Check if OTP exists
        if (! $user->two_factor_email_code) {
            return [
                'success' => false,
                'message' => 'No verification code found. Please request a new one.',
            ];
        }

        // Check if expired
        if ($user->two_factor_email_expires_at && $user->two_factor_email_expires_at->isPast()) {
            $this->clearOtp($user);

            return [
                'success' => false,
                'message' => 'Verification code has expired. Please request a new one.',
            ];
        }

        // Check max attempts
        if ($user->two_factor_email_attempts >= $this->maxAttempts) {
            $this->clearOtp($user);

            return [
                'success' => false,
                'message' => 'Maximum attempts reached. Please request a new code.',
            ];
        }

        // Verify code
        if (! Hash::check($code, $user->two_factor_email_code)) {
            $user->increment('two_factor_email_attempts');
            $remainingAttempts = $this->maxAttempts - $user->two_factor_email_attempts;

            return [
                'success' => false,
                'message' => "Invalid code. {$remainingAttempts} attempts remaining.",
                'remaining_attempts' => $remainingAttempts,
            ];
        }

        // Success - clear OTP
        $this->clearOtp($user);

        return [
            'success' => true,
            'message' => 'Verification successful.',
        ];
    }

    /**
     * Clear OTP data from user.
     */
    public function clearOtp(User $user): void
    {
        $user->update([
            'two_factor_email_code' => null,
            'two_factor_email_expires_at' => null,
            'two_factor_email_attempts' => 0,
            'two_factor_email_sent_at' => null,
        ]);
    }

    /**
     * Check if OTP can be sent (rate limiting).
     */
    public function canSendOtp(User $user): array
    {
        if (! $user->two_factor_email_sent_at) {
            return ['can_send' => true];
        }

        $secondsSinceLastOtp = now()->diffInSeconds($user->two_factor_email_sent_at);

        if ($secondsSinceLastOtp < $this->cooldownSeconds) {
            return [
                'can_send' => false,
                'success' => false,
                'retry_after' => $this->cooldownSeconds - $secondsSinceLastOtp,
                'message' => 'Please wait before requesting a new code.',
            ];
        }

        return ['can_send' => true];
    }

    /**
     * Mask email for display.
     */
    protected function maskEmail(string $email): string
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
