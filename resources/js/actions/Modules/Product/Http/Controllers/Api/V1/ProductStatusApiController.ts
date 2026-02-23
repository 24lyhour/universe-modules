import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::activate
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:23
* @route '/api/v1/products/{product}/activate'
*/
export const activate = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activate.url(args, options),
    method: 'patch',
})

activate.definition = {
    methods: ["patch"],
    url: '/api/v1/products/{product}/activate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::activate
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:23
* @route '/api/v1/products/{product}/activate'
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::activate
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:23
* @route '/api/v1/products/{product}/activate'
*/
activate.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activate.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::activate
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:23
* @route '/api/v1/products/{product}/activate'
*/
const activateForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: activate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::activate
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:23
* @route '/api/v1/products/{product}/activate'
*/
activateForm.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::deactivate
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:36
* @route '/api/v1/products/{product}/deactivate'
*/
export const deactivate = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate.url(args, options),
    method: 'patch',
})

deactivate.definition = {
    methods: ["patch"],
    url: '/api/v1/products/{product}/deactivate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::deactivate
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:36
* @route '/api/v1/products/{product}/deactivate'
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::deactivate
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:36
* @route '/api/v1/products/{product}/deactivate'
*/
deactivate.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::deactivate
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:36
* @route '/api/v1/products/{product}/deactivate'
*/
const deactivateForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deactivate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::deactivate
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:36
* @route '/api/v1/products/{product}/deactivate'
*/
deactivateForm.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::setDraft
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:49
* @route '/api/v1/products/{product}/draft'
*/
export const setDraft = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: setDraft.url(args, options),
    method: 'patch',
})

setDraft.definition = {
    methods: ["patch"],
    url: '/api/v1/products/{product}/draft',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::setDraft
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:49
* @route '/api/v1/products/{product}/draft'
*/
setDraft.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return setDraft.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::setDraft
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:49
* @route '/api/v1/products/{product}/draft'
*/
setDraft.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: setDraft.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::setDraft
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:49
* @route '/api/v1/products/{product}/draft'
*/
const setDraftForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setDraft.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::setDraft
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:49
* @route '/api/v1/products/{product}/draft'
*/
setDraftForm.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setDraft.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

setDraft.form = setDraftForm

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::toggleFeatured
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:62
* @route '/api/v1/products/{product}/toggle-featured'
*/
export const toggleFeatured = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleFeatured.url(args, options),
    method: 'patch',
})

toggleFeatured.definition = {
    methods: ["patch"],
    url: '/api/v1/products/{product}/toggle-featured',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::toggleFeatured
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:62
* @route '/api/v1/products/{product}/toggle-featured'
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::toggleFeatured
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:62
* @route '/api/v1/products/{product}/toggle-featured'
*/
toggleFeatured.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleFeatured.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::toggleFeatured
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:62
* @route '/api/v1/products/{product}/toggle-featured'
*/
const toggleFeaturedForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleFeatured.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::toggleFeatured
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:62
* @route '/api/v1/products/{product}/toggle-featured'
*/
toggleFeaturedForm.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::updateStock
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:77
* @route '/api/v1/products/{product}/stock'
*/
export const updateStock = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStock.url(args, options),
    method: 'patch',
})

updateStock.definition = {
    methods: ["patch"],
    url: '/api/v1/products/{product}/stock',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::updateStock
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:77
* @route '/api/v1/products/{product}/stock'
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::updateStock
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:77
* @route '/api/v1/products/{product}/stock'
*/
updateStock.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStock.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::updateStock
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:77
* @route '/api/v1/products/{product}/stock'
*/
const updateStockForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStock.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductStatusApiController::updateStock
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductStatusApiController.php:77
* @route '/api/v1/products/{product}/stock'
*/
updateStockForm.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStock.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateStock.form = updateStockForm

const ProductStatusApiController = { activate, deactivate, setDraft, toggleFeatured, updateStock }

export default ProductStatusApiController