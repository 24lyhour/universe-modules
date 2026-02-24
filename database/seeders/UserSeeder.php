<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create or update the admin user (ensures password is always reset)
        $user = User::updateOrCreate(
            ['email' => 'kouchlyhour@gmail.com'],
            [
                'name' => 'kouchlyhour',
                'avatar' => '/images/users/kouchlyhour.svg',
                'password' => '12345678',
                'role' => 'admin',
                'email_verified_at' => now(),
                'two_factor_secret' => null,
                'two_factor_recovery_codes' => null,
                'two_factor_confirmed_at' => null,
            ]
        );

        // Assign super-admin role
        if (!$user->hasRole('super-admin')) {
            $user->assignRole('super-admin');
        }
    }
}
