import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::quote
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:22
* @route '/api/v1/bookings/quote'
*/
export const quote = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: quote.url(options),
    method: 'post',
})

quote.definition = {
    methods: ["post"],
    url: '/api/v1/bookings/quote',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::quote
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:22
* @route '/api/v1/bookings/quote'
*/
quote.url = (options?: RouteQueryOptions) => {
    return quote.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::quote
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:22
* @route '/api/v1/bookings/quote'
*/
quote.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: quote.url(options),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::quote
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:22
* @route '/api/v1/bookings/quote'
*/
const quoteForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: quote.url(options),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::quote
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:22
* @route '/api/v1/bookings/quote'
*/
quoteForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: quote.url(options),
    method: 'post',
})

quote.form = quoteForm

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:29
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
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:29
* @route '/api/v1/bookings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:29
* @route '/api/v1/bookings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:29
* @route '/api/v1/bookings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:29
* @route '/api/v1/bookings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:29
* @route '/api/v1/bookings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:29
* @route '/api/v1/bookings'
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
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::store
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:50
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
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::store
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:50
* @route '/api/v1/bookings'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::store
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:50
* @route '/api/v1/bookings'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::store
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:50
* @route '/api/v1/bookings'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::store
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:50
* @route '/api/v1/bookings'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:42
* @route '/api/v1/bookings/{booking}'
*/
export const show = (args: { booking: string | { uuid: string } } | [booking: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/bookings/{booking}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:42
* @route '/api/v1/bookings/{booking}'
*/
show.url = (args: { booking: string | { uuid: string } } | [booking: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { booking: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { booking: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            booking: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        booking: typeof args.booking === 'object'
        ? args.booking.uuid
        : args.booking,
    }

    return show.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:42
* @route '/api/v1/bookings/{booking}'
*/
show.get = (args: { booking: string | { uuid: string } } | [booking: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:42
* @route '/api/v1/bookings/{booking}'
*/
show.head = (args: { booking: string | { uuid: string } } | [booking: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:42
* @route '/api/v1/bookings/{booking}'
*/
const showForm = (args: { booking: string | { uuid: string } } | [booking: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:42
* @route '/api/v1/bookings/{booking}'
*/
showForm.get = (args: { booking: string | { uuid: string } } | [booking: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:42
* @route '/api/v1/bookings/{booking}'
*/
showForm.head = (args: { booking: string | { uuid: string } } | [booking: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::cancel
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:72
* @route '/api/v1/bookings/{booking}/cancel'
*/
export const cancel = (args: { booking: string | { uuid: string } } | [booking: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

cancel.definition = {
    methods: ["post"],
    url: '/api/v1/bookings/{booking}/cancel',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::cancel
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:72
* @route '/api/v1/bookings/{booking}/cancel'
*/
cancel.url = (args: { booking: string | { uuid: string } } | [booking: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { booking: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { booking: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            booking: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        booking: typeof args.booking === 'object'
        ? args.booking.uuid
        : args.booking,
    }

    return cancel.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::cancel
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:72
* @route '/api/v1/bookings/{booking}/cancel'
*/
cancel.post = (args: { booking: string | { uuid: string } } | [booking: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::cancel
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:72
* @route '/api/v1/bookings/{booking}/cancel'
*/
const cancelForm = (args: { booking: string | { uuid: string } } | [booking: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Api\V1\Customer\BookingController::cancel
* @see Modules/Booking/app/Http/Controllers/Api/V1/Customer/BookingController.php:72
* @route '/api/v1/bookings/{booking}/cancel'
*/
cancelForm.post = (args: { booking: string | { uuid: string } } | [booking: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, options),
    method: 'post',
})

cancel.form = cancelForm

const BookingController = { quote, index, store, show, cancel }

export default BookingController