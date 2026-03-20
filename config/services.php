<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'postmark' => [
        'key' => env('POSTMARK_API_KEY'),
    ],

    'resend' => [
        'key' => env('RESEND_API_KEY'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'slack' => [
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],

    /**
     * protect recapchar cloudeflare
     */
    'turnstile' => [
        'site_key' => env('TURNSTILE_SITE_KEY'),
        'secret' => env('TURNSTILE_SECRET_KEY'),
        'enabled' => env('TURNSTILE_ENABLED', false),
    ],

    /**
     * AI Service Configuration
     * Supports: 'openai', 'anthropic'
     */
    'ai' => [
        'provider' => env('AI_PROVIDER', 'openai'),
        'api_key' => env('AI_API_KEY'),
        'model' => env('AI_MODEL', 'gpt-4o-mini'),
        'base_url' => env('AI_BASE_URL', 'https://api.openai.com/v1'),
    ],

    /**
     * Firebase Cloud Messaging (FCM V1 API)
     */
    'firebase' => [
        'credentials' => env('FIREBASE_CREDENTIALS', storage_path('app/firebase-credentials.json')),
        'project_id' => env('FIREBASE_PROJECT_ID', 'notification-push-752ac'),
    ],

    /**
     * Telegram Bot API
     * Create a bot with @BotFather to get the token
     */
    'telegram' => [
        'bot_token' => env('TELEGRAM_BOT_TOKEN'),
        'chat_id' => env('TELEGRAM_CHAT_ID'), // Default chat ID (optional)
    ],

    /**
     * Twilio (SMS & WhatsApp)
     */
    'twilio' => [
        'sid' => env('TWILIO_SID'),
        'token' => env('TWILIO_TOKEN'),
        'from' => env('TWILIO_FROM'), // SMS sender number
        'whatsapp_from' => env('TWILIO_WHATSAPP_FROM'), // WhatsApp sender
    ],

    /**
     * Vonage/Nexmo (SMS)
     */
    'nexmo' => [
        'key' => env('NEXMO_KEY'),
        'secret' => env('NEXMO_SECRET'),
        'from' => env('NEXMO_FROM'),
    ],

    /**
     * MessageBird (SMS)
     */
    'messagebird' => [
        'access_key' => env('MESSAGEBIRD_ACCESS_KEY'),
        'from' => env('MESSAGEBIRD_FROM'),
    ],

    /**
     * WhatsApp Business API (Meta/360dialog)
     */
    'whatsapp' => [
        'provider' => env('WHATSAPP_PROVIDER', 'meta'), // meta, twilio, 360dialog
        'phone_number_id' => env('WHATSAPP_PHONE_ID'), // Meta Cloud API
        'access_token' => env('WHATSAPP_ACCESS_TOKEN'), // Meta Cloud API
        'api_key' => env('WHATSAPP_API_KEY'), // 360dialog
    ],

];
