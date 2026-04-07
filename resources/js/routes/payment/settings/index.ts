import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\PaymentSettingsController::index
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/PaymentSettingsController.php:19
* @route '/dashboard/payment-settings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/payment-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\PaymentSettingsController::index
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/PaymentSettingsController.php:19
* @route '/dashboard/payment-settings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\PaymentSettingsController::index
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/PaymentSettingsController.php:19
* @route '/dashboard/payment-settings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\PaymentSettingsController::index
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/PaymentSettingsController.php:19
* @route '/dashboard/payment-settings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\PaymentSettingsController::update
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/PaymentSettingsController.php:31
* @route '/dashboard/payment-settings'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/payment-settings',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\PaymentSettingsController::update
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/PaymentSettingsController.php:31
* @route '/dashboard/payment-settings'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\PaymentSettingsController::update
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/PaymentSettingsController.php:31
* @route '/dashboard/payment-settings'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

const settings = {
    index: Object.assign(index, index),
    update: Object.assign(update, update),
}

export default settings