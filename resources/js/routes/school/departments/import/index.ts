import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:57
* @route '/dashboard/departments/import'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/departments/import',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:57
* @route '/dashboard/departments/import'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:57
* @route '/dashboard/departments/import'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::preview
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:52
* @route '/dashboard/departments/import/preview'
*/
export const preview = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

preview.definition = {
    methods: ["post"],
    url: '/dashboard/departments/import/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::preview
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:52
* @route '/dashboard/departments/import/preview'
*/
preview.url = (options?: RouteQueryOptions) => {
    return preview.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::preview
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:52
* @route '/dashboard/departments/import/preview'
*/
preview.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

const importMethod = {
    store: Object.assign(store, store),
    preview: Object.assign(preview, preview),
}

export default importMethod