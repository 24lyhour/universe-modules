# Payment Module Documentation

## Overview

The Payment module handles all payment processing for the platform, including ABA PayWay (KHQR) gateway integration, transaction management, multi-merchant support, and payment settings configuration.

## Features

- **PayWay Gateway**: ABA Bank KHQR payment integration (QR code, deeplink, card)
- **Multi-Merchant**: Each outlet can have its own PayWay merchant account
- **Transaction Management**: View, filter, and track all payment transactions
- **Payment Settings**: Configure available payment methods globally
- **Callback Webhook**: Receive and verify PayWay payment notifications
- **Status Polling**: Flutter app polls payment status via Check Transaction API

---

## Module Structure

```
Modules/Payment/
├── app/
│   ├── Actions/
│   │   └── Dashboard/
│   │       ├── UpdateOutletPayWayAction.php
│   │       ├── RemoveOutletPayWayAction.php
│   │       └── TestOutletPayWayAction.php
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Api/V1/
│   │   │   │   └── PayWayController.php
│   │   │   ├── Dashboard/V1/
│   │   │   │   ├── TransactionController.php
│   │   │   │   └── PaymentSettingsController.php
│   │   │   └── PaymentController.php
│   │   ├── Requests/
│   │   │   └── Dashboard/V1/
│   │   │       ├── UpdateOutletPayWayRequest.php
│   │   │       └── UpdatePaymentSettingsRequest.php
│   │   └── Resources/
│   │       └── Dashboard/V1/
│   │           └── TransactionResource.php
│   ├── Providers/
│   │   ├── PaymentServiceProvider.php
│   │   ├── RouteServiceProvider.php
│   │   └── EventServiceProvider.php
│   └── Services/
│       ├── PayWayService.php
│       └── TransactionService.php
├── config/
│   └── config.php
├── routes/
│   ├── api.php
│   ├── dashboard.php
│   └── web.php
└── resources/js/
    ├── types/
    │   └── index.ts
    └── pages/Dashboard/V1/
        ├── Transaction/
        │   ├── Index.vue
        │   └── Show.vue
        └── Settings/
            └── Index.vue
```

---

## Routes

### API Routes

| Method | URI | Name | Auth | Description |
|--------|-----|------|------|-------------|
| POST | `/api/v1/payments/payway/callback` | `api.payment.payway.callback` | Public | PayWay webhook |
| POST | `/api/v1/payments/payway/create` | `api.payment.payway.create` | Sanctum | Create purchase |
| GET | `/api/v1/payments/payway/check/{tranId}` | `api.payment.payway.check` | Sanctum | Poll status |

### Dashboard Routes

| Method | URI | Name | Description |
|--------|-----|------|-------------|
| GET | `/dashboard/payment-transactions` | `payment.transactions.index` | Transaction list |
| GET | `/dashboard/payment-transactions/{transaction}` | `payment.transactions.show` | Transaction detail |
| GET | `/dashboard/payment-transactions/export` | `payment.transactions.export` | Export transactions |
| GET | `/dashboard/payment-settings` | `payment.settings.index` | Payment settings |
| PUT | `/dashboard/payment-settings` | `payment.settings.update` | Update settings |

### Outlet PayWay Routes (in Outlet module)

| Method | URI | Name | Description |
|--------|-----|------|-------------|
| GET | `/dashboard/outlets/{outlet}/payway` | `outlet.outlets.payway` | PayWay modal |
| PUT | `/dashboard/outlets/{outlet}/payway` | `outlet.outlets.payway.update` | Update credentials |
| POST | `/dashboard/outlets/{outlet}/payway/test` | `outlet.outlets.payway.test` | Test connection |
| PUT | `/dashboard/outlets/{outlet}/payway/toggle` | `outlet.outlets.payway.toggle` | Toggle enable |
| DELETE | `/dashboard/outlets/{outlet}/payway` | `outlet.outlets.payway.destroy` | Remove credentials |

---

## Models & Relationships

The Payment module uses the `Transaction` model from the Order module.

```
Transaction (order_transactions table)
├── order        BelongsTo  Order
├── customer     BelongsTo  Customer
└── refund       BelongsTo  Refund

Outlet (outlets table) — PayWay fields
├── payway_merchant_id    string(30)  nullable, encrypted display
├── payway_api_key        text        nullable, encrypted
└── payway_enabled        boolean     default false
```

### Transaction Fields

| Field | Type | Description |
|-------|------|-------------|
| uuid | string | Unique identifier |
| transaction_number | string | Auto-generated (TXN-YYYYMMDD-XXXXXX) |
| type | string | `payment` or `refund` |
| payment_method | string | `wallet`, `cash`, `aba_payway`, `credit_card` |
| amount | decimal | Transaction amount |
| fee | decimal | Processing fee |
| net_amount | decimal | Amount after fee |
| currency | string | USD (default) |
| status | enum | pending, processing, completed, failed |
| gateway_transaction_id | string | PayWay tran_id |
| gateway_response | json | PayWay API response |
| failure_reason | string | Error message if failed |

---

## Services

### PayWayService

Core service for ABA PayWay API integration.

```php
$service = app(PayWayService::class);

// Use platform credentials (from .env)
$service->createPurchase([...]);

// Use outlet's own merchant credentials
$service->forOutlet($outlet)->createPurchase([...]);
```

#### Methods

| Method | Description |
|--------|-------------|
| `forOutlet(Outlet)` | Switch to outlet's merchant credentials |
| `generateHash(string)` | HMAC-SHA512 hash for PayWay API |
| `createPurchase(array)` | Create payment (returns deeplink + QR) |
| `generateQr(array)` | Generate branded KHQR QR image |
| `checkTransaction(string)` | Check payment status by tran_id |
| `verifyCallback(array, string)` | Verify webhook signature |
| `generateTranId(int)` | Generate unique transaction ID |

### TransactionService

Dashboard service for transaction management.

```php
$service = app(TransactionService::class);

// Paginated list with filters
$transactions = $service->paginate(10, [
    'search' => 'TXN-2026',
    'status' => 'completed',
    'payment_method' => 'aba_payway',
    'outlet_id' => 1,
    'date_from' => '2026-04-01',
    'date_to' => '2026-04-30',
]);

// Stats for dashboard cards
$stats = $service->getStats();
// Returns: total, pending, processing, completed, failed, total_revenue, total_refunded
```

---

## Actions

| Action | Description |
|--------|-------------|
| `UpdateOutletPayWayAction` | Update outlet's PayWay merchant credentials |
| `RemoveOutletPayWayAction` | Remove credentials and disable PayWay |
| `TestOutletPayWayAction` | Test connection to PayWay API with outlet's credentials |

---

## Payment Flow

### Single Merchant (Platform Credentials)

```
Customer → Place Order (aba_payway)
    → OrderController uses platform .env credentials
    → PayWayService.createPurchase()
    → Returns deeplink + branded QR
    → Customer pays via ABA Mobile
    → PayWay callback → verify signature → update order
    → Flutter polls → detects "paid" → show tracking
```

### Multi-Merchant (Outlet Credentials)

```
Customer → Place Order (aba_payway)
    → OrderController checks outlet.hasPayWay()
    → If YES: PayWayService.forOutlet(outlet).createPurchase()
      (payment goes to outlet's ABA account)
    → If NO: PayWayService.createPurchase()
      (payment goes to platform's ABA account)
    → Rest of flow is identical
```

### Credential Fallback

| Scenario | Behavior |
|----------|----------|
| Outlet has PayWay credentials | Use outlet's merchant_id + api_key |
| Outlet has no PayWay | Use platform credentials from `.env` |
| Outlet PayWay disabled | ABA PayWay hidden for this outlet |
| Neither has credentials | ABA PayWay unavailable |

---

## Configuration

### Environment Variables

```env
# PayWay (ABA Bank) Payment Gateway
PAYWAY_MERCHANT_ID=ec474815
PAYWAY_API_KEY=8351e04bd7108031ee290044125596b050949343
PAYWAY_BASE_URL=https://checkout-sandbox.payway.com.kh
PAYWAY_CALLBACK_URL=${APP_URL}/api/v1/payments/payway/callback
```

### Config File

```php
// Modules/Payment/config/config.php
'payway' => [
    'merchant_id' => env('PAYWAY_MERCHANT_ID'),
    'api_key'     => env('PAYWAY_API_KEY'),
    'base_url'    => env('PAYWAY_BASE_URL', 'https://checkout-sandbox.payway.com.kh'),
    'callback_url' => env('PAYWAY_CALLBACK_URL'),
],
```

---

## PayWay API Reference

### Purchase API

```
POST {base_url}/api/payment-gateway/v1/payments/purchase
Content-Type: multipart/form-data
```

Hash order: `req_time + merchant_id + tran_id + amount + items + shipping + firstname + lastname + email + phone + type + payment_option + return_url + cancel_url + continue_success_url + return_deeplink + currency + custom_fields + return_params + payout + lifetime`

### Generate QR API

```
POST {base_url}/api/payment-gateway/v1/payments/generate-qr
Content-Type: application/json
```

Template: `template3_color` (vertical KHQR branded layout)

Hash order: `req_time + merchant_id + tran_id + amount + items + first_name + last_name + email + phone + purchase_type + payment_option + callback_url + return_deeplink + currency + custom_fields + return_params + payout + lifetime + qr_image_template`

### Check Transaction API

```
POST {base_url}/api/payment-gateway/v1/payments/check-transaction-2
Content-Type: application/json
```

Hash order: `req_time + merchant_id + tran_id`

### Payment Status Codes

| Code | Status |
|------|--------|
| 0 | APPROVED |
| 2 | PENDING |
| 3 | DECLINED |
| 4 | REFUNDED |
| 7 | CANCELLED |

### Callback Webhook

PayWay sends POST to `return_url` after payment.

```
Header: X_PAYWAY_HMAC_SHA512 (signature)
Body: { tran_id, apv, status, return_params }
```

Verification: sort keys alphabetically → concatenate values → HMAC-SHA512 → compare with header.

---

## Dashboard UI

### Transaction Index Page

- **Stats cards**: Total, Completed, Revenue, Refunded
- **Sidebar filter**: Status tabs with counts
- **Search**: By transaction #, order #, customer name
- **Filters**: Payment method, outlet, date range
- **Card grid**: Transaction cards with status badge, amount, customer, outlet

### Transaction Show Page

- **Main**: Amount, fee, net amount, payment method, gateway ID, failure reason, gateway response
- **Sidebar**: Order info, customer info, outlet info, timeline

### Payment Settings Page

- Payment method list with enable/disable switches
- ABA PayWay: Shows merchant ID, sandbox/production badge
- Credit Card: Coming soon badge

### Outlet PayWay Modal (in Outlet module)

- Enable/disable switch
- Merchant ID input
- API Key input (password, blank = keep current)
- Test Connection button
- Remove Credentials button

---

## Security

- `payway_api_key` encrypted in database (Laravel `encrypted` cast)
- `payway_merchant_id` and `payway_api_key` hidden from API responses (`$hidden`)
- Callback signature verified with `X_PAYWAY_HMAC_SHA512` header
- Credentials never sent to Flutter app
- All PayWay API calls happen server-side only
- Dashboard routes protected by `auth + verified + auto.permission` middleware

---

## CLI Commands

```bash
# List payment routes
php artisan route:list --name=payment

# List outlet PayWay routes
php artisan route:list --name=outlet.outlets.payway

# Clear config cache after .env changes
php artisan config:clear

# Run PayWay migration
php artisan migrate --path=Modules/Outlet/database/migrations/2026_04_04_143636_add_payway_to_outlets_table.php
```
