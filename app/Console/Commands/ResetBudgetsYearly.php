<?php

namespace App\Console\Commands;

use App\Models\WmoBudget;
use Carbon\Carbon;
use Illuminate\Console\Command;

class ResetBudgetsYearly extends Command
{
    /**
     * @var string
     */
    protected $signature = 'budget:yearly-reset';

    /**
     * @var string
     */
    protected $description = 'Runs over contracts to create debit invoice lines';

    /**
     * @return mixed
     */
    public function handle()
    {
        $budgets = WmoBudget::query()->whereDate('current_budget_set_at', '<=', Carbon::today()->subYear())->get();

        $this->info('Resetting budgets: ' . $budgets->implode('id', ', '));

        foreach ($budgets as $budget) {
            $budget->current_budget = $budget->yearly_budget;
            $budget->current_budget_set_at = Carbon::today();
            $budget->save();
        }
    }
}
