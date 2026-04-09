import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:100
* @route '/dashboard/hotels/{hotel}/rooms/trash'
*/
export const trash = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(args, options),
    method: 'get',
})

trash.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotels/{hotel}/rooms/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:100
* @route '/dashboard/hotels/{hotel}/rooms/trash'
*/
trash.url = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hotel: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { hotel: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: typeof args.hotel === 'object'
        ? args.hotel.uuid
        : args.hotel,
    }

    return trash.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:100
* @route '/dashboard/hotels/{hotel}/rooms/trash'
*/
trash.get = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:100
* @route '/dashboard/hotels/{hotel}/rooms/trash'
*/
trash.head = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:100
* @route '/dashboard/hotels/{hotel}/rooms/trash'
*/
const trashForm = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:100
* @route '/dashboard/hotels/{hotel}/rooms/trash'
*/
trashForm.get = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:100
* @route '/dashboard/hotels/{hotel}/rooms/trash'
*/
trashForm.head = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

trash.form = trashForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:110
* @route '/dashboard/hotels/{hotel}/rooms/{uuid}/restore'
*/
export const restore = (args: { hotel: string | { uuid: string }, uuid: string | number } | [hotel: string | { uuid: string }, uuid: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/hotels/{hotel}/rooms/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:110
* @route '/dashboard/hotels/{hotel}/rooms/{uuid}/restore'
*/
restore.url = (args: { hotel: string | { uuid: string }, uuid: string | number } | [hotel: string | { uuid: string }, uuid: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
            uuid: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: typeof args.hotel === 'object'
        ? args.hotel.uuid
        : args.hotel,
        uuid: args.uuid,
    }

    return restore.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace('{uuid}', parsedArgs.uuid.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:110
* @route '/dashboard/hotels/{hotel}/rooms/{uuid}/restore'
*/
restore.put = (args: { hotel: string | { uuid: string }, uuid: string | number } | [hotel: string | { uuid: string }, uuid: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:110
* @route '/dashboard/hotels/{hotel}/rooms/{uuid}/restore'
*/
const restoreForm = (args: { hotel: string | { uuid: string }, uuid: string | number } | [hotel: string | { uuid: string }, uuid: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:110
* @route '/dashboard/hotels/{hotel}/rooms/{uuid}/restore'
*/
restoreForm.put = (args: { hotel: string | { uuid: string }, uuid: string | number } | [hotel: string | { uuid: string }, uuid: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

restore.form = restoreForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:117
* @route '/dashboard/hotels/{hotel}/rooms/{uuid}/force-delete'
*/
export const forceDelete = (args: { hotel: string | { uuid: string }, uuid: string | number } | [hotel: string | { uuid: string }, uuid: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/hotels/{hotel}/rooms/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:117
* @route '/dashboard/hotels/{hotel}/rooms/{uuid}/force-delete'
*/
forceDelete.url = (args: { hotel: string | { uuid: string }, uuid: string | number } | [hotel: string | { uuid: string }, uuid: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
            uuid: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: typeof args.hotel === 'object'
        ? args.hotel.uuid
        : args.hotel,
        uuid: args.uuid,
    }

    return forceDelete.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace('{uuid}', parsedArgs.uuid.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:117
* @route '/dashboard/hotels/{hotel}/rooms/{uuid}/force-delete'
*/
forceDelete.delete = (args: { hotel: string | { uuid: string }, uuid: string | number } | [hotel: string | { uuid: string }, uuid: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:117
* @route '/dashboard/hotels/{hotel}/rooms/{uuid}/force-delete'
*/
const forceDeleteForm = (args: { hotel: string | { uuid: string }, uuid: string | number } | [hotel: string | { uuid: string }, uuid: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:117
* @route '/dashboard/hotels/{hotel}/rooms/{uuid}/force-delete'
*/
forceDeleteForm.delete = (args: { hotel: string | { uuid: string }, uuid: string | number } | [hotel: string | { uuid: string }, uuid: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

forceDelete.form = forceDeleteForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:124
* @route '/dashboard/hotels/{hotel}/rooms/bulk-delete'
*/
export const bulkDelete = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(args, options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/hotels/{hotel}/rooms/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:124
* @route '/dashboard/hotels/{hotel}/rooms/bulk-delete'
*/
bulkDelete.url = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hotel: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { hotel: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: typeof args.hotel === 'object'
        ? args.hotel.uuid
        : args.hotel,
    }

    return bulkDelete.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:124
* @route '/dashboard/hotels/{hotel}/rooms/bulk-delete'
*/
bulkDelete.delete = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:124
* @route '/dashboard/hotels/{hotel}/rooms/bulk-delete'
*/
const bulkDeleteForm = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:124
* @route '/dashboard/hotels/{hotel}/rooms/bulk-delete'
*/
bulkDeleteForm.delete = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

bulkDelete.form = bulkDeleteForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::toggleAvailability
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:91
* @route '/dashboard/hotels/{hotel}/rooms/{room}/toggle-availability'
*/
export const toggleAvailability = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleAvailability.url(args, options),
    method: 'patch',
})

toggleAvailability.definition = {
    methods: ["patch"],
    url: '/dashboard/hotels/{hotel}/rooms/{room}/toggle-availability',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::toggleAvailability
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:91
* @route '/dashboard/hotels/{hotel}/rooms/{room}/toggle-availability'
*/
toggleAvailability.url = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
            room: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: typeof args.hotel === 'object'
        ? args.hotel.uuid
        : args.hotel,
        room: typeof args.room === 'object'
        ? args.room.uuid
        : args.room,
    }

    return toggleAvailability.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace('{room}', parsedArgs.room.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::toggleAvailability
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:91
* @route '/dashboard/hotels/{hotel}/rooms/{room}/toggle-availability'
*/
toggleAvailability.patch = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleAvailability.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::toggleAvailability
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:91
* @route '/dashboard/hotels/{hotel}/rooms/{room}/toggle-availability'
*/
const toggleAvailabilityForm = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleAvailability.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::toggleAvailability
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:91
* @route '/dashboard/hotels/{hotel}/rooms/{room}/toggle-availability'
*/
toggleAvailabilityForm.patch = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleAvailability.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleAvailability.form = toggleAvailabilityForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:24
* @route '/dashboard/hotels/{hotel}/rooms'
*/
export const index = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotels/{hotel}/rooms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:24
* @route '/dashboard/hotels/{hotel}/rooms'
*/
index.url = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hotel: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { hotel: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: typeof args.hotel === 'object'
        ? args.hotel.uuid
        : args.hotel,
    }

    return index.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:24
* @route '/dashboard/hotels/{hotel}/rooms'
*/
index.get = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:24
* @route '/dashboard/hotels/{hotel}/rooms'
*/
index.head = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:24
* @route '/dashboard/hotels/{hotel}/rooms'
*/
const indexForm = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:24
* @route '/dashboard/hotels/{hotel}/rooms'
*/
indexForm.get = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:24
* @route '/dashboard/hotels/{hotel}/rooms'
*/
indexForm.head = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:37
* @route '/dashboard/hotels/{hotel}/rooms/create'
*/
export const create = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotels/{hotel}/rooms/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:37
* @route '/dashboard/hotels/{hotel}/rooms/create'
*/
create.url = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hotel: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { hotel: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: typeof args.hotel === 'object'
        ? args.hotel.uuid
        : args.hotel,
    }

    return create.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:37
* @route '/dashboard/hotels/{hotel}/rooms/create'
*/
create.get = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:37
* @route '/dashboard/hotels/{hotel}/rooms/create'
*/
create.head = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:37
* @route '/dashboard/hotels/{hotel}/rooms/create'
*/
const createForm = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:37
* @route '/dashboard/hotels/{hotel}/rooms/create'
*/
createForm.get = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:37
* @route '/dashboard/hotels/{hotel}/rooms/create'
*/
createForm.head = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:45
* @route '/dashboard/hotels/{hotel}/rooms'
*/
export const store = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/hotels/{hotel}/rooms',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:45
* @route '/dashboard/hotels/{hotel}/rooms'
*/
store.url = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hotel: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { hotel: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: typeof args.hotel === 'object'
        ? args.hotel.uuid
        : args.hotel,
    }

    return store.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:45
* @route '/dashboard/hotels/{hotel}/rooms'
*/
store.post = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:45
* @route '/dashboard/hotels/{hotel}/rooms'
*/
const storeForm = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:45
* @route '/dashboard/hotels/{hotel}/rooms'
*/
storeForm.post = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:54
* @route '/dashboard/hotels/{hotel}/rooms/{room}'
*/
export const show = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotels/{hotel}/rooms/{room}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:54
* @route '/dashboard/hotels/{hotel}/rooms/{room}'
*/
show.url = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
            room: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: typeof args.hotel === 'object'
        ? args.hotel.uuid
        : args.hotel,
        room: typeof args.room === 'object'
        ? args.room.uuid
        : args.room,
    }

    return show.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace('{room}', parsedArgs.room.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:54
* @route '/dashboard/hotels/{hotel}/rooms/{room}'
*/
show.get = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:54
* @route '/dashboard/hotels/{hotel}/rooms/{room}'
*/
show.head = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:54
* @route '/dashboard/hotels/{hotel}/rooms/{room}'
*/
const showForm = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:54
* @route '/dashboard/hotels/{hotel}/rooms/{room}'
*/
showForm.get = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:54
* @route '/dashboard/hotels/{hotel}/rooms/{room}'
*/
showForm.head = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:64
* @route '/dashboard/hotels/{hotel}/rooms/{room}/edit'
*/
export const edit = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotels/{hotel}/rooms/{room}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:64
* @route '/dashboard/hotels/{hotel}/rooms/{room}/edit'
*/
edit.url = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
            room: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: typeof args.hotel === 'object'
        ? args.hotel.uuid
        : args.hotel,
        room: typeof args.room === 'object'
        ? args.room.uuid
        : args.room,
    }

    return edit.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace('{room}', parsedArgs.room.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:64
* @route '/dashboard/hotels/{hotel}/rooms/{room}/edit'
*/
edit.get = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:64
* @route '/dashboard/hotels/{hotel}/rooms/{room}/edit'
*/
edit.head = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:64
* @route '/dashboard/hotels/{hotel}/rooms/{room}/edit'
*/
const editForm = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:64
* @route '/dashboard/hotels/{hotel}/rooms/{room}/edit'
*/
editForm.get = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:64
* @route '/dashboard/hotels/{hotel}/rooms/{room}/edit'
*/
editForm.head = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:73
* @route '/dashboard/hotels/{hotel}/rooms/{room}'
*/
export const update = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/hotels/{hotel}/rooms/{room}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:73
* @route '/dashboard/hotels/{hotel}/rooms/{room}'
*/
update.url = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
            room: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: typeof args.hotel === 'object'
        ? args.hotel.uuid
        : args.hotel,
        room: typeof args.room === 'object'
        ? args.room.uuid
        : args.room,
    }

    return update.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace('{room}', parsedArgs.room.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:73
* @route '/dashboard/hotels/{hotel}/rooms/{room}'
*/
update.put = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:73
* @route '/dashboard/hotels/{hotel}/rooms/{room}'
*/
update.patch = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:73
* @route '/dashboard/hotels/{hotel}/rooms/{room}'
*/
const updateForm = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:73
* @route '/dashboard/hotels/{hotel}/rooms/{room}'
*/
updateForm.put = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:73
* @route '/dashboard/hotels/{hotel}/rooms/{room}'
*/
updateForm.patch = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:82
* @route '/dashboard/hotels/{hotel}/rooms/{room}'
*/
export const destroy = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/hotels/{hotel}/rooms/{room}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:82
* @route '/dashboard/hotels/{hotel}/rooms/{room}'
*/
destroy.url = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
            room: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: typeof args.hotel === 'object'
        ? args.hotel.uuid
        : args.hotel,
        room: typeof args.room === 'object'
        ? args.room.uuid
        : args.room,
    }

    return destroy.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace('{room}', parsedArgs.room.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:82
* @route '/dashboard/hotels/{hotel}/rooms/{room}'
*/
destroy.delete = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:82
* @route '/dashboard/hotels/{hotel}/rooms/{room}'
*/
const destroyForm = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:82
* @route '/dashboard/hotels/{hotel}/rooms/{room}'
*/
destroyForm.delete = (args: { hotel: string | { uuid: string }, room: string | { uuid: string } } | [hotel: string | { uuid: string }, room: string | { uuid: string } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const RoomController = { trash, restore, forceDelete, bulkDelete, toggleAvailability, index, create, store, show, edit, update, destroy }

export default RoomController