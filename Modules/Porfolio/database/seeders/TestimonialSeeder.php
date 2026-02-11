<?php

namespace Modules\Porfolio\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Modules\Porfolio\Models\Testimonial;

class TestimonialSeeder extends Seeder
{
    public function run(): void
    {
        $testimonials = [
            [
                'name' => 'Sarah Johnson',
                'position' => 'CEO',
                'company' => 'TechStart Inc.',
                'content' => 'Working with this team was an absolute pleasure. They delivered beyond our expectations and transformed our digital presence completely.',
                'rating' => 5,
                'is_featured' => true,
                'sort_order' => 1,
            ],
            [
                'name' => 'Michael Chen',
                'position' => 'Marketing Director',
                'company' => 'Global Brands Co.',
                'content' => 'The attention to detail and creative solutions they provided were exceptional. Our conversion rates increased by 150% after the redesign.',
                'rating' => 5,
                'is_featured' => true,
                'sort_order' => 2,
            ],
            [
                'name' => 'Emily Davis',
                'position' => 'Founder',
                'company' => 'Startup Hub',
                'content' => 'Professional, responsive, and incredibly talented. They understood our vision and brought it to life beautifully.',
                'rating' => 5,
                'is_featured' => true,
                'sort_order' => 3,
            ],
            [
                'name' => 'Robert Wilson',
                'position' => 'Product Manager',
                'company' => 'Innovation Labs',
                'content' => 'The mobile app they developed for us has received overwhelmingly positive feedback from our users. Highly recommended!',
                'rating' => 4,
                'is_featured' => false,
                'sort_order' => 4,
            ],
            [
                'name' => 'Jennifer Lee',
                'position' => 'CTO',
                'company' => 'DataFlow Systems',
                'content' => 'Their technical expertise and problem-solving abilities are top-notch. They delivered a complex project on time and within budget.',
                'rating' => 5,
                'is_featured' => false,
                'sort_order' => 5,
            ],
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::create([
                'uuid' => Str::uuid(),
                'is_active' => true,
                ...$testimonial,
            ]);
        }
    }
}
