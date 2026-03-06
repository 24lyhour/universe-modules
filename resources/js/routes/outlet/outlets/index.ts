import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::index
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:32
* @route '/dashboard/outlets'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::index
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:32
* @route '/dashboard/outlets'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::index
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:32
* @route '/dashboard/outlets'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::index
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:32
* @route '/dashboard/outlets'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::create
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:50
* @route '/dashboard/outlets/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlets/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::create
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:50
* @route '/dashboard/outlets/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::create
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:50
* @route '/dashboard/outlets/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::create
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:50
* @route '/dashboard/outlets/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::store
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:60
* @route '/dashboard/outlets'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/outlets',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::store
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:60
* @route '/dashboard/outlets'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::store
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:60
* @route '/dashboard/outlets'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:72
* @route '/dashboard/outlets/{outlet}'
*/
export const show = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlets/{outlet}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:72
* @route '/dashboard/outlets/{outlet}'
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
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:72
* @route '/dashboard/outlets/{outlet}'
*/
show.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:72
* @route '/dashboard/outlets/{outlet}'
*/
show.head = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::edit
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:82
* @route '/dashboard/outlets/{outlet}/edit'
*/
export const edit = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlets/{outlet}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::edit
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:82
* @route '/dashboard/outlets/{outlet}/edit'
*/
edit.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::edit
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:82
* @route '/dashboard/outlets/{outlet}/edit'
*/
edit.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::edit
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:82
* @route '/dashboard/outlets/{outlet}/edit'
*/
edit.head = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:108
* @route '/dashboard/outlets/{outlet}'
*/
export const update = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/outlets/{outlet}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:108
* @route '/dashboard/outlets/{outlet}'
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
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:108
* @route '/dashboard/outlets/{outlet}'
*/
update.put = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:108
* @route '/dashboard/outlets/{outlet}'
*/
update.patch = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::destroy
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:130
* @route '/dashboard/outlets/{outlet}'
*/
export const destroy = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/outlets/{outlet}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::destroy
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:130
* @route '/dashboard/outlets/{outlet}'
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
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::destroy
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:130
* @route '/dashboard/outlets/{outlet}'
*/
destroy.delete = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::confirmDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:120
* @route '/dashboard/outlets/{outlet}/delete'
*/
export const confirmDelete = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlets/{outlet}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::confirmDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:120
* @route '/dashboard/outlets/{outlet}/delete'
*/
confirmDelete.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return confirmDelete.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::confirmDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:120
* @route '/dashboard/outlets/{outlet}/delete'
*/
confirmDelete.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::confirmDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:120
* @route '/dashboard/outlets/{outlet}/delete'
*/
confirmDelete.head = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletStatusController::__invoke
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletStatusController.php:20
* @route '/dashboard/outlets/{outlet}/toggle-status'
*/
export const toggleStatus = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

toggleStatus.definition = {
    methods: ["put"],
    url: '/dashboard/outlets/{outlet}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletStatusController::__invoke
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletStatusController.php:20
* @route '/dashboard/outlets/{outlet}/toggle-status'
*/
toggleStatus.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return toggleStatus.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletStatusController::__invoke
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletStatusController.php:20
* @route '/dashboard/outlets/{outlet}/toggle-status'
*/
toggleStatus.put = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::schedule
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:19
* @route '/dashboard/outlets/{outlet}/schedule'
*/
export const schedule = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: schedule.url(args, options),
    method: 'get',
})

schedule.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlets/{outlet}/schedule',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::schedule
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:19
* @route '/dashboard/outlets/{outlet}/schedule'
*/
schedule.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return schedule.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::schedule
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:19
* @route '/dashboard/outlets/{outlet}/schedule'
*/
schedule.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: schedule.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::schedule
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:19
* @route '/dashboard/outlets/{outlet}/schedule'
*/
schedule.head = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: schedule.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::updateSchedule
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:29
* @route '/dashboard/outlets/{outlet}/schedule'
*/
export const updateSchedule = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateSchedule.url(args, options),
    method: 'put',
})

updateSchedule.definition = {
    methods: ["put"],
    url: '/dashboard/outlets/{outlet}/schedule',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::updateSchedule
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:29
* @route '/dashboard/outlets/{outlet}/schedule'
*/
updateSchedule.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return updateSchedule.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::updateSchedule
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:29
* @route '/dashboard/outlets/{outlet}/schedule'
*/
updateSchedule.put = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateSchedule.url(args, options),
    method: 'put',
})

const outlets = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    confirmDelete: Object.assign(confirmDelete, confirmDelete),
    toggleStatus: Object.assign(toggleStatus, toggleStatus),
    schedule: Object.assign(schedule, schedule),
    updateSchedule: Object.assign(updateSchedule, updateSchedule),
}

export default outlets