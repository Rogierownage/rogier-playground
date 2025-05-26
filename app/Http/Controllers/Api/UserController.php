<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class UserController extends Controller
{
    /**
     * User index
     *
     * Shows all the users.
     *
     * @group User
     */
    public function index(): AnonymousResourceCollection
    {
        return UserResource::collection(User::all());
    }
}
