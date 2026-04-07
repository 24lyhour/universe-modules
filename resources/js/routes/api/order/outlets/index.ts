import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
import reviews83e781 from './reviews'
/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::reviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:43
* @route '/api/v1/outlets/{outletId}/reviews'
*/
export const reviews = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reviews.url(args, options),
    method: 'get',
})

reviews.definition = {
    methods: ["get","head"],
    url: '/api/v1/outlets/{outletId}/reviews',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::reviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:43
* @route '/api/v1/outlets/{outletId}/reviews'
*/
reviews.url = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outletId: args }
    }

    if (Array.isArray(args)) {
        args = {
            outletId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outletId: args.outletId,
    }

    return reviews.definition.url
            .replace('{outletId}', parsedArgs.outletId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::reviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:43
* @route '/api/v1/outlets/{outletId}/reviews'
*/
reviews.get = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reviews.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::reviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:43
* @route '/api/v1/outlets/{outletId}/reviews'
*/
reviews.head = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: reviews.url(args, options),
    method: 'head',
})

const outlets = {
    reviews: Object.assign(reviews, reviews83e781),
}

export default outlets