<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Ride extends Model
{
    use HasFactory;

    /** @var array */
    protected $fillable = [
        'distance',
        'from_address',
        'from_zip_code',
        'from_city',
        'to_address',
        'to_zip_code',
        'to_city',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function scopeForTaxiCompany(Builder $query, TaxiCompany $taxiCompany)
    {
        $query->whereHas('user', fn ($query) => $query->forTaxiCompany($taxiCompany));
    }
}
