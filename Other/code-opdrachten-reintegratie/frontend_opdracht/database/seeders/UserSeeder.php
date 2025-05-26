<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Region;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

class UserSeeder extends BaseSeeder
{
    public function handle(): void
    {
        for ($i = 1; $i <= 10; $i++) {
            User::factory()->create();

            $this->advanceProgressBar();
        }
    }

    protected function getProgressBarCount(): int
    {
        return 10;
    }
}
