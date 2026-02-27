import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:68
* @route '/dashboard/attendances/trash'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/attendances/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:68
* @route '/dashboard/attendances/trash'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:68
* @route '/dashboard/attendances/trash'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:68
* @route '/dashboard/attendances/trash'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:68
* @route '/dashboard/attendances/trash'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:68
* @route '/dashboard/attendances/trash'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:68
* @route '/dashboard/attendances/trash'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::restore
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:113
* @route '/dashboard/attendances/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/attendances/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::restore
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:113
* @route '/dashboard/attendances/{uuid}/restore'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::restore
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:113
* @route '/dashboard/attendances/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::restore
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:113
* @route '/dashboard/attendances/{uuid}/restore'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::restore
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:113
* @route '/dashboard/attendances/{uuid}/restore'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::forceDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:128
* @route '/dashboard/attendances/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/attendances/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::forceDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:128
* @route '/dashboard/attendances/{uuid}/force-delete'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::forceDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:128
* @route '/dashboard/attendances/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::forceDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:128
* @route '/dashboard/attendances/{uuid}/force-delete'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::forceDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:128
* @route '/dashboard/attendances/{uuid}/force-delete'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::empty
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:143
* @route '/dashboard/attendances/trash/empty'
*/
export const empty = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: empty.url(options),
    method: 'delete',
})

empty.definition = {
    methods: ["delete"],
    url: '/dashboard/attendances/trash/empty',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::empty
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:143
* @route '/dashboard/attendances/trash/empty'
*/
empty.url = (options?: RouteQueryOptions) => {
    return empty.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::empty
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:143
* @route '/dashboard/attendances/trash/empty'
*/
empty.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: empty.url(options),
    method: 'delete',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::empty
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:143
* @route '/dashboard/attendances/trash/empty'
*/
const emptyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: empty.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceTrashController::empty
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceTrashController.php:143
* @route '/dashboard/attendances/trash/empty'
*/
emptyForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: empty.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

empty.form = emptyForm

const trash = {
    index: Object.assign(index, index),
    restore: Object.assign(restore, restore),
    forceDelete: Object.assign(forceDelete, forceDelete),
    empty: Object.assign(empty, empty),
}

export default trash