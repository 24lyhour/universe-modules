import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
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
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::create
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:24
* @route '/api/v1/payments/payway/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(options),
    method: 'post',
})

create.definition = {
    methods: ["post"],
    url: '/api/v1/payments/payway/create',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::create
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:24
* @route '/api/v1/payments/payway/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::create
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:24
* @route '/api/v1/payments/payway/create'
*/
create.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create.url(options),
    method: 'post',
})

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::check
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:187
* @route '/api/v1/payments/payway/check/{tranId}'
*/
export const check = (args: { tranId: string | number } | [tranId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: check.url(args, options),
    method: 'get',
})

check.definition = {
    methods: ["get","head"],
    url: '/api/v1/payments/payway/check/{tranId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::check
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:187
* @route '/api/v1/payments/payway/check/{tranId}'
*/
check.url = (args: { tranId: string | number } | [tranId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return check.definition.url
            .replace('{tranId}', parsedArgs.tranId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::check
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:187
* @route '/api/v1/payments/payway/check/{tranId}'
*/
check.get = (args: { tranId: string | number } | [tranId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: check.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\Api\V1\PayWayController::check
* @see Modules/Payment/app/Http/Controllers/Api/V1/PayWayController.php:187
* @route '/api/v1/payments/payway/check/{tranId}'
*/
check.head = (args: { tranId: string | number } | [tranId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: check.url(args, options),
    method: 'head',
})

const payway = {
    callback: Object.assign(callback, callback),
    create: Object.assign(create, create),
    check: Object.assign(check, check),
}

export default payway