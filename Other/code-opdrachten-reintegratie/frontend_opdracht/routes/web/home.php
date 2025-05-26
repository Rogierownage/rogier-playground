<?php

use App\Http\Controllers\ObjectController;
use Illuminate\Support\Facades\Route;

Route::group(
    [
        'prefix'     => 'object',
        'as'         => 'object.',
    ],
    function (): void {
        Route::get('form', [ObjectController::class, 'form'], [
            'as'   => 'form',
        ]);
    }
);
