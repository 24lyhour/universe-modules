import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Movice\Http\Controllers\MoviceController::index
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:13
* @route '/api/v1/movices'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/movices',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::index
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:13
* @route '/api/v1/movices'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::index
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:13
* @route '/api/v1/movices'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::index
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:13
* @route '/api/v1/movices'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::store
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:29
* @route '/api/v1/movices'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/movices',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::store
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:29
* @route '/api/v1/movices'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::store
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:29
* @route '/api/v1/movices'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::show
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:34
* @route '/api/v1/movices/{movice}'
*/
export const show = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/movices/{movice}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::show
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:34
* @route '/api/v1/movices/{movice}'
*/
show.url = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { movice: args }
    }

    if (Array.isArray(args)) {
        args = {
            movice: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        movice: args.movice,
    }

    return show.definition.url
            .replace('{movice}', parsedArgs.movice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::show
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:34
* @route '/api/v1/movices/{movice}'
*/
show.get = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::show
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:34
* @route '/api/v1/movices/{movice}'
*/
show.head = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::update
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:50
* @route '/api/v1/movices/{movice}'
*/
export const update = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/movices/{movice}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::update
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:50
* @route '/api/v1/movices/{movice}'
*/
update.url = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { movice: args }
    }

    if (Array.isArray(args)) {
        args = {
            movice: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        movice: args.movice,
    }

    return update.definition.url
            .replace('{movice}', parsedArgs.movice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::update
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:50
* @route '/api/v1/movices/{movice}'
*/
update.put = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::update
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:50
* @route '/api/v1/movices/{movice}'
*/
update.patch = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::destroy
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:55
* @route '/api/v1/movices/{movice}'
*/
export const destroy = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/movices/{movice}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::destroy
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:55
* @route '/api/v1/movices/{movice}'
*/
destroy.url = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { movice: args }
    }

    if (Array.isArray(args)) {
        args = {
            movice: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        movice: args.movice,
    }

    return destroy.definition.url
            .replace('{movice}', parsedArgs.movice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::destroy
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:55
* @route '/api/v1/movices/{movice}'
*/
destroy.delete = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const movice = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default movice