import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletStatusController::__invoke
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletStatusController.php:20
* @route '/dashboard/outlets/{outlet}/toggle-status'
*/
const OutletStatusController = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: OutletStatusController.url(args, options),
    method: 'put',
})

OutletStatusController.definition = {
    methods: ["put"],
    url: '/dashboard/outlets/{outlet}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletStatusController::__invoke
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletStatusController.php:20
* @route '/dashboard/outlets/{outlet}/toggle-status'
*/
OutletStatusController.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return OutletStatusController.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletStatusController::__invoke
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletStatusController.php:20
* @route '/dashboard/outlets/{outlet}/toggle-status'
*/
OutletStatusController.put = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: OutletStatusController.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletStatusController::__invoke
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletStatusController.php:20
* @route '/dashboard/outlets/{outlet}/toggle-status'
*/
const OutletStatusControllerForm = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: OutletStatusController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletStatusController::__invoke
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletStatusController.php:20
* @route '/dashboard/outlets/{outlet}/toggle-status'
*/
OutletStatusControllerForm.put = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: OutletStatusController.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

OutletStatusController.form = OutletStatusControllerForm

export default OutletStatusController