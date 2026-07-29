import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:29
* @route '/dashboard/topups'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/topups',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:29
* @route '/dashboard/topups'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:29
* @route '/dashboard/topups'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:29
* @route '/dashboard/topups'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:29
* @route '/dashboard/topups'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:29
* @route '/dashboard/topups'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:29
* @route '/dashboard/topups'
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
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:42
* @route '/dashboard/topups/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/topups/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:42
* @route '/dashboard/topups/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:42
* @route '/dashboard/topups/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:42
* @route '/dashboard/topups/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:42
* @route '/dashboard/topups/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:42
* @route '/dashboard/topups/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:42
* @route '/dashboard/topups/create'
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
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::store
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:64
* @route '/dashboard/topups'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/topups',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::store
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:64
* @route '/dashboard/topups'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::store
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:64
* @route '/dashboard/topups'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::store
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:64
* @route '/dashboard/topups'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::store
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:64
* @route '/dashboard/topups'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:88
* @route '/dashboard/topups/{topup}'
*/
export const show = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/topups/{topup}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:88
* @route '/dashboard/topups/{topup}'
*/
show.url = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { topup: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { topup: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            topup: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        topup: typeof args.topup === 'object'
        ? args.topup.id
        : args.topup,
    }

    return show.definition.url
            .replace('{topup}', parsedArgs.topup.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:88
* @route '/dashboard/topups/{topup}'
*/
show.get = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:88
* @route '/dashboard/topups/{topup}'
*/
show.head = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:88
* @route '/dashboard/topups/{topup}'
*/
const showForm = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:88
* @route '/dashboard/topups/{topup}'
*/
showForm.get = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:88
* @route '/dashboard/topups/{topup}'
*/
showForm.head = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::deleteMethod
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:118
* @route '/dashboard/topups/{topup}/delete'
*/
export const deleteMethod = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

deleteMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/topups/{topup}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::deleteMethod
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:118
* @route '/dashboard/topups/{topup}/delete'
*/
deleteMethod.url = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { topup: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { topup: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            topup: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        topup: typeof args.topup === 'object'
        ? args.topup.id
        : args.topup,
    }

    return deleteMethod.definition.url
            .replace('{topup}', parsedArgs.topup.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::deleteMethod
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:118
* @route '/dashboard/topups/{topup}/delete'
*/
deleteMethod.get = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::deleteMethod
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:118
* @route '/dashboard/topups/{topup}/delete'
*/
deleteMethod.head = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleteMethod.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::deleteMethod
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:118
* @route '/dashboard/topups/{topup}/delete'
*/
const deleteMethodForm = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleteMethod.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::deleteMethod
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:118
* @route '/dashboard/topups/{topup}/delete'
*/
deleteMethodForm.get = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleteMethod.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::deleteMethod
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:118
* @route '/dashboard/topups/{topup}/delete'
*/
deleteMethodForm.head = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleteMethod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

deleteMethod.form = deleteMethodForm

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::destroy
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:131
* @route '/dashboard/topups/{topup}'
*/
export const destroy = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/topups/{topup}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::destroy
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:131
* @route '/dashboard/topups/{topup}'
*/
destroy.url = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { topup: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { topup: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            topup: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        topup: typeof args.topup === 'object'
        ? args.topup.id
        : args.topup,
    }

    return destroy.definition.url
            .replace('{topup}', parsedArgs.topup.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::destroy
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:131
* @route '/dashboard/topups/{topup}'
*/
destroy.delete = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::destroy
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:131
* @route '/dashboard/topups/{topup}'
*/
const destroyForm = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::destroy
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:131
* @route '/dashboard/topups/{topup}'
*/
destroyForm.delete = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::complete
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:147
* @route '/dashboard/topups/{topup}/complete'
*/
export const complete = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: complete.url(args, options),
    method: 'patch',
})

complete.definition = {
    methods: ["patch"],
    url: '/dashboard/topups/{topup}/complete',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::complete
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:147
* @route '/dashboard/topups/{topup}/complete'
*/
complete.url = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { topup: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { topup: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            topup: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        topup: typeof args.topup === 'object'
        ? args.topup.id
        : args.topup,
    }

    return complete.definition.url
            .replace('{topup}', parsedArgs.topup.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::complete
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:147
* @route '/dashboard/topups/{topup}/complete'
*/
complete.patch = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: complete.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::complete
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:147
* @route '/dashboard/topups/{topup}/complete'
*/
const completeForm = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::complete
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:147
* @route '/dashboard/topups/{topup}/complete'
*/
completeForm.patch = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

complete.form = completeForm

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::cancel
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:163
* @route '/dashboard/topups/{topup}/cancel'
*/
export const cancel = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: cancel.url(args, options),
    method: 'patch',
})

cancel.definition = {
    methods: ["patch"],
    url: '/dashboard/topups/{topup}/cancel',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::cancel
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:163
* @route '/dashboard/topups/{topup}/cancel'
*/
cancel.url = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { topup: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { topup: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            topup: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        topup: typeof args.topup === 'object'
        ? args.topup.id
        : args.topup,
    }

    return cancel.definition.url
            .replace('{topup}', parsedArgs.topup.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::cancel
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:163
* @route '/dashboard/topups/{topup}/cancel'
*/
cancel.patch = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: cancel.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::cancel
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:163
* @route '/dashboard/topups/{topup}/cancel'
*/
const cancelForm = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::cancel
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:163
* @route '/dashboard/topups/{topup}/cancel'
*/
cancelForm.patch = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

cancel.form = cancelForm

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::fail
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:175
* @route '/dashboard/topups/{topup}/fail'
*/
export const fail = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: fail.url(args, options),
    method: 'patch',
})

fail.definition = {
    methods: ["patch"],
    url: '/dashboard/topups/{topup}/fail',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::fail
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:175
* @route '/dashboard/topups/{topup}/fail'
*/
fail.url = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { topup: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { topup: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            topup: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        topup: typeof args.topup === 'object'
        ? args.topup.id
        : args.topup,
    }

    return fail.definition.url
            .replace('{topup}', parsedArgs.topup.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::fail
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:175
* @route '/dashboard/topups/{topup}/fail'
*/
fail.patch = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: fail.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::fail
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:175
* @route '/dashboard/topups/{topup}/fail'
*/
const failForm = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: fail.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::fail
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:175
* @route '/dashboard/topups/{topup}/fail'
*/
failForm.patch = (args: { topup: number | { id: number } } | [topup: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: fail.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

fail.form = failForm

const topups = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    delete: Object.assign(deleteMethod, deleteMethod),
    destroy: Object.assign(destroy, destroy),
    complete: Object.assign(complete, complete),
    cancel: Object.assign(cancel, cancel),
    fail: Object.assign(fail, fail),
}

export default topups