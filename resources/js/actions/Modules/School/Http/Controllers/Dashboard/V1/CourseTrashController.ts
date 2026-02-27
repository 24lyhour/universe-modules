import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:68
* @route '/dashboard/courses/trash'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/courses/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:68
* @route '/dashboard/courses/trash'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:68
* @route '/dashboard/courses/trash'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:68
* @route '/dashboard/courses/trash'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:68
* @route '/dashboard/courses/trash'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:68
* @route '/dashboard/courses/trash'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:68
* @route '/dashboard/courses/trash'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::restore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:113
* @route '/dashboard/courses/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/courses/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::restore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:113
* @route '/dashboard/courses/{uuid}/restore'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::restore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:113
* @route '/dashboard/courses/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::restore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:113
* @route '/dashboard/courses/{uuid}/restore'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::restore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:113
* @route '/dashboard/courses/{uuid}/restore'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::forceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:128
* @route '/dashboard/courses/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/courses/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::forceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:128
* @route '/dashboard/courses/{uuid}/force-delete'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::forceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:128
* @route '/dashboard/courses/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::forceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:128
* @route '/dashboard/courses/{uuid}/force-delete'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::forceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:128
* @route '/dashboard/courses/{uuid}/force-delete'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::empty
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:143
* @route '/dashboard/courses/trash/empty'
*/
export const empty = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: empty.url(options),
    method: 'delete',
})

empty.definition = {
    methods: ["delete"],
    url: '/dashboard/courses/trash/empty',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::empty
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:143
* @route '/dashboard/courses/trash/empty'
*/
empty.url = (options?: RouteQueryOptions) => {
    return empty.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::empty
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:143
* @route '/dashboard/courses/trash/empty'
*/
empty.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: empty.url(options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::empty
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:143
* @route '/dashboard/courses/trash/empty'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseTrashController::empty
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseTrashController.php:143
* @route '/dashboard/courses/trash/empty'
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

const CourseTrashController = { index, restore, forceDelete, empty }

export default CourseTrashController