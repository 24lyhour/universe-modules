import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import importMethod7367d2 from './import'
import trash from './trash'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:150
* @route '/dashboard/classrooms/{classroom}/qr-code'
*/
export const qrCode = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qrCode.url(args, options),
    method: 'get',
})

qrCode.definition = {
    methods: ["get","head"],
    url: '/dashboard/classrooms/{classroom}/qr-code',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:150
* @route '/dashboard/classrooms/{classroom}/qr-code'
*/
qrCode.url = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { classroom: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { classroom: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            classroom: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        classroom: typeof args.classroom === 'object'
        ? args.classroom.uuid
        : args.classroom,
    }

    return qrCode.definition.url
            .replace('{classroom}', parsedArgs.classroom.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:150
* @route '/dashboard/classrooms/{classroom}/qr-code'
*/
qrCode.get = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qrCode.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:150
* @route '/dashboard/classrooms/{classroom}/qr-code'
*/
qrCode.head = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: qrCode.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:150
* @route '/dashboard/classrooms/{classroom}/qr-code'
*/
const qrCodeForm = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: qrCode.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:150
* @route '/dashboard/classrooms/{classroom}/qr-code'
*/
qrCodeForm.get = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: qrCode.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:150
* @route '/dashboard/classrooms/{classroom}/qr-code'
*/
qrCodeForm.head = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: qrCode.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

qrCode.form = qrCodeForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:79
* @route '/dashboard/classrooms/export'
*/
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/classrooms/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:79
* @route '/dashboard/classrooms/export'
*/
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:79
* @route '/dashboard/classrooms/export'
*/
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:79
* @route '/dashboard/classrooms/export'
*/
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:79
* @route '/dashboard/classrooms/export'
*/
const exportMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:79
* @route '/dashboard/classrooms/export'
*/
exportMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:79
* @route '/dashboard/classrooms/export'
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
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:86
* @route '/dashboard/classrooms/import'
*/
export const importMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: importMethod.url(options),
    method: 'get',
})

importMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/classrooms/import',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:86
* @route '/dashboard/classrooms/import'
*/
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:86
* @route '/dashboard/classrooms/import'
*/
importMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: importMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:86
* @route '/dashboard/classrooms/import'
*/
importMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: importMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:86
* @route '/dashboard/classrooms/import'
*/
const importMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: importMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:86
* @route '/dashboard/classrooms/import'
*/
importMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: importMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:86
* @route '/dashboard/classrooms/import'
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
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:103
* @route '/dashboard/classrooms/template'
*/
export const template = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

template.definition = {
    methods: ["get","head"],
    url: '/dashboard/classrooms/template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:103
* @route '/dashboard/classrooms/template'
*/
template.url = (options?: RouteQueryOptions) => {
    return template.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:103
* @route '/dashboard/classrooms/template'
*/
template.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:103
* @route '/dashboard/classrooms/template'
*/
template.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: template.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:103
* @route '/dashboard/classrooms/template'
*/
const templateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: template.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:103
* @route '/dashboard/classrooms/template'
*/
templateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: template.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:103
* @route '/dashboard/classrooms/template'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::bulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:199
* @route '/dashboard/classrooms/bulk-delete'
*/
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/classrooms/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::bulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:199
* @route '/dashboard/classrooms/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::bulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:199
* @route '/dashboard/classrooms/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::bulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:199
* @route '/dashboard/classrooms/bulk-delete'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::bulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:199
* @route '/dashboard/classrooms/bulk-delete'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:56
* @route '/dashboard/classrooms/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/classrooms/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:56
* @route '/dashboard/classrooms/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:56
* @route '/dashboard/classrooms/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:56
* @route '/dashboard/classrooms/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:56
* @route '/dashboard/classrooms/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:56
* @route '/dashboard/classrooms/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:56
* @route '/dashboard/classrooms/create'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:67
* @route '/dashboard/classrooms'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/classrooms',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:67
* @route '/dashboard/classrooms'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:67
* @route '/dashboard/classrooms'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:67
* @route '/dashboard/classrooms'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:67
* @route '/dashboard/classrooms'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:43
* @route '/dashboard/classrooms'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/classrooms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:43
* @route '/dashboard/classrooms'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:43
* @route '/dashboard/classrooms'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:43
* @route '/dashboard/classrooms'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:43
* @route '/dashboard/classrooms'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:43
* @route '/dashboard/classrooms'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:43
* @route '/dashboard/classrooms'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:79
* @route '/dashboard/classrooms/{classroom}'
*/
export const show = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/classrooms/{classroom}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:79
* @route '/dashboard/classrooms/{classroom}'
*/
show.url = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { classroom: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { classroom: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            classroom: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        classroom: typeof args.classroom === 'object'
        ? args.classroom.uuid
        : args.classroom,
    }

    return show.definition.url
            .replace('{classroom}', parsedArgs.classroom.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:79
* @route '/dashboard/classrooms/{classroom}'
*/
show.get = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:79
* @route '/dashboard/classrooms/{classroom}'
*/
show.head = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:79
* @route '/dashboard/classrooms/{classroom}'
*/
const showForm = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:79
* @route '/dashboard/classrooms/{classroom}'
*/
showForm.get = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:79
* @route '/dashboard/classrooms/{classroom}'
*/
showForm.head = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:89
* @route '/dashboard/classrooms/{classroom}/edit'
*/
export const edit = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/classrooms/{classroom}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:89
* @route '/dashboard/classrooms/{classroom}/edit'
*/
edit.url = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { classroom: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { classroom: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            classroom: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        classroom: typeof args.classroom === 'object'
        ? args.classroom.uuid
        : args.classroom,
    }

    return edit.definition.url
            .replace('{classroom}', parsedArgs.classroom.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:89
* @route '/dashboard/classrooms/{classroom}/edit'
*/
edit.get = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:89
* @route '/dashboard/classrooms/{classroom}/edit'
*/
edit.head = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:89
* @route '/dashboard/classrooms/{classroom}/edit'
*/
const editForm = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:89
* @route '/dashboard/classrooms/{classroom}/edit'
*/
editForm.get = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:89
* @route '/dashboard/classrooms/{classroom}/edit'
*/
editForm.head = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:100
* @route '/dashboard/classrooms/{classroom}'
*/
export const update = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/classrooms/{classroom}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:100
* @route '/dashboard/classrooms/{classroom}'
*/
update.url = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { classroom: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { classroom: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            classroom: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        classroom: typeof args.classroom === 'object'
        ? args.classroom.uuid
        : args.classroom,
    }

    return update.definition.url
            .replace('{classroom}', parsedArgs.classroom.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:100
* @route '/dashboard/classrooms/{classroom}'
*/
update.put = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:100
* @route '/dashboard/classrooms/{classroom}'
*/
const updateForm = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:100
* @route '/dashboard/classrooms/{classroom}'
*/
updateForm.put = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:136
* @route '/dashboard/classrooms/{classroom}/toggle-status'
*/
export const toggleStatus = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

toggleStatus.definition = {
    methods: ["put"],
    url: '/dashboard/classrooms/{classroom}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:136
* @route '/dashboard/classrooms/{classroom}/toggle-status'
*/
toggleStatus.url = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { classroom: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { classroom: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            classroom: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        classroom: typeof args.classroom === 'object'
        ? args.classroom.uuid
        : args.classroom,
    }

    return toggleStatus.definition.url
            .replace('{classroom}', parsedArgs.classroom.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:136
* @route '/dashboard/classrooms/{classroom}/toggle-status'
*/
toggleStatus.put = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:136
* @route '/dashboard/classrooms/{classroom}/toggle-status'
*/
const toggleStatusForm = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:136
* @route '/dashboard/classrooms/{classroom}/toggle-status'
*/
toggleStatusForm.put = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:112
* @route '/dashboard/classrooms/{classroom}/delete'
*/
export const deleteMethod = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

deleteMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/classrooms/{classroom}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:112
* @route '/dashboard/classrooms/{classroom}/delete'
*/
deleteMethod.url = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { classroom: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { classroom: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            classroom: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        classroom: typeof args.classroom === 'object'
        ? args.classroom.uuid
        : args.classroom,
    }

    return deleteMethod.definition.url
            .replace('{classroom}', parsedArgs.classroom.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:112
* @route '/dashboard/classrooms/{classroom}/delete'
*/
deleteMethod.get = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:112
* @route '/dashboard/classrooms/{classroom}/delete'
*/
deleteMethod.head = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleteMethod.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:112
* @route '/dashboard/classrooms/{classroom}/delete'
*/
const deleteMethodForm = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleteMethod.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:112
* @route '/dashboard/classrooms/{classroom}/delete'
*/
deleteMethodForm.get = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: deleteMethod.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:112
* @route '/dashboard/classrooms/{classroom}/delete'
*/
deleteMethodForm.head = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:124
* @route '/dashboard/classrooms/{classroom}'
*/
export const destroy = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/classrooms/{classroom}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:124
* @route '/dashboard/classrooms/{classroom}'
*/
destroy.url = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { classroom: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { classroom: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            classroom: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        classroom: typeof args.classroom === 'object'
        ? args.classroom.uuid
        : args.classroom,
    }

    return destroy.definition.url
            .replace('{classroom}', parsedArgs.classroom.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:124
* @route '/dashboard/classrooms/{classroom}'
*/
destroy.delete = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:124
* @route '/dashboard/classrooms/{classroom}'
*/
const destroyForm = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:124
* @route '/dashboard/classrooms/{classroom}'
*/
destroyForm.delete = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const classrooms = {
    qrCode: Object.assign(qrCode, qrCode),
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

export default classrooms