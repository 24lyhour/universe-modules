import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::indexAll
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:47
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:47
* @route '/dashboard/products/addons'
*/
indexAll.url = (options?: RouteQueryOptions) => {
    return indexAll.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::indexAll
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:47
* @route '/dashboard/products/addons'
*/
indexAll.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexAll.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::indexAll
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:47
* @route '/dashboard/products/addons'
*/
indexAll.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexAll.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::createStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:448
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:448
* @route '/dashboard/products/addons/create'
*/
createStandalone.url = (options?: RouteQueryOptions) => {
    return createStandalone.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::createStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:448
* @route '/dashboard/products/addons/create'
*/
createStandalone.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createStandalone.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::createStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:448
* @route '/dashboard/products/addons/create'
*/
createStandalone.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: createStandalone.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::storeStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:458
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:458
* @route '/dashboard/products/addons'
*/
storeStandalone.url = (options?: RouteQueryOptions) => {
    return storeStandalone.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::storeStandalone
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:458
* @route '/dashboard/products/addons'
*/
storeStandalone.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeStandalone.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::importMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:102
* @route '/dashboard/products/addons/import'
*/
export const importMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: importMethod.url(options),
    method: 'get',
})

importMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/addons/import',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::importMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:102
* @route '/dashboard/products/addons/import'
*/
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::importMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:102
* @route '/dashboard/products/addons/import'
*/
importMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: importMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::importMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:102
* @route '/dashboard/products/addons/import'
*/
importMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: importMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::previewImport
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:112
* @route '/dashboard/products/addons/import/preview'
*/
export const previewImport = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: previewImport.url(options),
    method: 'post',
})

previewImport.definition = {
    methods: ["post"],
    url: '/dashboard/products/addons/import/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::previewImport
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:112
* @route '/dashboard/products/addons/import/preview'
*/
previewImport.url = (options?: RouteQueryOptions) => {
    return previewImport.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::previewImport
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:112
* @route '/dashboard/products/addons/import/preview'
*/
previewImport.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: previewImport.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::processImport
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:145
* @route '/dashboard/products/addons/import'
*/
export const processImport = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: processImport.url(options),
    method: 'post',
})

processImport.definition = {
    methods: ["post"],
    url: '/dashboard/products/addons/import',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::processImport
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:145
* @route '/dashboard/products/addons/import'
*/
processImport.url = (options?: RouteQueryOptions) => {
    return processImport.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::processImport
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:145
* @route '/dashboard/products/addons/import'
*/
processImport.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: processImport.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::template
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:184
* @route '/dashboard/products/addons/template'
*/
export const template = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

template.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/addons/template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::template
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:184
* @route '/dashboard/products/addons/template'
*/
template.url = (options?: RouteQueryOptions) => {
    return template.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::template
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:184
* @route '/dashboard/products/addons/template'
*/
template.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::template
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:184
* @route '/dashboard/products/addons/template'
*/
template.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: template.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:82
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:82
* @route '/dashboard/products/addons/export'
*/
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:82
* @route '/dashboard/products/addons/export'
*/
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::exportMethod
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:82
* @route '/dashboard/products/addons/export'
*/
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:65
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:65
* @route '/dashboard/products/addons/trash'
*/
trash.url = (options?: RouteQueryOptions) => {
    return trash.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:65
* @route '/dashboard/products/addons/trash'
*/
trash.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::trash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:65
* @route '/dashboard/products/addons/trash'
*/
trash.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:258
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:258
* @route '/dashboard/products/addons/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::bulkDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:258
* @route '/dashboard/products/addons/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:330
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:330
* @route '/dashboard/products/addons/trash/empty'
*/
emptyTrash.url = (options?: RouteQueryOptions) => {
    return emptyTrash.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::emptyTrash
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:330
* @route '/dashboard/products/addons/trash/empty'
*/
emptyTrash.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: emptyTrash.url(options),
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

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::restore
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:274
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:274
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:274
* @route '/dashboard/products/addons/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::forceDelete
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:286
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:286
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:286
* @route '/dashboard/products/addons/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::destroyGlobal
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:414
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:414
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:414
* @route '/dashboard/products/addons/{addon}/delete'
*/
destroyGlobal.delete = (args: { addon: number | { id: number } } | [addon: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyGlobal.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:341
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:341
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:341
* @route '/dashboard/products/{product}/addons'
*/
index.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:341
* @route '/dashboard/products/{product}/addons'
*/
index.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:356
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:356
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:356
* @route '/dashboard/products/{product}/addons/create'
*/
create.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:356
* @route '/dashboard/products/{product}/addons/create'
*/
create.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:367
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:367
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:367
* @route '/dashboard/products/{product}/addons'
*/
store.post = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:378
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:378
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:378
* @route '/dashboard/products/{product}/addons/{addon}/edit'
*/
edit.get = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:378
* @route '/dashboard/products/{product}/addons/{addon}/edit'
*/
edit.head = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:391
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:391
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:391
* @route '/dashboard/products/{product}/addons/{addon}'
*/
update.put = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:391
* @route '/dashboard/products/{product}/addons/{addon}'
*/
update.patch = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:402
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:402
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:402
* @route '/dashboard/products/{product}/addons/{addon}'
*/
destroy.delete = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:426
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:426
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:426
* @route '/dashboard/products/{product}/addons/{addon}/toggle-status'
*/
toggleStatus.patch = (args: { product: number | { id: number }, addon: number | { id: number } } | [product: number | { id: number }, addon: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleStatus.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAddOnController::reorder
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:437
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:437
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
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAddOnController.php:437
* @route '/dashboard/products/{product}/addons/reorder'
*/
reorder.post = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reorder.url(args, options),
    method: 'post',
})

const ProductAddOnController = { indexAll, createStandalone, storeStandalone, importMethod, previewImport, processImport, template, exportMethod, trash, bulkDelete, emptyTrash, bulkRestore, bulkForceDelete, restore, forceDelete, destroyGlobal, index, create, store, edit, update, destroy, toggleStatus, reorder, import: importMethod, export: exportMethod }

export default ProductAddOnController