import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../../wayfinder'
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
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:50
* @route '/api/v1/admin/products/{product}'
*/
const showForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:50
* @route '/api/v1/admin/products/{product}'
*/
showForm.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:50
* @route '/api/v1/admin/products/{product}'
*/
showForm.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::update
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:57
* @route '/api/v1/admin/products/{product}'
*/
const updateForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
updateForm.put = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
updateForm.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Product\Http\Controllers\Api\V1\Customer\Product\ProductApiController::destroy
* @see Modules/Product/app/Http/Controllers/Api/V1/Customer/Product/ProductApiController.php:67
* @route '/api/v1/admin/products/{product}'
*/
const destroyForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
destroyForm.delete = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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

const ProductApiController = { index, store, show, update, destroy, stats }

export default ProductApiController