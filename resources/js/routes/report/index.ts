import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/reports'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/reports'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/reports'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/reports'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/reports'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/reports'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/reports'
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
* @see \Modules\Report\Http\Controllers\ReportController::create
* @see Modules/Report/app/Http/Controllers/ReportController.php:21
* @route '/reports/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/reports/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::create
* @see Modules/Report/app/Http/Controllers/ReportController.php:21
* @route '/reports/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::create
* @see Modules/Report/app/Http/Controllers/ReportController.php:21
* @route '/reports/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::create
* @see Modules/Report/app/Http/Controllers/ReportController.php:21
* @route '/reports/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::create
* @see Modules/Report/app/Http/Controllers/ReportController.php:21
* @route '/reports/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::create
* @see Modules/Report/app/Http/Controllers/ReportController.php:21
* @route '/reports/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::create
* @see Modules/Report/app/Http/Controllers/ReportController.php:21
* @route '/reports/create'
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
* @see \Modules\Report\Http\Controllers\ReportController::store
* @see Modules/Report/app/Http/Controllers/ReportController.php:29
* @route '/reports'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/reports',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::store
* @see Modules/Report/app/Http/Controllers/ReportController.php:29
* @route '/reports'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::store
* @see Modules/Report/app/Http/Controllers/ReportController.php:29
* @route '/reports'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::store
* @see Modules/Report/app/Http/Controllers/ReportController.php:29
* @route '/reports'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::store
* @see Modules/Report/app/Http/Controllers/ReportController.php:29
* @route '/reports'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/reports/{report}'
*/
export const show = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/reports/{report}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/reports/{report}'
*/
show.url = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { report: args }
    }

    if (Array.isArray(args)) {
        args = {
            report: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        report: args.report,
    }

    return show.definition.url
            .replace('{report}', parsedArgs.report.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/reports/{report}'
*/
show.get = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/reports/{report}'
*/
show.head = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/reports/{report}'
*/
const showForm = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/reports/{report}'
*/
showForm.get = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/reports/{report}'
*/
showForm.head = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Report\Http\Controllers\ReportController::edit
* @see Modules/Report/app/Http/Controllers/ReportController.php:42
* @route '/reports/{report}/edit'
*/
export const edit = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/reports/{report}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::edit
* @see Modules/Report/app/Http/Controllers/ReportController.php:42
* @route '/reports/{report}/edit'
*/
edit.url = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { report: args }
    }

    if (Array.isArray(args)) {
        args = {
            report: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        report: args.report,
    }

    return edit.definition.url
            .replace('{report}', parsedArgs.report.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::edit
* @see Modules/Report/app/Http/Controllers/ReportController.php:42
* @route '/reports/{report}/edit'
*/
edit.get = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::edit
* @see Modules/Report/app/Http/Controllers/ReportController.php:42
* @route '/reports/{report}/edit'
*/
edit.head = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::edit
* @see Modules/Report/app/Http/Controllers/ReportController.php:42
* @route '/reports/{report}/edit'
*/
const editForm = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::edit
* @see Modules/Report/app/Http/Controllers/ReportController.php:42
* @route '/reports/{report}/edit'
*/
editForm.get = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::edit
* @see Modules/Report/app/Http/Controllers/ReportController.php:42
* @route '/reports/{report}/edit'
*/
editForm.head = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Report\Http\Controllers\ReportController::update
* @see Modules/Report/app/Http/Controllers/ReportController.php:50
* @route '/reports/{report}'
*/
export const update = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/reports/{report}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::update
* @see Modules/Report/app/Http/Controllers/ReportController.php:50
* @route '/reports/{report}'
*/
update.url = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { report: args }
    }

    if (Array.isArray(args)) {
        args = {
            report: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        report: args.report,
    }

    return update.definition.url
            .replace('{report}', parsedArgs.report.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::update
* @see Modules/Report/app/Http/Controllers/ReportController.php:50
* @route '/reports/{report}'
*/
update.put = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::update
* @see Modules/Report/app/Http/Controllers/ReportController.php:50
* @route '/reports/{report}'
*/
update.patch = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::update
* @see Modules/Report/app/Http/Controllers/ReportController.php:50
* @route '/reports/{report}'
*/
const updateForm = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::update
* @see Modules/Report/app/Http/Controllers/ReportController.php:50
* @route '/reports/{report}'
*/
updateForm.put = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::update
* @see Modules/Report/app/Http/Controllers/ReportController.php:50
* @route '/reports/{report}'
*/
updateForm.patch = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Report\Http\Controllers\ReportController::destroy
* @see Modules/Report/app/Http/Controllers/ReportController.php:55
* @route '/reports/{report}'
*/
export const destroy = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/reports/{report}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::destroy
* @see Modules/Report/app/Http/Controllers/ReportController.php:55
* @route '/reports/{report}'
*/
destroy.url = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { report: args }
    }

    if (Array.isArray(args)) {
        args = {
            report: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        report: args.report,
    }

    return destroy.definition.url
            .replace('{report}', parsedArgs.report.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::destroy
* @see Modules/Report/app/Http/Controllers/ReportController.php:55
* @route '/reports/{report}'
*/
destroy.delete = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::destroy
* @see Modules/Report/app/Http/Controllers/ReportController.php:55
* @route '/reports/{report}'
*/
const destroyForm = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::destroy
* @see Modules/Report/app/Http/Controllers/ReportController.php:55
* @route '/reports/{report}'
*/
destroyForm.delete = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const report = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default report