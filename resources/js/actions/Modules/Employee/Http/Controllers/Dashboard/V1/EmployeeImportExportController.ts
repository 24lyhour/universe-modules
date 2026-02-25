import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::exportMethod
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:25
* @route '/dashboard/employees/export'
*/
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::exportMethod
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:25
* @route '/dashboard/employees/export'
*/
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::exportMethod
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:25
* @route '/dashboard/employees/export'
*/
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::exportMethod
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:25
* @route '/dashboard/employees/export'
*/
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::exportMethod
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:25
* @route '/dashboard/employees/export'
*/
const exportMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::exportMethod
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:25
* @route '/dashboard/employees/export'
*/
exportMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::exportMethod
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:25
* @route '/dashboard/employees/export'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::showImport
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:37
* @route '/dashboard/employees/import'
*/
export const showImport = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showImport.url(options),
    method: 'get',
})

showImport.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees/import',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::showImport
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:37
* @route '/dashboard/employees/import'
*/
showImport.url = (options?: RouteQueryOptions) => {
    return showImport.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::showImport
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:37
* @route '/dashboard/employees/import'
*/
showImport.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showImport.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::showImport
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:37
* @route '/dashboard/employees/import'
*/
showImport.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showImport.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::showImport
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:37
* @route '/dashboard/employees/import'
*/
const showImportForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImport.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::showImport
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:37
* @route '/dashboard/employees/import'
*/
showImportForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImport.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::showImport
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:37
* @route '/dashboard/employees/import'
*/
showImportForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showImport.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showImport.form = showImportForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::importMethod
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:45
* @route '/dashboard/employees/import'
*/
export const importMethod = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

importMethod.definition = {
    methods: ["post"],
    url: '/dashboard/employees/import',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::importMethod
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:45
* @route '/dashboard/employees/import'
*/
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::importMethod
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:45
* @route '/dashboard/employees/import'
*/
importMethod.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::importMethod
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:45
* @route '/dashboard/employees/import'
*/
const importMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importMethod.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::importMethod
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:45
* @route '/dashboard/employees/import'
*/
importMethodForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: importMethod.url(options),
    method: 'post',
})

importMethod.form = importMethodForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::downloadTemplate
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:98
* @route '/dashboard/employees/template'
*/
export const downloadTemplate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadTemplate.url(options),
    method: 'get',
})

downloadTemplate.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees/template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::downloadTemplate
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:98
* @route '/dashboard/employees/template'
*/
downloadTemplate.url = (options?: RouteQueryOptions) => {
    return downloadTemplate.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::downloadTemplate
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:98
* @route '/dashboard/employees/template'
*/
downloadTemplate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::downloadTemplate
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:98
* @route '/dashboard/employees/template'
*/
downloadTemplate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadTemplate.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::downloadTemplate
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:98
* @route '/dashboard/employees/template'
*/
const downloadTemplateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::downloadTemplate
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:98
* @route '/dashboard/employees/template'
*/
downloadTemplateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadTemplate.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::downloadTemplate
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:98
* @route '/dashboard/employees/template'
*/
downloadTemplateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: downloadTemplate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

downloadTemplate.form = downloadTemplateForm

const EmployeeImportExportController = { exportMethod, showImport, importMethod, downloadTemplate, export: exportMethod, import: importMethod }

export default EmployeeImportExportController