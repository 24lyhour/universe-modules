import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:20
* @route '/api/tenant/v1/outlets'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/tenant/v1/outlets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:20
* @route '/api/tenant/v1/outlets'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:20
* @route '/api/tenant/v1/outlets'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:20
* @route '/api/tenant/v1/outlets'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:20
* @route '/api/tenant/v1/outlets'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:20
* @route '/api/tenant/v1/outlets'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:20
* @route '/api/tenant/v1/outlets'
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:33
* @route '/api/tenant/v1/outlets'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/tenant/v1/outlets',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:33
* @route '/api/tenant/v1/outlets'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:33
* @route '/api/tenant/v1/outlets'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:33
* @route '/api/tenant/v1/outlets'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:33
* @route '/api/tenant/v1/outlets'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:61
* @route '/api/tenant/v1/outlets/{outlet}'
*/
export const show = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/tenant/v1/outlets/{outlet}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:61
* @route '/api/tenant/v1/outlets/{outlet}'
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:61
* @route '/api/tenant/v1/outlets/{outlet}'
*/
show.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:61
* @route '/api/tenant/v1/outlets/{outlet}'
*/
show.head = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:61
* @route '/api/tenant/v1/outlets/{outlet}'
*/
const showForm = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:61
* @route '/api/tenant/v1/outlets/{outlet}'
*/
showForm.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:61
* @route '/api/tenant/v1/outlets/{outlet}'
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:68
* @route '/api/tenant/v1/outlets/{outlet}'
*/
export const update = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/api/tenant/v1/outlets/{outlet}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:68
* @route '/api/tenant/v1/outlets/{outlet}'
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:68
* @route '/api/tenant/v1/outlets/{outlet}'
*/
update.patch = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:68
* @route '/api/tenant/v1/outlets/{outlet}'
*/
const updateForm = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:68
* @route '/api/tenant/v1/outlets/{outlet}'
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:92
* @route '/api/tenant/v1/outlets/{outlet}'
*/
export const destroy = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/tenant/v1/outlets/{outlet}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:92
* @route '/api/tenant/v1/outlets/{outlet}'
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:92
* @route '/api/tenant/v1/outlets/{outlet}'
*/
destroy.delete = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:92
* @route '/api/tenant/v1/outlets/{outlet}'
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\Tenant\OutletController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Tenant/OutletController.php:92
* @route '/api/tenant/v1/outlets/{outlet}'
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

const OutletController = { index, store, show, update, destroy }

export default OutletController