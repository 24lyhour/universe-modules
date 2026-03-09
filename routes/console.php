<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

/*
|--------------------------------------------------------------------------
| Scheduled Database Backups
|--------------------------------------------------------------------------
|
| Configure automatic database backups here.
| Make sure to set up the cron job on your server:
| * * * * * cd /path-to-project && php artisan schedule:run >> /dev/null 2>&1
|
*/

// Daily database backup at 2:00 AM
Schedule::command('backup:run --only-db --disable-notifications')
    ->dailyAt('02:00')
    ->name('daily-db-backup')
    ->withoutOverlapping()
    ->onOneServer();

// Weekly full backup on Sunday at 3:00 AM
Schedule::command('backup:run --disable-notifications')
    ->weeklyOn(0, '03:00') // Sunday
    ->name('weekly-full-backup')
    ->withoutOverlapping()
    ->onOneServer();

// Clean old backups daily at 4:00 AM
Schedule::command('backup:clean --disable-notifications')
    ->dailyAt('04:00')
    ->name('cleanup-old-backups')
    ->withoutOverlapping()
    ->onOneServer();
