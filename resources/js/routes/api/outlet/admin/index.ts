import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:26
* @route '/api/v1/admin/outlets'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/admin/outlets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:26
* @route '/api/v1/admin/outlets'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:26
* @route '/api/v1/admin/outlets'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:26
* @route '/api/v1/admin/outlets'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:26
* @route '/api/v1/admin/outlets'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:26
* @route '/api/v1/admin/outlets'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:26
* @route '/api/v1/admin/outlets'
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:47
* @route '/api/v1/admin/outlets'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/admin/outlets',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:47
* @route '/api/v1/admin/outlets'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:47
* @route '/api/v1/admin/outlets'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:47
* @route '/api/v1/admin/outlets'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:47
* @route '/api/v1/admin/outlets'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:60
* @route '/api/v1/admin/outlets/{outlet}'
*/
export const show = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/admin/outlets/{outlet}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:60
* @route '/api/v1/admin/outlets/{outlet}'
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:60
* @route '/api/v1/admin/outlets/{outlet}'
*/
show.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:60
* @route '/api/v1/admin/outlets/{outlet}'
*/
show.head = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:60
* @route '/api/v1/admin/outlets/{outlet}'
*/
const showForm = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:60
* @route '/api/v1/admin/outlets/{outlet}'
*/
showForm.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:60
* @route '/api/v1/admin/outlets/{outlet}'
*/
showForm.head = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:70
* @route '/api/v1/admin/outlets/{outlet}'
*/
export const update = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/admin/outlets/{outlet}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:70
* @route '/api/v1/admin/outlets/{outlet}'
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:70
* @route '/api/v1/admin/outlets/{outlet}'
*/
update.put = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:70
* @route '/api/v1/admin/outlets/{outlet}'
*/
update.patch = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:70
* @route '/api/v1/admin/outlets/{outlet}'
*/
const updateForm = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:70
* @route '/api/v1/admin/outlets/{outlet}'
*/
updateForm.put = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:70
* @route '/api/v1/admin/outlets/{outlet}'
*/
updateForm.patch = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:83
* @route '/api/v1/admin/outlets/{outlet}'
*/
export const destroy = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/admin/outlets/{outlet}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:83
* @route '/api/v1/admin/outlets/{outlet}'
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:83
* @route '/api/v1/admin/outlets/{outlet}'
*/
destroy.delete = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:83
* @route '/api/v1/admin/outlets/{outlet}'
*/
const destroyForm = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:83
* @route '/api/v1/admin/outlets/{outlet}'
*/
destroyForm.delete = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:95
* @route '/api/v1/admin/outlets-stats'
*/
export const stats = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

stats.definition = {
    methods: ["get","head"],
    url: '/api/v1/admin/outlets-stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:95
* @route '/api/v1/admin/outlets-stats'
*/
stats.url = (options?: RouteQueryOptions) => {
    return stats.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:95
* @route '/api/v1/admin/outlets-stats'
*/
stats.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:95
* @route '/api/v1/admin/outlets-stats'
*/
stats.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stats.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:95
* @route '/api/v1/admin/outlets-stats'
*/
const statsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:95
* @route '/api/v1/admin/outlets-stats'
*/
statsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:95
* @route '/api/v1/admin/outlets-stats'
*/
statsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

stats.form = statsForm

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:120
* @route '/api/v1/admin/outlets/{outlet}/activate'
*/
export const activate = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activate.url(args, options),
    method: 'patch',
})

activate.definition = {
    methods: ["patch"],
    url: '/api/v1/admin/outlets/{outlet}/activate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:120
* @route '/api/v1/admin/outlets/{outlet}/activate'
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:120
* @route '/api/v1/admin/outlets/{outlet}/activate'
*/
activate.patch = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activate.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:120
* @route '/api/v1/admin/outlets/{outlet}/activate'
*/
const activateForm = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: activate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:120
* @route '/api/v1/admin/outlets/{outlet}/activate'
*/
activateForm.patch = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: activate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

activate.form = activateForm

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:133
* @route '/api/v1/admin/outlets/{outlet}/deactivate'
*/
export const deactivate = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate.url(args, options),
    method: 'patch',
})

deactivate.definition = {
    methods: ["patch"],
    url: '/api/v1/admin/outlets/{outlet}/deactivate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:133
* @route '/api/v1/admin/outlets/{outlet}/deactivate'
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:133
* @route '/api/v1/admin/outlets/{outlet}/deactivate'
*/
deactivate.patch = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:133
* @route '/api/v1/admin/outlets/{outlet}/deactivate'
*/
const deactivateForm = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deactivate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:133
* @route '/api/v1/admin/outlets/{outlet}/deactivate'
*/
deactivateForm.patch = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deactivate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deactivate.form = deactivateForm

const admin = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    stats: Object.assign(stats, stats),
    activate: Object.assign(activate, activate),
    deactivate: Object.assign(deactivate, deactivate),
}

export default admin