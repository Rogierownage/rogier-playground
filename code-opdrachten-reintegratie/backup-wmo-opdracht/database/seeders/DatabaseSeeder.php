<?php

namespace Database\Seeders;

use App\Models\WmoBudget;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            TaxiCompanySeeder::class,
            RegionSeeder::class,
            UserSeeder::class,
            WmoBudgetSeeder::class,
        ]);
    }
}
