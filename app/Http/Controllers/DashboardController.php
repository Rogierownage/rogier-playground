<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\View\View;
use App\Models\User;

class DashboardController extends Controller
{
    public function index(): View
    {
        dump(User::firstOrFail()->only(['id', 'name', 'email']));

        return view('dashboard.index');
    }
}
