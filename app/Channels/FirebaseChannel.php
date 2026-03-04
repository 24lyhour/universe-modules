<?php

namespace App\Channels;

use Illuminate\Notifications\Notification;

class FirebaseChannel
{
    public function send(object $notifiable, Notification $notification): void
    {
        if (method_exists($notification, 'toFirebase')) {
            $notification->toFirebase($notifiable);
        }
    }
}
