import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Order\Http\Controllers\OrderController::index
* @see Modules/Order/app/Http/Controllers/OrderController.php:13
* @route '/api/v1/orders'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\OrderController::index
* @see Modules/Order/app/Http/Controllers/OrderController.php:13
* @route '/api/v1/orders'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::index
* @see Modules/Order/app/Http/Controllers/OrderController.php:13
* @route '/api/v1/orders'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::index
* @see Modules/Order/app/Http/Controllers/OrderController.php:13
* @route '/api/v1/orders'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::index
* @see Modules/Order/app/Http/Controllers/OrderController.php:13
* @route '/api/v1/orders'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::index
* @see Modules/Order/app/Http/Controllers/OrderController.php:13
* @route '/api/v1/orders'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::index
* @see Modules/Order/app/Http/Controllers/OrderController.php:13
* @route '/api/v1/orders'
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
* @see \Modules\Order\Http\Controllers\OrderController::store
* @see Modules/Order/app/Http/Controllers/OrderController.php:29
* @route '/api/v1/orders'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/orders',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\OrderController::store
* @see Modules/Order/app/Http/Controllers/OrderController.php:29
* @route '/api/v1/orders'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::store
* @see Modules/Order/app/Http/Controllers/OrderController.php:29
* @route '/api/v1/orders'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::store
* @see Modules/Order/app/Http/Controllers/OrderController.php:29
* @route '/api/v1/orders'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::store
* @see Modules/Order/app/Http/Controllers/OrderController.php:29
* @route '/api/v1/orders'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Order\Http\Controllers\OrderController::show
* @see Modules/Order/app/Http/Controllers/OrderController.php:34
* @route '/api/v1/orders/{order}'
*/
export const show = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/orders/{order}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\OrderController::show
* @see Modules/Order/app/Http/Controllers/OrderController.php:34
* @route '/api/v1/orders/{order}'
*/
show.url = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::show
* @see Modules/Order/app/Http/Controllers/OrderController.php:34
* @route '/api/v1/orders/{order}'
*/
show.get = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::show
* @see Modules/Order/app/Http/Controllers/OrderController.php:34
* @route '/api/v1/orders/{order}'
*/
show.head = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::show
* @see Modules/Order/app/Http/Controllers/OrderController.php:34
* @route '/api/v1/orders/{order}'
*/
const showForm = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::show
* @see Modules/Order/app/Http/Controllers/OrderController.php:34
* @route '/api/v1/orders/{order}'
*/
showForm.get = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::show
* @see Modules/Order/app/Http/Controllers/OrderController.php:34
* @route '/api/v1/orders/{order}'
*/
showForm.head = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Order\Http\Controllers\OrderController::update
* @see Modules/Order/app/Http/Controllers/OrderController.php:50
* @route '/api/v1/orders/{order}'
*/
export const update = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/orders/{order}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Order\Http\Controllers\OrderController::update
* @see Modules/Order/app/Http/Controllers/OrderController.php:50
* @route '/api/v1/orders/{order}'
*/
update.url = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::update
* @see Modules/Order/app/Http/Controllers/OrderController.php:50
* @route '/api/v1/orders/{order}'
*/
update.put = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::update
* @see Modules/Order/app/Http/Controllers/OrderController.php:50
* @route '/api/v1/orders/{order}'
*/
update.patch = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::update
* @see Modules/Order/app/Http/Controllers/OrderController.php:50
* @route '/api/v1/orders/{order}'
*/
const updateForm = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::update
* @see Modules/Order/app/Http/Controllers/OrderController.php:50
* @route '/api/v1/orders/{order}'
*/
updateForm.put = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::update
* @see Modules/Order/app/Http/Controllers/OrderController.php:50
* @route '/api/v1/orders/{order}'
*/
updateForm.patch = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Order\Http\Controllers\OrderController::destroy
* @see Modules/Order/app/Http/Controllers/OrderController.php:55
* @route '/api/v1/orders/{order}'
*/
export const destroy = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/orders/{order}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Order\Http\Controllers\OrderController::destroy
* @see Modules/Order/app/Http/Controllers/OrderController.php:55
* @route '/api/v1/orders/{order}'
*/
destroy.url = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\OrderController::destroy
* @see Modules/Order/app/Http/Controllers/OrderController.php:55
* @route '/api/v1/orders/{order}'
*/
destroy.delete = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::destroy
* @see Modules/Order/app/Http/Controllers/OrderController.php:55
* @route '/api/v1/orders/{order}'
*/
const destroyForm = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\OrderController::destroy
* @see Modules/Order/app/Http/Controllers/OrderController.php:55
* @route '/api/v1/orders/{order}'
*/
destroyForm.delete = (args: { order: string | number } | [order: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const order = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default order