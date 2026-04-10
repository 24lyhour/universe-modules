import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import rooms from './rooms'
/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:104
* @route '/dashboard/hotels/trash'
*/
export const trash = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

trash.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotels/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:104
* @route '/dashboard/hotels/trash'
*/
trash.url = (options?: RouteQueryOptions) => {
    return trash.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:104
* @route '/dashboard/hotels/trash'
*/
trash.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:104
* @route '/dashboard/hotels/trash'
*/
trash.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:104
* @route '/dashboard/hotels/trash'
*/
const trashForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:104
* @route '/dashboard/hotels/trash'
*/
trashForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:104
* @route '/dashboard/hotels/trash'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:113
* @route '/dashboard/hotels/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/hotels/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:113
* @route '/dashboard/hotels/{uuid}/restore'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:113
* @route '/dashboard/hotels/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:113
* @route '/dashboard/hotels/{uuid}/restore'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:113
* @route '/dashboard/hotels/{uuid}/restore'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:124
* @route '/dashboard/hotels/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/hotels/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:124
* @route '/dashboard/hotels/{uuid}/force-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:124
* @route '/dashboard/hotels/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:124
* @route '/dashboard/hotels/{uuid}/force-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:124
* @route '/dashboard/hotels/{uuid}/force-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::emptyTrash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:161
* @route '/dashboard/hotels/empty-trash'
*/
export const emptyTrash = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: emptyTrash.url(options),
    method: 'delete',
})

emptyTrash.definition = {
    methods: ["delete"],
    url: '/dashboard/hotels/empty-trash',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::emptyTrash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:161
* @route '/dashboard/hotels/empty-trash'
*/
emptyTrash.url = (options?: RouteQueryOptions) => {
    return emptyTrash.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::emptyTrash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:161
* @route '/dashboard/hotels/empty-trash'
*/
emptyTrash.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: emptyTrash.url(options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::emptyTrash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:161
* @route '/dashboard/hotels/empty-trash'
*/
const emptyTrashForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: emptyTrash.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::emptyTrash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:161
* @route '/dashboard/hotels/empty-trash'
*/
emptyTrashForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: emptyTrash.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

emptyTrash.form = emptyTrashForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmBulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:137
* @route '/dashboard/hotels/bulk-delete'
*/
export const confirmBulkDelete = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmBulkDelete.url(options),
    method: 'get',
})

confirmBulkDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotels/bulk-delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmBulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:137
* @route '/dashboard/hotels/bulk-delete'
*/
confirmBulkDelete.url = (options?: RouteQueryOptions) => {
    return confirmBulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmBulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:137
* @route '/dashboard/hotels/bulk-delete'
*/
confirmBulkDelete.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmBulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:137
* @route '/dashboard/hotels/bulk-delete'
*/
confirmBulkDelete.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmBulkDelete.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmBulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:137
* @route '/dashboard/hotels/bulk-delete'
*/
const confirmBulkDeleteForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmBulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:137
* @route '/dashboard/hotels/bulk-delete'
*/
confirmBulkDeleteForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmBulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:137
* @route '/dashboard/hotels/bulk-delete'
*/
confirmBulkDeleteForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmBulkDelete.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

confirmBulkDelete.form = confirmBulkDeleteForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:144
* @route '/dashboard/hotels/bulk-delete'
*/
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/hotels/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:144
* @route '/dashboard/hotels/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:144
* @route '/dashboard/hotels/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:144
* @route '/dashboard/hotels/bulk-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:144
* @route '/dashboard/hotels/bulk-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::bulkRestore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:153
* @route '/dashboard/hotels/bulk-restore'
*/
export const bulkRestore = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

bulkRestore.definition = {
    methods: ["put"],
    url: '/dashboard/hotels/bulk-restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::bulkRestore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:153
* @route '/dashboard/hotels/bulk-restore'
*/
bulkRestore.url = (options?: RouteQueryOptions) => {
    return bulkRestore.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::bulkRestore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:153
* @route '/dashboard/hotels/bulk-restore'
*/
bulkRestore.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::bulkRestore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:153
* @route '/dashboard/hotels/bulk-restore'
*/
const bulkRestoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkRestore.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::bulkRestore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:153
* @route '/dashboard/hotels/bulk-restore'
*/
bulkRestoreForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkRestore.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

bulkRestore.form = bulkRestoreForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::toggleFeatured
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:87
* @route '/dashboard/hotels/{hotel}/toggle-featured'
*/
export const toggleFeatured = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleFeatured.url(args, options),
    method: 'patch',
})

toggleFeatured.definition = {
    methods: ["patch"],
    url: '/dashboard/hotels/{hotel}/toggle-featured',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::toggleFeatured
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:87
* @route '/dashboard/hotels/{hotel}/toggle-featured'
*/
toggleFeatured.url = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return toggleFeatured.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::toggleFeatured
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:87
* @route '/dashboard/hotels/{hotel}/toggle-featured'
*/
toggleFeatured.patch = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleFeatured.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::toggleFeatured
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:87
* @route '/dashboard/hotels/{hotel}/toggle-featured'
*/
const toggleFeaturedForm = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleFeatured.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::toggleFeatured
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:87
* @route '/dashboard/hotels/{hotel}/toggle-featured'
*/
toggleFeaturedForm.patch = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleFeatured.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleFeatured.form = toggleFeaturedForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::updateStatus
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:94
* @route '/dashboard/hotels/{hotel}/update-status'
*/
export const updateStatus = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStatus.url(args, options),
    method: 'patch',
})

updateStatus.definition = {
    methods: ["patch"],
    url: '/dashboard/hotels/{hotel}/update-status',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::updateStatus
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:94
* @route '/dashboard/hotels/{hotel}/update-status'
*/
updateStatus.url = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return updateStatus.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::updateStatus
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:94
* @route '/dashboard/hotels/{hotel}/update-status'
*/
updateStatus.patch = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStatus.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::updateStatus
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:94
* @route '/dashboard/hotels/{hotel}/update-status'
*/
const updateStatusForm = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::updateStatus
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:94
* @route '/dashboard/hotels/{hotel}/update-status'
*/
updateStatusForm.patch = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:63
* @route '/dashboard/hotels/{hotel}/confirm-delete'
*/
export const confirmDelete = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotels/{hotel}/confirm-delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:63
* @route '/dashboard/hotels/{hotel}/confirm-delete'
*/
confirmDelete.url = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return confirmDelete.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:63
* @route '/dashboard/hotels/{hotel}/confirm-delete'
*/
confirmDelete.get = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:63
* @route '/dashboard/hotels/{hotel}/confirm-delete'
*/
confirmDelete.head = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:63
* @route '/dashboard/hotels/{hotel}/confirm-delete'
*/
const confirmDeleteForm = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:63
* @route '/dashboard/hotels/{hotel}/confirm-delete'
*/
confirmDeleteForm.get = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:63
* @route '/dashboard/hotels/{hotel}/confirm-delete'
*/
confirmDeleteForm.head = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

confirmDelete.form = confirmDeleteForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/dashboard/hotels'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotels',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/dashboard/hotels'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/dashboard/hotels'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/dashboard/hotels'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/dashboard/hotels'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/dashboard/hotels'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:30
* @route '/dashboard/hotels'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:37
* @route '/dashboard/hotels/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotels/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:37
* @route '/dashboard/hotels/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:37
* @route '/dashboard/hotels/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:37
* @route '/dashboard/hotels/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:37
* @route '/dashboard/hotels/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:37
* @route '/dashboard/hotels/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:37
* @route '/dashboard/hotels/create'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:43
* @route '/dashboard/hotels'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/hotels',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:43
* @route '/dashboard/hotels'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:43
* @route '/dashboard/hotels'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:43
* @route '/dashboard/hotels'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:43
* @route '/dashboard/hotels'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:52
* @route '/dashboard/hotels/{hotel}'
*/
export const show = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotels/{hotel}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:52
* @route '/dashboard/hotels/{hotel}'
*/
show.url = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:52
* @route '/dashboard/hotels/{hotel}'
*/
show.get = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:52
* @route '/dashboard/hotels/{hotel}'
*/
show.head = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:52
* @route '/dashboard/hotels/{hotel}'
*/
const showForm = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:52
* @route '/dashboard/hotels/{hotel}'
*/
showForm.get = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:52
* @route '/dashboard/hotels/{hotel}'
*/
showForm.head = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:57
* @route '/dashboard/hotels/{hotel}/edit'
*/
export const edit = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotels/{hotel}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:57
* @route '/dashboard/hotels/{hotel}/edit'
*/
edit.url = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:57
* @route '/dashboard/hotels/{hotel}/edit'
*/
edit.get = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:57
* @route '/dashboard/hotels/{hotel}/edit'
*/
edit.head = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:57
* @route '/dashboard/hotels/{hotel}/edit'
*/
const editForm = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:57
* @route '/dashboard/hotels/{hotel}/edit'
*/
editForm.get = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:57
* @route '/dashboard/hotels/{hotel}/edit'
*/
editForm.head = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:69
* @route '/dashboard/hotels/{hotel}'
*/
export const update = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/hotels/{hotel}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:69
* @route '/dashboard/hotels/{hotel}'
*/
update.url = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:69
* @route '/dashboard/hotels/{hotel}'
*/
update.put = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:69
* @route '/dashboard/hotels/{hotel}'
*/
update.patch = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:69
* @route '/dashboard/hotels/{hotel}'
*/
const updateForm = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:69
* @route '/dashboard/hotels/{hotel}'
*/
updateForm.put = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:69
* @route '/dashboard/hotels/{hotel}'
*/
updateForm.patch = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:78
* @route '/dashboard/hotels/{hotel}'
*/
export const destroy = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/hotels/{hotel}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:78
* @route '/dashboard/hotels/{hotel}'
*/
destroy.url = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:78
* @route '/dashboard/hotels/{hotel}'
*/
destroy.delete = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:78
* @route '/dashboard/hotels/{hotel}'
*/
const destroyForm = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelController.php:78
* @route '/dashboard/hotels/{hotel}'
*/
destroyForm.delete = (args: { hotel: string | { uuid: string } } | [hotel: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const hotels = {
    trash: Object.assign(trash, trash),
    restore: Object.assign(restore, restore),
    forceDelete: Object.assign(forceDelete, forceDelete),
    emptyTrash: Object.assign(emptyTrash, emptyTrash),
    confirmBulkDelete: Object.assign(confirmBulkDelete, confirmBulkDelete),
    bulkDelete: Object.assign(bulkDelete, bulkDelete),
    bulkRestore: Object.assign(bulkRestore, bulkRestore),
    toggleFeatured: Object.assign(toggleFeatured, toggleFeatured),
    updateStatus: Object.assign(updateStatus, updateStatus),
    confirmDelete: Object.assign(confirmDelete, confirmDelete),
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    rooms: Object.assign(rooms, rooms),
}

export default hotels