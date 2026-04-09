import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
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
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:55
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
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:55
* @route '/api/v1/menus/{menu}'
*/
show.get = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:55
* @route '/api/v1/menus/{menu}'
*/
show.head = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:55
* @route '/api/v1/menus/{menu}'
*/
const showForm = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:55
* @route '/api/v1/menus/{menu}'
*/
showForm.get = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:55
* @route '/api/v1/menus/{menu}'
*/
showForm.head = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::types
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:39
* @route '/api/v1/menu-types'
*/
export const types = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: types.url(options),
    method: 'get',
})

types.definition = {
    methods: ["get","head"],
    url: '/api/v1/menu-types',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::types
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:39
* @route '/api/v1/menu-types'
*/
types.url = (options?: RouteQueryOptions) => {
    return types.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::types
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:39
* @route '/api/v1/menu-types'
*/
types.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: types.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::types
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:39
* @route '/api/v1/menu-types'
*/
types.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: types.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::types
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:39
* @route '/api/v1/menu-types'
*/
const typesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: types.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::types
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:39
* @route '/api/v1/menu-types'
*/
typesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: types.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\Customer\Menu\MenuController::types
* @see Modules/Menu/app/Http/Controllers/Api/V1/Customer/Menu/MenuController.php:39
* @route '/api/v1/menu-types'
*/
typesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: types.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

types.form = typesForm

const publicMethod = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
    types: Object.assign(types, types),
}

export default publicMethod