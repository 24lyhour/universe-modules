import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::callback
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:116
* @route '/api/v1/payments/payway/callback'
*/
export const callback = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: callback.url(options),
    method: 'post',
})

callback.definition = {
    methods: ["post"],
    url: '/api/v1/payments/payway/callback',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::callback
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:116
* @route '/api/v1/payments/payway/callback'
*/
callback.url = (options?: RouteQueryOptions) => {
    return callback.definition.url + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::callback
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:116
* @route '/api/v1/payments/payway/callback'
*/
callback.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: callback.url(options),
    method: 'post',
})

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::callback
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:116
* @route '/api/v1/payments/payway/callback'
*/
const callbackForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: callback.url(options),
    method: 'post',
})

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::callback
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:116
* @route '/api/v1/payments/payway/callback'
*/
callbackForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: callback.url(options),
    method: 'post',
})

callback.form = callbackForm

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::createPurchase
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:24
* @route '/api/v1/payments/payway/create'
*/
export const createPurchase = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createPurchase.url(options),
    method: 'post',
})

createPurchase.definition = {
    methods: ["post"],
    url: '/api/v1/payments/payway/create',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::createPurchase
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:24
* @route '/api/v1/payments/payway/create'
*/
createPurchase.url = (options?: RouteQueryOptions) => {
    return createPurchase.definition.url + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::createPurchase
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:24
* @route '/api/v1/payments/payway/create'
*/
createPurchase.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createPurchase.url(options),
    method: 'post',
})

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::createPurchase
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:24
* @route '/api/v1/payments/payway/create'
*/
const createPurchaseForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: createPurchase.url(options),
    method: 'post',
})

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::createPurchase
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:24
* @route '/api/v1/payments/payway/create'
*/
createPurchaseForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: createPurchase.url(options),
    method: 'post',
})

createPurchase.form = createPurchaseForm

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::checkStatus
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:187
* @route '/api/v1/payments/payway/check/{tranId}'
*/
export const checkStatus = (args: { tranId: string | number } | [tranId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: checkStatus.url(args, options),
    method: 'get',
})

checkStatus.definition = {
    methods: ["get","head"],
    url: '/api/v1/payments/payway/check/{tranId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::checkStatus
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:187
* @route '/api/v1/payments/payway/check/{tranId}'
*/
checkStatus.url = (args: { tranId: string | number } | [tranId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { tranId: args }
    }

    if (Array.isArray(args)) {
        args = {
            tranId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        tranId: args.tranId,
    }

    return checkStatus.definition.url
            .replace('{tranId}', parsedArgs.tranId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::checkStatus
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:187
* @route '/api/v1/payments/payway/check/{tranId}'
*/
checkStatus.get = (args: { tranId: string | number } | [tranId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: checkStatus.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::checkStatus
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:187
* @route '/api/v1/payments/payway/check/{tranId}'
*/
checkStatus.head = (args: { tranId: string | number } | [tranId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: checkStatus.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::checkStatus
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:187
* @route '/api/v1/payments/payway/check/{tranId}'
*/
const checkStatusForm = (args: { tranId: string | number } | [tranId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: checkStatus.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::checkStatus
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:187
* @route '/api/v1/payments/payway/check/{tranId}'
*/
checkStatusForm.get = (args: { tranId: string | number } | [tranId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: checkStatus.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::checkStatus
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:187
* @route '/api/v1/payments/payway/check/{tranId}'
*/
checkStatusForm.head = (args: { tranId: string | number } | [tranId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: checkStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

checkStatus.form = checkStatusForm

const PayWayController = { callback, createPurchase, checkStatus }

export default PayWayController