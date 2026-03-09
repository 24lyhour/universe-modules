<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class BackupController extends Controller
{
    /**
     * Display a listing of backups.
     */
    public function index(): Response
    {
        $disk = Storage::disk('backups');
        $backups = [];

        // Get the backup folder name (app name)
        $appName = config('backup.backup.name');
        $backupPath = $appName;

        if ($disk->exists($backupPath)) {
            $files = $disk->files($backupPath);

            foreach ($files as $file) {
                if (str_ends_with($file, '.zip')) {
                    $backups[] = [
                        'name' => basename($file),
                        'path' => $file,
                        'size' => $this->formatBytes($disk->size($file)),
                        'size_bytes' => $disk->size($file),
                        'created_at' => date('Y-m-d H:i:s', $disk->lastModified($file)),
                        'created_at_human' => $this->timeAgo($disk->lastModified($file)),
                    ];
                }
            }

            // Sort by created_at descending (newest first)
            usort($backups, fn($a, $b) => strtotime($b['created_at']) - strtotime($a['created_at']));
        }

        // Calculate total size
        $totalSize = array_sum(array_column($backups, 'size_bytes'));

        return Inertia::render('settings/Backup', [
            'backupList' => $backups,
            'totalSize' => $this->formatBytes($totalSize),
            'backupCount' => count($backups),
            'diskSpace' => [
                'free' => $this->formatBytes(disk_free_space(storage_path('app/backups'))),
                'total' => $this->formatBytes(disk_total_space(storage_path('app/backups'))),
            ],
        ]);
    }

    /**
     * Create a new backup.
     */
    public function store(Request $request)
    {
        $type = $request->input('type', 'db'); // 'db' or 'full'

        try {
            if ($type === 'db') {
                // Database only backup
                Artisan::call('backup:run', [
                    '--only-db' => true,
                    '--disable-notifications' => true,
                ]);
            } else {
                // Full backup (database + files)
                Artisan::call('backup:run', [
                    '--disable-notifications' => true,
                ]);
            }

            return back()->with('success', 'Backup created successfully.');
        } catch (\Exception $e) {
            return back()->with('error', 'Backup failed: ' . $e->getMessage());
        }
    }

    /**
     * Download a backup file.
     */
    public function download(Request $request): StreamedResponse
    {
        $path = $request->input('path');
        $disk = Storage::disk('backups');

        if (!$disk->exists($path)) {
            abort(404, 'Backup file not found.');
        }

        return $disk->download($path);
    }

    /**
     * Delete a backup file.
     */
    public function destroy(Request $request)
    {
        $path = $request->input('path');
        $disk = Storage::disk('backups');

        if (!$disk->exists($path)) {
            return back()->with('error', 'Backup file not found.');
        }

        try {
            $disk->delete($path);
            return back()->with('success', 'Backup deleted successfully.');
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to delete backup: ' . $e->getMessage());
        }
    }

    /**
     * Clean old backups.
     */
    public function cleanup()
    {
        try {
            Artisan::call('backup:clean', [
                '--disable-notifications' => true,
            ]);

            return back()->with('success', 'Old backups cleaned successfully.');
        } catch (\Exception $e) {
            return back()->with('error', 'Cleanup failed: ' . $e->getMessage());
        }
    }

    /**
     * Format bytes to human readable format.
     */
    private function formatBytes(int $bytes, int $precision = 2): string
    {
        $units = ['B', 'KB', 'MB', 'GB', 'TB'];

        $bytes = max($bytes, 0);
        $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
        $pow = min($pow, count($units) - 1);

        $bytes /= pow(1024, $pow);

        return round($bytes, $precision) . ' ' . $units[$pow];
    }

    /**
     * Get human readable time ago.
     */
    private function timeAgo(int $timestamp): string
    {
        $diff = time() - $timestamp;

        if ($diff < 60) {
            return 'Just now';
        } elseif ($diff < 3600) {
            $mins = floor($diff / 60);
            return $mins . ' minute' . ($mins > 1 ? 's' : '') . ' ago';
        } elseif ($diff < 86400) {
            $hours = floor($diff / 3600);
            return $hours . ' hour' . ($hours > 1 ? 's' : '') . ' ago';
        } elseif ($diff < 604800) {
            $days = floor($diff / 86400);
            return $days . ' day' . ($days > 1 ? 's' : '') . ' ago';
        } else {
            return date('M d, Y', $timestamp);
        }
    }
}
