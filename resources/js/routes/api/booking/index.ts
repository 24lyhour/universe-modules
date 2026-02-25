import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/api/v1/bookings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/bookings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/api/v1/bookings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/api/v1/bookings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/api/v1/bookings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::store
* @see Modules/Booking/app/Http/Controllers/BookingController.php:29
* @route '/api/v1/bookings'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/bookings',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::store
* @see Modules/Booking/app/Http/Controllers/BookingController.php:29
* @route '/api/v1/bookings'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::store
* @see Modules/Booking/app/Http/Controllers/BookingController.php:29
* @route '/api/v1/bookings'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/api/v1/bookings/{booking}'
*/
export const show = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/bookings/{booking}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/api/v1/bookings/{booking}'
*/
show.url = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { booking: args }
    }

    if (Array.isArray(args)) {
        args = {
            booking: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        booking: args.booking,
    }

    return show.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/api/v1/bookings/{booking}'
*/
show.get = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/api/v1/bookings/{booking}'
*/
show.head = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/api/v1/bookings/{booking}'
*/
export const update = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/bookings/{booking}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/api/v1/bookings/{booking}'
*/
update.url = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { booking: args }
    }

    if (Array.isArray(args)) {
        args = {
            booking: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        booking: args.booking,
    }

    return update.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/api/v1/bookings/{booking}'
*/
update.put = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/api/v1/bookings/{booking}'
*/
update.patch = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/BookingController.php:55
* @route '/api/v1/bookings/{booking}'
*/
export const destroy = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/bookings/{booking}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/BookingController.php:55
* @route '/api/v1/bookings/{booking}'
*/
destroy.url = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { booking: args }
    }

    if (Array.isArray(args)) {
        args = {
            booking: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        booking: args.booking,
    }

    return destroy.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/BookingController.php:55
* @route '/api/v1/bookings/{booking}'
*/
destroy.delete = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const booking = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default booking