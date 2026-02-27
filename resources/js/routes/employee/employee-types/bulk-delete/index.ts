import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::confirm
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:146
* @route '/dashboard/employee-types/bulk-delete'
*/
export const confirm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirm.url(options),
    method: 'get',
})

confirm.definition = {
    methods: ["get","head"],
    url: '/dashboard/employee-types/bulk-delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::confirm
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:146
* @route '/dashboard/employee-types/bulk-delete'
*/
confirm.url = (options?: RouteQueryOptions) => {
    return confirm.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::confirm
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:146
* @route '/dashboard/employee-types/bulk-delete'
*/
confirm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirm.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::confirm
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:146
* @route '/dashboard/employee-types/bulk-delete'
*/
confirm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirm.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::confirm
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:146
* @route '/dashboard/employee-types/bulk-delete'
*/
const confirmForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirm.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::confirm
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:146
* @route '/dashboard/employee-types/bulk-delete'
*/
confirmForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirm.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::confirm
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:146
* @route '/dashboard/employee-types/bulk-delete'
*/
confirmForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirm.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

confirm.form = confirmForm
