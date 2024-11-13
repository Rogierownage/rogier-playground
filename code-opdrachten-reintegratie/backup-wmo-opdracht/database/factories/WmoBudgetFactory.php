<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class WmoBudgetFactory extends Factory
{
    public function definition(): array
    {
        $yearlyBudget = $this->faker->numberBetween(1000, 3000);

        return [
            'user_id' => fn () => User::factory()->create()->id,
            'active' => true,
            'current_budget' => $this->faker->numberBetween(100, $yearlyBudget),
            'yearly_budget' => $yearlyBudget,
            'current_budget_set_at' => $this->faker->dateTimeBetween('-13 months', '-2 months'),
        ];
    }
}
