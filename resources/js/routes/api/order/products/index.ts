import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
import reviews83e781 from './reviews'
/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::reviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:43
* @route '/api/v1/products/{productId}/reviews'
*/
export const reviews = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reviews.url(args, options),
    method: 'get',
})

reviews.definition = {
    methods: ["get","head"],
    url: '/api/v1/products/{productId}/reviews',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::reviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:43
* @route '/api/v1/products/{productId}/reviews'
*/
reviews.url = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productId: args }
    }

    if (Array.isArray(args)) {
        args = {
            productId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        productId: args.productId,
    }

    return reviews.definition.url
            .replace('{productId}', parsedArgs.productId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::reviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:43
* @route '/api/v1/products/{productId}/reviews'
*/
reviews.get = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reviews.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::reviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:43
* @route '/api/v1/products/{productId}/reviews'
*/
reviews.head = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: reviews.url(args, options),
    method: 'head',
})

const products = {
    reviews: Object.assign(reviews, reviews83e781),
}

export default products