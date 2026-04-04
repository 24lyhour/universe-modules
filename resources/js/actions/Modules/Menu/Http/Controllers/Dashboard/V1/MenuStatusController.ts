import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuStatusController::__invoke
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuStatusController.php:20
* @route '/dashboard/menus/{menu}/toggle-status'
*/
const MenuStatusController = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: MenuStatusController.url(args, options),
    method: 'put',
})

MenuStatusController.definition = {
    methods: ["put"],
    url: '/dashboard/menus/{menu}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuStatusController::__invoke
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuStatusController.php:20
* @route '/dashboard/menus/{menu}/toggle-status'
*/
MenuStatusController.url = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return MenuStatusController.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuStatusController::__invoke
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuStatusController.php:20
* @route '/dashboard/menus/{menu}/toggle-status'
*/
MenuStatusController.put = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: MenuStatusController.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuStatusController::__invoke
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuStatusController.php:20
* @route '/dashboard/menus/{menu}/toggle-status'
*/
const MenuStatusControllerForm = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: MenuStatusController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuStatusController::__invoke
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuStatusController.php:20
* @route '/dashboard/menus/{menu}/toggle-status'
*/
MenuStatusControllerForm.put = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: MenuStatusController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

MenuStatusController.form = MenuStatusControllerForm

export default MenuStatusController