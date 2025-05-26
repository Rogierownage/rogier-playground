<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TaxiCompany extends Model
{
    use HasFactory;

    /** @var array */
    protected $fillable = [
        'name',
    ];

    public function regions(): HasMany
    {
        return $this->hasMany(Region::class);
    }

    public function lastRegion(): BelongsTo
    {
        return $this->belongsTo(Region::class);
    }

    public function scopeWithLastRegionId(Builder $query)
    {
        $query->addSelect([
            'last_region_id' => Region::query()
                ->select('id')
                ->whereColumn('taxi_company_id', 'taxi_companies.id')
                ->latest()
                ->take(1)
        ]);
    }

    public function scopeWithAlphabeticalFirstRegionCreatedAt(Builder $query)
    {
        $query
            ->addSelect(['alphabetical_first_region_created_at' => Region::query()
                ->select('created_at')
                ->whereColumn('taxi_company_id', 'taxi_companies.id')
                ->orderBy('name')
                ->latest()
                ->take(1)
            ])
            ->withCasts(['alphabetical_first_region_created_at' => 'datetime']);
    }
}
