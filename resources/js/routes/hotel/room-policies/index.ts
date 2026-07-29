import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:88
* @route '/dashboard/hotel-room-policies/trash'
*/
export const trash = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

trash.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-room-policies/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:88
* @route '/dashboard/hotel-room-policies/trash'
*/
trash.url = (options?: RouteQueryOptions) => {
    return trash.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:88
* @route '/dashboard/hotel-room-policies/trash'
*/
trash.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:88
* @route '/dashboard/hotel-room-policies/trash'
*/
trash.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:88
* @route '/dashboard/hotel-room-policies/trash'
*/
const trashForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:88
* @route '/dashboard/hotel-room-policies/trash'
*/
trashForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:88
* @route '/dashboard/hotel-room-policies/trash'
*/
trashForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

trash.form = trashForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:97
* @route '/dashboard/hotel-room-policies/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/hotel-room-policies/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:97
* @route '/dashboard/hotel-room-policies/{uuid}/restore'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:97
* @route '/dashboard/hotel-room-policies/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:97
* @route '/dashboard/hotel-room-policies/{uuid}/restore'
*/
const restoreForm = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:97
* @route '/dashboard/hotel-room-policies/{uuid}/restore'
*/
restoreForm.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

restore.form = restoreForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:108
* @route '/dashboard/hotel-room-policies/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/hotel-room-policies/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:108
* @route '/dashboard/hotel-room-policies/{uuid}/force-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:108
* @route '/dashboard/hotel-room-policies/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:108
* @route '/dashboard/hotel-room-policies/{uuid}/force-delete'
*/
const forceDeleteForm = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:108
* @route '/dashboard/hotel-room-policies/{uuid}/force-delete'
*/
forceDeleteForm.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

forceDelete.form = forceDeleteForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:119
* @route '/dashboard/hotel-room-policies/bulk-delete'
*/
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/hotel-room-policies/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:119
* @route '/dashboard/hotel-room-policies/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:119
* @route '/dashboard/hotel-room-policies/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:119
* @route '/dashboard/hotel-room-policies/bulk-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:119
* @route '/dashboard/hotel-room-policies/bulk-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::toggleActive
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:79
* @route '/dashboard/hotel-room-policies/{policy}/toggle-active'
*/
export const toggleActive = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleActive.url(args, options),
    method: 'patch',
})

toggleActive.definition = {
    methods: ["patch"],
    url: '/dashboard/hotel-room-policies/{policy}/toggle-active',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::toggleActive
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:79
* @route '/dashboard/hotel-room-policies/{policy}/toggle-active'
*/
toggleActive.url = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { policy: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { policy: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            policy: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        policy: typeof args.policy === 'object'
        ? args.policy.uuid
        : args.policy,
    }

    return toggleActive.definition.url
            .replace('{policy}', parsedArgs.policy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::toggleActive
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:79
* @route '/dashboard/hotel-room-policies/{policy}/toggle-active'
*/
toggleActive.patch = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleActive.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::toggleActive
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:79
* @route '/dashboard/hotel-room-policies/{policy}/toggle-active'
*/
const toggleActiveForm = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::toggleActive
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:79
* @route '/dashboard/hotel-room-policies/{policy}/toggle-active'
*/
toggleActiveForm.patch = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleActive.form = toggleActiveForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:55
* @route '/dashboard/hotel-room-policies/{policy}/delete'
*/
export const confirmDelete = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-room-policies/{policy}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:55
* @route '/dashboard/hotel-room-policies/{policy}/delete'
*/
confirmDelete.url = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { policy: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { policy: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            policy: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        policy: typeof args.policy === 'object'
        ? args.policy.uuid
        : args.policy,
    }

    return confirmDelete.definition.url
            .replace('{policy}', parsedArgs.policy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:55
* @route '/dashboard/hotel-room-policies/{policy}/delete'
*/
confirmDelete.get = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:55
* @route '/dashboard/hotel-room-policies/{policy}/delete'
*/
confirmDelete.head = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:55
* @route '/dashboard/hotel-room-policies/{policy}/delete'
*/
const confirmDeleteForm = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:55
* @route '/dashboard/hotel-room-policies/{policy}/delete'
*/
confirmDeleteForm.get = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:55
* @route '/dashboard/hotel-room-policies/{policy}/delete'
*/
confirmDeleteForm.head = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:26
* @route '/dashboard/hotel-room-policies'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-room-policies',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:26
* @route '/dashboard/hotel-room-policies'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:26
* @route '/dashboard/hotel-room-policies'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:26
* @route '/dashboard/hotel-room-policies'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:26
* @route '/dashboard/hotel-room-policies'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:26
* @route '/dashboard/hotel-room-policies'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:26
* @route '/dashboard/hotel-room-policies'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:34
* @route '/dashboard/hotel-room-policies/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-room-policies/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:34
* @route '/dashboard/hotel-room-policies/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:34
* @route '/dashboard/hotel-room-policies/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:34
* @route '/dashboard/hotel-room-policies/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:34
* @route '/dashboard/hotel-room-policies/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:34
* @route '/dashboard/hotel-room-policies/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:34
* @route '/dashboard/hotel-room-policies/create'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:40
* @route '/dashboard/hotel-room-policies'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/hotel-room-policies',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:40
* @route '/dashboard/hotel-room-policies'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:40
* @route '/dashboard/hotel-room-policies'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:40
* @route '/dashboard/hotel-room-policies'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:40
* @route '/dashboard/hotel-room-policies'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:49
* @route '/dashboard/hotel-room-policies/{policy}/edit'
*/
export const edit = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-room-policies/{policy}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:49
* @route '/dashboard/hotel-room-policies/{policy}/edit'
*/
edit.url = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { policy: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { policy: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            policy: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        policy: typeof args.policy === 'object'
        ? args.policy.uuid
        : args.policy,
    }

    return edit.definition.url
            .replace('{policy}', parsedArgs.policy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:49
* @route '/dashboard/hotel-room-policies/{policy}/edit'
*/
edit.get = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:49
* @route '/dashboard/hotel-room-policies/{policy}/edit'
*/
edit.head = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:49
* @route '/dashboard/hotel-room-policies/{policy}/edit'
*/
const editForm = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:49
* @route '/dashboard/hotel-room-policies/{policy}/edit'
*/
editForm.get = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:49
* @route '/dashboard/hotel-room-policies/{policy}/edit'
*/
editForm.head = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:61
* @route '/dashboard/hotel-room-policies/{policy}'
*/
export const update = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/hotel-room-policies/{policy}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:61
* @route '/dashboard/hotel-room-policies/{policy}'
*/
update.url = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { policy: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { policy: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            policy: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        policy: typeof args.policy === 'object'
        ? args.policy.uuid
        : args.policy,
    }

    return update.definition.url
            .replace('{policy}', parsedArgs.policy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:61
* @route '/dashboard/hotel-room-policies/{policy}'
*/
update.put = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:61
* @route '/dashboard/hotel-room-policies/{policy}'
*/
update.patch = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:61
* @route '/dashboard/hotel-room-policies/{policy}'
*/
const updateForm = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:61
* @route '/dashboard/hotel-room-policies/{policy}'
*/
updateForm.put = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:61
* @route '/dashboard/hotel-room-policies/{policy}'
*/
updateForm.patch = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:70
* @route '/dashboard/hotel-room-policies/{policy}'
*/
export const destroy = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/hotel-room-policies/{policy}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:70
* @route '/dashboard/hotel-room-policies/{policy}'
*/
destroy.url = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { policy: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { policy: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            policy: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        policy: typeof args.policy === 'object'
        ? args.policy.uuid
        : args.policy,
    }

    return destroy.definition.url
            .replace('{policy}', parsedArgs.policy.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:70
* @route '/dashboard/hotel-room-policies/{policy}'
*/
destroy.delete = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:70
* @route '/dashboard/hotel-room-policies/{policy}'
*/
const destroyForm = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomPolicyController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomPolicyController.php:70
* @route '/dashboard/hotel-room-policies/{policy}'
*/
destroyForm.delete = (args: { policy: string | { uuid: string } } | [policy: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const roomPolicies = {
    trash: Object.assign(trash, trash),
    restore: Object.assign(restore, restore),
    forceDelete: Object.assign(forceDelete, forceDelete),
    bulkDelete: Object.assign(bulkDelete, bulkDelete),
    toggleActive: Object.assign(toggleActive, toggleActive),
    confirmDelete: Object.assign(confirmDelete, confirmDelete),
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default roomPolicies