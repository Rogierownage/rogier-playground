<?php

use App\Http\Controllers\Api\RideController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix'     => 'ride',
    'as'         => 'ride.',
], function (): void {
    Route::get('{taxiCompany}', [RideController::class, 'index'], [
        'as'   => 'index',
    ]);
});
