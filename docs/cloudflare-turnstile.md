# Cloudflare Turnstile Integration

Cloudflare Turnstile is a CAPTCHA alternative that protects the login page from bots and automated attacks.

## Quick Reference

**Important**: Turnstile tokens are **SINGLE-USE**. Reset the widget:
- On `onMounted` (SPA navigation fix)
- After form submit (`onFinish` / `onError`)
- On token expire (`@expire` event)

See [Industry-Standard Implementation](#industry-standard-implementation) for full code.

## Overview

- **Frontend**: Vue component renders the Turnstile widget
- **Backend**: Laravel validation rule verifies the token with Cloudflare API
- **Integration**: Works with Laravel Fortify authentication

## Setup Steps

### 1. Create Turnstile Widget in Cloudflare

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Turnstile** (under Protect & Connect > Application security)
3. Click **Add Widget**
4. Configure:
   - **Name**: Your widget name (e.g., "Universe Login")
   - **Hostnames**: Add ALL domains that will use this widget
     - `yourdomain.com`
     - `www.yourdomain.com`
     - `localhost` (for development)
   - **Widget Mode**: Managed (Recommended)
5. Save and copy the **Site Key** and **Secret Key**

### 2. Environment Variables

Add to your `.env` file:

```env
TURNSTILE_ENABLED=true
TURNSTILE_SITE_KEY=0x4AAAAAACjAPjMDBZ2G6hUT
TURNSTILE_SECRET_KEY=0x4AAAAAACjAPkaTlCSqI6jAI6qzRuW936Q
```

For Railway/production, add these as environment variables in the dashboard.

### 3. Configuration

The config is in `config/services.php`:

```php
'turnstile' => [
    'site_key' => env('TURNSTILE_SITE_KEY'),
    'secret' => env('TURNSTILE_SECRET_KEY'),
    'enabled' => env('TURNSTILE_ENABLED', false),
],
```

## File Structure

```
app/
├── Rules/
│   └── Turnstile.php              # Backend validation rule
├── Providers/
│   └── FortifyServiceProvider.php # Integrates with Fortify auth

resources/js/
├── components/ui/turnstile/
│   ├── Turnstile.vue              # Vue component
│   └── index.ts                   # Export
├── pages/auth/
│   └── Login.vue                  # Uses Turnstile component
├── types/
│   └── turnstile.d.ts             # TypeScript declarations
```

## How It Works

### Frontend Flow

1. Login page loads with `turnstileSiteKey` prop from backend
2. `Turnstile.vue` component loads Cloudflare script
3. Widget renders and user completes verification
4. Token is stored in `form.cf_turnstile_response`
5. Token is sent with login form submission

### Backend Flow

1. `FortifyServiceProvider` checks if Turnstile is enabled
2. Validates `cf_turnstile_response` using `Turnstile` rule
3. Rule sends token to Cloudflare API for verification
4. If valid, login proceeds; if invalid, error is returned

## Turnstile Vue Component

### Critical: Token Single-Use Rule

**Turnstile tokens are SINGLE-USE.** Once a token is verified by Cloudflare's API, it becomes invalid forever. This is a security feature, but it causes issues in SPA (Single Page Applications) like Inertia.js:

- After logout, navigating back to login keeps the old (used) token in memory
- Submitting with the old token results in `timeout-or-duplicate` error
- User sees "Security token expired" even though they just verified

### Industry-Standard Implementation

The solution is to reset the Turnstile widget in THREE scenarios:

1. **On page mount** (handles SPA navigation)
2. **After form submission** (handles token consumption)
3. **On token expiry** (handles timeout)

```vue
<template>
  <Turnstile
    ref="turnstileRef"
    :site-key="turnstileSiteKey"
    theme="auto"
    v-model="form.cf_turnstile_response"
    @expire="handleTurnstileExpire"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { useForm } from '@inertiajs/vue3';
import { Turnstile } from "@/components/ui/turnstile";

const form = useForm({
    email: '',
    password: '',
    cf_turnstile_response: '',
});

const turnstileRef = ref<InstanceType<typeof Turnstile> | null>(null);

// 1. Handle token expiry
const handleTurnstileExpire = () => {
    console.log('Turnstile token expired, resetting widget');
    form.cf_turnstile_response = '';
    if (turnstileRef.value) {
        turnstileRef.value.reset();
    }
};

// 2. Reset on mount (CRITICAL for SPA navigation)
onMounted(() => {
    nextTick(() => {
        form.cf_turnstile_response = '';
        if (turnstileRef.value) {
            console.log('Resetting Turnstile on mount (SPA navigation fix)');
            turnstileRef.value.reset();
        }
    });
});

// 3. Reset after form submission
const submit = () => {
    form.post('/login', {
        onFinish: () => {
            form.reset('password');
            // Reset turnstile after submission
            if (turnstileRef.value) {
                turnstileRef.value.reset();
                form.cf_turnstile_response = '';
            }
        },
        onError: () => {
            // Reset turnstile on error too
            if (turnstileRef.value) {
                turnstileRef.value.reset();
                form.cf_turnstile_response = '';
            }
        },
    });
};
</script>
```

### Why `nextTick()` is Required

In Vue + Inertia SPA, the component may be mounted before the Turnstile widget is fully initialized. Using `nextTick()` ensures the reset happens after the DOM is ready and the widget ref is available.

### Token Lifecycle

```
Page Load → onMounted → nextTick → reset() → Widget generates NEW token
                                                    ↓
                                            User clicks Submit
                                                    ↓
                                            Token sent to backend
                                                    ↓
                                        Backend verifies with Cloudflare
                                                    ↓
                                        Token is now INVALID forever
                                                    ↓
                                            onFinish → reset()
                                                    ↓
                                        Widget generates NEW token (ready for retry)
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `siteKey` | string | required | Cloudflare Site Key |
| `theme` | 'light' \| 'dark' \| 'auto' | 'auto' | Widget theme |
| `size` | 'normal' \| 'compact' | 'normal' | Widget size |
| `modelValue` | string | '' | v-model for token |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | string | Token value changed |
| `verify` | string | Verification successful |
| `error` | - | Verification failed |
| `expire` | - | Token expired (MUST handle this!) |

### Exposed Methods

| Method | Description |
|--------|-------------|
| `reset()` | Reset widget and generate new token |

### Required Event Handlers

```vue
<Turnstile
    ref="turnstileRef"
    :site-key="turnstileSiteKey"
    theme="auto"
    v-model="form.cf_turnstile_response"
    @expire="handleTurnstileExpire"  <!-- REQUIRED for production -->
/>
```

## Backend Validation Rule

The `App\Rules\Turnstile` class:

```php
// Validates token with Cloudflare API
$response = Http::asForm()->post('https://challenges.cloudflare.com/turnstile/v0/siteverify', [
    'secret' => config('services.turnstile.secret'),
    'response' => $token,
]);
```

### Error Codes from Cloudflare

| Error Code | Meaning | User Message |
|------------|---------|--------------|
| `missing-input-secret` | Secret key not provided | Configuration error |
| `invalid-input-secret` | Secret key is invalid | Configuration error |
| `missing-input-response` | Token not provided | Please complete verification |
| `invalid-input-response` | Token is invalid | Verification failed |
| `timeout-or-duplicate` | Token expired or already used | Token expired, refresh page |
| `bad-request` | Request was malformed | Verification error |

## Troubleshooting

### Error: "Security token expired" (Most Common)

**Cause**: `timeout-or-duplicate` error from Cloudflare - token was already used or expired

**Common Scenarios**:
1. User logs out and navigates back to login (SPA keeps old token)
2. User submits form twice quickly
3. Token expired while user was idle on page

**Solutions**:
1. **Implement reset on `onMounted`** - See "Industry-Standard Implementation" above
2. Reset widget after every form submission (success or error)
3. Add `@expire` handler to reset on token expiry
4. Verify secret key is correct in environment variables

**Verification**: Check console for these logs after logout → login:
```
"Resetting Turnstile on mount (SPA navigation fix)"
"Turnstile verified, token received"
```
If both appear, the fix is working correctly.

### Error: "Turnstile Error 300010"

**Cause**: Widget configuration issue

**Solutions**:
1. Verify site key is correct
2. Ensure hostname is added to Turnstile widget in Cloudflare
3. Check for browser extension interference (test in incognito)

### Widget Not Appearing

**Solutions**:
1. Check browser console for errors
2. Verify `turnstileSiteKey` prop is passed from backend
3. Ensure `TURNSTILE_ENABLED=true` in environment

### 401 Errors in Console

**Note**: 401 errors for "Private Access Token challenge" are **normal and expected**. Cloudflare explicitly warns about this in the console. These do not indicate a problem.

### Strange Console Logs (Normal)

The following console outputs are **normal** Cloudflare internal operations:
- `jvVq`, `HseX: CEsU`, `NaN` - Internal fingerprinting
- `%c%d font-size:0;color:transparent` - Hidden debugging
- `cR @ normal?lang=auto:1` - Internal scripts
- `The resource was preloaded but not used` - Browser optimization warning

**Success indicator**: Look for `"Turnstile verified, token received"` in console.

## Disabling Turnstile

To disable Turnstile (e.g., for testing):

```env
TURNSTILE_ENABLED=false
```

Or remove the environment variables entirely. The backend will skip validation if:
- `TURNSTILE_ENABLED` is false
- `TURNSTILE_SECRET_KEY` is not set
- Environment is `local` or `testing`

## Security Notes

1. **Never expose the Secret Key** in frontend code or public repositories
2. **Always validate on backend** - frontend verification alone is not secure
3. **Use HTTPS** in production for secure token transmission
4. **Add all hostnames** to the Cloudflare widget (including www and non-www)

## References

- [Cloudflare Turnstile Documentation](https://developers.cloudflare.com/turnstile/)
- [Turnstile Client-side Integration](https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/)
- [Turnstile Server-side Validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)
