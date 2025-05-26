<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\User;

class UserSeeder extends BaseSeeder
{
    public function handle(): void
    {
            User::factory()->count(10)->create();
    }

    protected function getProgressBarCount(): int
    {
        return 10;
    }
}
