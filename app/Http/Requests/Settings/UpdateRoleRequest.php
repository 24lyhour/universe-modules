<?php

namespace App\Http\Requests\Settings;

use App\Services\RoleService;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRoleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $role = $this->route('role');
        $roleService = app(RoleService::class);

        // Prevent non-super-admin from updating super-admin role
        if ($role->name === 'super-admin' && !$roleService->isSuperAdmin()) {
            return false;
        }

        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        $role = $this->route('role');

        // Prevent editing super-admin role name
        $nameRules = $role->name === 'super-admin'
            ? ['sometimes']
            : ['required', 'string', 'max:255', Rule::unique('roles', 'name')->ignore($role->id)];

        return [
            'name' => $nameRules,
            'permissions' => ['array'],
            'permissions.*' => ['exists:permissions,id'],
        ];
    }

    /**
     * Get custom messages for validator errors.
     */
    public function messages(): array
    {
        return [
            'name.required' => 'The role name is required.',
            'name.unique' => 'A role with this name already exists.',
            'name.max' => 'The role name must not exceed 255 characters.',
            'permissions.*.exists' => 'One or more selected permissions are invalid.',
        ];
    }
}
