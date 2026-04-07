import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
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
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\PaymentSettingsController::index
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/PaymentSettingsController.php:19
* @route '/dashboard/payment-settings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\PaymentSettingsController::index
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/PaymentSettingsController.php:19
* @route '/dashboard/payment-settings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\PaymentSettingsController::index
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/PaymentSettingsController.php:19
* @route '/dashboard/payment-settings'
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

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\PaymentSettingsController::update
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/PaymentSettingsController.php:31
* @route '/dashboard/payment-settings'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\PaymentSettingsController::update
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/PaymentSettingsController.php:31
* @route '/dashboard/payment-settings'
*/
updateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const PaymentSettingsController = { index, update }

export default PaymentSettingsController