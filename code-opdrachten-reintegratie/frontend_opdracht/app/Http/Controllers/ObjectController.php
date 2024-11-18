<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

class ObjectController extends Controller
{
    public function form(): View
    {
        return view('object.form');
    }
}
