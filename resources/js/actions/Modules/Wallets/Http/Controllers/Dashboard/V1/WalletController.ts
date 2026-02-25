import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:25
* @route '/dashboard/wallets'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/wallets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:25
* @route '/dashboard/wallets'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:25
* @route '/dashboard/wallets'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:25
* @route '/dashboard/wallets'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:76
* @route '/dashboard/wallets/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/wallets/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:76
* @route '/dashboard/wallets/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:76
* @route '/dashboard/wallets/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:76
* @route '/dashboard/wallets/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::store
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:91
* @route '/dashboard/wallets'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/wallets',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::store
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:91
* @route '/dashboard/wallets'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::store
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:91
* @route '/dashboard/wallets'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:103
* @route '/dashboard/wallets/{wallet}'
*/
export const show = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/wallets/{wallet}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:103
* @route '/dashboard/wallets/{wallet}'
*/
show.url = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { wallet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { wallet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            wallet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        wallet: typeof args.wallet === 'object'
        ? args.wallet.id
        : args.wallet,
    }

    return show.definition.url
            .replace('{wallet}', parsedArgs.wallet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:103
* @route '/dashboard/wallets/{wallet}'
*/
show.get = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:103
* @route '/dashboard/wallets/{wallet}'
*/
show.head = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::edit
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:113
* @route '/dashboard/wallets/{wallet}/edit'
*/
export const edit = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/wallets/{wallet}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::edit
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:113
* @route '/dashboard/wallets/{wallet}/edit'
*/
edit.url = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { wallet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { wallet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            wallet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        wallet: typeof args.wallet === 'object'
        ? args.wallet.id
        : args.wallet,
    }

    return edit.definition.url
            .replace('{wallet}', parsedArgs.wallet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::edit
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:113
* @route '/dashboard/wallets/{wallet}/edit'
*/
edit.get = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::edit
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:113
* @route '/dashboard/wallets/{wallet}/edit'
*/
edit.head = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::update
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:129
* @route '/dashboard/wallets/{wallet}'
*/
export const update = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/wallets/{wallet}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::update
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:129
* @route '/dashboard/wallets/{wallet}'
*/
update.url = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { wallet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { wallet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            wallet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        wallet: typeof args.wallet === 'object'
        ? args.wallet.id
        : args.wallet,
    }

    return update.definition.url
            .replace('{wallet}', parsedArgs.wallet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::update
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:129
* @route '/dashboard/wallets/{wallet}'
*/
update.put = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::update
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:129
* @route '/dashboard/wallets/{wallet}'
*/
update.patch = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::destroy
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:151
* @route '/dashboard/wallets/{wallet}'
*/
export const destroy = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/wallets/{wallet}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::destroy
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:151
* @route '/dashboard/wallets/{wallet}'
*/
destroy.url = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { wallet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { wallet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            wallet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        wallet: typeof args.wallet === 'object'
        ? args.wallet.id
        : args.wallet,
    }

    return destroy.definition.url
            .replace('{wallet}', parsedArgs.wallet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::destroy
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:151
* @route '/dashboard/wallets/{wallet}'
*/
destroy.delete = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::confirmDelete
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:141
* @route '/dashboard/wallets/{wallet}/delete'
*/
export const confirmDelete = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/wallets/{wallet}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::confirmDelete
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:141
* @route '/dashboard/wallets/{wallet}/delete'
*/
confirmDelete.url = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { wallet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { wallet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            wallet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        wallet: typeof args.wallet === 'object'
        ? args.wallet.id
        : args.wallet,
    }

    return confirmDelete.definition.url
            .replace('{wallet}', parsedArgs.wallet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::confirmDelete
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:141
* @route '/dashboard/wallets/{wallet}/delete'
*/
confirmDelete.get = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::confirmDelete
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:141
* @route '/dashboard/wallets/{wallet}/delete'
*/
confirmDelete.head = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::activate
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:163
* @route '/dashboard/wallets/{wallet}/activate'
*/
export const activate = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activate.url(args, options),
    method: 'patch',
})

activate.definition = {
    methods: ["patch"],
    url: '/dashboard/wallets/{wallet}/activate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::activate
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:163
* @route '/dashboard/wallets/{wallet}/activate'
*/
activate.url = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { wallet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { wallet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            wallet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        wallet: typeof args.wallet === 'object'
        ? args.wallet.id
        : args.wallet,
    }

    return activate.definition.url
            .replace('{wallet}', parsedArgs.wallet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::activate
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:163
* @route '/dashboard/wallets/{wallet}/activate'
*/
activate.patch = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activate.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::deactivate
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:175
* @route '/dashboard/wallets/{wallet}/deactivate'
*/
export const deactivate = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate.url(args, options),
    method: 'patch',
})

deactivate.definition = {
    methods: ["patch"],
    url: '/dashboard/wallets/{wallet}/deactivate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::deactivate
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:175
* @route '/dashboard/wallets/{wallet}/deactivate'
*/
deactivate.url = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { wallet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { wallet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            wallet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        wallet: typeof args.wallet === 'object'
        ? args.wallet.id
        : args.wallet,
    }

    return deactivate.definition.url
            .replace('{wallet}', parsedArgs.wallet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::deactivate
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:175
* @route '/dashboard/wallets/{wallet}/deactivate'
*/
deactivate.patch = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::suspend
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:187
* @route '/dashboard/wallets/{wallet}/suspend'
*/
export const suspend = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: suspend.url(args, options),
    method: 'patch',
})

suspend.definition = {
    methods: ["patch"],
    url: '/dashboard/wallets/{wallet}/suspend',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::suspend
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:187
* @route '/dashboard/wallets/{wallet}/suspend'
*/
suspend.url = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { wallet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { wallet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            wallet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        wallet: typeof args.wallet === 'object'
        ? args.wallet.id
        : args.wallet,
    }

    return suspend.definition.url
            .replace('{wallet}', parsedArgs.wallet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::suspend
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:187
* @route '/dashboard/wallets/{wallet}/suspend'
*/
suspend.patch = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: suspend.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::unsuspend
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:203
* @route '/dashboard/wallets/{wallet}/unsuspend'
*/
export const unsuspend = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: unsuspend.url(args, options),
    method: 'patch',
})

unsuspend.definition = {
    methods: ["patch"],
    url: '/dashboard/wallets/{wallet}/unsuspend',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::unsuspend
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:203
* @route '/dashboard/wallets/{wallet}/unsuspend'
*/
unsuspend.url = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { wallet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { wallet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            wallet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        wallet: typeof args.wallet === 'object'
        ? args.wallet.id
        : args.wallet,
    }

    return unsuspend.definition.url
            .replace('{wallet}', parsedArgs.wallet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::unsuspend
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:203
* @route '/dashboard/wallets/{wallet}/unsuspend'
*/
unsuspend.patch = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: unsuspend.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::changeStatus
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:215
* @route '/dashboard/wallets/{wallet}/status'
*/
export const changeStatus = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: changeStatus.url(args, options),
    method: 'patch',
})

changeStatus.definition = {
    methods: ["patch"],
    url: '/dashboard/wallets/{wallet}/status',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::changeStatus
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:215
* @route '/dashboard/wallets/{wallet}/status'
*/
changeStatus.url = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { wallet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { wallet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            wallet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        wallet: typeof args.wallet === 'object'
        ? args.wallet.id
        : args.wallet,
    }

    return changeStatus.definition.url
            .replace('{wallet}', parsedArgs.wallet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletController::changeStatus
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletController.php:215
* @route '/dashboard/wallets/{wallet}/status'
*/
changeStatus.patch = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: changeStatus.url(args, options),
    method: 'patch',
})

const WalletController = { index, create, store, show, edit, update, destroy, confirmDelete, activate, deactivate, suspend, unsuspend, changeStatus }

export default WalletController