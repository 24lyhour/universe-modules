import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::scanner
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:184
* @route '/dashboard/attendances/scanner'
*/
export const scanner = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: scanner.url(options),
    method: 'get',
})

scanner.definition = {
    methods: ["get","head"],
    url: '/dashboard/attendances/scanner',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::scanner
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:184
* @route '/dashboard/attendances/scanner'
*/
scanner.url = (options?: RouteQueryOptions) => {
    return scanner.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::scanner
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:184
* @route '/dashboard/attendances/scanner'
*/
scanner.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: scanner.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::scanner
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:184
* @route '/dashboard/attendances/scanner'
*/
scanner.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: scanner.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::scanner
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:184
* @route '/dashboard/attendances/scanner'
*/
const scannerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: scanner.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::scanner
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:184
* @route '/dashboard/attendances/scanner'
*/
scannerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: scanner.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::scanner
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:184
* @route '/dashboard/attendances/scanner'
*/
scannerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: scanner.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

scanner.form = scannerForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::processScan
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:213
* @route '/dashboard/attendances/scan'
*/
export const processScan = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: processScan.url(options),
    method: 'post',
})

processScan.definition = {
    methods: ["post"],
    url: '/dashboard/attendances/scan',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::processScan
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:213
* @route '/dashboard/attendances/scan'
*/
processScan.url = (options?: RouteQueryOptions) => {
    return processScan.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::processScan
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:213
* @route '/dashboard/attendances/scan'
*/
processScan.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: processScan.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::processScan
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:213
* @route '/dashboard/attendances/scan'
*/
const processScanForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: processScan.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::processScan
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:213
* @route '/dashboard/attendances/scan'
*/
processScanForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: processScan.url(options),
    method: 'post',
})

processScan.form = processScanForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::todaySummary
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:280
* @route '/dashboard/attendances/today-summary'
*/
export const todaySummary = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: todaySummary.url(options),
    method: 'get',
})

todaySummary.definition = {
    methods: ["get","head"],
    url: '/dashboard/attendances/today-summary',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::todaySummary
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:280
* @route '/dashboard/attendances/today-summary'
*/
todaySummary.url = (options?: RouteQueryOptions) => {
    return todaySummary.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::todaySummary
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:280
* @route '/dashboard/attendances/today-summary'
*/
todaySummary.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: todaySummary.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::todaySummary
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:280
* @route '/dashboard/attendances/today-summary'
*/
todaySummary.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: todaySummary.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::todaySummary
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:280
* @route '/dashboard/attendances/today-summary'
*/
const todaySummaryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: todaySummary.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::todaySummary
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:280
* @route '/dashboard/attendances/today-summary'
*/
todaySummaryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: todaySummary.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::todaySummary
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:280
* @route '/dashboard/attendances/today-summary'
*/
todaySummaryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: todaySummary.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

todaySummary.form = todaySummaryForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::confirmBulkDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:152
* @route '/dashboard/attendances/bulk-delete'
*/
export const confirmBulkDelete = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmBulkDelete.url(options),
    method: 'get',
})

confirmBulkDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/attendances/bulk-delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::confirmBulkDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:152
* @route '/dashboard/attendances/bulk-delete'
*/
confirmBulkDelete.url = (options?: RouteQueryOptions) => {
    return confirmBulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::confirmBulkDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:152
* @route '/dashboard/attendances/bulk-delete'
*/
confirmBulkDelete.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::confirmBulkDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:152
* @route '/dashboard/attendances/bulk-delete'
*/
confirmBulkDelete.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmBulkDelete.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::confirmBulkDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:152
* @route '/dashboard/attendances/bulk-delete'
*/
const confirmBulkDeleteForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::confirmBulkDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:152
* @route '/dashboard/attendances/bulk-delete'
*/
confirmBulkDeleteForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmBulkDelete.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::confirmBulkDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:152
* @route '/dashboard/attendances/bulk-delete'
*/
confirmBulkDeleteForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmBulkDelete.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

confirmBulkDelete.form = confirmBulkDeleteForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::bulkDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:166
* @route '/dashboard/attendances/bulk-delete'
*/
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/attendances/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::bulkDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:166
* @route '/dashboard/attendances/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::bulkDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:166
* @route '/dashboard/attendances/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::bulkDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:166
* @route '/dashboard/attendances/bulk-delete'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::bulkDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:166
* @route '/dashboard/attendances/bulk-delete'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:59
* @route '/dashboard/attendances/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/attendances/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:59
* @route '/dashboard/attendances/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:59
* @route '/dashboard/attendances/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:59
* @route '/dashboard/attendances/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:59
* @route '/dashboard/attendances/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:59
* @route '/dashboard/attendances/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:59
* @route '/dashboard/attendances/create'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:89
* @route '/dashboard/attendances'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/attendances',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:89
* @route '/dashboard/attendances'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:89
* @route '/dashboard/attendances'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:89
* @route '/dashboard/attendances'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:89
* @route '/dashboard/attendances'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:42
* @route '/dashboard/attendances'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/attendances',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:42
* @route '/dashboard/attendances'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:42
* @route '/dashboard/attendances'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:42
* @route '/dashboard/attendances'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:42
* @route '/dashboard/attendances'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:42
* @route '/dashboard/attendances'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:42
* @route '/dashboard/attendances'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:101
* @route '/dashboard/attendances/{attendance}'
*/
export const show = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/attendances/{attendance}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:101
* @route '/dashboard/attendances/{attendance}'
*/
show.url = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attendance: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { attendance: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            attendance: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attendance: typeof args.attendance === 'object'
        ? args.attendance.uuid
        : args.attendance,
    }

    return show.definition.url
            .replace('{attendance}', parsedArgs.attendance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:101
* @route '/dashboard/attendances/{attendance}'
*/
show.get = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:101
* @route '/dashboard/attendances/{attendance}'
*/
show.head = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:101
* @route '/dashboard/attendances/{attendance}'
*/
const showForm = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:101
* @route '/dashboard/attendances/{attendance}'
*/
showForm.get = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:101
* @route '/dashboard/attendances/{attendance}'
*/
showForm.head = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:115
* @route '/dashboard/attendances/{attendance}/edit'
*/
export const edit = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/attendances/{attendance}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:115
* @route '/dashboard/attendances/{attendance}/edit'
*/
edit.url = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attendance: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { attendance: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            attendance: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attendance: typeof args.attendance === 'object'
        ? args.attendance.uuid
        : args.attendance,
    }

    return edit.definition.url
            .replace('{attendance}', parsedArgs.attendance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:115
* @route '/dashboard/attendances/{attendance}/edit'
*/
edit.get = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:115
* @route '/dashboard/attendances/{attendance}/edit'
*/
edit.head = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:115
* @route '/dashboard/attendances/{attendance}/edit'
*/
const editForm = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:115
* @route '/dashboard/attendances/{attendance}/edit'
*/
editForm.get = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:115
* @route '/dashboard/attendances/{attendance}/edit'
*/
editForm.head = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:128
* @route '/dashboard/attendances/{attendance}'
*/
const updatef4029296a6d0638064bffb3613f567eb = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatef4029296a6d0638064bffb3613f567eb.url(args, options),
    method: 'put',
})

updatef4029296a6d0638064bffb3613f567eb.definition = {
    methods: ["put"],
    url: '/dashboard/attendances/{attendance}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:128
* @route '/dashboard/attendances/{attendance}'
*/
updatef4029296a6d0638064bffb3613f567eb.url = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attendance: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { attendance: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            attendance: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attendance: typeof args.attendance === 'object'
        ? args.attendance.uuid
        : args.attendance,
    }

    return updatef4029296a6d0638064bffb3613f567eb.definition.url
            .replace('{attendance}', parsedArgs.attendance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:128
* @route '/dashboard/attendances/{attendance}'
*/
updatef4029296a6d0638064bffb3613f567eb.put = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatef4029296a6d0638064bffb3613f567eb.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:128
* @route '/dashboard/attendances/{attendance}'
*/
const updatef4029296a6d0638064bffb3613f567ebForm = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatef4029296a6d0638064bffb3613f567eb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:128
* @route '/dashboard/attendances/{attendance}'
*/
updatef4029296a6d0638064bffb3613f567ebForm.put = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatef4029296a6d0638064bffb3613f567eb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatef4029296a6d0638064bffb3613f567eb.form = updatef4029296a6d0638064bffb3613f567ebForm
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:128
* @route '/dashboard/attendances/{attendance}'
*/
const updatef4029296a6d0638064bffb3613f567eb = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatef4029296a6d0638064bffb3613f567eb.url(args, options),
    method: 'patch',
})

updatef4029296a6d0638064bffb3613f567eb.definition = {
    methods: ["patch"],
    url: '/dashboard/attendances/{attendance}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:128
* @route '/dashboard/attendances/{attendance}'
*/
updatef4029296a6d0638064bffb3613f567eb.url = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attendance: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { attendance: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            attendance: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attendance: typeof args.attendance === 'object'
        ? args.attendance.uuid
        : args.attendance,
    }

    return updatef4029296a6d0638064bffb3613f567eb.definition.url
            .replace('{attendance}', parsedArgs.attendance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:128
* @route '/dashboard/attendances/{attendance}'
*/
updatef4029296a6d0638064bffb3613f567eb.patch = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatef4029296a6d0638064bffb3613f567eb.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:128
* @route '/dashboard/attendances/{attendance}'
*/
const updatef4029296a6d0638064bffb3613f567ebForm = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatef4029296a6d0638064bffb3613f567eb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:128
* @route '/dashboard/attendances/{attendance}'
*/
updatef4029296a6d0638064bffb3613f567ebForm.patch = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatef4029296a6d0638064bffb3613f567eb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatef4029296a6d0638064bffb3613f567eb.form = updatef4029296a6d0638064bffb3613f567ebForm

export const update = {
    '/dashboard/attendances/{attendance}': updatef4029296a6d0638064bffb3613f567eb,
    '/dashboard/attendances/{attendance}': updatef4029296a6d0638064bffb3613f567eb,
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:140
* @route '/dashboard/attendances/{attendance}'
*/
export const destroy = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/attendances/{attendance}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:140
* @route '/dashboard/attendances/{attendance}'
*/
destroy.url = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attendance: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { attendance: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            attendance: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attendance: typeof args.attendance === 'object'
        ? args.attendance.uuid
        : args.attendance,
    }

    return destroy.definition.url
            .replace('{attendance}', parsedArgs.attendance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:140
* @route '/dashboard/attendances/{attendance}'
*/
destroy.delete = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:140
* @route '/dashboard/attendances/{attendance}'
*/
const destroyForm = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:140
* @route '/dashboard/attendances/{attendance}'
*/
destroyForm.delete = (args: { attendance: string | { uuid: string } } | [attendance: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::generateEmployeeQr
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:241
* @route '/dashboard/employees/{employee}/qr-code'
*/
export const generateEmployeeQr = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generateEmployeeQr.url(args, options),
    method: 'get',
})

generateEmployeeQr.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees/{employee}/qr-code',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::generateEmployeeQr
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:241
* @route '/dashboard/employees/{employee}/qr-code'
*/
generateEmployeeQr.url = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employee: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employee: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee: typeof args.employee === 'object'
        ? args.employee.uuid
        : args.employee,
    }

    return generateEmployeeQr.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::generateEmployeeQr
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:241
* @route '/dashboard/employees/{employee}/qr-code'
*/
generateEmployeeQr.get = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generateEmployeeQr.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::generateEmployeeQr
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:241
* @route '/dashboard/employees/{employee}/qr-code'
*/
generateEmployeeQr.head = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: generateEmployeeQr.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::generateEmployeeQr
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:241
* @route '/dashboard/employees/{employee}/qr-code'
*/
const generateEmployeeQrForm = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generateEmployeeQr.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::generateEmployeeQr
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:241
* @route '/dashboard/employees/{employee}/qr-code'
*/
generateEmployeeQrForm.get = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generateEmployeeQr.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::generateEmployeeQr
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:241
* @route '/dashboard/employees/{employee}/qr-code'
*/
generateEmployeeQrForm.head = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: generateEmployeeQr.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

generateEmployeeQr.form = generateEmployeeQrForm

const AttendanceController = { scanner, processScan, todaySummary, confirmBulkDelete, bulkDelete, create, store, index, show, edit, update, destroy, generateEmployeeQr }

export default AttendanceController