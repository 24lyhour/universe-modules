# Notification System Documentation

A comprehensive, multi-channel notification system with multi-tenant support, user preferences, templates, and logging.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Quick Start](#quick-start)
5. [Channels](#channels)
6. [Usage](#usage)
7. [Notification Preferences](#notification-preferences)
8. [Templates](#templates)
9. [Multi-Tenant Support](#multi-tenant-support)
10. [Device Management](#device-management)
11. [GPS & Location Tracking](#gps--location-tracking)
12. [Device Login Notifications](#device-login-notifications)
13. [Events](#events)
14. [Logging & Analytics](#logging--analytics)
15. [Configuration](#configuration)
16. [API Reference](#api-reference)

---

## Overview

The notification system provides a unified way to send notifications through multiple channels:

- **Push** - Firebase Cloud Messaging (FCM)
- **Email** - Laravel Mail
- **Database** - In-app notifications
- **SMS** - Twilio, Nexmo, MessageBird
- **Telegram** - Telegram Bot API
- **WhatsApp** - Meta Cloud API, Twilio, 360dialog

### Architecture

```
┌─────────────────┐     ┌───────────────────────┐     ┌─────────────────┐
│   Your Model    │────▶│  NotificationService  │────▶│    Channels     │
│ (HasNotifications)    │  (Multi-tenant aware) │     │ ┌─────────────┐ │
└─────────────────┘     └───────────────────────┘     │ │    Push     │ │
                               │                       │ │   Email    │ │
                               ▼                       │ │  Database  │ │
                        ┌──────────────┐              │ │    SMS     │ │
                        │  Templates   │              │ │  Telegram  │ │
                        │  Preferences │              │ │  WhatsApp  │ │
                        │    Logs      │              │ └─────────────┘ │
                        └──────────────┘              └─────────────────┘
```

---

## Features

- **Multi-channel delivery** - Send to one or multiple channels simultaneously
- **User preferences** - Let users enable/disable channels
- **Multi-tenant support** - Tenant-scoped notifications and configs
- **Templates** - Reusable notification templates with variable interpolation
- **Logging** - Track all notifications for analytics
- **Device login alerts** - Automatic new device detection
- **Event-driven** - Hook into notification lifecycle
- **Easy to extend** - Add custom channels by implementing an interface

---

## Installation

### 1. Run Migrations

```bash
php artisan migrate
```

This creates:
- `notification_preferences` - User channel preferences
- `notification_templates` - Reusable templates
- `notification_logs` - Notification history

### 2. Add Environment Variables

```env
# Telegram Bot
TELEGRAM_BOT_TOKEN=your-bot-token
TELEGRAM_CHAT_ID=default-chat-id

# Twilio (SMS & WhatsApp)
TWILIO_SID=your-sid
TWILIO_TOKEN=your-token
TWILIO_FROM=+1234567890
TWILIO_WHATSAPP_FROM=+1234567890

# WhatsApp Meta Cloud API
WHATSAPP_PROVIDER=meta
WHATSAPP_PHONE_ID=your-phone-id
WHATSAPP_ACCESS_TOKEN=your-token

# Optional: Enable/disable channels
NOTIFICATION_TELEGRAM_ENABLED=true
NOTIFICATION_SMS_ENABLED=true
```

### 3. Add Trait to Models

```php
use App\Traits\HasNotifications;

class User extends Authenticatable
{
    use HasNotifications;

    // Add these fields to $fillable if not present
    protected $fillable = [
        // ...
        'fcm_token',
        'telegram_chat_id',
        'phone',
    ];
}
```

---

## Quick Start

### Basic Usage

```php
// Send notification through all enabled channels
$user->sendNotification('welcome', [
    'title' => 'Welcome!',
    'body' => 'Thanks for joining us.',
]);

// Send to specific channels only
$user->sendNotification('alert', [
    'title' => 'Security Alert',
    'body' => 'Suspicious activity detected.',
], ['email', 'push', 'telegram']);

// Quick channel-specific methods
$user->notifyViaPush('Title', 'Body', ['extra' => 'data']);
$user->notifyViaEmail('Subject', 'Message');
$user->notifyViaTelegram('Title', 'Body', 'https://action.url');
$user->notifyViaSms('Your OTP is 123456');
$user->notifyViaWhatsApp('Hello from our app!');
$user->notifyViaDatabase('Title', 'Body', ['data' => 'here']);
```

### Using the Service Directly

```php
use App\Services\Notification\NotificationService;

$service = app(NotificationService::class);

// Send notification
$results = $service->send($user, 'order_shipped', [
    'title' => 'Order Shipped!',
    'body' => 'Your order #123 has been shipped.',
    'data' => ['order_id' => 123],
]);

// Send to multiple users
$service->sendBatch($users, 'announcement', [
    'title' => 'New Feature',
    'body' => 'Check out our latest update!',
]);

// Send with tenant context
$service->forTenant($school)->send($employee, 'shift_reminder', $data);
```

---

## Channels

### Push (FCM)

Firebase Cloud Messaging for mobile push notifications.

```php
// Requires fcm_token on the model
$user->fcm_token = 'device-fcm-token';
$user->notifyViaPush('Alert', 'Something happened', [
    'action' => 'open_screen',
    'screen' => 'orders',
]);
```

### Email

Standard Laravel email notifications.

```php
// Requires email on the model
$user->notifyViaEmail('Password Changed', 'Your password was updated.');

// With template
$user->notifyViaEmail('Welcome', 'Welcome message', 'emails.welcome');
```

### Database

In-app notifications stored in the `notifications` table.

```php
// Store in-app notification
$user->notifyViaDatabase('New Message', 'You have a new message', [
    'from' => 'John',
    'message_id' => 123,
]);

// Get notifications
$notifications = $user->databaseNotifications;
$unread = $user->unreadNotifications;
$count = $user->getUnreadNotificationsCount();

// Mark as read
$user->markNotificationAsRead($notificationId);
$user->markAllNotificationsAsRead();

// Clean up
$user->deleteOldNotifications(30); // Older than 30 days
```

### SMS

Send SMS via Twilio, Nexmo, or MessageBird.

```php
// Requires phone on the model
$user->phone = '+1234567890';
$user->notifyViaSms('Your verification code is 123456');
```

### Telegram

Send messages via Telegram Bot.

```php
// Requires telegram_chat_id on the model
$user->telegram_chat_id = '123456789';
$user->notifyViaTelegram('Order Update', 'Your order has shipped!', 'https://track.link');

// Send to channel/group
$telegramChannel = app(TelegramChannel::class);
$telegramChannel->sendToChannel('@your_channel', [
    'title' => 'Announcement',
    'body' => 'New feature released!',
]);
```

### WhatsApp

Send WhatsApp messages via Meta, Twilio, or 360dialog.

```php
// Requires phone/whatsapp_number on the model
$user->notifyViaWhatsApp('Your order is ready for pickup!');
```

---

## Notification Preferences

Allow users to control which channels they receive notifications on.

### Check & Update Preferences

```php
// Check if channel is enabled
if ($user->canReceiveNotification('telegram')) {
    // ...
}

// Get all enabled channels
$channels = $user->getEnabledNotificationChannels();
// ['push', 'email', 'database']

// Enable/disable channels
$user->enableNotificationChannel('telegram');
$user->disableNotificationChannel('sms');

// Update multiple preferences at once
$user->updateNotificationPreferences([
    'push' => true,
    'email' => true,
    'sms' => false,
    'telegram' => true,
    'whatsapp' => false,
]);
```

### Default Preferences

Configure default channel preferences in `config/notifications.php`:

```php
'default_channels' => ['push', 'email', 'database'],
```

---

## Templates

Create reusable notification templates with variable interpolation.

### Create Template

```php
use App\Models\NotificationTemplate;

NotificationTemplate::create([
    'key' => 'order_shipped',
    'name' => 'Order Shipped Notification',
    'title' => 'Order #{{order_id}} Shipped!',
    'body' => 'Hi {{customer_name}}, your order is on the way. Track: {{tracking_url}}',
    'channels' => ['push', 'email', 'database'],
]);
```

### Use Template

```php
// Send using template key
$user->sendNotification('order_shipped', [
    'data' => [
        'order_id' => 12345,
        'customer_name' => 'John',
        'tracking_url' => 'https://track.co/abc',
    ],
]);
// Title becomes: "Order #12345 Shipped!"
// Body becomes: "Hi John, your order is on the way..."
```

### Tenant-Specific Templates

```php
// Create template for specific tenant
NotificationTemplate::create([
    'key' => 'welcome',
    'name' => 'School Welcome',
    'title' => 'Welcome to {{school_name}}!',
    'body' => 'Welcome message specific to this school...',
    'tenant_type' => 'Modules\\School\\Models\\School',
    'tenant_id' => 1,
]);

// Global template (fallback)
NotificationTemplate::create([
    'key' => 'welcome',
    'name' => 'Generic Welcome',
    'title' => 'Welcome!',
    'body' => 'Generic welcome message...',
    'tenant_type' => null,
    'tenant_id' => null,
]);
```

---

## Multi-Tenant Support

### Send with Tenant Context

```php
use App\Services\Notification\NotificationService;

$service = app(NotificationService::class);

// Option 1: Using model
$service->forTenant($school)->send($employee, 'shift_reminder', $data);

// Option 2: Using type and ID
$service->forTenant('Modules\\School\\Models\\School', 1)
    ->send($employee, 'shift_reminder', $data);

// Option 3: Use current tenant from TenantService
$service->forCurrentTenant()->send($employee, 'shift_reminder', $data);

// From trait
$employee->sendTenantNotification($school, 'shift_reminder', $data);
```

### Tenant-Specific Configuration

In `config/notifications.php`:

```php
'tenants' => [
    'School' => [
        1 => [
            'telegram' => [
                'bot_token' => 'custom-bot-for-school-1',
            ],
        ],
    ],
],
```

---

## Device Management

Track user devices for push notifications and login security.

### Add HasDevices Trait

```php
use App\Traits\HasDevices;

class User extends Authenticatable
{
    use HasDevices;
}
```

### Register Device on Login

```php
// Register device with all info
$device = $user->registerDevice([
    'device_id' => 'unique-device-identifier',
    'device_type' => 'mobile', // mobile, tablet, desktop, web
    'device_name' => 'John\'s iPhone',
    'fcm_token' => 'firebase-token',
    'device_os' => 'iOS',
    'device_os_version' => '17.0',
    'device_model' => 'iPhone 15',
    'device_brand' => 'Apple',
]);

// Or with login tracking
$device = $user->registerDeviceLogin([
    'device_id' => 'unique-id',
    'device_type' => 'mobile',
    'fcm_token' => 'token',
]);
```

### Manage Devices

```php
// Get all devices
$devices = $user->devices;
$activeDevices = $user->activeDevices;
$trustedDevices = $user->trustedDevices;

// Get devices with FCM tokens
$pushDevices = $user->pushDevices;

// Get device info
$device = $user->getDevice($deviceId);
$device = $user->getDeviceByUuid($uuid);

// Get device summaries for UI
$summaries = $user->getDevicesSummary();

// Trust/untrust device
$user->trustDevice($deviceId);
$user->untrustDevice($deviceId);

// Deactivate (logout)
$user->deactivateDevice($deviceId);
$user->deactivateAllDevices();
$user->deactivateOtherDevices($currentDeviceId);

// Delete device
$user->deleteDevice($deviceId);
$user->cleanOldDevices(90); // Inactive for 90 days
```

### FCM Token Management

```php
// Get all FCM tokens
$tokens = $user->getFcmTokens();
$latestToken = $user->getLatestFcmToken();

// Store FCM token (creates device if not exists)
$device = $user->storeFcmToken('new-fcm-token', [
    'device_type' => 'mobile',
]);

// Update token for specific device
$user->updateDeviceFcmToken('device-id', 'new-token');

// Remove token (for logout)
$user->removeFcmToken('fcm-token');
```

### Device Database Fields

The `devices` table stores:

| Field | Description |
|-------|-------------|
| `uuid` | Unique identifier |
| `deviceable_type/id` | Polymorphic owner (User, Employee, etc.) |
| `device_id` | Mobile device unique ID |
| `device_type` | mobile, tablet, desktop, web |
| `device_name` | User-friendly name |
| `fcm_token` | Firebase token for push |
| `device_os` | iOS, Android, Windows, etc. |
| `device_os_version` | OS version |
| `device_model` | Device model |
| `device_brand` | Manufacturer |
| `browser` | Browser name (for web) |
| `browser_version` | Browser version |
| `ip_address` | Last known IP |
| `location` | City, Country |
| `latitude/longitude` | GPS coordinates |
| `accuracy` | GPS accuracy in meters |
| `gps_enabled` | Whether GPS is active |
| `location_updated_at` | Last location update |
| `last_used_at` | Last activity |
| `last_login_at` | Last login time |
| `is_active` | Device is active |
| `is_trusted` | User marked as trusted |

---

## GPS & Location Tracking

Track device locations for attendance, geofencing, and security.

### Update Location

```php
// Update location for a device
$user->updateDeviceLocation(
    deviceId: $deviceId,
    latitude: 11.5564,
    longitude: 104.9282,
    accuracy: 10.5, // meters
    location: 'Phnom Penh, Cambodia'
);

// Update by device unique ID (from mobile app)
$user->updateDeviceLocationById(
    deviceUniqueId: 'mobile-device-id',
    latitude: 11.5564,
    longitude: 104.9282
);

// On Device model directly
$device->updateLocation(11.5564, 104.9282, 10.5, 'Phnom Penh');
```

### Get Location Data

```php
// Get all device locations
$locations = $user->getDeviceLocations();
// Returns array with id, uuid, name, and location details

// Get latest location from any device
$latestLocation = $user->getLatestLocation();
// Returns: ['latitude' => 11.5564, 'longitude' => 104.9282, 'accuracy' => 10.5, 'updated_at' => '...']

// On Device model
$coords = $device->getCoordinates();
$summary = $device->getLocationSummary();
```

### Check Location

```php
// Device methods
if ($device->hasLocation()) {
    // Has coordinates
}

if ($device->hasRecentLocation(30)) {
    // Location updated within 30 minutes
}

// Check if device is within radius
if ($device->isWithinRadius($officeLat, $officeLon, radiusKm: 0.5)) {
    // Device is within 500m of office
}

// Calculate distance
$km = $device->distanceTo($targetLat, $targetLon);

// Static helper
$km = Device::calculateDistance($lat1, $lon1, $lat2, $lon2);
```

### Geofencing / Find Nearby

```php
// Get devices within radius
$nearbyDevices = $user->getDevicesWithinRadius(
    latitude: 11.5564,
    longitude: 104.9282,
    radiusKm: 1.0 // 1 km radius
);

// Check if any device is within radius
if ($user->hasDeviceWithinRadius($officeLat, $officeLon, 0.1)) {
    // User has device within 100m of office
}

// Query scope for all devices
$nearbyDevices = Device::withinRadius(11.5564, 104.9282, 1.0)->get();

// Devices with recent locations
$recentlyTracked = Device::recentlyLocated(30)->get(); // Updated in last 30 min

// Devices with GPS enabled
$gpsDevices = Device::gpsEnabled()->get();
```

### Clear Location

```php
// Clear location for one device
$device->clearLocation();

// Clear all device locations for user
$user->clearAllDeviceLocations();
```

### GPS Scopes

```php
// Devices with location data
$devices = Device::withLocation()->get();

// Devices with GPS enabled
$devices = Device::gpsEnabled()->get();

// Devices within radius
$devices = Device::withinRadius($lat, $lon, $radiusKm)->get();

// Recently located devices
$devices = Device::recentlyLocated(60)->get(); // Within 60 minutes
```

### Example: Attendance Check-in

```php
// API endpoint for mobile app
public function checkIn(Request $request)
{
    $request->validate([
        'device_id' => 'required|string',
        'latitude' => 'required|numeric',
        'longitude' => 'required|numeric',
        'accuracy' => 'nullable|numeric',
    ]);

    $employee = auth()->user();
    $office = $employee->office;

    // Update device location
    $device = $employee->updateDeviceLocationById(
        $request->device_id,
        $request->latitude,
        $request->longitude,
        $request->accuracy
    );

    // Check if within office radius
    if (!$device->isWithinRadius($office->lat, $office->lon, 0.1)) {
        return response()->json([
            'success' => false,
            'message' => 'You must be within 100m of the office to check in.',
            'distance' => $device->distanceTo($office->lat, $office->lon),
        ], 422);
    }

    // Create attendance record
    $attendance = Attendance::create([
        'employee_id' => $employee->id,
        'device_id' => $device->id,
        'check_in_at' => now(),
        'latitude' => $request->latitude,
        'longitude' => $request->longitude,
    ]);

    return response()->json(['success' => true, 'attendance' => $attendance]);
}
```

---

## Device Login Notifications

Automatically notify users when they log in from a new device.

### Send Device Login Notification

```php
// From HasNotifications trait
$user->notifyNewDeviceLogin([
    'ip' => request()->ip(),
    'browser' => 'Chrome',
    'os' => 'Windows',
    'location' => 'New York, USA',
]);

// For suspicious activity
$user->notifySuspiciousLogin([
    'ip' => request()->ip(),
], 'Login from unusual location');
```

### Event-Based (Automatic)

```php
use App\Events\NewDeviceLogin;

// Dispatch event (listener sends notification automatically)
NewDeviceLogin::dispatch($user, [
    'ip' => request()->ip(),
    'browser' => $browser,
], $isSuspicious);
```

### Configure in `config/notifications.php`:

```php
'device_login' => [
    'enabled' => true,
    'channels' => ['email', 'push', 'database'],
    'detect_suspicious' => true,
    'suspicious_channels' => ['email', 'push', 'telegram', 'database'],
],
```

---

## Events

Hook into the notification lifecycle with events.

### Available Events

| Event | Description |
|-------|-------------|
| `NotificationSending` | Before notification is sent |
| `NotificationSent` | After successful send |
| `NotificationFailed` | When send fails |
| `NewDeviceLogin` | New device login detected |

### Listen to Events

```php
// In EventServiceProvider
protected $listen = [
    \App\Events\NotificationSent::class => [
        \App\Listeners\LogNotificationToAnalytics::class,
    ],
    \App\Events\NotificationFailed::class => [
        \App\Listeners\AlertOnNotificationFailure::class,
    ],
    \App\Events\NewDeviceLogin::class => [
        \App\Listeners\SendNewDeviceLoginNotification::class,
    ],
];

// Listener example
class LogNotificationToAnalytics
{
    public function handle(NotificationSent $event): void
    {
        $notifiable = $event->notifiable;
        $type = $event->type;
        $result = $event->result;

        // Log to analytics service
    }
}
```

---

## Logging & Analytics

All notifications are logged for tracking and analytics.

### View Logs

```php
use App\Models\NotificationLog;

// Get all logs for a user
$logs = NotificationLog::forNotifiable($user)->get();

// Filter by channel
$pushLogs = NotificationLog::forChannel('push')->get();

// Filter by type
$welcomeLogs = NotificationLog::forType('welcome')->get();

// Filter by status
$failed = NotificationLog::failed()->get();
$successful = NotificationLog::successful()->get();

// Date range
$recent = NotificationLog::between(now()->subDays(7), now())->get();
```

### Get Statistics

```php
$stats = NotificationLog::getStats(
    tenantType: 'School',
    tenantId: 1,
    days: 30
);

// Returns:
// [
//     'total' => 1234,
//     'successful' => 1200,
//     'failed' => 34,
//     'success_rate' => 97.24,
//     'by_channel' => [
//         'push' => ['total' => 500, 'successful' => 495, 'failed' => 5, 'success_rate' => 99.0],
//         'email' => ['total' => 400, 'successful' => 380, 'failed' => 20, 'success_rate' => 95.0],
//     ],
//     'by_type' => [
//         'welcome' => 100,
//         'order_shipped' => 200,
//     ],
// ]
```

### Clean Old Logs

```php
// Clean logs older than 90 days
NotificationLog::cleanOldLogs(90);

// Or via config (automatic)
// config/notifications.php
'log_retention_days' => 90,
```

---

## Configuration

### `config/notifications.php`

```php
return [
    // Default channels when none specified
    'default_channels' => ['push', 'email', 'database'],

    // Database logging
    'log_to_database' => true,
    'log_retention_days' => 90,

    // Channel configuration
    'channels' => [
        'push' => ['enabled' => true],
        'email' => ['enabled' => true],
        'database' => ['enabled' => true],
        'sms' => ['enabled' => false, 'provider' => 'twilio'],
        'telegram' => ['enabled' => false],
        'whatsapp' => ['enabled' => false, 'provider' => 'meta'],
    ],

    // Device login settings
    'device_login' => [
        'enabled' => true,
        'channels' => ['email', 'push', 'database'],
    ],

    // Rate limiting
    'rate_limiting' => [
        'enabled' => true,
        'max_per_minute' => 10,
        'max_per_hour' => 50,
    ],

    // Default templates
    'templates' => [
        'welcome' => [
            'title' => 'Welcome to {{app_name}}!',
            'body' => 'Thanks for joining...',
            'channels' => ['email', 'database'],
        ],
    ],
];
```

### `config/services.php`

```php
// Telegram
'telegram' => [
    'bot_token' => env('TELEGRAM_BOT_TOKEN'),
    'chat_id' => env('TELEGRAM_CHAT_ID'),
],

// Twilio (SMS & WhatsApp)
'twilio' => [
    'sid' => env('TWILIO_SID'),
    'token' => env('TWILIO_TOKEN'),
    'from' => env('TWILIO_FROM'),
    'whatsapp_from' => env('TWILIO_WHATSAPP_FROM'),
],

// WhatsApp Meta
'whatsapp' => [
    'provider' => env('WHATSAPP_PROVIDER', 'meta'),
    'phone_number_id' => env('WHATSAPP_PHONE_ID'),
    'access_token' => env('WHATSAPP_ACCESS_TOKEN'),
],
```

---

## API Reference

### HasNotifications Trait Methods

| Method | Description |
|--------|-------------|
| `sendNotification($type, $payload, $channels)` | Send notification |
| `sendTenantNotification($tenant, $type, $payload, $channels)` | Send with tenant context |
| `notifyViaPush($title, $body, $data)` | Send push notification |
| `notifyViaEmail($subject, $message, $template)` | Send email |
| `notifyViaSms($message)` | Send SMS |
| `notifyViaTelegram($title, $body, $actionUrl)` | Send Telegram |
| `notifyViaWhatsApp($message)` | Send WhatsApp |
| `notifyViaDatabase($title, $body, $data)` | Store in-app notification |
| `notifyNewDeviceLogin($deviceInfo)` | Send device login alert |
| `canReceiveNotification($channel)` | Check if channel enabled |
| `getEnabledNotificationChannels()` | Get all enabled channels |
| `enableNotificationChannel($channel)` | Enable a channel |
| `disableNotificationChannel($channel)` | Disable a channel |
| `updateNotificationPreferences($prefs)` | Update all preferences |
| `databaseNotifications` | Get all in-app notifications |
| `unreadNotifications` | Get unread notifications |
| `getUnreadNotificationsCount()` | Count unread |
| `markNotificationAsRead($id)` | Mark one as read |
| `markAllNotificationsAsRead()` | Mark all as read |
| `deleteOldNotifications($days)` | Clean old notifications |

### NotificationService Methods

| Method | Description |
|--------|-------------|
| `send($notifiable, $type, $payload, $channels)` | Send notification |
| `sendBatch($notifiables, $type, $payload, $channels)` | Send to multiple |
| `sendVia($channel, $notifiable, $type, $payload)` | Send via specific channel |
| `push($notifiable, $title, $body, $data)` | Quick push |
| `email($notifiable, $subject, $message, $template)` | Quick email |
| `sms($notifiable, $message)` | Quick SMS |
| `telegram($notifiable, $title, $body, $url)` | Quick Telegram |
| `whatsapp($notifiable, $message)` | Quick WhatsApp |
| `database($notifiable, $title, $body, $data)` | Quick database |
| `forTenant($tenant)` | Set tenant context |
| `forCurrentTenant()` | Use current tenant |
| `withoutLogging()` | Disable logging |
| `withoutEvents()` | Disable events |
| `registerChannel($channel)` | Add custom channel |
| `getChannel($id)` | Get channel instance |
| `getAvailableChannels()` | Get configured channels |

### HasDevices Trait Methods

| Method | Description |
|--------|-------------|
| `devices()` | Get all devices relationship |
| `activeDevices()` | Get active devices |
| `trustedDevices()` | Get trusted devices |
| `pushDevices()` | Get devices with FCM tokens |
| `devicesWithLocation()` | Get devices with GPS data |
| `gpsEnabledDevices()` | Get devices with GPS enabled |
| `registerDevice($data, $checkNew)` | Register new device |
| `registerDeviceLogin($data)` | Register device + record login |
| `isNewDevice($deviceId, $ip, $userAgent)` | Check if new device |
| `hasDevices()` | Check if has any devices |
| `hasPushDevices()` | Check if has push-enabled devices |
| `getFcmTokens()` | Get all FCM tokens |
| `getLatestFcmToken()` | Get most recent FCM token |
| `storeFcmToken($token, $deviceData)` | Store FCM token |
| `removeFcmToken($token)` | Remove FCM token |
| `updateDeviceFcmToken($deviceId, $token)` | Update token |
| `getDevice($id)` | Get device by ID |
| `getDeviceByUuid($uuid)` | Get device by UUID |
| `deactivateDevice($id)` | Logout from device |
| `deactivateAllDevices()` | Logout all devices |
| `deactivateOtherDevices($currentId)` | Logout other devices |
| `trustDevice($id)` | Mark device as trusted |
| `untrustDevice($id)` | Remove trust |
| `deleteDevice($id)` | Delete device |
| `cleanOldDevices($days)` | Clean inactive devices |
| `getDevicesSummary()` | Get all devices as array |
| `getDevicesCount()` | Count total devices |
| `getActiveDevicesCount()` | Count active devices |
| `updateDeviceLocation($id, $lat, $lon, $acc, $loc)` | Update GPS location |
| `updateDeviceLocationById($deviceId, $lat, $lon)` | Update by device_id |
| `getDeviceLocations()` | Get all device locations |
| `getLatestLocation()` | Get most recent location |
| `getDevicesWithinRadius($lat, $lon, $km)` | Find nearby devices |
| `hasDeviceWithinRadius($lat, $lon, $km)` | Check if device nearby |
| `clearAllDeviceLocations()` | Clear all GPS data |

### Device Model Methods

| Method | Description |
|--------|-------------|
| `touchLastUsed()` | Update last_used_at |
| `recordLogin($ip)` | Record login with IP |
| `updateFcmToken($token)` | Update FCM token |
| `markAsTrusted()` | Mark as trusted |
| `markAsUntrusted()` | Remove trust |
| `deactivate()` | Deactivate device |
| `activate()` | Activate device |
| `getDisplayName()` | Get friendly name |
| `getSummary()` | Get device summary array |
| `updateLocation($lat, $lon, $acc, $loc)` | Update GPS location |
| `hasLocation()` | Check if has GPS data |
| `hasRecentLocation($minutes)` | Check if recent GPS |
| `getCoordinates()` | Get lat/lon array |
| `distanceTo($lat, $lon)` | Calculate distance (km) |
| `isWithinRadius($lat, $lon, $km)` | Check if within radius |
| `clearLocation()` | Clear GPS data |
| `getLocationSummary()` | Get location summary |
| `isNewDevice($user, $deviceId, $ip, $ua)` | Static: check if new |
| `registerDevice($user, $data)` | Static: register device |
| `parseBrowser($ua)` | Static: parse browser |
| `parseOS($ua)` | Static: parse OS |
| `calculateDistance($lat1, $lon1, $lat2, $lon2)` | Static: calc distance |

### Device Query Scopes

| Scope | Description |
|-------|-------------|
| `active()` | Active devices only |
| `trusted()` | Trusted devices only |
| `withFcmToken()` | Devices with FCM token |
| `ofType($type)` | Filter by device type |
| `recentlyUsed($days)` | Used within X days |
| `withLocation()` | Has GPS coordinates |
| `gpsEnabled()` | GPS is enabled |
| `withinRadius($lat, $lon, $km)` | Within radius of point |
| `recentlyLocated($minutes)` | Located within X minutes |

### HasFcmTokenNotification Trait Methods

| Method | Description |
|--------|-------------|
| `storeFcmToken($token)` | Store FCM token on model |
| `removeFcmToken()` | Remove FCM token |
| `getFcmToken()` | Get FCM token |
| `getAllFcmTokens()` | Get all FCM tokens |
| `hasFcmToken()` | Check if has token |
| `hasMultipleFcmTokens()` | Check if multiple tokens |
| `sendPush($title, $body, $data)` | Send push to primary device |
| `sendPushToAllDevices($title, $body, $data)` | Send to all devices |
| `sendPushNotification($title, $body, $data)` | Send via Laravel notification |
| `sendSilentPush($data)` | Send data-only push |
| `notifyOrderUpdate($orderId, $status, $msg)` | Order update push |
| `notifyPayment($type, $amount, $currency)` | Payment push |
| `notifyPromotion($title, $body, $code, $link)` | Promotion push |
| `notifyReminder($title, $body, $action)` | Reminder push |
| `notifyMessage($sender, $preview, $convId)` | Chat message push |
| `notifySecurityAlert($type, $msg, $details)` | Security alert push |
| `sendPushToMany($users, $title, $body, $data)` | Static: batch send |
| `sendPushToTopic($topic, $title, $body, $data)` | Static: topic send |
| `getPushTopics()` | Get subscribed topics |

---

## File Structure

```
app/
├── Contracts/
│   ├── NotificationChannelInterface.php
│   └── NotificationResult.php
├── Events/
│   ├── NewDeviceLogin.php
│   ├── NotificationFailed.php
│   ├── NotificationSending.php
│   └── NotificationSent.php
├── Listeners/
│   └── SendNewDeviceLoginNotification.php
├── Models/
│   ├── Device.php                      # Device model with GPS
│   ├── NotificationLog.php
│   ├── NotificationPreference.php
│   └── NotificationTemplate.php
├── Services/
│   ├── FirebaseService.php             # FCM integration
│   └── Notification/
│       ├── NotificationService.php
│       └── Channels/
│           ├── AbstractChannel.php
│           ├── DatabaseChannel.php
│           ├── EmailChannel.php
│           ├── PushChannel.php
│           ├── SmsChannel.php
│           ├── TelegramChannel.php
│           └── WhatsAppChannel.php
└── Traits/
    ├── HasDevices.php                  # Device management trait
    ├── HasFcmTokenNotification.php     # Lightweight FCM trait
    └── HasNotifications.php            # Full notification trait
config/
└── notifications.php
database/migrations/
├── xxx_create_devices_table.php
├── xxx_add_gps_columns_to_devices_table.php
├── xxx_create_notification_preferences_table.php
├── xxx_create_notification_templates_table.php
├── xxx_create_notification_logs_table.php
└── xxx_add_notification_fields_to_users_table.php
```

---

## Extending with Custom Channels

Create a custom channel by implementing `NotificationChannelInterface`:

```php
namespace App\Services\Notification\Channels;

use App\Contracts\NotificationChannelInterface;
use App\Contracts\NotificationResult;

class SlackChannel extends AbstractChannel
{
    public function getChannelId(): string
    {
        return 'slack';
    }

    public function getDisplayName(): string
    {
        return 'Slack';
    }

    public function isAvailable(array $config = []): bool
    {
        return !empty(config('services.slack.webhook_url'));
    }

    public function canSendTo(Model $notifiable): bool
    {
        return !empty($notifiable->slack_channel);
    }

    public function getRecipientId(Model $notifiable): ?string
    {
        return $notifiable->slack_channel;
    }

    public function send(Model $notifiable, array $payload, array $config = []): NotificationResult
    {
        // Implement Slack sending logic
    }

    public function getRequiredConfig(): array
    {
        return ['webhook_url'];
    }
}
```

Register in a service provider:

```php
public function boot(): void
{
    $service = app(NotificationService::class);
    $service->registerChannel(new SlackChannel());
}
```

---

## Troubleshooting

### Notifications not sending

1. Check channel is enabled in config
2. Verify credentials in `.env`
3. Check user has required field (email, phone, fcm_token, etc.)
4. Check user preferences allow this channel

### Telegram not working

1. Create bot with @BotFather
2. Get chat ID: Send message to bot, then visit `https://api.telegram.org/bot{TOKEN}/getUpdates`
3. Set `TELEGRAM_BOT_TOKEN` in `.env`

### WhatsApp not working

1. Set up Meta Business account
2. Get phone_number_id and access_token from Meta dashboard
3. Phone numbers must be in WhatsApp-compatible format

---

## Related Documentation

- [Firebase Service](./firebase-setup.md)
- [Multi-Tenancy](./multi-tenancy.md)
- [User Authentication](./authentication.md)
