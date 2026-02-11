<?php

namespace Modules\Porfolio\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class HeaderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     */
    protected $model = \Modules\Porfolio\Models\Header::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [];
    }
}

