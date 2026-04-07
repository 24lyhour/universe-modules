import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:82
* @route '/dashboard/employees/import'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/employees/import',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:82
* @route '/dashboard/employees/import'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:82
* @route '/dashboard/employees/import'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:82
* @route '/dashboard/employees/import'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:82
* @route '/dashboard/employees/import'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::preview
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:53
* @route '/dashboard/employees/import/preview'
*/
export const preview = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

preview.definition = {
    methods: ["post"],
    url: '/dashboard/employees/import/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::preview
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:53
* @route '/dashboard/employees/import/preview'
*/
preview.url = (options?: RouteQueryOptions) => {
    return preview.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::preview
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:53
* @route '/dashboard/employees/import/preview'
*/
preview.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::preview
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:53
* @route '/dashboard/employees/import/preview'
*/
const previewForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: preview.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::preview
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:53
* @route '/dashboard/employees/import/preview'
*/
previewForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: preview.url(options),
    method: 'post',
})

preview.form = previewForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::failed
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:135
* @route '/dashboard/employees/import/failed'
*/
export const failed = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: failed.url(options),
    method: 'get',
})

failed.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees/import/failed',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::failed
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:135
* @route '/dashboard/employees/import/failed'
*/
failed.url = (options?: RouteQueryOptions) => {
    return failed.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::failed
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:135
* @route '/dashboard/employees/import/failed'
*/
failed.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: failed.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::failed
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:135
* @route '/dashboard/employees/import/failed'
*/
failed.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: failed.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::failed
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:135
* @route '/dashboard/employees/import/failed'
*/
const failedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: failed.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::failed
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:135
* @route '/dashboard/employees/import/failed'
*/
failedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: failed.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::failed
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:135
* @route '/dashboard/employees/import/failed'
*/
failedForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: failed.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

failed.form = failedForm

const importMethod = {
    store: Object.assign(store, store),
    preview: Object.assign(preview, preview),
    failed: Object.assign(failed, failed),
}

export default importMethod