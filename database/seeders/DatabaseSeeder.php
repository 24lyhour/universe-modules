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
            RolesAndPermissionsSeeder::class, // Must run before UserSeeder
            UserSeeder::class,
            SettingsSeeder::class,
            WidgetSeeder::class,
        ]);

        // Module seeders
        $this->call([
            \Modules\School\Database\Seeders\SchoolDatabaseSeeder::class,
            // \Modules\Blog\Database\Seeders\BlogDatabaseSeeder::class,
            // \Modules\Company\Database\Seeders\CompanyDatabaseSeeder::class,
            \Modules\Customer\Database\Seeders\CustomerDatabaseSeeder::class,
            \Modules\Employee\Database\Seeders\EmployeeDatabaseSeeder::class,
            // \Modules\Hotel\Database\Seeders\HotelDatabaseSeeder::class,
            \Modules\Menu\Database\Seeders\MenuDatabaseSeeder::class,
            \Modules\Outlet\Database\Seeders\OutletDatabaseSeeder::class,
            \Modules\Product\Database\Seeders\ProductDatabaseSeeder::class,
            \Modules\Porfolio\Database\Seeders\PorfolioDatabaseSeeder::class,
        ]);
    }
}
