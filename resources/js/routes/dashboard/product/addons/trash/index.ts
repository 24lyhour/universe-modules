import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::empty
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:330
* @route '/dashboard/products/addons/trash/empty'
*/
export const empty = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: empty.url(options),
    method: 'delete',
})

empty.definition = {
    methods: ["delete"],
    url: '/dashboard/products/addons/trash/empty',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::empty
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:330
* @route '/dashboard/products/addons/trash/empty'
*/
empty.url = (options?: RouteQueryOptions) => {
    return empty.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::empty
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:330
* @route '/dashboard/products/addons/trash/empty'
*/
empty.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: empty.url(options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:298
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:298
* @route '/dashboard/products/addons/trash/bulk-restore'
*/
bulkRestore.url = (options?: RouteQueryOptions) => {
    return bulkRestore.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkRestore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:298
* @route '/dashboard/products/addons/trash/bulk-restore'
*/
bulkRestore.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:314
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:314
* @route '/dashboard/products/addons/trash/bulk-force-delete'
*/
bulkForceDelete.url = (options?: RouteQueryOptions) => {
    return bulkForceDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkForceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:314
* @route '/dashboard/products/addons/trash/bulk-force-delete'
*/
bulkForceDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

const trash = {
    empty: Object.assign(empty, empty),
    bulkRestore: Object.assign(bulkRestore, bulkRestore),
    bulkForceDelete: Object.assign(bulkForceDelete, bulkForceDelete),
}

export default trash