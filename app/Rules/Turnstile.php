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
            Log::debug('Turnstile: Skipping - no secret configured');
            return;
        }

        // Skip validation in local/testing environment if desired
        if (app()->environment('local', 'testing') && ! config('services.turnstile.enabled_locally', false)) {
            Log::debug('Turnstile: Skipping - local/testing environment');
            return;
        }

        if (empty($value)) {
            Log::warning('Turnstile: Empty token received');
            $fail('Please complete the security verification.');
            return;
        }

        // Generate unique ID to track this specific validation
        $requestId = uniqid('ts_') . '_' . substr(md5($value), 0, 8);

        try {
            $secret = config('services.turnstile.secret');

            // Log attempt with token fingerprint (not full token for security)
            Log::info('Turnstile verification START', [
                'request_id' => $requestId,
                'token_hash' => substr(md5($value), 0, 16),
                'token_length' => strlen($value),
                'ip' => request()->ip(),
                'user_agent' => substr(request()->userAgent() ?? '', 0, 50),
            ]);

            $response = Http::timeout(10)->asForm()->post('https://challenges.cloudflare.com/turnstile/v0/siteverify', [
                'secret' => $secret,
                'response' => $value,
            ]);

            $result = $response->json();

            // Log full response
            Log::info('Turnstile verification RESPONSE', [
                'request_id' => $requestId,
                'success' => $result['success'] ?? false,
                'error_codes' => $result['error-codes'] ?? [],
                'challenge_ts' => $result['challenge_ts'] ?? null,
                'hostname' => $result['hostname'] ?? null,
                'http_status' => $response->status(),
            ]);

            if (! ($result['success'] ?? false)) {
                $errorCodes = $result['error-codes'] ?? [];

                Log::warning('Turnstile verification FAILED', [
                    'request_id' => $requestId,
                    'error_codes' => $errorCodes,
                    'ip' => request()->ip(),
                ]);

                // Provide specific error messages
                if (in_array('invalid-input-secret', $errorCodes)) {
                    $fail('Security configuration error. Please contact support.');
                } elseif (in_array('timeout-or-duplicate', $errorCodes)) {
                    $fail('Security token expired. Please refresh and try again.');
                } elseif (in_array('invalid-input-response', $errorCodes)) {
                    $fail('Invalid security token. Please try again.');
                } else {
                    $fail('Security verification failed. Please try again.');
                }
            } else {
                Log::info('Turnstile verification SUCCESS', [
                    'request_id' => $requestId,
                ]);
            }
        } catch (\Exception $e) {
            Log::error('Turnstile verification ERROR', [
                'request_id' => $requestId,
                'error' => $e->getMessage(),
            ]);
            $fail('Security verification error. Please try again.');
        }
    }
}
