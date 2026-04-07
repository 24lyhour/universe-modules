import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\BrandController::confirm
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/BrandController.php:121
* @route '/dashboard/brands/bulk-delete'
*/
export const confirm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirm.url(options),
    method: 'get',
})

confirm.definition = {
    methods: ["get","head"],
    url: '/dashboard/brands/bulk-delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\BrandController::confirm
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/BrandController.php:121
* @route '/dashboard/brands/bulk-delete'
*/
confirm.url = (options?: RouteQueryOptions) => {
    return confirm.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\BrandController::confirm
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/BrandController.php:121
* @route '/dashboard/brands/bulk-delete'
*/
confirm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirm.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\BrandController::confirm
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/BrandController.php:121
* @route '/dashboard/brands/bulk-delete'
*/
confirm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirm.url(options),
    method: 'head',
})

