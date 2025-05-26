<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Region extends Model
{
    use HasFactory;

    /** @var array */
    protected $fillable = [
        'name',
    ];

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }

    public function taxiCompany(): BelongsTo
    {
        return $this->belongsTo(TaxiCompany::class);
    }

    public function scopeForTaxiCompany(Builder $query, TaxiCompany $taxiCompany)
    {
        $query->where('taxi_company_id', $taxiCompany->id);
    }
}
