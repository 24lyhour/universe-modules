import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:23
* @route '/api/v1/admin/products'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/admin/products',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:23
* @route '/api/v1/admin/products'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:23
* @route '/api/v1/admin/products'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:23
* @route '/api/v1/admin/products'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::store
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:40
* @route '/api/v1/admin/products'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/admin/products',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::store
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:40
* @route '/api/v1/admin/products'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::store
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:40
* @route '/api/v1/admin/products'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:50
* @route '/api/v1/admin/products/{product}'
*/
export const show = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/admin/products/{product}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:50
* @route '/api/v1/admin/products/{product}'
*/
show.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return show.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:50
* @route '/api/v1/admin/products/{product}'
*/
show.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:50
* @route '/api/v1/admin/products/{product}'
*/
show.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::update
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:57
* @route '/api/v1/admin/products/{product}'
*/
export const update = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/admin/products/{product}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::update
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:57
* @route '/api/v1/admin/products/{product}'
*/
update.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return update.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::update
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:57
* @route '/api/v1/admin/products/{product}'
*/
update.put = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::update
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:57
* @route '/api/v1/admin/products/{product}'
*/
update.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::destroy
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:67
* @route '/api/v1/admin/products/{product}'
*/
export const destroy = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/admin/products/{product}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::destroy
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:67
* @route '/api/v1/admin/products/{product}'
*/
destroy.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return destroy.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::destroy
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:67
* @route '/api/v1/admin/products/{product}'
*/
destroy.delete = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::stats
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:74
* @route '/api/v1/admin/products-stats'
*/
export const stats = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

stats.definition = {
    methods: ["get","head"],
    url: '/api/v1/admin/products-stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::stats
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:74
* @route '/api/v1/admin/products-stats'
*/
stats.url = (options?: RouteQueryOptions) => {
    return stats.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::stats
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:74
* @route '/api/v1/admin/products-stats'
*/
stats.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::stats
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:74
* @route '/api/v1/admin/products-stats'
*/
stats.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stats.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::activate
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:20
* @route '/api/v1/admin/products/{product}/activate'
*/
export const activate = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activate.url(args, options),
    method: 'patch',
})

activate.definition = {
    methods: ["patch"],
    url: '/api/v1/admin/products/{product}/activate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::activate
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:20
* @route '/api/v1/admin/products/{product}/activate'
*/
activate.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return activate.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::activate
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:20
* @route '/api/v1/admin/products/{product}/activate'
*/
activate.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activate.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::deactivate
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:30
* @route '/api/v1/admin/products/{product}/deactivate'
*/
export const deactivate = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate.url(args, options),
    method: 'patch',
})

deactivate.definition = {
    methods: ["patch"],
    url: '/api/v1/admin/products/{product}/deactivate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::deactivate
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:30
* @route '/api/v1/admin/products/{product}/deactivate'
*/
deactivate.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return deactivate.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::deactivate
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:30
* @route '/api/v1/admin/products/{product}/deactivate'
*/
deactivate.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::draft
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:40
* @route '/api/v1/admin/products/{product}/draft'
*/
export const draft = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: draft.url(args, options),
    method: 'patch',
})

draft.definition = {
    methods: ["patch"],
    url: '/api/v1/admin/products/{product}/draft',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::draft
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:40
* @route '/api/v1/admin/products/{product}/draft'
*/
draft.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return draft.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::draft
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:40
* @route '/api/v1/admin/products/{product}/draft'
*/
draft.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: draft.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::toggleFeatured
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:50
* @route '/api/v1/admin/products/{product}/toggle-featured'
*/
export const toggleFeatured = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleFeatured.url(args, options),
    method: 'patch',
})

toggleFeatured.definition = {
    methods: ["patch"],
    url: '/api/v1/admin/products/{product}/toggle-featured',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::toggleFeatured
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:50
* @route '/api/v1/admin/products/{product}/toggle-featured'
*/
toggleFeatured.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return toggleFeatured.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::toggleFeatured
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:50
* @route '/api/v1/admin/products/{product}/toggle-featured'
*/
toggleFeatured.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleFeatured.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::updateStock
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:61
* @route '/api/v1/admin/products/{product}/stock'
*/
export const updateStock = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStock.url(args, options),
    method: 'patch',
})

updateStock.definition = {
    methods: ["patch"],
    url: '/api/v1/admin/products/{product}/stock',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::updateStock
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:61
* @route '/api/v1/admin/products/{product}/stock'
*/
updateStock.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return updateStock.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::updateStock
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:61
* @route '/api/v1/admin/products/{product}/stock'
*/
updateStock.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStock.url(args, options),
    method: 'patch',
})

const admin = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    stats: Object.assign(stats, stats),
    activate: Object.assign(activate, activate),
    deactivate: Object.assign(deactivate, deactivate),
    draft: Object.assign(draft, draft),
    toggleFeatured: Object.assign(toggleFeatured, toggleFeatured),
    updateStock: Object.assign(updateStock, updateStock),
}

export default admin