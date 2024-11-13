<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Region;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

class UserSeeder extends BaseSeeder
{
    private Collection $allRegions;

    public function __construct()
    {
        $this->allRegions = Region::all();
    }

    public function handle(): void
    {
        foreach ($this->allRegions as $region) {
            User::factory()->count(3)->for($region)->create();

            $this->advanceProgressBar();
        }
    }

    protected function getProgressBarCount(): int
    {
        return $this->allRegions->count();
    }
}
