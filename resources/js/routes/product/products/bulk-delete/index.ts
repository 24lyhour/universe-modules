import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::confirm
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:228
* @route '/dashboard/products/bulk-delete'
*/
export const confirm = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirm.url(options),
    method: 'get',
})

confirm.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/bulk-delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::confirm
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:228
* @route '/dashboard/products/bulk-delete'
*/
confirm.url = (options?: RouteQueryOptions) => {
    return confirm.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::confirm
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:228
* @route '/dashboard/products/bulk-delete'
*/
confirm.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirm.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::confirm
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:228
* @route '/dashboard/products/bulk-delete'
*/
confirm.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirm.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::confirm
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:228
* @route '/dashboard/products/bulk-delete'
*/
const confirmForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirm.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::confirm
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:228
* @route '/dashboard/products/bulk-delete'
*/
confirmForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirm.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::confirm
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:228
* @route '/dashboard/products/bulk-delete'
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
