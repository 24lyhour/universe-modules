<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use ZipArchive;

class RestoreDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:restore
                            {file? : The backup file name to restore}
                            {--latest : Restore the latest backup}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Restore database from backup';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $disk = Storage::disk('backups');
        $appName = config('app.name');
        $backupPath = $appName;

        // Get backup file
        $file = $this->argument('file');

        if ($this->option('latest')) {
            $file = $this->getLatestBackup($disk, $backupPath);
            if (!$file) {
                $this->error('No backups found.');
                return Command::FAILURE;
            }
            $this->info("Latest backup: {$file}");
        }

        if (!$file) {
            // Show available backups and let user choose
            $files = $this->getBackupFiles($disk, $backupPath);

            if (empty($files)) {
                $this->error('No backups found.');
                return Command::FAILURE;
            }

            $file = $this->choice('Select backup to restore:', $files);
        }

        $fullPath = $backupPath . '/' . $file;

        if (!$disk->exists($fullPath)) {
            $this->error("Backup file not found: {$file}");
            return Command::FAILURE;
        }

        // Confirm restore
        $this->warn('WARNING: This will replace your current database!');
        $this->newLine();

        if (!$this->confirm('Are you sure you want to restore this backup?', false)) {
            $this->info('Restore cancelled.');
            return Command::SUCCESS;
        }

        return $this->restoreBackup($disk, $fullPath);
    }

    /**
     * Get the latest backup file.
     */
    protected function getLatestBackup($disk, string $path): ?string
    {
        $files = $this->getBackupFiles($disk, $path);

        if (empty($files)) {
            return null;
        }

        // Files are already sorted by name (timestamp), get the last one
        return end($files);
    }

    /**
     * Get all backup files.
     */
    protected function getBackupFiles($disk, string $path): array
    {
        if (!$disk->exists($path)) {
            return [];
        }

        $files = $disk->files($path);
        $backups = [];

        foreach ($files as $file) {
            if (str_ends_with($file, '.zip')) {
                $backups[] = basename($file);
            }
        }

        sort($backups);

        return $backups;
    }

    /**
     * Restore the backup.
     */
    protected function restoreBackup($disk, string $fullPath): int
    {
        $this->info('Starting restore...');
        $this->newLine();

        $bar = $this->output->createProgressBar(4);
        $bar->start();

        try {
            // Step 1: Create temp directory
            $bar->advance();
            $this->line(' Preparing...');

            $tempDir = storage_path('app/restore-temp');
            if (!is_dir($tempDir)) {
                mkdir($tempDir, 0755, true);
            }

            // Step 2: Extract backup
            $bar->advance();
            $this->line(' Extracting backup...');

            $zipPath = storage_path('app/backups/' . $fullPath);
            $zip = new ZipArchive();

            if ($zip->open($zipPath) !== true) {
                throw new \Exception('Could not open backup file.');
            }

            $zip->extractTo($tempDir);
            $zip->close();

            // Step 3: Find SQL file
            $bar->advance();
            $this->line(' Finding SQL dump...');

            $sqlFile = $this->findSqlFile($tempDir);

            if (!$sqlFile) {
                throw new \Exception('SQL dump not found in backup.');
            }

            // Step 4: Import database
            $bar->advance();
            $this->line(' Importing database...');

            $this->importDatabase($sqlFile);

            $bar->finish();
            $this->newLine(2);

            // Cleanup
            $this->deleteDirectory($tempDir);

            $this->info('Database restored successfully!');

            return Command::SUCCESS;
        } catch (\Exception $e) {
            $bar->finish();
            $this->newLine(2);
            $this->error('Restore failed: ' . $e->getMessage());

            // Cleanup on failure
            if (isset($tempDir) && is_dir($tempDir)) {
                $this->deleteDirectory($tempDir);
            }

            return Command::FAILURE;
        }
    }

    /**
     * Find SQL file in extracted backup.
     */
    protected function findSqlFile(string $dir): ?string
    {
        $iterator = new \RecursiveIteratorIterator(
            new \RecursiveDirectoryIterator($dir)
        );

        foreach ($iterator as $file) {
            if ($file->isFile() && $file->getExtension() === 'sql') {
                return $file->getPathname();
            }
        }

        return null;
    }

    /**
     * Import SQL file to database.
     */
    protected function importDatabase(string $sqlFile): void
    {
        $dbConfig = config('database.connections.' . config('database.default'));

        $command = sprintf(
            '%s -h %s -P %s -u %s %s %s < %s',
            $dbConfig['dump']['dump_binary_path'] . '/mysql',
            $dbConfig['host'],
            $dbConfig['port'],
            $dbConfig['username'],
            $dbConfig['password'] ? '-p' . escapeshellarg($dbConfig['password']) : '',
            $dbConfig['database'],
            escapeshellarg($sqlFile)
        );

        exec($command, $output, $returnCode);

        if ($returnCode !== 0) {
            throw new \Exception('MySQL import failed. Return code: ' . $returnCode);
        }
    }

    /**
     * Recursively delete directory.
     */
    protected function deleteDirectory(string $dir): void
    {
        if (!is_dir($dir)) {
            return;
        }

        $files = array_diff(scandir($dir), ['.', '..']);

        foreach ($files as $file) {
            $path = $dir . '/' . $file;
            is_dir($path) ? $this->deleteDirectory($path) : unlink($path);
        }

        rmdir($dir);
    }
}
