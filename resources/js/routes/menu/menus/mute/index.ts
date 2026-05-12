import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::apply
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:34
* @route '/dashboard/menus/{menu}/mute'
*/
export const apply = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: apply.url(args, options),
    method: 'post',
})

apply.definition = {
    methods: ["post"],
    url: '/dashboard/menus/{menu}/mute',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::apply
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:34
* @route '/dashboard/menus/{menu}/mute'
*/
apply.url = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return apply.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::apply
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:34
* @route '/dashboard/menus/{menu}/mute'
*/
apply.post = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: apply.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::apply
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:34
* @route '/dashboard/menus/{menu}/mute'
*/
const applyForm = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: apply.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuMuteController::apply
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuMuteController.php:34
* @route '/dashboard/menus/{menu}/mute'
*/
applyForm.post = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: apply.url(args, options),
    method: 'post',
})

apply.form = applyForm

const mute = {
    apply: Object.assign(apply, apply),
}

export default mute