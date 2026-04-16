import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:25
* @route '/dashboard/hotel-rooms'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-rooms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:25
* @route '/dashboard/hotel-rooms'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:25
* @route '/dashboard/hotel-rooms'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:25
* @route '/dashboard/hotel-rooms'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:25
* @route '/dashboard/hotel-rooms'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:25
* @route '/dashboard/hotel-rooms'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:25
* @route '/dashboard/hotel-rooms'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:184
* @route '/dashboard/hotel-rooms/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-rooms/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:184
* @route '/dashboard/hotel-rooms/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:184
* @route '/dashboard/hotel-rooms/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:184
* @route '/dashboard/hotel-rooms/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:184
* @route '/dashboard/hotel-rooms/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:184
* @route '/dashboard/hotel-rooms/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:184
* @route '/dashboard/hotel-rooms/create'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:195
* @route '/dashboard/hotel-rooms'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/hotel-rooms',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:195
* @route '/dashboard/hotel-rooms'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:195
* @route '/dashboard/hotel-rooms'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:195
* @route '/dashboard/hotel-rooms'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:195
* @route '/dashboard/hotel-rooms'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:205
* @route '/dashboard/hotel-rooms/trash'
*/
export const trash = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

trash.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-rooms/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:205
* @route '/dashboard/hotel-rooms/trash'
*/
trash.url = (options?: RouteQueryOptions) => {
    return trash.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:205
* @route '/dashboard/hotel-rooms/trash'
*/
trash.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:205
* @route '/dashboard/hotel-rooms/trash'
*/
trash.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:205
* @route '/dashboard/hotel-rooms/trash'
*/
const trashForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:205
* @route '/dashboard/hotel-rooms/trash'
*/
trashForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:205
* @route '/dashboard/hotel-rooms/trash'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:216
* @route '/dashboard/hotel-rooms/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/hotel-rooms/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:216
* @route '/dashboard/hotel-rooms/{uuid}/restore'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:216
* @route '/dashboard/hotel-rooms/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:216
* @route '/dashboard/hotel-rooms/{uuid}/restore'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:216
* @route '/dashboard/hotel-rooms/{uuid}/restore'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:223
* @route '/dashboard/hotel-rooms/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/hotel-rooms/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:223
* @route '/dashboard/hotel-rooms/{uuid}/force-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:223
* @route '/dashboard/hotel-rooms/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:223
* @route '/dashboard/hotel-rooms/{uuid}/force-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\RoomController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/RoomController.php:223
* @route '/dashboard/hotel-rooms/{uuid}/force-delete'
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

const rooms = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    trash: Object.assign(trash, trash),
    restore: Object.assign(restore, restore),
    forceDelete: Object.assign(forceDelete, forceDelete),
}

export default rooms