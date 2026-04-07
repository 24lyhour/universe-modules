import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/api/v1/hotels'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/hotels',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/api/v1/hotels'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/api/v1/hotels'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/api/v1/hotels'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:42
* @route '/api/v1/hotels'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/hotels',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:42
* @route '/api/v1/hotels'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:42
* @route '/api/v1/hotels'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/api/v1/hotels/{hotel}'
*/
export const show = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/hotels/{hotel}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/api/v1/hotels/{hotel}'
*/
show.url = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hotel: args }
    }

    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: args.hotel,
    }

    return show.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/api/v1/hotels/{hotel}'
*/
show.get = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/api/v1/hotels/{hotel}'
*/
show.head = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/api/v1/hotels/{hotel}'
*/
export const update = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/hotels/{hotel}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/api/v1/hotels/{hotel}'
*/
update.url = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hotel: args }
    }

    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: args.hotel,
    }

    return update.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/api/v1/hotels/{hotel}'
*/
update.put = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/api/v1/hotels/{hotel}'
*/
update.patch = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:102
* @route '/api/v1/hotels/{hotel}'
*/
export const destroy = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/hotels/{hotel}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:102
* @route '/api/v1/hotels/{hotel}'
*/
destroy.url = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hotel: args }
    }

    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: args.hotel,
    }

    return destroy.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:102
* @route '/api/v1/hotels/{hotel}'
*/
destroy.delete = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const hotel = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default hotel