import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
import importMethod7367d2 from './import'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::departments
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:160
* @route '/dashboard/employees/departments'
*/
export const departments = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: departments.url(options),
    method: 'get',
})

departments.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees/departments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::departments
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:160
* @route '/dashboard/employees/departments'
*/
departments.url = (options?: RouteQueryOptions) => {
    return departments.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::departments
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:160
* @route '/dashboard/employees/departments'
*/
departments.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: departments.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::departments
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:160
* @route '/dashboard/employees/departments'
*/
departments.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: departments.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::exportMethod
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:221
* @route '/dashboard/employees/export'
*/
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::exportMethod
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:221
* @route '/dashboard/employees/export'
*/
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::exportMethod
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:221
* @route '/dashboard/employees/export'
*/
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::exportMethod
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:221
* @route '/dashboard/employees/export'
*/
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::importMethod
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:233
* @route '/dashboard/employees/import'
*/
export const importMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: importMethod.url(options),
    method: 'get',
})

importMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees/import',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::importMethod
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:233
* @route '/dashboard/employees/import'
*/
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::importMethod
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:233
* @route '/dashboard/employees/import'
*/
importMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: importMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::importMethod
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:233
* @route '/dashboard/employees/import'
*/
importMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: importMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::template
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:269
* @route '/dashboard/employees/template'
*/
export const template = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

template.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees/template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::template
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:269
* @route '/dashboard/employees/template'
*/
template.url = (options?: RouteQueryOptions) => {
    return template.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::template
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:269
* @route '/dashboard/employees/template'
*/
template.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::template
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:269
* @route '/dashboard/employees/template'
*/
template.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: template.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:63
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:63
* @route '/dashboard/employees/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:63
* @route '/dashboard/employees/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:63
* @route '/dashboard/employees/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:77
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:77
* @route '/dashboard/employees'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:77
* @route '/dashboard/employees'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:50
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:50
* @route '/dashboard/employees'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:50
* @route '/dashboard/employees'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:50
* @route '/dashboard/employees'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:89
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:89
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:89
* @route '/dashboard/employees/{employee}'
*/
show.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:89
* @route '/dashboard/employees/{employee}'
*/
show.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::qrBadge
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:180
* @route '/dashboard/employees/{employee}/qr-badge'
*/
export const qrBadge = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qrBadge.url(args, options),
    method: 'get',
})

qrBadge.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees/{employee}/qr-badge',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::qrBadge
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:180
* @route '/dashboard/employees/{employee}/qr-badge'
*/
qrBadge.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return qrBadge.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::qrBadge
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:180
* @route '/dashboard/employees/{employee}/qr-badge'
*/
qrBadge.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qrBadge.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::qrBadge
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:180
* @route '/dashboard/employees/{employee}/qr-badge'
*/
qrBadge.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: qrBadge.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:99
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:99
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:99
* @route '/dashboard/employees/{employee}/edit'
*/
edit.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:99
* @route '/dashboard/employees/{employee}/edit'
*/
edit.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:109
* @route '/dashboard/employees/{employee}'
*/
export const update = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/employees/{employee}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:109
* @route '/dashboard/employees/{employee}'
*/
update.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:109
* @route '/dashboard/employees/{employee}'
*/
update.put = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::toggleStatus
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:146
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:146
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:146
* @route '/dashboard/employees/{employee}/toggle-status'
*/
toggleStatus.put = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::regenerateQr
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:209
* @route '/dashboard/employees/{employee}/regenerate-qr'
*/
export const regenerateQr = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: regenerateQr.url(args, options),
    method: 'post',
})

regenerateQr.definition = {
    methods: ["post"],
    url: '/dashboard/employees/{employee}/regenerate-qr',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::regenerateQr
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:209
* @route '/dashboard/employees/{employee}/regenerate-qr'
*/
regenerateQr.url = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return regenerateQr.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::regenerateQr
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:209
* @route '/dashboard/employees/{employee}/regenerate-qr'
*/
regenerateQr.post = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: regenerateQr.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:121
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:121
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:121
* @route '/dashboard/employees/{employee}/delete'
*/
confirmDelete.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:121
* @route '/dashboard/employees/{employee}/delete'
*/
confirmDelete.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:134
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:134
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
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeController.php:134
* @route '/dashboard/employees/{employee}'
*/
destroy.delete = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::qrCode
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:204
* @route '/dashboard/employees/{employee}/qr-code'
*/
export const qrCode = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qrCode.url(args, options),
    method: 'get',
})

qrCode.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees/{employee}/qr-code',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::qrCode
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:204
* @route '/dashboard/employees/{employee}/qr-code'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::qrCode
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:204
* @route '/dashboard/employees/{employee}/qr-code'
*/
qrCode.get = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qrCode.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\AttendanceController::qrCode
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/AttendanceController.php:204
* @route '/dashboard/employees/{employee}/qr-code'
*/
qrCode.head = (args: { employee: number | { id: number } } | [employee: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: qrCode.url(args, options),
    method: 'head',
})

const employees = {
    departments: Object.assign(departments, departments),
    export: Object.assign(exportMethod, exportMethod),
    import: Object.assign(importMethod, importMethod7367d2),
    template: Object.assign(template, template),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    index: Object.assign(index, index),
    show: Object.assign(show, show),
    qrBadge: Object.assign(qrBadge, qrBadge),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    toggleStatus: Object.assign(toggleStatus, toggleStatus),
    regenerateQr: Object.assign(regenerateQr, regenerateQr),
    confirmDelete: Object.assign(confirmDelete, confirmDelete),
    destroy: Object.assign(destroy, destroy),
    qrCode: Object.assign(qrCode, qrCode),
}

export default employees