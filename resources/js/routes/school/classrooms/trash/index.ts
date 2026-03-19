import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:77
* @route '/dashboard/classrooms/trash'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/classrooms/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:77
* @route '/dashboard/classrooms/trash'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:77
* @route '/dashboard/classrooms/trash'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:77
* @route '/dashboard/classrooms/trash'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:77
* @route '/dashboard/classrooms/trash'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:77
* @route '/dashboard/classrooms/trash'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:77
* @route '/dashboard/classrooms/trash'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::restore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:128
* @route '/dashboard/classrooms/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/classrooms/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::restore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:128
* @route '/dashboard/classrooms/{uuid}/restore'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::restore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:128
* @route '/dashboard/classrooms/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::restore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:128
* @route '/dashboard/classrooms/{uuid}/restore'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::restore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:128
* @route '/dashboard/classrooms/{uuid}/restore'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::forceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:143
* @route '/dashboard/classrooms/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/classrooms/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::forceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:143
* @route '/dashboard/classrooms/{uuid}/force-delete'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::forceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:143
* @route '/dashboard/classrooms/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::forceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:143
* @route '/dashboard/classrooms/{uuid}/force-delete'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::forceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:143
* @route '/dashboard/classrooms/{uuid}/force-delete'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::empty
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:158
* @route '/dashboard/classrooms/trash/empty'
*/
export const empty = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: empty.url(options),
    method: 'delete',
})

empty.definition = {
    methods: ["delete"],
    url: '/dashboard/classrooms/trash/empty',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::empty
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:158
* @route '/dashboard/classrooms/trash/empty'
*/
empty.url = (options?: RouteQueryOptions) => {
    return empty.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::empty
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:158
* @route '/dashboard/classrooms/trash/empty'
*/
empty.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: empty.url(options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::empty
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:158
* @route '/dashboard/classrooms/trash/empty'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::empty
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:158
* @route '/dashboard/classrooms/trash/empty'
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

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::bulkRestore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:173
* @route '/dashboard/classrooms/trash/bulk-restore'
*/
export const bulkRestore = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

bulkRestore.definition = {
    methods: ["put"],
    url: '/dashboard/classrooms/trash/bulk-restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::bulkRestore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:173
* @route '/dashboard/classrooms/trash/bulk-restore'
*/
bulkRestore.url = (options?: RouteQueryOptions) => {
    return bulkRestore.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::bulkRestore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:173
* @route '/dashboard/classrooms/trash/bulk-restore'
*/
bulkRestore.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::bulkRestore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:173
* @route '/dashboard/classrooms/trash/bulk-restore'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::bulkRestore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:173
* @route '/dashboard/classrooms/trash/bulk-restore'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::bulkForceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:196
* @route '/dashboard/classrooms/trash/bulk-force-delete'
*/
export const bulkForceDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

bulkForceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/classrooms/trash/bulk-force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::bulkForceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:196
* @route '/dashboard/classrooms/trash/bulk-force-delete'
*/
bulkForceDelete.url = (options?: RouteQueryOptions) => {
    return bulkForceDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::bulkForceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:196
* @route '/dashboard/classrooms/trash/bulk-force-delete'
*/
bulkForceDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::bulkForceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:196
* @route '/dashboard/classrooms/trash/bulk-force-delete'
*/
const bulkForceDeleteForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkForceDelete.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomTrashController::bulkForceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomTrashController.php:196
* @route '/dashboard/classrooms/trash/bulk-force-delete'
*/
bulkForceDeleteForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: bulkForceDelete.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

bulkForceDelete.form = bulkForceDeleteForm

const trash = {
    index: Object.assign(index, index),
    restore: Object.assign(restore, restore),
    forceDelete: Object.assign(forceDelete, forceDelete),
    empty: Object.assign(empty, empty),
    bulkRestore: Object.assign(bulkRestore, bulkRestore),
    bulkForceDelete: Object.assign(bulkForceDelete, bulkForceDelete),
}

export default trash