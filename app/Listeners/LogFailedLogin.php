<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Failed;
use Spatie\Activitylog\Facades\Activity;

class LogFailedLogin
{
    /**
     * Handle the event.
     */
    public function handle(Failed $event): void
    {
        $request = request();
        $credentials = $event->credentials;

        // Get email/identifier that was attempted
        $identifier = $credentials['email'] ?? $credentials['username'] ?? 'Unknown';

        Activity::useLog('auth')
            ->event('failed_login')
            ->withProperties([
                'email' => $identifier,
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'guard' => $event->guard,
            ])
            ->log("Failed login attempt for {$identifier}");
    }
}
