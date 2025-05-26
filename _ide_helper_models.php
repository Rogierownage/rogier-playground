<?php

// @formatter:off
// phpcs:ignoreFile
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $taxi_company_id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\TaxiCompany $taxiCompany
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\User> $users
 * @property-read int|null $users_count
 * @method static \Database\Factories\RegionFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Region forTaxiCompany(\App\Models\TaxiCompany $taxiCompany)
 * @method static \Illuminate\Database\Eloquent\Builder|Region newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Region newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Region query()
 * @method static \Illuminate\Database\Eloquent\Builder|Region whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Region whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Region whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Region whereTaxiCompanyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Region whereUpdatedAt($value)
 */
	class Region extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $user_id
 * @property string $distance
 * @property string $from_address
 * @property string $from_zipcode
 * @property string $from_city
 * @property string $to_address
 * @property string $to_zipcode
 * @property string $to_city
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $user
 * @method static \Database\Factories\RideFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Ride forTaxiCompany(\App\Models\TaxiCompany $taxiCompany)
 * @method static \Illuminate\Database\Eloquent\Builder|Ride newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Ride newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Ride query()
 * @method static \Illuminate\Database\Eloquent\Builder|Ride whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ride whereDistance($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ride whereFromAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ride whereFromCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ride whereFromZipcode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ride whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ride whereToAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ride whereToCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ride whereToZipcode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ride whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ride whereUserId($value)
 */
	class Ride extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $name
 * @property string|null $name_normalized
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Region|null $lastRegion
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Region> $regions
 * @property-read int|null $regions_count
 * @method static \Database\Factories\TaxiCompanyFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|TaxiCompany newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TaxiCompany newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TaxiCompany query()
 * @method static \Illuminate\Database\Eloquent\Builder|TaxiCompany whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TaxiCompany whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TaxiCompany whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TaxiCompany whereNameNormalized($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TaxiCompany whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TaxiCompany withAlphabeticalFirstRegionCreatedAt()
 * @method static \Illuminate\Database\Eloquent\Builder|TaxiCompany withLastRegionId()
 */
	class TaxiCompany extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int|null $region_id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property mixed $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \App\Models\Region|null $region
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Ride> $rides
 * @property-read int|null $rides_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Laravel\Sanctum\PersonalAccessToken> $tokens
 * @property-read int|null $tokens_count
 * @property-read \App\Models\WmoBudget|null $wmoBudget
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|User forTaxiCompany(\App\Models\TaxiCompany $taxiCompany)
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRegionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property int $user_id
 * @property bool $active
 * @property string $current_budget
 * @property string $yearly_budget
 * @property \Illuminate\Support\Carbon $current_budget_set_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Carbon\Carbon $next_budget_reset_at
 * @property-read \App\Models\User $user
 * @method static \Database\Factories\WmoBudgetFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|WmoBudget newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|WmoBudget newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|WmoBudget query()
 * @method static \Illuminate\Database\Eloquent\Builder|WmoBudget whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WmoBudget whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WmoBudget whereCurrentBudget($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WmoBudget whereCurrentBudgetSetAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WmoBudget whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WmoBudget whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WmoBudget whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|WmoBudget whereYearlyBudget($value)
 */
	class WmoBudget extends \Eloquent {}
}

