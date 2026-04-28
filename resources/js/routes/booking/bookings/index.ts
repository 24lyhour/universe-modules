import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::trash
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:95
* @route '/dashboard/bookings/trash'
*/
export const trash = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

trash.definition = {
    methods: ["get","head"],
    url: '/dashboard/bookings/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::trash
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:95
* @route '/dashboard/bookings/trash'
*/
trash.url = (options?: RouteQueryOptions) => {
    return trash.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::trash
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:95
* @route '/dashboard/bookings/trash'
*/
trash.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::trash
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:95
* @route '/dashboard/bookings/trash'
*/
trash.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::trash
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:95
* @route '/dashboard/bookings/trash'
*/
const trashForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::trash
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:95
* @route '/dashboard/bookings/trash'
*/
trashForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::trash
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:95
* @route '/dashboard/bookings/trash'
*/
trashForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

trash.form = trashForm

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::restore
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:108
* @route '/dashboard/bookings/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/bookings/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::restore
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:108
* @route '/dashboard/bookings/{uuid}/restore'
*/
restore.url = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { uuid: args }
    }

    if (Array.isArray(args)) {
        args = {
            uuid: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        uuid: args.uuid,
    }

    return restore.definition.url
            .replace('{uuid}', parsedArgs.uuid.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::restore
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:108
* @route '/dashboard/bookings/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::restore
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:108
* @route '/dashboard/bookings/{uuid}/restore'
*/
const restoreForm = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::restore
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:108
* @route '/dashboard/bookings/{uuid}/restore'
*/
restoreForm.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::forceDelete
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:118
* @route '/dashboard/bookings/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/bookings/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::forceDelete
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:118
* @route '/dashboard/bookings/{uuid}/force-delete'
*/
forceDelete.url = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { uuid: args }
    }

    if (Array.isArray(args)) {
        args = {
            uuid: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        uuid: args.uuid,
    }

    return forceDelete.definition.url
            .replace('{uuid}', parsedArgs.uuid.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::forceDelete
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:118
* @route '/dashboard/bookings/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::forceDelete
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:118
* @route '/dashboard/bookings/{uuid}/force-delete'
*/
const forceDeleteForm = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::forceDelete
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:118
* @route '/dashboard/bookings/{uuid}/force-delete'
*/
forceDeleteForm.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::bulkDelete
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:130
* @route '/dashboard/bookings/bulk-delete'
*/
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/bookings/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::bulkDelete
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:130
* @route '/dashboard/bookings/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::bulkDelete
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:130
* @route '/dashboard/bookings/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::bulkDelete
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:130
* @route '/dashboard/bookings/bulk-delete'
*/
const bulkDeleteForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkDelete.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::bulkDelete
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:130
* @route '/dashboard/bookings/bulk-delete'
*/
bulkDeleteForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkDelete.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

bulkDelete.form = bulkDeleteForm

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::updateStatus
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:68
* @route '/dashboard/bookings/{booking}/status'
*/
export const updateStatus = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStatus.url(args, options),
    method: 'patch',
})

updateStatus.definition = {
    methods: ["patch"],
    url: '/dashboard/bookings/{booking}/status',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::updateStatus
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:68
* @route '/dashboard/bookings/{booking}/status'
*/
updateStatus.url = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { booking: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { booking: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            booking: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        booking: typeof args.booking === 'object'
        ? args.booking.uuid
        : args.booking,
    }

    return updateStatus.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::updateStatus
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:68
* @route '/dashboard/bookings/{booking}/status'
*/
updateStatus.patch = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStatus.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::updateStatus
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:68
* @route '/dashboard/bookings/{booking}/status'
*/
const updateStatusForm = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::updateStatus
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:68
* @route '/dashboard/bookings/{booking}/status'
*/
updateStatusForm.patch = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateStatus.form = updateStatusForm

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::calendar
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:41
* @route '/dashboard/bookings/calendar'
*/
export const calendar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendar.url(options),
    method: 'get',
})

calendar.definition = {
    methods: ["get","head"],
    url: '/dashboard/bookings/calendar',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::calendar
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:41
* @route '/dashboard/bookings/calendar'
*/
calendar.url = (options?: RouteQueryOptions) => {
    return calendar.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::calendar
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:41
* @route '/dashboard/bookings/calendar'
*/
calendar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: calendar.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::calendar
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:41
* @route '/dashboard/bookings/calendar'
*/
calendar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: calendar.url(options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::calendar
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:41
* @route '/dashboard/bookings/calendar'
*/
const calendarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendar.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::calendar
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:41
* @route '/dashboard/bookings/calendar'
*/
calendarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendar.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::calendar
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:41
* @route '/dashboard/bookings/calendar'
*/
calendarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: calendar.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

calendar.form = calendarForm

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
* @route '/dashboard/bookings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/bookings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
* @route '/dashboard/bookings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
* @route '/dashboard/bookings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
* @route '/dashboard/bookings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
* @route '/dashboard/bookings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
* @route '/dashboard/bookings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::index
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:28
* @route '/dashboard/bookings'
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
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/dashboard/bookings/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/bookings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/dashboard/bookings/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/dashboard/bookings/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/dashboard/bookings/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/dashboard/bookings/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/dashboard/bookings/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::create
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:36
* @route '/dashboard/bookings/create'
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
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::store
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:55
* @route '/dashboard/bookings'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/bookings',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::store
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:55
* @route '/dashboard/bookings'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::store
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:55
* @route '/dashboard/bookings'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::store
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:55
* @route '/dashboard/bookings'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::store
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:55
* @route '/dashboard/bookings'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/dashboard/bookings/{booking}'
*/
export const show = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/bookings/{booking}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/dashboard/bookings/{booking}'
*/
show.url = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { booking: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { booking: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            booking: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        booking: typeof args.booking === 'object'
        ? args.booking.uuid
        : args.booking,
    }

    return show.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/dashboard/bookings/{booking}'
*/
show.get = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/dashboard/bookings/{booking}'
*/
show.head = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/dashboard/bookings/{booking}'
*/
const showForm = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/dashboard/bookings/{booking}'
*/
showForm.get = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::show
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:50
* @route '/dashboard/bookings/{booking}'
*/
showForm.head = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:84
* @route '/dashboard/bookings/{booking}'
*/
export const destroy = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/bookings/{booking}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:84
* @route '/dashboard/bookings/{booking}'
*/
destroy.url = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { booking: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { booking: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            booking: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        booking: typeof args.booking === 'object'
        ? args.booking.uuid
        : args.booking,
    }

    return destroy.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:84
* @route '/dashboard/bookings/{booking}'
*/
destroy.delete = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:84
* @route '/dashboard/bookings/{booking}'
*/
const destroyForm = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Booking\Http\Controllers\Dashboard\V1\BookingController::destroy
* @see Modules/Booking/app/Http/Controllers/Dashboard/V1/BookingController.php:84
* @route '/dashboard/bookings/{booking}'
*/
destroyForm.delete = (args: { booking: string | number | { uuid: string | number } } | [booking: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const bookings = {
    trash: Object.assign(trash, trash),
    restore: Object.assign(restore, restore),
    forceDelete: Object.assign(forceDelete, forceDelete),
    bulkDelete: Object.assign(bulkDelete, bulkDelete),
    updateStatus: Object.assign(updateStatus, updateStatus),
    calendar: Object.assign(calendar, calendar),
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    destroy: Object.assign(destroy, destroy),
}

export default bookings