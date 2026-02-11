<?php

namespace Modules\Porfolio\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Modules\Porfolio\Models\Header;

class HeaderSeeder extends Seeder
{
    public function run(): void
    {
        Header::create([
            'uuid' => Str::uuid(),
            'title' => 'Main Header',
            'logo' => '/images/logo.svg',
            'logo_alt' => 'Portfolio Logo',
            'navigation' => [
                ['label' => 'Home', 'url' => '/', 'target' => '_self'],
                ['label' => 'About', 'url' => '/about', 'target' => '_self'],
                ['label' => 'Portfolio', 'url' => '/portfolio', 'target' => '_self'],
                ['label' => 'Services', 'url' => '/services', 'target' => '_self'],
                ['label' => 'Contact', 'url' => '/contact', 'target' => '_self'],
            ],
            'actions' => [
                ['label' => 'Get Started', 'url' => '/contact', 'style' => 'primary'],
            ],
            'style' => 'default',
            'position' => 'fixed',
            'is_transparent' => false,
            'show_search' => false,
            'is_active' => true,
            'sort_order' => 1,
        ]);
    }
}
