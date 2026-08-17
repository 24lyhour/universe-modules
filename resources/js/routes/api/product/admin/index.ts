import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
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
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:23
* @route '/api/v1/admin/products'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:23
* @route '/api/v1/admin/products'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:23
* @route '/api/v1/admin/products'
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
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::store
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:40
* @route '/api/v1/admin/products'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::store
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:40
* @route '/api/v1/admin/products'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:50
* @route '/api/v1/admin/products/{product}'
*/
export const show = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
show.url = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
show.get = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:50
* @route '/api/v1/admin/products/{product}'
*/
show.head = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:50
* @route '/api/v1/admin/products/{product}'
*/
const showForm = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:50
* @route '/api/v1/admin/products/{product}'
*/
showForm.get = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:50
* @route '/api/v1/admin/products/{product}'
*/
showForm.head = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::update
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:57
* @route '/api/v1/admin/products/{product}'
*/
export const update = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
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
update.url = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
update.put = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::update
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:57
* @route '/api/v1/admin/products/{product}'
*/
update.patch = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::update
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:57
* @route '/api/v1/admin/products/{product}'
*/
const updateForm = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::update
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:57
* @route '/api/v1/admin/products/{product}'
*/
updateForm.put = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::update
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:57
* @route '/api/v1/admin/products/{product}'
*/
updateForm.patch = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::destroy
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:67
* @route '/api/v1/admin/products/{product}'
*/
export const destroy = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
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
destroy.url = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
destroy.delete = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::destroy
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:67
* @route '/api/v1/admin/products/{product}'
*/
const destroyForm = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::destroy
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:67
* @route '/api/v1/admin/products/{product}'
*/
destroyForm.delete = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::stats
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:74
* @route '/api/v1/admin/products-stats'
*/
const statsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::stats
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:74
* @route '/api/v1/admin/products-stats'
*/
statsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::stats
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:74
* @route '/api/v1/admin/products-stats'
*/
statsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

stats.form = statsForm

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::activate
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:20
* @route '/api/v1/admin/products/{product}/activate'
*/
export const activate = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
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
activate.url = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
activate.patch = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activate.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::activate
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:20
* @route '/api/v1/admin/products/{product}/activate'
*/
const activateForm = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: activate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::activate
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:20
* @route '/api/v1/admin/products/{product}/activate'
*/
activateForm.patch = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: activate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

activate.form = activateForm

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::deactivate
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:30
* @route '/api/v1/admin/products/{product}/deactivate'
*/
export const deactivate = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
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
deactivate.url = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
deactivate.patch = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::deactivate
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:30
* @route '/api/v1/admin/products/{product}/deactivate'
*/
const deactivateForm = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deactivate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::deactivate
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:30
* @route '/api/v1/admin/products/{product}/deactivate'
*/
deactivateForm.patch = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deactivate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deactivate.form = deactivateForm

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::draft
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:40
* @route '/api/v1/admin/products/{product}/draft'
*/
export const draft = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
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
draft.url = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
draft.patch = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: draft.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::draft
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:40
* @route '/api/v1/admin/products/{product}/draft'
*/
const draftForm = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: draft.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::draft
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:40
* @route '/api/v1/admin/products/{product}/draft'
*/
draftForm.patch = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: draft.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

draft.form = draftForm

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::toggleFeatured
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:50
* @route '/api/v1/admin/products/{product}/toggle-featured'
*/
export const toggleFeatured = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
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
toggleFeatured.url = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
toggleFeatured.patch = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleFeatured.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::toggleFeatured
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:50
* @route '/api/v1/admin/products/{product}/toggle-featured'
*/
const toggleFeaturedForm = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleFeatured.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::toggleFeatured
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:50
* @route '/api/v1/admin/products/{product}/toggle-featured'
*/
toggleFeaturedForm.patch = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleFeatured.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleFeatured.form = toggleFeaturedForm

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::updateStock
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:61
* @route '/api/v1/admin/products/{product}/stock'
*/
export const updateStock = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
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
updateStock.url = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
updateStock.patch = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStock.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::updateStock
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:61
* @route '/api/v1/admin/products/{product}/stock'
*/
const updateStockForm = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStock.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductStatusApiController::updateStock
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductStatusApiController.php:61
* @route '/api/v1/admin/products/{product}/stock'
*/
updateStockForm.patch = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStock.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateStock.form = updateStockForm

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