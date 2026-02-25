import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/api/v1/bookings'
*/
const index69f76c55556063a83f1ad4bce23c5092 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index69f76c55556063a83f1ad4bce23c5092.url(options),
    method: 'get',
})

index69f76c55556063a83f1ad4bce23c5092.definition = {
    methods: ["get","head"],
    url: '/api/v1/bookings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/api/v1/bookings'
*/
index69f76c55556063a83f1ad4bce23c5092.url = (options?: RouteQueryOptions) => {
    return index69f76c55556063a83f1ad4bce23c5092.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/api/v1/bookings'
*/
index69f76c55556063a83f1ad4bce23c5092.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index69f76c55556063a83f1ad4bce23c5092.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/api/v1/bookings'
*/
index69f76c55556063a83f1ad4bce23c5092.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index69f76c55556063a83f1ad4bce23c5092.url(options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/api/v1/bookings'
*/
const index69f76c55556063a83f1ad4bce23c5092Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index69f76c55556063a83f1ad4bce23c5092.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/api/v1/bookings'
*/
index69f76c55556063a83f1ad4bce23c5092Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index69f76c55556063a83f1ad4bce23c5092.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/api/v1/bookings'
*/
index69f76c55556063a83f1ad4bce23c5092Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index69f76c55556063a83f1ad4bce23c5092.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index69f76c55556063a83f1ad4bce23c5092.form = index69f76c55556063a83f1ad4bce23c5092Form
/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/bookings'
*/
const indexc788df35b14daebdc29d781f7cbb0fba = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc788df35b14daebdc29d781f7cbb0fba.url(options),
    method: 'get',
})

indexc788df35b14daebdc29d781f7cbb0fba.definition = {
    methods: ["get","head"],
    url: '/bookings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/bookings'
*/
indexc788df35b14daebdc29d781f7cbb0fba.url = (options?: RouteQueryOptions) => {
    return indexc788df35b14daebdc29d781f7cbb0fba.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/bookings'
*/
indexc788df35b14daebdc29d781f7cbb0fba.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc788df35b14daebdc29d781f7cbb0fba.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/bookings'
*/
indexc788df35b14daebdc29d781f7cbb0fba.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexc788df35b14daebdc29d781f7cbb0fba.url(options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/bookings'
*/
const indexc788df35b14daebdc29d781f7cbb0fbaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexc788df35b14daebdc29d781f7cbb0fba.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/bookings'
*/
indexc788df35b14daebdc29d781f7cbb0fbaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexc788df35b14daebdc29d781f7cbb0fba.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::index
* @see Modules/Booking/app/Http/Controllers/BookingController.php:13
* @route '/bookings'
*/
indexc788df35b14daebdc29d781f7cbb0fbaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexc788df35b14daebdc29d781f7cbb0fba.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexc788df35b14daebdc29d781f7cbb0fba.form = indexc788df35b14daebdc29d781f7cbb0fbaForm

export const index = {
    '/api/v1/bookings': index69f76c55556063a83f1ad4bce23c5092,
    '/bookings': indexc788df35b14daebdc29d781f7cbb0fba,
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::store
* @see Modules/Booking/app/Http/Controllers/BookingController.php:29
* @route '/api/v1/bookings'
*/
const store69f76c55556063a83f1ad4bce23c5092 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store69f76c55556063a83f1ad4bce23c5092.url(options),
    method: 'post',
})

store69f76c55556063a83f1ad4bce23c5092.definition = {
    methods: ["post"],
    url: '/api/v1/bookings',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::store
* @see Modules/Booking/app/Http/Controllers/BookingController.php:29
* @route '/api/v1/bookings'
*/
store69f76c55556063a83f1ad4bce23c5092.url = (options?: RouteQueryOptions) => {
    return store69f76c55556063a83f1ad4bce23c5092.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::store
* @see Modules/Booking/app/Http/Controllers/BookingController.php:29
* @route '/api/v1/bookings'
*/
store69f76c55556063a83f1ad4bce23c5092.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store69f76c55556063a83f1ad4bce23c5092.url(options),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::store
* @see Modules/Booking/app/Http/Controllers/BookingController.php:29
* @route '/api/v1/bookings'
*/
const store69f76c55556063a83f1ad4bce23c5092Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store69f76c55556063a83f1ad4bce23c5092.url(options),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::store
* @see Modules/Booking/app/Http/Controllers/BookingController.php:29
* @route '/api/v1/bookings'
*/
store69f76c55556063a83f1ad4bce23c5092Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store69f76c55556063a83f1ad4bce23c5092.url(options),
    method: 'post',
})

store69f76c55556063a83f1ad4bce23c5092.form = store69f76c55556063a83f1ad4bce23c5092Form
/**
* @see \Modules\Booking\Http\Controllers\BookingController::store
* @see Modules/Booking/app/Http/Controllers/BookingController.php:29
* @route '/bookings'
*/
const storec788df35b14daebdc29d781f7cbb0fba = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storec788df35b14daebdc29d781f7cbb0fba.url(options),
    method: 'post',
})

storec788df35b14daebdc29d781f7cbb0fba.definition = {
    methods: ["post"],
    url: '/bookings',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::store
* @see Modules/Booking/app/Http/Controllers/BookingController.php:29
* @route '/bookings'
*/
storec788df35b14daebdc29d781f7cbb0fba.url = (options?: RouteQueryOptions) => {
    return storec788df35b14daebdc29d781f7cbb0fba.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::store
* @see Modules/Booking/app/Http/Controllers/BookingController.php:29
* @route '/bookings'
*/
storec788df35b14daebdc29d781f7cbb0fba.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storec788df35b14daebdc29d781f7cbb0fba.url(options),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::store
* @see Modules/Booking/app/Http/Controllers/BookingController.php:29
* @route '/bookings'
*/
const storec788df35b14daebdc29d781f7cbb0fbaForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storec788df35b14daebdc29d781f7cbb0fba.url(options),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::store
* @see Modules/Booking/app/Http/Controllers/BookingController.php:29
* @route '/bookings'
*/
storec788df35b14daebdc29d781f7cbb0fbaForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storec788df35b14daebdc29d781f7cbb0fba.url(options),
    method: 'post',
})

storec788df35b14daebdc29d781f7cbb0fba.form = storec788df35b14daebdc29d781f7cbb0fbaForm

export const store = {
    '/api/v1/bookings': store69f76c55556063a83f1ad4bce23c5092,
    '/bookings': storec788df35b14daebdc29d781f7cbb0fba,
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/api/v1/bookings/{booking}'
*/
const showa846daf5feb7c0075ffffb1e170210b1 = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showa846daf5feb7c0075ffffb1e170210b1.url(args, options),
    method: 'get',
})

showa846daf5feb7c0075ffffb1e170210b1.definition = {
    methods: ["get","head"],
    url: '/api/v1/bookings/{booking}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/api/v1/bookings/{booking}'
*/
showa846daf5feb7c0075ffffb1e170210b1.url = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showa846daf5feb7c0075ffffb1e170210b1.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/api/v1/bookings/{booking}'
*/
showa846daf5feb7c0075ffffb1e170210b1.get = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showa846daf5feb7c0075ffffb1e170210b1.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/api/v1/bookings/{booking}'
*/
showa846daf5feb7c0075ffffb1e170210b1.head = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showa846daf5feb7c0075ffffb1e170210b1.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/api/v1/bookings/{booking}'
*/
const showa846daf5feb7c0075ffffb1e170210b1Form = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showa846daf5feb7c0075ffffb1e170210b1.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/api/v1/bookings/{booking}'
*/
showa846daf5feb7c0075ffffb1e170210b1Form.get = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showa846daf5feb7c0075ffffb1e170210b1.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/api/v1/bookings/{booking}'
*/
showa846daf5feb7c0075ffffb1e170210b1Form.head = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showa846daf5feb7c0075ffffb1e170210b1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showa846daf5feb7c0075ffffb1e170210b1.form = showa846daf5feb7c0075ffffb1e170210b1Form
/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/bookings/{booking}'
*/
const show6c85be6b7173673130df8a61609a49cb = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show6c85be6b7173673130df8a61609a49cb.url(args, options),
    method: 'get',
})

show6c85be6b7173673130df8a61609a49cb.definition = {
    methods: ["get","head"],
    url: '/bookings/{booking}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/bookings/{booking}'
*/
show6c85be6b7173673130df8a61609a49cb.url = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show6c85be6b7173673130df8a61609a49cb.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/bookings/{booking}'
*/
show6c85be6b7173673130df8a61609a49cb.get = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show6c85be6b7173673130df8a61609a49cb.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/bookings/{booking}'
*/
show6c85be6b7173673130df8a61609a49cb.head = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show6c85be6b7173673130df8a61609a49cb.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/bookings/{booking}'
*/
const show6c85be6b7173673130df8a61609a49cbForm = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show6c85be6b7173673130df8a61609a49cb.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/bookings/{booking}'
*/
show6c85be6b7173673130df8a61609a49cbForm.get = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show6c85be6b7173673130df8a61609a49cb.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::show
* @see Modules/Booking/app/Http/Controllers/BookingController.php:34
* @route '/bookings/{booking}'
*/
show6c85be6b7173673130df8a61609a49cbForm.head = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show6c85be6b7173673130df8a61609a49cb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show6c85be6b7173673130df8a61609a49cb.form = show6c85be6b7173673130df8a61609a49cbForm

export const show = {
    '/api/v1/bookings/{booking}': showa846daf5feb7c0075ffffb1e170210b1,
    '/bookings/{booking}': show6c85be6b7173673130df8a61609a49cb,
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/api/v1/bookings/{booking}'
*/
const updatea846daf5feb7c0075ffffb1e170210b1 = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatea846daf5feb7c0075ffffb1e170210b1.url(args, options),
    method: 'put',
})

updatea846daf5feb7c0075ffffb1e170210b1.definition = {
    methods: ["put","patch"],
    url: '/api/v1/bookings/{booking}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/api/v1/bookings/{booking}'
*/
updatea846daf5feb7c0075ffffb1e170210b1.url = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updatea846daf5feb7c0075ffffb1e170210b1.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/api/v1/bookings/{booking}'
*/
updatea846daf5feb7c0075ffffb1e170210b1.put = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatea846daf5feb7c0075ffffb1e170210b1.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/api/v1/bookings/{booking}'
*/
updatea846daf5feb7c0075ffffb1e170210b1.patch = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatea846daf5feb7c0075ffffb1e170210b1.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/api/v1/bookings/{booking}'
*/
const updatea846daf5feb7c0075ffffb1e170210b1Form = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatea846daf5feb7c0075ffffb1e170210b1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/api/v1/bookings/{booking}'
*/
updatea846daf5feb7c0075ffffb1e170210b1Form.put = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatea846daf5feb7c0075ffffb1e170210b1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/api/v1/bookings/{booking}'
*/
updatea846daf5feb7c0075ffffb1e170210b1Form.patch = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatea846daf5feb7c0075ffffb1e170210b1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatea846daf5feb7c0075ffffb1e170210b1.form = updatea846daf5feb7c0075ffffb1e170210b1Form
/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/bookings/{booking}'
*/
const update6c85be6b7173673130df8a61609a49cb = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update6c85be6b7173673130df8a61609a49cb.url(args, options),
    method: 'put',
})

update6c85be6b7173673130df8a61609a49cb.definition = {
    methods: ["put","patch"],
    url: '/bookings/{booking}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/bookings/{booking}'
*/
update6c85be6b7173673130df8a61609a49cb.url = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update6c85be6b7173673130df8a61609a49cb.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/bookings/{booking}'
*/
update6c85be6b7173673130df8a61609a49cb.put = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update6c85be6b7173673130df8a61609a49cb.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/bookings/{booking}'
*/
update6c85be6b7173673130df8a61609a49cb.patch = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update6c85be6b7173673130df8a61609a49cb.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/bookings/{booking}'
*/
const update6c85be6b7173673130df8a61609a49cbForm = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update6c85be6b7173673130df8a61609a49cb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/bookings/{booking}'
*/
update6c85be6b7173673130df8a61609a49cbForm.put = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update6c85be6b7173673130df8a61609a49cb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::update
* @see Modules/Booking/app/Http/Controllers/BookingController.php:50
* @route '/bookings/{booking}'
*/
update6c85be6b7173673130df8a61609a49cbForm.patch = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update6c85be6b7173673130df8a61609a49cb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update6c85be6b7173673130df8a61609a49cb.form = update6c85be6b7173673130df8a61609a49cbForm

export const update = {
    '/api/v1/bookings/{booking}': updatea846daf5feb7c0075ffffb1e170210b1,
    '/bookings/{booking}': update6c85be6b7173673130df8a61609a49cb,
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/BookingController.php:55
* @route '/api/v1/bookings/{booking}'
*/
const destroya846daf5feb7c0075ffffb1e170210b1 = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroya846daf5feb7c0075ffffb1e170210b1.url(args, options),
    method: 'delete',
})

destroya846daf5feb7c0075ffffb1e170210b1.definition = {
    methods: ["delete"],
    url: '/api/v1/bookings/{booking}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/BookingController.php:55
* @route '/api/v1/bookings/{booking}'
*/
destroya846daf5feb7c0075ffffb1e170210b1.url = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroya846daf5feb7c0075ffffb1e170210b1.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/BookingController.php:55
* @route '/api/v1/bookings/{booking}'
*/
destroya846daf5feb7c0075ffffb1e170210b1.delete = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroya846daf5feb7c0075ffffb1e170210b1.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/BookingController.php:55
* @route '/api/v1/bookings/{booking}'
*/
const destroya846daf5feb7c0075ffffb1e170210b1Form = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroya846daf5feb7c0075ffffb1e170210b1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/BookingController.php:55
* @route '/api/v1/bookings/{booking}'
*/
destroya846daf5feb7c0075ffffb1e170210b1Form.delete = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroya846daf5feb7c0075ffffb1e170210b1.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroya846daf5feb7c0075ffffb1e170210b1.form = destroya846daf5feb7c0075ffffb1e170210b1Form
/**
* @see \Modules\Booking\Http\Controllers\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/BookingController.php:55
* @route '/bookings/{booking}'
*/
const destroy6c85be6b7173673130df8a61609a49cb = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy6c85be6b7173673130df8a61609a49cb.url(args, options),
    method: 'delete',
})

destroy6c85be6b7173673130df8a61609a49cb.definition = {
    methods: ["delete"],
    url: '/bookings/{booking}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Booking\Http\Controllers\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/BookingController.php:55
* @route '/bookings/{booking}'
*/
destroy6c85be6b7173673130df8a61609a49cb.url = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy6c85be6b7173673130df8a61609a49cb.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/BookingController.php:55
* @route '/bookings/{booking}'
*/
destroy6c85be6b7173673130df8a61609a49cb.delete = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy6c85be6b7173673130df8a61609a49cb.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/BookingController.php:55
* @route '/bookings/{booking}'
*/
const destroy6c85be6b7173673130df8a61609a49cbForm = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy6c85be6b7173673130df8a61609a49cb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/BookingController.php:55
* @route '/bookings/{booking}'
*/
destroy6c85be6b7173673130df8a61609a49cbForm.delete = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy6c85be6b7173673130df8a61609a49cb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy6c85be6b7173673130df8a61609a49cb.form = destroy6c85be6b7173673130df8a61609a49cbForm

export const destroy = {
    '/api/v1/bookings/{booking}': destroya846daf5feb7c0075ffffb1e170210b1,
    '/bookings/{booking}': destroy6c85be6b7173673130df8a61609a49cb,
}

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
* @see \Modules\Booking\Http\Controllers\BookingController::create
* @see Modules/Booking/app/Http/Controllers/BookingController.php:21
* @route '/bookings/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::create
* @see Modules/Booking/app/Http/Controllers/BookingController.php:21
* @route '/bookings/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::create
* @see Modules/Booking/app/Http/Controllers/BookingController.php:21
* @route '/bookings/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

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
* @see \Modules\Booking\Http\Controllers\BookingController::edit
* @see Modules/Booking/app/Http/Controllers/BookingController.php:42
* @route '/bookings/{booking}/edit'
*/
const editForm = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::edit
* @see Modules/Booking/app/Http/Controllers/BookingController.php:42
* @route '/bookings/{booking}/edit'
*/
editForm.get = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\BookingController::edit
* @see Modules/Booking/app/Http/Controllers/BookingController.php:42
* @route '/bookings/{booking}/edit'
*/
editForm.head = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const BookingController = { index, store, show, update, destroy, create, edit }

export default BookingController