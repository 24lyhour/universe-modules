import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/api/v1/dashboard/hotels'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/dashboard/hotels',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/api/v1/dashboard/hotels'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/api/v1/dashboard/hotels'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/api/v1/dashboard/hotels'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/api/v1/dashboard/hotels'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/api/v1/dashboard/hotels'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/api/v1/dashboard/hotels'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:44
* @route '/api/v1/dashboard/hotels'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/dashboard/hotels',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:44
* @route '/api/v1/dashboard/hotels'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:44
* @route '/api/v1/dashboard/hotels'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:44
* @route '/api/v1/dashboard/hotels'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:44
* @route '/api/v1/dashboard/hotels'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
export const show = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/dashboard/hotels/{hotel}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
show.url = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
show.get = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
show.head = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
const showForm = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
showForm.get = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:53
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
showForm.head = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:70
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
export const update = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/dashboard/hotels/{hotel}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:70
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
update.url = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:70
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
update.put = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:70
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
update.patch = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:70
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
const updateForm = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
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
updateForm.put = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
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
updateForm.patch = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:117
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
export const destroy = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/dashboard/hotels/{hotel}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:117
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
destroy.url = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:117
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
destroy.delete = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:117
* @route '/api/v1/dashboard/hotels/{hotel}'
*/
const destroyForm = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
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
destroyForm.delete = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const hotels = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default hotels