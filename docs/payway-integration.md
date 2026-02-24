# PayWay (ABA Bank) Payment Integration Guide

PayWay is ABA Bank's payment gateway for Cambodia. This guide covers how to integrate PayWay into the Universe application.

---

## Step 1: Get PayWay Credentials

### Option A: Apply Online

1. Go to [PayWay Website](https://www.payway.com.kh) or [ABA Business](https://www.ababank.com/business)
2. Click **"Become a Merchant"** or **"Apply Now"**
3. Fill application form:
   - Business name
   - Business registration number
   - Contact info
   - Bank account (ABA account required)
4. Wait for approval (1-3 business days)

### Option B: Visit ABA Bank Branch

1. Go to any ABA Bank branch
2. Bring these documents:
   - Business license (ប័ណ្ណប៉ាតង់)
   - Company registration certificate
   - ID card / Passport
   - ABA business account
3. Ask for **"PayWay Merchant Registration"**

### After Approval, You Receive:

```
Merchant ID: XXXXXXXX
API Key: your_api_key_here
Sandbox URL: https://checkout-sandbox.payway.com.kh
Production URL: https://checkout.payway.com.kh
```

### For Testing (Sandbox):

Request sandbox credentials for testing before going live. Sandbox allows you to test payments without real money.

---

## Step 2: Environment Configuration

Add these variables to your `.env` file:

```env
# PayWay Configuration
PAYWAY_MERCHANT_ID=your_merchant_id
PAYWAY_API_KEY=your_api_key
PAYWAY_BASE_URL=https://checkout-sandbox.payway.com.kh
PAYWAY_RETURN_URL=https://yourdomain.com/payment/callback
PAYWAY_CANCEL_URL=https://yourdomain.com/payment/cancel
PAYWAY_CONTINUE_URL=https://yourdomain.com/payment/success

# For Production, change to:
# PAYWAY_BASE_URL=https://checkout.payway.com.kh
```

---

## Step 3: Payment Types

PayWay supports multiple payment methods:

| Type | Description | Use Case |
|------|-------------|----------|
| **Checkout Page** | Redirect to PayWay hosted page | Easiest, recommended for beginners |
| **Direct API** | Payment form on your website | Custom UI, more control |
| **QR Code (KHQR)** | Generate QR for scanning | In-store, mobile payments |
| **Deep Link** | Open ABA app directly | Mobile app integration |

---

## Step 4: API Endpoints

### Sandbox Environment
- Base URL: `https://checkout-sandbox.payway.com.kh`
- API URL: `https://checkout-sandbox.payway.com.kh/api`

### Production Environment
- Base URL: `https://checkout.payway.com.kh`
- API URL: `https://checkout.payway.com.kh/api`

### Common Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/payment-gateway/v1/payments/purchase` | POST | Create payment |
| `/api/payment-gateway/v1/payments/check-transaction` | POST | Check payment status |
| `/api/payment-gateway/v1/payments/refund` | POST | Refund payment |

---

## Step 5: Create Payment Request

### Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `merchant_id` | string | Yes | Your merchant ID |
| `tran_id` | string | Yes | Unique transaction ID |
| `amount` | float | Yes | Payment amount |
| `items` | string | Yes | Item description (Base64 encoded JSON) |
| `firstname` | string | No | Customer first name |
| `lastname` | string | No | Customer last name |
| `email` | string | No | Customer email |
| `phone` | string | No | Customer phone |
| `return_url` | string | Yes | Callback URL after payment |
| `cancel_url` | string | Yes | URL when payment cancelled |
| `continue_success_url` | string | Yes | URL after successful payment |
| `hash` | string | Yes | HMAC SHA512 signature |

### Hash Generation

```php
$hashString = $merchantId . $tranId . $amount . $items . $firstName . $lastName . $email . $phone . $returnUrl . $cancelUrl . $continueUrl . $apiKey;
$hash = base64_encode(hash_hmac('sha512', $hashString, $apiKey, true));
```

---

## Step 6: Payment Response Codes

| Code | Status | Description |
|------|--------|-------------|
| `0` | Success | Payment successful |
| `1` | Pending | Payment pending |
| `2` | Failed | Payment failed |
| `3` | Cancelled | Payment cancelled by user |
| `4` | Refunded | Payment refunded |

---

## Step 7: Webhook / Callback Handling

PayWay sends POST request to your `return_url` with:

```json
{
  "tran_id": "TXN123456",
  "status": "0",
  "amount": "10.00",
  "hash": "..."
}
```

### Verify Callback Signature

Always verify the hash to prevent fraud:

```php
$receivedHash = $request->hash;
$calculatedHash = base64_encode(hash_hmac('sha512', $dataString, $apiKey, true));

if ($receivedHash !== $calculatedHash) {
    // Invalid callback - possible fraud
    abort(403);
}
```

---

## Step 8: Testing

### Test Card Numbers (Sandbox)

| Card Number | Result |
|-------------|--------|
| `4111111111111111` | Successful payment |
| `4000000000000002` | Declined |
| `4000000000000069` | Expired card |

### Test Flow

1. Create payment request
2. Redirect to PayWay checkout
3. Enter test card details
4. Complete payment
5. Handle callback
6. Verify payment status

---

## Step 9: Go Live Checklist

- [ ] Test all payment flows in sandbox
- [ ] Handle all response codes
- [ ] Implement proper error handling
- [ ] Set up webhook verification
- [ ] Change to production URLs
- [ ] Update credentials to production
- [ ] Test with real small amount
- [ ] Monitor first few transactions

---

## Common Issues & Solutions

### Issue: Hash mismatch
**Solution:** Ensure the hash string order matches exactly as documented. Check for encoding issues.

### Issue: Payment stuck on pending
**Solution:** Implement status check API to poll payment status.

### Issue: Callback not received
**Solution:** Ensure your callback URL is publicly accessible and not blocked by firewall.

---

## Support

- PayWay Support: support@payway.com.kh
- ABA Bank Hotline: 023 225 333
- Documentation: https://www.payway.com.kh/developers

---

## Related Files

After implementation, these files will be created:

```
Modules/Payment/
├── app/
│   ├── Services/PayWayService.php
│   ├── Http/Controllers/PayWayController.php
│   └── Models/Transaction.php
├── database/migrations/
│   └── create_transactions_table.php
└── routes/
    └── web.php (payment routes)
```
