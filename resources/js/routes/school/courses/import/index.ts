import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:138
* @route '/dashboard/courses/import'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/courses/import',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:138
* @route '/dashboard/courses/import'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:138
* @route '/dashboard/courses/import'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:138
* @route '/dashboard/courses/import'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:138
* @route '/dashboard/courses/import'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::preview
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:133
* @route '/dashboard/courses/import/preview'
*/
export const preview = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

preview.definition = {
    methods: ["post"],
    url: '/dashboard/courses/import/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::preview
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:133
* @route '/dashboard/courses/import/preview'
*/
preview.url = (options?: RouteQueryOptions) => {
    return preview.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::preview
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:133
* @route '/dashboard/courses/import/preview'
*/
preview.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::preview
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:133
* @route '/dashboard/courses/import/preview'
*/
const previewForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: preview.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::preview
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:133
* @route '/dashboard/courses/import/preview'
*/
previewForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: preview.url(options),
    method: 'post',
})

preview.form = previewForm

const importMethod = {
    store: Object.assign(store, store),
    preview: Object.assign(preview, preview),
}

export default importMethod