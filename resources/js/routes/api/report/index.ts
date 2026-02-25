import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/api/v1/reports'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/api/v1/reports'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/api/v1/reports'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/api/v1/reports'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::store
* @see Modules/Report/app/Http/Controllers/ReportController.php:29
* @route '/api/v1/reports'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/reports',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::store
* @see Modules/Report/app/Http/Controllers/ReportController.php:29
* @route '/api/v1/reports'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::store
* @see Modules/Report/app/Http/Controllers/ReportController.php:29
* @route '/api/v1/reports'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/api/v1/reports/{report}'
*/
export const show = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/reports/{report}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/api/v1/reports/{report}'
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
* @route '/api/v1/reports/{report}'
*/
show.get = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/api/v1/reports/{report}'
*/
show.head = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::update
* @see Modules/Report/app/Http/Controllers/ReportController.php:50
* @route '/api/v1/reports/{report}'
*/
export const update = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/reports/{report}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::update
* @see Modules/Report/app/Http/Controllers/ReportController.php:50
* @route '/api/v1/reports/{report}'
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
* @route '/api/v1/reports/{report}'
*/
update.put = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::update
* @see Modules/Report/app/Http/Controllers/ReportController.php:50
* @route '/api/v1/reports/{report}'
*/
update.patch = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::destroy
* @see Modules/Report/app/Http/Controllers/ReportController.php:55
* @route '/api/v1/reports/{report}'
*/
export const destroy = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/reports/{report}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::destroy
* @see Modules/Report/app/Http/Controllers/ReportController.php:55
* @route '/api/v1/reports/{report}'
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
* @route '/api/v1/reports/{report}'
*/
destroy.delete = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const report = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default report