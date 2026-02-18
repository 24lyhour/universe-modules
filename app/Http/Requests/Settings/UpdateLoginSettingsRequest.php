<?php

namespace App\Http\Requests\Settings;

use Illuminate\Foundation\Http\FormRequest;

class UpdateLoginSettingsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'app_name' => ['nullable', 'string', 'max:50'],
            'title' => ['required', 'string', 'max:100'],
            'subtitle' => ['required', 'string', 'max:200'],
            'image' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif,webp', 'max:5120'],
            'image_url' => ['nullable', 'string'],
            'logo' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif,webp,svg', 'max:2048'],
            'logo_url' => ['nullable', 'string'],
            'quote_text' => ['nullable', 'string', 'max:500'],
            'quote_author' => ['nullable', 'string', 'max:100'],
            'quote_company' => ['nullable', 'string', 'max:100'],
            'show_social_login' => ['boolean'],
            'show_remember_me' => ['boolean'],
        ];
    }

    /**
     * Get custom messages for validator errors.
     */
    public function messages(): array
    {
        return [
            'title.required' => 'The title is required.',
            'subtitle.required' => 'The subtitle is required.',
            'image.image' => 'The file must be an image.',
            'image.max' => 'The image must not exceed 5MB.',
            'logo.image' => 'The logo must be an image.',
            'logo.max' => 'The logo must not exceed 2MB.',
        ];
    }
}
