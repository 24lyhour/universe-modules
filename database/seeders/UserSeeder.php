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
        if (! User::where('email', 'kouchlyhour@gmail.com')->exists()) {
            User::factory()->withoutTwoFactor()->create([
                'name' => 'kouchlyhour',
                'email' => 'kouchlyhour@gmail.com',
                'password' => '12345678',
                'role' => 'admin',
            ]);
        }
    }
}
