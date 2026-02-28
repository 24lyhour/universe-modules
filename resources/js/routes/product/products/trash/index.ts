import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::empty
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:335
* @route '/dashboard/products/trash/empty'
*/
export const empty = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: empty.url(options),
    method: 'delete',
})

empty.definition = {
    methods: ["delete"],
    url: '/dashboard/products/trash/empty',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::empty
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:335
* @route '/dashboard/products/trash/empty'
*/
empty.url = (options?: RouteQueryOptions) => {
    return empty.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::empty
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:335
* @route '/dashboard/products/trash/empty'
*/
empty.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: empty.url(options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::empty
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:335
* @route '/dashboard/products/trash/empty'
*/
const emptyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: empty.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductController::empty
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductController.php:335
* @route '/dashboard/products/trash/empty'
*/
emptyForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: empty.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

empty.form = emptyForm

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

const trash = {
    empty: Object.assign(empty, empty),
    bulkRestore: Object.assign(bulkRestore, bulkRestore),
    bulkForceDelete: Object.assign(bulkForceDelete, bulkForceDelete),
}

export default trash