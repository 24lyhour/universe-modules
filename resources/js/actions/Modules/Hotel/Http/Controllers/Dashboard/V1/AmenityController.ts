import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:88
* @route '/dashboard/hotel-amenities/trash'
*/
export const trash = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

trash.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-amenities/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:88
* @route '/dashboard/hotel-amenities/trash'
*/
trash.url = (options?: RouteQueryOptions) => {
    return trash.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:88
* @route '/dashboard/hotel-amenities/trash'
*/
trash.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:88
* @route '/dashboard/hotel-amenities/trash'
*/
trash.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:88
* @route '/dashboard/hotel-amenities/trash'
*/
const trashForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:88
* @route '/dashboard/hotel-amenities/trash'
*/
trashForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:88
* @route '/dashboard/hotel-amenities/trash'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:97
* @route '/dashboard/hotel-amenities/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/hotel-amenities/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:97
* @route '/dashboard/hotel-amenities/{uuid}/restore'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:97
* @route '/dashboard/hotel-amenities/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:97
* @route '/dashboard/hotel-amenities/{uuid}/restore'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:97
* @route '/dashboard/hotel-amenities/{uuid}/restore'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:108
* @route '/dashboard/hotel-amenities/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/hotel-amenities/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:108
* @route '/dashboard/hotel-amenities/{uuid}/force-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:108
* @route '/dashboard/hotel-amenities/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:108
* @route '/dashboard/hotel-amenities/{uuid}/force-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:108
* @route '/dashboard/hotel-amenities/{uuid}/force-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:119
* @route '/dashboard/hotel-amenities/bulk-delete'
*/
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/hotel-amenities/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:119
* @route '/dashboard/hotel-amenities/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:119
* @route '/dashboard/hotel-amenities/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:119
* @route '/dashboard/hotel-amenities/bulk-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:119
* @route '/dashboard/hotel-amenities/bulk-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::toggleActive
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:79
* @route '/dashboard/hotel-amenities/{amenity}/toggle-active'
*/
export const toggleActive = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleActive.url(args, options),
    method: 'patch',
})

toggleActive.definition = {
    methods: ["patch"],
    url: '/dashboard/hotel-amenities/{amenity}/toggle-active',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::toggleActive
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:79
* @route '/dashboard/hotel-amenities/{amenity}/toggle-active'
*/
toggleActive.url = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { amenity: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { amenity: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            amenity: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        amenity: typeof args.amenity === 'object'
        ? args.amenity.uuid
        : args.amenity,
    }

    return toggleActive.definition.url
            .replace('{amenity}', parsedArgs.amenity.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::toggleActive
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:79
* @route '/dashboard/hotel-amenities/{amenity}/toggle-active'
*/
toggleActive.patch = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleActive.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::toggleActive
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:79
* @route '/dashboard/hotel-amenities/{amenity}/toggle-active'
*/
const toggleActiveForm = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::toggleActive
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:79
* @route '/dashboard/hotel-amenities/{amenity}/toggle-active'
*/
toggleActiveForm.patch = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:55
* @route '/dashboard/hotel-amenities/{amenity}/delete'
*/
export const confirmDelete = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-amenities/{amenity}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:55
* @route '/dashboard/hotel-amenities/{amenity}/delete'
*/
confirmDelete.url = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { amenity: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { amenity: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            amenity: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        amenity: typeof args.amenity === 'object'
        ? args.amenity.uuid
        : args.amenity,
    }

    return confirmDelete.definition.url
            .replace('{amenity}', parsedArgs.amenity.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:55
* @route '/dashboard/hotel-amenities/{amenity}/delete'
*/
confirmDelete.get = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:55
* @route '/dashboard/hotel-amenities/{amenity}/delete'
*/
confirmDelete.head = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:55
* @route '/dashboard/hotel-amenities/{amenity}/delete'
*/
const confirmDeleteForm = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:55
* @route '/dashboard/hotel-amenities/{amenity}/delete'
*/
confirmDeleteForm.get = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:55
* @route '/dashboard/hotel-amenities/{amenity}/delete'
*/
confirmDeleteForm.head = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:26
* @route '/dashboard/hotel-amenities'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-amenities',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:26
* @route '/dashboard/hotel-amenities'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:26
* @route '/dashboard/hotel-amenities'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:26
* @route '/dashboard/hotel-amenities'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:26
* @route '/dashboard/hotel-amenities'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:26
* @route '/dashboard/hotel-amenities'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:26
* @route '/dashboard/hotel-amenities'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:34
* @route '/dashboard/hotel-amenities/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-amenities/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:34
* @route '/dashboard/hotel-amenities/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:34
* @route '/dashboard/hotel-amenities/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:34
* @route '/dashboard/hotel-amenities/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:34
* @route '/dashboard/hotel-amenities/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:34
* @route '/dashboard/hotel-amenities/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:34
* @route '/dashboard/hotel-amenities/create'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:40
* @route '/dashboard/hotel-amenities'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/hotel-amenities',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:40
* @route '/dashboard/hotel-amenities'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:40
* @route '/dashboard/hotel-amenities'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:40
* @route '/dashboard/hotel-amenities'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:40
* @route '/dashboard/hotel-amenities'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:0
* @route '/dashboard/hotel-amenities/{amenity}'
*/
export const show = (args: { amenity: string | number } | [amenity: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-amenities/{amenity}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:0
* @route '/dashboard/hotel-amenities/{amenity}'
*/
show.url = (args: { amenity: string | number } | [amenity: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { amenity: args }
    }

    if (Array.isArray(args)) {
        args = {
            amenity: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        amenity: args.amenity,
    }

    return show.definition.url
            .replace('{amenity}', parsedArgs.amenity.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:0
* @route '/dashboard/hotel-amenities/{amenity}'
*/
show.get = (args: { amenity: string | number } | [amenity: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:0
* @route '/dashboard/hotel-amenities/{amenity}'
*/
show.head = (args: { amenity: string | number } | [amenity: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:0
* @route '/dashboard/hotel-amenities/{amenity}'
*/
const showForm = (args: { amenity: string | number } | [amenity: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:0
* @route '/dashboard/hotel-amenities/{amenity}'
*/
showForm.get = (args: { amenity: string | number } | [amenity: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:0
* @route '/dashboard/hotel-amenities/{amenity}'
*/
showForm.head = (args: { amenity: string | number } | [amenity: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:49
* @route '/dashboard/hotel-amenities/{amenity}/edit'
*/
export const edit = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-amenities/{amenity}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:49
* @route '/dashboard/hotel-amenities/{amenity}/edit'
*/
edit.url = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { amenity: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { amenity: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            amenity: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        amenity: typeof args.amenity === 'object'
        ? args.amenity.uuid
        : args.amenity,
    }

    return edit.definition.url
            .replace('{amenity}', parsedArgs.amenity.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:49
* @route '/dashboard/hotel-amenities/{amenity}/edit'
*/
edit.get = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:49
* @route '/dashboard/hotel-amenities/{amenity}/edit'
*/
edit.head = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:49
* @route '/dashboard/hotel-amenities/{amenity}/edit'
*/
const editForm = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:49
* @route '/dashboard/hotel-amenities/{amenity}/edit'
*/
editForm.get = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:49
* @route '/dashboard/hotel-amenities/{amenity}/edit'
*/
editForm.head = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:61
* @route '/dashboard/hotel-amenities/{amenity}'
*/
export const update = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/hotel-amenities/{amenity}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:61
* @route '/dashboard/hotel-amenities/{amenity}'
*/
update.url = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { amenity: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { amenity: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            amenity: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        amenity: typeof args.amenity === 'object'
        ? args.amenity.uuid
        : args.amenity,
    }

    return update.definition.url
            .replace('{amenity}', parsedArgs.amenity.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:61
* @route '/dashboard/hotel-amenities/{amenity}'
*/
update.put = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:61
* @route '/dashboard/hotel-amenities/{amenity}'
*/
update.patch = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:61
* @route '/dashboard/hotel-amenities/{amenity}'
*/
const updateForm = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:61
* @route '/dashboard/hotel-amenities/{amenity}'
*/
updateForm.put = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:61
* @route '/dashboard/hotel-amenities/{amenity}'
*/
updateForm.patch = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:70
* @route '/dashboard/hotel-amenities/{amenity}'
*/
export const destroy = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/hotel-amenities/{amenity}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:70
* @route '/dashboard/hotel-amenities/{amenity}'
*/
destroy.url = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { amenity: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { amenity: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            amenity: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        amenity: typeof args.amenity === 'object'
        ? args.amenity.uuid
        : args.amenity,
    }

    return destroy.definition.url
            .replace('{amenity}', parsedArgs.amenity.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:70
* @route '/dashboard/hotel-amenities/{amenity}'
*/
destroy.delete = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:70
* @route '/dashboard/hotel-amenities/{amenity}'
*/
const destroyForm = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\AmenityController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/AmenityController.php:70
* @route '/dashboard/hotel-amenities/{amenity}'
*/
destroyForm.delete = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const AmenityController = { trash, restore, forceDelete, bulkDelete, toggleActive, confirmDelete, index, create, store, show, edit, update, destroy }

export default AmenityController