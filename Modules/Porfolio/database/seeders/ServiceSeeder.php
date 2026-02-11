<?php

namespace Modules\Porfolio\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Modules\Porfolio\Models\Service;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'title' => 'Web Development',
                'slug' => 'web-development',
                'description' => 'Custom web applications built with modern technologies.',
                'content' => 'We create scalable, performant web applications using the latest technologies and best practices.',
                'icon' => 'code',
                'features' => [
                    'Custom Web Applications',
                    'E-commerce Solutions',
                    'API Development',
                    'CMS Integration',
                    'Performance Optimization',
                ],
                'is_featured' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Mobile Development',
                'slug' => 'mobile-development',
                'description' => 'Native and cross-platform mobile applications.',
                'content' => 'Build powerful mobile experiences for iOS and Android platforms.',
                'icon' => 'smartphone',
                'features' => [
                    'iOS Development',
                    'Android Development',
                    'Cross-platform Apps',
                    'App Store Optimization',
                    'Maintenance & Support',
                ],
                'is_featured' => true,
                'sort_order' => 2,
            ],
            [
                'title' => 'UI/UX Design',
                'slug' => 'ui-ux-design',
                'description' => 'Beautiful, intuitive designs that users love.',
                'content' => 'We craft user experiences that delight and engage your audience.',
                'icon' => 'palette',
                'features' => [
                    'User Research',
                    'Wireframing & Prototyping',
                    'Visual Design',
                    'Interaction Design',
                    'Design Systems',
                ],
                'is_featured' => true,
                'sort_order' => 3,
            ],
            [
                'title' => 'Digital Marketing',
                'slug' => 'digital-marketing',
                'description' => 'Grow your online presence and reach your audience.',
                'content' => 'Strategic digital marketing solutions to boost your brand visibility.',
                'icon' => 'trending-up',
                'features' => [
                    'SEO Optimization',
                    'Content Marketing',
                    'Social Media Marketing',
                    'Email Campaigns',
                    'Analytics & Reporting',
                ],
                'is_featured' => false,
                'sort_order' => 4,
            ],
        ];

        foreach ($services as $service) {
            Service::create([
                'uuid' => Str::uuid(),
                'is_active' => true,
                ...$service,
            ]);
        }
    }
}
