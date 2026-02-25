<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class CleanBrokenAvatars extends Command
{
    protected $signature = 'avatars:clean {--dry-run : Show what would be cleaned without making changes}';
    protected $description = 'Clean broken avatar URLs from users table';

    public function handle(): int
    {
        $dryRun = $this->option('dry-run');
        
        $users = User::whereNotNull('avatar')->where('avatar', '!=', '')->get();
        
        $this->info("Found {$users->count()} users with avatars");
        
        $cleaned = 0;
        
        foreach ($users as $user) {
            $avatarUrl = $user->avatar;
            $isBroken = false;
            
            // Check if it's a local storage URL
            if (str_contains($avatarUrl, '/storage/')) {
                // Extract the path from URL
                $path = str_replace(config('app.url') . '/storage/', '', $avatarUrl);
                $path = str_replace('/storage/', '', $path);
                
                if (!Storage::disk('public')->exists($path)) {
                    $isBroken = true;
                    $this->warn("Broken: {$user->email} - {$avatarUrl} (file not found)");
                }
            } else {
                // External URL - try to check if accessible
                try {
                    $response = Http::timeout(5)->head($avatarUrl);
                    if (!$response->successful()) {
                        $isBroken = true;
                        $this->warn("Broken: {$user->email} - {$avatarUrl} (HTTP {$response->status()})");
                    }
                } catch (\Exception $e) {
                    $isBroken = true;
                    $this->warn("Broken: {$user->email} - {$avatarUrl} (unreachable)");
                }
            }
            
            if ($isBroken) {
                $cleaned++;
                if (!$dryRun) {
                    $user->update(['avatar' => null]);
                    $this->info("  -> Cleaned");
                }
            }
        }
        
        if ($dryRun) {
            $this->info("\nDry run complete. Would clean {$cleaned} broken avatars.");
        } else {
            $this->info("\nCleaned {$cleaned} broken avatars.");
        }
        
        return Command::SUCCESS;
    }
}
