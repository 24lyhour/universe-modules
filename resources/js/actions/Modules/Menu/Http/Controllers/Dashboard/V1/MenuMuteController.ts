import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:19
* @route '/dashboard/menus/{menu}/mute'
*/
export const show = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/menus/{menu}/mute',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:19
* @route '/dashboard/menus/{menu}/mute'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:19
* @route '/dashboard/menus/{menu}/mute'
*/
show.get = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:19
* @route '/dashboard/menus/{menu}/mute'
*/
show.head = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:19
* @route '/dashboard/menus/{menu}/mute'
*/
const showForm = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:19
* @route '/dashboard/menus/{menu}/mute'
*/
showForm.get = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:19
* @route '/dashboard/menus/{menu}/mute'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::mute
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:34
* @route '/dashboard/menus/{menu}/mute'
*/
export const mute = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: mute.url(args, options),
    method: 'post',
})

mute.definition = {
    methods: ["post"],
    url: '/dashboard/menus/{menu}/mute',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::mute
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:34
* @route '/dashboard/menus/{menu}/mute'
*/
mute.url = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return mute.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::mute
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:34
* @route '/dashboard/menus/{menu}/mute'
*/
mute.post = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: mute.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::mute
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:34
* @route '/dashboard/menus/{menu}/mute'
*/
const muteForm = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: mute.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::mute
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:34
* @route '/dashboard/menus/{menu}/mute'
*/
muteForm.post = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: mute.url(args, options),
    method: 'post',
})

mute.form = muteForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::unmute
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:54
* @route '/dashboard/menus/{menu}/mute'
*/
export const unmute = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: unmute.url(args, options),
    method: 'delete',
})

unmute.definition = {
    methods: ["delete"],
    url: '/dashboard/menus/{menu}/mute',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::unmute
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:54
* @route '/dashboard/menus/{menu}/mute'
*/
unmute.url = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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

    return unmute.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::unmute
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:54
* @route '/dashboard/menus/{menu}/mute'
*/
unmute.delete = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: unmute.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::unmute
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:54
* @route '/dashboard/menus/{menu}/mute'
*/
const unmuteForm = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: unmute.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::unmute
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:54
* @route '/dashboard/menus/{menu}/mute'
*/
unmuteForm.delete = (args: { menu: string | number | { uuid: string | number } } | [menu: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: unmute.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

unmute.form = unmuteForm

const MenuMuteController = { show, mute, unmute }

export default MenuMuteController