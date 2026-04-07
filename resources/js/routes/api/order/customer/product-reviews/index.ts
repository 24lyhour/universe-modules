import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:87
* @route '/api/v1/customer/reviews'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/customer/reviews',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:87
* @route '/api/v1/customer/reviews'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:87
* @route '/api/v1/customer/reviews'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::update
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:108
* @route '/api/v1/customer/reviews/{id}'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/v1/customer/reviews/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::update
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:108
* @route '/api/v1/customer/reviews/{id}'
*/
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::update
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:108
* @route '/api/v1/customer/reviews/{id}'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:127
* @route '/api/v1/customer/reviews/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/customer/reviews/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:127
* @route '/api/v1/customer/reviews/{id}'
*/
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:127
* @route '/api/v1/customer/reviews/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const productReviews = {
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default productReviews