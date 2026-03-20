<?php

namespace App\Events;

use App\Contracts\NotificationResult;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

/**
 * NotificationFailed Event
 *
 * Dispatched when a notification fails to send.
 */
class NotificationFailed
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public Model $notifiable,
        public string $type,
        public NotificationResult $result,
    ) {}
}
