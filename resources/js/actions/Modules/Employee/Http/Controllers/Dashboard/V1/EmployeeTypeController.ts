import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:51
* @route '/dashboard/employee-types/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/employee-types/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:51
* @route '/dashboard/employee-types/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:51
* @route '/dashboard/employee-types/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:51
* @route '/dashboard/employee-types/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:51
* @route '/dashboard/employee-types/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:51
* @route '/dashboard/employee-types/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:51
* @route '/dashboard/employee-types/create'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:60
* @route '/dashboard/employee-types'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/employee-types',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:60
* @route '/dashboard/employee-types'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:60
* @route '/dashboard/employee-types'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:60
* @route '/dashboard/employee-types'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:60
* @route '/dashboard/employee-types'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:38
* @route '/dashboard/employee-types'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/employee-types',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:38
* @route '/dashboard/employee-types'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:38
* @route '/dashboard/employee-types'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:38
* @route '/dashboard/employee-types'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:38
* @route '/dashboard/employee-types'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:38
* @route '/dashboard/employee-types'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:38
* @route '/dashboard/employee-types'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:72
* @route '/dashboard/employee-types/{employee_type}'
*/
export const show = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/employee-types/{employee_type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:72
* @route '/dashboard/employee-types/{employee_type}'
*/
show.url = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            employee_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee_type: args.employee_type,
    }

    return show.definition.url
            .replace('{employee_type}', parsedArgs.employee_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:72
* @route '/dashboard/employee-types/{employee_type}'
*/
show.get = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:72
* @route '/dashboard/employee-types/{employee_type}'
*/
show.head = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:72
* @route '/dashboard/employee-types/{employee_type}'
*/
const showForm = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:72
* @route '/dashboard/employee-types/{employee_type}'
*/
showForm.get = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:72
* @route '/dashboard/employee-types/{employee_type}'
*/
showForm.head = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:82
* @route '/dashboard/employee-types/{employee_type}/edit'
*/
export const edit = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/employee-types/{employee_type}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:82
* @route '/dashboard/employee-types/{employee_type}/edit'
*/
edit.url = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            employee_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee_type: args.employee_type,
    }

    return edit.definition.url
            .replace('{employee_type}', parsedArgs.employee_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:82
* @route '/dashboard/employee-types/{employee_type}/edit'
*/
edit.get = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:82
* @route '/dashboard/employee-types/{employee_type}/edit'
*/
edit.head = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:82
* @route '/dashboard/employee-types/{employee_type}/edit'
*/
const editForm = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:82
* @route '/dashboard/employee-types/{employee_type}/edit'
*/
editForm.get = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:82
* @route '/dashboard/employee-types/{employee_type}/edit'
*/
editForm.head = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:93
* @route '/dashboard/employee-types/{employee_type}'
*/
const update1ec8d453beb44da62346d3a284db4f47 = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update1ec8d453beb44da62346d3a284db4f47.url(args, options),
    method: 'put',
})

update1ec8d453beb44da62346d3a284db4f47.definition = {
    methods: ["put"],
    url: '/dashboard/employee-types/{employee_type}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:93
* @route '/dashboard/employee-types/{employee_type}'
*/
update1ec8d453beb44da62346d3a284db4f47.url = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            employee_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee_type: args.employee_type,
    }

    return update1ec8d453beb44da62346d3a284db4f47.definition.url
            .replace('{employee_type}', parsedArgs.employee_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:93
* @route '/dashboard/employee-types/{employee_type}'
*/
update1ec8d453beb44da62346d3a284db4f47.put = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update1ec8d453beb44da62346d3a284db4f47.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:93
* @route '/dashboard/employee-types/{employee_type}'
*/
const update1ec8d453beb44da62346d3a284db4f47Form = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update1ec8d453beb44da62346d3a284db4f47.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:93
* @route '/dashboard/employee-types/{employee_type}'
*/
update1ec8d453beb44da62346d3a284db4f47Form.put = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update1ec8d453beb44da62346d3a284db4f47.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update1ec8d453beb44da62346d3a284db4f47.form = update1ec8d453beb44da62346d3a284db4f47Form
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:93
* @route '/dashboard/employee-types/{employee_type}'
*/
const update1ec8d453beb44da62346d3a284db4f47 = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update1ec8d453beb44da62346d3a284db4f47.url(args, options),
    method: 'patch',
})

update1ec8d453beb44da62346d3a284db4f47.definition = {
    methods: ["patch"],
    url: '/dashboard/employee-types/{employee_type}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:93
* @route '/dashboard/employee-types/{employee_type}'
*/
update1ec8d453beb44da62346d3a284db4f47.url = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            employee_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee_type: args.employee_type,
    }

    return update1ec8d453beb44da62346d3a284db4f47.definition.url
            .replace('{employee_type}', parsedArgs.employee_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:93
* @route '/dashboard/employee-types/{employee_type}'
*/
update1ec8d453beb44da62346d3a284db4f47.patch = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update1ec8d453beb44da62346d3a284db4f47.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:93
* @route '/dashboard/employee-types/{employee_type}'
*/
const update1ec8d453beb44da62346d3a284db4f47Form = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update1ec8d453beb44da62346d3a284db4f47.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:93
* @route '/dashboard/employee-types/{employee_type}'
*/
update1ec8d453beb44da62346d3a284db4f47Form.patch = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update1ec8d453beb44da62346d3a284db4f47.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update1ec8d453beb44da62346d3a284db4f47.form = update1ec8d453beb44da62346d3a284db4f47Form

export const update = {
    '/dashboard/employee-types/{employee_type}': update1ec8d453beb44da62346d3a284db4f47,
    '/dashboard/employee-types/{employee_type}': update1ec8d453beb44da62346d3a284db4f47,
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::toggleStatus
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:129
* @route '/dashboard/employee-types/{employee_type}/toggle-status'
*/
export const toggleStatus = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

toggleStatus.definition = {
    methods: ["put"],
    url: '/dashboard/employee-types/{employee_type}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::toggleStatus
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:129
* @route '/dashboard/employee-types/{employee_type}/toggle-status'
*/
toggleStatus.url = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            employee_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee_type: args.employee_type,
    }

    return toggleStatus.definition.url
            .replace('{employee_type}', parsedArgs.employee_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::toggleStatus
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:129
* @route '/dashboard/employee-types/{employee_type}/toggle-status'
*/
toggleStatus.put = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::toggleStatus
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:129
* @route '/dashboard/employee-types/{employee_type}/toggle-status'
*/
const toggleStatusForm = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::toggleStatus
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:129
* @route '/dashboard/employee-types/{employee_type}/toggle-status'
*/
toggleStatusForm.put = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:105
* @route '/dashboard/employee-types/{employee_type}/delete'
*/
export const confirmDelete = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/employee-types/{employee_type}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:105
* @route '/dashboard/employee-types/{employee_type}/delete'
*/
confirmDelete.url = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            employee_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee_type: args.employee_type,
    }

    return confirmDelete.definition.url
            .replace('{employee_type}', parsedArgs.employee_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:105
* @route '/dashboard/employee-types/{employee_type}/delete'
*/
confirmDelete.get = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:105
* @route '/dashboard/employee-types/{employee_type}/delete'
*/
confirmDelete.head = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:105
* @route '/dashboard/employee-types/{employee_type}/delete'
*/
const confirmDeleteForm = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:105
* @route '/dashboard/employee-types/{employee_type}/delete'
*/
confirmDeleteForm.get = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:105
* @route '/dashboard/employee-types/{employee_type}/delete'
*/
confirmDeleteForm.head = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:117
* @route '/dashboard/employee-types/{employee_type}'
*/
export const destroy = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/employee-types/{employee_type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:117
* @route '/dashboard/employee-types/{employee_type}'
*/
destroy.url = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            employee_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee_type: args.employee_type,
    }

    return destroy.definition.url
            .replace('{employee_type}', parsedArgs.employee_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:117
* @route '/dashboard/employee-types/{employee_type}'
*/
destroy.delete = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:117
* @route '/dashboard/employee-types/{employee_type}'
*/
const destroyForm = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTypeController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTypeController.php:117
* @route '/dashboard/employee-types/{employee_type}'
*/
destroyForm.delete = (args: { employee_type: string | number } | [employee_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const EmployeeTypeController = { create, store, index, show, edit, update, toggleStatus, confirmDelete, destroy }

export default EmployeeTypeController