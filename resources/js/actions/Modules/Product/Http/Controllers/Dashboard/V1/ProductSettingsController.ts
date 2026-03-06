import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductSettingsController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductSettingsController.php:12
* @route '/dashboard/products/settings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductSettingsController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductSettingsController.php:12
* @route '/dashboard/products/settings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductSettingsController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductSettingsController.php:12
* @route '/dashboard/products/settings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductSettingsController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductSettingsController.php:12
* @route '/dashboard/products/settings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductSettingsController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductSettingsController.php:19
* @route '/dashboard/products/settings'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/dashboard/products/settings',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductSettingsController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductSettingsController.php:19
* @route '/dashboard/products/settings'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductSettingsController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductSettingsController.php:19
* @route '/dashboard/products/settings'
*/
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

const ProductSettingsController = { index, update }

export default ProductSettingsController