<?php

namespace App\Listeners;

use App\Events\UserSuspended;
use Spatie\Activitylog\Facades\Activity;

class LogUserSuspension
{
    /**
     * Handle the event.
     */
    public function handle(UserSuspended $event): void
    {
        $user = $event->user;
        $suspendedBy = $event->suspendedBy;
        $action = $event->action;

        Activity::causedBy($suspendedBy)
            ->performedOn($user)
            ->useLog('auth')
            ->event($action)
            ->withProperties([
                'ip_address' => request()->ip(),
                'user_agent' => request()->userAgent(),
                'reason' => $event->reason,
                'target_user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                ],
            ])
            ->log("User {$user->name} was {$action} by {$suspendedBy->name}");
    }
}
