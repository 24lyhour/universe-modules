<?php

namespace App\Events;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

/**
 * NotificationSending Event
 *
 * Dispatched before a notification is sent.
 * Can be used to modify payload or cancel notification.
 */
class NotificationSending
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public Model $notifiable,
        public string $type,
        public array $payload,
        public array $channels,
    ) {}
}
