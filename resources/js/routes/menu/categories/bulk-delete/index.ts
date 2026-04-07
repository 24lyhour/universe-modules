import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::confirm
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:373
* @route '/dashboard/categories/bulk-delete'
*/
export const confirm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirm.url(options),
    method: 'get',
})

confirm.definition = {
    methods: ["get","head"],
    url: '/dashboard/categories/bulk-delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::confirm
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:373
* @route '/dashboard/categories/bulk-delete'
*/
confirm.url = (options?: RouteQueryOptions) => {
    return confirm.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::confirm
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:373
* @route '/dashboard/categories/bulk-delete'
*/
confirm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirm.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::confirm
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:373
* @route '/dashboard/categories/bulk-delete'
*/
confirm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirm.url(options),
    method: 'head',
})

