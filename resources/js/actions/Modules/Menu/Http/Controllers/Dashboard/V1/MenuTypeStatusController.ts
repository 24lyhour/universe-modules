import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeStatusController::__invoke
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeStatusController.php:20
* @route '/dashboard/menu-types/{menu_type}/toggle-status'
*/
const MenuTypeStatusController = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: MenuTypeStatusController.url(args, options),
    method: 'put',
})

MenuTypeStatusController.definition = {
    methods: ["put"],
    url: '/dashboard/menu-types/{menu_type}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeStatusController::__invoke
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeStatusController.php:20
* @route '/dashboard/menu-types/{menu_type}/toggle-status'
*/
MenuTypeStatusController.url = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            menu_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu_type: args.menu_type,
    }

    return MenuTypeStatusController.definition.url
            .replace('{menu_type}', parsedArgs.menu_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeStatusController::__invoke
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeStatusController.php:20
* @route '/dashboard/menu-types/{menu_type}/toggle-status'
*/
MenuTypeStatusController.put = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: MenuTypeStatusController.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeStatusController::__invoke
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeStatusController.php:20
* @route '/dashboard/menu-types/{menu_type}/toggle-status'
*/
const MenuTypeStatusControllerForm = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: MenuTypeStatusController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeStatusController::__invoke
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeStatusController.php:20
* @route '/dashboard/menu-types/{menu_type}/toggle-status'
*/
MenuTypeStatusControllerForm.put = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: MenuTypeStatusController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

MenuTypeStatusController.form = MenuTypeStatusControllerForm

export default MenuTypeStatusController