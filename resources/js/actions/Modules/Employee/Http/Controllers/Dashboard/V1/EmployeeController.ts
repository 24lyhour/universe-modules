import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::getDepartments
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:155
* @route '/dashboard/employees/departments'
*/
export const getDepartments = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDepartments.url(options),
    method: 'get',
})

getDepartments.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees/departments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::getDepartments
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:155
* @route '/dashboard/employees/departments'
*/
getDepartments.url = (options?: RouteQueryOptions) => {
    return getDepartments.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::getDepartments
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:155
* @route '/dashboard/employees/departments'
*/
getDepartments.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDepartments.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::getDepartments
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:155
* @route '/dashboard/employees/departments'
*/
getDepartments.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getDepartments.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::getDepartments
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:155
* @route '/dashboard/employees/departments'
*/
const getDepartmentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getDepartments.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::getDepartments
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:155
* @route '/dashboard/employees/departments'
*/
getDepartmentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getDepartments.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::getDepartments
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:155
* @route '/dashboard/employees/departments'
*/
getDepartmentsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getDepartments.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getDepartments.form = getDepartmentsForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:58
* @route '/dashboard/employees/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:58
* @route '/dashboard/employees/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:58
* @route '/dashboard/employees/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:58
* @route '/dashboard/employees/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:58
* @route '/dashboard/employees/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:58
* @route '/dashboard/employees/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:58
* @route '/dashboard/employees/create'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:72
* @route '/dashboard/employees'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/employees',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:72
* @route '/dashboard/employees'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:72
* @route '/dashboard/employees'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:72
* @route '/dashboard/employees'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:72
* @route '/dashboard/employees'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:45
* @route '/dashboard/employees'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:45
* @route '/dashboard/employees'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:45
* @route '/dashboard/employees'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:45
* @route '/dashboard/employees'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:45
* @route '/dashboard/employees'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:45
* @route '/dashboard/employees'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:45
* @route '/dashboard/employees'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:84
* @route '/dashboard/employees/{employee}'
*/
export const show = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees/{employee}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:84
* @route '/dashboard/employees/{employee}'
*/
show.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { employee: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            employee: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee: typeof args.employee === 'object'
        ? args.employee.id
        : args.employee,
    }

    return show.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:84
* @route '/dashboard/employees/{employee}'
*/
show.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:84
* @route '/dashboard/employees/{employee}'
*/
show.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:84
* @route '/dashboard/employees/{employee}'
*/
const showForm = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:84
* @route '/dashboard/employees/{employee}'
*/
showForm.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:84
* @route '/dashboard/employees/{employee}'
*/
showForm.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::qrCode
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:175
* @route '/dashboard/employees/{employee}/qr-badge'
*/
export const qrCode = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qrCode.url(args, options),
    method: 'get',
})

qrCode.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees/{employee}/qr-badge',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::qrCode
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:175
* @route '/dashboard/employees/{employee}/qr-badge'
*/
qrCode.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { employee: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            employee: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee: typeof args.employee === 'object'
        ? args.employee.id
        : args.employee,
    }

    return qrCode.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::qrCode
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:175
* @route '/dashboard/employees/{employee}/qr-badge'
*/
qrCode.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qrCode.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::qrCode
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:175
* @route '/dashboard/employees/{employee}/qr-badge'
*/
qrCode.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: qrCode.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::qrCode
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:175
* @route '/dashboard/employees/{employee}/qr-badge'
*/
const qrCodeForm = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: qrCode.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::qrCode
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:175
* @route '/dashboard/employees/{employee}/qr-badge'
*/
qrCodeForm.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: qrCode.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::qrCode
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:175
* @route '/dashboard/employees/{employee}/qr-badge'
*/
qrCodeForm.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: qrCode.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

qrCode.form = qrCodeForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:94
* @route '/dashboard/employees/{employee}/edit'
*/
export const edit = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees/{employee}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:94
* @route '/dashboard/employees/{employee}/edit'
*/
edit.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { employee: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            employee: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee: typeof args.employee === 'object'
        ? args.employee.id
        : args.employee,
    }

    return edit.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:94
* @route '/dashboard/employees/{employee}/edit'
*/
edit.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:94
* @route '/dashboard/employees/{employee}/edit'
*/
edit.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:94
* @route '/dashboard/employees/{employee}/edit'
*/
const editForm = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:94
* @route '/dashboard/employees/{employee}/edit'
*/
editForm.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:94
* @route '/dashboard/employees/{employee}/edit'
*/
editForm.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:104
* @route '/dashboard/employees/{employee}'
*/
const update9d8b4d91480e0e0e4eff245473933023 = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update9d8b4d91480e0e0e4eff245473933023.url(args, options),
    method: 'put',
})

update9d8b4d91480e0e0e4eff245473933023.definition = {
    methods: ["put"],
    url: '/dashboard/employees/{employee}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:104
* @route '/dashboard/employees/{employee}'
*/
update9d8b4d91480e0e0e4eff245473933023.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { employee: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            employee: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee: typeof args.employee === 'object'
        ? args.employee.id
        : args.employee,
    }

    return update9d8b4d91480e0e0e4eff245473933023.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:104
* @route '/dashboard/employees/{employee}'
*/
update9d8b4d91480e0e0e4eff245473933023.put = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update9d8b4d91480e0e0e4eff245473933023.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:104
* @route '/dashboard/employees/{employee}'
*/
const update9d8b4d91480e0e0e4eff245473933023Form = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update9d8b4d91480e0e0e4eff245473933023.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:104
* @route '/dashboard/employees/{employee}'
*/
update9d8b4d91480e0e0e4eff245473933023Form.put = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update9d8b4d91480e0e0e4eff245473933023.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update9d8b4d91480e0e0e4eff245473933023.form = update9d8b4d91480e0e0e4eff245473933023Form
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:104
* @route '/dashboard/employees/{employee}'
*/
const update9d8b4d91480e0e0e4eff245473933023 = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update9d8b4d91480e0e0e4eff245473933023.url(args, options),
    method: 'patch',
})

update9d8b4d91480e0e0e4eff245473933023.definition = {
    methods: ["patch"],
    url: '/dashboard/employees/{employee}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:104
* @route '/dashboard/employees/{employee}'
*/
update9d8b4d91480e0e0e4eff245473933023.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { employee: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            employee: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee: typeof args.employee === 'object'
        ? args.employee.id
        : args.employee,
    }

    return update9d8b4d91480e0e0e4eff245473933023.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:104
* @route '/dashboard/employees/{employee}'
*/
update9d8b4d91480e0e0e4eff245473933023.patch = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update9d8b4d91480e0e0e4eff245473933023.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:104
* @route '/dashboard/employees/{employee}'
*/
const update9d8b4d91480e0e0e4eff245473933023Form = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update9d8b4d91480e0e0e4eff245473933023.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:104
* @route '/dashboard/employees/{employee}'
*/
update9d8b4d91480e0e0e4eff245473933023Form.patch = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update9d8b4d91480e0e0e4eff245473933023.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update9d8b4d91480e0e0e4eff245473933023.form = update9d8b4d91480e0e0e4eff245473933023Form

export const update = {
    '/dashboard/employees/{employee}': update9d8b4d91480e0e0e4eff245473933023,
    '/dashboard/employees/{employee}': update9d8b4d91480e0e0e4eff245473933023,
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::toggleStatus
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:141
* @route '/dashboard/employees/{employee}/toggle-status'
*/
export const toggleStatus = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

toggleStatus.definition = {
    methods: ["put"],
    url: '/dashboard/employees/{employee}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::toggleStatus
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:141
* @route '/dashboard/employees/{employee}/toggle-status'
*/
toggleStatus.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { employee: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            employee: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee: typeof args.employee === 'object'
        ? args.employee.id
        : args.employee,
    }

    return toggleStatus.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::toggleStatus
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:141
* @route '/dashboard/employees/{employee}/toggle-status'
*/
toggleStatus.put = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::toggleStatus
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:141
* @route '/dashboard/employees/{employee}/toggle-status'
*/
const toggleStatusForm = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::toggleStatus
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:141
* @route '/dashboard/employees/{employee}/toggle-status'
*/
toggleStatusForm.put = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::regenerateQrCode
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:204
* @route '/dashboard/employees/{employee}/regenerate-qr'
*/
export const regenerateQrCode = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: regenerateQrCode.url(args, options),
    method: 'post',
})

regenerateQrCode.definition = {
    methods: ["post"],
    url: '/dashboard/employees/{employee}/regenerate-qr',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::regenerateQrCode
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:204
* @route '/dashboard/employees/{employee}/regenerate-qr'
*/
regenerateQrCode.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { employee: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            employee: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee: typeof args.employee === 'object'
        ? args.employee.id
        : args.employee,
    }

    return regenerateQrCode.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::regenerateQrCode
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:204
* @route '/dashboard/employees/{employee}/regenerate-qr'
*/
regenerateQrCode.post = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: regenerateQrCode.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::regenerateQrCode
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:204
* @route '/dashboard/employees/{employee}/regenerate-qr'
*/
const regenerateQrCodeForm = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: regenerateQrCode.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::regenerateQrCode
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:204
* @route '/dashboard/employees/{employee}/regenerate-qr'
*/
regenerateQrCodeForm.post = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: regenerateQrCode.url(args, options),
    method: 'post',
})

regenerateQrCode.form = regenerateQrCodeForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:116
* @route '/dashboard/employees/{employee}/delete'
*/
export const confirmDelete = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees/{employee}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:116
* @route '/dashboard/employees/{employee}/delete'
*/
confirmDelete.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { employee: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            employee: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee: typeof args.employee === 'object'
        ? args.employee.id
        : args.employee,
    }

    return confirmDelete.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:116
* @route '/dashboard/employees/{employee}/delete'
*/
confirmDelete.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:116
* @route '/dashboard/employees/{employee}/delete'
*/
confirmDelete.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:116
* @route '/dashboard/employees/{employee}/delete'
*/
const confirmDeleteForm = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:116
* @route '/dashboard/employees/{employee}/delete'
*/
confirmDeleteForm.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:116
* @route '/dashboard/employees/{employee}/delete'
*/
confirmDeleteForm.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:129
* @route '/dashboard/employees/{employee}'
*/
export const destroy = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/employees/{employee}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:129
* @route '/dashboard/employees/{employee}'
*/
destroy.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { employee: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            employee: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee: typeof args.employee === 'object'
        ? args.employee.id
        : args.employee,
    }

    return destroy.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:129
* @route '/dashboard/employees/{employee}'
*/
destroy.delete = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:129
* @route '/dashboard/employees/{employee}'
*/
const destroyForm = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:129
* @route '/dashboard/employees/{employee}'
*/
destroyForm.delete = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const EmployeeController = { getDepartments, create, store, index, show, qrCode, edit, update, toggleStatus, regenerateQrCode, confirmDelete, destroy }

export default EmployeeController