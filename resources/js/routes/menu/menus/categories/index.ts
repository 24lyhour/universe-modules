import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::manage
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:31
* @route '/dashboard/menus/{menu}/categories/manage'
*/
export const manage = (args: { menu: number | { id: number } } | [menu: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manage.url(args, options),
    method: 'get',
})

manage.definition = {
    methods: ["get","head"],
    url: '/dashboard/menus/{menu}/categories/manage',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::manage
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:31
* @route '/dashboard/menus/{menu}/categories/manage'
*/
manage.url = (args: { menu: number | { id: number } } | [menu: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { menu: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            menu: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu: typeof args.menu === 'object'
        ? args.menu.id
        : args.menu,
    }

    return manage.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::manage
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:31
* @route '/dashboard/menus/{menu}/categories/manage'
*/
manage.get = (args: { menu: number | { id: number } } | [menu: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manage.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::manage
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:31
* @route '/dashboard/menus/{menu}/categories/manage'
*/
manage.head = (args: { menu: number | { id: number } } | [menu: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manage.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::reorder
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:42
* @route '/dashboard/menus/{menu}/categories/reorder'
*/
export const reorder = (args: { menu: number | { id: number } } | [menu: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/dashboard/menus/{menu}/categories/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::reorder
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:42
* @route '/dashboard/menus/{menu}/categories/reorder'
*/
reorder.url = (args: { menu: number | { id: number } } | [menu: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { menu: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            menu: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu: typeof args.menu === 'object'
        ? args.menu.id
        : args.menu,
    }

    return reorder.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::reorder
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:42
* @route '/dashboard/menus/{menu}/categories/reorder'
*/
reorder.post = (args: { menu: number | { id: number } } | [menu: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::assign
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:52
* @route '/dashboard/menus/{menu}/categories/assign'
*/
export const assign = (args: { menu: number | { id: number } } | [menu: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: assign.url(args, options),
    method: 'get',
})

assign.definition = {
    methods: ["get","head"],
    url: '/dashboard/menus/{menu}/categories/assign',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::assign
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:52
* @route '/dashboard/menus/{menu}/categories/assign'
*/
assign.url = (args: { menu: number | { id: number } } | [menu: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { menu: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            menu: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu: typeof args.menu === 'object'
        ? args.menu.id
        : args.menu,
    }

    return assign.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::assign
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:52
* @route '/dashboard/menus/{menu}/categories/assign'
*/
assign.get = (args: { menu: number | { id: number } } | [menu: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: assign.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::assign
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:52
* @route '/dashboard/menus/{menu}/categories/assign'
*/
assign.head = (args: { menu: number | { id: number } } | [menu: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: assign.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::sync
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:63
* @route '/dashboard/menus/{menu}/categories/sync'
*/
export const sync = (args: { menu: number | { id: number } } | [menu: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sync.url(args, options),
    method: 'post',
})

sync.definition = {
    methods: ["post"],
    url: '/dashboard/menus/{menu}/categories/sync',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::sync
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:63
* @route '/dashboard/menus/{menu}/categories/sync'
*/
sync.url = (args: { menu: number | { id: number } } | [menu: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { menu: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            menu: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu: typeof args.menu === 'object'
        ? args.menu.id
        : args.menu,
    }

    return sync.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::sync
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:63
* @route '/dashboard/menus/{menu}/categories/sync'
*/
sync.post = (args: { menu: number | { id: number } } | [menu: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sync.url(args, options),
    method: 'post',
})

const categories = {
    manage: Object.assign(manage, manage),
    reorder: Object.assign(reorder, reorder),
    assign: Object.assign(assign, assign),
    sync: Object.assign(sync, sync),
}

export default categories