import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::preview
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:405
* @route '/dashboard/products/import/preview'
*/
export const preview = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

preview.definition = {
    methods: ["post"],
    url: '/dashboard/products/import/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::preview
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:405
* @route '/dashboard/products/import/preview'
*/
preview.url = (options?: RouteQueryOptions) => {
    return preview.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::preview
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:405
* @route '/dashboard/products/import/preview'
*/
preview.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::preview
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:405
* @route '/dashboard/products/import/preview'
*/
const previewForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: preview.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::preview
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:405
* @route '/dashboard/products/import/preview'
*/
previewForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: preview.url(options),
    method: 'post',
})

preview.form = previewForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::process
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:438
* @route '/dashboard/products/import'
*/
export const process = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(options),
    method: 'post',
})

process.definition = {
    methods: ["post"],
    url: '/dashboard/products/import',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::process
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:438
* @route '/dashboard/products/import'
*/
process.url = (options?: RouteQueryOptions) => {
    return process.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::process
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:438
* @route '/dashboard/products/import'
*/
process.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::process
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:438
* @route '/dashboard/products/import'
*/
const processForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: process.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::process
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:438
* @route '/dashboard/products/import'
*/
processForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: process.url(options),
    method: 'post',
})

process.form = processForm

const importMethod = {
    preview: Object.assign(preview, preview),
    process: Object.assign(process, process),
}

export default importMethod