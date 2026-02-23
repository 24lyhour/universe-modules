import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::scanner
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:147
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:147
* @route '/dashboard/attendances/scanner'
*/
scanner.url = (options?: RouteQueryOptions) => {
    return scanner.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::scanner
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:147
* @route '/dashboard/attendances/scanner'
*/
scanner.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: scanner.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::scanner
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:147
* @route '/dashboard/attendances/scanner'
*/
scanner.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: scanner.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::scanner
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:147
* @route '/dashboard/attendances/scanner'
*/
const scannerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: scanner.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::scanner
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:147
* @route '/dashboard/attendances/scanner'
*/
scannerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: scanner.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::scanner
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:147
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::scan
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:176
* @route '/dashboard/attendances/scan'
*/
export const scan = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: scan.url(options),
    method: 'post',
})

scan.definition = {
    methods: ["post"],
    url: '/dashboard/attendances/scan',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::scan
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:176
* @route '/dashboard/attendances/scan'
*/
scan.url = (options?: RouteQueryOptions) => {
    return scan.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::scan
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:176
* @route '/dashboard/attendances/scan'
*/
scan.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: scan.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::scan
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:176
* @route '/dashboard/attendances/scan'
*/
const scanForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: scan.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::scan
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:176
* @route '/dashboard/attendances/scan'
*/
scanForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: scan.url(options),
    method: 'post',
})

scan.form = scanForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::todaySummary
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:243
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:243
* @route '/dashboard/attendances/today-summary'
*/
todaySummary.url = (options?: RouteQueryOptions) => {
    return todaySummary.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::todaySummary
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:243
* @route '/dashboard/attendances/today-summary'
*/
todaySummary.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: todaySummary.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::todaySummary
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:243
* @route '/dashboard/attendances/today-summary'
*/
todaySummary.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: todaySummary.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::todaySummary
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:243
* @route '/dashboard/attendances/today-summary'
*/
const todaySummaryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: todaySummary.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::todaySummary
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:243
* @route '/dashboard/attendances/today-summary'
*/
todaySummaryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: todaySummary.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::todaySummary
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:243
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:54
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:54
* @route '/dashboard/attendances/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:54
* @route '/dashboard/attendances/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:54
* @route '/dashboard/attendances/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:54
* @route '/dashboard/attendances/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:54
* @route '/dashboard/attendances/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:54
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:84
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:84
* @route '/dashboard/attendances'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:84
* @route '/dashboard/attendances'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:84
* @route '/dashboard/attendances'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:84
* @route '/dashboard/attendances'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:37
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:37
* @route '/dashboard/attendances'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:37
* @route '/dashboard/attendances'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:37
* @route '/dashboard/attendances'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:37
* @route '/dashboard/attendances'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:37
* @route '/dashboard/attendances'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:37
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:96
* @route '/dashboard/attendances/{attendance}'
*/
export const show = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/attendances/{attendance}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:96
* @route '/dashboard/attendances/{attendance}'
*/
show.url = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attendance: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { attendance: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            attendance: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attendance: typeof args.attendance === 'object'
        ? args.attendance.id
        : args.attendance,
    }

    return show.definition.url
            .replace('{attendance}', parsedArgs.attendance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:96
* @route '/dashboard/attendances/{attendance}'
*/
show.get = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:96
* @route '/dashboard/attendances/{attendance}'
*/
show.head = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:96
* @route '/dashboard/attendances/{attendance}'
*/
const showForm = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:96
* @route '/dashboard/attendances/{attendance}'
*/
showForm.get = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:96
* @route '/dashboard/attendances/{attendance}'
*/
showForm.head = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:110
* @route '/dashboard/attendances/{attendance}/edit'
*/
export const edit = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/attendances/{attendance}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:110
* @route '/dashboard/attendances/{attendance}/edit'
*/
edit.url = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attendance: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { attendance: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            attendance: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attendance: typeof args.attendance === 'object'
        ? args.attendance.id
        : args.attendance,
    }

    return edit.definition.url
            .replace('{attendance}', parsedArgs.attendance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:110
* @route '/dashboard/attendances/{attendance}/edit'
*/
edit.get = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:110
* @route '/dashboard/attendances/{attendance}/edit'
*/
edit.head = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:110
* @route '/dashboard/attendances/{attendance}/edit'
*/
const editForm = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:110
* @route '/dashboard/attendances/{attendance}/edit'
*/
editForm.get = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:110
* @route '/dashboard/attendances/{attendance}/edit'
*/
editForm.head = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:123
* @route '/dashboard/attendances/{attendance}'
*/
export const update = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/attendances/{attendance}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:123
* @route '/dashboard/attendances/{attendance}'
*/
update.url = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attendance: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { attendance: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            attendance: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attendance: typeof args.attendance === 'object'
        ? args.attendance.id
        : args.attendance,
    }

    return update.definition.url
            .replace('{attendance}', parsedArgs.attendance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:123
* @route '/dashboard/attendances/{attendance}'
*/
update.put = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:123
* @route '/dashboard/attendances/{attendance}'
*/
const updateForm = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:123
* @route '/dashboard/attendances/{attendance}'
*/
updateForm.put = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:135
* @route '/dashboard/attendances/{attendance}'
*/
export const destroy = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/attendances/{attendance}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:135
* @route '/dashboard/attendances/{attendance}'
*/
destroy.url = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attendance: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { attendance: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            attendance: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attendance: typeof args.attendance === 'object'
        ? args.attendance.id
        : args.attendance,
    }

    return destroy.definition.url
            .replace('{attendance}', parsedArgs.attendance.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:135
* @route '/dashboard/attendances/{attendance}'
*/
destroy.delete = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:135
* @route '/dashboard/attendances/{attendance}'
*/
const destroyForm = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:135
* @route '/dashboard/attendances/{attendance}'
*/
destroyForm.delete = (args: { attendance: number | { id: number } } | [attendance: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const attendances = {
    scanner: Object.assign(scanner, scanner),
    scan: Object.assign(scan, scan),
    todaySummary: Object.assign(todaySummary, todaySummary),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    index: Object.assign(index, index),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default attendances