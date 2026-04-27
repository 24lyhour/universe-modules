import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::index
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:24
* @route '/api/v1/customer/cart'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/cart',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::index
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:24
* @route '/api/v1/customer/cart'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::index
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:24
* @route '/api/v1/customer/cart'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::index
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:24
* @route '/api/v1/customer/cart'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::index
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:24
* @route '/api/v1/customer/cart'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::index
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:24
* @route '/api/v1/customer/cart'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::index
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:24
* @route '/api/v1/customer/cart'
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
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:70
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
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:70
* @route '/api/v1/customer/cart'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:70
* @route '/api/v1/customer/cart'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:70
* @route '/api/v1/customer/cart'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:70
* @route '/api/v1/customer/cart'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::update
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:105
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
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:105
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
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:105
* @route '/api/v1/customer/cart/{itemId}'
*/
update.put = (args: { itemId: string | number } | [itemId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::update
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:105
* @route '/api/v1/customer/cart/{itemId}'
*/
const updateForm = (args: { itemId: string | number } | [itemId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::update
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:105
* @route '/api/v1/customer/cart/{itemId}'
*/
updateForm.put = (args: { itemId: string | number } | [itemId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::destroy
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:135
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
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:135
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
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:135
* @route '/api/v1/customer/cart/{itemId}'
*/
destroy.delete = (args: { itemId: string | number } | [itemId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::destroy
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:135
* @route '/api/v1/customer/cart/{itemId}'
*/
const destroyForm = (args: { itemId: string | number } | [itemId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::destroy
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:135
* @route '/api/v1/customer/cart/{itemId}'
*/
destroyForm.delete = (args: { itemId: string | number } | [itemId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::clear
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:151
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
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:151
* @route '/api/v1/customer/cart'
*/
clear.url = (options?: RouteQueryOptions) => {
    return clear.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::clear
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:151
* @route '/api/v1/customer/cart'
*/
clear.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: clear.url(options),
    method: 'delete',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::clear
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:151
* @route '/api/v1/customer/cart'
*/
const clearForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: clear.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::clear
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:151
* @route '/api/v1/customer/cart'
*/
clearForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: clear.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

clear.form = clearForm

const CartController = { index, store, update, destroy, clear }

export default CartController