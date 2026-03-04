<?php

namespace App\Notifications;

use App\Channels\FirebaseChannel;
use App\Services\FirebaseService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Notification;

class PushNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public function __construct(
        protected string $title,
        protected string $body,
        protected array $data = []
    ) {}

    public function via(object $notifiable): array
    {
        return [FirebaseChannel::class];
    }

    public function toFirebase(object $notifiable): bool
    {
        $token = $notifiable->fcm_token;

        if (empty($token)) {
            return false;
        }

        $firebase = app(FirebaseService::class);

        return $firebase->sendToDevice(
            token: $token,
            title: $this->title,
            body: $this->body,
            data: $this->data
        );
    }
}
