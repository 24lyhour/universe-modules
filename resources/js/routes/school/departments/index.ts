import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
import importMethod7367d2 from './import'
import trash from './trash'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:205
* @route '/dashboard/departments/{department}/qr-code'
*/
export const qrCode = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qrCode.url(args, options),
    method: 'get',
})

qrCode.definition = {
    methods: ["get","head"],
    url: '/dashboard/departments/{department}/qr-code',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:205
* @route '/dashboard/departments/{department}/qr-code'
*/
qrCode.url = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { department: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            department: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        department: typeof args.department === 'object'
        ? args.department.uuid
        : args.department,
    }

    return qrCode.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:205
* @route '/dashboard/departments/{department}/qr-code'
*/
qrCode.get = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qrCode.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:205
* @route '/dashboard/departments/{department}/qr-code'
*/
qrCode.head = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: qrCode.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:38
* @route '/dashboard/departments/export'
*/
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/departments/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:38
* @route '/dashboard/departments/export'
*/
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:38
* @route '/dashboard/departments/export'
*/
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::exportMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:38
* @route '/dashboard/departments/export'
*/
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:45
* @route '/dashboard/departments/import'
*/
export const importMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: importMethod.url(options),
    method: 'get',
})

importMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/departments/import',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:45
* @route '/dashboard/departments/import'
*/
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:45
* @route '/dashboard/departments/import'
*/
importMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: importMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::importMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:45
* @route '/dashboard/departments/import'
*/
importMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: importMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:62
* @route '/dashboard/departments/template'
*/
export const template = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

template.definition = {
    methods: ["get","head"],
    url: '/dashboard/departments/template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:62
* @route '/dashboard/departments/template'
*/
template.url = (options?: RouteQueryOptions) => {
    return template.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:62
* @route '/dashboard/departments/template'
*/
template.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolImportExportController::template
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolImportExportController.php:62
* @route '/dashboard/departments/template'
*/
template.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: template.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::bulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:153
* @route '/dashboard/departments/bulk-delete'
*/
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/departments/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::bulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:153
* @route '/dashboard/departments/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::bulkDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:153
* @route '/dashboard/departments/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:57
* @route '/dashboard/departments/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/departments/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:57
* @route '/dashboard/departments/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:57
* @route '/dashboard/departments/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:57
* @route '/dashboard/departments/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:68
* @route '/dashboard/departments'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/departments',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:68
* @route '/dashboard/departments'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:68
* @route '/dashboard/departments'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:44
* @route '/dashboard/departments'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/departments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:44
* @route '/dashboard/departments'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:44
* @route '/dashboard/departments'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:44
* @route '/dashboard/departments'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::api
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:185
* @route '/dashboard/api/departments'
*/
export const api = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: api.url(options),
    method: 'get',
})

api.definition = {
    methods: ["get","head"],
    url: '/dashboard/api/departments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::api
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:185
* @route '/dashboard/api/departments'
*/
api.url = (options?: RouteQueryOptions) => {
    return api.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::api
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:185
* @route '/dashboard/api/departments'
*/
api.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: api.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::api
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:185
* @route '/dashboard/api/departments'
*/
api.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: api.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:80
* @route '/dashboard/departments/{department}'
*/
export const show = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/departments/{department}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:80
* @route '/dashboard/departments/{department}'
*/
show.url = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { department: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            department: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        department: typeof args.department === 'object'
        ? args.department.uuid
        : args.department,
    }

    return show.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:80
* @route '/dashboard/departments/{department}'
*/
show.get = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:80
* @route '/dashboard/departments/{department}'
*/
show.head = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:90
* @route '/dashboard/departments/{department}/edit'
*/
export const edit = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/departments/{department}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:90
* @route '/dashboard/departments/{department}/edit'
*/
edit.url = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { department: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            department: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        department: typeof args.department === 'object'
        ? args.department.uuid
        : args.department,
    }

    return edit.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:90
* @route '/dashboard/departments/{department}/edit'
*/
edit.get = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:90
* @route '/dashboard/departments/{department}/edit'
*/
edit.head = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:101
* @route '/dashboard/departments/{department}'
*/
export const update = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/departments/{department}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:101
* @route '/dashboard/departments/{department}'
*/
update.url = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { department: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            department: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        department: typeof args.department === 'object'
        ? args.department.uuid
        : args.department,
    }

    return update.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:101
* @route '/dashboard/departments/{department}'
*/
update.put = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:171
* @route '/dashboard/departments/{department}/toggle-status'
*/
export const toggleStatus = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

toggleStatus.definition = {
    methods: ["put"],
    url: '/dashboard/departments/{department}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:171
* @route '/dashboard/departments/{department}/toggle-status'
*/
toggleStatus.url = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { department: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            department: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        department: typeof args.department === 'object'
        ? args.department.uuid
        : args.department,
    }

    return toggleStatus.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:171
* @route '/dashboard/departments/{department}/toggle-status'
*/
toggleStatus.put = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:113
* @route '/dashboard/departments/{department}/delete'
*/
export const deleteMethod = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

deleteMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/departments/{department}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:113
* @route '/dashboard/departments/{department}/delete'
*/
deleteMethod.url = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { department: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            department: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        department: typeof args.department === 'object'
        ? args.department.uuid
        : args.department,
    }

    return deleteMethod.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:113
* @route '/dashboard/departments/{department}/delete'
*/
deleteMethod.get = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:113
* @route '/dashboard/departments/{department}/delete'
*/
deleteMethod.head = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleteMethod.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:125
* @route '/dashboard/departments/{department}'
*/
export const destroy = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/departments/{department}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:125
* @route '/dashboard/departments/{department}'
*/
destroy.url = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { department: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            department: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        department: typeof args.department === 'object'
        ? args.department.uuid
        : args.department,
    }

    return destroy.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:125
* @route '/dashboard/departments/{department}'
*/
destroy.delete = (args: { department: string | { uuid: string } } | [department: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const departments = {
    qrCode: Object.assign(qrCode, qrCode),
    export: Object.assign(exportMethod, exportMethod),
    import: Object.assign(importMethod, importMethod7367d2),
    template: Object.assign(template, template),
    trash: Object.assign(trash, trash),
    bulkDelete: Object.assign(bulkDelete, bulkDelete),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    index: Object.assign(index, index),
    api: Object.assign(api, api),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    toggleStatus: Object.assign(toggleStatus, toggleStatus),
    delete: Object.assign(deleteMethod, deleteMethod),
    destroy: Object.assign(destroy, destroy),
}

export default departments