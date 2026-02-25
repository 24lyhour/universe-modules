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
            ->subject('Your Login Verification Code')
            ->greeting('Hello!')
            ->line('Your two-factor authentication code is:')
            ->line("**{$this->code}**")
            ->line("This code will expire in {$this->expirationMinutes} minutes.")
            ->line('If you did not request this code, please ignore this email and secure your account.')
            ->salutation('Best regards,');
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
