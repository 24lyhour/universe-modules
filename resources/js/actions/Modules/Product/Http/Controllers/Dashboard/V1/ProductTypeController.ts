import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:122
* @route '/dashboard/product-types/bulk-delete'
*/
export const confirmBulkDelete = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmBulkDelete.url(options),
    method: 'get',
})

confirmBulkDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/product-types/bulk-delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:122
* @route '/dashboard/product-types/bulk-delete'
*/
confirmBulkDelete.url = (options?: RouteQueryOptions) => {
    return confirmBulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:122
* @route '/dashboard/product-types/bulk-delete'
*/
confirmBulkDelete.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:122
* @route '/dashboard/product-types/bulk-delete'
*/
confirmBulkDelete.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmBulkDelete.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:122
* @route '/dashboard/product-types/bulk-delete'
*/
const confirmBulkDeleteForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:122
* @route '/dashboard/product-types/bulk-delete'
*/
confirmBulkDeleteForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:122
* @route '/dashboard/product-types/bulk-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:143
* @route '/dashboard/product-types/bulk-delete'
*/
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/product-types/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:143
* @route '/dashboard/product-types/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:143
* @route '/dashboard/product-types/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:143
* @route '/dashboard/product-types/bulk-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:143
* @route '/dashboard/product-types/bulk-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:185
* @route '/dashboard/product-types/trash'
*/
export const trash = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

trash.definition = {
    methods: ["get","head"],
    url: '/dashboard/product-types/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:185
* @route '/dashboard/product-types/trash'
*/
trash.url = (options?: RouteQueryOptions) => {
    return trash.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:185
* @route '/dashboard/product-types/trash'
*/
trash.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:185
* @route '/dashboard/product-types/trash'
*/
trash.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:185
* @route '/dashboard/product-types/trash'
*/
const trashForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:185
* @route '/dashboard/product-types/trash'
*/
trashForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:185
* @route '/dashboard/product-types/trash'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:254
* @route '/dashboard/product-types/trash/empty'
*/
export const emptyTrash = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: emptyTrash.url(options),
    method: 'delete',
})

emptyTrash.definition = {
    methods: ["delete"],
    url: '/dashboard/product-types/trash/empty',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:254
* @route '/dashboard/product-types/trash/empty'
*/
emptyTrash.url = (options?: RouteQueryOptions) => {
    return emptyTrash.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:254
* @route '/dashboard/product-types/trash/empty'
*/
emptyTrash.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: emptyTrash.url(options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:254
* @route '/dashboard/product-types/trash/empty'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:254
* @route '/dashboard/product-types/trash/empty'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:265
* @route '/dashboard/product-types/trash/bulk-restore'
*/
export const bulkRestore = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

bulkRestore.definition = {
    methods: ["put"],
    url: '/dashboard/product-types/trash/bulk-restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:265
* @route '/dashboard/product-types/trash/bulk-restore'
*/
bulkRestore.url = (options?: RouteQueryOptions) => {
    return bulkRestore.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:265
* @route '/dashboard/product-types/trash/bulk-restore'
*/
bulkRestore.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:265
* @route '/dashboard/product-types/trash/bulk-restore'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:265
* @route '/dashboard/product-types/trash/bulk-restore'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:282
* @route '/dashboard/product-types/trash/bulk-force-delete'
*/
export const bulkForceDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

bulkForceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/product-types/trash/bulk-force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:282
* @route '/dashboard/product-types/trash/bulk-force-delete'
*/
bulkForceDelete.url = (options?: RouteQueryOptions) => {
    return bulkForceDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:282
* @route '/dashboard/product-types/trash/bulk-force-delete'
*/
bulkForceDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:282
* @route '/dashboard/product-types/trash/bulk-force-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:282
* @route '/dashboard/product-types/trash/bulk-force-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:230
* @route '/dashboard/product-types/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/product-types/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:230
* @route '/dashboard/product-types/{uuid}/restore'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:230
* @route '/dashboard/product-types/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:230
* @route '/dashboard/product-types/{uuid}/restore'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:230
* @route '/dashboard/product-types/{uuid}/restore'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:242
* @route '/dashboard/product-types/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/product-types/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:242
* @route '/dashboard/product-types/{uuid}/force-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:242
* @route '/dashboard/product-types/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:242
* @route '/dashboard/product-types/{uuid}/force-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:242
* @route '/dashboard/product-types/{uuid}/force-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:174
* @route '/dashboard/product-types/export'
*/
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/product-types/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:174
* @route '/dashboard/product-types/export'
*/
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:174
* @route '/dashboard/product-types/export'
*/
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:174
* @route '/dashboard/product-types/export'
*/
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:174
* @route '/dashboard/product-types/export'
*/
const exportMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:174
* @route '/dashboard/product-types/export'
*/
exportMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:174
* @route '/dashboard/product-types/export'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:32
* @route '/dashboard/product-types'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/product-types',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:32
* @route '/dashboard/product-types'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:32
* @route '/dashboard/product-types'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:32
* @route '/dashboard/product-types'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:32
* @route '/dashboard/product-types'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:32
* @route '/dashboard/product-types'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:32
* @route '/dashboard/product-types'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:51
* @route '/dashboard/product-types/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/product-types/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:51
* @route '/dashboard/product-types/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:51
* @route '/dashboard/product-types/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:51
* @route '/dashboard/product-types/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:51
* @route '/dashboard/product-types/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:51
* @route '/dashboard/product-types/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:51
* @route '/dashboard/product-types/create'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:63
* @route '/dashboard/product-types'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/product-types',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:63
* @route '/dashboard/product-types'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:63
* @route '/dashboard/product-types'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:63
* @route '/dashboard/product-types'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:63
* @route '/dashboard/product-types'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:74
* @route '/dashboard/product-types/{productType}'
*/
export const show = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/product-types/{productType}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:74
* @route '/dashboard/product-types/{productType}'
*/
show.url = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productType: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { productType: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            productType: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        productType: typeof args.productType === 'object'
        ? args.productType.id
        : args.productType,
    }

    return show.definition.url
            .replace('{productType}', parsedArgs.productType.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:74
* @route '/dashboard/product-types/{productType}'
*/
show.get = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:74
* @route '/dashboard/product-types/{productType}'
*/
show.head = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:74
* @route '/dashboard/product-types/{productType}'
*/
const showForm = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:74
* @route '/dashboard/product-types/{productType}'
*/
showForm.get = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:74
* @route '/dashboard/product-types/{productType}'
*/
showForm.head = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:86
* @route '/dashboard/product-types/{productType}/edit'
*/
export const edit = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/product-types/{productType}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:86
* @route '/dashboard/product-types/{productType}/edit'
*/
edit.url = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productType: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { productType: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            productType: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        productType: typeof args.productType === 'object'
        ? args.productType.id
        : args.productType,
    }

    return edit.definition.url
            .replace('{productType}', parsedArgs.productType.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:86
* @route '/dashboard/product-types/{productType}/edit'
*/
edit.get = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:86
* @route '/dashboard/product-types/{productType}/edit'
*/
edit.head = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:86
* @route '/dashboard/product-types/{productType}/edit'
*/
const editForm = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:86
* @route '/dashboard/product-types/{productType}/edit'
*/
editForm.get = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:86
* @route '/dashboard/product-types/{productType}/edit'
*/
editForm.head = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:100
* @route '/dashboard/product-types/{productType}'
*/
export const update = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/product-types/{productType}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:100
* @route '/dashboard/product-types/{productType}'
*/
update.url = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productType: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { productType: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            productType: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        productType: typeof args.productType === 'object'
        ? args.productType.id
        : args.productType,
    }

    return update.definition.url
            .replace('{productType}', parsedArgs.productType.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:100
* @route '/dashboard/product-types/{productType}'
*/
update.put = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:100
* @route '/dashboard/product-types/{productType}'
*/
update.patch = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:100
* @route '/dashboard/product-types/{productType}'
*/
const updateForm = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:100
* @route '/dashboard/product-types/{productType}'
*/
updateForm.put = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:100
* @route '/dashboard/product-types/{productType}'
*/
updateForm.patch = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:111
* @route '/dashboard/product-types/{productType}'
*/
export const destroy = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/product-types/{productType}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:111
* @route '/dashboard/product-types/{productType}'
*/
destroy.url = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productType: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { productType: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            productType: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        productType: typeof args.productType === 'object'
        ? args.productType.id
        : args.productType,
    }

    return destroy.definition.url
            .replace('{productType}', parsedArgs.productType.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:111
* @route '/dashboard/product-types/{productType}'
*/
destroy.delete = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:111
* @route '/dashboard/product-types/{productType}'
*/
const destroyForm = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:111
* @route '/dashboard/product-types/{productType}'
*/
destroyForm.delete = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:160
* @route '/dashboard/product-types/{productType}/toggle-status'
*/
export const toggleStatus = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

toggleStatus.definition = {
    methods: ["put"],
    url: '/dashboard/product-types/{productType}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:160
* @route '/dashboard/product-types/{productType}/toggle-status'
*/
toggleStatus.url = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productType: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { productType: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            productType: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        productType: typeof args.productType === 'object'
        ? args.productType.id
        : args.productType,
    }

    return toggleStatus.definition.url
            .replace('{productType}', parsedArgs.productType.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:160
* @route '/dashboard/product-types/{productType}/toggle-status'
*/
toggleStatus.put = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:160
* @route '/dashboard/product-types/{productType}/toggle-status'
*/
const toggleStatusForm = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductTypeController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductTypeController.php:160
* @route '/dashboard/product-types/{productType}/toggle-status'
*/
toggleStatusForm.put = (args: { productType: number | { id: number } } | [productType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleStatus.form = toggleStatusForm

const ProductTypeController = { confirmBulkDelete, bulkDelete, trash, emptyTrash, bulkRestore, bulkForceDelete, restore, forceDelete, exportMethod, index, create, store, show, edit, update, destroy, toggleStatus, export: exportMethod }

export default ProductTypeController