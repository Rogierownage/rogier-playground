<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Region;
use App\Models\TaxiCompany;
use Illuminate\Database\Eloquent\Collection;

class RegionSeeder extends BaseSeeder
{
    private array $regionNames = [
        'Amersfoort',
        'De Bilt',
        'Bunschoten',
        'Houten',
        'Leusden',
        'Montfoort',
        'Oudewater',
        'Rhenen',
        'Soest',
        'Utrecht',
        'Veenendaal',
        'Wijk bij Duurstede',
        'Woudenberg',
    ];

    private Collection $allTaxiCompanies;

    public function __construct()
    {
        $this->allTaxiCompanies = TaxiCompany::all();
    }

    public function handle(): void
    {
        foreach ($this->regionNames as $name) {
            $randomCompany = $this->allTaxiCompanies->random();

            Region::factory()->for($randomCompany)->create(['name' => $name]);

            $this->advanceProgressBar();
        }

        $companiesWithoutRegions = TaxiCompany::whereDoesntHave('regions')->get();

        if (!$companiesWithoutRegions->isNotEmpty()) {
            return;
        }

        foreach ($companiesWithoutRegions as $company) {
            Region::factory()->for($company)->create();
        }
    }

    protected function getProgressBarCount(): int
    {
        return count($this->regionNames);
    }
}
