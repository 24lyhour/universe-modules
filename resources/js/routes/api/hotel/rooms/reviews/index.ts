import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\RoomReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/RoomReviewController.php:16
* @route '/api/v1/hotels/rooms/{room}/reviews'
*/
export const index = (args: { room: string | number | { uuid: string | number } } | [room: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/hotels/rooms/{room}/reviews',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\RoomReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/RoomReviewController.php:16
* @route '/api/v1/hotels/rooms/{room}/reviews'
*/
index.url = (args: { room: string | number | { uuid: string | number } } | [room: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { room: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { room: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            room: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        room: typeof args.room === 'object'
        ? args.room.uuid
        : args.room,
    }

    return index.definition.url
            .replace('{room}', parsedArgs.room.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\RoomReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/RoomReviewController.php:16
* @route '/api/v1/hotels/rooms/{room}/reviews'
*/
index.get = (args: { room: string | number | { uuid: string | number } } | [room: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\RoomReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/RoomReviewController.php:16
* @route '/api/v1/hotels/rooms/{room}/reviews'
*/
index.head = (args: { room: string | number | { uuid: string | number } } | [room: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\RoomReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/RoomReviewController.php:16
* @route '/api/v1/hotels/rooms/{room}/reviews'
*/
const indexForm = (args: { room: string | number | { uuid: string | number } } | [room: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\RoomReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/RoomReviewController.php:16
* @route '/api/v1/hotels/rooms/{room}/reviews'
*/
indexForm.get = (args: { room: string | number | { uuid: string | number } } | [room: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\RoomReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/RoomReviewController.php:16
* @route '/api/v1/hotels/rooms/{room}/reviews'
*/
indexForm.head = (args: { room: string | number | { uuid: string | number } } | [room: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\RoomReviewController::stats
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/RoomReviewController.php:30
* @route '/api/v1/hotels/rooms/{room}/reviews/stats'
*/
export const stats = (args: { room: string | number | { uuid: string | number } } | [room: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(args, options),
    method: 'get',
})

stats.definition = {
    methods: ["get","head"],
    url: '/api/v1/hotels/rooms/{room}/reviews/stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\RoomReviewController::stats
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/RoomReviewController.php:30
* @route '/api/v1/hotels/rooms/{room}/reviews/stats'
*/
stats.url = (args: { room: string | number | { uuid: string | number } } | [room: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { room: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { room: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            room: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        room: typeof args.room === 'object'
        ? args.room.uuid
        : args.room,
    }

    return stats.definition.url
            .replace('{room}', parsedArgs.room.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\RoomReviewController::stats
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/RoomReviewController.php:30
* @route '/api/v1/hotels/rooms/{room}/reviews/stats'
*/
stats.get = (args: { room: string | number | { uuid: string | number } } | [room: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\RoomReviewController::stats
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/RoomReviewController.php:30
* @route '/api/v1/hotels/rooms/{room}/reviews/stats'
*/
stats.head = (args: { room: string | number | { uuid: string | number } } | [room: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stats.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\RoomReviewController::stats
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/RoomReviewController.php:30
* @route '/api/v1/hotels/rooms/{room}/reviews/stats'
*/
const statsForm = (args: { room: string | number | { uuid: string | number } } | [room: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\RoomReviewController::stats
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/RoomReviewController.php:30
* @route '/api/v1/hotels/rooms/{room}/reviews/stats'
*/
statsForm.get = (args: { room: string | number | { uuid: string | number } } | [room: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\RoomReviewController::stats
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/RoomReviewController.php:30
* @route '/api/v1/hotels/rooms/{room}/reviews/stats'
*/
statsForm.head = (args: { room: string | number | { uuid: string | number } } | [room: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\RoomReviewController::store
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/RoomReviewController.php:54
* @route '/api/v1/hotels/rooms/{room}/reviews'
*/
export const store = (args: { room: string | number | { uuid: string | number } } | [room: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/hotels/rooms/{room}/reviews',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\RoomReviewController::store
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/RoomReviewController.php:54
* @route '/api/v1/hotels/rooms/{room}/reviews'
*/
store.url = (args: { room: string | number | { uuid: string | number } } | [room: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { room: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { room: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            room: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        room: typeof args.room === 'object'
        ? args.room.uuid
        : args.room,
    }

    return store.definition.url
            .replace('{room}', parsedArgs.room.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\RoomReviewController::store
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/RoomReviewController.php:54
* @route '/api/v1/hotels/rooms/{room}/reviews'
*/
store.post = (args: { room: string | number | { uuid: string | number } } | [room: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\RoomReviewController::store
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/RoomReviewController.php:54
* @route '/api/v1/hotels/rooms/{room}/reviews'
*/
const storeForm = (args: { room: string | number | { uuid: string | number } } | [room: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\RoomReviewController::store
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/RoomReviewController.php:54
* @route '/api/v1/hotels/rooms/{room}/reviews'
*/
storeForm.post = (args: { room: string | number | { uuid: string | number } } | [room: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm
