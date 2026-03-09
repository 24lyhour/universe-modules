import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import importMethod7367d2 from './import'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::trash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:69
* @route '/dashboard/menu-types/trash'
*/
const trashForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::trash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:69
* @route '/dashboard/menu-types/trash'
*/
trashForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::trash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:69
* @route '/dashboard/menu-types/trash'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::exportMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:86
* @route '/dashboard/menu-types/export'
*/
const exportMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::exportMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:86
* @route '/dashboard/menu-types/export'
*/
exportMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::exportMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:86
* @route '/dashboard/menu-types/export'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::importMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:99
* @route '/dashboard/menu-types/import'
*/
const importMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: importMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::importMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:99
* @route '/dashboard/menu-types/import'
*/
importMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: importMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::importMethod
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:99
* @route '/dashboard/menu-types/import'
*/
importMethodForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: importMethod.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

importMethod.form = importMethodForm

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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::bulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:379
* @route '/dashboard/menu-types/bulk-delete'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::bulkDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:379
* @route '/dashboard/menu-types/bulk-delete'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::bulkRestore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:233
* @route '/dashboard/menu-types/trash/bulk-restore'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::bulkRestore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:233
* @route '/dashboard/menu-types/trash/bulk-restore'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::bulkForceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:249
* @route '/dashboard/menu-types/trash/bulk-force-delete'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::bulkForceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:249
* @route '/dashboard/menu-types/trash/bulk-force-delete'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::emptyTrash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:265
* @route '/dashboard/menu-types/trash/empty'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::emptyTrash
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:265
* @route '/dashboard/menu-types/trash/empty'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:55
* @route '/dashboard/menu-types'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:55
* @route '/dashboard/menu-types'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:55
* @route '/dashboard/menu-types'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:276
* @route '/dashboard/menu-types/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:276
* @route '/dashboard/menu-types/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:276
* @route '/dashboard/menu-types/create'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:287
* @route '/dashboard/menu-types'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:287
* @route '/dashboard/menu-types'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:300
* @route '/dashboard/menu-types/{menu_type}'
*/
const showForm = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:300
* @route '/dashboard/menu-types/{menu_type}'
*/
showForm.get = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:300
* @route '/dashboard/menu-types/{menu_type}'
*/
showForm.head = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:310
* @route '/dashboard/menu-types/{menu_type}/edit'
*/
const editForm = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:310
* @route '/dashboard/menu-types/{menu_type}/edit'
*/
editForm.get = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:310
* @route '/dashboard/menu-types/{menu_type}/edit'
*/
editForm.head = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:321
* @route '/dashboard/menu-types/{menu_type}'
*/
const updateForm = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:321
* @route '/dashboard/menu-types/{menu_type}'
*/
updateForm.put = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:321
* @route '/dashboard/menu-types/{menu_type}'
*/
updateForm.patch = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:344
* @route '/dashboard/menu-types/{menu_type}'
*/
const destroyForm = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:344
* @route '/dashboard/menu-types/{menu_type}'
*/
destroyForm.delete = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:334
* @route '/dashboard/menu-types/{menu_type}/delete'
*/
const confirmDeleteForm = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:334
* @route '/dashboard/menu-types/{menu_type}/delete'
*/
confirmDeleteForm.get = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:334
* @route '/dashboard/menu-types/{menu_type}/delete'
*/
confirmDeleteForm.head = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

confirmDelete.form = confirmDeleteForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeStatusController::__invoke
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeStatusController.php:20
* @route '/dashboard/menu-types/{menu_type}/toggle-status'
*/
export const toggleStatus = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

toggleStatus.definition = {
    methods: ["put"],
    url: '/dashboard/menu-types/{menu_type}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeStatusController::__invoke
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeStatusController.php:20
* @route '/dashboard/menu-types/{menu_type}/toggle-status'
*/
toggleStatus.url = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return toggleStatus.definition.url
            .replace('{menu_type}', parsedArgs.menu_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeStatusController::__invoke
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeStatusController.php:20
* @route '/dashboard/menu-types/{menu_type}/toggle-status'
*/
toggleStatus.put = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeStatusController::__invoke
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeStatusController.php:20
* @route '/dashboard/menu-types/{menu_type}/toggle-status'
*/
const toggleStatusForm = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeStatusController::__invoke
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeStatusController.php:20
* @route '/dashboard/menu-types/{menu_type}/toggle-status'
*/
toggleStatusForm.put = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleStatus.form = toggleStatusForm

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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::restore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:209
* @route '/dashboard/menu-types/{uuid}/restore'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::restore
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:209
* @route '/dashboard/menu-types/{uuid}/restore'
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

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::forceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:221
* @route '/dashboard/menu-types/{uuid}/force-delete'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::forceDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:221
* @route '/dashboard/menu-types/{uuid}/force-delete'
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

const menuTypes = {
    trash: Object.assign(trash, trash),
    export: Object.assign(exportMethod, exportMethod),
    import: Object.assign(importMethod, importMethod7367d2),
    bulkDelete: Object.assign(bulkDelete, bulkDelete),
    bulkRestore: Object.assign(bulkRestore, bulkRestore),
    bulkForceDelete: Object.assign(bulkForceDelete, bulkForceDelete),
    emptyTrash: Object.assign(emptyTrash, emptyTrash),
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    confirmDelete: Object.assign(confirmDelete, confirmDelete),
    toggleStatus: Object.assign(toggleStatus, toggleStatus),
    restore: Object.assign(restore, restore),
    forceDelete: Object.assign(forceDelete, forceDelete),
}

export default menuTypes