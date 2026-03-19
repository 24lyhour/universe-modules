import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import importMethod7367d2 from './import'
import trash from './trash'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:119
* @route '/dashboard/courses/export'
*/
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/courses/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:119
* @route '/dashboard/courses/export'
*/
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:119
* @route '/dashboard/courses/export'
*/
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:119
* @route '/dashboard/courses/export'
*/
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:119
* @route '/dashboard/courses/export'
*/
const exportMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:119
* @route '/dashboard/courses/export'
*/
exportMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:119
* @route '/dashboard/courses/export'
*/
exportMethodForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportMethod.form = exportMethodForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:126
* @route '/dashboard/courses/import'
*/
export const importMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: importMethod.url(options),
    method: 'get',
})

importMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/courses/import',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:126
* @route '/dashboard/courses/import'
*/
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:126
* @route '/dashboard/courses/import'
*/
importMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: importMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:126
* @route '/dashboard/courses/import'
*/
importMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: importMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:126
* @route '/dashboard/courses/import'
*/
const importMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: importMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:126
* @route '/dashboard/courses/import'
*/
importMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: importMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:126
* @route '/dashboard/courses/import'
*/
importMethodForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: importMethod.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

importMethod.form = importMethodForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:143
* @route '/dashboard/courses/template'
*/
export const template = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

template.definition = {
    methods: ["get","head"],
    url: '/dashboard/courses/template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:143
* @route '/dashboard/courses/template'
*/
template.url = (options?: RouteQueryOptions) => {
    return template.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:143
* @route '/dashboard/courses/template'
*/
template.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:143
* @route '/dashboard/courses/template'
*/
template.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: template.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:143
* @route '/dashboard/courses/template'
*/
const templateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: template.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:143
* @route '/dashboard/courses/template'
*/
templateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: template.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:143
* @route '/dashboard/courses/template'
*/
templateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: template.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

template.form = templateForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::bulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:164
* @route '/dashboard/courses/bulk-delete'
*/
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/courses/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::bulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:164
* @route '/dashboard/courses/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::bulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:164
* @route '/dashboard/courses/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::bulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:164
* @route '/dashboard/courses/bulk-delete'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::bulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:164
* @route '/dashboard/courses/bulk-delete'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:56
* @route '/dashboard/courses/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/courses/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:56
* @route '/dashboard/courses/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:56
* @route '/dashboard/courses/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:56
* @route '/dashboard/courses/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:56
* @route '/dashboard/courses/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:56
* @route '/dashboard/courses/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:56
* @route '/dashboard/courses/create'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:67
* @route '/dashboard/courses'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/courses',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:67
* @route '/dashboard/courses'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:67
* @route '/dashboard/courses'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:67
* @route '/dashboard/courses'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:67
* @route '/dashboard/courses'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:43
* @route '/dashboard/courses'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/courses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:43
* @route '/dashboard/courses'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:43
* @route '/dashboard/courses'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:43
* @route '/dashboard/courses'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:43
* @route '/dashboard/courses'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:43
* @route '/dashboard/courses'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:43
* @route '/dashboard/courses'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:79
* @route '/dashboard/courses/{course}'
*/
export const show = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/courses/{course}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:79
* @route '/dashboard/courses/{course}'
*/
show.url = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { course: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.uuid
        : args.course,
    }

    return show.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:79
* @route '/dashboard/courses/{course}'
*/
show.get = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:79
* @route '/dashboard/courses/{course}'
*/
show.head = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:79
* @route '/dashboard/courses/{course}'
*/
const showForm = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:79
* @route '/dashboard/courses/{course}'
*/
showForm.get = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:79
* @route '/dashboard/courses/{course}'
*/
showForm.head = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:89
* @route '/dashboard/courses/{course}/edit'
*/
export const edit = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/courses/{course}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:89
* @route '/dashboard/courses/{course}/edit'
*/
edit.url = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { course: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.uuid
        : args.course,
    }

    return edit.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:89
* @route '/dashboard/courses/{course}/edit'
*/
edit.get = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:89
* @route '/dashboard/courses/{course}/edit'
*/
edit.head = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:89
* @route '/dashboard/courses/{course}/edit'
*/
const editForm = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:89
* @route '/dashboard/courses/{course}/edit'
*/
editForm.get = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:89
* @route '/dashboard/courses/{course}/edit'
*/
editForm.head = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:100
* @route '/dashboard/courses/{course}'
*/
export const update = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/courses/{course}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:100
* @route '/dashboard/courses/{course}'
*/
update.url = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { course: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.uuid
        : args.course,
    }

    return update.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:100
* @route '/dashboard/courses/{course}'
*/
update.put = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:100
* @route '/dashboard/courses/{course}'
*/
const updateForm = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:100
* @route '/dashboard/courses/{course}'
*/
updateForm.put = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:136
* @route '/dashboard/courses/{course}/toggle-status'
*/
export const toggleStatus = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

toggleStatus.definition = {
    methods: ["put"],
    url: '/dashboard/courses/{course}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:136
* @route '/dashboard/courses/{course}/toggle-status'
*/
toggleStatus.url = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { course: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.uuid
        : args.course,
    }

    return toggleStatus.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:136
* @route '/dashboard/courses/{course}/toggle-status'
*/
toggleStatus.put = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:136
* @route '/dashboard/courses/{course}/toggle-status'
*/
const toggleStatusForm = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:136
* @route '/dashboard/courses/{course}/toggle-status'
*/
toggleStatusForm.put = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:112
* @route '/dashboard/courses/{course}/delete'
*/
export const deleteMethod = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

deleteMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/courses/{course}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:112
* @route '/dashboard/courses/{course}/delete'
*/
deleteMethod.url = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { course: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.uuid
        : args.course,
    }

    return deleteMethod.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:112
* @route '/dashboard/courses/{course}/delete'
*/
deleteMethod.get = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:112
* @route '/dashboard/courses/{course}/delete'
*/
deleteMethod.head = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleteMethod.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:112
* @route '/dashboard/courses/{course}/delete'
*/
const deleteMethodForm = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleteMethod.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:112
* @route '/dashboard/courses/{course}/delete'
*/
deleteMethodForm.get = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleteMethod.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:112
* @route '/dashboard/courses/{course}/delete'
*/
deleteMethodForm.head = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleteMethod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

deleteMethod.form = deleteMethodForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:124
* @route '/dashboard/courses/{course}'
*/
export const destroy = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/courses/{course}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:124
* @route '/dashboard/courses/{course}'
*/
destroy.url = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { course: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.uuid
        : args.course,
    }

    return destroy.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:124
* @route '/dashboard/courses/{course}'
*/
destroy.delete = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:124
* @route '/dashboard/courses/{course}'
*/
const destroyForm = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:124
* @route '/dashboard/courses/{course}'
*/
destroyForm.delete = (args: { course: string | { uuid: string } } | [course: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const courses = {
    export: Object.assign(exportMethod, exportMethod),
    import: Object.assign(importMethod, importMethod7367d2),
    template: Object.assign(template, template),
    trash: Object.assign(trash, trash),
    bulkDelete: Object.assign(bulkDelete, bulkDelete),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    index: Object.assign(index, index),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    toggleStatus: Object.assign(toggleStatus, toggleStatus),
    delete: Object.assign(deleteMethod, deleteMethod),
    destroy: Object.assign(destroy, destroy),
}

export default courses