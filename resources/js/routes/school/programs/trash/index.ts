import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:68
* @route '/dashboard/programs/trash'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/programs/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:68
* @route '/dashboard/programs/trash'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:68
* @route '/dashboard/programs/trash'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:68
* @route '/dashboard/programs/trash'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:68
* @route '/dashboard/programs/trash'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:68
* @route '/dashboard/programs/trash'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:68
* @route '/dashboard/programs/trash'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::restore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:113
* @route '/dashboard/programs/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/programs/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::restore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:113
* @route '/dashboard/programs/{uuid}/restore'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::restore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:113
* @route '/dashboard/programs/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::restore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:113
* @route '/dashboard/programs/{uuid}/restore'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::restore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:113
* @route '/dashboard/programs/{uuid}/restore'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::forceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:128
* @route '/dashboard/programs/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/programs/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::forceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:128
* @route '/dashboard/programs/{uuid}/force-delete'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::forceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:128
* @route '/dashboard/programs/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::forceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:128
* @route '/dashboard/programs/{uuid}/force-delete'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::forceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:128
* @route '/dashboard/programs/{uuid}/force-delete'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::empty
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:143
* @route '/dashboard/programs/trash/empty'
*/
export const empty = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: empty.url(options),
    method: 'delete',
})

empty.definition = {
    methods: ["delete"],
    url: '/dashboard/programs/trash/empty',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::empty
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:143
* @route '/dashboard/programs/trash/empty'
*/
empty.url = (options?: RouteQueryOptions) => {
    return empty.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::empty
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:143
* @route '/dashboard/programs/trash/empty'
*/
empty.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: empty.url(options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::empty
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:143
* @route '/dashboard/programs/trash/empty'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramTrashController::empty
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramTrashController.php:143
* @route '/dashboard/programs/trash/empty'
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