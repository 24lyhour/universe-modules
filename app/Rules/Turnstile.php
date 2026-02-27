<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class Turnstile implements ValidationRule
{
    /**
     * Run the validation rule.
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        // Skip validation if Turnstile is not configured
        if (! config('services.turnstile.secret')) {
            return;
        }

        // Skip validation in local/testing environment if desired
        if (app()->environment('local', 'testing') && ! config('services.turnstile.enabled_locally', false)) {
            return;
        }

        if (empty($value)) {
            $fail('Please complete the security verification.');

            return;
        }

        try {
            $response = Http::asForm()->post('https://challenges.cloudflare.com/turnstile/v0/siteverify', [
                'secret' => config('services.turnstile.secret'),
                'response' => $value,
                // Note: remoteip removed - it can cause issues behind proxies like Railway
            ]);

            $result = $response->json();

            Log::info('Turnstile verification response', [
                'success' => $result['success'] ?? false,
                'error-codes' => $result['error-codes'] ?? [],
                'hostname' => $result['hostname'] ?? null,
                'ip' => request()->ip(),
            ]);

            if (! ($result['success'] ?? false)) {
                $errorCodes = $result['error-codes'] ?? [];
                Log::warning('Turnstile verification failed', [
                    'error-codes' => $errorCodes,
                    'ip' => request()->ip(),
                ]);

                // Provide specific error messages
                if (in_array('invalid-input-secret', $errorCodes)) {
                    $fail('Security configuration error. Please contact support.');
                } elseif (in_array('timeout-or-duplicate', $errorCodes)) {
                    $fail('Security token expired. Please refresh and try again.');
                } else {
                    $fail('Security verification failed. Please try again.');
                }
            }
        } catch (\Exception $e) {
            Log::error('Turnstile verification error: '.$e->getMessage());
            $fail('Security verification error. Please try again.');
        }
    }
}
