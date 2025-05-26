<?php

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;

Route::group([
    'as'     => 'v1.',
    'prefix' => 'v1',
], function (): void {
    foreach (File::files(__DIR__ . '/v1') as $file) {
        require $file;
    }
});
