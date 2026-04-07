import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::trash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:69
* @route '/dashboard/menu-types/trash'
*/
export const trash = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

trash.definition = {
    methods: ["get","head"],
    url: '/dashboard/menu-types/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::trash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:69
* @route '/dashboard/menu-types/trash'
*/
trash.url = (options?: RouteQueryOptions) => {
    return trash.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::trash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:69
* @route '/dashboard/menu-types/trash'
*/
trash.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::trash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:69
* @route '/dashboard/menu-types/trash'
*/
trash.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::exportMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:86
* @route '/dashboard/menu-types/export'
*/
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/menu-types/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::exportMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:86
* @route '/dashboard/menu-types/export'
*/
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::exportMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:86
* @route '/dashboard/menu-types/export'
*/
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::exportMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:86
* @route '/dashboard/menu-types/export'
*/
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::importMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:99
* @route '/dashboard/menu-types/import'
*/
export const importMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: importMethod.url(options),
    method: 'get',
})

importMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/menu-types/import',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::importMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:99
* @route '/dashboard/menu-types/import'
*/
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::importMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:99
* @route '/dashboard/menu-types/import'
*/
importMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: importMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::importMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:99
* @route '/dashboard/menu-types/import'
*/
importMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: importMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::previewImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:109
* @route '/dashboard/menu-types/import/preview'
*/
export const previewImport = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: previewImport.url(options),
    method: 'post',
})

previewImport.definition = {
    methods: ["post"],
    url: '/dashboard/menu-types/import/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::previewImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:109
* @route '/dashboard/menu-types/import/preview'
*/
previewImport.url = (options?: RouteQueryOptions) => {
    return previewImport.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::previewImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:109
* @route '/dashboard/menu-types/import/preview'
*/
previewImport.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: previewImport.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::processImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:132
* @route '/dashboard/menu-types/import/process'
*/
export const processImport = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: processImport.url(options),
    method: 'post',
})

processImport.definition = {
    methods: ["post"],
    url: '/dashboard/menu-types/import/process',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::processImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:132
* @route '/dashboard/menu-types/import/process'
*/
processImport.url = (options?: RouteQueryOptions) => {
    return processImport.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::processImport
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:132
* @route '/dashboard/menu-types/import/process'
*/
processImport.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: processImport.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:168
* @route '/dashboard/menu-types/import/template'
*/
export const template = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

template.definition = {
    methods: ["get","head"],
    url: '/dashboard/menu-types/import/template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:168
* @route '/dashboard/menu-types/import/template'
*/
template.url = (options?: RouteQueryOptions) => {
    return template.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:168
* @route '/dashboard/menu-types/import/template'
*/
template.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:168
* @route '/dashboard/menu-types/import/template'
*/
template.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: template.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirmBulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:357
* @route '/dashboard/menu-types/bulk-delete'
*/
export const confirmBulkDelete = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmBulkDelete.url(options),
    method: 'get',
})

confirmBulkDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/menu-types/bulk-delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirmBulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:357
* @route '/dashboard/menu-types/bulk-delete'
*/
confirmBulkDelete.url = (options?: RouteQueryOptions) => {
    return confirmBulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirmBulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:357
* @route '/dashboard/menu-types/bulk-delete'
*/
confirmBulkDelete.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirmBulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:357
* @route '/dashboard/menu-types/bulk-delete'
*/
confirmBulkDelete.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmBulkDelete.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::bulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:379
* @route '/dashboard/menu-types/bulk-delete'
*/
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/menu-types/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::bulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:379
* @route '/dashboard/menu-types/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::bulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:379
* @route '/dashboard/menu-types/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::bulkRestore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:233
* @route '/dashboard/menu-types/trash/bulk-restore'
*/
export const bulkRestore = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

bulkRestore.definition = {
    methods: ["put"],
    url: '/dashboard/menu-types/trash/bulk-restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::bulkRestore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:233
* @route '/dashboard/menu-types/trash/bulk-restore'
*/
bulkRestore.url = (options?: RouteQueryOptions) => {
    return bulkRestore.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::bulkRestore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:233
* @route '/dashboard/menu-types/trash/bulk-restore'
*/
bulkRestore.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::bulkForceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:249
* @route '/dashboard/menu-types/trash/bulk-force-delete'
*/
export const bulkForceDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

bulkForceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/menu-types/trash/bulk-force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::bulkForceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:249
* @route '/dashboard/menu-types/trash/bulk-force-delete'
*/
bulkForceDelete.url = (options?: RouteQueryOptions) => {
    return bulkForceDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::bulkForceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:249
* @route '/dashboard/menu-types/trash/bulk-force-delete'
*/
bulkForceDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::emptyTrash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:265
* @route '/dashboard/menu-types/trash/empty'
*/
export const emptyTrash = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: emptyTrash.url(options),
    method: 'delete',
})

emptyTrash.definition = {
    methods: ["delete"],
    url: '/dashboard/menu-types/trash/empty',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::emptyTrash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:265
* @route '/dashboard/menu-types/trash/empty'
*/
emptyTrash.url = (options?: RouteQueryOptions) => {
    return emptyTrash.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::emptyTrash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:265
* @route '/dashboard/menu-types/trash/empty'
*/
emptyTrash.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: emptyTrash.url(options),
    method: 'delete',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:55
* @route '/dashboard/menu-types'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/menu-types',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:55
* @route '/dashboard/menu-types'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:55
* @route '/dashboard/menu-types'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:55
* @route '/dashboard/menu-types'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:276
* @route '/dashboard/menu-types/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/menu-types/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:276
* @route '/dashboard/menu-types/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:276
* @route '/dashboard/menu-types/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:276
* @route '/dashboard/menu-types/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:287
* @route '/dashboard/menu-types'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/menu-types',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:287
* @route '/dashboard/menu-types'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:287
* @route '/dashboard/menu-types'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:300
* @route '/dashboard/menu-types/{menu_type}'
*/
export const show = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/menu-types/{menu_type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:300
* @route '/dashboard/menu-types/{menu_type}'
*/
show.url = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            menu_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu_type: args.menu_type,
    }

    return show.definition.url
            .replace('{menu_type}', parsedArgs.menu_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:300
* @route '/dashboard/menu-types/{menu_type}'
*/
show.get = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:300
* @route '/dashboard/menu-types/{menu_type}'
*/
show.head = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:310
* @route '/dashboard/menu-types/{menu_type}/edit'
*/
export const edit = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/menu-types/{menu_type}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:310
* @route '/dashboard/menu-types/{menu_type}/edit'
*/
edit.url = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            menu_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu_type: args.menu_type,
    }

    return edit.definition.url
            .replace('{menu_type}', parsedArgs.menu_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:310
* @route '/dashboard/menu-types/{menu_type}/edit'
*/
edit.get = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:310
* @route '/dashboard/menu-types/{menu_type}/edit'
*/
edit.head = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:321
* @route '/dashboard/menu-types/{menu_type}'
*/
export const update = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/menu-types/{menu_type}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:321
* @route '/dashboard/menu-types/{menu_type}'
*/
update.url = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            menu_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu_type: args.menu_type,
    }

    return update.definition.url
            .replace('{menu_type}', parsedArgs.menu_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:321
* @route '/dashboard/menu-types/{menu_type}'
*/
update.put = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:321
* @route '/dashboard/menu-types/{menu_type}'
*/
update.patch = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:344
* @route '/dashboard/menu-types/{menu_type}'
*/
export const destroy = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/menu-types/{menu_type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:344
* @route '/dashboard/menu-types/{menu_type}'
*/
destroy.url = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            menu_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu_type: args.menu_type,
    }

    return destroy.definition.url
            .replace('{menu_type}', parsedArgs.menu_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:344
* @route '/dashboard/menu-types/{menu_type}'
*/
destroy.delete = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:334
* @route '/dashboard/menu-types/{menu_type}/delete'
*/
export const confirmDelete = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/menu-types/{menu_type}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:334
* @route '/dashboard/menu-types/{menu_type}/delete'
*/
confirmDelete.url = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            menu_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu_type: args.menu_type,
    }

    return confirmDelete.definition.url
            .replace('{menu_type}', parsedArgs.menu_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:334
* @route '/dashboard/menu-types/{menu_type}/delete'
*/
confirmDelete.get = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:334
* @route '/dashboard/menu-types/{menu_type}/delete'
*/
confirmDelete.head = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::restore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:209
* @route '/dashboard/menu-types/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/menu-types/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::restore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:209
* @route '/dashboard/menu-types/{uuid}/restore'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::restore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:209
* @route '/dashboard/menu-types/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::forceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:221
* @route '/dashboard/menu-types/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/menu-types/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::forceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:221
* @route '/dashboard/menu-types/{uuid}/force-delete'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::forceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:221
* @route '/dashboard/menu-types/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

const MenuTypeController = { trash, exportMethod, importMethod, previewImport, processImport, template, confirmBulkDelete, bulkDelete, bulkRestore, bulkForceDelete, emptyTrash, index, create, store, show, edit, update, destroy, confirmDelete, restore, forceDelete, export: exportMethod, import: importMethod }

export default MenuTypeController