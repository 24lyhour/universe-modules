import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/api/v1/reports'
*/
const index1504e423dcc91b512648f94fdb30091e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index1504e423dcc91b512648f94fdb30091e.url(options),
    method: 'get',
})

index1504e423dcc91b512648f94fdb30091e.definition = {
    methods: ["get","head"],
    url: '/api/v1/reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/api/v1/reports'
*/
index1504e423dcc91b512648f94fdb30091e.url = (options?: RouteQueryOptions) => {
    return index1504e423dcc91b512648f94fdb30091e.definition.url + queryParams(options)
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/api/v1/reports'
*/
index1504e423dcc91b512648f94fdb30091e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index1504e423dcc91b512648f94fdb30091e.url(options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/api/v1/reports'
*/
index1504e423dcc91b512648f94fdb30091e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index1504e423dcc91b512648f94fdb30091e.url(options),
    method: 'head',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/api/v1/reports'
*/
const index1504e423dcc91b512648f94fdb30091eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index1504e423dcc91b512648f94fdb30091e.url(options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/api/v1/reports'
*/
index1504e423dcc91b512648f94fdb30091eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index1504e423dcc91b512648f94fdb30091e.url(options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/api/v1/reports'
*/
index1504e423dcc91b512648f94fdb30091eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index1504e423dcc91b512648f94fdb30091e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index1504e423dcc91b512648f94fdb30091e.form = index1504e423dcc91b512648f94fdb30091eForm
/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/reports'
*/
const index58ce3b21459752ee73930d924bf98aec = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index58ce3b21459752ee73930d924bf98aec.url(options),
    method: 'get',
})

index58ce3b21459752ee73930d924bf98aec.definition = {
    methods: ["get","head"],
    url: '/reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/reports'
*/
index58ce3b21459752ee73930d924bf98aec.url = (options?: RouteQueryOptions) => {
    return index58ce3b21459752ee73930d924bf98aec.definition.url + queryParams(options)
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/reports'
*/
index58ce3b21459752ee73930d924bf98aec.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index58ce3b21459752ee73930d924bf98aec.url(options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/reports'
*/
index58ce3b21459752ee73930d924bf98aec.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index58ce3b21459752ee73930d924bf98aec.url(options),
    method: 'head',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/reports'
*/
const index58ce3b21459752ee73930d924bf98aecForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index58ce3b21459752ee73930d924bf98aec.url(options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/reports'
*/
index58ce3b21459752ee73930d924bf98aecForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index58ce3b21459752ee73930d924bf98aec.url(options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::index
* @see Modules/Report/app/Http/Controllers/ReportController.php:13
* @route '/reports'
*/
index58ce3b21459752ee73930d924bf98aecForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index58ce3b21459752ee73930d924bf98aec.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index58ce3b21459752ee73930d924bf98aec.form = index58ce3b21459752ee73930d924bf98aecForm

export const index = {
    '/api/v1/reports': index1504e423dcc91b512648f94fdb30091e,
    '/reports': index58ce3b21459752ee73930d924bf98aec,
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::store
* @see Modules/Report/app/Http/Controllers/ReportController.php:29
* @route '/api/v1/reports'
*/
const store1504e423dcc91b512648f94fdb30091e = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store1504e423dcc91b512648f94fdb30091e.url(options),
    method: 'post',
})

store1504e423dcc91b512648f94fdb30091e.definition = {
    methods: ["post"],
    url: '/api/v1/reports',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::store
* @see Modules/Report/app/Http/Controllers/ReportController.php:29
* @route '/api/v1/reports'
*/
store1504e423dcc91b512648f94fdb30091e.url = (options?: RouteQueryOptions) => {
    return store1504e423dcc91b512648f94fdb30091e.definition.url + queryParams(options)
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::store
* @see Modules/Report/app/Http/Controllers/ReportController.php:29
* @route '/api/v1/reports'
*/
store1504e423dcc91b512648f94fdb30091e.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store1504e423dcc91b512648f94fdb30091e.url(options),
    method: 'post',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::store
* @see Modules/Report/app/Http/Controllers/ReportController.php:29
* @route '/api/v1/reports'
*/
const store1504e423dcc91b512648f94fdb30091eForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store1504e423dcc91b512648f94fdb30091e.url(options),
    method: 'post',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::store
* @see Modules/Report/app/Http/Controllers/ReportController.php:29
* @route '/api/v1/reports'
*/
store1504e423dcc91b512648f94fdb30091eForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store1504e423dcc91b512648f94fdb30091e.url(options),
    method: 'post',
})

store1504e423dcc91b512648f94fdb30091e.form = store1504e423dcc91b512648f94fdb30091eForm
/**
* @see \Modules\Report\Http\Controllers\ReportController::store
* @see Modules/Report/app/Http/Controllers/ReportController.php:29
* @route '/reports'
*/
const store58ce3b21459752ee73930d924bf98aec = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store58ce3b21459752ee73930d924bf98aec.url(options),
    method: 'post',
})

store58ce3b21459752ee73930d924bf98aec.definition = {
    methods: ["post"],
    url: '/reports',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::store
* @see Modules/Report/app/Http/Controllers/ReportController.php:29
* @route '/reports'
*/
store58ce3b21459752ee73930d924bf98aec.url = (options?: RouteQueryOptions) => {
    return store58ce3b21459752ee73930d924bf98aec.definition.url + queryParams(options)
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::store
* @see Modules/Report/app/Http/Controllers/ReportController.php:29
* @route '/reports'
*/
store58ce3b21459752ee73930d924bf98aec.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store58ce3b21459752ee73930d924bf98aec.url(options),
    method: 'post',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::store
* @see Modules/Report/app/Http/Controllers/ReportController.php:29
* @route '/reports'
*/
const store58ce3b21459752ee73930d924bf98aecForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store58ce3b21459752ee73930d924bf98aec.url(options),
    method: 'post',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::store
* @see Modules/Report/app/Http/Controllers/ReportController.php:29
* @route '/reports'
*/
store58ce3b21459752ee73930d924bf98aecForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store58ce3b21459752ee73930d924bf98aec.url(options),
    method: 'post',
})

store58ce3b21459752ee73930d924bf98aec.form = store58ce3b21459752ee73930d924bf98aecForm

export const store = {
    '/api/v1/reports': store1504e423dcc91b512648f94fdb30091e,
    '/reports': store58ce3b21459752ee73930d924bf98aec,
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/api/v1/reports/{report}'
*/
const show446f790d2518b3e491727fb62a17bb37 = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show446f790d2518b3e491727fb62a17bb37.url(args, options),
    method: 'get',
})

show446f790d2518b3e491727fb62a17bb37.definition = {
    methods: ["get","head"],
    url: '/api/v1/reports/{report}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/api/v1/reports/{report}'
*/
show446f790d2518b3e491727fb62a17bb37.url = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show446f790d2518b3e491727fb62a17bb37.definition.url
            .replace('{report}', parsedArgs.report.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/api/v1/reports/{report}'
*/
show446f790d2518b3e491727fb62a17bb37.get = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show446f790d2518b3e491727fb62a17bb37.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/api/v1/reports/{report}'
*/
show446f790d2518b3e491727fb62a17bb37.head = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show446f790d2518b3e491727fb62a17bb37.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/api/v1/reports/{report}'
*/
const show446f790d2518b3e491727fb62a17bb37Form = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show446f790d2518b3e491727fb62a17bb37.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/api/v1/reports/{report}'
*/
show446f790d2518b3e491727fb62a17bb37Form.get = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show446f790d2518b3e491727fb62a17bb37.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/api/v1/reports/{report}'
*/
show446f790d2518b3e491727fb62a17bb37Form.head = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show446f790d2518b3e491727fb62a17bb37.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show446f790d2518b3e491727fb62a17bb37.form = show446f790d2518b3e491727fb62a17bb37Form
/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/reports/{report}'
*/
const showc05ecb8dd71c12639a282bde1a1529bb = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showc05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'get',
})

showc05ecb8dd71c12639a282bde1a1529bb.definition = {
    methods: ["get","head"],
    url: '/reports/{report}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/reports/{report}'
*/
showc05ecb8dd71c12639a282bde1a1529bb.url = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showc05ecb8dd71c12639a282bde1a1529bb.definition.url
            .replace('{report}', parsedArgs.report.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/reports/{report}'
*/
showc05ecb8dd71c12639a282bde1a1529bb.get = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showc05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/reports/{report}'
*/
showc05ecb8dd71c12639a282bde1a1529bb.head = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showc05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/reports/{report}'
*/
const showc05ecb8dd71c12639a282bde1a1529bbForm = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showc05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/reports/{report}'
*/
showc05ecb8dd71c12639a282bde1a1529bbForm.get = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showc05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::show
* @see Modules/Report/app/Http/Controllers/ReportController.php:34
* @route '/reports/{report}'
*/
showc05ecb8dd71c12639a282bde1a1529bbForm.head = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showc05ecb8dd71c12639a282bde1a1529bb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showc05ecb8dd71c12639a282bde1a1529bb.form = showc05ecb8dd71c12639a282bde1a1529bbForm

export const show = {
    '/api/v1/reports/{report}': show446f790d2518b3e491727fb62a17bb37,
    '/reports/{report}': showc05ecb8dd71c12639a282bde1a1529bb,
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::update
* @see Modules/Report/app/Http/Controllers/ReportController.php:50
* @route '/api/v1/reports/{report}'
*/
const update446f790d2518b3e491727fb62a17bb37 = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update446f790d2518b3e491727fb62a17bb37.url(args, options),
    method: 'put',
})

update446f790d2518b3e491727fb62a17bb37.definition = {
    methods: ["put","patch"],
    url: '/api/v1/reports/{report}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::update
* @see Modules/Report/app/Http/Controllers/ReportController.php:50
* @route '/api/v1/reports/{report}'
*/
update446f790d2518b3e491727fb62a17bb37.url = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update446f790d2518b3e491727fb62a17bb37.definition.url
            .replace('{report}', parsedArgs.report.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::update
* @see Modules/Report/app/Http/Controllers/ReportController.php:50
* @route '/api/v1/reports/{report}'
*/
update446f790d2518b3e491727fb62a17bb37.put = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update446f790d2518b3e491727fb62a17bb37.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::update
* @see Modules/Report/app/Http/Controllers/ReportController.php:50
* @route '/api/v1/reports/{report}'
*/
update446f790d2518b3e491727fb62a17bb37.patch = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update446f790d2518b3e491727fb62a17bb37.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::update
* @see Modules/Report/app/Http/Controllers/ReportController.php:50
* @route '/api/v1/reports/{report}'
*/
const update446f790d2518b3e491727fb62a17bb37Form = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update446f790d2518b3e491727fb62a17bb37.url(args, {
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
* @route '/api/v1/reports/{report}'
*/
update446f790d2518b3e491727fb62a17bb37Form.put = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update446f790d2518b3e491727fb62a17bb37.url(args, {
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
* @route '/api/v1/reports/{report}'
*/
update446f790d2518b3e491727fb62a17bb37Form.patch = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update446f790d2518b3e491727fb62a17bb37.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update446f790d2518b3e491727fb62a17bb37.form = update446f790d2518b3e491727fb62a17bb37Form
/**
* @see \Modules\Report\Http\Controllers\ReportController::update
* @see Modules/Report/app/Http/Controllers/ReportController.php:50
* @route '/reports/{report}'
*/
const updatec05ecb8dd71c12639a282bde1a1529bb = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatec05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'put',
})

updatec05ecb8dd71c12639a282bde1a1529bb.definition = {
    methods: ["put","patch"],
    url: '/reports/{report}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::update
* @see Modules/Report/app/Http/Controllers/ReportController.php:50
* @route '/reports/{report}'
*/
updatec05ecb8dd71c12639a282bde1a1529bb.url = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updatec05ecb8dd71c12639a282bde1a1529bb.definition.url
            .replace('{report}', parsedArgs.report.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::update
* @see Modules/Report/app/Http/Controllers/ReportController.php:50
* @route '/reports/{report}'
*/
updatec05ecb8dd71c12639a282bde1a1529bb.put = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatec05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::update
* @see Modules/Report/app/Http/Controllers/ReportController.php:50
* @route '/reports/{report}'
*/
updatec05ecb8dd71c12639a282bde1a1529bb.patch = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatec05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::update
* @see Modules/Report/app/Http/Controllers/ReportController.php:50
* @route '/reports/{report}'
*/
const updatec05ecb8dd71c12639a282bde1a1529bbForm = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatec05ecb8dd71c12639a282bde1a1529bb.url(args, {
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
updatec05ecb8dd71c12639a282bde1a1529bbForm.put = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatec05ecb8dd71c12639a282bde1a1529bb.url(args, {
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
updatec05ecb8dd71c12639a282bde1a1529bbForm.patch = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatec05ecb8dd71c12639a282bde1a1529bb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatec05ecb8dd71c12639a282bde1a1529bb.form = updatec05ecb8dd71c12639a282bde1a1529bbForm

export const update = {
    '/api/v1/reports/{report}': update446f790d2518b3e491727fb62a17bb37,
    '/reports/{report}': updatec05ecb8dd71c12639a282bde1a1529bb,
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::destroy
* @see Modules/Report/app/Http/Controllers/ReportController.php:55
* @route '/api/v1/reports/{report}'
*/
const destroy446f790d2518b3e491727fb62a17bb37 = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy446f790d2518b3e491727fb62a17bb37.url(args, options),
    method: 'delete',
})

destroy446f790d2518b3e491727fb62a17bb37.definition = {
    methods: ["delete"],
    url: '/api/v1/reports/{report}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::destroy
* @see Modules/Report/app/Http/Controllers/ReportController.php:55
* @route '/api/v1/reports/{report}'
*/
destroy446f790d2518b3e491727fb62a17bb37.url = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy446f790d2518b3e491727fb62a17bb37.definition.url
            .replace('{report}', parsedArgs.report.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::destroy
* @see Modules/Report/app/Http/Controllers/ReportController.php:55
* @route '/api/v1/reports/{report}'
*/
destroy446f790d2518b3e491727fb62a17bb37.delete = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy446f790d2518b3e491727fb62a17bb37.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::destroy
* @see Modules/Report/app/Http/Controllers/ReportController.php:55
* @route '/api/v1/reports/{report}'
*/
const destroy446f790d2518b3e491727fb62a17bb37Form = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy446f790d2518b3e491727fb62a17bb37.url(args, {
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
* @route '/api/v1/reports/{report}'
*/
destroy446f790d2518b3e491727fb62a17bb37Form.delete = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy446f790d2518b3e491727fb62a17bb37.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy446f790d2518b3e491727fb62a17bb37.form = destroy446f790d2518b3e491727fb62a17bb37Form
/**
* @see \Modules\Report\Http\Controllers\ReportController::destroy
* @see Modules/Report/app/Http/Controllers/ReportController.php:55
* @route '/reports/{report}'
*/
const destroyc05ecb8dd71c12639a282bde1a1529bb = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyc05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'delete',
})

destroyc05ecb8dd71c12639a282bde1a1529bb.definition = {
    methods: ["delete"],
    url: '/reports/{report}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Report\Http\Controllers\ReportController::destroy
* @see Modules/Report/app/Http/Controllers/ReportController.php:55
* @route '/reports/{report}'
*/
destroyc05ecb8dd71c12639a282bde1a1529bb.url = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroyc05ecb8dd71c12639a282bde1a1529bb.definition.url
            .replace('{report}', parsedArgs.report.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Report\Http\Controllers\ReportController::destroy
* @see Modules/Report/app/Http/Controllers/ReportController.php:55
* @route '/reports/{report}'
*/
destroyc05ecb8dd71c12639a282bde1a1529bb.delete = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyc05ecb8dd71c12639a282bde1a1529bb.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Report\Http\Controllers\ReportController::destroy
* @see Modules/Report/app/Http/Controllers/ReportController.php:55
* @route '/reports/{report}'
*/
const destroyc05ecb8dd71c12639a282bde1a1529bbForm = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyc05ecb8dd71c12639a282bde1a1529bb.url(args, {
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
destroyc05ecb8dd71c12639a282bde1a1529bbForm.delete = (args: { report: string | number } | [report: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyc05ecb8dd71c12639a282bde1a1529bb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyc05ecb8dd71c12639a282bde1a1529bb.form = destroyc05ecb8dd71c12639a282bde1a1529bbForm

export const destroy = {
    '/api/v1/reports/{report}': destroy446f790d2518b3e491727fb62a17bb37,
    '/reports/{report}': destroyc05ecb8dd71c12639a282bde1a1529bb,
}

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

const ReportController = { index, store, show, update, destroy, create, edit }

export default ReportController