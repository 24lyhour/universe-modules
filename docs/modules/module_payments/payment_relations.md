# Payment Module Relationship Summary

## Model Relationships

| Model | Relationship | Type | Target |
|-------|-------------|------|--------|
| Transaction | order | BelongsTo | Order |
| Transaction | customer | BelongsTo | Customer |
| Transaction | refund | BelongsTo | Refund |
| Order | transactions | HasMany | Transaction |
| Outlet | hasPayWay() | Method | Check if outlet has PayWay credentials |

## Cross-Module Dependencies

```
Payment Module
│
├── Uses from Order Module:
│   ├── Transaction model (order_transactions table)
│   ├── Order model (for order lookup)
│   ├── PaymentStatusEnum
│   └── TransactionStatusEnum
│
├── Uses from Outlet Module:
│   ├── Outlet model (for multi-merchant credentials)
│   └── Outlet PayWay fields (payway_merchant_id, payway_api_key, payway_enabled)
│
├── Uses from Customer Module:
│   └── Customer model (for customer info)
│
└── Used by:
    ├── Order Module → OrderController calls PayWayService
    ├── Outlet Module → OutletPayWayController uses Payment Actions
    └── Flutter App → polls check-status API
```

## Payment Flow Diagram

```
┌──────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────┐
│ Flutter  │     │ Order Module │     │Payment Module│     │ PayWay   │
│ App      │     │              │     │              │     │ API      │
└────┬─────┘     └──────┬───────┘     └──────┬───────┘     └────┬─────┘
     │                  │                    │                  │
     │ POST /orders     │                    │                  │
     │ payment_method:  │                    │                  │
     │ aba_payway       │                    │                  │
     │─────────────────>│                    │                  │
     │                  │                    │                  │
     │                  │ Check outlet       │                  │
     │                  │ hasPayWay()?       │                  │
     │                  │                    │                  │
     │                  │ PayWayService      │                  │
     │                  │ .forOutlet()       │                  │
     │                  │ .createPurchase()  │                  │
     │                  │───────────────────>│                  │
     │                  │                    │                  │
     │                  │                    │ POST /purchase   │
     │                  │                    │─────────────────>│
     │                  │                    │                  │
     │                  │                    │ deeplink + QR    │
     │                  │                    │<─────────────────│
     │                  │                    │                  │
     │                  │                    │ generateQr()     │
     │                  │                    │ template3_color  │
     │                  │                    │─────────────────>│
     │                  │                    │                  │
     │                  │                    │ branded QR image │
     │                  │                    │<─────────────────│
     │                  │                    │                  │
     │  deeplink + QR   │                    │                  │
     │<─────────────────│                    │                  │
     │                  │                    │                  │
     │ Poll /check      │                    │                  │
     │─────────────────────────────────────>│                  │
     │                  │                    │                  │
     │                  │                    │ checkTransaction │
     │                  │                    │─────────────────>│
     │                  │                    │                  │
     │  payment_status  │                    │                  │
     │<─────────────────────────────────────│                  │
     │                  │                    │                  │
     │                  │    POST /callback  │                  │
     │                  │    (webhook)       │                  │
     │                  │                    │<─────────────────│
     │                  │                    │                  │
     │                  │                    │ Verify signature │
     │                  │                    │ with outlet's    │
     │                  │                    │ api_key          │
     │                  │                    │                  │
     │                  │ Update order       │                  │
     │                  │ payment_status     │                  │
     │                  │<───────────────────│                  │
     └──────────────────┴────────────────────┴──────────────────┘
```

## Multi-Merchant Credential Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Dashboard  │     │ Outlet Model │     │  PayWay API  │
│   Admin      │     │              │     │              │
└──────┬───────┘     └──────┬───────┘     └──────┬───────┘
       │                    │                    │
       │ PUT /outlets/      │                    │
       │   {uuid}/payway    │                    │
       │   merchant_id:     │                    │
       │   api_key:         │                    │
       │───────────────────>│                    │
       │                    │                    │
       │                    │ Store encrypted    │
       │                    │ credentials        │
       │                    │                    │
       │ POST /outlets/     │                    │
       │   {uuid}/payway/   │                    │
       │   test             │                    │
       │───────────────────>│                    │
       │                    │                    │
       │                    │ checkTransaction   │
       │                    │ (test-xxx)         │
       │                    │───────────────────>│
       │                    │                    │
       │                    │ code: 5            │
       │                    │ (not found =       │
       │                    │  creds valid)      │
       │                    │<───────────────────│
       │                    │                    │
       │ "Connection        │                    │
       │  successful"       │                    │
       │<───────────────────│                    │
       └────────────────────┴────────────────────┘
```

## Database Tables

### order_transactions

| Column | Type | Description |
|--------|------|-------------|
| id | bigint | Primary key |
| uuid | char(36) | UUID |
| transaction_number | varchar | TXN-YYYYMMDD-XXXXXX |
| order_id | bigint FK | → orders.id |
| refund_id | bigint FK | → order_refunds.id |
| customer_id | bigint FK | → customers.id |
| type | varchar | payment, refund |
| payment_method | varchar | wallet, cash, aba_payway |
| amount | decimal(10,2) | Transaction amount |
| fee | decimal(10,2) | Processing fee |
| net_amount | decimal(10,2) | Amount after fee |
| currency | varchar(3) | USD |
| status | varchar | pending, processing, completed, failed |
| gateway_transaction_id | varchar | PayWay tran_id |
| gateway_response | json | PayWay API response |
| notes | text | Notes |
| failure_reason | text | Error message |
| processed_at | timestamp | When completed |
| failed_at | timestamp | When failed |
| created_at | timestamp | Created |
| updated_at | timestamp | Updated |
| deleted_at | timestamp | Soft delete |

### outlets (PayWay columns)

| Column | Type | Description |
|--------|------|-------------|
| payway_merchant_id | varchar(30) | ABA merchant ID |
| payway_api_key | text | Encrypted API key |
| payway_enabled | boolean | Enable/disable PayWay |
