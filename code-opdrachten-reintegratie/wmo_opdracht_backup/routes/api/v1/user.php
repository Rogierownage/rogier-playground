<?php

use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix'     => 'user',
    'as'         => 'user.',
], function (): void {
    Route::get('', [UserController::class, 'index'], [
        'as'   => 'index',
    ]);
});
