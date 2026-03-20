<?php

namespace App\Listeners;

use App\Events\NewDeviceLogin;
use App\Traits\HasNotifications;

/**
 * SendNewDeviceLoginNotification Listener
 *
 * Listens for NewDeviceLogin events and sends notifications
 * to the user about the new device login.
 */
class SendNewDeviceLoginNotification
{
    /**
     * Handle the event.
     */
    public function handle(NewDeviceLogin $event): void
    {
        $user = $event->user;

        // Check if user has the HasNotifications trait
        if (!in_array(HasNotifications::class, class_uses_recursive($user))) {
            return;
        }

        if ($event->isSuspicious) {
            $user->notifySuspiciousLogin($event->deviceInfo);
        } else {
            $user->notifyNewDeviceLogin($event->deviceInfo);
        }
    }
}
