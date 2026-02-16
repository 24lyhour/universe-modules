<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ModuleSeeder extends Seeder
{
    /**
     * Run all module seeders in dependency order.
     *
     * Usage: php artisan db:seed --class=ModuleSeeder
     */
    public function run(): void
    {
        $this->call([
            // Customer module (needed for Wallets)
            \Modules\Customer\Database\Seeders\CustomerDatabaseSeeder::class,

            // Outlet module (needed for Menu)
            \Modules\Outlet\Database\Seeders\OutletDatabaseSeeder::class,

            // Menu module (depends on Outlet)
            \Modules\Menu\Database\Seeders\MenuDatabaseSeeder::class,

            // Wallets module (depends on Customer)
            \Modules\Wallets\Database\Seeders\WalletsDatabaseSeeder::class,
        ]);
    }
}
