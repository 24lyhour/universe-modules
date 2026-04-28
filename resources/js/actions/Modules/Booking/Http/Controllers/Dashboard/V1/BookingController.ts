import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
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
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
* @route '/bookings'
*/
indexc788df35b14daebdc29d781f7cbb0fba.url = (options?: RouteQueryOptions) => {
    return indexc788df35b14daebdc29d781f7cbb0fba.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
* @route '/bookings'
*/
indexc788df35b14daebdc29d781f7cbb0fba.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc788df35b14daebdc29d781f7cbb0fba.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
* @route '/bookings'
*/
indexc788df35b14daebdc29d781f7cbb0fba.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexc788df35b14daebdc29d781f7cbb0fba.url(options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
* @route '/bookings'
*/
const indexc788df35b14daebdc29d781f7cbb0fbaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexc788df35b14daebdc29d781f7cbb0fba.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
* @route '/bookings'
*/
indexc788df35b14daebdc29d781f7cbb0fbaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexc788df35b14daebdc29d781f7cbb0fba.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
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
/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
* @route '/dashboard/bookings'
*/
const indexa59e9faa3c1974e6a5bc73bfb83c7616 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexa59e9faa3c1974e6a5bc73bfb83c7616.url(options),
    method: 'get',
})

indexa59e9faa3c1974e6a5bc73bfb83c7616.definition = {
    methods: ["get","head"],
    url: '/dashboard/bookings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
* @route '/dashboard/bookings'
*/
indexa59e9faa3c1974e6a5bc73bfb83c7616.url = (options?: RouteQueryOptions) => {
    return indexa59e9faa3c1974e6a5bc73bfb83c7616.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
* @route '/dashboard/bookings'
*/
indexa59e9faa3c1974e6a5bc73bfb83c7616.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexa59e9faa3c1974e6a5bc73bfb83c7616.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
* @route '/dashboard/bookings'
*/
indexa59e9faa3c1974e6a5bc73bfb83c7616.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexa59e9faa3c1974e6a5bc73bfb83c7616.url(options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
* @route '/dashboard/bookings'
*/
const indexa59e9faa3c1974e6a5bc73bfb83c7616Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexa59e9faa3c1974e6a5bc73bfb83c7616.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
* @route '/dashboard/bookings'
*/
indexa59e9faa3c1974e6a5bc73bfb83c7616Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexa59e9faa3c1974e6a5bc73bfb83c7616.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
* @route '/dashboard/bookings'
*/
indexa59e9faa3c1974e6a5bc73bfb83c7616Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexa59e9faa3c1974e6a5bc73bfb83c7616.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexa59e9faa3c1974e6a5bc73bfb83c7616.form = indexa59e9faa3c1974e6a5bc73bfb83c7616Form

export const index = {
    '/bookings': indexc788df35b14daebdc29d781f7cbb0fba,
    '/dashboard/bookings': indexa59e9faa3c1974e6a5bc73bfb83c7616,
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/bookings/create'
*/
const createeb3a7abb590abfa93e508637cc9e6788 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createeb3a7abb590abfa93e508637cc9e6788.url(options),
    method: 'get',
})

createeb3a7abb590abfa93e508637cc9e6788.definition = {
    methods: ["get","head"],
    url: '/bookings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/bookings/create'
*/
createeb3a7abb590abfa93e508637cc9e6788.url = (options?: RouteQueryOptions) => {
    return createeb3a7abb590abfa93e508637cc9e6788.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/bookings/create'
*/
createeb3a7abb590abfa93e508637cc9e6788.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createeb3a7abb590abfa93e508637cc9e6788.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/bookings/create'
*/
createeb3a7abb590abfa93e508637cc9e6788.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: createeb3a7abb590abfa93e508637cc9e6788.url(options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/bookings/create'
*/
const createeb3a7abb590abfa93e508637cc9e6788Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createeb3a7abb590abfa93e508637cc9e6788.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/bookings/create'
*/
createeb3a7abb590abfa93e508637cc9e6788Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createeb3a7abb590abfa93e508637cc9e6788.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/bookings/create'
*/
createeb3a7abb590abfa93e508637cc9e6788Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createeb3a7abb590abfa93e508637cc9e6788.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

createeb3a7abb590abfa93e508637cc9e6788.form = createeb3a7abb590abfa93e508637cc9e6788Form
/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/dashboard/bookings/create'
*/
const create3861abbf3c8a1d45bb8c54f61dae7c4c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create3861abbf3c8a1d45bb8c54f61dae7c4c.url(options),
    method: 'get',
})

create3861abbf3c8a1d45bb8c54f61dae7c4c.definition = {
    methods: ["get","head"],
    url: '/dashboard/bookings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/dashboard/bookings/create'
*/
create3861abbf3c8a1d45bb8c54f61dae7c4c.url = (options?: RouteQueryOptions) => {
    return create3861abbf3c8a1d45bb8c54f61dae7c4c.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/dashboard/bookings/create'
*/
create3861abbf3c8a1d45bb8c54f61dae7c4c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create3861abbf3c8a1d45bb8c54f61dae7c4c.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/dashboard/bookings/create'
*/
create3861abbf3c8a1d45bb8c54f61dae7c4c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create3861abbf3c8a1d45bb8c54f61dae7c4c.url(options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/dashboard/bookings/create'
*/
const create3861abbf3c8a1d45bb8c54f61dae7c4cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create3861abbf3c8a1d45bb8c54f61dae7c4c.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/dashboard/bookings/create'
*/
create3861abbf3c8a1d45bb8c54f61dae7c4cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create3861abbf3c8a1d45bb8c54f61dae7c4c.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/dashboard/bookings/create'
*/
create3861abbf3c8a1d45bb8c54f61dae7c4cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create3861abbf3c8a1d45bb8c54f61dae7c4c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create3861abbf3c8a1d45bb8c54f61dae7c4c.form = create3861abbf3c8a1d45bb8c54f61dae7c4cForm

export const create = {
    '/bookings/create': createeb3a7abb590abfa93e508637cc9e6788,
    '/dashboard/bookings/create': create3861abbf3c8a1d45bb8c54f61dae7c4c,
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::store
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:55
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
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::store
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:55
* @route '/bookings'
*/
storec788df35b14daebdc29d781f7cbb0fba.url = (options?: RouteQueryOptions) => {
    return storec788df35b14daebdc29d781f7cbb0fba.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::store
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:55
* @route '/bookings'
*/
storec788df35b14daebdc29d781f7cbb0fba.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storec788df35b14daebdc29d781f7cbb0fba.url(options),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::store
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:55
* @route '/bookings'
*/
const storec788df35b14daebdc29d781f7cbb0fbaForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storec788df35b14daebdc29d781f7cbb0fba.url(options),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::store
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:55
* @route '/bookings'
*/
storec788df35b14daebdc29d781f7cbb0fbaForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storec788df35b14daebdc29d781f7cbb0fba.url(options),
    method: 'post',
})

storec788df35b14daebdc29d781f7cbb0fba.form = storec788df35b14daebdc29d781f7cbb0fbaForm
/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::store
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:55
* @route '/dashboard/bookings'
*/
const storea59e9faa3c1974e6a5bc73bfb83c7616 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storea59e9faa3c1974e6a5bc73bfb83c7616.url(options),
    method: 'post',
})

storea59e9faa3c1974e6a5bc73bfb83c7616.definition = {
    methods: ["post"],
    url: '/dashboard/bookings',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::store
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:55
* @route '/dashboard/bookings'
*/
storea59e9faa3c1974e6a5bc73bfb83c7616.url = (options?: RouteQueryOptions) => {
    return storea59e9faa3c1974e6a5bc73bfb83c7616.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::store
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:55
* @route '/dashboard/bookings'
*/
storea59e9faa3c1974e6a5bc73bfb83c7616.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storea59e9faa3c1974e6a5bc73bfb83c7616.url(options),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::store
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:55
* @route '/dashboard/bookings'
*/
const storea59e9faa3c1974e6a5bc73bfb83c7616Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storea59e9faa3c1974e6a5bc73bfb83c7616.url(options),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::store
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:55
* @route '/dashboard/bookings'
*/
storea59e9faa3c1974e6a5bc73bfb83c7616Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storea59e9faa3c1974e6a5bc73bfb83c7616.url(options),
    method: 'post',
})

storea59e9faa3c1974e6a5bc73bfb83c7616.form = storea59e9faa3c1974e6a5bc73bfb83c7616Form

export const store = {
    '/bookings': storec788df35b14daebdc29d781f7cbb0fba,
    '/dashboard/bookings': storea59e9faa3c1974e6a5bc73bfb83c7616,
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/bookings/{booking}'
*/
const show6c85be6b7173673130df8a61609a49cb = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show6c85be6b7173673130df8a61609a49cb.url(args, options),
    method: 'get',
})

show6c85be6b7173673130df8a61609a49cb.definition = {
    methods: ["get","head"],
    url: '/bookings/{booking}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/bookings/{booking}'
*/
show6c85be6b7173673130df8a61609a49cb.url = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return show6c85be6b7173673130df8a61609a49cb.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/bookings/{booking}'
*/
show6c85be6b7173673130df8a61609a49cb.get = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show6c85be6b7173673130df8a61609a49cb.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/bookings/{booking}'
*/
show6c85be6b7173673130df8a61609a49cb.head = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show6c85be6b7173673130df8a61609a49cb.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/bookings/{booking}'
*/
const show6c85be6b7173673130df8a61609a49cbForm = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show6c85be6b7173673130df8a61609a49cb.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/bookings/{booking}'
*/
show6c85be6b7173673130df8a61609a49cbForm.get = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show6c85be6b7173673130df8a61609a49cb.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/bookings/{booking}'
*/
show6c85be6b7173673130df8a61609a49cbForm.head = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show6c85be6b7173673130df8a61609a49cb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show6c85be6b7173673130df8a61609a49cb.form = show6c85be6b7173673130df8a61609a49cbForm
/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/dashboard/bookings/{booking}'
*/
const show09e312fc963fb4d38aaa575d98b517ae = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show09e312fc963fb4d38aaa575d98b517ae.url(args, options),
    method: 'get',
})

show09e312fc963fb4d38aaa575d98b517ae.definition = {
    methods: ["get","head"],
    url: '/dashboard/bookings/{booking}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/dashboard/bookings/{booking}'
*/
show09e312fc963fb4d38aaa575d98b517ae.url = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return show09e312fc963fb4d38aaa575d98b517ae.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/dashboard/bookings/{booking}'
*/
show09e312fc963fb4d38aaa575d98b517ae.get = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show09e312fc963fb4d38aaa575d98b517ae.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/dashboard/bookings/{booking}'
*/
show09e312fc963fb4d38aaa575d98b517ae.head = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show09e312fc963fb4d38aaa575d98b517ae.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/dashboard/bookings/{booking}'
*/
const show09e312fc963fb4d38aaa575d98b517aeForm = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show09e312fc963fb4d38aaa575d98b517ae.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/dashboard/bookings/{booking}'
*/
show09e312fc963fb4d38aaa575d98b517aeForm.get = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show09e312fc963fb4d38aaa575d98b517ae.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/dashboard/bookings/{booking}'
*/
show09e312fc963fb4d38aaa575d98b517aeForm.head = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show09e312fc963fb4d38aaa575d98b517ae.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show09e312fc963fb4d38aaa575d98b517ae.form = show09e312fc963fb4d38aaa575d98b517aeForm

export const show = {
    '/bookings/{booking}': show6c85be6b7173673130df8a61609a49cb,
    '/dashboard/bookings/{booking}': show09e312fc963fb4d38aaa575d98b517ae,
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::edit
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:0
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
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::edit
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:0
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
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::edit
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:0
* @route '/bookings/{booking}/edit'
*/
edit.get = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::edit
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:0
* @route '/bookings/{booking}/edit'
*/
edit.head = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::edit
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:0
* @route '/bookings/{booking}/edit'
*/
const editForm = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::edit
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:0
* @route '/bookings/{booking}/edit'
*/
editForm.get = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::edit
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:0
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

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::update
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:0
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
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::update
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:0
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
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::update
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:0
* @route '/bookings/{booking}'
*/
update.put = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::update
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:0
* @route '/bookings/{booking}'
*/
update.patch = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::update
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:0
* @route '/bookings/{booking}'
*/
const updateForm = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::update
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:0
* @route '/bookings/{booking}'
*/
updateForm.put = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::update
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:0
* @route '/bookings/{booking}'
*/
updateForm.patch = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:84
* @route '/bookings/{booking}'
*/
const destroy6c85be6b7173673130df8a61609a49cb = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy6c85be6b7173673130df8a61609a49cb.url(args, options),
    method: 'delete',
})

destroy6c85be6b7173673130df8a61609a49cb.definition = {
    methods: ["delete"],
    url: '/bookings/{booking}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:84
* @route '/bookings/{booking}'
*/
destroy6c85be6b7173673130df8a61609a49cb.url = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return destroy6c85be6b7173673130df8a61609a49cb.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:84
* @route '/bookings/{booking}'
*/
destroy6c85be6b7173673130df8a61609a49cb.delete = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy6c85be6b7173673130df8a61609a49cb.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:84
* @route '/bookings/{booking}'
*/
const destroy6c85be6b7173673130df8a61609a49cbForm = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy6c85be6b7173673130df8a61609a49cb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:84
* @route '/bookings/{booking}'
*/
destroy6c85be6b7173673130df8a61609a49cbForm.delete = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy6c85be6b7173673130df8a61609a49cb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy6c85be6b7173673130df8a61609a49cb.form = destroy6c85be6b7173673130df8a61609a49cbForm
/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:84
* @route '/dashboard/bookings/{booking}'
*/
const destroy09e312fc963fb4d38aaa575d98b517ae = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy09e312fc963fb4d38aaa575d98b517ae.url(args, options),
    method: 'delete',
})

destroy09e312fc963fb4d38aaa575d98b517ae.definition = {
    methods: ["delete"],
    url: '/dashboard/bookings/{booking}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:84
* @route '/dashboard/bookings/{booking}'
*/
destroy09e312fc963fb4d38aaa575d98b517ae.url = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return destroy09e312fc963fb4d38aaa575d98b517ae.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:84
* @route '/dashboard/bookings/{booking}'
*/
destroy09e312fc963fb4d38aaa575d98b517ae.delete = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy09e312fc963fb4d38aaa575d98b517ae.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:84
* @route '/dashboard/bookings/{booking}'
*/
const destroy09e312fc963fb4d38aaa575d98b517aeForm = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy09e312fc963fb4d38aaa575d98b517ae.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:84
* @route '/dashboard/bookings/{booking}'
*/
destroy09e312fc963fb4d38aaa575d98b517aeForm.delete = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy09e312fc963fb4d38aaa575d98b517ae.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy09e312fc963fb4d38aaa575d98b517ae.form = destroy09e312fc963fb4d38aaa575d98b517aeForm

export const destroy = {
    '/bookings/{booking}': destroy6c85be6b7173673130df8a61609a49cb,
    '/dashboard/bookings/{booking}': destroy09e312fc963fb4d38aaa575d98b517ae,
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::trash
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:95
* @route '/dashboard/bookings/trash'
*/
export const trash = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

trash.definition = {
    methods: ["get","head"],
    url: '/dashboard/bookings/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::trash
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:95
* @route '/dashboard/bookings/trash'
*/
trash.url = (options?: RouteQueryOptions) => {
    return trash.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::trash
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:95
* @route '/dashboard/bookings/trash'
*/
trash.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::trash
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:95
* @route '/dashboard/bookings/trash'
*/
trash.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::trash
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:95
* @route '/dashboard/bookings/trash'
*/
const trashForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::trash
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:95
* @route '/dashboard/bookings/trash'
*/
trashForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::trash
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:95
* @route '/dashboard/bookings/trash'
*/
trashForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

trash.form = trashForm

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::restore
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:108
* @route '/dashboard/bookings/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/bookings/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::restore
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:108
* @route '/dashboard/bookings/{uuid}/restore'
*/
restore.url = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { uuid: args }
    }

    if (Array.isArray(args)) {
        args = {
            uuid: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        uuid: args.uuid,
    }

    return restore.definition.url
            .replace('{uuid}', parsedArgs.uuid.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::restore
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:108
* @route '/dashboard/bookings/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::restore
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:108
* @route '/dashboard/bookings/{uuid}/restore'
*/
const restoreForm = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::restore
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:108
* @route '/dashboard/bookings/{uuid}/restore'
*/
restoreForm.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

restore.form = restoreForm

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::forceDelete
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:118
* @route '/dashboard/bookings/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/bookings/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::forceDelete
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:118
* @route '/dashboard/bookings/{uuid}/force-delete'
*/
forceDelete.url = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { uuid: args }
    }

    if (Array.isArray(args)) {
        args = {
            uuid: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        uuid: args.uuid,
    }

    return forceDelete.definition.url
            .replace('{uuid}', parsedArgs.uuid.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::forceDelete
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:118
* @route '/dashboard/bookings/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::forceDelete
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:118
* @route '/dashboard/bookings/{uuid}/force-delete'
*/
const forceDeleteForm = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::forceDelete
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:118
* @route '/dashboard/bookings/{uuid}/force-delete'
*/
forceDeleteForm.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

forceDelete.form = forceDeleteForm

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::bulkDelete
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:130
* @route '/dashboard/bookings/bulk-delete'
*/
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/bookings/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::bulkDelete
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:130
* @route '/dashboard/bookings/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::bulkDelete
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:130
* @route '/dashboard/bookings/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::bulkDelete
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:130
* @route '/dashboard/bookings/bulk-delete'
*/
const bulkDeleteForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkDelete.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::bulkDelete
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:130
* @route '/dashboard/bookings/bulk-delete'
*/
bulkDeleteForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkDelete.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

bulkDelete.form = bulkDeleteForm

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::updateStatus
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:68
* @route '/dashboard/bookings/{booking}/status'
*/
export const updateStatus = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStatus.url(args, options),
    method: 'patch',
})

updateStatus.definition = {
    methods: ["patch"],
    url: '/dashboard/bookings/{booking}/status',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::updateStatus
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:68
* @route '/dashboard/bookings/{booking}/status'
*/
updateStatus.url = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return updateStatus.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::updateStatus
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:68
* @route '/dashboard/bookings/{booking}/status'
*/
updateStatus.patch = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStatus.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::updateStatus
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:68
* @route '/dashboard/bookings/{booking}/status'
*/
const updateStatusForm = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::updateStatus
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:68
* @route '/dashboard/bookings/{booking}/status'
*/
updateStatusForm.patch = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateStatus.form = updateStatusForm

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::calendar
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:41
* @route '/dashboard/bookings/calendar'
*/
export const calendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendar.url(options),
    method: 'get',
})

calendar.definition = {
    methods: ["get","head"],
    url: '/dashboard/bookings/calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::calendar
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:41
* @route '/dashboard/bookings/calendar'
*/
calendar.url = (options?: RouteQueryOptions) => {
    return calendar.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::calendar
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:41
* @route '/dashboard/bookings/calendar'
*/
calendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendar.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::calendar
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:41
* @route '/dashboard/bookings/calendar'
*/
calendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: calendar.url(options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::calendar
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:41
* @route '/dashboard/bookings/calendar'
*/
const calendarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendar.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::calendar
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:41
* @route '/dashboard/bookings/calendar'
*/
calendarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendar.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::calendar
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:41
* @route '/dashboard/bookings/calendar'
*/
calendarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

calendar.form = calendarForm

const BookingController = { index, create, store, show, edit, update, destroy, trash, restore, forceDelete, bulkDelete, updateStatus, calendar }

export default BookingController