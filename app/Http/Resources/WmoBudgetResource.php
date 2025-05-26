<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\WmoBudget */
class WmoBudgetResource extends JsonResource
{
    /**
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     *
     * @SuppressWarnings(PHPMD.UnusedFormalParameter)
     */
    public function toArray($request)
    {
        return [
            'id'     => $this->id,
            'active' => $this->active,
            'current_budget' => $this->current_budget,
            'yearly_budget' => $this->yearly_budget,
            'current_budget_set_at' => $this->current_budget_set_at,
            'next_budget_reset_at' => $this->next_budget_reset_at,
        ];
    }
}
