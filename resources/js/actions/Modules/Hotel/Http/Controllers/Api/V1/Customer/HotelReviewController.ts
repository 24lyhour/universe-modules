import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelReviewController.php:16
* @route '/api/v1/hotels/{hotel}/reviews'
*/
export const index = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/hotels/{hotel}/reviews',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelReviewController.php:16
* @route '/api/v1/hotels/{hotel}/reviews'
*/
index.url = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hotel: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { hotel: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: typeof args.hotel === 'object'
        ? args.hotel.uuid
        : args.hotel,
    }

    return index.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelReviewController.php:16
* @route '/api/v1/hotels/{hotel}/reviews'
*/
index.get = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelReviewController.php:16
* @route '/api/v1/hotels/{hotel}/reviews'
*/
index.head = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelReviewController.php:16
* @route '/api/v1/hotels/{hotel}/reviews'
*/
const indexForm = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelReviewController.php:16
* @route '/api/v1/hotels/{hotel}/reviews'
*/
indexForm.get = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelReviewController.php:16
* @route '/api/v1/hotels/{hotel}/reviews'
*/
indexForm.head = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelReviewController::stats
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelReviewController.php:30
* @route '/api/v1/hotels/{hotel}/reviews/stats'
*/
export const stats = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(args, options),
    method: 'get',
})

stats.definition = {
    methods: ["get","head"],
    url: '/api/v1/hotels/{hotel}/reviews/stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelReviewController::stats
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelReviewController.php:30
* @route '/api/v1/hotels/{hotel}/reviews/stats'
*/
stats.url = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hotel: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { hotel: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: typeof args.hotel === 'object'
        ? args.hotel.uuid
        : args.hotel,
    }

    return stats.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelReviewController::stats
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelReviewController.php:30
* @route '/api/v1/hotels/{hotel}/reviews/stats'
*/
stats.get = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelReviewController::stats
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelReviewController.php:30
* @route '/api/v1/hotels/{hotel}/reviews/stats'
*/
stats.head = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stats.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelReviewController::stats
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelReviewController.php:30
* @route '/api/v1/hotels/{hotel}/reviews/stats'
*/
const statsForm = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelReviewController::stats
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelReviewController.php:30
* @route '/api/v1/hotels/{hotel}/reviews/stats'
*/
statsForm.get = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelReviewController::stats
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelReviewController.php:30
* @route '/api/v1/hotels/{hotel}/reviews/stats'
*/
statsForm.head = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

stats.form = statsForm

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelReviewController::store
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelReviewController.php:54
* @route '/api/v1/hotels/{hotel}/reviews'
*/
export const store = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/hotels/{hotel}/reviews',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelReviewController::store
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelReviewController.php:54
* @route '/api/v1/hotels/{hotel}/reviews'
*/
store.url = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hotel: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { hotel: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: typeof args.hotel === 'object'
        ? args.hotel.uuid
        : args.hotel,
    }

    return store.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelReviewController::store
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelReviewController.php:54
* @route '/api/v1/hotels/{hotel}/reviews'
*/
store.post = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelReviewController::store
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelReviewController.php:54
* @route '/api/v1/hotels/{hotel}/reviews'
*/
const storeForm = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelReviewController::store
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelReviewController.php:54
* @route '/api/v1/hotels/{hotel}/reviews'
*/
storeForm.post = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

const HotelReviewController = { index, stats, store }

export default HotelReviewController