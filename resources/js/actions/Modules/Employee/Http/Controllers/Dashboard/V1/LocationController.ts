import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:56
* @route '/dashboard/locations/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/locations/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:56
* @route '/dashboard/locations/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:56
* @route '/dashboard/locations/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:56
* @route '/dashboard/locations/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:88
* @route '/dashboard/locations'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/locations',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:88
* @route '/dashboard/locations'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:88
* @route '/dashboard/locations'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:20
* @route '/dashboard/locations'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/locations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:20
* @route '/dashboard/locations'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:20
* @route '/dashboard/locations'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:20
* @route '/dashboard/locations'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:132
* @route '/dashboard/locations/{location}'
*/
export const show = (args: { location: string | { uuid: string } } | [location: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/locations/{location}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:132
* @route '/dashboard/locations/{location}'
*/
show.url = (args: { location: string | { uuid: string } } | [location: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { location: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { location: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            location: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        location: typeof args.location === 'object'
        ? args.location.uuid
        : args.location,
    }

    return show.definition.url
            .replace('{location}', parsedArgs.location.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:132
* @route '/dashboard/locations/{location}'
*/
show.get = (args: { location: string | { uuid: string } } | [location: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:132
* @route '/dashboard/locations/{location}'
*/
show.head = (args: { location: string | { uuid: string } } | [location: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:143
* @route '/dashboard/locations/{location}/edit'
*/
export const edit = (args: { location: string | { uuid: string } } | [location: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/locations/{location}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:143
* @route '/dashboard/locations/{location}/edit'
*/
edit.url = (args: { location: string | { uuid: string } } | [location: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { location: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { location: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            location: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        location: typeof args.location === 'object'
        ? args.location.uuid
        : args.location,
    }

    return edit.definition.url
            .replace('{location}', parsedArgs.location.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:143
* @route '/dashboard/locations/{location}/edit'
*/
edit.get = (args: { location: string | { uuid: string } } | [location: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:143
* @route '/dashboard/locations/{location}/edit'
*/
edit.head = (args: { location: string | { uuid: string } } | [location: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:170
* @route '/dashboard/locations/{location}'
*/
export const update = (args: { location: string | { uuid: string } } | [location: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/locations/{location}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:170
* @route '/dashboard/locations/{location}'
*/
update.url = (args: { location: string | { uuid: string } } | [location: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { location: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { location: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            location: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        location: typeof args.location === 'object'
        ? args.location.uuid
        : args.location,
    }

    return update.definition.url
            .replace('{location}', parsedArgs.location.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:170
* @route '/dashboard/locations/{location}'
*/
update.put = (args: { location: string | { uuid: string } } | [location: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::updateSchedule
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:210
* @route '/dashboard/locations/{location}/schedule'
*/
export const updateSchedule = (args: { location: string | { uuid: string } } | [location: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateSchedule.url(args, options),
    method: 'put',
})

updateSchedule.definition = {
    methods: ["put"],
    url: '/dashboard/locations/{location}/schedule',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::updateSchedule
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:210
* @route '/dashboard/locations/{location}/schedule'
*/
updateSchedule.url = (args: { location: string | { uuid: string } } | [location: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { location: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { location: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            location: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        location: typeof args.location === 'object'
        ? args.location.uuid
        : args.location,
    }

    return updateSchedule.definition.url
            .replace('{location}', parsedArgs.location.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::updateSchedule
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:210
* @route '/dashboard/locations/{location}/schedule'
*/
updateSchedule.put = (args: { location: string | { uuid: string } } | [location: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateSchedule.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::toggleStatus
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:249
* @route '/dashboard/locations/{location}/toggle-status'
*/
export const toggleStatus = (args: { location: string | { uuid: string } } | [location: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

toggleStatus.definition = {
    methods: ["put"],
    url: '/dashboard/locations/{location}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::toggleStatus
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:249
* @route '/dashboard/locations/{location}/toggle-status'
*/
toggleStatus.url = (args: { location: string | { uuid: string } } | [location: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { location: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { location: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            location: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        location: typeof args.location === 'object'
        ? args.location.uuid
        : args.location,
    }

    return toggleStatus.definition.url
            .replace('{location}', parsedArgs.location.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::toggleStatus
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:249
* @route '/dashboard/locations/{location}/toggle-status'
*/
toggleStatus.put = (args: { location: string | { uuid: string } } | [location: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:269
* @route '/dashboard/locations/{location}'
*/
export const destroy = (args: { location: string | { uuid: string } } | [location: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/locations/{location}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:269
* @route '/dashboard/locations/{location}'
*/
destroy.url = (args: { location: string | { uuid: string } } | [location: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { location: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { location: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            location: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        location: typeof args.location === 'object'
        ? args.location.uuid
        : args.location,
    }

    return destroy.definition.url
            .replace('{location}', parsedArgs.location.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:269
* @route '/dashboard/locations/{location}'
*/
destroy.delete = (args: { location: string | { uuid: string } } | [location: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const LocationController = { create, store, index, show, edit, update, updateSchedule, toggleStatus, destroy }

export default LocationController