<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Ride\StoreRequest;
use App\Models\Ride;
use App\Models\TaxiCompany;
use App\Models\User;

class RideController extends Controller
{
    public function index(TaxiCompany $taxiCompany): array
    {
        return Ride::forTaxiCompany($taxiCompany)->get()->toArray();
    }

    public function store(StoreRequest $request): array
    {
        $user = User::findOrFail($request->user_id);

        $ride = $user->rides()->create($request->validated());

        $budget = $user->wmoBudget;
        $budget->current_budget -= $request->distance;
        $budget->save();


        return $ride->toArray();
    }
}
