<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Customer\Database\Seeders\CustomerDatabaseSeeder;
use Modules\Menu\Database\Seeders\MenuDatabaseSeeder;
use Modules\Outlet\Database\Seeders\OutletDatabaseSeeder;
use Modules\Product\Database\Seeders\ProductSeeder;
use Modules\Wallets\Database\Seeders\WalletsDatabaseSeeder;

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
            CustomerDatabaseSeeder::class,

            // Outlet module (needed for Menu and Product)
            OutletDatabaseSeeder::class,

            // Menu module (depends on Outlet)
            MenuDatabaseSeeder::class,

            // Wallets module (depends on Customer)
            WalletsDatabaseSeeder::class,

            // Product module (depends on Outlet)  and the attributes of the product
            ProductSeeder::class,
        ]);
    }
}
