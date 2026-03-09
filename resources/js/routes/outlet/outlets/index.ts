import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::exportMethod
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:147
* @route '/dashboard/outlets/export'
*/
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlets/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::exportMethod
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:147
* @route '/dashboard/outlets/export'
*/
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::exportMethod
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:147
* @route '/dashboard/outlets/export'
*/
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::exportMethod
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:147
* @route '/dashboard/outlets/export'
*/
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::exportMethod
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:147
* @route '/dashboard/outlets/export'
*/
const exportMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::exportMethod
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:147
* @route '/dashboard/outlets/export'
*/
exportMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::exportMethod
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:147
* @route '/dashboard/outlets/export'
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
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::trash
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:158
* @route '/dashboard/outlets/trash'
*/
export const trash = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

trash.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlets/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::trash
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:158
* @route '/dashboard/outlets/trash'
*/
trash.url = (options?: RouteQueryOptions) => {
    return trash.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::trash
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:158
* @route '/dashboard/outlets/trash'
*/
trash.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::trash
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:158
* @route '/dashboard/outlets/trash'
*/
trash.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::trash
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:158
* @route '/dashboard/outlets/trash'
*/
const trashForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::trash
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:158
* @route '/dashboard/outlets/trash'
*/
trashForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::trash
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:158
* @route '/dashboard/outlets/trash'
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
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::bulkDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:233
* @route '/dashboard/outlets/bulk-delete'
*/
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bulkDelete.url(options),
    method: 'get',
})

bulkDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlets/bulk-delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::bulkDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:233
* @route '/dashboard/outlets/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::bulkDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:233
* @route '/dashboard/outlets/bulk-delete'
*/
bulkDelete.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: bulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::bulkDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:233
* @route '/dashboard/outlets/bulk-delete'
*/
bulkDelete.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: bulkDelete.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::bulkDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:233
* @route '/dashboard/outlets/bulk-delete'
*/
const bulkDeleteForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::bulkDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:233
* @route '/dashboard/outlets/bulk-delete'
*/
bulkDeleteForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::bulkDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:233
* @route '/dashboard/outlets/bulk-delete'
*/
bulkDeleteForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: bulkDelete.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

bulkDelete.form = bulkDeleteForm

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::processBulkDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:250
* @route '/dashboard/outlets/bulk-delete'
*/
export const processBulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: processBulkDelete.url(options),
    method: 'delete',
})

processBulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/outlets/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::processBulkDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:250
* @route '/dashboard/outlets/bulk-delete'
*/
processBulkDelete.url = (options?: RouteQueryOptions) => {
    return processBulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::processBulkDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:250
* @route '/dashboard/outlets/bulk-delete'
*/
processBulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: processBulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::processBulkDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:250
* @route '/dashboard/outlets/bulk-delete'
*/
const processBulkDeleteForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: processBulkDelete.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::processBulkDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:250
* @route '/dashboard/outlets/bulk-delete'
*/
processBulkDeleteForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: processBulkDelete.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

processBulkDelete.form = processBulkDeleteForm

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::index
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:35
* @route '/dashboard/outlets'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::index
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:35
* @route '/dashboard/outlets'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::index
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:35
* @route '/dashboard/outlets'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::index
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:35
* @route '/dashboard/outlets'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::index
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:35
* @route '/dashboard/outlets'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::index
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:35
* @route '/dashboard/outlets'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::index
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:35
* @route '/dashboard/outlets'
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
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::create
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:55
* @route '/dashboard/outlets/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlets/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::create
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:55
* @route '/dashboard/outlets/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::create
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:55
* @route '/dashboard/outlets/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::create
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:55
* @route '/dashboard/outlets/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::create
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:55
* @route '/dashboard/outlets/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::create
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:55
* @route '/dashboard/outlets/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::create
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:55
* @route '/dashboard/outlets/create'
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
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::store
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:65
* @route '/dashboard/outlets'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/outlets',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::store
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:65
* @route '/dashboard/outlets'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::store
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:65
* @route '/dashboard/outlets'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::store
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:65
* @route '/dashboard/outlets'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::store
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:65
* @route '/dashboard/outlets'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:77
* @route '/dashboard/outlets/{outlet}'
*/
export const show = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlets/{outlet}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:77
* @route '/dashboard/outlets/{outlet}'
*/
show.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return show.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:77
* @route '/dashboard/outlets/{outlet}'
*/
show.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:77
* @route '/dashboard/outlets/{outlet}'
*/
show.head = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:77
* @route '/dashboard/outlets/{outlet}'
*/
const showForm = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:77
* @route '/dashboard/outlets/{outlet}'
*/
showForm.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:77
* @route '/dashboard/outlets/{outlet}'
*/
showForm.head = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::edit
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:87
* @route '/dashboard/outlets/{outlet}/edit'
*/
export const edit = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlets/{outlet}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::edit
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:87
* @route '/dashboard/outlets/{outlet}/edit'
*/
edit.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return edit.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::edit
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:87
* @route '/dashboard/outlets/{outlet}/edit'
*/
edit.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::edit
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:87
* @route '/dashboard/outlets/{outlet}/edit'
*/
edit.head = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::edit
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:87
* @route '/dashboard/outlets/{outlet}/edit'
*/
const editForm = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::edit
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:87
* @route '/dashboard/outlets/{outlet}/edit'
*/
editForm.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::edit
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:87
* @route '/dashboard/outlets/{outlet}/edit'
*/
editForm.head = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:113
* @route '/dashboard/outlets/{outlet}'
*/
export const update = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/outlets/{outlet}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:113
* @route '/dashboard/outlets/{outlet}'
*/
update.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return update.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:113
* @route '/dashboard/outlets/{outlet}'
*/
update.put = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:113
* @route '/dashboard/outlets/{outlet}'
*/
update.patch = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:113
* @route '/dashboard/outlets/{outlet}'
*/
const updateForm = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:113
* @route '/dashboard/outlets/{outlet}'
*/
updateForm.put = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:113
* @route '/dashboard/outlets/{outlet}'
*/
updateForm.patch = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::destroy
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:135
* @route '/dashboard/outlets/{outlet}'
*/
export const destroy = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/outlets/{outlet}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::destroy
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:135
* @route '/dashboard/outlets/{outlet}'
*/
destroy.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return destroy.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::destroy
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:135
* @route '/dashboard/outlets/{outlet}'
*/
destroy.delete = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::destroy
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:135
* @route '/dashboard/outlets/{outlet}'
*/
const destroyForm = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::destroy
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:135
* @route '/dashboard/outlets/{outlet}'
*/
destroyForm.delete = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::confirmDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:125
* @route '/dashboard/outlets/{outlet}/delete'
*/
export const confirmDelete = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlets/{outlet}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::confirmDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:125
* @route '/dashboard/outlets/{outlet}/delete'
*/
confirmDelete.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return confirmDelete.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::confirmDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:125
* @route '/dashboard/outlets/{outlet}/delete'
*/
confirmDelete.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::confirmDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:125
* @route '/dashboard/outlets/{outlet}/delete'
*/
confirmDelete.head = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::confirmDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:125
* @route '/dashboard/outlets/{outlet}/delete'
*/
const confirmDeleteForm = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::confirmDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:125
* @route '/dashboard/outlets/{outlet}/delete'
*/
confirmDeleteForm.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::confirmDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:125
* @route '/dashboard/outlets/{outlet}/delete'
*/
confirmDeleteForm.head = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletStatusController::__invoke
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletStatusController.php:20
* @route '/dashboard/outlets/{outlet}/toggle-status'
*/
export const toggleStatus = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

toggleStatus.definition = {
    methods: ["put"],
    url: '/dashboard/outlets/{outlet}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletStatusController::__invoke
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletStatusController.php:20
* @route '/dashboard/outlets/{outlet}/toggle-status'
*/
toggleStatus.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return toggleStatus.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletStatusController::__invoke
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletStatusController.php:20
* @route '/dashboard/outlets/{outlet}/toggle-status'
*/
toggleStatus.put = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletStatusController::__invoke
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletStatusController.php:20
* @route '/dashboard/outlets/{outlet}/toggle-status'
*/
const toggleStatusForm = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletStatusController::__invoke
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletStatusController.php:20
* @route '/dashboard/outlets/{outlet}/toggle-status'
*/
toggleStatusForm.put = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::schedule
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:19
* @route '/dashboard/outlets/{outlet}/schedule'
*/
export const schedule = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: schedule.url(args, options),
    method: 'get',
})

schedule.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlets/{outlet}/schedule',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::schedule
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:19
* @route '/dashboard/outlets/{outlet}/schedule'
*/
schedule.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return schedule.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::schedule
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:19
* @route '/dashboard/outlets/{outlet}/schedule'
*/
schedule.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: schedule.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::schedule
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:19
* @route '/dashboard/outlets/{outlet}/schedule'
*/
schedule.head = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: schedule.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::schedule
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:19
* @route '/dashboard/outlets/{outlet}/schedule'
*/
const scheduleForm = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schedule.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::schedule
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:19
* @route '/dashboard/outlets/{outlet}/schedule'
*/
scheduleForm.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schedule.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::schedule
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:19
* @route '/dashboard/outlets/{outlet}/schedule'
*/
scheduleForm.head = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schedule.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

schedule.form = scheduleForm

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::updateSchedule
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:29
* @route '/dashboard/outlets/{outlet}/schedule'
*/
export const updateSchedule = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateSchedule.url(args, options),
    method: 'put',
})

updateSchedule.definition = {
    methods: ["put"],
    url: '/dashboard/outlets/{outlet}/schedule',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::updateSchedule
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:29
* @route '/dashboard/outlets/{outlet}/schedule'
*/
updateSchedule.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return updateSchedule.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::updateSchedule
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:29
* @route '/dashboard/outlets/{outlet}/schedule'
*/
updateSchedule.put = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateSchedule.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::updateSchedule
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:29
* @route '/dashboard/outlets/{outlet}/schedule'
*/
const updateScheduleForm = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSchedule.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletScheduleController::updateSchedule
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletScheduleController.php:29
* @route '/dashboard/outlets/{outlet}/schedule'
*/
updateScheduleForm.put = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSchedule.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateSchedule.form = updateScheduleForm

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::restore
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:205
* @route '/dashboard/outlets/{outlet}/restore'
*/
export const restore = (args: { outlet: string | number } | [outlet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: restore.url(args, options),
    method: 'post',
})

restore.definition = {
    methods: ["post"],
    url: '/dashboard/outlets/{outlet}/restore',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::restore
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:205
* @route '/dashboard/outlets/{outlet}/restore'
*/
restore.url = (args: { outlet: string | number } | [outlet: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: args.outlet,
    }

    return restore.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::restore
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:205
* @route '/dashboard/outlets/{outlet}/restore'
*/
restore.post = (args: { outlet: string | number } | [outlet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: restore.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::restore
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:205
* @route '/dashboard/outlets/{outlet}/restore'
*/
const restoreForm = (args: { outlet: string | number } | [outlet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::restore
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:205
* @route '/dashboard/outlets/{outlet}/restore'
*/
restoreForm.post = (args: { outlet: string | number } | [outlet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, options),
    method: 'post',
})

restore.form = restoreForm

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::forceDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:219
* @route '/dashboard/outlets/{outlet}/force-delete'
*/
export const forceDelete = (args: { outlet: string | number } | [outlet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/outlets/{outlet}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::forceDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:219
* @route '/dashboard/outlets/{outlet}/force-delete'
*/
forceDelete.url = (args: { outlet: string | number } | [outlet: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: args.outlet,
    }

    return forceDelete.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::forceDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:219
* @route '/dashboard/outlets/{outlet}/force-delete'
*/
forceDelete.delete = (args: { outlet: string | number } | [outlet: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::forceDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:219
* @route '/dashboard/outlets/{outlet}/force-delete'
*/
const forceDeleteForm = (args: { outlet: string | number } | [outlet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\OutletDashboardController::forceDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/OutletDashboardController.php:219
* @route '/dashboard/outlets/{outlet}/force-delete'
*/
forceDeleteForm.delete = (args: { outlet: string | number } | [outlet: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

forceDelete.form = forceDeleteForm

const outlets = {
    export: Object.assign(exportMethod, exportMethod),
    trash: Object.assign(trash, trash),
    bulkDelete: Object.assign(bulkDelete, bulkDelete),
    processBulkDelete: Object.assign(processBulkDelete, processBulkDelete),
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    confirmDelete: Object.assign(confirmDelete, confirmDelete),
    toggleStatus: Object.assign(toggleStatus, toggleStatus),
    schedule: Object.assign(schedule, schedule),
    updateSchedule: Object.assign(updateSchedule, updateSchedule),
    restore: Object.assign(restore, restore),
    forceDelete: Object.assign(forceDelete, forceDelete),
}

export default outlets