import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/bookings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/bookings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/bookings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/bookings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/bookings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::create
* @see Modules/Booking/app/Http/Controllers/BookingController.php:21
* @route '/bookings/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/bookings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::create
* @see Modules/Booking/app/Http/Controllers/BookingController.php:21
* @route '/bookings/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::create
* @see Modules/Booking/app/Http/Controllers/BookingController.php:21
* @route '/bookings/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::create
* @see Modules/Booking/app/Http/Controllers/BookingController.php:21
* @route '/bookings/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::store
* @see Modules/Booking/app/Http/Controllers/BookingController.php:29
* @route '/bookings'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/bookings',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::store
* @see Modules/Booking/app/Http/Controllers/BookingController.php:29
* @route '/bookings'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::store
* @see Modules/Booking/app/Http/Controllers/BookingController.php:29
* @route '/bookings'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/bookings/{booking}'
*/
export const show = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/bookings/{booking}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/bookings/{booking}'
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
* @route '/bookings/{booking}'
*/
show.get = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/bookings/{booking}'
*/
show.head = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::edit
* @see Modules/Booking/app/Http/Controllers/BookingController.php:42
* @route '/bookings/{booking}/edit'
*/
export const edit = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/bookings/{booking}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::edit
* @see Modules/Booking/app/Http/Controllers/BookingController.php:42
* @route '/bookings/{booking}/edit'
*/
edit.url = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::edit
* @see Modules/Booking/app/Http/Controllers/BookingController.php:42
* @route '/bookings/{booking}/edit'
*/
edit.get = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::edit
* @see Modules/Booking/app/Http/Controllers/BookingController.php:42
* @route '/bookings/{booking}/edit'
*/
edit.head = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/bookings/{booking}'
*/
export const update = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/bookings/{booking}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/bookings/{booking}'
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
* @route '/bookings/{booking}'
*/
update.put = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/bookings/{booking}'
*/
update.patch = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/BookingController.php:55
* @route '/bookings/{booking}'
*/
export const destroy = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/bookings/{booking}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/BookingController.php:55
* @route '/bookings/{booking}'
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
* @route '/bookings/{booking}'
*/
destroy.delete = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const booking = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default booking