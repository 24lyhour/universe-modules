<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class AddMediaPermissions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'permissions:add-media';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Add media permissions to roles for avatar uploads';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        // Reset cached permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // Create media permissions if they don't exist
        $mediaPermissions = [
            'media.view',
            'media.view_any',
            'media.create',
            'media.update',
            'media.delete',
            'media.restore',
            'media.force_delete',
        ];

        foreach ($mediaPermissions as $permission) {
            Permission::firstOrCreate(['name' => $permission, 'guard_name' => 'web']);
            $this->info("Created permission: {$permission}");
        }

        // Basic media permissions for uploading avatars
        $basicMediaPermissions = ['media.view_any', 'media.create'];

        // Roles that should have media permissions (for avatars)
        $rolesWithMediaAccess = [
            'admin',
            'manager',
            'staff',
            'Outlet Admin',
            'NIB Admin',
        ];

        foreach ($rolesWithMediaAccess as $roleName) {
            $role = Role::where('name', $roleName)->first();
            if ($role) {
                $role->givePermissionTo($basicMediaPermissions);
                $this->info("Added media permissions to role: {$roleName}");
            } else {
                $this->warn("Role not found: {$roleName}");
            }
        }

        // Super-admin gets all media permissions
        $superAdmin = Role::where('name', 'super-admin')->first();
        if ($superAdmin) {
            $superAdmin->givePermissionTo($mediaPermissions);
            $this->info("Added all media permissions to super-admin");
        }

        // Clear permission cache
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $this->info('Media permissions added successfully!');

        return Command::SUCCESS;
    }
}
