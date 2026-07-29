import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::manage
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:25
* @route '/dashboard/categories/{category}/products/manage'
*/
export const manage = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manage.url(args, options),
    method: 'get',
})

manage.definition = {
    methods: ["get","head"],
    url: '/dashboard/categories/{category}/products/manage',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::manage
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:25
* @route '/dashboard/categories/{category}/products/manage'
*/
manage.url = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return manage.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::manage
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:25
* @route '/dashboard/categories/{category}/products/manage'
*/
manage.get = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manage.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::manage
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:25
* @route '/dashboard/categories/{category}/products/manage'
*/
manage.head = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manage.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::manage
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:25
* @route '/dashboard/categories/{category}/products/manage'
*/
const manageForm = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manage.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::manage
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:25
* @route '/dashboard/categories/{category}/products/manage'
*/
manageForm.get = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manage.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::manage
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:25
* @route '/dashboard/categories/{category}/products/manage'
*/
manageForm.head = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::sync
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:51
* @route '/dashboard/categories/{category}/products/sync'
*/
export const sync = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sync.url(args, options),
    method: 'post',
})

sync.definition = {
    methods: ["post"],
    url: '/dashboard/categories/{category}/products/sync',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::sync
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:51
* @route '/dashboard/categories/{category}/products/sync'
*/
sync.url = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return sync.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::sync
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:51
* @route '/dashboard/categories/{category}/products/sync'
*/
sync.post = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sync.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::sync
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:51
* @route '/dashboard/categories/{category}/products/sync'
*/
const syncForm = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sync.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::sync
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:51
* @route '/dashboard/categories/{category}/products/sync'
*/
syncForm.post = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sync.url(args, options),
    method: 'post',
})

sync.form = syncForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::reorder
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:89
* @route '/dashboard/categories/{category}/products/reorder'
*/
export const reorder = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/dashboard/categories/{category}/products/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::reorder
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:89
* @route '/dashboard/categories/{category}/products/reorder'
*/
reorder.url = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return reorder.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::reorder
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:89
* @route '/dashboard/categories/{category}/products/reorder'
*/
reorder.post = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::reorder
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:89
* @route '/dashboard/categories/{category}/products/reorder'
*/
const reorderForm = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::reorder
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:89
* @route '/dashboard/categories/{category}/products/reorder'
*/
reorderForm.post = (args: { category: string | number | { id: string | number } } | [category: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(args, options),
    method: 'post',
})

reorder.form = reorderForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::toggleAvailability
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:73
* @route '/dashboard/categories/{category}/products/{product}/toggle-availability'
*/
export const toggleAvailability = (args: { category: string | number | { id: string | number }, product: string | number | { id: string | number } } | [category: string | number | { id: string | number }, product: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleAvailability.url(args, options),
    method: 'put',
})

toggleAvailability.definition = {
    methods: ["put"],
    url: '/dashboard/categories/{category}/products/{product}/toggle-availability',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::toggleAvailability
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:73
* @route '/dashboard/categories/{category}/products/{product}/toggle-availability'
*/
toggleAvailability.url = (args: { category: string | number | { id: string | number }, product: string | number | { id: string | number } } | [category: string | number | { id: string | number }, product: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            category: args[0],
            product: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return toggleAvailability.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::toggleAvailability
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:73
* @route '/dashboard/categories/{category}/products/{product}/toggle-availability'
*/
toggleAvailability.put = (args: { category: string | number | { id: string | number }, product: string | number | { id: string | number } } | [category: string | number | { id: string | number }, product: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleAvailability.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::toggleAvailability
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:73
* @route '/dashboard/categories/{category}/products/{product}/toggle-availability'
*/
const toggleAvailabilityForm = (args: { category: string | number | { id: string | number }, product: string | number | { id: string | number } } | [category: string | number | { id: string | number }, product: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleAvailability.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryProductController::toggleAvailability
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryProductController.php:73
* @route '/dashboard/categories/{category}/products/{product}/toggle-availability'
*/
toggleAvailabilityForm.put = (args: { category: string | number | { id: string | number }, product: string | number | { id: string | number } } | [category: string | number | { id: string | number }, product: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleAvailability.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleAvailability.form = toggleAvailabilityForm

const products = {
    manage: Object.assign(manage, manage),
    sync: Object.assign(sync, sync),
    reorder: Object.assign(reorder, reorder),
    toggleAvailability: Object.assign(toggleAvailability, toggleAvailability),
}

export default products