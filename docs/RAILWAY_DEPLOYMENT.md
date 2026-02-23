# Railway Deployment Guide

Deploy the Universe Laravel application to Railway with MySQL.

## Prerequisites

- [Railway Account](https://railway.app/) (free tier available)
- GitHub repository connected to Railway
- Project pushed to GitHub

---

## Quick Deploy (5 Minutes)

### Step 1: Create Railway Project

1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose your **universe** repository
5. Railway will detect the Dockerfile automatically

### Step 2: Add MySQL Database

1. In your Railway project, click **"+ New"**
2. Select **"Database"** → **"MySQL"**
3. Wait for MySQL to provision (~ 30 seconds)
4. Railway automatically injects database credentials

### Step 3: Configure Environment Variables

In Railway dashboard → Your service → **Variables** tab, add:

```env
# Required
APP_KEY=base64:YOUR_GENERATED_KEY
APP_URL=https://your-app.up.railway.app

# Database (auto-injected, but verify these exist)
DB_CONNECTION=mysql
DB_HOST=${{MySQL.MYSQLHOST}}
DB_PORT=${{MySQL.MYSQLPORT}}
DB_DATABASE=${{MySQL.MYSQLDATABASE}}
DB_USERNAME=${{MySQL.MYSQLUSER}}
DB_PASSWORD=${{MySQL.MYSQLPASSWORD}}

# Application
APP_NAME=Universe
APP_ENV=production
APP_DEBUG=false
```

### Step 4: Generate APP_KEY

Run locally and copy the output:

```bash
php artisan key:generate --show
```

Paste the key (e.g., `base64:abc123...`) into Railway's `APP_KEY` variable.

### Step 5: Deploy

1. Click **"Deploy"** in Railway dashboard
2. Wait for build to complete (~ 5-10 minutes first time)
3. Click the generated URL to access your app

---

## Environment Variables Reference

### Required Variables

| Variable | Example | Description |
|----------|---------|-------------|
| `APP_KEY` | `base64:abc123...` | Laravel encryption key |
| `APP_URL` | `https://app.up.railway.app` | Your Railway URL |
| `APP_ENV` | `production` | Environment mode |
| `APP_DEBUG` | `false` | Disable debug in production |

### Database Variables (Auto-Injected)

These are automatically available when you add MySQL:

| Variable | Reference |
|----------|-----------|
| `DB_HOST` | `${{MySQL.MYSQLHOST}}` |
| `DB_PORT` | `${{MySQL.MYSQLPORT}}` |
| `DB_DATABASE` | `${{MySQL.MYSQLDATABASE}}` |
| `DB_USERNAME` | `${{MySQL.MYSQLUSER}}` |
| `DB_PASSWORD` | `${{MySQL.MYSQLPASSWORD}}` |

### Optional Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `LOG_LEVEL` | `error` | Logging verbosity |
| `MAIL_MAILER` | `smtp` | Email driver |
| `SESSION_DRIVER` | `database` | Session storage |
| `CACHE_STORE` | `database` | Cache storage |
| `QUEUE_CONNECTION` | `database` | Queue driver |

---

## Custom Domain Setup

### Using uninversal-global.online

1. In Railway → Settings → **Domains**
2. Click **"+ Custom Domain"**
3. Enter: `uninversal-global.online`
4. Add CNAME record in your DNS:
   - **Type**: CNAME
   - **Name**: `@` or `www`
   - **Value**: Your Railway domain (e.g., `universe-production.up.railway.app`)

### Update APP_URL

After adding custom domain:

```env
APP_URL=https://uninversal-global.online
```

---

## Deployment Files Structure

```
universe/
├── Dockerfile              # Main build file
├── railway.toml            # Railway configuration
├── docker/
│   ├── nginx.conf          # Nginx web server config
│   ├── supervisord.conf    # Process manager
│   ├── php.ini             # PHP settings
│   └── entrypoint.sh       # Startup script
└── .env.production.example # Production env template
```

---

## Features Included

The deployment includes:

- ✅ **PHP 8.2** with all required extensions
- ✅ **Nginx** web server
- ✅ **Supervisor** process manager
- ✅ **Queue Worker** (2 processes)
- ✅ **Scheduler** (runs every minute)
- ✅ **OPcache** enabled
- ✅ **Gzip** compression
- ✅ **Auto migrations** on deploy
- ✅ **Health check** endpoint (`/api/health`)
- ✅ **All modules** deployed

---

## Monitoring

### Health Check

Access your health endpoint:

```
GET https://your-app.up.railway.app/api/health
```

Response:
```json
{
  "status": "ok",
  "timestamp": "2026-02-23T12:00:00.000000Z",
  "database": "connected",
  "php_version": "8.2.30",
  "laravel_version": "12.0.0"
}
```

### Logs

View logs in Railway dashboard:
1. Click your service
2. Go to **"Deployments"** tab
3. Click **"View Logs"**

Or use Railway CLI:
```bash
railway logs
```

---

## Troubleshooting

### Build Fails

1. Check Dockerfile syntax
2. Verify all files exist in `docker/` folder
3. Check Railway build logs for specific errors

### Database Connection Error

1. Verify MySQL service is running
2. Check variable references use `${{MySQL.VARIABLE}}`
3. Wait 30 seconds after MySQL provisions

### 500 Error on Site

1. Check `APP_KEY` is set
2. Verify `APP_DEBUG=false`
3. Check logs for specific error

### Storage Permission Error

The entrypoint.sh sets permissions automatically. If issues persist:

1. SSH into Railway container (Railway CLI)
2. Run: `chmod -R 775 storage bootstrap/cache`

---

## Scaling

### Add More Workers

Edit `docker/supervisord.conf`:

```ini
[program:laravel-queue]
numprocs=4  # Increase from 2 to 4
```

### Horizontal Scaling

In `railway.toml`:

```toml
[deploy]
numReplicas = 2  # Add more instances
```

---

## Local Testing

Test the Docker build locally:

```bash
# Build
docker build -t universe .

# Run with local MySQL
docker run -p 8080:80 \
  -e APP_KEY=base64:your-key \
  -e DB_HOST=host.docker.internal \
  -e DB_DATABASE=universe \
  -e DB_USERNAME=root \
  -e DB_PASSWORD=password \
  universe
```

---

## Useful Commands

```bash
# Railway CLI
railway login           # Authenticate
railway link            # Link to project
railway up              # Deploy
railway logs            # View logs
railway shell           # SSH into container
railway variables       # List variables

# Local
php artisan key:generate --show  # Generate APP_KEY
```

---

## Cost Estimation

Railway Pricing (as of 2026):

| Plan | Cost | Includes |
|------|------|----------|
| **Hobby** | $5/month | 512MB RAM, 1GB disk |
| **Pro** | $20/month | 2GB RAM, 5GB disk |
| **Team** | Custom | Dedicated resources |

MySQL adds ~$5-10/month based on usage.

---

## Support

- [Railway Docs](https://docs.railway.app/)
- [Railway Discord](https://discord.gg/railway)
- [Laravel Docs](https://laravel.com/docs)
