<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class WmoBudget extends Model
{
    use HasFactory;

    /** @var array */
    protected $fillable = [
        'budget',
        'yearly_budget',
    ];

    /** @var array */
    protected $casts = [
        'active' => 'boolean',
        'starts_at' => 'date',
        'ends_at' => 'date',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
