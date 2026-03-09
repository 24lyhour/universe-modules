<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class BackupDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:backup
                            {--full : Create full backup (database + files)}
                            {--list : List all backups}
                            {--clean : Clean old backups}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Easy database backup command';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        // List backups
        if ($this->option('list')) {
            return $this->listBackups();
        }

        // Clean old backups
        if ($this->option('clean')) {
            return $this->cleanBackups();
        }

        // Create backup
        return $this->createBackup();
    }

    /**
     * Create a new backup.
     */
    protected function createBackup(): int
    {
        $type = $this->option('full') ? 'Full' : 'Database';

        $this->info("Creating {$type} Backup...");
        $this->newLine();

        $bar = $this->output->createProgressBar(3);
        $bar->start();

        try {
            $bar->advance();
            $this->line(' Preparing backup...');

            $options = ['--disable-notifications' => true];

            if (!$this->option('full')) {
                $options['--only-db'] = true;
            }

            $bar->advance();
            $this->line(' Creating backup file...');

            Artisan::call('backup:run', $options);

            $bar->advance();
            $bar->finish();

            $this->newLine(2);
            $this->info('Backup created successfully!');
            $this->newLine();

            // Show backup location
            $this->table(
                ['Property', 'Value'],
                [
                    ['Type', $type],
                    ['Location', storage_path('app/backups/' . config('app.name'))],
                    ['Time', now()->format('Y-m-d H:i:s')],
                ]
            );

            return Command::SUCCESS;
        } catch (\Exception $e) {
            $bar->finish();
            $this->newLine(2);
            $this->error('Backup failed: ' . $e->getMessage());
            return Command::FAILURE;
        }
    }

    /**
     * List all backups.
     */
    protected function listBackups(): int
    {
        $this->info('Available Backups');
        $this->newLine();

        $disk = \Storage::disk('backups');
        $appName = config('app.name');
        $backupPath = $appName;

        if (!$disk->exists($backupPath)) {
            $this->warn('No backups found.');
            return Command::SUCCESS;
        }

        $files = $disk->files($backupPath);
        $backups = [];

        foreach ($files as $file) {
            if (str_ends_with($file, '.zip')) {
                $size = $disk->size($file);
                $date = date('Y-m-d H:i:s', $disk->lastModified($file));

                $backups[] = [
                    basename($file),
                    $this->formatBytes($size),
                    $date,
                ];
            }
        }

        if (empty($backups)) {
            $this->warn('No backups found.');
            return Command::SUCCESS;
        }

        // Sort by date descending
        usort($backups, fn($a, $b) => strtotime($b[2]) - strtotime($a[2]));

        $this->table(['File Name', 'Size', 'Created At'], $backups);

        $this->newLine();
        $this->line('Total: ' . count($backups) . ' backup(s)');
        $this->line('Location: ' . storage_path('app/backups/' . $appName));

        return Command::SUCCESS;
    }

    /**
     * Clean old backups.
     */
    protected function cleanBackups(): int
    {
        if (!$this->confirm('This will remove old backups. Continue?')) {
            $this->info('Cancelled.');
            return Command::SUCCESS;
        }

        $this->info('Cleaning old backups...');

        try {
            Artisan::call('backup:clean', ['--disable-notifications' => true]);

            $this->newLine();
            $this->info('Old backups cleaned successfully!');

            return Command::SUCCESS;
        } catch (\Exception $e) {
            $this->error('Cleanup failed: ' . $e->getMessage());
            return Command::FAILURE;
        }
    }

    /**
     * Format bytes to human readable.
     */
    protected function formatBytes(int $bytes): string
    {
        $units = ['B', 'KB', 'MB', 'GB'];
        $bytes = max($bytes, 0);
        $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
        $pow = min($pow, count($units) - 1);
        $bytes /= pow(1024, $pow);

        return round($bytes, 2) . ' ' . $units[$pow];
    }
}
