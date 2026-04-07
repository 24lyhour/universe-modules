import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:34
* @route '/dashboard/carts'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/carts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:34
* @route '/dashboard/carts'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:34
* @route '/dashboard/carts'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:34
* @route '/dashboard/carts'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:54
* @route '/dashboard/carts/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/carts/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:54
* @route '/dashboard/carts/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:54
* @route '/dashboard/carts/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:54
* @route '/dashboard/carts/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:69
* @route '/dashboard/carts'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/carts',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:69
* @route '/dashboard/carts'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:69
* @route '/dashboard/carts'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:80
* @route '/dashboard/carts/{cart}'
*/
export const show = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/carts/{cart}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:80
* @route '/dashboard/carts/{cart}'
*/
show.url = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { cart: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { cart: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            cart: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        cart: typeof args.cart === 'object'
        ? args.cart.id
        : args.cart,
    }

    return show.definition.url
            .replace('{cart}', parsedArgs.cart.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:80
* @route '/dashboard/carts/{cart}'
*/
show.get = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:80
* @route '/dashboard/carts/{cart}'
*/
show.head = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:92
* @route '/dashboard/carts/{cart}/edit'
*/
export const edit = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/carts/{cart}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:92
* @route '/dashboard/carts/{cart}/edit'
*/
edit.url = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { cart: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { cart: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            cart: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        cart: typeof args.cart === 'object'
        ? args.cart.id
        : args.cart,
    }

    return edit.definition.url
            .replace('{cart}', parsedArgs.cart.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:92
* @route '/dashboard/carts/{cart}/edit'
*/
edit.get = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:92
* @route '/dashboard/carts/{cart}/edit'
*/
edit.head = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:109
* @route '/dashboard/carts/{cart}'
*/
export const update = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/carts/{cart}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:109
* @route '/dashboard/carts/{cart}'
*/
update.url = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { cart: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { cart: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            cart: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        cart: typeof args.cart === 'object'
        ? args.cart.id
        : args.cart,
    }

    return update.definition.url
            .replace('{cart}', parsedArgs.cart.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:109
* @route '/dashboard/carts/{cart}'
*/
update.put = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:109
* @route '/dashboard/carts/{cart}'
*/
update.patch = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:120
* @route '/dashboard/carts/{cart}'
*/
export const destroy = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/carts/{cart}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:120
* @route '/dashboard/carts/{cart}'
*/
destroy.url = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { cart: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { cart: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            cart: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        cart: typeof args.cart === 'object'
        ? args.cart.id
        : args.cart,
    }

    return destroy.definition.url
            .replace('{cart}', parsedArgs.cart.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:120
* @route '/dashboard/carts/{cart}'
*/
destroy.delete = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::toggleStatus
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:142
* @route '/dashboard/carts/{cart}/toggle-status'
*/
export const toggleStatus = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

toggleStatus.definition = {
    methods: ["put"],
    url: '/dashboard/carts/{cart}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::toggleStatus
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:142
* @route '/dashboard/carts/{cart}/toggle-status'
*/
toggleStatus.url = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { cart: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { cart: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            cart: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        cart: typeof args.cart === 'object'
        ? args.cart.id
        : args.cart,
    }

    return toggleStatus.definition.url
            .replace('{cart}', parsedArgs.cart.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::toggleStatus
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:142
* @route '/dashboard/carts/{cart}/toggle-status'
*/
toggleStatus.put = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::convertToOrder
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:131
* @route '/dashboard/carts/{cart}/convert-to-order'
*/
export const convertToOrder = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: convertToOrder.url(args, options),
    method: 'post',
})

convertToOrder.definition = {
    methods: ["post"],
    url: '/dashboard/carts/{cart}/convert-to-order',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::convertToOrder
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:131
* @route '/dashboard/carts/{cart}/convert-to-order'
*/
convertToOrder.url = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { cart: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { cart: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            cart: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        cart: typeof args.cart === 'object'
        ? args.cart.id
        : args.cart,
    }

    return convertToOrder.definition.url
            .replace('{cart}', parsedArgs.cart.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::convertToOrder
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:131
* @route '/dashboard/carts/{cart}/convert-to-order'
*/
convertToOrder.post = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: convertToOrder.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::clearItems
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:152
* @route '/dashboard/carts/{cart}/clear-items'
*/
export const clearItems = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: clearItems.url(args, options),
    method: 'delete',
})

clearItems.definition = {
    methods: ["delete"],
    url: '/dashboard/carts/{cart}/clear-items',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::clearItems
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:152
* @route '/dashboard/carts/{cart}/clear-items'
*/
clearItems.url = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { cart: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { cart: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            cart: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        cart: typeof args.cart === 'object'
        ? args.cart.id
        : args.cart,
    }

    return clearItems.definition.url
            .replace('{cart}', parsedArgs.cart.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\CartController::clearItems
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/CartController.php:152
* @route '/dashboard/carts/{cart}/clear-items'
*/
clearItems.delete = (args: { cart: number | { id: number } } | [cart: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: clearItems.url(args, options),
    method: 'delete',
})

const carts = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    toggleStatus: Object.assign(toggleStatus, toggleStatus),
    convertToOrder: Object.assign(convertToOrder, convertToOrder),
    clearItems: Object.assign(clearItems, clearItems),
}

export default carts