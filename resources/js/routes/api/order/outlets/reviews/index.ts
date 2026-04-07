import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::summary
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:67
* @route '/api/v1/outlets/{outletId}/reviews/summary'
*/
export const summary = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: summary.url(args, options),
    method: 'get',
})

summary.definition = {
    methods: ["get","head"],
    url: '/api/v1/outlets/{outletId}/reviews/summary',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::summary
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:67
* @route '/api/v1/outlets/{outletId}/reviews/summary'
*/
summary.url = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return summary.definition.url
            .replace('{outletId}', parsedArgs.outletId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::summary
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:67
* @route '/api/v1/outlets/{outletId}/reviews/summary'
*/
summary.get = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: summary.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::summary
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:67
* @route '/api/v1/outlets/{outletId}/reviews/summary'
*/
summary.head = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: summary.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::summary
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:67
* @route '/api/v1/outlets/{outletId}/reviews/summary'
*/
const summaryForm = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: summary.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::summary
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:67
* @route '/api/v1/outlets/{outletId}/reviews/summary'
*/
summaryForm.get = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: summary.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::summary
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:67
* @route '/api/v1/outlets/{outletId}/reviews/summary'
*/
summaryForm.head = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: summary.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

summary.form = summaryForm

const reviews = {
    summary: Object.assign(summary, summary),
}

export default reviews