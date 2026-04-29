import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductSettingsController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductSettingsController.php:12
* @route '/dashboard/products/settings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductSettingsController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductSettingsController.php:12
* @route '/dashboard/products/settings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductSettingsController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductSettingsController.php:12
* @route '/dashboard/products/settings'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

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

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductSettingsController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductSettingsController.php:19
* @route '/dashboard/products/settings'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductSettingsController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductSettingsController.php:19
* @route '/dashboard/products/settings'
*/
updateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(options),
    method: 'post',
})

update.form = updateForm

const ProductSettingsController = { index, update }

export default ProductSettingsController