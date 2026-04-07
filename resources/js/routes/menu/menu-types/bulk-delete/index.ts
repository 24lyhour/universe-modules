import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirm
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:357
* @route '/dashboard/menu-types/bulk-delete'
*/
export const confirm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirm.url(options),
    method: 'get',
})

confirm.definition = {
    methods: ["get","head"],
    url: '/dashboard/menu-types/bulk-delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirm
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:357
* @route '/dashboard/menu-types/bulk-delete'
*/
confirm.url = (options?: RouteQueryOptions) => {
    return confirm.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirm
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:357
* @route '/dashboard/menu-types/bulk-delete'
*/
confirm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirm.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirm
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:357
* @route '/dashboard/menu-types/bulk-delete'
*/
confirm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirm.url(options),
    method: 'head',
})

