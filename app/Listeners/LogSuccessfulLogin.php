<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Login;
use Spatie\Activitylog\Facades\Activity;

class LogSuccessfulLogin
{
    /**
     * Handle the event.
     */
    public function handle(Login $event): void
    {
        $user = $event->user;
        $request = request();

        // Get user roles - load the relationship if needed
        $roles = [];
        if (method_exists($user, 'getRoleNames')) {
            // Ensure roles are loaded
            $user->load('roles');
            $roles = $user->getRoleNames()->toArray();
        }

        Activity::causedBy($user)
            ->useLog('auth')
            ->event('login')
            ->withProperties([
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'browser' => $this->getBrowser($request->userAgent()),
                'platform' => $this->getPlatform($request->userAgent()),
                'guard' => $event->guard,
                'roles' => $roles,
            ])
            ->log("User {$user->name} logged in");
    }

    /**
     * Extract browser name from user agent.
     */
    private function getBrowser(?string $userAgent): string
    {
        if (!$userAgent) {
            return 'Unknown';
        }

        $browsers = [
            'Edge' => '/Edge|Edg/i',
            'Chrome' => '/Chrome/i',
            'Firefox' => '/Firefox/i',
            'Safari' => '/Safari/i',
            'Opera' => '/Opera|OPR/i',
            'IE' => '/MSIE|Trident/i',
        ];

        foreach ($browsers as $browser => $pattern) {
            if (preg_match($pattern, $userAgent)) {
                return $browser;
            }
        }

        return 'Unknown';
    }

    /**
     * Extract platform/OS from user agent.
     */
    private function getPlatform(?string $userAgent): string
    {
        if (!$userAgent) {
            return 'Unknown';
        }

        $platforms = [
            'Windows' => '/Windows/i',
            'macOS' => '/Macintosh|Mac OS/i',
            'Linux' => '/Linux/i',
            'iOS' => '/iPhone|iPad|iPod/i',
            'Android' => '/Android/i',
        ];

        foreach ($platforms as $platform => $pattern) {
            if (preg_match($pattern, $userAgent)) {
                return $platform;
            }
        }

        return 'Unknown';
    }
}
