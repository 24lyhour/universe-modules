<?php

namespace App\Events;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

/**
 * NewDeviceLogin Event
 *
 * Dispatched when a user logs in from a new device.
 * Triggers device login notification.
 */
class NewDeviceLogin
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public Model $user,
        public array $deviceInfo = [],
        public bool $isSuspicious = false,
    ) {}
}
