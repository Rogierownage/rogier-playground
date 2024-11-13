<?php

declare(strict_types=1);

namespace App\Http\Requests\Ride;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Validator;

class StoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $userIds = User::pluck('id')->toArray();

        return [
            'user_id' => ['required', Rule::in($userIds)],
            'distance' => ['required', 'numeric'],
            'from_address' => ['required', 'string', 'max:255'],
            'from_zip_code' => ['required', 'string', 'max:255'],
            'from_city' => ['required', 'string', 'max:255'],
            'to_address' => ['required', 'string', 'max:255'],
            'to_zip_code' => ['required', 'string', 'max:255'],
            'to_city' => ['required', 'string', 'max:255'],
        ];
    }

    public function withValidator(Validator $validator): void
    {
        $validator->after(function ($validator): void {
            $user = User::find($this->user_id);

            if ($user && $user->wmoBudget->current_budget < $this->distance) {
                $validator->errors()->add(
                    'distance',
                    'De bewoner heeft niet genoeg WMO budget voor deze rit',
                );
            }
        });
    }
}
