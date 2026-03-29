import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::summary
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:67
* @route '/api/v1/products/{productId}/reviews/summary'
*/
export const summary = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: summary.url(args, options),
    method: 'get',
})

summary.definition = {
    methods: ["get","head"],
    url: '/api/v1/products/{productId}/reviews/summary',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::summary
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:67
* @route '/api/v1/products/{productId}/reviews/summary'
*/
summary.url = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return summary.definition.url
            .replace('{productId}', parsedArgs.productId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::summary
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:67
* @route '/api/v1/products/{productId}/reviews/summary'
*/
summary.get = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: summary.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::summary
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:67
* @route '/api/v1/products/{productId}/reviews/summary'
*/
summary.head = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: summary.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::summary
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:67
* @route '/api/v1/products/{productId}/reviews/summary'
*/
const summaryForm = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: summary.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::summary
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:67
* @route '/api/v1/products/{productId}/reviews/summary'
*/
summaryForm.get = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: summary.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::summary
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:67
* @route '/api/v1/products/{productId}/reviews/summary'
*/
summaryForm.head = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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