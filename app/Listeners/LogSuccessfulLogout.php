<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Logout;
use Spatie\Activitylog\Facades\Activity;

class LogSuccessfulLogout
{
    /**
     * Handle the event.
     */
    public function handle(Logout $event): void
    {
        $user = $event->user;

        if (!$user) {
            return;
        }

        $request = request();

        // Get user roles
        $roles = [];
        if (method_exists($user, 'getRoleNames')) {
            $user->load('roles');
            $roles = $user->getRoleNames()->toArray();
        }

        Activity::causedBy($user)
            ->useLog('auth')
            ->event('logout')
            ->withProperties([
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
                'guard' => $event->guard,
                'roles' => $roles,
            ])
            ->log("User {$user->name} logged out");
    }
}
