import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:50
* @route '/dashboard/equipment/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/equipment/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:50
* @route '/dashboard/equipment/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:50
* @route '/dashboard/equipment/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:50
* @route '/dashboard/equipment/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:61
* @route '/dashboard/equipment'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/equipment',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:61
* @route '/dashboard/equipment'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:61
* @route '/dashboard/equipment'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:37
* @route '/dashboard/equipment'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/equipment',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:37
* @route '/dashboard/equipment'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:37
* @route '/dashboard/equipment'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:37
* @route '/dashboard/equipment'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:73
* @route '/dashboard/equipment/{equipment}'
*/
export const show = (args: { equipment: number | { id: number } } | [equipment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/equipment/{equipment}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:73
* @route '/dashboard/equipment/{equipment}'
*/
show.url = (args: { equipment: number | { id: number } } | [equipment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { equipment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { equipment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            equipment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        equipment: typeof args.equipment === 'object'
        ? args.equipment.id
        : args.equipment,
    }

    return show.definition.url
            .replace('{equipment}', parsedArgs.equipment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:73
* @route '/dashboard/equipment/{equipment}'
*/
show.get = (args: { equipment: number | { id: number } } | [equipment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:73
* @route '/dashboard/equipment/{equipment}'
*/
show.head = (args: { equipment: number | { id: number } } | [equipment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:83
* @route '/dashboard/equipment/{equipment}/edit'
*/
export const edit = (args: { equipment: number | { id: number } } | [equipment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/equipment/{equipment}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:83
* @route '/dashboard/equipment/{equipment}/edit'
*/
edit.url = (args: { equipment: number | { id: number } } | [equipment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { equipment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { equipment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            equipment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        equipment: typeof args.equipment === 'object'
        ? args.equipment.id
        : args.equipment,
    }

    return edit.definition.url
            .replace('{equipment}', parsedArgs.equipment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:83
* @route '/dashboard/equipment/{equipment}/edit'
*/
edit.get = (args: { equipment: number | { id: number } } | [equipment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:83
* @route '/dashboard/equipment/{equipment}/edit'
*/
edit.head = (args: { equipment: number | { id: number } } | [equipment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:94
* @route '/dashboard/equipment/{equipment}'
*/
export const update = (args: { equipment: number | { id: number } } | [equipment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/equipment/{equipment}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:94
* @route '/dashboard/equipment/{equipment}'
*/
update.url = (args: { equipment: number | { id: number } } | [equipment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { equipment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { equipment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            equipment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        equipment: typeof args.equipment === 'object'
        ? args.equipment.id
        : args.equipment,
    }

    return update.definition.url
            .replace('{equipment}', parsedArgs.equipment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:94
* @route '/dashboard/equipment/{equipment}'
*/
update.put = (args: { equipment: number | { id: number } } | [equipment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:106
* @route '/dashboard/equipment/{equipment}/delete'
*/
export const deleteMethod = (args: { equipment: number | { id: number } } | [equipment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

deleteMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/equipment/{equipment}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:106
* @route '/dashboard/equipment/{equipment}/delete'
*/
deleteMethod.url = (args: { equipment: number | { id: number } } | [equipment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { equipment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { equipment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            equipment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        equipment: typeof args.equipment === 'object'
        ? args.equipment.id
        : args.equipment,
    }

    return deleteMethod.definition.url
            .replace('{equipment}', parsedArgs.equipment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:106
* @route '/dashboard/equipment/{equipment}/delete'
*/
deleteMethod.get = (args: { equipment: number | { id: number } } | [equipment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:106
* @route '/dashboard/equipment/{equipment}/delete'
*/
deleteMethod.head = (args: { equipment: number | { id: number } } | [equipment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleteMethod.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:118
* @route '/dashboard/equipment/{equipment}'
*/
export const destroy = (args: { equipment: number | { id: number } } | [equipment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/equipment/{equipment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:118
* @route '/dashboard/equipment/{equipment}'
*/
destroy.url = (args: { equipment: number | { id: number } } | [equipment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { equipment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { equipment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            equipment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        equipment: typeof args.equipment === 'object'
        ? args.equipment.id
        : args.equipment,
    }

    return destroy.definition.url
            .replace('{equipment}', parsedArgs.equipment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:118
* @route '/dashboard/equipment/{equipment}'
*/
destroy.delete = (args: { equipment: number | { id: number } } | [equipment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const equipment = {
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    index: Object.assign(index, index),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    delete: Object.assign(deleteMethod, deleteMethod),
    destroy: Object.assign(destroy, destroy),
}

export default equipment