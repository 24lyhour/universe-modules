import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:32
* @route '/dashboard/products/{product}/variants'
*/
export const index = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/{product}/variants',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:32
* @route '/dashboard/products/{product}/variants'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:32
* @route '/dashboard/products/{product}/variants'
*/
index.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:32
* @route '/dashboard/products/{product}/variants'
*/
index.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:32
* @route '/dashboard/products/{product}/variants'
*/
const indexForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:32
* @route '/dashboard/products/{product}/variants'
*/
indexForm.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:32
* @route '/dashboard/products/{product}/variants'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:51
* @route '/dashboard/products/{product}/variants/create'
*/
export const create = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/{product}/variants/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:51
* @route '/dashboard/products/{product}/variants/create'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:51
* @route '/dashboard/products/{product}/variants/create'
*/
create.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:51
* @route '/dashboard/products/{product}/variants/create'
*/
create.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:51
* @route '/dashboard/products/{product}/variants/create'
*/
const createForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:51
* @route '/dashboard/products/{product}/variants/create'
*/
createForm.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:51
* @route '/dashboard/products/{product}/variants/create'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:66
* @route '/dashboard/products/{product}/variants'
*/
export const store = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/products/{product}/variants',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:66
* @route '/dashboard/products/{product}/variants'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:66
* @route '/dashboard/products/{product}/variants'
*/
store.post = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:66
* @route '/dashboard/products/{product}/variants'
*/
const storeForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:66
* @route '/dashboard/products/{product}/variants'
*/
storeForm.post = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:80
* @route '/dashboard/products/{product}/variants/{variant}'
*/
export const show = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/{product}/variants/{variant}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:80
* @route '/dashboard/products/{product}/variants/{variant}'
*/
show.url = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            product: args[0],
            variant: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
        variant: typeof args.variant === 'object'
        ? args.variant.id
        : args.variant,
    }

    return show.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace('{variant}', parsedArgs.variant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:80
* @route '/dashboard/products/{product}/variants/{variant}'
*/
show.get = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:80
* @route '/dashboard/products/{product}/variants/{variant}'
*/
show.head = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:80
* @route '/dashboard/products/{product}/variants/{variant}'
*/
const showForm = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:80
* @route '/dashboard/products/{product}/variants/{variant}'
*/
showForm.get = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:80
* @route '/dashboard/products/{product}/variants/{variant}'
*/
showForm.head = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:93
* @route '/dashboard/products/{product}/variants/{variant}/edit'
*/
export const edit = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/{product}/variants/{variant}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:93
* @route '/dashboard/products/{product}/variants/{variant}/edit'
*/
edit.url = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            product: args[0],
            variant: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
        variant: typeof args.variant === 'object'
        ? args.variant.id
        : args.variant,
    }

    return edit.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace('{variant}', parsedArgs.variant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:93
* @route '/dashboard/products/{product}/variants/{variant}/edit'
*/
edit.get = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:93
* @route '/dashboard/products/{product}/variants/{variant}/edit'
*/
edit.head = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:93
* @route '/dashboard/products/{product}/variants/{variant}/edit'
*/
const editForm = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:93
* @route '/dashboard/products/{product}/variants/{variant}/edit'
*/
editForm.get = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:93
* @route '/dashboard/products/{product}/variants/{variant}/edit'
*/
editForm.head = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:110
* @route '/dashboard/products/{product}/variants/{variant}'
*/
export const update = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/products/{product}/variants/{variant}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:110
* @route '/dashboard/products/{product}/variants/{variant}'
*/
update.url = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            product: args[0],
            variant: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
        variant: typeof args.variant === 'object'
        ? args.variant.id
        : args.variant,
    }

    return update.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace('{variant}', parsedArgs.variant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:110
* @route '/dashboard/products/{product}/variants/{variant}'
*/
update.put = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:110
* @route '/dashboard/products/{product}/variants/{variant}'
*/
update.patch = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:110
* @route '/dashboard/products/{product}/variants/{variant}'
*/
const updateForm = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:110
* @route '/dashboard/products/{product}/variants/{variant}'
*/
updateForm.put = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:110
* @route '/dashboard/products/{product}/variants/{variant}'
*/
updateForm.patch = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:125
* @route '/dashboard/products/{product}/variants/{variant}'
*/
export const destroy = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/products/{product}/variants/{variant}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:125
* @route '/dashboard/products/{product}/variants/{variant}'
*/
destroy.url = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            product: args[0],
            variant: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
        variant: typeof args.variant === 'object'
        ? args.variant.id
        : args.variant,
    }

    return destroy.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace('{variant}', parsedArgs.variant.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:125
* @route '/dashboard/products/{product}/variants/{variant}'
*/
destroy.delete = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:125
* @route '/dashboard/products/{product}/variants/{variant}'
*/
const destroyForm = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductVariantController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductVariantController.php:125
* @route '/dashboard/products/{product}/variants/{variant}'
*/
destroyForm.delete = (args: { product: number | { id: number }, variant: number | { id: number } } | [product: number | { id: number }, variant: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const ProductVariantController = { index, create, store, show, edit, update, destroy }

export default ProductVariantController