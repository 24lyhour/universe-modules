import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::helpful
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:149
* @route '/api/v1/outlet-reviews/{id}/helpful'
*/
export const helpful = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: helpful.url(args, options),
    method: 'post',
})

helpful.definition = {
    methods: ["post"],
    url: '/api/v1/outlet-reviews/{id}/helpful',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::helpful
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:149
* @route '/api/v1/outlet-reviews/{id}/helpful'
*/
helpful.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return helpful.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::helpful
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:149
* @route '/api/v1/outlet-reviews/{id}/helpful'
*/
helpful.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: helpful.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::helpful
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:149
* @route '/api/v1/outlet-reviews/{id}/helpful'
*/
const helpfulForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: helpful.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::helpful
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:149
* @route '/api/v1/outlet-reviews/{id}/helpful'
*/
helpfulForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: helpful.url(args, options),
    method: 'post',
})

helpful.form = helpfulForm

const outletReviews = {
    helpful: Object.assign(helpful, helpful),
}

export default outletReviews