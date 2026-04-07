import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
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

const ProductTypeController = { confirmBulkDelete, bulkDelete, trash, emptyTrash, bulkRestore, bulkForceDelete, restore, forceDelete, exportMethod, index, create, store, show, edit, update, destroy, toggleStatus, export: exportMethod }

export default ProductTypeController