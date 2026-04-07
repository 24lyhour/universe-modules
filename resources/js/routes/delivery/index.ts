import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/deliveries',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::create
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/deliveries/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::create
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::create
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::create
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::store
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/deliveries',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::store
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::store
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
export const show = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/deliveries/{delivery}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
show.url = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { delivery: args }
    }

    if (Array.isArray(args)) {
        args = {
            delivery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        delivery: args.delivery,
    }

    return show.definition.url
            .replace('{delivery}', parsedArgs.delivery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
show.get = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
show.head = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::edit
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}/edit'
*/
export const edit = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/deliveries/{delivery}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::edit
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}/edit'
*/
edit.url = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { delivery: args }
    }

    if (Array.isArray(args)) {
        args = {
            delivery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        delivery: args.delivery,
    }

    return edit.definition.url
            .replace('{delivery}', parsedArgs.delivery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::edit
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}/edit'
*/
edit.get = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::edit
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}/edit'
*/
edit.head = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
export const update = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/deliveries/{delivery}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
update.url = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { delivery: args }
    }

    if (Array.isArray(args)) {
        args = {
            delivery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        delivery: args.delivery,
    }

    return update.definition.url
            .replace('{delivery}', parsedArgs.delivery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
update.put = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
update.patch = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::destroy
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
export const destroy = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/deliveries/{delivery}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::destroy
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
destroy.url = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { delivery: args }
    }

    if (Array.isArray(args)) {
        args = {
            delivery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        delivery: args.delivery,
    }

    return destroy.definition.url
            .replace('{delivery}', parsedArgs.delivery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::destroy
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
destroy.delete = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const delivery = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default delivery