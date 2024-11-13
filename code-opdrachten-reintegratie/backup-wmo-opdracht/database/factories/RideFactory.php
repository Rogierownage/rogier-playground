<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class RideFactory extends Factory
{
    public function definition(): array
    {
        return [
            'user_id' => fn () => User::factory()->create()->id,

            'distance' => $this->faker->numberBetween(5, 40),

            'from_address' => $this->faker->streetAddress,
            'from_zip_code' => $this->faker->postcode,
            'from_city' => $this->faker->city,
            'to_address' => $this->faker->streetAddress,
            'to_zip_code' => $this->faker->postcode,
            'to_city' => $this->faker->city,
        ];
    }
}
