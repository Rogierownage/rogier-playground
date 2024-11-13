<?php

namespace Database\Factories;

use App\Models\TaxiCompany;
use Illuminate\Database\Eloquent\Factories\Factory;

class RegionFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => $this->faker->city,
            'taxi_company_id' => fn () => TaxiCompany::factory()->create()->id,
        ];
    }
}
