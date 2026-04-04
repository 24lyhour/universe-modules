<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Modules\Customer\Database\Seeders\CustomerDatabaseSeeder;
use Modules\Order\Database\Seeders\OrderDatabaseSeeder;
use Modules\Outlet\Database\Seeders\OutletDatabaseSeeder;
use Modules\Product\Database\Seeders\ProductDatabaseSeeder;
use Modules\School\Database\Seeders\SchoolDatabaseSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Core project seeders
        $this->call([
            RolesAndPermissionsSeeder::class, // Must run before UserSeeder
            UserSeeder::class,
            SettingsSeeder::class,
            WidgetSeeder::class,
        ]);

        // Module seeders
        $this->call([
            // SchoolDatabaseSeeder::class,
            // OutletDatabaseSeeder::class,
            // CustomerDatabaseSeeder::class,
            // ProductDatabaseSeeder::class,
            // OrderDatabaseSeeder::class, // Must run after Customer, Product, Outlet
            // \Modules\Blog\Database\Seeders\BlogDatabaseSeeder::class,
            // \Modules\Company\Database\Seeders\CompanyDatabaseSeeder::class,
            // \Modules\Employee\Database\Seeders\EmployeeDatabaseSeeder::class,
            // \Modules\Hotel\Database\Seeders\HotelDatabaseSeeder::class,
            // \Modules\Menu\Database\Seeders\MenuDatabaseSeeder::class,
            // \Modules\Porfolio\Database\Seeders\PorfolioDatabaseSeeder::class,
        ]);
    }
}
