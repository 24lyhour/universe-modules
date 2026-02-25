import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Order\Http\Controllers\OrderController::index
* @see Modules/Order/app/Http/Controllers/OrderController.php:13
* @route '/api/v1/orders'
*/
const indexda23f1e8e129248b9ee1f3a9c965ae1a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexda23f1e8e129248b9ee1f3a9c965ae1a.url(options),
    method: 'get',
})

indexda23f1e8e129248b9ee1f3a9c965ae1a.definition = {
    methods: ["get","head"],
    url: '/api/v1/orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\OrderController::index
* @see Modules/Order/app/Http/Controllers/OrderController.php:13
* @route '/api/v1/orders'
*/
indexda23f1e8e129248b9ee1f3a9c965ae1a.url = (options?: RouteQueryOptions) => {
    return indexda23f1e8e129248b9ee1f3a9c965ae1a.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::index
* @see Modules/Order/app/Http/Controllers/OrderController.php:13
* @route '/api/v1/orders'
*/
indexda23f1e8e129248b9ee1f3a9c965ae1a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexda23f1e8e129248b9ee1f3a9c965ae1a.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::index
* @see Modules/Order/app/Http/Controllers/OrderController.php:13
* @route '/api/v1/orders'
*/
indexda23f1e8e129248b9ee1f3a9c965ae1a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexda23f1e8e129248b9ee1f3a9c965ae1a.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::index
* @see Modules/Order/app/Http/Controllers/OrderController.php:13
* @route '/orders'
*/
const index46d571d7fe903e8a2eecb1a2ccbb23f8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index46d571d7fe903e8a2eecb1a2ccbb23f8.url(options),
    method: 'get',
})

index46d571d7fe903e8a2eecb1a2ccbb23f8.definition = {
    methods: ["get","head"],
    url: '/orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\OrderController::index
* @see Modules/Order/app/Http/Controllers/OrderController.php:13
* @route '/orders'
*/
index46d571d7fe903e8a2eecb1a2ccbb23f8.url = (options?: RouteQueryOptions) => {
    return index46d571d7fe903e8a2eecb1a2ccbb23f8.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::index
* @see Modules/Order/app/Http/Controllers/OrderController.php:13
* @route '/orders'
*/
index46d571d7fe903e8a2eecb1a2ccbb23f8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index46d571d7fe903e8a2eecb1a2ccbb23f8.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::index
* @see Modules/Order/app/Http/Controllers/OrderController.php:13
* @route '/orders'
*/
index46d571d7fe903e8a2eecb1a2ccbb23f8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index46d571d7fe903e8a2eecb1a2ccbb23f8.url(options),
    method: 'head',
})

export const index = {
    '/api/v1/orders': indexda23f1e8e129248b9ee1f3a9c965ae1a,
    '/orders': index46d571d7fe903e8a2eecb1a2ccbb23f8,
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::store
* @see Modules/Order/app/Http/Controllers/OrderController.php:29
* @route '/api/v1/orders'
*/
const storeda23f1e8e129248b9ee1f3a9c965ae1a = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeda23f1e8e129248b9ee1f3a9c965ae1a.url(options),
    method: 'post',
})

storeda23f1e8e129248b9ee1f3a9c965ae1a.definition = {
    methods: ["post"],
    url: '/api/v1/orders',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\OrderController::store
* @see Modules/Order/app/Http/Controllers/OrderController.php:29
* @route '/api/v1/orders'
*/
storeda23f1e8e129248b9ee1f3a9c965ae1a.url = (options?: RouteQueryOptions) => {
    return storeda23f1e8e129248b9ee1f3a9c965ae1a.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::store
* @see Modules/Order/app/Http/Controllers/OrderController.php:29
* @route '/api/v1/orders'
*/
storeda23f1e8e129248b9ee1f3a9c965ae1a.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeda23f1e8e129248b9ee1f3a9c965ae1a.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::store
* @see Modules/Order/app/Http/Controllers/OrderController.php:29
* @route '/orders'
*/
const store46d571d7fe903e8a2eecb1a2ccbb23f8 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store46d571d7fe903e8a2eecb1a2ccbb23f8.url(options),
    method: 'post',
})

store46d571d7fe903e8a2eecb1a2ccbb23f8.definition = {
    methods: ["post"],
    url: '/orders',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\OrderController::store
* @see Modules/Order/app/Http/Controllers/OrderController.php:29
* @route '/orders'
*/
store46d571d7fe903e8a2eecb1a2ccbb23f8.url = (options?: RouteQueryOptions) => {
    return store46d571d7fe903e8a2eecb1a2ccbb23f8.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::store
* @see Modules/Order/app/Http/Controllers/OrderController.php:29
* @route '/orders'
*/
store46d571d7fe903e8a2eecb1a2ccbb23f8.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store46d571d7fe903e8a2eecb1a2ccbb23f8.url(options),
    method: 'post',
})

export const store = {
    '/api/v1/orders': storeda23f1e8e129248b9ee1f3a9c965ae1a,
    '/orders': store46d571d7fe903e8a2eecb1a2ccbb23f8,
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::show
* @see Modules/Order/app/Http/Controllers/OrderController.php:34
* @route '/api/v1/orders/{order}'
*/
const showd528c980e891e262d18e45a52831af03 = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showd528c980e891e262d18e45a52831af03.url(args, options),
    method: 'get',
})

showd528c980e891e262d18e45a52831af03.definition = {
    methods: ["get","head"],
    url: '/api/v1/orders/{order}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\OrderController::show
* @see Modules/Order/app/Http/Controllers/OrderController.php:34
* @route '/api/v1/orders/{order}'
*/
showd528c980e891e262d18e45a52831af03.url = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: args.order,
    }

    return showd528c980e891e262d18e45a52831af03.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::show
* @see Modules/Order/app/Http/Controllers/OrderController.php:34
* @route '/api/v1/orders/{order}'
*/
showd528c980e891e262d18e45a52831af03.get = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showd528c980e891e262d18e45a52831af03.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::show
* @see Modules/Order/app/Http/Controllers/OrderController.php:34
* @route '/api/v1/orders/{order}'
*/
showd528c980e891e262d18e45a52831af03.head = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showd528c980e891e262d18e45a52831af03.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::show
* @see Modules/Order/app/Http/Controllers/OrderController.php:34
* @route '/orders/{order}'
*/
const show5d07ec4e36119df081df6c80b02e8808 = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show5d07ec4e36119df081df6c80b02e8808.url(args, options),
    method: 'get',
})

show5d07ec4e36119df081df6c80b02e8808.definition = {
    methods: ["get","head"],
    url: '/orders/{order}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\OrderController::show
* @see Modules/Order/app/Http/Controllers/OrderController.php:34
* @route '/orders/{order}'
*/
show5d07ec4e36119df081df6c80b02e8808.url = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: args.order,
    }

    return show5d07ec4e36119df081df6c80b02e8808.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::show
* @see Modules/Order/app/Http/Controllers/OrderController.php:34
* @route '/orders/{order}'
*/
show5d07ec4e36119df081df6c80b02e8808.get = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show5d07ec4e36119df081df6c80b02e8808.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::show
* @see Modules/Order/app/Http/Controllers/OrderController.php:34
* @route '/orders/{order}'
*/
show5d07ec4e36119df081df6c80b02e8808.head = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show5d07ec4e36119df081df6c80b02e8808.url(args, options),
    method: 'head',
})

export const show = {
    '/api/v1/orders/{order}': showd528c980e891e262d18e45a52831af03,
    '/orders/{order}': show5d07ec4e36119df081df6c80b02e8808,
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::update
* @see Modules/Order/app/Http/Controllers/OrderController.php:50
* @route '/api/v1/orders/{order}'
*/
const updated528c980e891e262d18e45a52831af03 = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updated528c980e891e262d18e45a52831af03.url(args, options),
    method: 'put',
})

updated528c980e891e262d18e45a52831af03.definition = {
    methods: ["put","patch"],
    url: '/api/v1/orders/{order}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Order\Http\Controllers\OrderController::update
* @see Modules/Order/app/Http/Controllers/OrderController.php:50
* @route '/api/v1/orders/{order}'
*/
updated528c980e891e262d18e45a52831af03.url = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: args.order,
    }

    return updated528c980e891e262d18e45a52831af03.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::update
* @see Modules/Order/app/Http/Controllers/OrderController.php:50
* @route '/api/v1/orders/{order}'
*/
updated528c980e891e262d18e45a52831af03.put = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updated528c980e891e262d18e45a52831af03.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::update
* @see Modules/Order/app/Http/Controllers/OrderController.php:50
* @route '/api/v1/orders/{order}'
*/
updated528c980e891e262d18e45a52831af03.patch = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updated528c980e891e262d18e45a52831af03.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::update
* @see Modules/Order/app/Http/Controllers/OrderController.php:50
* @route '/orders/{order}'
*/
const update5d07ec4e36119df081df6c80b02e8808 = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update5d07ec4e36119df081df6c80b02e8808.url(args, options),
    method: 'put',
})

update5d07ec4e36119df081df6c80b02e8808.definition = {
    methods: ["put","patch"],
    url: '/orders/{order}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Order\Http\Controllers\OrderController::update
* @see Modules/Order/app/Http/Controllers/OrderController.php:50
* @route '/orders/{order}'
*/
update5d07ec4e36119df081df6c80b02e8808.url = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: args.order,
    }

    return update5d07ec4e36119df081df6c80b02e8808.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::update
* @see Modules/Order/app/Http/Controllers/OrderController.php:50
* @route '/orders/{order}'
*/
update5d07ec4e36119df081df6c80b02e8808.put = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update5d07ec4e36119df081df6c80b02e8808.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::update
* @see Modules/Order/app/Http/Controllers/OrderController.php:50
* @route '/orders/{order}'
*/
update5d07ec4e36119df081df6c80b02e8808.patch = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update5d07ec4e36119df081df6c80b02e8808.url(args, options),
    method: 'patch',
})

export const update = {
    '/api/v1/orders/{order}': updated528c980e891e262d18e45a52831af03,
    '/orders/{order}': update5d07ec4e36119df081df6c80b02e8808,
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::destroy
* @see Modules/Order/app/Http/Controllers/OrderController.php:55
* @route '/api/v1/orders/{order}'
*/
const destroyd528c980e891e262d18e45a52831af03 = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyd528c980e891e262d18e45a52831af03.url(args, options),
    method: 'delete',
})

destroyd528c980e891e262d18e45a52831af03.definition = {
    methods: ["delete"],
    url: '/api/v1/orders/{order}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Order\Http\Controllers\OrderController::destroy
* @see Modules/Order/app/Http/Controllers/OrderController.php:55
* @route '/api/v1/orders/{order}'
*/
destroyd528c980e891e262d18e45a52831af03.url = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: args.order,
    }

    return destroyd528c980e891e262d18e45a52831af03.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::destroy
* @see Modules/Order/app/Http/Controllers/OrderController.php:55
* @route '/api/v1/orders/{order}'
*/
destroyd528c980e891e262d18e45a52831af03.delete = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyd528c980e891e262d18e45a52831af03.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::destroy
* @see Modules/Order/app/Http/Controllers/OrderController.php:55
* @route '/orders/{order}'
*/
const destroy5d07ec4e36119df081df6c80b02e8808 = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy5d07ec4e36119df081df6c80b02e8808.url(args, options),
    method: 'delete',
})

destroy5d07ec4e36119df081df6c80b02e8808.definition = {
    methods: ["delete"],
    url: '/orders/{order}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Order\Http\Controllers\OrderController::destroy
* @see Modules/Order/app/Http/Controllers/OrderController.php:55
* @route '/orders/{order}'
*/
destroy5d07ec4e36119df081df6c80b02e8808.url = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: args.order,
    }

    return destroy5d07ec4e36119df081df6c80b02e8808.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::destroy
* @see Modules/Order/app/Http/Controllers/OrderController.php:55
* @route '/orders/{order}'
*/
destroy5d07ec4e36119df081df6c80b02e8808.delete = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy5d07ec4e36119df081df6c80b02e8808.url(args, options),
    method: 'delete',
})

export const destroy = {
    '/api/v1/orders/{order}': destroyd528c980e891e262d18e45a52831af03,
    '/orders/{order}': destroy5d07ec4e36119df081df6c80b02e8808,
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::create
* @see Modules/Order/app/Http/Controllers/OrderController.php:21
* @route '/orders/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/orders/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\OrderController::create
* @see Modules/Order/app/Http/Controllers/OrderController.php:21
* @route '/orders/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::create
* @see Modules/Order/app/Http/Controllers/OrderController.php:21
* @route '/orders/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::create
* @see Modules/Order/app/Http/Controllers/OrderController.php:21
* @route '/orders/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::edit
* @see Modules/Order/app/Http/Controllers/OrderController.php:42
* @route '/orders/{order}/edit'
*/
export const edit = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/orders/{order}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\OrderController::edit
* @see Modules/Order/app/Http/Controllers/OrderController.php:42
* @route '/orders/{order}/edit'
*/
edit.url = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: args.order,
    }

    return edit.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::edit
* @see Modules/Order/app/Http/Controllers/OrderController.php:42
* @route '/orders/{order}/edit'
*/
edit.get = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::edit
* @see Modules/Order/app/Http/Controllers/OrderController.php:42
* @route '/orders/{order}/edit'
*/
edit.head = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

const OrderController = { index, store, show, update, destroy, create, edit }

export default OrderController