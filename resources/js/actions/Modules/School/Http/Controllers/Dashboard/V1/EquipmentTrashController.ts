import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentTrashController.php:77
* @route '/dashboard/equipment/trash'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/equipment/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentTrashController.php:77
* @route '/dashboard/equipment/trash'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentTrashController.php:77
* @route '/dashboard/equipment/trash'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentTrashController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentTrashController.php:77
* @route '/dashboard/equipment/trash'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentTrashController::restore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentTrashController.php:128
* @route '/dashboard/equipment/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/equipment/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentTrashController::restore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentTrashController.php:128
* @route '/dashboard/equipment/{uuid}/restore'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentTrashController::restore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentTrashController.php:128
* @route '/dashboard/equipment/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentTrashController::forceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentTrashController.php:143
* @route '/dashboard/equipment/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/equipment/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentTrashController::forceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentTrashController.php:143
* @route '/dashboard/equipment/{uuid}/force-delete'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentTrashController::forceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentTrashController.php:143
* @route '/dashboard/equipment/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentTrashController::empty
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentTrashController.php:158
* @route '/dashboard/equipment/trash/empty'
*/
export const empty = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: empty.url(options),
    method: 'delete',
})

empty.definition = {
    methods: ["delete"],
    url: '/dashboard/equipment/trash/empty',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentTrashController::empty
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentTrashController.php:158
* @route '/dashboard/equipment/trash/empty'
*/
empty.url = (options?: RouteQueryOptions) => {
    return empty.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentTrashController::empty
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentTrashController.php:158
* @route '/dashboard/equipment/trash/empty'
*/
empty.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: empty.url(options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentTrashController::bulkRestore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentTrashController.php:173
* @route '/dashboard/equipment/trash/bulk-restore'
*/
export const bulkRestore = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

bulkRestore.definition = {
    methods: ["put"],
    url: '/dashboard/equipment/trash/bulk-restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentTrashController::bulkRestore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentTrashController.php:173
* @route '/dashboard/equipment/trash/bulk-restore'
*/
bulkRestore.url = (options?: RouteQueryOptions) => {
    return bulkRestore.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentTrashController::bulkRestore
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentTrashController.php:173
* @route '/dashboard/equipment/trash/bulk-restore'
*/
bulkRestore.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: bulkRestore.url(options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentTrashController::bulkForceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentTrashController.php:196
* @route '/dashboard/equipment/trash/bulk-force-delete'
*/
export const bulkForceDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

bulkForceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/equipment/trash/bulk-force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentTrashController::bulkForceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentTrashController.php:196
* @route '/dashboard/equipment/trash/bulk-force-delete'
*/
bulkForceDelete.url = (options?: RouteQueryOptions) => {
    return bulkForceDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentTrashController::bulkForceDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentTrashController.php:196
* @route '/dashboard/equipment/trash/bulk-force-delete'
*/
bulkForceDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkForceDelete.url(options),
    method: 'delete',
})

const EquipmentTrashController = { index, restore, forceDelete, empty, bulkRestore, bulkForceDelete }

export default EquipmentTrashController