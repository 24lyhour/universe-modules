import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:63
* @route '/api/v1/customer/cart'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/customer/cart',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:63
* @route '/api/v1/customer/cart'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:63
* @route '/api/v1/customer/cart'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::update
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:98
* @route '/api/v1/customer/cart/{itemId}'
*/
export const update = (args: { itemId: string | number } | [itemId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/v1/customer/cart/{itemId}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::update
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:98
* @route '/api/v1/customer/cart/{itemId}'
*/
update.url = (args: { itemId: string | number } | [itemId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { itemId: args }
    }

    if (Array.isArray(args)) {
        args = {
            itemId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        itemId: args.itemId,
    }

    return update.definition.url
            .replace('{itemId}', parsedArgs.itemId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::update
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:98
* @route '/api/v1/customer/cart/{itemId}'
*/
update.put = (args: { itemId: string | number } | [itemId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::destroy
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:128
* @route '/api/v1/customer/cart/{itemId}'
*/
export const destroy = (args: { itemId: string | number } | [itemId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/customer/cart/{itemId}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::destroy
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:128
* @route '/api/v1/customer/cart/{itemId}'
*/
destroy.url = (args: { itemId: string | number } | [itemId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { itemId: args }
    }

    if (Array.isArray(args)) {
        args = {
            itemId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        itemId: args.itemId,
    }

    return destroy.definition.url
            .replace('{itemId}', parsedArgs.itemId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::destroy
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:128
* @route '/api/v1/customer/cart/{itemId}'
*/
destroy.delete = (args: { itemId: string | number } | [itemId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::clear
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:144
* @route '/api/v1/customer/cart'
*/
export const clear = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: clear.url(options),
    method: 'delete',
})

clear.definition = {
    methods: ["delete"],
    url: '/api/v1/customer/cart',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::clear
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:144
* @route '/api/v1/customer/cart'
*/
clear.url = (options?: RouteQueryOptions) => {
    return clear.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::clear
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:144
* @route '/api/v1/customer/cart'
*/
clear.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: clear.url(options),
    method: 'delete',
})

const cart = {
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    clear: Object.assign(clear, clear),
}

export default cart