import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::show
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:51
* @route '/api/v1/customer/orders/{order}'
*/
export const show = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/orders/{order}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::show
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:51
* @route '/api/v1/customer/orders/{order}'
*/
show.url = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:51
* @route '/api/v1/customer/orders/{order}'
*/
show.get = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::show
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:51
* @route '/api/v1/customer/orders/{order}'
*/
show.head = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::show
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:51
* @route '/api/v1/customer/orders/{order}'
*/
const showForm = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::show
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:51
* @route '/api/v1/customer/orders/{order}'
*/
showForm.get = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::show
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:51
* @route '/api/v1/customer/orders/{order}'
*/
showForm.head = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:69
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
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:69
* @route '/api/v1/customer/orders'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:69
* @route '/api/v1/customer/orders'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:69
* @route '/api/v1/customer/orders'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:69
* @route '/api/v1/customer/orders'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::checkDelivery
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:163
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
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:163
* @route '/api/v1/customer/orders/check-delivery'
*/
checkDelivery.url = (options?: RouteQueryOptions) => {
    return checkDelivery.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::checkDelivery
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:163
* @route '/api/v1/customer/orders/check-delivery'
*/
checkDelivery.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkDelivery.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::checkDelivery
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:163
* @route '/api/v1/customer/orders/check-delivery'
*/
const checkDeliveryForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: checkDelivery.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::checkDelivery
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:163
* @route '/api/v1/customer/orders/check-delivery'
*/
checkDeliveryForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: checkDelivery.url(options),
    method: 'post',
})

checkDelivery.form = checkDeliveryForm

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::cancel
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:199
* @route '/api/v1/customer/orders/{order}/cancel'
*/
export const cancel = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

cancel.definition = {
    methods: ["post"],
    url: '/api/v1/customer/orders/{order}/cancel',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::cancel
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:199
* @route '/api/v1/customer/orders/{order}/cancel'
*/
cancel.url = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:199
* @route '/api/v1/customer/orders/{order}/cancel'
*/
cancel.post = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::cancel
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:199
* @route '/api/v1/customer/orders/{order}/cancel'
*/
const cancelForm = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::cancel
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:199
* @route '/api/v1/customer/orders/{order}/cancel'
*/
cancelForm.post = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, options),
    method: 'post',
})

cancel.form = cancelForm

const orders = {
    show: Object.assign(show, show),
    store: Object.assign(store, store),
    checkDelivery: Object.assign(checkDelivery, checkDelivery),
    cancel: Object.assign(cancel, cancel),
}

export default orders