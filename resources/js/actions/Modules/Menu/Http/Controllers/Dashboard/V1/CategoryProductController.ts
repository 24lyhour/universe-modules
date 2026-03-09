import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::manageProducts
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:25
* @route '/dashboard/categories/{category}/products/manage'
*/
export const manageProducts = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manageProducts.url(args, options),
    method: 'get',
})

manageProducts.definition = {
    methods: ["get","head"],
    url: '/dashboard/categories/{category}/products/manage',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::manageProducts
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:25
* @route '/dashboard/categories/{category}/products/manage'
*/
manageProducts.url = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return manageProducts.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::manageProducts
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:25
* @route '/dashboard/categories/{category}/products/manage'
*/
manageProducts.get = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manageProducts.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::manageProducts
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:25
* @route '/dashboard/categories/{category}/products/manage'
*/
manageProducts.head = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manageProducts.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::manageProducts
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:25
* @route '/dashboard/categories/{category}/products/manage'
*/
const manageProductsForm = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageProducts.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::manageProducts
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:25
* @route '/dashboard/categories/{category}/products/manage'
*/
manageProductsForm.get = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageProducts.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::manageProducts
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:25
* @route '/dashboard/categories/{category}/products/manage'
*/
manageProductsForm.head = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageProducts.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

manageProducts.form = manageProductsForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::syncProducts
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:51
* @route '/dashboard/categories/{category}/products/sync'
*/
export const syncProducts = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncProducts.url(args, options),
    method: 'post',
})

syncProducts.definition = {
    methods: ["post"],
    url: '/dashboard/categories/{category}/products/sync',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::syncProducts
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:51
* @route '/dashboard/categories/{category}/products/sync'
*/
syncProducts.url = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return syncProducts.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::syncProducts
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:51
* @route '/dashboard/categories/{category}/products/sync'
*/
syncProducts.post = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncProducts.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::syncProducts
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:51
* @route '/dashboard/categories/{category}/products/sync'
*/
const syncProductsForm = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: syncProducts.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::syncProducts
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:51
* @route '/dashboard/categories/{category}/products/sync'
*/
syncProductsForm.post = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: syncProducts.url(args, options),
    method: 'post',
})

syncProducts.form = syncProductsForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::reorderProducts
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:73
* @route '/dashboard/categories/{category}/products/reorder'
*/
export const reorderProducts = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorderProducts.url(args, options),
    method: 'post',
})

reorderProducts.definition = {
    methods: ["post"],
    url: '/dashboard/categories/{category}/products/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::reorderProducts
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:73
* @route '/dashboard/categories/{category}/products/reorder'
*/
reorderProducts.url = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return reorderProducts.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::reorderProducts
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:73
* @route '/dashboard/categories/{category}/products/reorder'
*/
reorderProducts.post = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorderProducts.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::reorderProducts
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:73
* @route '/dashboard/categories/{category}/products/reorder'
*/
const reorderProductsForm = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorderProducts.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::reorderProducts
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:73
* @route '/dashboard/categories/{category}/products/reorder'
*/
reorderProductsForm.post = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorderProducts.url(args, options),
    method: 'post',
})

reorderProducts.form = reorderProductsForm

const CategoryProductController = { manageProducts, syncProducts, reorderProducts }

export default CategoryProductController