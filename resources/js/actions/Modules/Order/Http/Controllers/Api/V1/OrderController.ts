import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::index
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:22
* @route '/api/v1/customer/orders'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::index
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:22
* @route '/api/v1/customer/orders'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::index
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:22
* @route '/api/v1/customer/orders'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::index
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:22
* @route '/api/v1/customer/orders'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::show
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:52
* @route '/api/v1/customer/orders/{order}'
*/
export const show = (args: { order: string | { uuid: string } } | [order: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/orders/{order}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::show
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:52
* @route '/api/v1/customer/orders/{order}'
*/
show.url = (args: { order: string | { uuid: string } } | [order: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { order: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.uuid
        : args.order,
    }

    return show.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::show
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:52
* @route '/api/v1/customer/orders/{order}'
*/
show.get = (args: { order: string | { uuid: string } } | [order: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::show
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:52
* @route '/api/v1/customer/orders/{order}'
*/
show.head = (args: { order: string | { uuid: string } } | [order: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:70
* @route '/api/v1/customer/orders'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/customer/orders',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:70
* @route '/api/v1/customer/orders'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:70
* @route '/api/v1/customer/orders'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::checkDelivery
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:263
* @route '/api/v1/customer/orders/check-delivery'
*/
export const checkDelivery = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkDelivery.url(options),
    method: 'post',
})

checkDelivery.definition = {
    methods: ["post"],
    url: '/api/v1/customer/orders/check-delivery',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::checkDelivery
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:263
* @route '/api/v1/customer/orders/check-delivery'
*/
checkDelivery.url = (options?: RouteQueryOptions) => {
    return checkDelivery.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::checkDelivery
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:263
* @route '/api/v1/customer/orders/check-delivery'
*/
checkDelivery.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkDelivery.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::cancel
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:299
* @route '/api/v1/customer/orders/{order}/cancel'
*/
export const cancel = (args: { order: string | { uuid: string } } | [order: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

cancel.definition = {
    methods: ["post"],
    url: '/api/v1/customer/orders/{order}/cancel',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::cancel
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:299
* @route '/api/v1/customer/orders/{order}/cancel'
*/
cancel.url = (args: { order: string | { uuid: string } } | [order: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { order: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.uuid
        : args.order,
    }

    return cancel.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::cancel
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:299
* @route '/api/v1/customer/orders/{order}/cancel'
*/
cancel.post = (args: { order: string | { uuid: string } } | [order: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

const OrderController = { index, show, store, checkDelivery, cancel }

export default OrderController