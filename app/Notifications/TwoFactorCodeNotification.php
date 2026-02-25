<?php

namespace App\Notifications;

use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TwoFactorCodeNotification extends Notification
{

    /**
     * Create a new notification instance.
     */
    public function __construct(
        protected string $code,
        protected int $expirationMinutes = 5
    ) {}

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Your Login Verification Code - ' . config('app.name'))
            ->view('emails.two-factor-code', [
                'code' => $this->code,
                'expirationMinutes' => $this->expirationMinutes,
                'userName' => $notifiable->name ?? 'User',
                'appName' => config('app.name', 'Universe'),
            ]);
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'code' => $this->code,
            'expires_in' => $this->expirationMinutes,
        ];
    }
}
