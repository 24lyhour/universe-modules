import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:33
* @route '/dashboard/orders'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:33
* @route '/dashboard/orders'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:33
* @route '/dashboard/orders'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:33
* @route '/dashboard/orders'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:33
* @route '/dashboard/orders'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:33
* @route '/dashboard/orders'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:33
* @route '/dashboard/orders'
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
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:54
* @route '/dashboard/orders/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/orders/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:54
* @route '/dashboard/orders/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:54
* @route '/dashboard/orders/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:54
* @route '/dashboard/orders/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:54
* @route '/dashboard/orders/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:54
* @route '/dashboard/orders/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:54
* @route '/dashboard/orders/create'
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
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:70
* @route '/dashboard/orders'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/orders',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:70
* @route '/dashboard/orders'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:70
* @route '/dashboard/orders'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:70
* @route '/dashboard/orders'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:70
* @route '/dashboard/orders'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:81
* @route '/dashboard/orders/{order}'
*/
export const show = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/orders/{order}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:81
* @route '/dashboard/orders/{order}'
*/
show.url = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { order: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.uuid
        : args.order,
    }

    return show.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:81
* @route '/dashboard/orders/{order}'
*/
show.get = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:81
* @route '/dashboard/orders/{order}'
*/
show.head = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:81
* @route '/dashboard/orders/{order}'
*/
const showForm = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:81
* @route '/dashboard/orders/{order}'
*/
showForm.get = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:81
* @route '/dashboard/orders/{order}'
*/
showForm.head = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:93
* @route '/dashboard/orders/{order}/edit'
*/
export const edit = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/orders/{order}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:93
* @route '/dashboard/orders/{order}/edit'
*/
edit.url = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { order: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.uuid
        : args.order,
    }

    return edit.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:93
* @route '/dashboard/orders/{order}/edit'
*/
edit.get = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:93
* @route '/dashboard/orders/{order}/edit'
*/
edit.head = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:93
* @route '/dashboard/orders/{order}/edit'
*/
const editForm = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:93
* @route '/dashboard/orders/{order}/edit'
*/
editForm.get = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:93
* @route '/dashboard/orders/{order}/edit'
*/
editForm.head = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:111
* @route '/dashboard/orders/{order}'
*/
export const update = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/orders/{order}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:111
* @route '/dashboard/orders/{order}'
*/
update.url = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { order: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.uuid
        : args.order,
    }

    return update.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:111
* @route '/dashboard/orders/{order}'
*/
update.put = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:111
* @route '/dashboard/orders/{order}'
*/
update.patch = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:111
* @route '/dashboard/orders/{order}'
*/
const updateForm = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:111
* @route '/dashboard/orders/{order}'
*/
updateForm.put = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:111
* @route '/dashboard/orders/{order}'
*/
updateForm.patch = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:122
* @route '/dashboard/orders/{order}'
*/
export const destroy = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/orders/{order}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:122
* @route '/dashboard/orders/{order}'
*/
destroy.url = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { order: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.uuid
        : args.order,
    }

    return destroy.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:122
* @route '/dashboard/orders/{order}'
*/
destroy.delete = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:122
* @route '/dashboard/orders/{order}'
*/
const destroyForm = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:122
* @route '/dashboard/orders/{order}'
*/
destroyForm.delete = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::statusModal
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:133
* @route '/dashboard/orders/{order}/status'
*/
export const statusModal = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: statusModal.url(args, options),
    method: 'get',
})

statusModal.definition = {
    methods: ["get","head"],
    url: '/dashboard/orders/{order}/status',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::statusModal
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:133
* @route '/dashboard/orders/{order}/status'
*/
statusModal.url = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { order: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.uuid
        : args.order,
    }

    return statusModal.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::statusModal
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:133
* @route '/dashboard/orders/{order}/status'
*/
statusModal.get = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: statusModal.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::statusModal
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:133
* @route '/dashboard/orders/{order}/status'
*/
statusModal.head = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: statusModal.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::statusModal
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:133
* @route '/dashboard/orders/{order}/status'
*/
const statusModalForm = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: statusModal.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::statusModal
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:133
* @route '/dashboard/orders/{order}/status'
*/
statusModalForm.get = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: statusModal.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::statusModal
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:133
* @route '/dashboard/orders/{order}/status'
*/
statusModalForm.head = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: statusModal.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

statusModal.form = statusModalForm

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::updateStatus
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:145
* @route '/dashboard/orders/{order}/status'
*/
export const updateStatus = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateStatus.url(args, options),
    method: 'put',
})

updateStatus.definition = {
    methods: ["put"],
    url: '/dashboard/orders/{order}/status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::updateStatus
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:145
* @route '/dashboard/orders/{order}/status'
*/
updateStatus.url = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { order: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.uuid
        : args.order,
    }

    return updateStatus.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::updateStatus
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:145
* @route '/dashboard/orders/{order}/status'
*/
updateStatus.put = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::updateStatus
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:145
* @route '/dashboard/orders/{order}/status'
*/
const updateStatusForm = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::updateStatus
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:145
* @route '/dashboard/orders/{order}/status'
*/
updateStatusForm.put = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateStatus.form = updateStatusForm

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::updatePaymentStatus
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:161
* @route '/dashboard/orders/{order}/payment-status'
*/
export const updatePaymentStatus = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatePaymentStatus.url(args, options),
    method: 'put',
})

updatePaymentStatus.definition = {
    methods: ["put"],
    url: '/dashboard/orders/{order}/payment-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::updatePaymentStatus
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:161
* @route '/dashboard/orders/{order}/payment-status'
*/
updatePaymentStatus.url = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { order: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { order: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            order: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        order: typeof args.order === 'object'
        ? args.order.uuid
        : args.order,
    }

    return updatePaymentStatus.definition.url
            .replace('{order}', parsedArgs.order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::updatePaymentStatus
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:161
* @route '/dashboard/orders/{order}/payment-status'
*/
updatePaymentStatus.put = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatePaymentStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::updatePaymentStatus
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:161
* @route '/dashboard/orders/{order}/payment-status'
*/
const updatePaymentStatusForm = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatePaymentStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OrderController::updatePaymentStatus
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OrderController.php:161
* @route '/dashboard/orders/{order}/payment-status'
*/
updatePaymentStatusForm.put = (args: { order: string | number | { uuid: string | number } } | [order: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatePaymentStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatePaymentStatus.form = updatePaymentStatusForm

const orders = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    statusModal: Object.assign(statusModal, statusModal),
    updateStatus: Object.assign(updateStatus, updateStatus),
    updatePaymentStatus: Object.assign(updatePaymentStatus, updatePaymentStatus),
}

export default orders