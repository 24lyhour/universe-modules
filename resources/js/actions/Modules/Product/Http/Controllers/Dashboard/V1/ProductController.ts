import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:228
* @route '/dashboard/products/bulk-delete'
*/
export const confirmBulkDelete = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmBulkDelete.url(options),
    method: 'get',
})

confirmBulkDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/bulk-delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:228
* @route '/dashboard/products/bulk-delete'
*/
confirmBulkDelete.url = (options?: RouteQueryOptions) => {
    return confirmBulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:228
* @route '/dashboard/products/bulk-delete'
*/
confirmBulkDelete.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:228
* @route '/dashboard/products/bulk-delete'
*/
confirmBulkDelete.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmBulkDelete.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:228
* @route '/dashboard/products/bulk-delete'
*/
const confirmBulkDeleteForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:228
* @route '/dashboard/products/bulk-delete'
*/
confirmBulkDeleteForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::confirmBulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:228
* @route '/dashboard/products/bulk-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:251
* @route '/dashboard/products/bulk-delete'
*/
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/products/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:251
* @route '/dashboard/products/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:251
* @route '/dashboard/products/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:251
* @route '/dashboard/products/bulk-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:251
* @route '/dashboard/products/bulk-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:268
* @route '/dashboard/products/trash'
*/
export const trash = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

trash.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:268
* @route '/dashboard/products/trash'
*/
trash.url = (options?: RouteQueryOptions) => {
    return trash.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:268
* @route '/dashboard/products/trash'
*/
trash.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:268
* @route '/dashboard/products/trash'
*/
trash.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:268
* @route '/dashboard/products/trash'
*/
const trashForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:268
* @route '/dashboard/products/trash'
*/
trashForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:268
* @route '/dashboard/products/trash'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:335
* @route '/dashboard/products/trash/empty'
*/
export const emptyTrash = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: emptyTrash.url(options),
    method: 'delete',
})

emptyTrash.definition = {
    methods: ["delete"],
    url: '/dashboard/products/trash/empty',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:335
* @route '/dashboard/products/trash/empty'
*/
emptyTrash.url = (options?: RouteQueryOptions) => {
    return emptyTrash.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:335
* @route '/dashboard/products/trash/empty'
*/
emptyTrash.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: emptyTrash.url(options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:335
* @route '/dashboard/products/trash/empty'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:335
* @route '/dashboard/products/trash/empty'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:345
* @route '/dashboard/products/trash/bulk-restore'
*/
export const bulkRestore = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

bulkRestore.definition = {
    methods: ["put"],
    url: '/dashboard/products/trash/bulk-restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:345
* @route '/dashboard/products/trash/bulk-restore'
*/
bulkRestore.url = (options?: RouteQueryOptions) => {
    return bulkRestore.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:345
* @route '/dashboard/products/trash/bulk-restore'
*/
bulkRestore.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:345
* @route '/dashboard/products/trash/bulk-restore'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:345
* @route '/dashboard/products/trash/bulk-restore'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:361
* @route '/dashboard/products/trash/bulk-force-delete'
*/
export const bulkForceDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

bulkForceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/products/trash/bulk-force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:361
* @route '/dashboard/products/trash/bulk-force-delete'
*/
bulkForceDelete.url = (options?: RouteQueryOptions) => {
    return bulkForceDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:361
* @route '/dashboard/products/trash/bulk-force-delete'
*/
bulkForceDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:361
* @route '/dashboard/products/trash/bulk-force-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:361
* @route '/dashboard/products/trash/bulk-force-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:313
* @route '/dashboard/products/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/products/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:313
* @route '/dashboard/products/{uuid}/restore'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:313
* @route '/dashboard/products/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:313
* @route '/dashboard/products/{uuid}/restore'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:313
* @route '/dashboard/products/{uuid}/restore'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:324
* @route '/dashboard/products/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/products/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:324
* @route '/dashboard/products/{uuid}/force-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:324
* @route '/dashboard/products/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:324
* @route '/dashboard/products/{uuid}/force-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:324
* @route '/dashboard/products/{uuid}/force-delete'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:35
* @route '/dashboard/products'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/products',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:35
* @route '/dashboard/products'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:35
* @route '/dashboard/products'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:35
* @route '/dashboard/products'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:35
* @route '/dashboard/products'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:35
* @route '/dashboard/products'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:35
* @route '/dashboard/products'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:57
* @route '/dashboard/products/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:57
* @route '/dashboard/products/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:57
* @route '/dashboard/products/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:57
* @route '/dashboard/products/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:57
* @route '/dashboard/products/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:57
* @route '/dashboard/products/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:57
* @route '/dashboard/products/create'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:80
* @route '/dashboard/products'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/products',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:80
* @route '/dashboard/products'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:80
* @route '/dashboard/products'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:80
* @route '/dashboard/products'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:80
* @route '/dashboard/products'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:91
* @route '/dashboard/products/{product}'
*/
export const show = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/{product}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:91
* @route '/dashboard/products/{product}'
*/
show.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:91
* @route '/dashboard/products/{product}'
*/
show.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:91
* @route '/dashboard/products/{product}'
*/
show.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:91
* @route '/dashboard/products/{product}'
*/
const showForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:91
* @route '/dashboard/products/{product}'
*/
showForm.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:91
* @route '/dashboard/products/{product}'
*/
showForm.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:109
* @route '/dashboard/products/{product}/edit'
*/
export const edit = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/{product}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:109
* @route '/dashboard/products/{product}/edit'
*/
edit.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:109
* @route '/dashboard/products/{product}/edit'
*/
edit.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:109
* @route '/dashboard/products/{product}/edit'
*/
edit.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:109
* @route '/dashboard/products/{product}/edit'
*/
const editForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:109
* @route '/dashboard/products/{product}/edit'
*/
editForm.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:109
* @route '/dashboard/products/{product}/edit'
*/
editForm.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:135
* @route '/dashboard/products/{product}'
*/
export const update = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/products/{product}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:135
* @route '/dashboard/products/{product}'
*/
update.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:135
* @route '/dashboard/products/{product}'
*/
update.put = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:135
* @route '/dashboard/products/{product}'
*/
update.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:135
* @route '/dashboard/products/{product}'
*/
const updateForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:135
* @route '/dashboard/products/{product}'
*/
updateForm.put = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:135
* @route '/dashboard/products/{product}'
*/
updateForm.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:146
* @route '/dashboard/products/{product}'
*/
export const destroy = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/products/{product}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:146
* @route '/dashboard/products/{product}'
*/
destroy.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:146
* @route '/dashboard/products/{product}'
*/
destroy.delete = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:146
* @route '/dashboard/products/{product}'
*/
const destroyForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:146
* @route '/dashboard/products/{product}'
*/
destroyForm.delete = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::toggleFeatured
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:157
* @route '/dashboard/products/{product}/toggle-featured'
*/
export const toggleFeatured = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleFeatured.url(args, options),
    method: 'patch',
})

toggleFeatured.definition = {
    methods: ["patch"],
    url: '/dashboard/products/{product}/toggle-featured',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::toggleFeatured
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:157
* @route '/dashboard/products/{product}/toggle-featured'
*/
toggleFeatured.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return toggleFeatured.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::toggleFeatured
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:157
* @route '/dashboard/products/{product}/toggle-featured'
*/
toggleFeatured.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleFeatured.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::toggleFeatured
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:157
* @route '/dashboard/products/{product}/toggle-featured'
*/
const toggleFeaturedForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleFeatured.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::toggleFeatured
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:157
* @route '/dashboard/products/{product}/toggle-featured'
*/
toggleFeaturedForm.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleFeatured.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleFeatured.form = toggleFeaturedForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::updateStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:168
* @route '/dashboard/products/{product}/status'
*/
export const updateStatus = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStatus.url(args, options),
    method: 'patch',
})

updateStatus.definition = {
    methods: ["patch"],
    url: '/dashboard/products/{product}/status',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::updateStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:168
* @route '/dashboard/products/{product}/status'
*/
updateStatus.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return updateStatus.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::updateStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:168
* @route '/dashboard/products/{product}/status'
*/
updateStatus.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStatus.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::updateStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:168
* @route '/dashboard/products/{product}/status'
*/
const updateStatusForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::updateStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:168
* @route '/dashboard/products/{product}/status'
*/
updateStatusForm.patch = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateStatus.form = updateStatusForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::manageAttributes
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:183
* @route '/dashboard/products/{product}/attributes/manage'
*/
export const manageAttributes = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manageAttributes.url(args, options),
    method: 'get',
})

manageAttributes.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/{product}/attributes/manage',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::manageAttributes
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:183
* @route '/dashboard/products/{product}/attributes/manage'
*/
manageAttributes.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return manageAttributes.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::manageAttributes
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:183
* @route '/dashboard/products/{product}/attributes/manage'
*/
manageAttributes.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: manageAttributes.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::manageAttributes
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:183
* @route '/dashboard/products/{product}/attributes/manage'
*/
manageAttributes.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: manageAttributes.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::manageAttributes
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:183
* @route '/dashboard/products/{product}/attributes/manage'
*/
const manageAttributesForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageAttributes.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::manageAttributes
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:183
* @route '/dashboard/products/{product}/attributes/manage'
*/
manageAttributesForm.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageAttributes.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::manageAttributes
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:183
* @route '/dashboard/products/{product}/attributes/manage'
*/
manageAttributesForm.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: manageAttributes.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

manageAttributes.form = manageAttributesForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::syncAttributes
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:207
* @route '/dashboard/products/{product}/attributes/sync'
*/
export const syncAttributes = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncAttributes.url(args, options),
    method: 'post',
})

syncAttributes.definition = {
    methods: ["post"],
    url: '/dashboard/products/{product}/attributes/sync',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::syncAttributes
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:207
* @route '/dashboard/products/{product}/attributes/sync'
*/
syncAttributes.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return syncAttributes.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::syncAttributes
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:207
* @route '/dashboard/products/{product}/attributes/sync'
*/
syncAttributes.post = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncAttributes.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::syncAttributes
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:207
* @route '/dashboard/products/{product}/attributes/sync'
*/
const syncAttributesForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: syncAttributes.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::syncAttributes
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:207
* @route '/dashboard/products/{product}/attributes/sync'
*/
syncAttributesForm.post = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: syncAttributes.url(args, options),
    method: 'post',
})

syncAttributes.form = syncAttributesForm

const ProductController = { confirmBulkDelete, bulkDelete, trash, emptyTrash, bulkRestore, bulkForceDelete, restore, forceDelete, index, create, store, show, edit, update, destroy, toggleFeatured, updateStatus, manageAttributes, syncAttributes }

export default ProductController