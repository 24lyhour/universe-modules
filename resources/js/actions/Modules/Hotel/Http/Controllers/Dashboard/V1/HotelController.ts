import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/api/v1/dashboard/hotels'
*/
const index06416d1f077ff3f8e62d072e6a6a3fc6 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index06416d1f077ff3f8e62d072e6a6a3fc6.url(options),
    method: 'get',
})

index06416d1f077ff3f8e62d072e6a6a3fc6.definition = {
    methods: ["get","head"],
    url: '/api/v1/dashboard/hotels',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/api/v1/dashboard/hotels'
*/
index06416d1f077ff3f8e62d072e6a6a3fc6.url = (options?: RouteQueryOptions) => {
    return index06416d1f077ff3f8e62d072e6a6a3fc6.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/api/v1/dashboard/hotels'
*/
index06416d1f077ff3f8e62d072e6a6a3fc6.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index06416d1f077ff3f8e62d072e6a6a3fc6.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/api/v1/dashboard/hotels'
*/
index06416d1f077ff3f8e62d072e6a6a3fc6.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index06416d1f077ff3f8e62d072e6a6a3fc6.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/api/v1/dashboard/hotels'
*/
const index06416d1f077ff3f8e62d072e6a6a3fc6Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index06416d1f077ff3f8e62d072e6a6a3fc6.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/api/v1/dashboard/hotels'
*/
index06416d1f077ff3f8e62d072e6a6a3fc6Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index06416d1f077ff3f8e62d072e6a6a3fc6.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/api/v1/dashboard/hotels'
*/
index06416d1f077ff3f8e62d072e6a6a3fc6Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index06416d1f077ff3f8e62d072e6a6a3fc6.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index06416d1f077ff3f8e62d072e6a6a3fc6.form = index06416d1f077ff3f8e62d072e6a6a3fc6Form
/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/dashboard/hotels'
*/
const index02e01008641fd23e3f9ce17ed9cd07d7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index02e01008641fd23e3f9ce17ed9cd07d7.url(options),
    method: 'get',
})

index02e01008641fd23e3f9ce17ed9cd07d7.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotels',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/dashboard/hotels'
*/
index02e01008641fd23e3f9ce17ed9cd07d7.url = (options?: RouteQueryOptions) => {
    return index02e01008641fd23e3f9ce17ed9cd07d7.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/dashboard/hotels'
*/
index02e01008641fd23e3f9ce17ed9cd07d7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index02e01008641fd23e3f9ce17ed9cd07d7.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/dashboard/hotels'
*/
index02e01008641fd23e3f9ce17ed9cd07d7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index02e01008641fd23e3f9ce17ed9cd07d7.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/dashboard/hotels'
*/
const index02e01008641fd23e3f9ce17ed9cd07d7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index02e01008641fd23e3f9ce17ed9cd07d7.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/dashboard/hotels'
*/
index02e01008641fd23e3f9ce17ed9cd07d7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index02e01008641fd23e3f9ce17ed9cd07d7.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/dashboard/hotels'
*/
index02e01008641fd23e3f9ce17ed9cd07d7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index02e01008641fd23e3f9ce17ed9cd07d7.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index02e01008641fd23e3f9ce17ed9cd07d7.form = index02e01008641fd23e3f9ce17ed9cd07d7Form

export const index = {
    '/api/v1/dashboard/hotels': index06416d1f077ff3f8e62d072e6a6a3fc6,
    '/dashboard/hotels': index02e01008641fd23e3f9ce17ed9cd07d7,
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:44
* @route '/api/v1/dashboard/hotels'
*/
const store06416d1f077ff3f8e62d072e6a6a3fc6 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store06416d1f077ff3f8e62d072e6a6a3fc6.url(options),
    method: 'post',
})

store06416d1f077ff3f8e62d072e6a6a3fc6.definition = {
    methods: ["post"],
    url: '/api/v1/dashboard/hotels',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:44
* @route '/api/v1/dashboard/hotels'
*/
store06416d1f077ff3f8e62d072e6a6a3fc6.url = (options?: RouteQueryOptions) => {
    return store06416d1f077ff3f8e62d072e6a6a3fc6.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:44
* @route '/api/v1/dashboard/hotels'
*/
store06416d1f077ff3f8e62d072e6a6a3fc6.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store06416d1f077ff3f8e62d072e6a6a3fc6.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:44
* @route '/api/v1/dashboard/hotels'
*/
const store06416d1f077ff3f8e62d072e6a6a3fc6Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store06416d1f077ff3f8e62d072e6a6a3fc6.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:44
* @route '/api/v1/dashboard/hotels'
*/
store06416d1f077ff3f8e62d072e6a6a3fc6Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store06416d1f077ff3f8e62d072e6a6a3fc6.url(options),
    method: 'post',
})

store06416d1f077ff3f8e62d072e6a6a3fc6.form = store06416d1f077ff3f8e62d072e6a6a3fc6Form
/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:44
* @route '/dashboard/hotels'
*/
const store02e01008641fd23e3f9ce17ed9cd07d7 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store02e01008641fd23e3f9ce17ed9cd07d7.url(options),
    method: 'post',
})

store02e01008641fd23e3f9ce17ed9cd07d7.definition = {
    methods: ["post"],
    url: '/dashboard/hotels',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:44
* @route '/dashboard/hotels'
*/
store02e01008641fd23e3f9ce17ed9cd07d7.url = (options?: RouteQueryOptions) => {
    return store02e01008641fd23e3f9ce17ed9cd07d7.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:44
* @route '/dashboard/hotels'
*/
store02e01008641fd23e3f9ce17ed9cd07d7.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store02e01008641fd23e3f9ce17ed9cd07d7.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:44
* @route '/dashboard/hotels'
*/
const store02e01008641fd23e3f9ce17ed9cd07d7Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store02e01008641fd23e3f9ce17ed9cd07d7.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:44
* @route '/dashboard/hotels'
*/
store02e01008641fd23e3f9ce17ed9cd07d7Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store02e01008641fd23e3f9ce17ed9cd07d7.url(options),
    method: 'post',
})

store02e01008641fd23e3f9ce17ed9cd07d7.form = store02e01008641fd23e3f9ce17ed9cd07d7Form

export const store = {
    '/api/v1/dashboard/hotels': store06416d1f077ff3f8e62d072e6a6a3fc6,
    '/dashboard/hotels': store02e01008641fd23e3f9ce17ed9cd07d7,
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
const showd3d51a6f484471e7e3d3472984b285ae = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showd3d51a6f484471e7e3d3472984b285ae.url(args, options),
    method: 'get',
})

showd3d51a6f484471e7e3d3472984b285ae.definition = {
    methods: ["get","head"],
    url: '/api/v1/dashboard/hotels/{hotel}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
showd3d51a6f484471e7e3d3472984b285ae.url = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return showd3d51a6f484471e7e3d3472984b285ae.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
showd3d51a6f484471e7e3d3472984b285ae.get = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showd3d51a6f484471e7e3d3472984b285ae.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
showd3d51a6f484471e7e3d3472984b285ae.head = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showd3d51a6f484471e7e3d3472984b285ae.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
const showd3d51a6f484471e7e3d3472984b285aeForm = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showd3d51a6f484471e7e3d3472984b285ae.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
showd3d51a6f484471e7e3d3472984b285aeForm.get = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showd3d51a6f484471e7e3d3472984b285ae.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
showd3d51a6f484471e7e3d3472984b285aeForm.head = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showd3d51a6f484471e7e3d3472984b285ae.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showd3d51a6f484471e7e3d3472984b285ae.form = showd3d51a6f484471e7e3d3472984b285aeForm
/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/dashboard/hotels/{hotel}'
*/
const show8fad53425cb0edf8ea00f113c38cc634 = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show8fad53425cb0edf8ea00f113c38cc634.url(args, options),
    method: 'get',
})

show8fad53425cb0edf8ea00f113c38cc634.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotels/{hotel}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/dashboard/hotels/{hotel}'
*/
show8fad53425cb0edf8ea00f113c38cc634.url = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return show8fad53425cb0edf8ea00f113c38cc634.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/dashboard/hotels/{hotel}'
*/
show8fad53425cb0edf8ea00f113c38cc634.get = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show8fad53425cb0edf8ea00f113c38cc634.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/dashboard/hotels/{hotel}'
*/
show8fad53425cb0edf8ea00f113c38cc634.head = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show8fad53425cb0edf8ea00f113c38cc634.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/dashboard/hotels/{hotel}'
*/
const show8fad53425cb0edf8ea00f113c38cc634Form = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show8fad53425cb0edf8ea00f113c38cc634.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/dashboard/hotels/{hotel}'
*/
show8fad53425cb0edf8ea00f113c38cc634Form.get = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show8fad53425cb0edf8ea00f113c38cc634.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/dashboard/hotels/{hotel}'
*/
show8fad53425cb0edf8ea00f113c38cc634Form.head = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show8fad53425cb0edf8ea00f113c38cc634.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show8fad53425cb0edf8ea00f113c38cc634.form = show8fad53425cb0edf8ea00f113c38cc634Form

export const show = {
    '/api/v1/dashboard/hotels/{hotel}': showd3d51a6f484471e7e3d3472984b285ae,
    '/dashboard/hotels/{hotel}': show8fad53425cb0edf8ea00f113c38cc634,
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:70
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
const updated3d51a6f484471e7e3d3472984b285ae = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updated3d51a6f484471e7e3d3472984b285ae.url(args, options),
    method: 'put',
})

updated3d51a6f484471e7e3d3472984b285ae.definition = {
    methods: ["put","patch"],
    url: '/api/v1/dashboard/hotels/{hotel}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:70
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
updated3d51a6f484471e7e3d3472984b285ae.url = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return updated3d51a6f484471e7e3d3472984b285ae.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:70
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
updated3d51a6f484471e7e3d3472984b285ae.put = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updated3d51a6f484471e7e3d3472984b285ae.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:70
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
updated3d51a6f484471e7e3d3472984b285ae.patch = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updated3d51a6f484471e7e3d3472984b285ae.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:70
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
const updated3d51a6f484471e7e3d3472984b285aeForm = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updated3d51a6f484471e7e3d3472984b285ae.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:70
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
updated3d51a6f484471e7e3d3472984b285aeForm.put = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updated3d51a6f484471e7e3d3472984b285ae.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:70
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
updated3d51a6f484471e7e3d3472984b285aeForm.patch = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updated3d51a6f484471e7e3d3472984b285ae.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updated3d51a6f484471e7e3d3472984b285ae.form = updated3d51a6f484471e7e3d3472984b285aeForm
/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:70
* @route '/dashboard/hotels/{hotel}'
*/
const update8fad53425cb0edf8ea00f113c38cc634 = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update8fad53425cb0edf8ea00f113c38cc634.url(args, options),
    method: 'put',
})

update8fad53425cb0edf8ea00f113c38cc634.definition = {
    methods: ["put","patch"],
    url: '/dashboard/hotels/{hotel}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:70
* @route '/dashboard/hotels/{hotel}'
*/
update8fad53425cb0edf8ea00f113c38cc634.url = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return update8fad53425cb0edf8ea00f113c38cc634.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:70
* @route '/dashboard/hotels/{hotel}'
*/
update8fad53425cb0edf8ea00f113c38cc634.put = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update8fad53425cb0edf8ea00f113c38cc634.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:70
* @route '/dashboard/hotels/{hotel}'
*/
update8fad53425cb0edf8ea00f113c38cc634.patch = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update8fad53425cb0edf8ea00f113c38cc634.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:70
* @route '/dashboard/hotels/{hotel}'
*/
const update8fad53425cb0edf8ea00f113c38cc634Form = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update8fad53425cb0edf8ea00f113c38cc634.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:70
* @route '/dashboard/hotels/{hotel}'
*/
update8fad53425cb0edf8ea00f113c38cc634Form.put = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update8fad53425cb0edf8ea00f113c38cc634.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:70
* @route '/dashboard/hotels/{hotel}'
*/
update8fad53425cb0edf8ea00f113c38cc634Form.patch = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update8fad53425cb0edf8ea00f113c38cc634.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update8fad53425cb0edf8ea00f113c38cc634.form = update8fad53425cb0edf8ea00f113c38cc634Form

export const update = {
    '/api/v1/dashboard/hotels/{hotel}': updated3d51a6f484471e7e3d3472984b285ae,
    '/dashboard/hotels/{hotel}': update8fad53425cb0edf8ea00f113c38cc634,
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:117
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
const destroyd3d51a6f484471e7e3d3472984b285ae = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyd3d51a6f484471e7e3d3472984b285ae.url(args, options),
    method: 'delete',
})

destroyd3d51a6f484471e7e3d3472984b285ae.definition = {
    methods: ["delete"],
    url: '/api/v1/dashboard/hotels/{hotel}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:117
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
destroyd3d51a6f484471e7e3d3472984b285ae.url = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return destroyd3d51a6f484471e7e3d3472984b285ae.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:117
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
destroyd3d51a6f484471e7e3d3472984b285ae.delete = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyd3d51a6f484471e7e3d3472984b285ae.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:117
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
const destroyd3d51a6f484471e7e3d3472984b285aeForm = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyd3d51a6f484471e7e3d3472984b285ae.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:117
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
destroyd3d51a6f484471e7e3d3472984b285aeForm.delete = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyd3d51a6f484471e7e3d3472984b285ae.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyd3d51a6f484471e7e3d3472984b285ae.form = destroyd3d51a6f484471e7e3d3472984b285aeForm
/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:117
* @route '/dashboard/hotels/{hotel}'
*/
const destroy8fad53425cb0edf8ea00f113c38cc634 = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy8fad53425cb0edf8ea00f113c38cc634.url(args, options),
    method: 'delete',
})

destroy8fad53425cb0edf8ea00f113c38cc634.definition = {
    methods: ["delete"],
    url: '/dashboard/hotels/{hotel}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:117
* @route '/dashboard/hotels/{hotel}'
*/
destroy8fad53425cb0edf8ea00f113c38cc634.url = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return destroy8fad53425cb0edf8ea00f113c38cc634.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:117
* @route '/dashboard/hotels/{hotel}'
*/
destroy8fad53425cb0edf8ea00f113c38cc634.delete = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy8fad53425cb0edf8ea00f113c38cc634.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:117
* @route '/dashboard/hotels/{hotel}'
*/
const destroy8fad53425cb0edf8ea00f113c38cc634Form = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy8fad53425cb0edf8ea00f113c38cc634.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:117
* @route '/dashboard/hotels/{hotel}'
*/
destroy8fad53425cb0edf8ea00f113c38cc634Form.delete = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy8fad53425cb0edf8ea00f113c38cc634.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy8fad53425cb0edf8ea00f113c38cc634.form = destroy8fad53425cb0edf8ea00f113c38cc634Form

export const destroy = {
    '/api/v1/dashboard/hotels/{hotel}': destroyd3d51a6f484471e7e3d3472984b285ae,
    '/dashboard/hotels/{hotel}': destroy8fad53425cb0edf8ea00f113c38cc634,
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:143
* @route '/dashboard/hotels/trash'
*/
export const trash = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

trash.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotels/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:143
* @route '/dashboard/hotels/trash'
*/
trash.url = (options?: RouteQueryOptions) => {
    return trash.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:143
* @route '/dashboard/hotels/trash'
*/
trash.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:143
* @route '/dashboard/hotels/trash'
*/
trash.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:143
* @route '/dashboard/hotels/trash'
*/
const trashForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:143
* @route '/dashboard/hotels/trash'
*/
trashForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:143
* @route '/dashboard/hotels/trash'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:153
* @route '/dashboard/hotels/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/hotels/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:153
* @route '/dashboard/hotels/{uuid}/restore'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:153
* @route '/dashboard/hotels/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:153
* @route '/dashboard/hotels/{uuid}/restore'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:153
* @route '/dashboard/hotels/{uuid}/restore'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:164
* @route '/dashboard/hotels/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/hotels/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:164
* @route '/dashboard/hotels/{uuid}/force-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:164
* @route '/dashboard/hotels/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:164
* @route '/dashboard/hotels/{uuid}/force-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:164
* @route '/dashboard/hotels/{uuid}/force-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::emptyTrash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:201
* @route '/dashboard/hotels/empty-trash'
*/
export const emptyTrash = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: emptyTrash.url(options),
    method: 'delete',
})

emptyTrash.definition = {
    methods: ["delete"],
    url: '/dashboard/hotels/empty-trash',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::emptyTrash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:201
* @route '/dashboard/hotels/empty-trash'
*/
emptyTrash.url = (options?: RouteQueryOptions) => {
    return emptyTrash.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::emptyTrash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:201
* @route '/dashboard/hotels/empty-trash'
*/
emptyTrash.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: emptyTrash.url(options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::emptyTrash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:201
* @route '/dashboard/hotels/empty-trash'
*/
const emptyTrashForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: emptyTrash.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::emptyTrash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:201
* @route '/dashboard/hotels/empty-trash'
*/
emptyTrashForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: emptyTrash.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

emptyTrash.form = emptyTrashForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmBulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:177
* @route '/dashboard/hotels/bulk-delete'
*/
export const confirmBulkDelete = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmBulkDelete.url(options),
    method: 'get',
})

confirmBulkDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotels/bulk-delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmBulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:177
* @route '/dashboard/hotels/bulk-delete'
*/
confirmBulkDelete.url = (options?: RouteQueryOptions) => {
    return confirmBulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmBulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:177
* @route '/dashboard/hotels/bulk-delete'
*/
confirmBulkDelete.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmBulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:177
* @route '/dashboard/hotels/bulk-delete'
*/
confirmBulkDelete.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmBulkDelete.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmBulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:177
* @route '/dashboard/hotels/bulk-delete'
*/
const confirmBulkDeleteForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmBulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:177
* @route '/dashboard/hotels/bulk-delete'
*/
confirmBulkDeleteForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmBulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:177
* @route '/dashboard/hotels/bulk-delete'
*/
confirmBulkDeleteForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmBulkDelete.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

confirmBulkDelete.form = confirmBulkDeleteForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:184
* @route '/dashboard/hotels/bulk-delete'
*/
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/hotels/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:184
* @route '/dashboard/hotels/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:184
* @route '/dashboard/hotels/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:184
* @route '/dashboard/hotels/bulk-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:184
* @route '/dashboard/hotels/bulk-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::bulkRestore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:193
* @route '/dashboard/hotels/bulk-restore'
*/
export const bulkRestore = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

bulkRestore.definition = {
    methods: ["put"],
    url: '/dashboard/hotels/bulk-restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::bulkRestore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:193
* @route '/dashboard/hotels/bulk-restore'
*/
bulkRestore.url = (options?: RouteQueryOptions) => {
    return bulkRestore.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::bulkRestore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:193
* @route '/dashboard/hotels/bulk-restore'
*/
bulkRestore.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::bulkRestore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:193
* @route '/dashboard/hotels/bulk-restore'
*/
const bulkRestoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkRestore.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::bulkRestore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:193
* @route '/dashboard/hotels/bulk-restore'
*/
bulkRestoreForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkRestore.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

bulkRestore.form = bulkRestoreForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::toggleFeatured
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:126
* @route '/dashboard/hotels/{hotel}/toggle-featured'
*/
export const toggleFeatured = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleFeatured.url(args, options),
    method: 'patch',
})

toggleFeatured.definition = {
    methods: ["patch"],
    url: '/dashboard/hotels/{hotel}/toggle-featured',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::toggleFeatured
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:126
* @route '/dashboard/hotels/{hotel}/toggle-featured'
*/
toggleFeatured.url = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return toggleFeatured.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::toggleFeatured
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:126
* @route '/dashboard/hotels/{hotel}/toggle-featured'
*/
toggleFeatured.patch = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleFeatured.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::toggleFeatured
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:126
* @route '/dashboard/hotels/{hotel}/toggle-featured'
*/
const toggleFeaturedForm = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleFeatured.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::toggleFeatured
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:126
* @route '/dashboard/hotels/{hotel}/toggle-featured'
*/
toggleFeaturedForm.patch = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleFeatured.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleFeatured.form = toggleFeaturedForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::updateStatus
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:133
* @route '/dashboard/hotels/{hotel}/update-status'
*/
export const updateStatus = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStatus.url(args, options),
    method: 'patch',
})

updateStatus.definition = {
    methods: ["patch"],
    url: '/dashboard/hotels/{hotel}/update-status',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::updateStatus
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:133
* @route '/dashboard/hotels/{hotel}/update-status'
*/
updateStatus.url = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return updateStatus.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::updateStatus
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:133
* @route '/dashboard/hotels/{hotel}/update-status'
*/
updateStatus.patch = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStatus.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::updateStatus
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:133
* @route '/dashboard/hotels/{hotel}/update-status'
*/
const updateStatusForm = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::updateStatus
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:133
* @route '/dashboard/hotels/{hotel}/update-status'
*/
updateStatusForm.patch = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::discount
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:79
* @route '/dashboard/hotels/{hotel}/discount'
*/
export const discount = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: discount.url(args, options),
    method: 'get',
})

discount.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotels/{hotel}/discount',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::discount
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:79
* @route '/dashboard/hotels/{hotel}/discount'
*/
discount.url = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return discount.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::discount
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:79
* @route '/dashboard/hotels/{hotel}/discount'
*/
discount.get = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: discount.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::discount
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:79
* @route '/dashboard/hotels/{hotel}/discount'
*/
discount.head = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: discount.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::discount
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:79
* @route '/dashboard/hotels/{hotel}/discount'
*/
const discountForm = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: discount.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::discount
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:79
* @route '/dashboard/hotels/{hotel}/discount'
*/
discountForm.get = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: discount.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::discount
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:79
* @route '/dashboard/hotels/{hotel}/discount'
*/
discountForm.head = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: discount.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

discount.form = discountForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::updateDiscount
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:88
* @route '/dashboard/hotels/{hotel}/discount'
*/
export const updateDiscount = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateDiscount.url(args, options),
    method: 'patch',
})

updateDiscount.definition = {
    methods: ["patch"],
    url: '/dashboard/hotels/{hotel}/discount',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::updateDiscount
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:88
* @route '/dashboard/hotels/{hotel}/discount'
*/
updateDiscount.url = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return updateDiscount.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::updateDiscount
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:88
* @route '/dashboard/hotels/{hotel}/discount'
*/
updateDiscount.patch = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateDiscount.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::updateDiscount
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:88
* @route '/dashboard/hotels/{hotel}/discount'
*/
const updateDiscountForm = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateDiscount.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::updateDiscount
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:88
* @route '/dashboard/hotels/{hotel}/discount'
*/
updateDiscountForm.patch = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateDiscount.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateDiscount.form = updateDiscountForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:64
* @route '/dashboard/hotels/{hotel}/confirm-delete'
*/
export const confirmDelete = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotels/{hotel}/confirm-delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:64
* @route '/dashboard/hotels/{hotel}/confirm-delete'
*/
confirmDelete.url = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return confirmDelete.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:64
* @route '/dashboard/hotels/{hotel}/confirm-delete'
*/
confirmDelete.get = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:64
* @route '/dashboard/hotels/{hotel}/confirm-delete'
*/
confirmDelete.head = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:64
* @route '/dashboard/hotels/{hotel}/confirm-delete'
*/
const confirmDeleteForm = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:64
* @route '/dashboard/hotels/{hotel}/confirm-delete'
*/
confirmDeleteForm.get = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:64
* @route '/dashboard/hotels/{hotel}/confirm-delete'
*/
confirmDeleteForm.head = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

confirmDelete.form = confirmDeleteForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:38
* @route '/dashboard/hotels/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotels/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:38
* @route '/dashboard/hotels/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:38
* @route '/dashboard/hotels/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:38
* @route '/dashboard/hotels/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:38
* @route '/dashboard/hotels/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:38
* @route '/dashboard/hotels/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:38
* @route '/dashboard/hotels/create'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:58
* @route '/dashboard/hotels/{hotel}/edit'
*/
export const edit = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotels/{hotel}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:58
* @route '/dashboard/hotels/{hotel}/edit'
*/
edit.url = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:58
* @route '/dashboard/hotels/{hotel}/edit'
*/
edit.get = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:58
* @route '/dashboard/hotels/{hotel}/edit'
*/
edit.head = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:58
* @route '/dashboard/hotels/{hotel}/edit'
*/
const editForm = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:58
* @route '/dashboard/hotels/{hotel}/edit'
*/
editForm.get = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:58
* @route '/dashboard/hotels/{hotel}/edit'
*/
editForm.head = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const HotelController = { index, store, show, update, destroy, trash, restore, forceDelete, emptyTrash, confirmBulkDelete, bulkDelete, bulkRestore, toggleFeatured, updateStatus, discount, updateDiscount, confirmDelete, create, edit }

export default HotelController