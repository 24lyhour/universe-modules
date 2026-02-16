<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Core seeders
        $this->call([
            UserSeeder::class,
            SettingsSeeder::class,
        ]);

        // // Module seeders in dependency order
        // $this->call([
        //     // Customer module (needed for Wallets)
        //     \Modules\Customer\Database\Seeders\CustomerDatabaseSeeder::class,

        //     // Outlet module (needed for Menu)
        //     \Modules\Outlet\Database\Seeders\OutletDatabaseSeeder::class,

        //     // Menu module (depends on Outlet)
        //     \Modules\Menu\Database\Seeders\MenuDatabaseSeeder::class,

        //     // Wallets module (depends on Customer)
        //     \Modules\Wallets\Database\Seeders\WalletsDatabaseSeeder::class,
        // ]);
    }
}
