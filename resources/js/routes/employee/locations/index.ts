import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:56
* @route '/dashboard/locations/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:56
* @route '/dashboard/locations/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:56
* @route '/dashboard/locations/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:88
* @route '/dashboard/locations'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:88
* @route '/dashboard/locations'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:20
* @route '/dashboard/locations'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:20
* @route '/dashboard/locations'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:20
* @route '/dashboard/locations'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:132
* @route '/dashboard/locations/{location}'
*/
export const show = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
show.url = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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
show.get = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:132
* @route '/dashboard/locations/{location}'
*/
show.head = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:132
* @route '/dashboard/locations/{location}'
*/
const showForm = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:132
* @route '/dashboard/locations/{location}'
*/
showForm.get = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:132
* @route '/dashboard/locations/{location}'
*/
showForm.head = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:143
* @route '/dashboard/locations/{location}/edit'
*/
export const edit = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
edit.url = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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
edit.get = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:143
* @route '/dashboard/locations/{location}/edit'
*/
edit.head = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:143
* @route '/dashboard/locations/{location}/edit'
*/
const editForm = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:143
* @route '/dashboard/locations/{location}/edit'
*/
editForm.get = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:143
* @route '/dashboard/locations/{location}/edit'
*/
editForm.head = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:170
* @route '/dashboard/locations/{location}'
*/
export const update = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
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
update.url = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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
update.put = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:170
* @route '/dashboard/locations/{location}'
*/
const updateForm = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:170
* @route '/dashboard/locations/{location}'
*/
updateForm.put = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::updateSchedule
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:210
* @route '/dashboard/locations/{location}/schedule'
*/
export const updateSchedule = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
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
updateSchedule.url = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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
updateSchedule.put = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateSchedule.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::updateSchedule
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:210
* @route '/dashboard/locations/{location}/schedule'
*/
const updateScheduleForm = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSchedule.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::updateSchedule
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:210
* @route '/dashboard/locations/{location}/schedule'
*/
updateScheduleForm.put = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSchedule.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateSchedule.form = updateScheduleForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::toggleStatus
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:249
* @route '/dashboard/locations/{location}/toggle-status'
*/
export const toggleStatus = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
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
toggleStatus.url = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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
toggleStatus.put = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::toggleStatus
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:249
* @route '/dashboard/locations/{location}/toggle-status'
*/
const toggleStatusForm = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::toggleStatus
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:249
* @route '/dashboard/locations/{location}/toggle-status'
*/
toggleStatusForm.put = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleStatus.form = toggleStatusForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:269
* @route '/dashboard/locations/{location}'
*/
export const destroy = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
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
destroy.url = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
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
destroy.delete = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:269
* @route '/dashboard/locations/{location}'
*/
const destroyForm = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\LocationController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/LocationController.php:269
* @route '/dashboard/locations/{location}'
*/
destroyForm.delete = (args: { location: string | number | { uuid: string | number } } | [location: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const locations = {
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    index: Object.assign(index, index),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    updateSchedule: Object.assign(updateSchedule, updateSchedule),
    toggleStatus: Object.assign(toggleStatus, toggleStatus),
    destroy: Object.assign(destroy, destroy),
}

export default locations