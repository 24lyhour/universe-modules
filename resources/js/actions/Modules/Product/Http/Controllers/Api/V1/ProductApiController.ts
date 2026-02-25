import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:26
* @route '/api/v1/products'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/products',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:26
* @route '/api/v1/products'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:26
* @route '/api/v1/products'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:26
* @route '/api/v1/products'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:26
* @route '/api/v1/products'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:26
* @route '/api/v1/products'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:26
* @route '/api/v1/products'
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::store
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:52
* @route '/api/v1/products'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/products',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::store
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:52
* @route '/api/v1/products'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::store
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:52
* @route '/api/v1/products'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::store
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:52
* @route '/api/v1/products'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::store
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:52
* @route '/api/v1/products'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:65
* @route '/api/v1/products/{product}'
*/
export const show = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/products/{product}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:65
* @route '/api/v1/products/{product}'
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:65
* @route '/api/v1/products/{product}'
*/
show.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:65
* @route '/api/v1/products/{product}'
*/
show.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:65
* @route '/api/v1/products/{product}'
*/
const showForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:65
* @route '/api/v1/products/{product}'
*/
showForm.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:65
* @route '/api/v1/products/{product}'
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::update
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:77
* @route '/api/v1/products/{product}'
*/
export const update = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/products/{product}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::update
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:77
* @route '/api/v1/products/{product}'
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::update
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:77
* @route '/api/v1/products/{product}'
*/
update.put = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::update
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:77
* @route '/api/v1/products/{product}'
*/
update.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::update
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:77
* @route '/api/v1/products/{product}'
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::update
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:77
* @route '/api/v1/products/{product}'
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::update
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:77
* @route '/api/v1/products/{product}'
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::destroy
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:90
* @route '/api/v1/products/{product}'
*/
export const destroy = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/products/{product}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::destroy
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:90
* @route '/api/v1/products/{product}'
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::destroy
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:90
* @route '/api/v1/products/{product}'
*/
destroy.delete = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::destroy
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:90
* @route '/api/v1/products/{product}'
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::destroy
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:90
* @route '/api/v1/products/{product}'
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::stats
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:102
* @route '/api/v1/products-stats'
*/
export const stats = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

stats.definition = {
    methods: ["get","head"],
    url: '/api/v1/products-stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::stats
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:102
* @route '/api/v1/products-stats'
*/
stats.url = (options?: RouteQueryOptions) => {
    return stats.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::stats
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:102
* @route '/api/v1/products-stats'
*/
stats.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::stats
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:102
* @route '/api/v1/products-stats'
*/
stats.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stats.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::stats
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:102
* @route '/api/v1/products-stats'
*/
const statsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::stats
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:102
* @route '/api/v1/products-stats'
*/
statsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::stats
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:102
* @route '/api/v1/products-stats'
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::search
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:112
* @route '/api/v1/products-search'
*/
export const search = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/api/v1/products-search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::search
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:112
* @route '/api/v1/products-search'
*/
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::search
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:112
* @route '/api/v1/products-search'
*/
search.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::search
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:112
* @route '/api/v1/products-search'
*/
search.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::search
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:112
* @route '/api/v1/products-search'
*/
const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::search
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:112
* @route '/api/v1/products-search'
*/
searchForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductApiController::search
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductApiController.php:112
* @route '/api/v1/products-search'
*/
searchForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

search.form = searchForm

const ProductApiController = { index, store, show, update, destroy, stats, search }

export default ProductApiController