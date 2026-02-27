import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::confirm
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:133
* @route '/dashboard/equipment/bulk-delete'
*/
export const confirm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirm.url(options),
    method: 'get',
})

confirm.definition = {
    methods: ["get","head"],
    url: '/dashboard/equipment/bulk-delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::confirm
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:133
* @route '/dashboard/equipment/bulk-delete'
*/
confirm.url = (options?: RouteQueryOptions) => {
    return confirm.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::confirm
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:133
* @route '/dashboard/equipment/bulk-delete'
*/
confirm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirm.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::confirm
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:133
* @route '/dashboard/equipment/bulk-delete'
*/
confirm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirm.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::confirm
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:133
* @route '/dashboard/equipment/bulk-delete'
*/
const confirmForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirm.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::confirm
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:133
* @route '/dashboard/equipment/bulk-delete'
*/
confirmForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirm.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::confirm
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:133
* @route '/dashboard/equipment/bulk-delete'
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
