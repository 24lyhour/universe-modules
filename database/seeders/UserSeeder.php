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
        // Check if user exists to avoid duplicates if run multiple times
        $user = User::where('email', 'kouchlyhour@gmail.com')->first();

        if (!$user) {
            $user = User::factory()->withoutTwoFactor()->create([
                'name' => 'kouchlyhour',
                'email' => 'kouchlyhour@gmail.com',
                'avatar' => '/images/users/kouchlyhour.svg',
                'password' => '12345678',
                'role' => 'admin',
            ]);
        }

        // Assign super-admin role
        if (!$user->hasRole('super-admin')) {
            $user->assignRole('super-admin');
        }
    }
}
