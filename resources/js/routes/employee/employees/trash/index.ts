import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTrashController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTrashController.php:77
* @route '/dashboard/employees/trash'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTrashController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTrashController.php:77
* @route '/dashboard/employees/trash'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTrashController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTrashController.php:77
* @route '/dashboard/employees/trash'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTrashController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTrashController.php:77
* @route '/dashboard/employees/trash'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTrashController::restore
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTrashController.php:128
* @route '/dashboard/employees/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/employees/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTrashController::restore
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTrashController.php:128
* @route '/dashboard/employees/{uuid}/restore'
*/
restore.url = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { uuid: args }
    }

    if (Array.isArray(args)) {
        args = {
            uuid: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        uuid: args.uuid,
    }

    return restore.definition.url
            .replace('{uuid}', parsedArgs.uuid.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTrashController::restore
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTrashController.php:128
* @route '/dashboard/employees/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTrashController::forceDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTrashController.php:143
* @route '/dashboard/employees/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/employees/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTrashController::forceDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTrashController.php:143
* @route '/dashboard/employees/{uuid}/force-delete'
*/
forceDelete.url = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { uuid: args }
    }

    if (Array.isArray(args)) {
        args = {
            uuid: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        uuid: args.uuid,
    }

    return forceDelete.definition.url
            .replace('{uuid}', parsedArgs.uuid.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTrashController::forceDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTrashController.php:143
* @route '/dashboard/employees/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTrashController::empty
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTrashController.php:158
* @route '/dashboard/employees/trash/empty'
*/
export const empty = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: empty.url(options),
    method: 'delete',
})

empty.definition = {
    methods: ["delete"],
    url: '/dashboard/employees/trash/empty',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTrashController::empty
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTrashController.php:158
* @route '/dashboard/employees/trash/empty'
*/
empty.url = (options?: RouteQueryOptions) => {
    return empty.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTrashController::empty
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTrashController.php:158
* @route '/dashboard/employees/trash/empty'
*/
empty.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: empty.url(options),
    method: 'delete',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTrashController::bulkRestore
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTrashController.php:173
* @route '/dashboard/employees/trash/bulk-restore'
*/
export const bulkRestore = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

bulkRestore.definition = {
    methods: ["put"],
    url: '/dashboard/employees/trash/bulk-restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTrashController::bulkRestore
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTrashController.php:173
* @route '/dashboard/employees/trash/bulk-restore'
*/
bulkRestore.url = (options?: RouteQueryOptions) => {
    return bulkRestore.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTrashController::bulkRestore
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTrashController.php:173
* @route '/dashboard/employees/trash/bulk-restore'
*/
bulkRestore.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTrashController::bulkForceDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTrashController.php:196
* @route '/dashboard/employees/trash/bulk-force-delete'
*/
export const bulkForceDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

bulkForceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/employees/trash/bulk-force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTrashController::bulkForceDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTrashController.php:196
* @route '/dashboard/employees/trash/bulk-force-delete'
*/
bulkForceDelete.url = (options?: RouteQueryOptions) => {
    return bulkForceDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeTrashController::bulkForceDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeeTrashController.php:196
* @route '/dashboard/employees/trash/bulk-force-delete'
*/
bulkForceDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

const trash = {
    index: Object.assign(index, index),
    restore: Object.assign(restore, restore),
    forceDelete: Object.assign(forceDelete, forceDelete),
    empty: Object.assign(empty, empty),
    bulkRestore: Object.assign(bulkRestore, bulkRestore),
    bulkForceDelete: Object.assign(bulkForceDelete, bulkForceDelete),
}

export default trash