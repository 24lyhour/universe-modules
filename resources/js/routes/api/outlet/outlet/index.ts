import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:26
* @route '/api/outlets/outlets'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/outlets/outlets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:26
* @route '/api/outlets/outlets'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:26
* @route '/api/outlets/outlets'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:26
* @route '/api/outlets/outlets'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:47
* @route '/api/outlets/outlets'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/outlets/outlets',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:47
* @route '/api/outlets/outlets'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:47
* @route '/api/outlets/outlets'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:60
* @route '/api/outlets/outlets/{outlet}'
*/
export const show = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/outlets/outlets/{outlet}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:60
* @route '/api/outlets/outlets/{outlet}'
*/
show.url = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outlet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.id
        : args.outlet,
    }

    return show.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:60
* @route '/api/outlets/outlets/{outlet}'
*/
show.get = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:60
* @route '/api/outlets/outlets/{outlet}'
*/
show.head = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:70
* @route '/api/outlets/outlets/{outlet}'
*/
export const update = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/outlets/outlets/{outlet}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:70
* @route '/api/outlets/outlets/{outlet}'
*/
update.url = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outlet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.id
        : args.outlet,
    }

    return update.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:70
* @route '/api/outlets/outlets/{outlet}'
*/
update.put = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:70
* @route '/api/outlets/outlets/{outlet}'
*/
update.patch = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:83
* @route '/api/outlets/outlets/{outlet}'
*/
export const destroy = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/outlets/outlets/{outlet}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:83
* @route '/api/outlets/outlets/{outlet}'
*/
destroy.url = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outlet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.id
        : args.outlet,
    }

    return destroy.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:83
* @route '/api/outlets/outlets/{outlet}'
*/
destroy.delete = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:95
* @route '/api/outlets/outlets-stats'
*/
export const stats = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

stats.definition = {
    methods: ["get","head"],
    url: '/api/outlets/outlets-stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:95
* @route '/api/outlets/outlets-stats'
*/
stats.url = (options?: RouteQueryOptions) => {
    return stats.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:95
* @route '/api/outlets/outlets-stats'
*/
stats.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:95
* @route '/api/outlets/outlets-stats'
*/
stats.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stats.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::search
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:105
* @route '/api/outlets/outlets-search'
*/
export const search = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/api/outlets/outlets-search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::search
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:105
* @route '/api/outlets/outlets-search'
*/
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::search
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:105
* @route '/api/outlets/outlets-search'
*/
search.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::search
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:105
* @route '/api/outlets/outlets-search'
*/
search.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:120
* @route '/api/outlets/outlets/{outlet}/activate'
*/
export const activate = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activate.url(args, options),
    method: 'patch',
})

activate.definition = {
    methods: ["patch"],
    url: '/api/outlets/outlets/{outlet}/activate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:120
* @route '/api/outlets/outlets/{outlet}/activate'
*/
activate.url = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outlet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.id
        : args.outlet,
    }

    return activate.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:120
* @route '/api/outlets/outlets/{outlet}/activate'
*/
activate.patch = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activate.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:133
* @route '/api/outlets/outlets/{outlet}/deactivate'
*/
export const deactivate = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate.url(args, options),
    method: 'patch',
})

deactivate.definition = {
    methods: ["patch"],
    url: '/api/outlets/outlets/{outlet}/deactivate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:133
* @route '/api/outlets/outlets/{outlet}/deactivate'
*/
deactivate.url = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outlet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.id
        : args.outlet,
    }

    return deactivate.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:133
* @route '/api/outlets/outlets/{outlet}/deactivate'
*/
deactivate.patch = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate.url(args, options),
    method: 'patch',
})

const outlet = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    stats: Object.assign(stats, stats),
    search: Object.assign(search, search),
    activate: Object.assign(activate, activate),
    deactivate: Object.assign(deactivate, deactivate),
}

export default outlet