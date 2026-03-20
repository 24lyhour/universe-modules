# Notification System Flow Diagrams

Visual diagrams explaining how the notification system works.

---

## 1. Basic Notification Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              USER CODE                                       │
│  $user->sendNotification('welcome', ['title' => 'Hi', 'body' => 'Welcome']) │
└─────────────────────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        HasNotifications Trait                                │
│  - Calls NotificationService::send()                                        │
│  - Passes notifiable model, type, payload                                   │
└─────────────────────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         NotificationService                                  │
│  1. Resolve template (if exists)                                            │
│  2. Add tenant context                                                      │
│  3. Determine target channels                                               │
│  4. Dispatch NotificationSending event                                      │
└─────────────────────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          FOR EACH CHANNEL                                    │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ 1. Check channel is available (configured)                          │   │
│  │ 2. Check user preference allows this channel                        │   │
│  │ 3. Check notifiable has required field (email, fcm_token, etc.)     │   │
│  │ 4. Send notification via channel                                    │   │
│  │ 5. Return NotificationResult                                        │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           RESULT HANDLING                                    │
│  1. Log to notification_logs table                                          │
│  2. Dispatch NotificationSent or NotificationFailed event                   │
│  3. Return results array to caller                                          │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Channel Selection Flow

```
┌───────────────────────────────────────────────────────────────────────────┐
│                     DETERMINE TARGET CHANNELS                              │
└───────────────────────────────────────────────────────────────────────────┘
                                    │
                         ┌──────────┴──────────┐
                         │  Channels specified? │
                         └──────────┬──────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    │ YES                           │ NO
                    ▼                               ▼
┌───────────────────────────────┐   ┌───────────────────────────────────────┐
│  Use specified channels       │   │  Get user's enabled channels          │
│  e.g., ['push', 'email']      │   │  from notification_preferences table  │
└───────────────────────────────┘   └───────────────────────────────────────┘
                    │                               │
                    │                    ┌──────────┴──────────┐
                    │                    │  Has preferences?   │
                    │                    └──────────┬──────────┘
                    │                               │
                    │               ┌───────────────┴───────────────┐
                    │               │ YES                           │ NO
                    │               ▼                               ▼
                    │   ┌───────────────────────┐   ┌───────────────────────┐
                    │   │  Use user's enabled   │   │  Use default channels │
                    │   │  channels from prefs  │   │  from config:         │
                    │   │  e.g., push=true      │   │  ['push', 'email',    │
                    │   │       email=true      │   │   'database']         │
                    │   │       sms=false       │   │                       │
                    │   └───────────────────────┘   └───────────────────────┘
                    │               │                               │
                    └───────────────┴───────────────────────────────┘
                                    │
                                    ▼
                    ┌───────────────────────────────────────┐
                    │  Final list of target channels        │
                    │  e.g., ['push', 'email', 'database']  │
                    └───────────────────────────────────────┘
```

---

## 3. Single Channel Flow (Push Example)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            PushChannel::send()                               │
└─────────────────────────────────────────────────────────────────────────────┘
                                     │
                         ┌───────────┴───────────┐
                         │  Get FCM token from   │
                         │  $notifiable->fcm_token│
                         └───────────┬───────────┘
                                     │
                         ┌───────────┴───────────┐
                         │    Has FCM token?     │
                         └───────────┬───────────┘
                                     │
                    ┌────────────────┴────────────────┐
                    │ NO                              │ YES
                    ▼                                 ▼
┌───────────────────────────────┐   ┌───────────────────────────────────────┐
│  Return NotificationResult    │   │  Extract payload                      │
│  (skipped: "No FCM token")    │   │  - title                              │
└───────────────────────────────┘   │  - body                               │
                                    │  - data                               │
                                    └───────────────────┬───────────────────┘
                                                        │
                                                        ▼
                                    ┌───────────────────────────────────────┐
                                    │  FirebaseService::sendToDevice()      │
                                    │  - Build FCM V1 API payload           │
                                    │  - Get OAuth access token             │
                                    │  - Send HTTP request to FCM           │
                                    └───────────────────┬───────────────────┘
                                                        │
                                    ┌───────────────────┴───────────────────┐
                                    │ SUCCESS                    FAILURE    │
                                    ▼                                       ▼
                ┌───────────────────────────────┐   ┌───────────────────────────┐
                │  Return NotificationResult    │   │  Return NotificationResult│
                │  (success: true)              │   │  (success: false,         │
                │                               │   │   error: "FCM error msg") │
                └───────────────────────────────┘   └───────────────────────────┘
```

---

## 4. Template Resolution Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  NotificationService receives type = "order_shipped"                         │
└─────────────────────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  Query notification_templates table:                                         │
│  SELECT * FROM notification_templates                                        │
│  WHERE key = 'order_shipped'                                                │
│    AND (tenant_type IS NULL                                                 │
│         OR (tenant_type = 'School' AND tenant_id = 1))                      │
│  ORDER BY tenant_id IS NULL  -- Prefer tenant-specific                      │
│  LIMIT 1                                                                    │
└─────────────────────────────────────────────────────────────────────────────┘
                                     │
                         ┌───────────┴───────────┐
                         │   Template found?      │
                         └───────────┬───────────┘
                                     │
                    ┌────────────────┴────────────────┐
                    │ NO                              │ YES
                    ▼                                 ▼
┌───────────────────────────────┐   ┌───────────────────────────────────────┐
│  Use payload as-is            │   │  Merge template with payload:         │
│                               │   │                                       │
│  payload = {                  │   │  Template:                            │
│    title: "Shipped!",         │   │    title: "Order #{{order_id}} Shipped"│
│    body: "Your order..."      │   │    body: "Hi {{name}}, tracking: {{url}}"│
│  }                            │   │                                       │
└───────────────────────────────┘   │  Payload data:                        │
                                    │    order_id: 123                      │
                                    │    name: "John"                       │
                                    │    url: "https://track.co/abc"        │
                                    │                                       │
                                    │  Result:                              │
                                    │    title: "Order #123 Shipped"        │
                                    │    body: "Hi John, tracking: ..."     │
                                    └───────────────────────────────────────┘
```

---

## 5. Multi-Tenant Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  $service->forTenant($school)->send($employee, 'reminder', $data)           │
└─────────────────────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  NotificationService sets tenant context:                                    │
│    tenantType = "Modules\\School\\Models\\School"                           │
│    tenantId = 1                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
                                     │
                    ┌────────────────┴────────────────┐
                    │                                 │
                    ▼                                 ▼
┌───────────────────────────────┐   ┌───────────────────────────────────────┐
│  TEMPLATE LOOKUP              │   │  CHANNEL CONFIG                       │
│                               │   │                                       │
│  Look for tenant-specific     │   │  Look for tenant-specific config:     │
│  template first:              │   │                                       │
│                               │   │  config/notifications.php:            │
│  notification_templates       │   │  'tenants' => [                       │
│  WHERE key = 'reminder'       │   │      'School' => [                    │
│    AND tenant_type = School   │   │          1 => [                       │
│    AND tenant_id = 1          │   │              'telegram' => [          │
│                               │   │                  'bot_token' => '...' │
│  Falls back to global if      │   │              ]                        │
│  tenant-specific not found    │   │          ]                            │
│                               │   │      ]                                │
└───────────────────────────────┘   │  ]                                    │
                                    └───────────────────────────────────────┘
                    │                                 │
                    └────────────────┬────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  NOTIFICATION LOG                                                            │
│                                                                             │
│  notification_logs table includes:                                          │
│    tenant_type: "School"                                                    │
│    tenant_id: 1                                                             │
│                                                                             │
│  This allows filtering logs by tenant for analytics                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Device Login Notification Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          USER LOGS IN                                        │
└─────────────────────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  Application detects new device:                                             │
│  - Different IP address                                                     │
│  - Different User-Agent                                                     │
│  - Unknown device fingerprint                                               │
└─────────────────────────────────────────────────────────────────────────────┘
                                     │
                    ┌────────────────┴────────────────┐
                    │                                 │
             Option A                          Option B
      (Direct method call)                 (Event-driven)
                    │                                 │
                    ▼                                 ▼
┌───────────────────────────────┐   ┌───────────────────────────────────────┐
│  $user->notifyNewDeviceLogin([│   │  NewDeviceLogin::dispatch(            │
│      'ip' => '1.2.3.4',       │   │      $user,                           │
│      'browser' => 'Chrome',   │   │      ['ip' => '1.2.3.4', ...],        │
│      'os' => 'Windows',       │   │      $isSuspicious                    │
│  ]);                          │   │  );                                   │
└───────────────────────────────┘   └───────────────────────────────────────┘
                    │                                 │
                    │                                 ▼
                    │               ┌───────────────────────────────────────┐
                    │               │  SendNewDeviceLoginNotification       │
                    │               │  (Listener)                           │
                    │               │                                       │
                    │               │  Checks if user has trait, then:      │
                    │               │  - notifyNewDeviceLogin() or          │
                    │               │  - notifySuspiciousLogin()            │
                    │               └───────────────────────────────────────┘
                    │                                 │
                    └────────────────┬────────────────┘
                                     │
                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  NOTIFICATION SENT TO CONFIGURED CHANNELS:                                   │
│                                                                             │
│  Normal login:      ['email', 'push', 'database']                           │
│  Suspicious login:  ['email', 'push', 'telegram', 'database']               │
│                                                                             │
│  Payload:                                                                   │
│  {                                                                          │
│    title: "New Device Login" | "⚠️ Security Alert",                         │
│    body: "Login from Chrome on Windows at 2:30 PM",                         │
│    data: {                                                                  │
│      ip: "1.2.3.4",                                                         │
│      browser: "Chrome",                                                     │
│      os: "Windows",                                                         │
│      time: "2026-03-19T14:30:00"                                            │
│    },                                                                       │
│    action_url: "/settings/security"                                         │
│  }                                                                          │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 7. Complete System Architecture

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                                  YOUR APPLICATION                                 │
│                                                                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │   Models    │  │ Controllers │  │   Events    │  │   Console   │             │
│  │             │  │             │  │             │  │  Commands   │             │
│  │ User        │  │ Auth        │  │ NewDevice   │  │             │             │
│  │ Employee    │  │ Order       │  │ Login       │  │ SendAlert   │             │
│  │ Customer    │  │ ...         │  │ ...         │  │ ...         │             │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘             │
│         │                │                │                │                    │
│         └────────────────┴────────────────┴────────────────┘                    │
│                                    │                                             │
│                                    ▼                                             │
│  ┌───────────────────────────────────────────────────────────────────────────┐  │
│  │                         HasNotifications Trait                            │  │
│  │                                                                           │  │
│  │  sendNotification()  notifyViaPush()  notifyViaEmail()  ...               │  │
│  └───────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
┌──────────────────────────────────────────────────────────────────────────────────┐
│                            NOTIFICATION SERVICE                                   │
│                                                                                  │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐                  │
│  │ Template        │  │ Preference      │  │ Tenant          │                  │
│  │ Resolution      │  │ Checking        │  │ Scoping         │                  │
│  └────────┬────────┘  └────────┬────────┘  └────────┬────────┘                  │
│           │                    │                    │                            │
│           └────────────────────┴────────────────────┘                            │
│                                │                                                 │
│                                ▼                                                 │
│  ┌───────────────────────────────────────────────────────────────────────────┐  │
│  │                           CHANNEL ROUTER                                   │  │
│  └───────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────┘
                                     │
        ┌────────────────────────────┼────────────────────────────┐
        │            │               │               │            │
        ▼            ▼               ▼               ▼            ▼
┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐
│  PUSH     │ │  EMAIL    │ │ DATABASE  │ │   SMS     │ │ TELEGRAM  │
│  Channel  │ │  Channel  │ │  Channel  │ │  Channel  │ │  Channel  │
│           │ │           │ │           │ │           │ │           │
│ Firebase  │ │  Laravel  │ │ Laravel   │ │ Twilio/   │ │ Bot API   │
│ FCM V1    │ │   Mail    │ │ Notif.    │ │ Nexmo     │ │           │
└─────┬─────┘ └─────┬─────┘ └─────┬─────┘ └─────┬─────┘ └─────┬─────┘
      │             │             │             │             │
      ▼             ▼             ▼             ▼             ▼
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│  Mobile  │ │  Email   │ │ In-App   │ │   SMS    │ │ Telegram │
│   App    │ │  Client  │ │ Notif.   │ │  Device  │ │   Chat   │
│  (iOS/   │ │  (Gmail  │ │  Badge   │ │          │ │          │
│ Android) │ │  etc.)   │ │          │ │          │ │          │
└──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘
```

---

## 8. Database Schema

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           notification_preferences                           │
├─────────────────────────────────────────────────────────────────────────────┤
│ id                    BIGINT PRIMARY KEY                                    │
│ notifiable_type       VARCHAR(255)    -- e.g., "App\\Models\\User"          │
│ notifiable_id         BIGINT          -- e.g., 1                            │
│ preferences           JSON            -- {"push": true, "email": true, ...} │
│ tenant_type           VARCHAR(255) NULL                                     │
│ tenant_id             BIGINT NULL                                           │
│ created_at            TIMESTAMP                                             │
│ updated_at            TIMESTAMP                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ UNIQUE (notifiable_type, notifiable_id)                                     │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                           notification_templates                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ id                    BIGINT PRIMARY KEY                                    │
│ key                   VARCHAR(255)    -- e.g., "welcome", "order_shipped"   │
│ name                  VARCHAR(255)    -- Human-readable name                │
│ title                 VARCHAR(255)    -- "Order #{{order_id}} Shipped"      │
│ body                  TEXT            -- Supports {{variable}} interpolation│
│ email_template        VARCHAR(255) NULL -- Blade template path              │
│ channels              JSON NULL       -- ["push", "email"]                  │
│ data                  JSON NULL       -- Default variables                  │
│ tenant_type           VARCHAR(255) NULL                                     │
│ tenant_id             BIGINT NULL                                           │
│ is_active             BOOLEAN DEFAULT true                                  │
│ created_at            TIMESTAMP                                             │
│ updated_at            TIMESTAMP                                             │
│ deleted_at            TIMESTAMP NULL                                        │
├─────────────────────────────────────────────────────────────────────────────┤
│ UNIQUE (key, tenant_type, tenant_id)                                        │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                              notification_logs                               │
├─────────────────────────────────────────────────────────────────────────────┤
│ id                    BIGINT PRIMARY KEY                                    │
│ notifiable_type       VARCHAR(255)                                          │
│ notifiable_id         BIGINT                                                │
│ channel               VARCHAR(50)     -- "push", "email", "telegram", etc.  │
│ type                  VARCHAR(255)    -- Notification type                  │
│ payload               JSON            -- Full notification payload          │
│ recipient_id          VARCHAR(255) NULL -- Email, phone, chat_id, etc.      │
│ message_id            VARCHAR(255) NULL -- External provider message ID     │
│ success               BOOLEAN DEFAULT false                                 │
│ error                 TEXT NULL       -- Error message if failed            │
│ metadata              JSON NULL       -- Additional data                    │
│ tenant_type           VARCHAR(255) NULL                                     │
│ tenant_id             BIGINT NULL                                           │
│ created_at            TIMESTAMP                                             │
│ updated_at            TIMESTAMP                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ INDEX (channel, success, created_at)                                        │
│ INDEX (type, created_at)                                                    │
│ INDEX (notifiable_type, notifiable_id)                                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Related Documentation

- [NOTIFICATION_SYSTEM.md](./NOTIFICATION_SYSTEM.md) - Full API reference
- [Multi-Tenancy](./multi-tenancy.md) - Tenant system docs
