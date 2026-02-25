import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:45
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:45
* @route '/dashboard/employees/import'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeImportExportController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeImportExportController.php:45
* @route '/dashboard/employees/import'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

const importMethod = {
    store: Object.assign(store, store),
}

export default importMethod