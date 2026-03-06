import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:20
* @route '/api/v1/outlets'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/outlets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:20
* @route '/api/v1/outlets'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:20
* @route '/api/v1/outlets'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:20
* @route '/api/v1/outlets'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::search
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:0
* @route '/api/v1/outlets-search'
*/
export const search = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/api/v1/outlets-search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::search
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:0
* @route '/api/v1/outlets-search'
*/
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::search
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:0
* @route '/api/v1/outlets-search'
*/
search.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::search
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:0
* @route '/api/v1/outlets-search'
*/
search.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:34
* @route '/api/v1/outlets'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/outlets',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:34
* @route '/api/v1/outlets'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:34
* @route '/api/v1/outlets'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:44
* @route '/api/v1/outlets/{outlet}'
*/
export const show = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/outlets/{outlet}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:44
* @route '/api/v1/outlets/{outlet}'
*/
show.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return show.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:44
* @route '/api/v1/outlets/{outlet}'
*/
show.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:44
* @route '/api/v1/outlets/{outlet}'
*/
show.head = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:51
* @route '/api/v1/outlets/{outlet}'
*/
export const update = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/outlets/{outlet}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:51
* @route '/api/v1/outlets/{outlet}'
*/
update.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return update.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:51
* @route '/api/v1/outlets/{outlet}'
*/
update.put = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:51
* @route '/api/v1/outlets/{outlet}'
*/
update.patch = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:61
* @route '/api/v1/outlets/{outlet}'
*/
export const destroy = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/outlets/{outlet}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:61
* @route '/api/v1/outlets/{outlet}'
*/
destroy.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return destroy.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:61
* @route '/api/v1/outlets/{outlet}'
*/
destroy.delete = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:68
* @route '/api/v1/outlets-stats'
*/
export const stats = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

stats.definition = {
    methods: ["get","head"],
    url: '/api/v1/outlets-stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:68
* @route '/api/v1/outlets-stats'
*/
stats.url = (options?: RouteQueryOptions) => {
    return stats.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:68
* @route '/api/v1/outlets-stats'
*/
stats.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:68
* @route '/api/v1/outlets-stats'
*/
stats.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stats.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:73
* @route '/api/v1/outlets/{outlet}/activate'
*/
export const activate = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activate.url(args, options),
    method: 'patch',
})

activate.definition = {
    methods: ["patch"],
    url: '/api/v1/outlets/{outlet}/activate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:73
* @route '/api/v1/outlets/{outlet}/activate'
*/
activate.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return activate.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:73
* @route '/api/v1/outlets/{outlet}/activate'
*/
activate.patch = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activate.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:83
* @route '/api/v1/outlets/{outlet}/deactivate'
*/
export const deactivate = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate.url(args, options),
    method: 'patch',
})

deactivate.definition = {
    methods: ["patch"],
    url: '/api/v1/outlets/{outlet}/deactivate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:83
* @route '/api/v1/outlets/{outlet}/deactivate'
*/
deactivate.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return deactivate.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:83
* @route '/api/v1/outlets/{outlet}/deactivate'
*/
deactivate.patch = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate.url(args, options),
    method: 'patch',
})

const outlet = {
    index: Object.assign(index, index),
    search: Object.assign(search, search),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    stats: Object.assign(stats, stats),
    activate: Object.assign(activate, activate),
    deactivate: Object.assign(deactivate, deactivate),
}

export default outlet