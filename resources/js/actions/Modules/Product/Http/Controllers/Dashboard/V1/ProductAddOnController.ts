import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::indexAll
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:38
* @route '/dashboard/products/addons'
*/
export const indexAll = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexAll.url(options),
    method: 'get',
})

indexAll.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/addons',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::indexAll
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:38
* @route '/dashboard/products/addons'
*/
indexAll.url = (options?: RouteQueryOptions) => {
    return indexAll.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::indexAll
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:38
* @route '/dashboard/products/addons'
*/
indexAll.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexAll.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::indexAll
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:38
* @route '/dashboard/products/addons'
*/
indexAll.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexAll.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::createStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:149
* @route '/dashboard/products/addons/create'
*/
export const createStandalone = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createStandalone.url(options),
    method: 'get',
})

createStandalone.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/addons/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::createStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:149
* @route '/dashboard/products/addons/create'
*/
createStandalone.url = (options?: RouteQueryOptions) => {
    return createStandalone.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::createStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:149
* @route '/dashboard/products/addons/create'
*/
createStandalone.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createStandalone.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::createStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:149
* @route '/dashboard/products/addons/create'
*/
createStandalone.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: createStandalone.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::storeStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:159
* @route '/dashboard/products/addons'
*/
export const storeStandalone = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeStandalone.url(options),
    method: 'post',
})

storeStandalone.definition = {
    methods: ["post"],
    url: '/dashboard/products/addons',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::storeStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:159
* @route '/dashboard/products/addons'
*/
storeStandalone.url = (options?: RouteQueryOptions) => {
    return storeStandalone.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::storeStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:159
* @route '/dashboard/products/addons'
*/
storeStandalone.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeStandalone.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:55
* @route '/dashboard/products/{product}/addons'
*/
export const index = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/{product}/addons',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:55
* @route '/dashboard/products/{product}/addons'
*/
index.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:55
* @route '/dashboard/products/{product}/addons'
*/
index.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:55
* @route '/dashboard/products/{product}/addons'
*/
index.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:70
* @route '/dashboard/products/{product}/addons/create'
*/
export const create = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/{product}/addons/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:70
* @route '/dashboard/products/{product}/addons/create'
*/
create.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return create.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:70
* @route '/dashboard/products/{product}/addons/create'
*/
create.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:70
* @route '/dashboard/products/{product}/addons/create'
*/
create.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:81
* @route '/dashboard/products/{product}/addons'
*/
export const store = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/products/{product}/addons',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:81
* @route '/dashboard/products/{product}/addons'
*/
store.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return store.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:81
* @route '/dashboard/products/{product}/addons'
*/
store.post = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:92
* @route '/dashboard/products/{product}/addons/{addon}/edit'
*/
export const edit = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/{product}/addons/{addon}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:92
* @route '/dashboard/products/{product}/addons/{addon}/edit'
*/
edit.url = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            product: args[0],
            addon: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
        addon: typeof args.addon === 'object'
        ? args.addon.id
        : args.addon,
    }

    return edit.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace('{addon}', parsedArgs.addon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:92
* @route '/dashboard/products/{product}/addons/{addon}/edit'
*/
edit.get = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:92
* @route '/dashboard/products/{product}/addons/{addon}/edit'
*/
edit.head = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:105
* @route '/dashboard/products/{product}/addons/{addon}'
*/
export const update = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/products/{product}/addons/{addon}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:105
* @route '/dashboard/products/{product}/addons/{addon}'
*/
update.url = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            product: args[0],
            addon: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
        addon: typeof args.addon === 'object'
        ? args.addon.id
        : args.addon,
    }

    return update.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace('{addon}', parsedArgs.addon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:105
* @route '/dashboard/products/{product}/addons/{addon}'
*/
update.put = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:105
* @route '/dashboard/products/{product}/addons/{addon}'
*/
update.patch = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:116
* @route '/dashboard/products/{product}/addons/{addon}'
*/
export const destroy = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/products/{product}/addons/{addon}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:116
* @route '/dashboard/products/{product}/addons/{addon}'
*/
destroy.url = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            product: args[0],
            addon: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
        addon: typeof args.addon === 'object'
        ? args.addon.id
        : args.addon,
    }

    return destroy.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace('{addon}', parsedArgs.addon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:116
* @route '/dashboard/products/{product}/addons/{addon}'
*/
destroy.delete = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:127
* @route '/dashboard/products/{product}/addons/{addon}/toggle-status'
*/
export const toggleStatus = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleStatus.url(args, options),
    method: 'patch',
})

toggleStatus.definition = {
    methods: ["patch"],
    url: '/dashboard/products/{product}/addons/{addon}/toggle-status',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:127
* @route '/dashboard/products/{product}/addons/{addon}/toggle-status'
*/
toggleStatus.url = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            product: args[0],
            addon: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
        addon: typeof args.addon === 'object'
        ? args.addon.id
        : args.addon,
    }

    return toggleStatus.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace('{addon}', parsedArgs.addon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:127
* @route '/dashboard/products/{product}/addons/{addon}/toggle-status'
*/
toggleStatus.patch = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleStatus.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::reorder
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:138
* @route '/dashboard/products/{product}/addons/reorder'
*/
export const reorder = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/dashboard/products/{product}/addons/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::reorder
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:138
* @route '/dashboard/products/{product}/addons/reorder'
*/
reorder.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return reorder.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::reorder
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:138
* @route '/dashboard/products/{product}/addons/reorder'
*/
reorder.post = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

const ProductAddOnController = { indexAll, createStandalone, storeStandalone, index, create, store, edit, update, destroy, toggleStatus, reorder }

export default ProductAddOnController