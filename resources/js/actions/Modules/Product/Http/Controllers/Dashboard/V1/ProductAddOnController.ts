import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::indexAll
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:41
* @route '/dashboard/products/addons'
*/
export const indexAll = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexAll.url(options),
    method: 'get',
})

indexAll.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/addons',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::indexAll
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:41
* @route '/dashboard/products/addons'
*/
indexAll.url = (options?: RouteQueryOptions) => {
    return indexAll.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::indexAll
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:41
* @route '/dashboard/products/addons'
*/
indexAll.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexAll.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::indexAll
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:41
* @route '/dashboard/products/addons'
*/
indexAll.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexAll.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::indexAll
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:41
* @route '/dashboard/products/addons'
*/
const indexAllForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexAll.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::indexAll
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:41
* @route '/dashboard/products/addons'
*/
indexAllForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexAll.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::indexAll
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:41
* @route '/dashboard/products/addons'
*/
indexAllForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexAll.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexAll.form = indexAllForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::createStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:280
* @route '/dashboard/products/addons/create'
*/
export const createStandalone = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createStandalone.url(options),
    method: 'get',
})

createStandalone.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/addons/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::createStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:280
* @route '/dashboard/products/addons/create'
*/
createStandalone.url = (options?: RouteQueryOptions) => {
    return createStandalone.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::createStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:280
* @route '/dashboard/products/addons/create'
*/
createStandalone.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createStandalone.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::createStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:280
* @route '/dashboard/products/addons/create'
*/
createStandalone.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: createStandalone.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::createStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:280
* @route '/dashboard/products/addons/create'
*/
const createStandaloneForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createStandalone.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::createStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:280
* @route '/dashboard/products/addons/create'
*/
createStandaloneForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createStandalone.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::createStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:280
* @route '/dashboard/products/addons/create'
*/
createStandaloneForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createStandalone.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

createStandalone.form = createStandaloneForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::storeStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:290
* @route '/dashboard/products/addons'
*/
export const storeStandalone = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeStandalone.url(options),
    method: 'post',
})

storeStandalone.definition = {
    methods: ["post"],
    url: '/dashboard/products/addons',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::storeStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:290
* @route '/dashboard/products/addons'
*/
storeStandalone.url = (options?: RouteQueryOptions) => {
    return storeStandalone.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::storeStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:290
* @route '/dashboard/products/addons'
*/
storeStandalone.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeStandalone.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::storeStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:290
* @route '/dashboard/products/addons'
*/
const storeStandaloneForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeStandalone.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::storeStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:290
* @route '/dashboard/products/addons'
*/
storeStandaloneForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeStandalone.url(options),
    method: 'post',
})

storeStandalone.form = storeStandaloneForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:59
* @route '/dashboard/products/addons/trash'
*/
export const trash = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

trash.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/addons/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:59
* @route '/dashboard/products/addons/trash'
*/
trash.url = (options?: RouteQueryOptions) => {
    return trash.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:59
* @route '/dashboard/products/addons/trash'
*/
trash.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:59
* @route '/dashboard/products/addons/trash'
*/
trash.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:59
* @route '/dashboard/products/addons/trash'
*/
const trashForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:59
* @route '/dashboard/products/addons/trash'
*/
trashForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:59
* @route '/dashboard/products/addons/trash'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:76
* @route '/dashboard/products/addons/export'
*/
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/addons/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:76
* @route '/dashboard/products/addons/export'
*/
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:76
* @route '/dashboard/products/addons/export'
*/
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:76
* @route '/dashboard/products/addons/export'
*/
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:76
* @route '/dashboard/products/addons/export'
*/
const exportMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:76
* @route '/dashboard/products/addons/export'
*/
exportMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:76
* @route '/dashboard/products/addons/export'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:90
* @route '/dashboard/products/addons/bulk-delete'
*/
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/products/addons/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:90
* @route '/dashboard/products/addons/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:90
* @route '/dashboard/products/addons/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:90
* @route '/dashboard/products/addons/bulk-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:90
* @route '/dashboard/products/addons/bulk-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:162
* @route '/dashboard/products/addons/trash/empty'
*/
export const emptyTrash = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: emptyTrash.url(options),
    method: 'delete',
})

emptyTrash.definition = {
    methods: ["delete"],
    url: '/dashboard/products/addons/trash/empty',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:162
* @route '/dashboard/products/addons/trash/empty'
*/
emptyTrash.url = (options?: RouteQueryOptions) => {
    return emptyTrash.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:162
* @route '/dashboard/products/addons/trash/empty'
*/
emptyTrash.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: emptyTrash.url(options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:162
* @route '/dashboard/products/addons/trash/empty'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:162
* @route '/dashboard/products/addons/trash/empty'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:130
* @route '/dashboard/products/addons/trash/bulk-restore'
*/
export const bulkRestore = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

bulkRestore.definition = {
    methods: ["put"],
    url: '/dashboard/products/addons/trash/bulk-restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:130
* @route '/dashboard/products/addons/trash/bulk-restore'
*/
bulkRestore.url = (options?: RouteQueryOptions) => {
    return bulkRestore.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:130
* @route '/dashboard/products/addons/trash/bulk-restore'
*/
bulkRestore.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:130
* @route '/dashboard/products/addons/trash/bulk-restore'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:130
* @route '/dashboard/products/addons/trash/bulk-restore'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:146
* @route '/dashboard/products/addons/trash/bulk-force-delete'
*/
export const bulkForceDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

bulkForceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/products/addons/trash/bulk-force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:146
* @route '/dashboard/products/addons/trash/bulk-force-delete'
*/
bulkForceDelete.url = (options?: RouteQueryOptions) => {
    return bulkForceDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:146
* @route '/dashboard/products/addons/trash/bulk-force-delete'
*/
bulkForceDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:146
* @route '/dashboard/products/addons/trash/bulk-force-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:146
* @route '/dashboard/products/addons/trash/bulk-force-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:106
* @route '/dashboard/products/addons/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/products/addons/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:106
* @route '/dashboard/products/addons/{uuid}/restore'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:106
* @route '/dashboard/products/addons/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:106
* @route '/dashboard/products/addons/{uuid}/restore'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:106
* @route '/dashboard/products/addons/{uuid}/restore'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:118
* @route '/dashboard/products/addons/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/products/addons/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:118
* @route '/dashboard/products/addons/{uuid}/force-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:118
* @route '/dashboard/products/addons/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:118
* @route '/dashboard/products/addons/{uuid}/force-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:118
* @route '/dashboard/products/addons/{uuid}/force-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::destroyGlobal
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:246
* @route '/dashboard/products/addons/{addon}/delete'
*/
export const destroyGlobal = (args: { addon: number | { id: number } } | [addon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyGlobal.url(args, options),
    method: 'delete',
})

destroyGlobal.definition = {
    methods: ["delete"],
    url: '/dashboard/products/addons/{addon}/delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::destroyGlobal
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:246
* @route '/dashboard/products/addons/{addon}/delete'
*/
destroyGlobal.url = (args: { addon: number | { id: number } } | [addon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { addon: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { addon: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            addon: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        addon: typeof args.addon === 'object'
        ? args.addon.id
        : args.addon,
    }

    return destroyGlobal.definition.url
            .replace('{addon}', parsedArgs.addon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::destroyGlobal
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:246
* @route '/dashboard/products/addons/{addon}/delete'
*/
destroyGlobal.delete = (args: { addon: number | { id: number } } | [addon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyGlobal.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::destroyGlobal
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:246
* @route '/dashboard/products/addons/{addon}/delete'
*/
const destroyGlobalForm = (args: { addon: number | { id: number } } | [addon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyGlobal.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::destroyGlobal
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:246
* @route '/dashboard/products/addons/{addon}/delete'
*/
destroyGlobalForm.delete = (args: { addon: number | { id: number } } | [addon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyGlobal.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyGlobal.form = destroyGlobalForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:173
* @route '/dashboard/products/{product}/addons'
*/
export const index = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/{product}/addons',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:173
* @route '/dashboard/products/{product}/addons'
*/
index.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return index.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:173
* @route '/dashboard/products/{product}/addons'
*/
index.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:173
* @route '/dashboard/products/{product}/addons'
*/
index.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:173
* @route '/dashboard/products/{product}/addons'
*/
const indexForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:173
* @route '/dashboard/products/{product}/addons'
*/
indexForm.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:173
* @route '/dashboard/products/{product}/addons'
*/
indexForm.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:188
* @route '/dashboard/products/{product}/addons/create'
*/
export const create = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/{product}/addons/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:188
* @route '/dashboard/products/{product}/addons/create'
*/
create.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return create.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:188
* @route '/dashboard/products/{product}/addons/create'
*/
create.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:188
* @route '/dashboard/products/{product}/addons/create'
*/
create.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:188
* @route '/dashboard/products/{product}/addons/create'
*/
const createForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:188
* @route '/dashboard/products/{product}/addons/create'
*/
createForm.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:188
* @route '/dashboard/products/{product}/addons/create'
*/
createForm.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:199
* @route '/dashboard/products/{product}/addons'
*/
export const store = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/products/{product}/addons',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:199
* @route '/dashboard/products/{product}/addons'
*/
store.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return store.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:199
* @route '/dashboard/products/{product}/addons'
*/
store.post = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:199
* @route '/dashboard/products/{product}/addons'
*/
const storeForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:199
* @route '/dashboard/products/{product}/addons'
*/
storeForm.post = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:210
* @route '/dashboard/products/{product}/addons/{addon}/edit'
*/
export const edit = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/{product}/addons/{addon}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:210
* @route '/dashboard/products/{product}/addons/{addon}/edit'
*/
edit.url = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            product: args[0],
            addon: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
        addon: typeof args.addon === 'object'
        ? args.addon.id
        : args.addon,
    }

    return edit.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace('{addon}', parsedArgs.addon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:210
* @route '/dashboard/products/{product}/addons/{addon}/edit'
*/
edit.get = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:210
* @route '/dashboard/products/{product}/addons/{addon}/edit'
*/
edit.head = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:210
* @route '/dashboard/products/{product}/addons/{addon}/edit'
*/
const editForm = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:210
* @route '/dashboard/products/{product}/addons/{addon}/edit'
*/
editForm.get = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:210
* @route '/dashboard/products/{product}/addons/{addon}/edit'
*/
editForm.head = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:223
* @route '/dashboard/products/{product}/addons/{addon}'
*/
export const update = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/products/{product}/addons/{addon}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:223
* @route '/dashboard/products/{product}/addons/{addon}'
*/
update.url = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            product: args[0],
            addon: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
        addon: typeof args.addon === 'object'
        ? args.addon.id
        : args.addon,
    }

    return update.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace('{addon}', parsedArgs.addon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:223
* @route '/dashboard/products/{product}/addons/{addon}'
*/
update.put = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:223
* @route '/dashboard/products/{product}/addons/{addon}'
*/
update.patch = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:223
* @route '/dashboard/products/{product}/addons/{addon}'
*/
const updateForm = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:223
* @route '/dashboard/products/{product}/addons/{addon}'
*/
updateForm.put = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:223
* @route '/dashboard/products/{product}/addons/{addon}'
*/
updateForm.patch = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:234
* @route '/dashboard/products/{product}/addons/{addon}'
*/
export const destroy = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/products/{product}/addons/{addon}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:234
* @route '/dashboard/products/{product}/addons/{addon}'
*/
destroy.url = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            product: args[0],
            addon: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
        addon: typeof args.addon === 'object'
        ? args.addon.id
        : args.addon,
    }

    return destroy.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace('{addon}', parsedArgs.addon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:234
* @route '/dashboard/products/{product}/addons/{addon}'
*/
destroy.delete = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:234
* @route '/dashboard/products/{product}/addons/{addon}'
*/
const destroyForm = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:234
* @route '/dashboard/products/{product}/addons/{addon}'
*/
destroyForm.delete = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:258
* @route '/dashboard/products/{product}/addons/{addon}/toggle-status'
*/
export const toggleStatus = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleStatus.url(args, options),
    method: 'patch',
})

toggleStatus.definition = {
    methods: ["patch"],
    url: '/dashboard/products/{product}/addons/{addon}/toggle-status',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:258
* @route '/dashboard/products/{product}/addons/{addon}/toggle-status'
*/
toggleStatus.url = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            product: args[0],
            addon: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
        addon: typeof args.addon === 'object'
        ? args.addon.id
        : args.addon,
    }

    return toggleStatus.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace('{addon}', parsedArgs.addon.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:258
* @route '/dashboard/products/{product}/addons/{addon}/toggle-status'
*/
toggleStatus.patch = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleStatus.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:258
* @route '/dashboard/products/{product}/addons/{addon}/toggle-status'
*/
const toggleStatusForm = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:258
* @route '/dashboard/products/{product}/addons/{addon}/toggle-status'
*/
toggleStatusForm.patch = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleStatus.form = toggleStatusForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::reorder
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:269
* @route '/dashboard/products/{product}/addons/reorder'
*/
export const reorder = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

reorder.definition = {
    methods: ["post"],
    url: '/dashboard/products/{product}/addons/reorder',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::reorder
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:269
* @route '/dashboard/products/{product}/addons/reorder'
*/
reorder.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { product: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            product: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        product: typeof args.product === 'object'
        ? args.product.id
        : args.product,
    }

    return reorder.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::reorder
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:269
* @route '/dashboard/products/{product}/addons/reorder'
*/
reorder.post = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::reorder
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:269
* @route '/dashboard/products/{product}/addons/reorder'
*/
const reorderForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::reorder
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:269
* @route '/dashboard/products/{product}/addons/reorder'
*/
reorderForm.post = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reorder.url(args, options),
    method: 'post',
})

reorder.form = reorderForm

const ProductAddOnController = { indexAll, createStandalone, storeStandalone, trash, exportMethod, bulkDelete, emptyTrash, bulkRestore, bulkForceDelete, restore, forceDelete, destroyGlobal, index, create, store, edit, update, destroy, toggleStatus, reorder, export: exportMethod }

export default ProductAddOnController