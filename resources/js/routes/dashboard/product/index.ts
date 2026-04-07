import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
import settings69f00b from './settings'
import attributes from './attributes'
import addons from './addons'
import variants from './variants'
import upsells from './upsells'
/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductSettingsController::settings
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductSettingsController.php:12
* @route '/dashboard/products/settings'
*/
export const settings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

settings.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductSettingsController::settings
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductSettingsController.php:12
* @route '/dashboard/products/settings'
*/
settings.url = (options?: RouteQueryOptions) => {
    return settings.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductSettingsController::settings
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductSettingsController.php:12
* @route '/dashboard/products/settings'
*/
settings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settings.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductSettingsController::settings
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductSettingsController.php:12
* @route '/dashboard/products/settings'
*/
settings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settings.url(options),
    method: 'head',
})

const product = {
    settings: Object.assign(settings, settings69f00b),
    attributes: Object.assign(attributes, attributes),
    addons: Object.assign(addons, addons),
    variants: Object.assign(variants, variants),
    upsells: Object.assign(upsells, upsells),
}

export default product