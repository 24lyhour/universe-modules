# Task Scheduling

## Overview

The Universe project uses Laravel's task scheduling system to run automated tasks. All schedules are defined in two places:

1. **`routes/console.php`** — Global scheduled tasks (backups)
2. **Module ServiceProviders** — Module-specific scheduled tasks (outlet/menu checks)

### Architecture Flow

```
Server Cron (every minute)
│
├─► php artisan schedule:run
│   │
│   ├─► routes/console.php
│   │   ├── backup:run --only-db      (Daily 2:00 AM)
│   │   ├── backup:run                (Weekly Sunday 3:00 AM)
│   │   └── backup:clean              (Daily 4:00 AM)
│   │
│   ├─► OutletServiceProvider::registerCommandSchedules()
│   │   └── outlet:schedule-check     (Hourly)
│   │
│   └─► MenuServiceProvider::registerCommandSchedules()
│       └── menu:schedule-check       (Hourly)
│
└─► Each task runs only if its cron expression matches current time
```

---

## Active Scheduled Tasks

| Cron | Command | Frequency | Module | Purpose |
|------|---------|-----------|--------|---------|
| `0 * * * *` | `outlet:schedule-check` | Hourly | Outlet | Log outlet open/close status |
| `0 * * * *` | `menu:schedule-check` | Hourly | Menu | Log menu availability status |
| `0 2 * * *` | `backup:run --only-db` | Daily 2:00 AM | Core | Database backup |
| `0 3 * * 0` | `backup:run` | Sunday 3:00 AM | Core | Full backup (DB + files) |
| `0 4 * * *` | `backup:clean` | Daily 4:00 AM | Core | Clean old backups |

---

## How Scheduling Works

### 1. Server Cron Entry (Required for Production)

Add this single cron entry to the server:

```bash
* * * * * cd /path-to-universe && php artisan schedule:run >> /dev/null 2>&1
```

Laravel handles the rest internally.

### 2. Local Development

No cron needed — use the built-in worker:

```bash
php artisan schedule:work
```

This runs the scheduler every minute in the foreground.

### 3. Where Schedules Are Defined

**Global tasks** — `routes/console.php`:

```php
use Illuminate\Support\Facades\Schedule;

Schedule::command('backup:run --only-db --disable-notifications')
    ->dailyAt('02:00')
    ->name('daily-db-backup')
    ->withoutOverlapping()
    ->onOneServer();
```

**Module tasks** — `{Module}/app/Providers/{Module}ServiceProvider.php`:

```php
protected function registerCommandSchedules(): void
{
    $this->app->booted(function () {
        $schedule = $this->app->make(\Illuminate\Console\Scheduling\Schedule::class);
        $schedule->command('outlet:schedule-check')
            ->hourly()
            ->name('outlet-schedule-check')
            ->withoutOverlapping();
    });
}
```

---

## Schedule Commands Detail

### `outlet:schedule-check`

**Location:** `Modules/Outlet/app/Console/Commands/OutletScheduleCheckCommand.php`  
**Registered in:** `Modules/Outlet/app/Providers/OutletServiceProvider.php`

Checks all active outlets and reports their current open/close status based on configured schedule (mode, hours, days).

**Output:**

```
+------------------+--------+---------------------+--------+-----------+
| Outlet           | Mode   | Hours               | Status | Currently |
+------------------+--------+---------------------+--------+-----------+
| Main Branch      | daily  | 06:00:00 - 22:00:00 | active | OPEN      |
| Airport Branch   | always | 24/7                | active | OPEN      |
| Mall Outlet      | daily  | 10:00:00 - 21:00:00 | active | CLOSED    |
+------------------+--------+---------------------+--------+-----------+
Open: 2/3 outlets at 14:30:00
```

### `menu:schedule-check`

**Location:** `Modules/Menu/app/Console/Commands/MenuScheduleCheckCommand.php`  
**Registered in:** `Modules/Menu/app/Providers/MenuServiceProvider.php`

Checks all active menus and reports their availability based on configured schedule.

**Output:**

```
+-----------------------------+-------------+-----------+--------+---------------------+-------------+
| Menu                        | Outlet      | Type      | Mode   | Hours               | Currently   |
+-----------------------------+-------------+-----------+--------+---------------------+-------------+
| Morning Special             | Main Branch | Breakfast | daily  | 06:00:00 - 11:00:00 | AVAILABLE   |
| Business Lunch              | Main Branch | Lunch     | daily  | 11:00:00 - 15:00:00 | UNAVAILABLE |
| Drinks Menu                 | Main Branch | Beverages | always | 24/7                | AVAILABLE   |
+-----------------------------+-------------+-----------+--------+---------------------+-------------+
Available: 2/3 menus at 09:30:00
```

### `backup:run --only-db`

Daily database-only backup using `spatie/laravel-backup`.

### `backup:run`

Weekly full backup (database + files).

### `backup:clean`

Removes backups older than the configured retention period.

---

## Schedule Modes (Outlet & Menu)

Both Outlet and Menu share the same schedule system:

| Mode | Description | Fields Used |
|------|-------------|-------------|
| `always` | Open 24/7 | None |
| `daily` | Same hours every day | `schedule_start_time`, `schedule_end_time` |
| `weekly` | Different hours per day | `schedule_days`, `schedule_start_time`, `schedule_end_time` |
| `date_range` | Temporary schedule | `schedule_start_date`, `schedule_end_date`, `schedule_start_time`, `schedule_end_time` |

**Status:** `active` (enabled) or `inactive` (disabled)

---

## Adding New Scheduled Tasks

### Step 1: Create the Command

```bash
php artisan module:make-command YourCommandName ModuleName
```

### Step 2: Register the Command

In `Modules/{Module}/app/Providers/{Module}ServiceProvider.php`:

```php
protected function registerCommands(): void
{
    $this->commands([
        YourCommand::class,
    ]);
}
```

### Step 3: Register the Schedule

In the same ServiceProvider:

```php
protected function registerCommandSchedules(): void
{
    $this->app->booted(function () {
        $schedule = $this->app->make(\Illuminate\Console\Scheduling\Schedule::class);
        $schedule->command('your:command')
            ->hourly()                    // frequency
            ->name('your-command-name')   // unique name
            ->withoutOverlapping();       // prevent duplicate runs
    });
}
```

### Step 4: Verify

```bash
php artisan schedule:list
```

---

## Available Frequencies

| Method | Cron Equivalent |
|--------|-----------------|
| `everyMinute()` | `* * * * *` |
| `everyFiveMinutes()` | `*/5 * * * *` |
| `everyFifteenMinutes()` | `*/15 * * * *` |
| `everyThirtyMinutes()` | `0,30 * * * *` |
| `hourly()` | `0 * * * *` |
| `hourlyAt(17)` | `17 * * * *` |
| `daily()` | `0 0 * * *` |
| `dailyAt('13:00')` | `0 13 * * *` |
| `twiceDaily(1, 13)` | `0 1,13 * * *` |
| `weekly()` | `0 0 * * 0` |
| `weeklyOn(1, '8:00')` | `0 8 * * 1` |
| `monthly()` | `0 0 1 * *` |
| `cron('0 */6 * * *')` | Custom |

---

## Task Options

| Option | Purpose |
|--------|---------|
| `->withoutOverlapping()` | Prevent concurrent runs |
| `->onOneServer()` | Run on single server only (multi-server) |
| `->runInBackground()` | Don't block other tasks |
| `->evenInMaintenanceMode()` | Run during `php artisan down` |
| `->environments(['production'])` | Restrict to specific environment |
| `->appendOutputTo('/path/log')` | Log task output |
