<?php

declare(strict_types=1);

namespace App\Http\Requests\Ride;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;

class StoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'user_id' => ['required', 'integer', 'exists:users,id'],
            'distance' => ['required', 'numeric', 'between:0,9999999.999'],
            'from_address' => ['required', 'string', 'max:255'],
            'from_zipcode' => ['required', 'string', 'max:255'],
            'from_city' => ['required', 'string', 'max:255'],
            'to_address' => ['required', 'string', 'max:255'],
            'to_zipcode' => ['required', 'string', 'max:255'],
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

    public function bodyParameters(): array
    {
        return [
            'user_id' => [
                'example' => 5,
            ],
            'distance' => [
                'description' => 'The length of the ride in kilometers. Can have up to 3 decimal places.',
                'example' => '25.125',
            ],
            'from_address' => [
                'description' => trans('scribe.attributes.from_address'),
                'example' => trans('scribe.example.address'),
            ],
            'from_zipcode' => [
                'description' => trans('scribe.attributes.from_zipcode'),
                'example' => trans('scribe.example.zipcode'),
            ],
            'from_city' => [
                'description' => trans('scribe.attributes.from_city'),
                'example' => trans('scribe.example.city'),
            ],
            'from_address' => [
                'description' => trans('scribe.attributes.from_address'),
                'example' => trans('scribe.example.address'),
            ],
            'to_address' => [
                'description' => trans('scribe.attributes.to_address'),
                'example' => trans('scribe.example.address'),
            ],
            'to_zipcode' => [
                'description' => trans('scribe.attributes.to_zipcode'),
                'example' => trans('scribe.example.zipcode'),
            ],
            'to_city' => [
                'description' => trans('scribe.attributes.to_city'),
                'example' => trans('scribe.example.city'),
            ],
        ];
    }
}
