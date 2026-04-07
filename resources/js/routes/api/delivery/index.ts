import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/deliveries',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::store
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/deliveries',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::store
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::store
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
export const show = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/deliveries/{delivery}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
show.url = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { delivery: args }
    }

    if (Array.isArray(args)) {
        args = {
            delivery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        delivery: args.delivery,
    }

    return show.definition.url
            .replace('{delivery}', parsedArgs.delivery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
show.get = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
show.head = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
export const update = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/deliveries/{delivery}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
update.url = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { delivery: args }
    }

    if (Array.isArray(args)) {
        args = {
            delivery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        delivery: args.delivery,
    }

    return update.definition.url
            .replace('{delivery}', parsedArgs.delivery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
update.put = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
update.patch = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::destroy
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
export const destroy = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/deliveries/{delivery}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::destroy
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
destroy.url = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { delivery: args }
    }

    if (Array.isArray(args)) {
        args = {
            delivery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        delivery: args.delivery,
    }

    return destroy.definition.url
            .replace('{delivery}', parsedArgs.delivery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::destroy
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
destroy.delete = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const delivery = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default delivery