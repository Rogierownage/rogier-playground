<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\User;
use App\Models\WmoBudget;
use Illuminate\Database\Eloquent\Collection;

class WmoBudgetSeeder extends BaseSeeder
{
    private Collection $allUsers;

    public function __construct()
    {
        $this->allUsers = User::all();
    }

    public function handle(): void
    {
        foreach ($this->allUsers as $user) {
            WmoBudget::factory()->for($user)->create();

            $this->advanceProgressBar();
        }
    }

    protected function getProgressBarCount(): int
    {
        return $this->allUsers->count();
    }
}
