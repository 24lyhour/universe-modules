<?php

namespace Modules\Porfolio\Database\Seeders;

use Illuminate\Database\Seeder;

class PorfolioDatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            HeaderSeeder::class,
            FooterSeeder::class,
            PageSeeder::class,
            ServiceSeeder::class,
            TestimonialSeeder::class,
            SiteSettingSeeder::class,
            PortfolioSeeder::class,
        ]);
    }
}
