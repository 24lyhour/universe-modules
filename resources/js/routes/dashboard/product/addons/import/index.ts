import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::preview
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:112
* @route '/dashboard/products/addons/import/preview'
*/
export const preview = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

preview.definition = {
    methods: ["post"],
    url: '/dashboard/products/addons/import/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::preview
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:112
* @route '/dashboard/products/addons/import/preview'
*/
preview.url = (options?: RouteQueryOptions) => {
    return preview.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::preview
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:112
* @route '/dashboard/products/addons/import/preview'
*/
preview.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::process
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:145
* @route '/dashboard/products/addons/import'
*/
export const process = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(options),
    method: 'post',
})

process.definition = {
    methods: ["post"],
    url: '/dashboard/products/addons/import',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::process
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:145
* @route '/dashboard/products/addons/import'
*/
process.url = (options?: RouteQueryOptions) => {
    return process.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::process
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:145
* @route '/dashboard/products/addons/import'
*/
process.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(options),
    method: 'post',
})

const importMethod = {
    preview: Object.assign(preview, preview),
    process: Object.assign(process, process),
}

export default importMethod