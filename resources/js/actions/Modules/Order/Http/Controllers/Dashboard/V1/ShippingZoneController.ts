import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:32
* @route '/dashboard/shipping-zones'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/shipping-zones',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:32
* @route '/dashboard/shipping-zones'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:32
* @route '/dashboard/shipping-zones'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:32
* @route '/dashboard/shipping-zones'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:32
* @route '/dashboard/shipping-zones'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:32
* @route '/dashboard/shipping-zones'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:32
* @route '/dashboard/shipping-zones'
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
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:53
* @route '/dashboard/shipping-zones/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/shipping-zones/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:53
* @route '/dashboard/shipping-zones/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:53
* @route '/dashboard/shipping-zones/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:53
* @route '/dashboard/shipping-zones/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:53
* @route '/dashboard/shipping-zones/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:53
* @route '/dashboard/shipping-zones/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:53
* @route '/dashboard/shipping-zones/create'
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
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:67
* @route '/dashboard/shipping-zones'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/shipping-zones',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:67
* @route '/dashboard/shipping-zones'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:67
* @route '/dashboard/shipping-zones'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:67
* @route '/dashboard/shipping-zones'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:67
* @route '/dashboard/shipping-zones'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:78
* @route '/dashboard/shipping-zones/{shippingZone}'
*/
export const show = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/shipping-zones/{shippingZone}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:78
* @route '/dashboard/shipping-zones/{shippingZone}'
*/
show.url = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shippingZone: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { shippingZone: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            shippingZone: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shippingZone: typeof args.shippingZone === 'object'
        ? args.shippingZone.uuid
        : args.shippingZone,
    }

    return show.definition.url
            .replace('{shippingZone}', parsedArgs.shippingZone.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:78
* @route '/dashboard/shipping-zones/{shippingZone}'
*/
show.get = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:78
* @route '/dashboard/shipping-zones/{shippingZone}'
*/
show.head = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:78
* @route '/dashboard/shipping-zones/{shippingZone}'
*/
const showForm = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:78
* @route '/dashboard/shipping-zones/{shippingZone}'
*/
showForm.get = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:78
* @route '/dashboard/shipping-zones/{shippingZone}'
*/
showForm.head = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:90
* @route '/dashboard/shipping-zones/{shippingZone}/edit'
*/
export const edit = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/shipping-zones/{shippingZone}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:90
* @route '/dashboard/shipping-zones/{shippingZone}/edit'
*/
edit.url = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shippingZone: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { shippingZone: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            shippingZone: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shippingZone: typeof args.shippingZone === 'object'
        ? args.shippingZone.uuid
        : args.shippingZone,
    }

    return edit.definition.url
            .replace('{shippingZone}', parsedArgs.shippingZone.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:90
* @route '/dashboard/shipping-zones/{shippingZone}/edit'
*/
edit.get = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:90
* @route '/dashboard/shipping-zones/{shippingZone}/edit'
*/
edit.head = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:90
* @route '/dashboard/shipping-zones/{shippingZone}/edit'
*/
const editForm = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:90
* @route '/dashboard/shipping-zones/{shippingZone}/edit'
*/
editForm.get = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:90
* @route '/dashboard/shipping-zones/{shippingZone}/edit'
*/
editForm.head = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:106
* @route '/dashboard/shipping-zones/{shippingZone}'
*/
export const update = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/shipping-zones/{shippingZone}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:106
* @route '/dashboard/shipping-zones/{shippingZone}'
*/
update.url = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shippingZone: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { shippingZone: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            shippingZone: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shippingZone: typeof args.shippingZone === 'object'
        ? args.shippingZone.uuid
        : args.shippingZone,
    }

    return update.definition.url
            .replace('{shippingZone}', parsedArgs.shippingZone.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:106
* @route '/dashboard/shipping-zones/{shippingZone}'
*/
update.put = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:106
* @route '/dashboard/shipping-zones/{shippingZone}'
*/
update.patch = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:106
* @route '/dashboard/shipping-zones/{shippingZone}'
*/
const updateForm = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:106
* @route '/dashboard/shipping-zones/{shippingZone}'
*/
updateForm.put = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:106
* @route '/dashboard/shipping-zones/{shippingZone}'
*/
updateForm.patch = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:117
* @route '/dashboard/shipping-zones/{shippingZone}'
*/
export const destroy = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/shipping-zones/{shippingZone}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:117
* @route '/dashboard/shipping-zones/{shippingZone}'
*/
destroy.url = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shippingZone: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { shippingZone: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            shippingZone: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shippingZone: typeof args.shippingZone === 'object'
        ? args.shippingZone.uuid
        : args.shippingZone,
    }

    return destroy.definition.url
            .replace('{shippingZone}', parsedArgs.shippingZone.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:117
* @route '/dashboard/shipping-zones/{shippingZone}'
*/
destroy.delete = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:117
* @route '/dashboard/shipping-zones/{shippingZone}'
*/
const destroyForm = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:117
* @route '/dashboard/shipping-zones/{shippingZone}'
*/
destroyForm.delete = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::toggleActive
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:128
* @route '/dashboard/shipping-zones/{shippingZone}/toggle-active'
*/
export const toggleActive = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleActive.url(args, options),
    method: 'put',
})

toggleActive.definition = {
    methods: ["put"],
    url: '/dashboard/shipping-zones/{shippingZone}/toggle-active',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::toggleActive
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:128
* @route '/dashboard/shipping-zones/{shippingZone}/toggle-active'
*/
toggleActive.url = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { shippingZone: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { shippingZone: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            shippingZone: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        shippingZone: typeof args.shippingZone === 'object'
        ? args.shippingZone.uuid
        : args.shippingZone,
    }

    return toggleActive.definition.url
            .replace('{shippingZone}', parsedArgs.shippingZone.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::toggleActive
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:128
* @route '/dashboard/shipping-zones/{shippingZone}/toggle-active'
*/
toggleActive.put = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleActive.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::toggleActive
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:128
* @route '/dashboard/shipping-zones/{shippingZone}/toggle-active'
*/
const toggleActiveForm = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::toggleActive
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:128
* @route '/dashboard/shipping-zones/{shippingZone}/toggle-active'
*/
toggleActiveForm.put = (args: { shippingZone: string | number | { uuid: string | number } } | [shippingZone: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleActive.form = toggleActiveForm

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::checkDelivery
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:140
* @route '/dashboard/shipping-zones/check-delivery'
*/
export const checkDelivery = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkDelivery.url(options),
    method: 'post',
})

checkDelivery.definition = {
    methods: ["post"],
    url: '/dashboard/shipping-zones/check-delivery',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::checkDelivery
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:140
* @route '/dashboard/shipping-zones/check-delivery'
*/
checkDelivery.url = (options?: RouteQueryOptions) => {
    return checkDelivery.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::checkDelivery
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:140
* @route '/dashboard/shipping-zones/check-delivery'
*/
checkDelivery.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkDelivery.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::checkDelivery
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:140
* @route '/dashboard/shipping-zones/check-delivery'
*/
const checkDeliveryForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: checkDelivery.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ShippingZoneController::checkDelivery
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ShippingZoneController.php:140
* @route '/dashboard/shipping-zones/check-delivery'
*/
checkDeliveryForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: checkDelivery.url(options),
    method: 'post',
})

checkDelivery.form = checkDeliveryForm

const ShippingZoneController = { index, create, store, show, edit, update, destroy, toggleActive, checkDelivery }

export default ShippingZoneController