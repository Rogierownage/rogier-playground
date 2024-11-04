<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\TaxiCompany;

class TaxiCompanySeeder extends BaseSeeder
{
    private array $companyNames = [
        'UTC',
        'Taxi Utrecht',
        'Cheap Taxi Utrecht',
        'Amersfoort Taxi In Motion ',
    ];

    public function handle(): void
    {
        foreach ($this->companyNames as $name) {
            TaxiCompany::factory()->create(['name' => $name]);

            $this->advanceProgressBar();
        }
    }

    protected function getProgressBarCount(): int
    {
        return count($this->companyNames);
    }
}
