import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:50
* @route '/dashboard/equipment/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:50
* @route '/dashboard/equipment/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:50
* @route '/dashboard/equipment/create'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:61
* @route '/dashboard/equipment'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:61
* @route '/dashboard/equipment'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

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
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:37
* @route '/dashboard/equipment'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:37
* @route '/dashboard/equipment'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:37
* @route '/dashboard/equipment'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:73
* @route '/dashboard/equipment/{equipment}'
*/
export const show = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
show.url = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { equipment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { equipment: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            equipment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        equipment: typeof args.equipment === 'object'
        ? args.equipment.uuid
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
show.get = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:73
* @route '/dashboard/equipment/{equipment}'
*/
show.head = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:73
* @route '/dashboard/equipment/{equipment}'
*/
const showForm = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:73
* @route '/dashboard/equipment/{equipment}'
*/
showForm.get = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:73
* @route '/dashboard/equipment/{equipment}'
*/
showForm.head = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:83
* @route '/dashboard/equipment/{equipment}/edit'
*/
export const edit = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
edit.url = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { equipment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { equipment: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            equipment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        equipment: typeof args.equipment === 'object'
        ? args.equipment.uuid
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
edit.get = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:83
* @route '/dashboard/equipment/{equipment}/edit'
*/
edit.head = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:83
* @route '/dashboard/equipment/{equipment}/edit'
*/
const editForm = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:83
* @route '/dashboard/equipment/{equipment}/edit'
*/
editForm.get = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:83
* @route '/dashboard/equipment/{equipment}/edit'
*/
editForm.head = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:94
* @route '/dashboard/equipment/{equipment}'
*/
const updated44ff1d59251d5ed1bb5146ca465bf3c = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updated44ff1d59251d5ed1bb5146ca465bf3c.url(args, options),
    method: 'put',
})

updated44ff1d59251d5ed1bb5146ca465bf3c.definition = {
    methods: ["put"],
    url: '/dashboard/equipment/{equipment}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:94
* @route '/dashboard/equipment/{equipment}'
*/
updated44ff1d59251d5ed1bb5146ca465bf3c.url = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { equipment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { equipment: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            equipment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        equipment: typeof args.equipment === 'object'
        ? args.equipment.uuid
        : args.equipment,
    }

    return updated44ff1d59251d5ed1bb5146ca465bf3c.definition.url
            .replace('{equipment}', parsedArgs.equipment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:94
* @route '/dashboard/equipment/{equipment}'
*/
updated44ff1d59251d5ed1bb5146ca465bf3c.put = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updated44ff1d59251d5ed1bb5146ca465bf3c.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:94
* @route '/dashboard/equipment/{equipment}'
*/
const updated44ff1d59251d5ed1bb5146ca465bf3cForm = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updated44ff1d59251d5ed1bb5146ca465bf3c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:94
* @route '/dashboard/equipment/{equipment}'
*/
updated44ff1d59251d5ed1bb5146ca465bf3cForm.put = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updated44ff1d59251d5ed1bb5146ca465bf3c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updated44ff1d59251d5ed1bb5146ca465bf3c.form = updated44ff1d59251d5ed1bb5146ca465bf3cForm
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:94
* @route '/dashboard/equipment/{equipment}'
*/
const updated44ff1d59251d5ed1bb5146ca465bf3c = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updated44ff1d59251d5ed1bb5146ca465bf3c.url(args, options),
    method: 'patch',
})

updated44ff1d59251d5ed1bb5146ca465bf3c.definition = {
    methods: ["patch"],
    url: '/dashboard/equipment/{equipment}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:94
* @route '/dashboard/equipment/{equipment}'
*/
updated44ff1d59251d5ed1bb5146ca465bf3c.url = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { equipment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { equipment: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            equipment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        equipment: typeof args.equipment === 'object'
        ? args.equipment.uuid
        : args.equipment,
    }

    return updated44ff1d59251d5ed1bb5146ca465bf3c.definition.url
            .replace('{equipment}', parsedArgs.equipment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:94
* @route '/dashboard/equipment/{equipment}'
*/
updated44ff1d59251d5ed1bb5146ca465bf3c.patch = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updated44ff1d59251d5ed1bb5146ca465bf3c.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:94
* @route '/dashboard/equipment/{equipment}'
*/
const updated44ff1d59251d5ed1bb5146ca465bf3cForm = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updated44ff1d59251d5ed1bb5146ca465bf3c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:94
* @route '/dashboard/equipment/{equipment}'
*/
updated44ff1d59251d5ed1bb5146ca465bf3cForm.patch = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updated44ff1d59251d5ed1bb5146ca465bf3c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updated44ff1d59251d5ed1bb5146ca465bf3c.form = updated44ff1d59251d5ed1bb5146ca465bf3cForm

export const update = {
    '/dashboard/equipment/{equipment}': updated44ff1d59251d5ed1bb5146ca465bf3c,
    '/dashboard/equipment/{equipment}': updated44ff1d59251d5ed1bb5146ca465bf3c,
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:106
* @route '/dashboard/equipment/{equipment}/delete'
*/
export const confirmDelete = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/equipment/{equipment}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:106
* @route '/dashboard/equipment/{equipment}/delete'
*/
confirmDelete.url = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { equipment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { equipment: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            equipment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        equipment: typeof args.equipment === 'object'
        ? args.equipment.uuid
        : args.equipment,
    }

    return confirmDelete.definition.url
            .replace('{equipment}', parsedArgs.equipment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:106
* @route '/dashboard/equipment/{equipment}/delete'
*/
confirmDelete.get = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:106
* @route '/dashboard/equipment/{equipment}/delete'
*/
confirmDelete.head = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:106
* @route '/dashboard/equipment/{equipment}/delete'
*/
const confirmDeleteForm = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:106
* @route '/dashboard/equipment/{equipment}/delete'
*/
confirmDeleteForm.get = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:106
* @route '/dashboard/equipment/{equipment}/delete'
*/
confirmDeleteForm.head = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:118
* @route '/dashboard/equipment/{equipment}'
*/
export const destroy = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
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
destroy.url = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { equipment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { equipment: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            equipment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        equipment: typeof args.equipment === 'object'
        ? args.equipment.uuid
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
destroy.delete = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:118
* @route '/dashboard/equipment/{equipment}'
*/
const destroyForm = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\EquipmentController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/EquipmentController.php:118
* @route '/dashboard/equipment/{equipment}'
*/
destroyForm.delete = (args: { equipment: string | { uuid: string } } | [equipment: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const EquipmentController = { create, store, index, show, edit, update, confirmDelete, destroy }

export default EquipmentController