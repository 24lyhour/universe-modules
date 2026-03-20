<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Notification Channels
    |--------------------------------------------------------------------------
    |
    | These are the default channels used when no specific channels are
    | specified. Users can customize their preferences to override these.
    |
    */

    'default_channels' => ['push', 'email', 'database'],

    /*
    |--------------------------------------------------------------------------
    | Logging
    |--------------------------------------------------------------------------
    |
    | Enable or disable notification logging to the database.
    | Logs can be used for analytics and debugging.
    |
    */

    'log_to_database' => env('NOTIFICATION_LOG_TO_DATABASE', true),

    'log_retention_days' => env('NOTIFICATION_LOG_RETENTION_DAYS', 90),

    /*
    |--------------------------------------------------------------------------
    | Channel Configuration
    |--------------------------------------------------------------------------
    |
    | Configure each notification channel. Channel-specific settings
    | can also be set in config/services.php for external services.
    |
    */

    'channels' => [

        'push' => [
            'enabled' => env('NOTIFICATION_PUSH_ENABLED', true),
            // Uses config/services.php -> firebase
        ],

        'email' => [
            'enabled' => env('NOTIFICATION_EMAIL_ENABLED', true),
            'from_name' => env('MAIL_FROM_NAME', config('app.name')),
            'from_address' => env('MAIL_FROM_ADDRESS', 'noreply@example.com'),
        ],

        'database' => [
            'enabled' => env('NOTIFICATION_DATABASE_ENABLED', true),
        ],

        'sms' => [
            'enabled' => env('NOTIFICATION_SMS_ENABLED', false),
            'provider' => env('SMS_PROVIDER', 'twilio'), // twilio, nexmo, messagebird, custom
            'include_title' => true,
        ],

        'telegram' => [
            'enabled' => env('NOTIFICATION_TELEGRAM_ENABLED', false),
            'parse_mode' => 'HTML',
            'disable_preview' => false,
            'button_text' => 'View Details',
            // Uses config/services.php -> telegram
        ],

        'whatsapp' => [
            'enabled' => env('NOTIFICATION_WHATSAPP_ENABLED', false),
            'provider' => env('WHATSAPP_PROVIDER', 'meta'), // meta, twilio, 360dialog
            // Uses config/services.php -> whatsapp
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Device Login Notifications
    |--------------------------------------------------------------------------
    |
    | Configuration for new device login notifications.
    |
    */

    'device_login' => [
        'enabled' => env('NOTIFICATION_DEVICE_LOGIN_ENABLED', true),
        'channels' => ['email', 'push', 'database'],
        'detect_suspicious' => true,
        'suspicious_channels' => ['email', 'push', 'telegram', 'database'],
    ],

    /*
    |--------------------------------------------------------------------------
    | Rate Limiting
    |--------------------------------------------------------------------------
    |
    | Prevent sending too many notifications to the same recipient.
    |
    */

    'rate_limiting' => [
        'enabled' => env('NOTIFICATION_RATE_LIMIT_ENABLED', true),
        'max_per_minute' => env('NOTIFICATION_MAX_PER_MINUTE', 10),
        'max_per_hour' => env('NOTIFICATION_MAX_PER_HOUR', 50),
    ],

    /*
    |--------------------------------------------------------------------------
    | Queue Configuration
    |--------------------------------------------------------------------------
    |
    | Queue settings for async notification sending.
    |
    */

    'queue' => [
        'enabled' => env('NOTIFICATION_QUEUE_ENABLED', false),
        'connection' => env('NOTIFICATION_QUEUE_CONNECTION', 'default'),
        'queue' => env('NOTIFICATION_QUEUE_NAME', 'notifications'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Templates
    |--------------------------------------------------------------------------
    |
    | Default notification templates for common notification types.
    | These can be overridden per-tenant in the database.
    |
    */

    'templates' => [

        'welcome' => [
            'title' => 'Welcome to {{app_name}}!',
            'body' => 'Hi {{name}}, thanks for joining us. We\'re excited to have you!',
            'channels' => ['email', 'database'],
        ],

        'device_login' => [
            'title' => 'New Device Login',
            'body' => 'A new login was detected on your account from {{browser}} on {{os}} at {{time}}.',
            'channels' => ['email', 'push', 'database'],
        ],

        'suspicious_login' => [
            'title' => '⚠️ Security Alert',
            'body' => 'Suspicious login attempt detected: {{reason}}. If this wasn\'t you, please secure your account immediately.',
            'channels' => ['email', 'push', 'telegram', 'database'],
        ],

        'password_changed' => [
            'title' => 'Password Changed',
            'body' => 'Your password was successfully changed. If you didn\'t make this change, please contact support immediately.',
            'channels' => ['email', 'push', 'database'],
        ],

        'two_factor_enabled' => [
            'title' => 'Two-Factor Authentication Enabled',
            'body' => 'Two-factor authentication has been enabled on your account for added security.',
            'channels' => ['email', 'database'],
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Tenant Configuration
    |--------------------------------------------------------------------------
    |
    | Per-tenant notification configuration overrides.
    | Format: 'TenantType' => ['tenant_id' => [...config...]]
    |
    */

    'tenants' => [
        // Example:
        // 'School' => [
        //     1 => [
        //         'telegram' => [
        //             'bot_token' => 'custom-token-for-school-1',
        //         ],
        //     ],
        // ],
    ],

];
