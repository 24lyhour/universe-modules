import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::trash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:71
* @route '/dashboard/categories/trash'
*/
export const trash = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

trash.definition = {
    methods: ["get","head"],
    url: '/dashboard/categories/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::trash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:71
* @route '/dashboard/categories/trash'
*/
trash.url = (options?: RouteQueryOptions) => {
    return trash.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::trash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:71
* @route '/dashboard/categories/trash'
*/
trash.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::trash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:71
* @route '/dashboard/categories/trash'
*/
trash.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::exportMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:88
* @route '/dashboard/categories/export'
*/
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/categories/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::exportMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:88
* @route '/dashboard/categories/export'
*/
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::exportMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:88
* @route '/dashboard/categories/export'
*/
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::exportMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:88
* @route '/dashboard/categories/export'
*/
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::importMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:101
* @route '/dashboard/categories/import'
*/
export const importMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: importMethod.url(options),
    method: 'get',
})

importMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/categories/import',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::importMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:101
* @route '/dashboard/categories/import'
*/
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::importMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:101
* @route '/dashboard/categories/import'
*/
importMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: importMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::importMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:101
* @route '/dashboard/categories/import'
*/
importMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: importMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::previewImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:111
* @route '/dashboard/categories/import/preview'
*/
export const previewImport = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: previewImport.url(options),
    method: 'post',
})

previewImport.definition = {
    methods: ["post"],
    url: '/dashboard/categories/import/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::previewImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:111
* @route '/dashboard/categories/import/preview'
*/
previewImport.url = (options?: RouteQueryOptions) => {
    return previewImport.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::previewImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:111
* @route '/dashboard/categories/import/preview'
*/
previewImport.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: previewImport.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::processImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:134
* @route '/dashboard/categories/import/process'
*/
export const processImport = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: processImport.url(options),
    method: 'post',
})

processImport.definition = {
    methods: ["post"],
    url: '/dashboard/categories/import/process',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::processImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:134
* @route '/dashboard/categories/import/process'
*/
processImport.url = (options?: RouteQueryOptions) => {
    return processImport.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::processImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:134
* @route '/dashboard/categories/import/process'
*/
processImport.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: processImport.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:170
* @route '/dashboard/categories/import/template'
*/
export const template = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

template.definition = {
    methods: ["get","head"],
    url: '/dashboard/categories/import/template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:170
* @route '/dashboard/categories/import/template'
*/
template.url = (options?: RouteQueryOptions) => {
    return template.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:170
* @route '/dashboard/categories/import/template'
*/
template.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:170
* @route '/dashboard/categories/import/template'
*/
template.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: template.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::confirmBulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:373
* @route '/dashboard/categories/bulk-delete'
*/
export const confirmBulkDelete = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmBulkDelete.url(options),
    method: 'get',
})

confirmBulkDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/categories/bulk-delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::confirmBulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:373
* @route '/dashboard/categories/bulk-delete'
*/
confirmBulkDelete.url = (options?: RouteQueryOptions) => {
    return confirmBulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::confirmBulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:373
* @route '/dashboard/categories/bulk-delete'
*/
confirmBulkDelete.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::confirmBulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:373
* @route '/dashboard/categories/bulk-delete'
*/
confirmBulkDelete.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmBulkDelete.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::bulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:395
* @route '/dashboard/categories/bulk-delete'
*/
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/categories/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::bulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:395
* @route '/dashboard/categories/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::bulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:395
* @route '/dashboard/categories/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::bulkRestore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:235
* @route '/dashboard/categories/trash/bulk-restore'
*/
export const bulkRestore = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

bulkRestore.definition = {
    methods: ["put"],
    url: '/dashboard/categories/trash/bulk-restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::bulkRestore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:235
* @route '/dashboard/categories/trash/bulk-restore'
*/
bulkRestore.url = (options?: RouteQueryOptions) => {
    return bulkRestore.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::bulkRestore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:235
* @route '/dashboard/categories/trash/bulk-restore'
*/
bulkRestore.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::bulkForceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:251
* @route '/dashboard/categories/trash/bulk-force-delete'
*/
export const bulkForceDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

bulkForceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/categories/trash/bulk-force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::bulkForceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:251
* @route '/dashboard/categories/trash/bulk-force-delete'
*/
bulkForceDelete.url = (options?: RouteQueryOptions) => {
    return bulkForceDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::bulkForceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:251
* @route '/dashboard/categories/trash/bulk-force-delete'
*/
bulkForceDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::emptyTrash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:267
* @route '/dashboard/categories/trash/empty'
*/
export const emptyTrash = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: emptyTrash.url(options),
    method: 'delete',
})

emptyTrash.definition = {
    methods: ["delete"],
    url: '/dashboard/categories/trash/empty',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::emptyTrash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:267
* @route '/dashboard/categories/trash/empty'
*/
emptyTrash.url = (options?: RouteQueryOptions) => {
    return emptyTrash.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::emptyTrash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:267
* @route '/dashboard/categories/trash/empty'
*/
emptyTrash.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: emptyTrash.url(options),
    method: 'delete',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:57
* @route '/dashboard/categories'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:57
* @route '/dashboard/categories'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:57
* @route '/dashboard/categories'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:57
* @route '/dashboard/categories'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:278
* @route '/dashboard/categories/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/categories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:278
* @route '/dashboard/categories/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:278
* @route '/dashboard/categories/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:278
* @route '/dashboard/categories/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:296
* @route '/dashboard/categories'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/categories',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:296
* @route '/dashboard/categories'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:296
* @route '/dashboard/categories'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:316
* @route '/dashboard/categories/{category}'
*/
export const show = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/categories/{category}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:316
* @route '/dashboard/categories/{category}'
*/
show.url = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return show.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:316
* @route '/dashboard/categories/{category}'
*/
show.get = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:316
* @route '/dashboard/categories/{category}'
*/
show.head = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:326
* @route '/dashboard/categories/{category}/edit'
*/
export const edit = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/categories/{category}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:326
* @route '/dashboard/categories/{category}/edit'
*/
edit.url = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return edit.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:326
* @route '/dashboard/categories/{category}/edit'
*/
edit.get = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:326
* @route '/dashboard/categories/{category}/edit'
*/
edit.head = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:337
* @route '/dashboard/categories/{category}'
*/
export const update = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/categories/{category}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:337
* @route '/dashboard/categories/{category}'
*/
update.url = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return update.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:337
* @route '/dashboard/categories/{category}'
*/
update.put = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:337
* @route '/dashboard/categories/{category}'
*/
update.patch = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:360
* @route '/dashboard/categories/{category}'
*/
export const destroy = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/categories/{category}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:360
* @route '/dashboard/categories/{category}'
*/
destroy.url = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return destroy.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:360
* @route '/dashboard/categories/{category}'
*/
destroy.delete = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:350
* @route '/dashboard/categories/{category}/delete'
*/
export const confirmDelete = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/categories/{category}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:350
* @route '/dashboard/categories/{category}/delete'
*/
confirmDelete.url = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return confirmDelete.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:350
* @route '/dashboard/categories/{category}/delete'
*/
confirmDelete.get = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:350
* @route '/dashboard/categories/{category}/delete'
*/
confirmDelete.head = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::restore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:211
* @route '/dashboard/categories/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/categories/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::restore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:211
* @route '/dashboard/categories/{uuid}/restore'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::restore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:211
* @route '/dashboard/categories/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::forceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:223
* @route '/dashboard/categories/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/categories/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::forceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:223
* @route '/dashboard/categories/{uuid}/force-delete'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::forceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:223
* @route '/dashboard/categories/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

const CategoryController = { trash, exportMethod, importMethod, previewImport, processImport, template, confirmBulkDelete, bulkDelete, bulkRestore, bulkForceDelete, emptyTrash, index, create, store, show, edit, update, destroy, confirmDelete, restore, forceDelete, export: exportMethod, import: importMethod }

export default CategoryController