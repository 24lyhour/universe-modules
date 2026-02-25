import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Payment\Http\Controllers\PaymentController::index
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:13
* @route '/api/v1/payments'
*/
const indexe6eeaf48c96578edecbf757646846cd7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexe6eeaf48c96578edecbf757646846cd7.url(options),
    method: 'get',
})

indexe6eeaf48c96578edecbf757646846cd7.definition = {
    methods: ["get","head"],
    url: '/api/v1/payments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::index
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:13
* @route '/api/v1/payments'
*/
indexe6eeaf48c96578edecbf757646846cd7.url = (options?: RouteQueryOptions) => {
    return indexe6eeaf48c96578edecbf757646846cd7.definition.url + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::index
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:13
* @route '/api/v1/payments'
*/
indexe6eeaf48c96578edecbf757646846cd7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexe6eeaf48c96578edecbf757646846cd7.url(options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::index
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:13
* @route '/api/v1/payments'
*/
indexe6eeaf48c96578edecbf757646846cd7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexe6eeaf48c96578edecbf757646846cd7.url(options),
    method: 'head',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::index
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:13
* @route '/payments'
*/
const index3716bc4c1885b225d47f9da4a37440dd = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index3716bc4c1885b225d47f9da4a37440dd.url(options),
    method: 'get',
})

index3716bc4c1885b225d47f9da4a37440dd.definition = {
    methods: ["get","head"],
    url: '/payments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::index
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:13
* @route '/payments'
*/
index3716bc4c1885b225d47f9da4a37440dd.url = (options?: RouteQueryOptions) => {
    return index3716bc4c1885b225d47f9da4a37440dd.definition.url + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::index
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:13
* @route '/payments'
*/
index3716bc4c1885b225d47f9da4a37440dd.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index3716bc4c1885b225d47f9da4a37440dd.url(options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::index
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:13
* @route '/payments'
*/
index3716bc4c1885b225d47f9da4a37440dd.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index3716bc4c1885b225d47f9da4a37440dd.url(options),
    method: 'head',
})

export const index = {
    '/api/v1/payments': indexe6eeaf48c96578edecbf757646846cd7,
    '/payments': index3716bc4c1885b225d47f9da4a37440dd,
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::store
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:29
* @route '/api/v1/payments'
*/
const storee6eeaf48c96578edecbf757646846cd7 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storee6eeaf48c96578edecbf757646846cd7.url(options),
    method: 'post',
})

storee6eeaf48c96578edecbf757646846cd7.definition = {
    methods: ["post"],
    url: '/api/v1/payments',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::store
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:29
* @route '/api/v1/payments'
*/
storee6eeaf48c96578edecbf757646846cd7.url = (options?: RouteQueryOptions) => {
    return storee6eeaf48c96578edecbf757646846cd7.definition.url + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::store
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:29
* @route '/api/v1/payments'
*/
storee6eeaf48c96578edecbf757646846cd7.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storee6eeaf48c96578edecbf757646846cd7.url(options),
    method: 'post',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::store
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:29
* @route '/payments'
*/
const store3716bc4c1885b225d47f9da4a37440dd = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store3716bc4c1885b225d47f9da4a37440dd.url(options),
    method: 'post',
})

store3716bc4c1885b225d47f9da4a37440dd.definition = {
    methods: ["post"],
    url: '/payments',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::store
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:29
* @route '/payments'
*/
store3716bc4c1885b225d47f9da4a37440dd.url = (options?: RouteQueryOptions) => {
    return store3716bc4c1885b225d47f9da4a37440dd.definition.url + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::store
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:29
* @route '/payments'
*/
store3716bc4c1885b225d47f9da4a37440dd.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store3716bc4c1885b225d47f9da4a37440dd.url(options),
    method: 'post',
})

export const store = {
    '/api/v1/payments': storee6eeaf48c96578edecbf757646846cd7,
    '/payments': store3716bc4c1885b225d47f9da4a37440dd,
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::show
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:34
* @route '/api/v1/payments/{payment}'
*/
const show34b76849124853c086fb0d5919bc537f = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show34b76849124853c086fb0d5919bc537f.url(args, options),
    method: 'get',
})

show34b76849124853c086fb0d5919bc537f.definition = {
    methods: ["get","head"],
    url: '/api/v1/payments/{payment}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::show
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:34
* @route '/api/v1/payments/{payment}'
*/
show34b76849124853c086fb0d5919bc537f.url = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { payment: args }
    }

    if (Array.isArray(args)) {
        args = {
            payment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        payment: args.payment,
    }

    return show34b76849124853c086fb0d5919bc537f.definition.url
            .replace('{payment}', parsedArgs.payment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::show
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:34
* @route '/api/v1/payments/{payment}'
*/
show34b76849124853c086fb0d5919bc537f.get = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show34b76849124853c086fb0d5919bc537f.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::show
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:34
* @route '/api/v1/payments/{payment}'
*/
show34b76849124853c086fb0d5919bc537f.head = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show34b76849124853c086fb0d5919bc537f.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::show
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:34
* @route '/payments/{payment}'
*/
const showd41d92c0c1073ab3b50b6c69549c869b = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showd41d92c0c1073ab3b50b6c69549c869b.url(args, options),
    method: 'get',
})

showd41d92c0c1073ab3b50b6c69549c869b.definition = {
    methods: ["get","head"],
    url: '/payments/{payment}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::show
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:34
* @route '/payments/{payment}'
*/
showd41d92c0c1073ab3b50b6c69549c869b.url = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { payment: args }
    }

    if (Array.isArray(args)) {
        args = {
            payment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        payment: args.payment,
    }

    return showd41d92c0c1073ab3b50b6c69549c869b.definition.url
            .replace('{payment}', parsedArgs.payment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::show
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:34
* @route '/payments/{payment}'
*/
showd41d92c0c1073ab3b50b6c69549c869b.get = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showd41d92c0c1073ab3b50b6c69549c869b.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::show
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:34
* @route '/payments/{payment}'
*/
showd41d92c0c1073ab3b50b6c69549c869b.head = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showd41d92c0c1073ab3b50b6c69549c869b.url(args, options),
    method: 'head',
})

export const show = {
    '/api/v1/payments/{payment}': show34b76849124853c086fb0d5919bc537f,
    '/payments/{payment}': showd41d92c0c1073ab3b50b6c69549c869b,
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::update
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:50
* @route '/api/v1/payments/{payment}'
*/
const update34b76849124853c086fb0d5919bc537f = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update34b76849124853c086fb0d5919bc537f.url(args, options),
    method: 'put',
})

update34b76849124853c086fb0d5919bc537f.definition = {
    methods: ["put","patch"],
    url: '/api/v1/payments/{payment}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::update
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:50
* @route '/api/v1/payments/{payment}'
*/
update34b76849124853c086fb0d5919bc537f.url = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { payment: args }
    }

    if (Array.isArray(args)) {
        args = {
            payment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        payment: args.payment,
    }

    return update34b76849124853c086fb0d5919bc537f.definition.url
            .replace('{payment}', parsedArgs.payment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::update
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:50
* @route '/api/v1/payments/{payment}'
*/
update34b76849124853c086fb0d5919bc537f.put = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update34b76849124853c086fb0d5919bc537f.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::update
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:50
* @route '/api/v1/payments/{payment}'
*/
update34b76849124853c086fb0d5919bc537f.patch = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update34b76849124853c086fb0d5919bc537f.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::update
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:50
* @route '/payments/{payment}'
*/
const updated41d92c0c1073ab3b50b6c69549c869b = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updated41d92c0c1073ab3b50b6c69549c869b.url(args, options),
    method: 'put',
})

updated41d92c0c1073ab3b50b6c69549c869b.definition = {
    methods: ["put","patch"],
    url: '/payments/{payment}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::update
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:50
* @route '/payments/{payment}'
*/
updated41d92c0c1073ab3b50b6c69549c869b.url = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { payment: args }
    }

    if (Array.isArray(args)) {
        args = {
            payment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        payment: args.payment,
    }

    return updated41d92c0c1073ab3b50b6c69549c869b.definition.url
            .replace('{payment}', parsedArgs.payment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::update
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:50
* @route '/payments/{payment}'
*/
updated41d92c0c1073ab3b50b6c69549c869b.put = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updated41d92c0c1073ab3b50b6c69549c869b.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::update
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:50
* @route '/payments/{payment}'
*/
updated41d92c0c1073ab3b50b6c69549c869b.patch = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updated41d92c0c1073ab3b50b6c69549c869b.url(args, options),
    method: 'patch',
})

export const update = {
    '/api/v1/payments/{payment}': update34b76849124853c086fb0d5919bc537f,
    '/payments/{payment}': updated41d92c0c1073ab3b50b6c69549c869b,
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::destroy
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:55
* @route '/api/v1/payments/{payment}'
*/
const destroy34b76849124853c086fb0d5919bc537f = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy34b76849124853c086fb0d5919bc537f.url(args, options),
    method: 'delete',
})

destroy34b76849124853c086fb0d5919bc537f.definition = {
    methods: ["delete"],
    url: '/api/v1/payments/{payment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::destroy
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:55
* @route '/api/v1/payments/{payment}'
*/
destroy34b76849124853c086fb0d5919bc537f.url = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { payment: args }
    }

    if (Array.isArray(args)) {
        args = {
            payment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        payment: args.payment,
    }

    return destroy34b76849124853c086fb0d5919bc537f.definition.url
            .replace('{payment}', parsedArgs.payment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::destroy
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:55
* @route '/api/v1/payments/{payment}'
*/
destroy34b76849124853c086fb0d5919bc537f.delete = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy34b76849124853c086fb0d5919bc537f.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::destroy
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:55
* @route '/payments/{payment}'
*/
const destroyd41d92c0c1073ab3b50b6c69549c869b = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyd41d92c0c1073ab3b50b6c69549c869b.url(args, options),
    method: 'delete',
})

destroyd41d92c0c1073ab3b50b6c69549c869b.definition = {
    methods: ["delete"],
    url: '/payments/{payment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::destroy
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:55
* @route '/payments/{payment}'
*/
destroyd41d92c0c1073ab3b50b6c69549c869b.url = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { payment: args }
    }

    if (Array.isArray(args)) {
        args = {
            payment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        payment: args.payment,
    }

    return destroyd41d92c0c1073ab3b50b6c69549c869b.definition.url
            .replace('{payment}', parsedArgs.payment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::destroy
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:55
* @route '/payments/{payment}'
*/
destroyd41d92c0c1073ab3b50b6c69549c869b.delete = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyd41d92c0c1073ab3b50b6c69549c869b.url(args, options),
    method: 'delete',
})

export const destroy = {
    '/api/v1/payments/{payment}': destroy34b76849124853c086fb0d5919bc537f,
    '/payments/{payment}': destroyd41d92c0c1073ab3b50b6c69549c869b,
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::create
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:21
* @route '/payments/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/payments/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::create
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:21
* @route '/payments/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::create
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:21
* @route '/payments/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::create
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:21
* @route '/payments/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::edit
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:42
* @route '/payments/{payment}/edit'
*/
export const edit = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/payments/{payment}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::edit
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:42
* @route '/payments/{payment}/edit'
*/
edit.url = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { payment: args }
    }

    if (Array.isArray(args)) {
        args = {
            payment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        payment: args.payment,
    }

    return edit.definition.url
            .replace('{payment}', parsedArgs.payment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::edit
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:42
* @route '/payments/{payment}/edit'
*/
edit.get = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::edit
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:42
* @route '/payments/{payment}/edit'
*/
edit.head = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

const PaymentController = { index, store, show, update, destroy, create, edit }

export default PaymentController