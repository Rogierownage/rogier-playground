<?php

namespace Database\Factories;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class WmoBudgetFactory extends Factory
{
    public function definition(): array
    {
        $yearlyBudget = $this->faker->numberBetween(1000, 3000);
        $startsAt = $this->faker->dateTimeBetween('-5 months', '-2 months');

        return [
            'user_id' => fn () => User::factory()->create()->id,
            'active' => true,
            'yearly_budget' => $yearlyBudget,
            'budget' => $this->faker->numberBetween(100, $yearlyBudget),
            'starts_at' => $startsAt,
            'ends_at' => (new Carbon($startsAt))->addYear()->subDay(),
        ];
    }
}
