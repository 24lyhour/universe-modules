# Database Backup & Restore

This documentation covers the complete database backup system for the Universe project.

## Overview

The backup system uses [spatie/laravel-backup](https://spatie.be/docs/laravel-backup) package with custom CLI commands for easier management.

## Quick Reference

| Command                           | Description                       |
| --------------------------------- | --------------------------------- |
| `php artisan db:backup`           | Create database-only backup       |
| `php artisan db:backup --full`    | Create full backup (DB + files)   |
| `php artisan db:backup --list`    | List all existing backups         |
| `php artisan db:backup --clean`   | Clean old backups                 |
| `php artisan db:restore`          | Restore from backup (interactive) |
| `php artisan db:restore --latest` | Restore from latest backup        |

## Storage Location

Backups are stored in:

```
storage/app/backups/Universe/
```

## CLI Commands

### 1. Create Backup

```bash
# Database only (recommended for daily backups)
php artisan db:backup

# Full backup including files
php artisan db:backup --full
```

**Output:**

```
Creating database backup...
 4/4 [============================] 100%
 Copying database dump...
 Determining files to backup...
 Zipping files...
 Copying zip to destination...

Backup completed successfully!
Location: storage/app/backups/Universe/2024-01-15-02-00-00.zip
Size: 2.5 MB
```

### 2. List Backups

```bash
php artisan db:backup --list
```

**Output:**

```
+----------------------------+---------+
| Backup File                | Size    |
+----------------------------+---------+
| 2024-01-14-02-00-00.zip   | 2.3 MB  |
| 2024-01-15-02-00-00.zip   | 2.5 MB  |
+----------------------------+---------+
Total: 2 backups
```

### 3. Clean Old Backups

```bash
php artisan db:backup --clean
```

This removes backups based on retention policy in `config/backup.php`.

### 4. Restore Database

```bash
# Interactive mode - choose from list
php artisan db:restore

# Restore latest backup automatically
php artisan db:restore --latest

# Restore specific backup file
php artisan db:restore 2024-01-15-02-00-00.zip
```

**Warning:** Restore will replace your current database. Always confirm before proceeding.

## Web UI

Access backup management via the web interface:

```
Settings > Backup
URL: /settings/backup
```

Features:

- View backup statistics (total backups, storage used, last backup time)
- Create new backup (database or full)
- Download backups
- Delete individual backups
- Clean old backups

## Scheduled Backups

Automatic backups are configured in `routes/console.php`:

| Schedule        | Type                | Time    |
| --------------- | ------------------- | ------- |
| Daily           | Database only       | 2:00 AM |
| Weekly (Sunday) | Full backup         | 3:00 AM |
| Daily           | Cleanup old backups | 4:00 AM |

### Enable Scheduled Backups

Add this cron entry on your server:

```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

### Test Scheduler Locally

```bash
php artisan schedule:work
```

This runs the scheduler in the foreground for testing.

### View Scheduled Tasks

```bash
php artisan schedule:list
```

## Configuration

### Backup Config (`config/backup.php`)

Key settings:

```php
'backup' => [
    'name' => env('APP_NAME', 'laravel-backup'),

    'source' => [
        'files' => [
            'include' => [base_path()],
            'exclude' => [
                base_path('vendor'),
                base_path('node_modules'),
                storage_path('app/backups'),
            ],
        ],
        'databases' => ['mysql'],
    ],

    'destination' => [
        'disks' => ['backups'],
    ],
],

'cleanup' => [
    'strategy' => \Spatie\Backup\Tasks\Cleanup\Strategies\DefaultStrategy::class,
    'default_strategy' => [
        'keep_all_backups_for_days' => 7,
        'keep_daily_backups_for_days' => 16,
        'keep_weekly_backups_for_weeks' => 8,
        'keep_monthly_backups_for_months' => 4,
        'keep_yearly_backups_for_years' => 2,
        'delete_oldest_backups_when_using_more_megabytes_than' => 5000,
    ],
],
```

### Filesystem Config (`config/filesystems.php`)

```php
'disks' => [
    'backups' => [
        'driver' => 'local',
        'root' => storage_path('app/backups'),
        'throw' => false,
        'report' => false,
    ],
],
```

### Database Config (`config/database.php`)

For MySQL dump to work, ensure the dump path is set:

```php
'mysql' => [
    // ... other config
    'dump' => [
        'dump_binary_path' => env('MYSQL_DUMP_PATH', '/usr/bin'),
        'use_single_transaction' => true,
    ],
],
```

**Common paths:**

- Linux/Server: `/usr/bin`
- macOS Homebrew: `/usr/local/bin` or `/opt/homebrew/bin`
- DBngin (macOS): `/Users/Shared/DBngin/mysql/8.0.33/bin`
- MAMP: `/Applications/MAMP/Library/bin`
- Laravel Herd: `/Applications/Herd/bin`

## Troubleshooting

### mysqldump: command not found

Set the correct dump path in `.env`:

```env
MYSQL_DUMP_PATH=/path/to/mysql/bin
```

Or directly in `config/database.php`.

### Permission Denied

Ensure storage directories are writable:

```bash
chmod -R 775 storage/app/backups
```

### Backup Too Large

Exclude unnecessary directories in `config/backup.php`:

```php
'exclude' => [
    base_path('vendor'),
    base_path('node_modules'),
    storage_path('app/backups'),
    storage_path('logs'),
    // Add more as needed
],
```

### Email Notifications Failing

If SMTP is not configured, disable notifications in `config/backup.php`:

```php
'notifications' => [
    'notifiable' => \Spatie\Backup\Notifications\Notifiable::class,
    'mail' => [
        'to' => [],  // Empty to disable
    ],
    'notifications' => [
        // Comment out or remove notification classes
    ],
],
```

## Best Practices

1. **Daily database backups** - Use `--only-db` for faster, smaller backups
2. **Weekly full backups** - Include files for complete recovery
3. **Test restores regularly** - Verify backups work before you need them
4. **Off-site storage** - Consider S3 or other cloud storage for production
5. **Monitor backup health** - Check backup sizes and timestamps regularly
6. **Secure backup files** - Restrict access to backup directory

## Related Files

| File                                                 | Purpose                      |
| ---------------------------------------------------- | ---------------------------- |
| `app/Console/Commands/BackupDatabase.php`            | Custom backup CLI command    |
| `app/Console/Commands/RestoreDatabase.php`           | Custom restore CLI command   |
| `app/Http/Controllers/Settings/BackupController.php` | Web UI controller            |
| `resources/js/pages/settings/Backup.vue`             | Web UI Vue component         |
| `routes/console.php`                                 | Scheduled backup tasks       |
| `config/backup.php`                                  | Backup package configuration |
| `config/filesystems.php`                             | Storage disk configuration   |

## Production Deployment

For production servers:

1. **Set up cron job:**

    ```bash
    crontab -e
    # Add:
    * * * * * cd /var/www/universe && php artisan schedule:run >> /dev/null 2>&1
    ```

2. **Configure cloud storage (optional):**

    ```php
    // config/backup.php
    'destination' => [
        'disks' => ['backups', 's3'],
    ],
    ```

3. **Set appropriate retention:**
   Adjust cleanup strategy based on storage capacity and recovery needs.

4. **Monitor backup health:**
   Use Laravel's health checks or external monitoring to verify backups complete successfully.

All commands are working correctly. The schedule shows "No scheduled commands are ready to run" because the tasks are set for:

2:00 AM - Daily database backup
3:00 AM Sunday - Weekly full backup
4:00 AM - Cleanup old backups
Since it's currently daytime, no tasks are due yet.

To test a scheduled backup immediately:

# Run backup directly (same as scheduled task)

php artisan backup:run --only-db --disable-notifications
Or to see when tasks will run:

php artisan schedule:list
