<?php

namespace App\Events;

use App\Contracts\NotificationResult;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

/**
 * NotificationSent Event
 *
 * Dispatched after a notification is successfully sent.
 */
class NotificationSent
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public Model $notifiable,
        public string $type,
        public NotificationResult $result,
    ) {}
}
