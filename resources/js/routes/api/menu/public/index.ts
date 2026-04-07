import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::index
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:21
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
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:21
* @route '/api/v1/menus'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::index
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:21
* @route '/api/v1/menus'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::index
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:21
* @route '/api/v1/menus'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:38
* @route '/api/v1/menus/{menu}'
*/
export const show = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/menus/{menu}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:38
* @route '/api/v1/menus/{menu}'
*/
show.url = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:38
* @route '/api/v1/menus/{menu}'
*/
show.get = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:38
* @route '/api/v1/menus/{menu}'
*/
show.head = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

const publicMethod = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
}

export default publicMethod