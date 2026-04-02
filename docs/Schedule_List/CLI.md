# Task Scheduling - CLI Commands

## View Schedules

```bash
# List all scheduled tasks with next run time
php artisan schedule:list

# Output:
#   0 * * * *  php artisan menu:schedule-check .... Next Due: 52 minutes from now
#   0 * * * *  php artisan outlet:schedule-check .. Next Due: 52 minutes from now
#   0 2 * * *  php artisan backup:run --only-db ... Next Due: 23 hours from now
#   0 3 * * 0  php artisan backup:run ............. Next Due: 4 days from now
#   0 4 * * *  php artisan backup:clean ........... Next Due: 1 hour from now
```

---

## Run Schedules

```bash
# Run all due scheduled tasks (production — called by cron)
php artisan schedule:run

# Run scheduler continuously (local development — no cron needed)
php artisan schedule:work

# Test a specific scheduled task interactively
php artisan schedule:test
```

---

## Outlet Schedule Commands

```bash
# Check all outlet open/close status
php artisan outlet:schedule-check

# List all outlets
php artisan outlet:list
php artisan outlet:list --active
```

---

## Menu Schedule Commands

```bash
# Check all menu availability status
php artisan menu:schedule-check
```

---

## Backup Commands

```bash
# Run database backup manually
php artisan backup:run --only-db

# Run full backup (database + files)
php artisan backup:run

# Clean old backups
php artisan backup:clean

# List all existing backups
php artisan backup:list

# Monitor backup health
php artisan backup:monitor
```

---

## Create New Scheduled Command

```bash
# Step 1: Create command in module
php artisan module:make-command CheckExpiredOrders Order

# Step 2: Register in ServiceProvider (registerCommands + registerCommandSchedules)

# Step 3: Verify
php artisan schedule:list
```

---

## Troubleshooting

```bash
# Clear schedule lock cache (if task stuck with withoutOverlapping)
php artisan schedule:clear-cache

# Clear all caches
php artisan optimize:clear

# Check if command exists
php artisan list | grep outlet
php artisan list | grep menu
php artisan list | grep backup

# Run a specific command manually to test
php artisan outlet:schedule-check
php artisan menu:schedule-check
php artisan backup:run --only-db --disable-notifications
```

---

## Production Server Setup

```bash
# Add this single cron entry (runs every minute)
crontab -e

# Add this line:
* * * * * cd /path/to/universe && php artisan schedule:run >> /dev/null 2>&1

# Verify cron is running
crontab -l
```

---

## Quick Reference

| Task | Command |
|------|---------|
| View all schedules | `php artisan schedule:list` |
| Run due tasks | `php artisan schedule:run` |
| Local dev scheduler | `php artisan schedule:work` |
| Test a task | `php artisan schedule:test` |
| Clear stuck locks | `php artisan schedule:clear-cache` |
| Check outlets | `php artisan outlet:schedule-check` |
| Check menus | `php artisan menu:schedule-check` |
| DB backup | `php artisan backup:run --only-db` |
| Full backup | `php artisan backup:run` |
| Clean backups | `php artisan backup:clean` |
| List backups | `php artisan backup:list` |
