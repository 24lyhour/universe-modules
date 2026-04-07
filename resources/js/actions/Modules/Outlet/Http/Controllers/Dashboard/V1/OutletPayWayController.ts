import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:22
* @route '/dashboard/outlets/{outlet}/payway'
*/
export const show = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlets/{outlet}/payway',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:22
* @route '/dashboard/outlets/{outlet}/payway'
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
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:22
* @route '/dashboard/outlets/{outlet}/payway'
*/
show.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:22
* @route '/dashboard/outlets/{outlet}/payway'
*/
show.head = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:32
* @route '/dashboard/outlets/{outlet}/payway'
*/
export const update = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/outlets/{outlet}/payway',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:32
* @route '/dashboard/outlets/{outlet}/payway'
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
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:32
* @route '/dashboard/outlets/{outlet}/payway'
*/
update.put = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::test
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:44
* @route '/dashboard/outlets/{outlet}/payway/test'
*/
export const test = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: test.url(args, options),
    method: 'post',
})

test.definition = {
    methods: ["post"],
    url: '/dashboard/outlets/{outlet}/payway/test',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::test
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:44
* @route '/dashboard/outlets/{outlet}/payway/test'
*/
test.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return test.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::test
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:44
* @route '/dashboard/outlets/{outlet}/payway/test'
*/
test.post = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: test.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::toggle
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:66
* @route '/dashboard/outlets/{outlet}/payway/toggle'
*/
export const toggle = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggle.url(args, options),
    method: 'put',
})

toggle.definition = {
    methods: ["put"],
    url: '/dashboard/outlets/{outlet}/payway/toggle',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::toggle
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:66
* @route '/dashboard/outlets/{outlet}/payway/toggle'
*/
toggle.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return toggle.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::toggle
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:66
* @route '/dashboard/outlets/{outlet}/payway/toggle'
*/
toggle.put = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggle.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::destroy
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:54
* @route '/dashboard/outlets/{outlet}/payway'
*/
export const destroy = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/outlets/{outlet}/payway',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::destroy
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:54
* @route '/dashboard/outlets/{outlet}/payway'
*/
destroy.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::destroy
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:54
* @route '/dashboard/outlets/{outlet}/payway'
*/
destroy.delete = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const OutletPayWayController = { show, update, test, toggle, destroy }

export default OutletPayWayController