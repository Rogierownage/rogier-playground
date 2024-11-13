<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class WmoBudget extends Model
{
    use HasFactory;

    /** @var array */
    protected $fillable = [
        'current_budget',
        'yearly_budget',
    ];

    /** @var array */
    protected $casts = [
        'active' => 'boolean',
        'current_budget_set_at' => 'date',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getNextBudgetResetAtAttribute(): Carbon
    {
        return $this->current_budget_set_at->addYear();
    }
}
