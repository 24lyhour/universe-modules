import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../../wayfinder'
/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::index
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:22
* @route '/api/v1/menus'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/menus',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::index
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:22
* @route '/api/v1/menus'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::index
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:22
* @route '/api/v1/menus'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::index
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:22
* @route '/api/v1/menus'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::index
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:22
* @route '/api/v1/menus'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::index
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:22
* @route '/api/v1/menus'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::index
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:22
* @route '/api/v1/menus'
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
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:55
* @route '/api/v1/menus/{menu}'
*/
export const show = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/menus/{menu}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:55
* @route '/api/v1/menus/{menu}'
*/
show.url = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:55
* @route '/api/v1/menus/{menu}'
*/
show.get = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:55
* @route '/api/v1/menus/{menu}'
*/
show.head = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:55
* @route '/api/v1/menus/{menu}'
*/
const showForm = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:55
* @route '/api/v1/menus/{menu}'
*/
showForm.get = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:55
* @route '/api/v1/menus/{menu}'
*/
showForm.head = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::menuTypes
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:39
* @route '/api/v1/menu-types'
*/
export const menuTypes = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: menuTypes.url(options),
    method: 'get',
})

menuTypes.definition = {
    methods: ["get","head"],
    url: '/api/v1/menu-types',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::menuTypes
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:39
* @route '/api/v1/menu-types'
*/
menuTypes.url = (options?: RouteQueryOptions) => {
    return menuTypes.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::menuTypes
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:39
* @route '/api/v1/menu-types'
*/
menuTypes.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: menuTypes.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::menuTypes
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:39
* @route '/api/v1/menu-types'
*/
menuTypes.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: menuTypes.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::menuTypes
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:39
* @route '/api/v1/menu-types'
*/
const menuTypesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: menuTypes.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::menuTypes
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:39
* @route '/api/v1/menu-types'
*/
menuTypesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: menuTypes.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::menuTypes
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:39
* @route '/api/v1/menu-types'
*/
menuTypesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: menuTypes.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

menuTypes.form = menuTypesForm

const MenuController = { index, show, menuTypes }

export default MenuController