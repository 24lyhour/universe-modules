import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/hotels'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/hotels',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/hotels'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/hotels'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/hotels'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:34
* @route '/hotels/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/hotels/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:34
* @route '/hotels/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:34
* @route '/hotels/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:34
* @route '/hotels/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:42
* @route '/hotels'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/hotels',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:42
* @route '/hotels'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:42
* @route '/hotels'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/hotels/{hotel}'
*/
export const show = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/hotels/{hotel}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/hotels/{hotel}'
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
* @route '/hotels/{hotel}'
*/
show.get = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/hotels/{hotel}'
*/
show.head = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:70
* @route '/hotels/{hotel}/edit'
*/
export const edit = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/hotels/{hotel}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:70
* @route '/hotels/{hotel}/edit'
*/
edit.url = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:70
* @route '/hotels/{hotel}/edit'
*/
edit.get = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:70
* @route '/hotels/{hotel}/edit'
*/
edit.head = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/hotels/{hotel}'
*/
export const update = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/hotels/{hotel}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/hotels/{hotel}'
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
* @route '/hotels/{hotel}'
*/
update.put = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/hotels/{hotel}'
*/
update.patch = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:102
* @route '/hotels/{hotel}'
*/
export const destroy = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/hotels/{hotel}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:102
* @route '/hotels/{hotel}'
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
* @route '/hotels/{hotel}'
*/
destroy.delete = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const hotel = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default hotel