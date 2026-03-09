import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:232
* @route '/dashboard/products/attributes/bulk-delete'
*/
export const confirmBulkDelete = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmBulkDelete.url(options),
    method: 'get',
})

confirmBulkDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/attributes/bulk-delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:232
* @route '/dashboard/products/attributes/bulk-delete'
*/
confirmBulkDelete.url = (options?: RouteQueryOptions) => {
    return confirmBulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:232
* @route '/dashboard/products/attributes/bulk-delete'
*/
confirmBulkDelete.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:232
* @route '/dashboard/products/attributes/bulk-delete'
*/
confirmBulkDelete.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmBulkDelete.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:232
* @route '/dashboard/products/attributes/bulk-delete'
*/
const confirmBulkDeleteForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:232
* @route '/dashboard/products/attributes/bulk-delete'
*/
confirmBulkDeleteForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:232
* @route '/dashboard/products/attributes/bulk-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:254
* @route '/dashboard/products/attributes/bulk-delete'
*/
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/products/attributes/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:254
* @route '/dashboard/products/attributes/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:254
* @route '/dashboard/products/attributes/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:254
* @route '/dashboard/products/attributes/bulk-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:254
* @route '/dashboard/products/attributes/bulk-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:51
* @route '/dashboard/products/attributes/trash'
*/
export const trash = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

trash.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/attributes/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:51
* @route '/dashboard/products/attributes/trash'
*/
trash.url = (options?: RouteQueryOptions) => {
    return trash.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:51
* @route '/dashboard/products/attributes/trash'
*/
trash.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:51
* @route '/dashboard/products/attributes/trash'
*/
trash.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:51
* @route '/dashboard/products/attributes/trash'
*/
const trashForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:51
* @route '/dashboard/products/attributes/trash'
*/
trashForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:51
* @route '/dashboard/products/attributes/trash'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:68
* @route '/dashboard/products/attributes/export'
*/
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/attributes/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:68
* @route '/dashboard/products/attributes/export'
*/
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:68
* @route '/dashboard/products/attributes/export'
*/
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:68
* @route '/dashboard/products/attributes/export'
*/
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:68
* @route '/dashboard/products/attributes/export'
*/
const exportMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:68
* @route '/dashboard/products/attributes/export'
*/
exportMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:68
* @route '/dashboard/products/attributes/export'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:137
* @route '/dashboard/products/attributes/trash/empty'
*/
export const emptyTrash = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: emptyTrash.url(options),
    method: 'delete',
})

emptyTrash.definition = {
    methods: ["delete"],
    url: '/dashboard/products/attributes/trash/empty',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:137
* @route '/dashboard/products/attributes/trash/empty'
*/
emptyTrash.url = (options?: RouteQueryOptions) => {
    return emptyTrash.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:137
* @route '/dashboard/products/attributes/trash/empty'
*/
emptyTrash.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: emptyTrash.url(options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:137
* @route '/dashboard/products/attributes/trash/empty'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:137
* @route '/dashboard/products/attributes/trash/empty'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:105
* @route '/dashboard/products/attributes/trash/bulk-restore'
*/
export const bulkRestore = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

bulkRestore.definition = {
    methods: ["put"],
    url: '/dashboard/products/attributes/trash/bulk-restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:105
* @route '/dashboard/products/attributes/trash/bulk-restore'
*/
bulkRestore.url = (options?: RouteQueryOptions) => {
    return bulkRestore.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:105
* @route '/dashboard/products/attributes/trash/bulk-restore'
*/
bulkRestore.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:105
* @route '/dashboard/products/attributes/trash/bulk-restore'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:105
* @route '/dashboard/products/attributes/trash/bulk-restore'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:121
* @route '/dashboard/products/attributes/trash/bulk-force-delete'
*/
export const bulkForceDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

bulkForceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/products/attributes/trash/bulk-force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:121
* @route '/dashboard/products/attributes/trash/bulk-force-delete'
*/
bulkForceDelete.url = (options?: RouteQueryOptions) => {
    return bulkForceDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:121
* @route '/dashboard/products/attributes/trash/bulk-force-delete'
*/
bulkForceDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:121
* @route '/dashboard/products/attributes/trash/bulk-force-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:121
* @route '/dashboard/products/attributes/trash/bulk-force-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:81
* @route '/dashboard/products/attributes/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/products/attributes/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:81
* @route '/dashboard/products/attributes/{uuid}/restore'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:81
* @route '/dashboard/products/attributes/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:81
* @route '/dashboard/products/attributes/{uuid}/restore'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:81
* @route '/dashboard/products/attributes/{uuid}/restore'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:93
* @route '/dashboard/products/attributes/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/products/attributes/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:93
* @route '/dashboard/products/attributes/{uuid}/force-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:93
* @route '/dashboard/products/attributes/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:93
* @route '/dashboard/products/attributes/{uuid}/force-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:93
* @route '/dashboard/products/attributes/{uuid}/force-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:34
* @route '/dashboard/products/attributes'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/attributes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:34
* @route '/dashboard/products/attributes'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:34
* @route '/dashboard/products/attributes'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:34
* @route '/dashboard/products/attributes'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:34
* @route '/dashboard/products/attributes'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:34
* @route '/dashboard/products/attributes'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:34
* @route '/dashboard/products/attributes'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:148
* @route '/dashboard/products/attributes/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/attributes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:148
* @route '/dashboard/products/attributes/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:148
* @route '/dashboard/products/attributes/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:148
* @route '/dashboard/products/attributes/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:148
* @route '/dashboard/products/attributes/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:148
* @route '/dashboard/products/attributes/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:148
* @route '/dashboard/products/attributes/create'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:156
* @route '/dashboard/products/attributes'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/products/attributes',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:156
* @route '/dashboard/products/attributes'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:156
* @route '/dashboard/products/attributes'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:156
* @route '/dashboard/products/attributes'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:156
* @route '/dashboard/products/attributes'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:170
* @route '/dashboard/products/attributes/{attribute}'
*/
export const show = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/attributes/{attribute}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:170
* @route '/dashboard/products/attributes/{attribute}'
*/
show.url = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attribute: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { attribute: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            attribute: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attribute: typeof args.attribute === 'object'
        ? args.attribute.id
        : args.attribute,
    }

    return show.definition.url
            .replace('{attribute}', parsedArgs.attribute.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:170
* @route '/dashboard/products/attributes/{attribute}'
*/
show.get = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:170
* @route '/dashboard/products/attributes/{attribute}'
*/
show.head = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:170
* @route '/dashboard/products/attributes/{attribute}'
*/
const showForm = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:170
* @route '/dashboard/products/attributes/{attribute}'
*/
showForm.get = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:170
* @route '/dashboard/products/attributes/{attribute}'
*/
showForm.head = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:182
* @route '/dashboard/products/attributes/{attribute}/edit'
*/
export const edit = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/attributes/{attribute}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:182
* @route '/dashboard/products/attributes/{attribute}/edit'
*/
edit.url = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attribute: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { attribute: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            attribute: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attribute: typeof args.attribute === 'object'
        ? args.attribute.id
        : args.attribute,
    }

    return edit.definition.url
            .replace('{attribute}', parsedArgs.attribute.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:182
* @route '/dashboard/products/attributes/{attribute}/edit'
*/
edit.get = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:182
* @route '/dashboard/products/attributes/{attribute}/edit'
*/
edit.head = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:182
* @route '/dashboard/products/attributes/{attribute}/edit'
*/
const editForm = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:182
* @route '/dashboard/products/attributes/{attribute}/edit'
*/
editForm.get = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:182
* @route '/dashboard/products/attributes/{attribute}/edit'
*/
editForm.head = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:194
* @route '/dashboard/products/attributes/{attribute}'
*/
export const update = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/products/attributes/{attribute}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:194
* @route '/dashboard/products/attributes/{attribute}'
*/
update.url = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attribute: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { attribute: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            attribute: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attribute: typeof args.attribute === 'object'
        ? args.attribute.id
        : args.attribute,
    }

    return update.definition.url
            .replace('{attribute}', parsedArgs.attribute.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:194
* @route '/dashboard/products/attributes/{attribute}'
*/
update.put = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:194
* @route '/dashboard/products/attributes/{attribute}'
*/
update.patch = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:194
* @route '/dashboard/products/attributes/{attribute}'
*/
const updateForm = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:194
* @route '/dashboard/products/attributes/{attribute}'
*/
updateForm.put = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:194
* @route '/dashboard/products/attributes/{attribute}'
*/
updateForm.patch = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:208
* @route '/dashboard/products/attributes/{attribute}'
*/
export const destroy = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/products/attributes/{attribute}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:208
* @route '/dashboard/products/attributes/{attribute}'
*/
destroy.url = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attribute: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { attribute: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            attribute: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attribute: typeof args.attribute === 'object'
        ? args.attribute.id
        : args.attribute,
    }

    return destroy.definition.url
            .replace('{attribute}', parsedArgs.attribute.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:208
* @route '/dashboard/products/attributes/{attribute}'
*/
destroy.delete = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:208
* @route '/dashboard/products/attributes/{attribute}'
*/
const destroyForm = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:208
* @route '/dashboard/products/attributes/{attribute}'
*/
destroyForm.delete = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:222
* @route '/dashboard/products/attributes/{attribute}/toggle-status'
*/
export const toggleStatus = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleStatus.url(args, options),
    method: 'patch',
})

toggleStatus.definition = {
    methods: ["patch"],
    url: '/dashboard/products/attributes/{attribute}/toggle-status',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:222
* @route '/dashboard/products/attributes/{attribute}/toggle-status'
*/
toggleStatus.url = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attribute: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { attribute: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            attribute: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attribute: typeof args.attribute === 'object'
        ? args.attribute.id
        : args.attribute,
    }

    return toggleStatus.definition.url
            .replace('{attribute}', parsedArgs.attribute.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:222
* @route '/dashboard/products/attributes/{attribute}/toggle-status'
*/
toggleStatus.patch = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleStatus.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:222
* @route '/dashboard/products/attributes/{attribute}/toggle-status'
*/
const toggleStatusForm = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:222
* @route '/dashboard/products/attributes/{attribute}/toggle-status'
*/
toggleStatusForm.patch = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleStatus.form = toggleStatusForm

const ProductAttributeController = { confirmBulkDelete, bulkDelete, trash, exportMethod, emptyTrash, bulkRestore, bulkForceDelete, restore, forceDelete, index, create, store, show, edit, update, destroy, toggleStatus, export: exportMethod }

export default ProductAttributeController