import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::trash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:67
* @route '/dashboard/menus/trash'
*/
export const trash = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

trash.definition = {
    methods: ["get","head"],
    url: '/dashboard/menus/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::trash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:67
* @route '/dashboard/menus/trash'
*/
trash.url = (options?: RouteQueryOptions) => {
    return trash.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::trash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:67
* @route '/dashboard/menus/trash'
*/
trash.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::trash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:67
* @route '/dashboard/menus/trash'
*/
trash.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::trash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:67
* @route '/dashboard/menus/trash'
*/
const trashForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::trash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:67
* @route '/dashboard/menus/trash'
*/
trashForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::trash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:67
* @route '/dashboard/menus/trash'
*/
trashForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

trash.form = trashForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::exportMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:84
* @route '/dashboard/menus/export'
*/
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/menus/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::exportMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:84
* @route '/dashboard/menus/export'
*/
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::exportMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:84
* @route '/dashboard/menus/export'
*/
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::exportMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:84
* @route '/dashboard/menus/export'
*/
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::exportMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:84
* @route '/dashboard/menus/export'
*/
const exportMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::exportMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:84
* @route '/dashboard/menus/export'
*/
exportMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::exportMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:84
* @route '/dashboard/menus/export'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::importMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:97
* @route '/dashboard/menus/import'
*/
export const importMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: importMethod.url(options),
    method: 'get',
})

importMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/menus/import',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::importMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:97
* @route '/dashboard/menus/import'
*/
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::importMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:97
* @route '/dashboard/menus/import'
*/
importMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: importMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::importMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:97
* @route '/dashboard/menus/import'
*/
importMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: importMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::importMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:97
* @route '/dashboard/menus/import'
*/
const importMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: importMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::importMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:97
* @route '/dashboard/menus/import'
*/
importMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: importMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::importMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:97
* @route '/dashboard/menus/import'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::previewImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:107
* @route '/dashboard/menus/import/preview'
*/
export const previewImport = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: previewImport.url(options),
    method: 'post',
})

previewImport.definition = {
    methods: ["post"],
    url: '/dashboard/menus/import/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::previewImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:107
* @route '/dashboard/menus/import/preview'
*/
previewImport.url = (options?: RouteQueryOptions) => {
    return previewImport.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::previewImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:107
* @route '/dashboard/menus/import/preview'
*/
previewImport.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: previewImport.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::previewImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:107
* @route '/dashboard/menus/import/preview'
*/
const previewImportForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: previewImport.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::previewImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:107
* @route '/dashboard/menus/import/preview'
*/
previewImportForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: previewImport.url(options),
    method: 'post',
})

previewImport.form = previewImportForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::processImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:130
* @route '/dashboard/menus/import/process'
*/
export const processImport = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: processImport.url(options),
    method: 'post',
})

processImport.definition = {
    methods: ["post"],
    url: '/dashboard/menus/import/process',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::processImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:130
* @route '/dashboard/menus/import/process'
*/
processImport.url = (options?: RouteQueryOptions) => {
    return processImport.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::processImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:130
* @route '/dashboard/menus/import/process'
*/
processImport.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: processImport.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::processImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:130
* @route '/dashboard/menus/import/process'
*/
const processImportForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: processImport.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::processImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:130
* @route '/dashboard/menus/import/process'
*/
processImportForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: processImport.url(options),
    method: 'post',
})

processImport.form = processImportForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:166
* @route '/dashboard/menus/import/template'
*/
export const template = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

template.definition = {
    methods: ["get","head"],
    url: '/dashboard/menus/import/template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:166
* @route '/dashboard/menus/import/template'
*/
template.url = (options?: RouteQueryOptions) => {
    return template.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:166
* @route '/dashboard/menus/import/template'
*/
template.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:166
* @route '/dashboard/menus/import/template'
*/
template.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: template.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:166
* @route '/dashboard/menus/import/template'
*/
const templateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: template.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:166
* @route '/dashboard/menus/import/template'
*/
templateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: template.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:166
* @route '/dashboard/menus/import/template'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::confirmBulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:376
* @route '/dashboard/menus/bulk-delete'
*/
export const confirmBulkDelete = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmBulkDelete.url(options),
    method: 'get',
})

confirmBulkDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/menus/bulk-delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::confirmBulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:376
* @route '/dashboard/menus/bulk-delete'
*/
confirmBulkDelete.url = (options?: RouteQueryOptions) => {
    return confirmBulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::confirmBulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:376
* @route '/dashboard/menus/bulk-delete'
*/
confirmBulkDelete.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::confirmBulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:376
* @route '/dashboard/menus/bulk-delete'
*/
confirmBulkDelete.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmBulkDelete.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::confirmBulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:376
* @route '/dashboard/menus/bulk-delete'
*/
const confirmBulkDeleteForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::confirmBulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:376
* @route '/dashboard/menus/bulk-delete'
*/
confirmBulkDeleteForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::confirmBulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:376
* @route '/dashboard/menus/bulk-delete'
*/
confirmBulkDeleteForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmBulkDelete.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

confirmBulkDelete.form = confirmBulkDeleteForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::bulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:398
* @route '/dashboard/menus/bulk-delete'
*/
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/menus/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::bulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:398
* @route '/dashboard/menus/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::bulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:398
* @route '/dashboard/menus/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::bulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:398
* @route '/dashboard/menus/bulk-delete'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::bulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:398
* @route '/dashboard/menus/bulk-delete'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::bulkRestore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:230
* @route '/dashboard/menus/trash/bulk-restore'
*/
export const bulkRestore = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

bulkRestore.definition = {
    methods: ["put"],
    url: '/dashboard/menus/trash/bulk-restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::bulkRestore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:230
* @route '/dashboard/menus/trash/bulk-restore'
*/
bulkRestore.url = (options?: RouteQueryOptions) => {
    return bulkRestore.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::bulkRestore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:230
* @route '/dashboard/menus/trash/bulk-restore'
*/
bulkRestore.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::bulkRestore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:230
* @route '/dashboard/menus/trash/bulk-restore'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::bulkRestore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:230
* @route '/dashboard/menus/trash/bulk-restore'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::bulkForceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:246
* @route '/dashboard/menus/trash/bulk-force-delete'
*/
export const bulkForceDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

bulkForceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/menus/trash/bulk-force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::bulkForceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:246
* @route '/dashboard/menus/trash/bulk-force-delete'
*/
bulkForceDelete.url = (options?: RouteQueryOptions) => {
    return bulkForceDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::bulkForceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:246
* @route '/dashboard/menus/trash/bulk-force-delete'
*/
bulkForceDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::bulkForceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:246
* @route '/dashboard/menus/trash/bulk-force-delete'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::bulkForceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:246
* @route '/dashboard/menus/trash/bulk-force-delete'
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

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::emptyTrash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:262
* @route '/dashboard/menus/trash/empty'
*/
export const emptyTrash = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: emptyTrash.url(options),
    method: 'delete',
})

emptyTrash.definition = {
    methods: ["delete"],
    url: '/dashboard/menus/trash/empty',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::emptyTrash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:262
* @route '/dashboard/menus/trash/empty'
*/
emptyTrash.url = (options?: RouteQueryOptions) => {
    return emptyTrash.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::emptyTrash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:262
* @route '/dashboard/menus/trash/empty'
*/
emptyTrash.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: emptyTrash.url(options),
    method: 'delete',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::emptyTrash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:262
* @route '/dashboard/menus/trash/empty'
*/
const emptyTrashForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: emptyTrash.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::emptyTrash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:262
* @route '/dashboard/menus/trash/empty'
*/
emptyTrashForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: emptyTrash.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

emptyTrash.form = emptyTrashForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:49
* @route '/dashboard/menus'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/menus',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:49
* @route '/dashboard/menus'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:49
* @route '/dashboard/menus'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:49
* @route '/dashboard/menus'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:49
* @route '/dashboard/menus'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:49
* @route '/dashboard/menus'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:49
* @route '/dashboard/menus'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:273
* @route '/dashboard/menus/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/menus/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:273
* @route '/dashboard/menus/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:273
* @route '/dashboard/menus/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:273
* @route '/dashboard/menus/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:273
* @route '/dashboard/menus/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:273
* @route '/dashboard/menus/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:273
* @route '/dashboard/menus/create'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:294
* @route '/dashboard/menus'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/menus',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:294
* @route '/dashboard/menus'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:294
* @route '/dashboard/menus'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:294
* @route '/dashboard/menus'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:294
* @route '/dashboard/menus'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:306
* @route '/dashboard/menus/{menu}'
*/
export const show = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/menus/{menu}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:306
* @route '/dashboard/menus/{menu}'
*/
show.url = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { menu: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            menu: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu: typeof args.menu === 'object'
        ? args.menu.uuid
        : args.menu,
    }

    return show.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:306
* @route '/dashboard/menus/{menu}'
*/
show.get = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:306
* @route '/dashboard/menus/{menu}'
*/
show.head = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:306
* @route '/dashboard/menus/{menu}'
*/
const showForm = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:306
* @route '/dashboard/menus/{menu}'
*/
showForm.get = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:306
* @route '/dashboard/menus/{menu}'
*/
showForm.head = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:316
* @route '/dashboard/menus/{menu}/edit'
*/
export const edit = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/menus/{menu}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:316
* @route '/dashboard/menus/{menu}/edit'
*/
edit.url = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { menu: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            menu: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu: typeof args.menu === 'object'
        ? args.menu.uuid
        : args.menu,
    }

    return edit.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:316
* @route '/dashboard/menus/{menu}/edit'
*/
edit.get = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:316
* @route '/dashboard/menus/{menu}/edit'
*/
edit.head = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:316
* @route '/dashboard/menus/{menu}/edit'
*/
const editForm = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:316
* @route '/dashboard/menus/{menu}/edit'
*/
editForm.get = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:316
* @route '/dashboard/menus/{menu}/edit'
*/
editForm.head = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:340
* @route '/dashboard/menus/{menu}'
*/
export const update = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/menus/{menu}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:340
* @route '/dashboard/menus/{menu}'
*/
update.url = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { menu: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            menu: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu: typeof args.menu === 'object'
        ? args.menu.uuid
        : args.menu,
    }

    return update.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:340
* @route '/dashboard/menus/{menu}'
*/
update.put = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:340
* @route '/dashboard/menus/{menu}'
*/
update.patch = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:340
* @route '/dashboard/menus/{menu}'
*/
const updateForm = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:340
* @route '/dashboard/menus/{menu}'
*/
updateForm.put = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:340
* @route '/dashboard/menus/{menu}'
*/
updateForm.patch = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:364
* @route '/dashboard/menus/{menu}'
*/
export const destroy = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/menus/{menu}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:364
* @route '/dashboard/menus/{menu}'
*/
destroy.url = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { menu: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            menu: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu: typeof args.menu === 'object'
        ? args.menu.uuid
        : args.menu,
    }

    return destroy.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:364
* @route '/dashboard/menus/{menu}'
*/
destroy.delete = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:364
* @route '/dashboard/menus/{menu}'
*/
const destroyForm = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:364
* @route '/dashboard/menus/{menu}'
*/
destroyForm.delete = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:352
* @route '/dashboard/menus/{menu}/delete'
*/
export const confirmDelete = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/menus/{menu}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:352
* @route '/dashboard/menus/{menu}/delete'
*/
confirmDelete.url = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { menu: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            menu: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu: typeof args.menu === 'object'
        ? args.menu.uuid
        : args.menu,
    }

    return confirmDelete.definition.url
            .replace('{menu}', parsedArgs.menu.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:352
* @route '/dashboard/menus/{menu}/delete'
*/
confirmDelete.get = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:352
* @route '/dashboard/menus/{menu}/delete'
*/
confirmDelete.head = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:352
* @route '/dashboard/menus/{menu}/delete'
*/
const confirmDeleteForm = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:352
* @route '/dashboard/menus/{menu}/delete'
*/
confirmDeleteForm.get = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:352
* @route '/dashboard/menus/{menu}/delete'
*/
confirmDeleteForm.head = (args: { menu: string | { uuid: string } } | [menu: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

confirmDelete.form = confirmDeleteForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::restore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:206
* @route '/dashboard/menus/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/menus/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::restore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:206
* @route '/dashboard/menus/{uuid}/restore'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::restore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:206
* @route '/dashboard/menus/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::restore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:206
* @route '/dashboard/menus/{uuid}/restore'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::restore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:206
* @route '/dashboard/menus/{uuid}/restore'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::forceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:218
* @route '/dashboard/menus/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/menus/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::forceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:218
* @route '/dashboard/menus/{uuid}/force-delete'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::forceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:218
* @route '/dashboard/menus/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::forceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:218
* @route '/dashboard/menus/{uuid}/force-delete'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuController::forceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuController.php:218
* @route '/dashboard/menus/{uuid}/force-delete'
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

const MenuController = { trash, exportMethod, importMethod, previewImport, processImport, template, confirmBulkDelete, bulkDelete, bulkRestore, bulkForceDelete, emptyTrash, index, create, store, show, edit, update, destroy, confirmDelete, restore, forceDelete, export: exportMethod, import: importMethod }

export default MenuController