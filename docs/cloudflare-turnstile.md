# Cloudflare Turnstile Integration

Cloudflare Turnstile is a CAPTCHA alternative that protects the login page from bots and automated attacks.

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

Usage in Login.vue:

```vue
<template>
  <Turnstile
    ref="turnstileRef"
    :site-key="turnstileSiteKey"
    theme="auto"
    v-model="form.cf_turnstile_response"
  />
</template>

<script setup>
import { Turnstile } from "@/components/ui/turnstile";

// Reset after failed login
const turnstileRef = ref(null);
turnstileRef.value?.reset();
</script>
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
| `expire` | - | Token expired |

### Exposed Methods

| Method | Description |
|--------|-------------|
| `reset()` | Reset widget and clear token |

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

### Error: "Security token expired"

**Cause**: `timeout-or-duplicate` error from Cloudflare

**Solutions**:
1. Ensure user submits form quickly after verification
2. Check that token isn't being validated twice
3. Verify secret key is correct in environment variables

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
