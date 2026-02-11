<?php

namespace Modules\Porfolio\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Modules\Porfolio\Models\Portfolio;
use App\Models\User;

class PortfolioSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::first();

        $portfolios = [
            [
                'title' => 'E-Commerce Platform Redesign',
                'slug' => 'e-commerce-platform-redesign',
                'description' => 'Complete redesign of a major e-commerce platform focusing on user experience and conversion optimization.',
                'content' => '<p>This project involved a comprehensive redesign of a leading e-commerce platform, resulting in a 40% increase in conversion rates and significantly improved user satisfaction scores.</p>',
                'category' => 'Web Development',
                'industry' => 'E-Commerce',
                'client_name' => 'ShopMax Inc.',
                'project_url' => 'https://example.com/shopmax',
                'tags' => ['e-commerce', 'ux-design', 'frontend', 'vue.js'],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Healthcare Mobile App',
                'slug' => 'healthcare-mobile-app',
                'description' => 'Cross-platform mobile application for patient management and telemedicine.',
                'content' => '<p>Developed a comprehensive healthcare mobile application that enables patients to book appointments, consult with doctors via video calls, and manage their health records securely.</p>',
                'category' => 'Mobile Development',
                'industry' => 'Healthcare',
                'client_name' => 'MedCare Solutions',
                'project_url' => 'https://example.com/medcare',
                'tags' => ['mobile', 'healthcare', 'react-native', 'telemedicine'],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 2,
            ],
            [
                'title' => 'Financial Dashboard',
                'slug' => 'financial-dashboard',
                'description' => 'Real-time financial analytics dashboard for investment tracking.',
                'content' => '<p>Built a sophisticated real-time financial dashboard that provides investors with comprehensive analytics, portfolio tracking, and market insights.</p>',
                'category' => 'Web Development',
                'industry' => 'Finance',
                'client_name' => 'InvestPro Capital',
                'project_url' => 'https://example.com/investpro',
                'tags' => ['dashboard', 'finance', 'real-time', 'analytics'],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 3,
            ],
            [
                'title' => 'Restaurant Booking System',
                'slug' => 'restaurant-booking-system',
                'description' => 'Online reservation and table management system for restaurants.',
                'content' => '<p>Created an intuitive booking system that allows customers to make reservations while giving restaurant owners powerful tools for table management and customer engagement.</p>',
                'category' => 'Web Development',
                'industry' => 'Hospitality',
                'client_name' => 'DineEasy',
                'project_url' => 'https://example.com/dineeasy',
                'tags' => ['booking', 'hospitality', 'laravel', 'vue.js'],
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 4,
            ],
            [
                'title' => 'Educational Learning Platform',
                'slug' => 'educational-learning-platform',
                'description' => 'Interactive online learning platform with live classes and course management.',
                'content' => '<p>Developed a comprehensive e-learning platform featuring live video classes, interactive quizzes, progress tracking, and certification management.</p>',
                'category' => 'Web Development',
                'industry' => 'Education',
                'client_name' => 'LearnHub',
                'project_url' => 'https://example.com/learnhub',
                'tags' => ['education', 'e-learning', 'video-streaming', 'lms'],
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 5,
            ],
            [
                'title' => 'Real Estate Property Portal',
                'slug' => 'real-estate-property-portal',
                'description' => 'Property listing and virtual tour platform for real estate agencies.',
                'content' => '<p>Built a modern real estate portal featuring advanced search filters, 3D virtual property tours, and integrated mortgage calculators.</p>',
                'category' => 'Web Development',
                'industry' => 'Real Estate',
                'client_name' => 'HomeFind Realty',
                'project_url' => 'https://example.com/homefind',
                'tags' => ['real-estate', 'virtual-tours', '3d', 'property'],
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 6,
            ],
        ];

        foreach ($portfolios as $portfolio) {
            Portfolio::create([
                'uuid' => Str::uuid(),
                'user_id' => $user?->id,
                ...$portfolio,
            ]);
        }
    }
}
