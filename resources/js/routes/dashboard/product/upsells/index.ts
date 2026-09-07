import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:19
* @route '/dashboard/products/{product}/upsells'
*/
export const index = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/{product}/upsells',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:19
* @route '/dashboard/products/{product}/upsells'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:19
* @route '/dashboard/products/{product}/upsells'
*/
index.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:19
* @route '/dashboard/products/{product}/upsells'
*/
index.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:19
* @route '/dashboard/products/{product}/upsells'
*/
const indexForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:19
* @route '/dashboard/products/{product}/upsells'
*/
indexForm.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:19
* @route '/dashboard/products/{product}/upsells'
*/
indexForm.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:55
* @route '/dashboard/products/{product}/upsells/create'
*/
export const create = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/{product}/upsells/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:55
* @route '/dashboard/products/{product}/upsells/create'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:55
* @route '/dashboard/products/{product}/upsells/create'
*/
create.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:55
* @route '/dashboard/products/{product}/upsells/create'
*/
create.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:55
* @route '/dashboard/products/{product}/upsells/create'
*/
const createForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:55
* @route '/dashboard/products/{product}/upsells/create'
*/
createForm.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:55
* @route '/dashboard/products/{product}/upsells/create'
*/
createForm.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:79
* @route '/dashboard/products/{product}/upsells'
*/
export const store = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/products/{product}/upsells',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:79
* @route '/dashboard/products/{product}/upsells'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:79
* @route '/dashboard/products/{product}/upsells'
*/
store.post = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:79
* @route '/dashboard/products/{product}/upsells'
*/
const storeForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:79
* @route '/dashboard/products/{product}/upsells'
*/
storeForm.post = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:110
* @route '/dashboard/products/{product}/upsells/{upsell}/edit'
*/
export const edit = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/{product}/upsells/{upsell}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:110
* @route '/dashboard/products/{product}/upsells/{upsell}/edit'
*/
edit.url = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            product: args[0],
            upsell: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
        upsell: typeof args.upsell === 'object'
        ? args.upsell.id
        : args.upsell,
    }

    return edit.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace('{upsell}', parsedArgs.upsell.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:110
* @route '/dashboard/products/{product}/upsells/{upsell}/edit'
*/
edit.get = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:110
* @route '/dashboard/products/{product}/upsells/{upsell}/edit'
*/
edit.head = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:110
* @route '/dashboard/products/{product}/upsells/{upsell}/edit'
*/
const editForm = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:110
* @route '/dashboard/products/{product}/upsells/{upsell}/edit'
*/
editForm.get = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:110
* @route '/dashboard/products/{product}/upsells/{upsell}/edit'
*/
editForm.head = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:127
* @route '/dashboard/products/{product}/upsells/{upsell}'
*/
export const update = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/products/{product}/upsells/{upsell}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:127
* @route '/dashboard/products/{product}/upsells/{upsell}'
*/
update.url = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            product: args[0],
            upsell: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
        upsell: typeof args.upsell === 'object'
        ? args.upsell.id
        : args.upsell,
    }

    return update.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace('{upsell}', parsedArgs.upsell.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:127
* @route '/dashboard/products/{product}/upsells/{upsell}'
*/
update.put = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:127
* @route '/dashboard/products/{product}/upsells/{upsell}'
*/
update.patch = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:127
* @route '/dashboard/products/{product}/upsells/{upsell}'
*/
const updateForm = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:127
* @route '/dashboard/products/{product}/upsells/{upsell}'
*/
updateForm.put = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:127
* @route '/dashboard/products/{product}/upsells/{upsell}'
*/
updateForm.patch = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:145
* @route '/dashboard/products/{product}/upsells/{upsell}'
*/
export const destroy = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/products/{product}/upsells/{upsell}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:145
* @route '/dashboard/products/{product}/upsells/{upsell}'
*/
destroy.url = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            product: args[0],
            upsell: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
        upsell: typeof args.upsell === 'object'
        ? args.upsell.id
        : args.upsell,
    }

    return destroy.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace('{upsell}', parsedArgs.upsell.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:145
* @route '/dashboard/products/{product}/upsells/{upsell}'
*/
destroy.delete = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:145
* @route '/dashboard/products/{product}/upsells/{upsell}'
*/
const destroyForm = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:145
* @route '/dashboard/products/{product}/upsells/{upsell}'
*/
destroyForm.delete = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:157
* @route '/dashboard/products/{product}/upsells/{upsell}/toggle-status'
*/
export const toggleStatus = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleStatus.url(args, options),
    method: 'patch',
})

toggleStatus.definition = {
    methods: ["patch"],
    url: '/dashboard/products/{product}/upsells/{upsell}/toggle-status',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:157
* @route '/dashboard/products/{product}/upsells/{upsell}/toggle-status'
*/
toggleStatus.url = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            product: args[0],
            upsell: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
        upsell: typeof args.upsell === 'object'
        ? args.upsell.id
        : args.upsell,
    }

    return toggleStatus.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace('{upsell}', parsedArgs.upsell.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:157
* @route '/dashboard/products/{product}/upsells/{upsell}/toggle-status'
*/
toggleStatus.patch = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleStatus.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:157
* @route '/dashboard/products/{product}/upsells/{upsell}/toggle-status'
*/
const toggleStatusForm = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:157
* @route '/dashboard/products/{product}/upsells/{upsell}/toggle-status'
*/
toggleStatusForm.patch = (args: { product: number | { id: number }, upsell: number | { id: number } } | [product: number | { id: number }, upsell: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleStatus.form = toggleStatusForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::reorder
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:168
* @route '/dashboard/products/{product}/upsells/reorder'
*/
export const reorder = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/dashboard/products/{product}/upsells/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::reorder
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:168
* @route '/dashboard/products/{product}/upsells/reorder'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::reorder
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:168
* @route '/dashboard/products/{product}/upsells/reorder'
*/
reorder.post = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::reorder
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:168
* @route '/dashboard/products/{product}/upsells/reorder'
*/
const reorderForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductUpsellController::reorder
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductUpsellController.php:168
* @route '/dashboard/products/{product}/upsells/reorder'
*/
reorderForm.post = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(args, options),
    method: 'post',
})

reorder.form = reorderForm

const upsells = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    toggleStatus: Object.assign(toggleStatus, toggleStatus),
    reorder: Object.assign(reorder, reorder),
}

export default upsells