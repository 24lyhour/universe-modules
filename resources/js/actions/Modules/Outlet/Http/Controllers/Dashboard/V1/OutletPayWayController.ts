import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:22
* @route '/dashboard/outlets/{outlet}/payway'
*/
export const show = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
show.url = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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
show.get = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:22
* @route '/dashboard/outlets/{outlet}/payway'
*/
show.head = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:22
* @route '/dashboard/outlets/{outlet}/payway'
*/
const showForm = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:22
* @route '/dashboard/outlets/{outlet}/payway'
*/
showForm.get = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:22
* @route '/dashboard/outlets/{outlet}/payway'
*/
showForm.head = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:32
* @route '/dashboard/outlets/{outlet}/payway'
*/
export const update = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
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
update.url = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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
update.put = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:32
* @route '/dashboard/outlets/{outlet}/payway'
*/
const updateForm = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:32
* @route '/dashboard/outlets/{outlet}/payway'
*/
updateForm.put = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::test
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:44
* @route '/dashboard/outlets/{outlet}/payway/test'
*/
export const test = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
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
test.url = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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
test.post = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: test.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::test
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:44
* @route '/dashboard/outlets/{outlet}/payway/test'
*/
const testForm = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: test.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::test
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:44
* @route '/dashboard/outlets/{outlet}/payway/test'
*/
testForm.post = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: test.url(args, options),
    method: 'post',
})

test.form = testForm

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::toggle
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:66
* @route '/dashboard/outlets/{outlet}/payway/toggle'
*/
export const toggle = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
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
toggle.url = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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
toggle.put = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggle.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::toggle
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:66
* @route '/dashboard/outlets/{outlet}/payway/toggle'
*/
const toggleForm = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::toggle
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:66
* @route '/dashboard/outlets/{outlet}/payway/toggle'
*/
toggleForm.put = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggle.form = toggleForm

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::destroy
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:54
* @route '/dashboard/outlets/{outlet}/payway'
*/
export const destroy = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
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
destroy.url = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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
destroy.delete = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::destroy
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:54
* @route '/dashboard/outlets/{outlet}/payway'
*/
const destroyForm = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletPayWayController::destroy
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletPayWayController.php:54
* @route '/dashboard/outlets/{outlet}/payway'
*/
destroyForm.delete = (args: { outlet: string | number | { uuid: string | number } } | [outlet: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const OutletPayWayController = { show, update, test, toggle, destroy }

export default OutletPayWayController