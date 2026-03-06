import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::confirm
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:152
* @route '/dashboard/programs/bulk-delete'
*/
export const confirm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirm.url(options),
    method: 'get',
})

confirm.definition = {
    methods: ["get","head"],
    url: '/dashboard/programs/bulk-delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::confirm
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:152
* @route '/dashboard/programs/bulk-delete'
*/
confirm.url = (options?: RouteQueryOptions) => {
    return confirm.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::confirm
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:152
* @route '/dashboard/programs/bulk-delete'
*/
confirm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirm.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::confirm
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:152
* @route '/dashboard/programs/bulk-delete'
*/
confirm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirm.url(options),
    method: 'head',
})

