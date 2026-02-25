import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
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

const settings = {
    update: Object.assign(update, update),
}

export default settings