<?php

namespace Modules\Movice\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class MoviceFactoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     */
    protected $model = \Modules\Movice\Models\MoviceFactory::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [];
    }
}

