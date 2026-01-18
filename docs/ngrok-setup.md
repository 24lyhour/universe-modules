# Ngrok Setup Guide

This guide explains how to use ngrok with Laravel Valet to share your local development site publicly.

## Installation

ngrok was installed via Homebrew:

```bash
brew install ngrok
```

## Configuration

### 1. Set ngrok as Valet Share Tool

```bash
valet share-tool ngrok
```

### 2. Add Auth Token

Sign up at [ngrok.com](https://ngrok.com) and get your auth token from the dashboard, then run:

```bash
ngrok config add-authtoken YOUR_AUTH_TOKEN
```

The token is saved to: `~/Library/Application Support/ngrok/ngrok.yml`

## Usage

### Share Your Local Site

From your project directory, run:

```bash
valet share
```

This will create a public URL like:
- `https://xxxx-xx-xx-xx-xx.ngrok-free.app`

### Direct ngrok Usage

You can also use ngrok directly:

```bash
# Share a specific port
ngrok http 80

# Share with custom subdomain (paid plan)
ngrok http --subdomain=myapp 80

# Share with basic auth
ngrok http --basic-auth="user:password" 80
```

## Common Commands

| Command | Description |
|---------|-------------|
| `valet share` | Share current site via ngrok |
| `ngrok http 80` | Share port 80 |
| `ngrok http https://universe.test` | Share specific Valet site |
| `ngrok config check` | Verify configuration |
| `ngrok diagnose` | Run diagnostics |

## Ngrok Dashboard

View active tunnels and request inspector at:
- Local: http://127.0.0.1:4040
- Online: https://dashboard.ngrok.com

## Troubleshooting

### "Session expired" Error
Re-authenticate with your auth token:
```bash
ngrok config add-authtoken YOUR_AUTH_TOKEN
```

### "Too many connections" Error
Free plan has connection limits. Upgrade or wait for reset.

### Site Not Loading
Ensure Valet is running:
```bash
valet status
valet restart
```

## Environment Variables

For Laravel, you may need to update `APP_URL` when using ngrok:

```env
APP_URL=https://xxxx.ngrok-free.app
```

Or handle it dynamically in `config/app.php`:

```php
'url' => env('APP_URL', 'http://localhost'),
```

## Security Notes

- ngrok URLs are public - anyone with the link can access your site
- Don't share sensitive data on public tunnels
- Use `--basic-auth` for additional protection
- Free tier URLs change on each restart

## Resources

- [ngrok Documentation](https://ngrok.com/docs)
- [Laravel Valet Sharing](https://laravel.com/docs/valet#sharing-sites)
- [ngrok Dashboard](https://dashboard.ngrok.com)
