import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::manage
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:232
* @route '/dashboard/products/{product}/attributes/manage'
*/
export const manage = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manage.url(args, options),
    method: 'get',
})

manage.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/{product}/attributes/manage',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::manage
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:232
* @route '/dashboard/products/{product}/attributes/manage'
*/
manage.url = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return manage.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::manage
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:232
* @route '/dashboard/products/{product}/attributes/manage'
*/
manage.get = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manage.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::manage
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:232
* @route '/dashboard/products/{product}/attributes/manage'
*/
manage.head = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manage.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::manage
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:232
* @route '/dashboard/products/{product}/attributes/manage'
*/
const manageForm = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manage.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::manage
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:232
* @route '/dashboard/products/{product}/attributes/manage'
*/
manageForm.get = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manage.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::manage
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:232
* @route '/dashboard/products/{product}/attributes/manage'
*/
manageForm.head = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

manage.form = manageForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::sync
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:256
* @route '/dashboard/products/{product}/attributes/sync'
*/
export const sync = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sync.url(args, options),
    method: 'post',
})

sync.definition = {
    methods: ["post"],
    url: '/dashboard/products/{product}/attributes/sync',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::sync
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:256
* @route '/dashboard/products/{product}/attributes/sync'
*/
sync.url = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return sync.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::sync
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:256
* @route '/dashboard/products/{product}/attributes/sync'
*/
sync.post = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sync.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::sync
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:256
* @route '/dashboard/products/{product}/attributes/sync'
*/
const syncForm = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sync.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::sync
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:256
* @route '/dashboard/products/{product}/attributes/sync'
*/
syncForm.post = (args: { product: string | number | { id: string | number } } | [product: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sync.url(args, options),
    method: 'post',
})

sync.form = syncForm

const attributes = {
    manage: Object.assign(manage, manage),
    sync: Object.assign(sync, sync),
}

export default attributes