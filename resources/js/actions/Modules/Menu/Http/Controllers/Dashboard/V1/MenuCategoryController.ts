import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::manageCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:31
* @route '/dashboard/menus/{menu}/categories/manage'
*/
export const manageCategories = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manageCategories.url(args, options),
    method: 'get',
})

manageCategories.definition = {
    methods: ["get","head"],
    url: '/dashboard/menus/{menu}/categories/manage',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::manageCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:31
* @route '/dashboard/menus/{menu}/categories/manage'
*/
manageCategories.url = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { menu: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            menu: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu: typeof args.menu === 'object'
        ? args.menu.uuid
        : args.menu,
    }

    return manageCategories.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::manageCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:31
* @route '/dashboard/menus/{menu}/categories/manage'
*/
manageCategories.get = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manageCategories.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::manageCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:31
* @route '/dashboard/menus/{menu}/categories/manage'
*/
manageCategories.head = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manageCategories.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::manageCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:31
* @route '/dashboard/menus/{menu}/categories/manage'
*/
const manageCategoriesForm = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageCategories.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::manageCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:31
* @route '/dashboard/menus/{menu}/categories/manage'
*/
manageCategoriesForm.get = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageCategories.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::manageCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:31
* @route '/dashboard/menus/{menu}/categories/manage'
*/
manageCategoriesForm.head = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageCategories.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

manageCategories.form = manageCategoriesForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::reorderCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:42
* @route '/dashboard/menus/{menu}/categories/reorder'
*/
export const reorderCategories = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorderCategories.url(args, options),
    method: 'post',
})

reorderCategories.definition = {
    methods: ["post"],
    url: '/dashboard/menus/{menu}/categories/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::reorderCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:42
* @route '/dashboard/menus/{menu}/categories/reorder'
*/
reorderCategories.url = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { menu: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            menu: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu: typeof args.menu === 'object'
        ? args.menu.uuid
        : args.menu,
    }

    return reorderCategories.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::reorderCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:42
* @route '/dashboard/menus/{menu}/categories/reorder'
*/
reorderCategories.post = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorderCategories.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::reorderCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:42
* @route '/dashboard/menus/{menu}/categories/reorder'
*/
const reorderCategoriesForm = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorderCategories.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::reorderCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:42
* @route '/dashboard/menus/{menu}/categories/reorder'
*/
reorderCategoriesForm.post = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorderCategories.url(args, options),
    method: 'post',
})

reorderCategories.form = reorderCategoriesForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::assignCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:52
* @route '/dashboard/menus/{menu}/categories/assign'
*/
export const assignCategories = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: assignCategories.url(args, options),
    method: 'get',
})

assignCategories.definition = {
    methods: ["get","head"],
    url: '/dashboard/menus/{menu}/categories/assign',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::assignCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:52
* @route '/dashboard/menus/{menu}/categories/assign'
*/
assignCategories.url = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { menu: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            menu: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu: typeof args.menu === 'object'
        ? args.menu.uuid
        : args.menu,
    }

    return assignCategories.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::assignCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:52
* @route '/dashboard/menus/{menu}/categories/assign'
*/
assignCategories.get = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: assignCategories.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::assignCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:52
* @route '/dashboard/menus/{menu}/categories/assign'
*/
assignCategories.head = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: assignCategories.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::assignCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:52
* @route '/dashboard/menus/{menu}/categories/assign'
*/
const assignCategoriesForm = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: assignCategories.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::assignCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:52
* @route '/dashboard/menus/{menu}/categories/assign'
*/
assignCategoriesForm.get = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: assignCategories.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::assignCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:52
* @route '/dashboard/menus/{menu}/categories/assign'
*/
assignCategoriesForm.head = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: assignCategories.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

assignCategories.form = assignCategoriesForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::syncAssignedCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:63
* @route '/dashboard/menus/{menu}/categories/sync'
*/
export const syncAssignedCategories = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncAssignedCategories.url(args, options),
    method: 'post',
})

syncAssignedCategories.definition = {
    methods: ["post"],
    url: '/dashboard/menus/{menu}/categories/sync',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::syncAssignedCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:63
* @route '/dashboard/menus/{menu}/categories/sync'
*/
syncAssignedCategories.url = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { menu: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            menu: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu: typeof args.menu === 'object'
        ? args.menu.uuid
        : args.menu,
    }

    return syncAssignedCategories.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::syncAssignedCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:63
* @route '/dashboard/menus/{menu}/categories/sync'
*/
syncAssignedCategories.post = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncAssignedCategories.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::syncAssignedCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:63
* @route '/dashboard/menus/{menu}/categories/sync'
*/
const syncAssignedCategoriesForm = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: syncAssignedCategories.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuCategoryController::syncAssignedCategories
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuCategoryController.php:63
* @route '/dashboard/menus/{menu}/categories/sync'
*/
syncAssignedCategoriesForm.post = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: syncAssignedCategories.url(args, options),
    method: 'post',
})

syncAssignedCategories.form = syncAssignedCategoriesForm

const MenuCategoryController = { manageCategories, reorderCategories, assignCategories, syncAssignedCategories }

export default MenuCategoryController