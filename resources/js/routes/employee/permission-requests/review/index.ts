import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::submit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:163
* @route '/dashboard/permission-requests/{permission_request}/review'
*/
export const submit = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/dashboard/permission-requests/{permission_request}/review',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::submit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:163
* @route '/dashboard/permission-requests/{permission_request}/review'
*/
submit.url = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { permission_request: args }
    }

    if (Array.isArray(args)) {
        args = {
            permission_request: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        permission_request: args.permission_request,
    }

    return submit.definition.url
            .replace('{permission_request}', parsedArgs.permission_request.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::submit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:163
* @route '/dashboard/permission-requests/{permission_request}/review'
*/
submit.post = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::submit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:163
* @route '/dashboard/permission-requests/{permission_request}/review'
*/
const submitForm = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::submit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:163
* @route '/dashboard/permission-requests/{permission_request}/review'
*/
submitForm.post = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(args, options),
    method: 'post',
})

submit.form = submitForm

const review = {
    submit: Object.assign(submit, submit),
}

export default review