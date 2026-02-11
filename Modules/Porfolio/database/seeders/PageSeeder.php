<?php

namespace Modules\Porfolio\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Modules\Porfolio\Models\Page;
use Modules\Porfolio\Models\Header;
use Modules\Porfolio\Models\Footer;

class PageSeeder extends Seeder
{
    public function run(): void
    {
        $header = Header::first();
        $footer = Footer::first();

        // Homepage
        Page::create([
            'uuid' => Str::uuid(),
            'header_id' => $header?->id,
            'footer_id' => $footer?->id,
            'title' => 'Home',
            'slug' => 'home',
            'description' => 'Welcome to our portfolio website',
            'meta_title' => 'Portfolio - Creative Digital Agency',
            'meta_description' => 'We create stunning digital experiences that help businesses grow.',
            'template' => 'homepage',
            'is_homepage' => true,
            'is_active' => true,
            'is_in_menu' => true,
            'menu_order' => 1,
        ]);

        // About Page
        Page::create([
            'uuid' => Str::uuid(),
            'header_id' => $header?->id,
            'footer_id' => $footer?->id,
            'title' => 'About',
            'slug' => 'about',
            'description' => 'Learn more about us and our story',
            'content' => '<p>We are a creative digital agency passionate about crafting exceptional experiences.</p>',
            'meta_title' => 'About Us - Portfolio',
            'meta_description' => 'Learn about our team, our mission, and our passion for creating amazing digital experiences.',
            'template' => 'about',
            'is_homepage' => false,
            'is_active' => true,
            'is_in_menu' => true,
            'menu_order' => 2,
        ]);

        // Portfolio Page
        Page::create([
            'uuid' => Str::uuid(),
            'header_id' => $header?->id,
            'footer_id' => $footer?->id,
            'title' => 'Portfolio',
            'slug' => 'portfolio',
            'description' => 'Explore our work and projects',
            'meta_title' => 'Our Work - Portfolio',
            'meta_description' => 'Explore our portfolio of successful projects and digital experiences.',
            'template' => 'portfolio',
            'is_homepage' => false,
            'is_active' => true,
            'is_in_menu' => true,
            'menu_order' => 3,
        ]);

        // Services Page
        Page::create([
            'uuid' => Str::uuid(),
            'header_id' => $header?->id,
            'footer_id' => $footer?->id,
            'title' => 'Services',
            'slug' => 'services',
            'description' => 'Discover our services',
            'meta_title' => 'Our Services - Portfolio',
            'meta_description' => 'Discover our range of digital services including web development, design, and more.',
            'template' => 'services',
            'is_homepage' => false,
            'is_active' => true,
            'is_in_menu' => true,
            'menu_order' => 4,
        ]);

        // Contact Page
        Page::create([
            'uuid' => Str::uuid(),
            'header_id' => $header?->id,
            'footer_id' => $footer?->id,
            'title' => 'Contact',
            'slug' => 'contact',
            'description' => 'Get in touch with us',
            'meta_title' => 'Contact Us - Portfolio',
            'meta_description' => 'Get in touch with our team. We would love to hear from you.',
            'template' => 'contact',
            'is_homepage' => false,
            'is_active' => true,
            'is_in_menu' => true,
            'menu_order' => 5,
        ]);
    }
}
