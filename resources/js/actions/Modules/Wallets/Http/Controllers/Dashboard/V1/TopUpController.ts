import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
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
export const show = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
show.url = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
show.get = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:88
* @route '/dashboard/topups/{topup}'
*/
show.head = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:88
* @route '/dashboard/topups/{topup}'
*/
const showForm = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:88
* @route '/dashboard/topups/{topup}'
*/
showForm.get = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:88
* @route '/dashboard/topups/{topup}'
*/
showForm.head = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::confirmDelete
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:118
* @route '/dashboard/topups/{topup}/delete'
*/
export const confirmDelete = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/topups/{topup}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::confirmDelete
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:118
* @route '/dashboard/topups/{topup}/delete'
*/
confirmDelete.url = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return confirmDelete.definition.url
            .replace('{topup}', parsedArgs.topup.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::confirmDelete
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:118
* @route '/dashboard/topups/{topup}/delete'
*/
confirmDelete.get = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::confirmDelete
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:118
* @route '/dashboard/topups/{topup}/delete'
*/
confirmDelete.head = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::confirmDelete
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:118
* @route '/dashboard/topups/{topup}/delete'
*/
const confirmDeleteForm = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::confirmDelete
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:118
* @route '/dashboard/topups/{topup}/delete'
*/
confirmDeleteForm.get = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::confirmDelete
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:118
* @route '/dashboard/topups/{topup}/delete'
*/
confirmDeleteForm.head = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::destroy
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:131
* @route '/dashboard/topups/{topup}'
*/
export const destroy = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
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
destroy.url = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
destroy.delete = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::destroy
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:131
* @route '/dashboard/topups/{topup}'
*/
const destroyForm = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
destroyForm.delete = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
export const complete = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
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
complete.url = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
complete.patch = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: complete.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::complete
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:147
* @route '/dashboard/topups/{topup}/complete'
*/
const completeForm = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
completeForm.patch = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
export const cancel = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
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
cancel.url = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
cancel.patch = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: cancel.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::cancel
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:163
* @route '/dashboard/topups/{topup}/cancel'
*/
const cancelForm = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
cancelForm.patch = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::markFailed
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:175
* @route '/dashboard/topups/{topup}/fail'
*/
export const markFailed = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: markFailed.url(args, options),
    method: 'patch',
})

markFailed.definition = {
    methods: ["patch"],
    url: '/dashboard/topups/{topup}/fail',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::markFailed
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:175
* @route '/dashboard/topups/{topup}/fail'
*/
markFailed.url = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return markFailed.definition.url
            .replace('{topup}', parsedArgs.topup.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::markFailed
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:175
* @route '/dashboard/topups/{topup}/fail'
*/
markFailed.patch = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: markFailed.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::markFailed
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:175
* @route '/dashboard/topups/{topup}/fail'
*/
const markFailedForm = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markFailed.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TopUpController::markFailed
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TopUpController.php:175
* @route '/dashboard/topups/{topup}/fail'
*/
markFailedForm.patch = (args: { topup: string | number | { id: string | number } } | [topup: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markFailed.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

markFailed.form = markFailedForm

const TopUpController = { index, create, store, show, confirmDelete, destroy, complete, cancel, markFailed }

export default TopUpController