<?php

namespace App\Console\Commands;

use App\Services\FirebaseService;
use Illuminate\Console\Command;
use Modules\Customer\Models\Customer;

class SendTestNotification extends Command
{
    protected $signature = 'notification:send
                            {--token= : FCM token to send to}
                            {--customer= : Customer ID to send to}
                            {--title=Test Notification : Notification title}
                            {--body=Hello from Laravel! : Notification body}
                            {--topic= : Send to topic instead of device}';

    protected $description = 'Send a test push notification via FCM';

    public function handle(): int
    {
        $firebase = app(FirebaseService::class);

        $title = $this->option('title');
        $body = $this->option('body');
        $topic = $this->option('topic');
        $token = $this->option('token');
        $customerId = $this->option('customer');

        // Send to topic
        if ($topic) {
            $this->info("Sending to topic: {$topic}");
            $result = $firebase->sendToTopic($topic, $title, $body);

            if ($result) {
                $this->info('✅ Notification sent to topic successfully!');
                return self::SUCCESS;
            } else {
                $this->error('❌ Failed to send notification to topic');
                return self::FAILURE;
            }
        }

        // Get token from customer
        if ($customerId) {
            $customer = Customer::find($customerId);
            if (!$customer) {
                $this->error("Customer with ID {$customerId} not found");
                return self::FAILURE;
            }
            if (!$customer->fcm_token) {
                $this->error("Customer {$customer->name} has no FCM token");
                return self::FAILURE;
            }
            $token = $customer->fcm_token;
            $this->info("Sending to customer: {$customer->name}");
        }

        // Validate token
        if (!$token) {
            // Try to get first customer with FCM token
            $customer = Customer::whereNotNull('fcm_token')->first();
            if ($customer) {
                $token = $customer->fcm_token;
                $this->info("Using token from customer: {$customer->name}");
            } else {
                $this->error('No FCM token provided and no customers with tokens found');
                $this->line('');
                $this->line('Usage:');
                $this->line('  php artisan notification:send --token=YOUR_FCM_TOKEN');
                $this->line('  php artisan notification:send --customer=1');
                $this->line('  php artisan notification:send --topic=all_users');
                return self::FAILURE;
            }
        }

        $this->info("Title: {$title}");
        $this->info("Body: {$body}");
        $this->info("Token: " . substr($token, 0, 20) . '...');
        $this->line('');

        $result = $firebase->sendToDevice($token, $title, $body, [
            'type' => 'test',
            'timestamp' => now()->toIso8601String(),
        ]);

        if ($result) {
            $this->info('✅ Notification sent successfully!');
            return self::SUCCESS;
        } else {
            $this->error('❌ Failed to send notification. Check logs for details.');
            return self::FAILURE;
        }
    }
}
