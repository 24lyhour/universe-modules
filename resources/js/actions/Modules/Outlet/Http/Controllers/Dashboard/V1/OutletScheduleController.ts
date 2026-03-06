import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:19
* @route '/dashboard/outlets/{outlet}/schedule'
*/
export const show = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlets/{outlet}/schedule',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:19
* @route '/dashboard/outlets/{outlet}/schedule'
*/
show.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return show.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:19
* @route '/dashboard/outlets/{outlet}/schedule'
*/
show.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:19
* @route '/dashboard/outlets/{outlet}/schedule'
*/
show.head = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:29
* @route '/dashboard/outlets/{outlet}/schedule'
*/
export const update = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/outlets/{outlet}/schedule',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:29
* @route '/dashboard/outlets/{outlet}/schedule'
*/
update.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return update.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:29
* @route '/dashboard/outlets/{outlet}/schedule'
*/
update.put = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

const OutletScheduleController = { show, update }

export default OutletScheduleController