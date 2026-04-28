import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:88
* @route '/dashboard/hotel-categories/trash'
*/
export const trash = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

trash.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-categories/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:88
* @route '/dashboard/hotel-categories/trash'
*/
trash.url = (options?: RouteQueryOptions) => {
    return trash.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:88
* @route '/dashboard/hotel-categories/trash'
*/
trash.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:88
* @route '/dashboard/hotel-categories/trash'
*/
trash.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:88
* @route '/dashboard/hotel-categories/trash'
*/
const trashForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:88
* @route '/dashboard/hotel-categories/trash'
*/
trashForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:88
* @route '/dashboard/hotel-categories/trash'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:97
* @route '/dashboard/hotel-categories/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/hotel-categories/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:97
* @route '/dashboard/hotel-categories/{uuid}/restore'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:97
* @route '/dashboard/hotel-categories/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:97
* @route '/dashboard/hotel-categories/{uuid}/restore'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:97
* @route '/dashboard/hotel-categories/{uuid}/restore'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:108
* @route '/dashboard/hotel-categories/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/hotel-categories/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:108
* @route '/dashboard/hotel-categories/{uuid}/force-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:108
* @route '/dashboard/hotel-categories/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:108
* @route '/dashboard/hotel-categories/{uuid}/force-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:108
* @route '/dashboard/hotel-categories/{uuid}/force-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:119
* @route '/dashboard/hotel-categories/bulk-delete'
*/
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/hotel-categories/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:119
* @route '/dashboard/hotel-categories/bulk-delete'
*/
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:119
* @route '/dashboard/hotel-categories/bulk-delete'
*/
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:119
* @route '/dashboard/hotel-categories/bulk-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::bulkDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:119
* @route '/dashboard/hotel-categories/bulk-delete'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::toggleActive
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:79
* @route '/dashboard/hotel-categories/{category}/toggle-active'
*/
export const toggleActive = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleActive.url(args, options),
    method: 'patch',
})

toggleActive.definition = {
    methods: ["patch"],
    url: '/dashboard/hotel-categories/{category}/toggle-active',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::toggleActive
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:79
* @route '/dashboard/hotel-categories/{category}/toggle-active'
*/
toggleActive.url = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { category: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.uuid
        : args.category,
    }

    return toggleActive.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::toggleActive
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:79
* @route '/dashboard/hotel-categories/{category}/toggle-active'
*/
toggleActive.patch = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleActive.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::toggleActive
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:79
* @route '/dashboard/hotel-categories/{category}/toggle-active'
*/
const toggleActiveForm = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::toggleActive
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:79
* @route '/dashboard/hotel-categories/{category}/toggle-active'
*/
toggleActiveForm.patch = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:55
* @route '/dashboard/hotel-categories/{category}/delete'
*/
export const confirmDelete = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-categories/{category}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:55
* @route '/dashboard/hotel-categories/{category}/delete'
*/
confirmDelete.url = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { category: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.uuid
        : args.category,
    }

    return confirmDelete.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:55
* @route '/dashboard/hotel-categories/{category}/delete'
*/
confirmDelete.get = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:55
* @route '/dashboard/hotel-categories/{category}/delete'
*/
confirmDelete.head = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:55
* @route '/dashboard/hotel-categories/{category}/delete'
*/
const confirmDeleteForm = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:55
* @route '/dashboard/hotel-categories/{category}/delete'
*/
confirmDeleteForm.get = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:55
* @route '/dashboard/hotel-categories/{category}/delete'
*/
confirmDeleteForm.head = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:26
* @route '/dashboard/hotel-categories'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:26
* @route '/dashboard/hotel-categories'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:26
* @route '/dashboard/hotel-categories'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:26
* @route '/dashboard/hotel-categories'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:26
* @route '/dashboard/hotel-categories'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:26
* @route '/dashboard/hotel-categories'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:26
* @route '/dashboard/hotel-categories'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:34
* @route '/dashboard/hotel-categories/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-categories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:34
* @route '/dashboard/hotel-categories/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:34
* @route '/dashboard/hotel-categories/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:34
* @route '/dashboard/hotel-categories/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:34
* @route '/dashboard/hotel-categories/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:34
* @route '/dashboard/hotel-categories/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:34
* @route '/dashboard/hotel-categories/create'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:40
* @route '/dashboard/hotel-categories'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/hotel-categories',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:40
* @route '/dashboard/hotel-categories'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:40
* @route '/dashboard/hotel-categories'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:40
* @route '/dashboard/hotel-categories'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:40
* @route '/dashboard/hotel-categories'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:0
* @route '/dashboard/hotel-categories/{category}'
*/
export const show = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-categories/{category}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:0
* @route '/dashboard/hotel-categories/{category}'
*/
show.url = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: args.category,
    }

    return show.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:0
* @route '/dashboard/hotel-categories/{category}'
*/
show.get = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:0
* @route '/dashboard/hotel-categories/{category}'
*/
show.head = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:0
* @route '/dashboard/hotel-categories/{category}'
*/
const showForm = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:0
* @route '/dashboard/hotel-categories/{category}'
*/
showForm.get = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:0
* @route '/dashboard/hotel-categories/{category}'
*/
showForm.head = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:49
* @route '/dashboard/hotel-categories/{category}/edit'
*/
export const edit = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-categories/{category}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:49
* @route '/dashboard/hotel-categories/{category}/edit'
*/
edit.url = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { category: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.uuid
        : args.category,
    }

    return edit.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:49
* @route '/dashboard/hotel-categories/{category}/edit'
*/
edit.get = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:49
* @route '/dashboard/hotel-categories/{category}/edit'
*/
edit.head = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:49
* @route '/dashboard/hotel-categories/{category}/edit'
*/
const editForm = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:49
* @route '/dashboard/hotel-categories/{category}/edit'
*/
editForm.get = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:49
* @route '/dashboard/hotel-categories/{category}/edit'
*/
editForm.head = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:61
* @route '/dashboard/hotel-categories/{category}'
*/
export const update = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/hotel-categories/{category}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:61
* @route '/dashboard/hotel-categories/{category}'
*/
update.url = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { category: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.uuid
        : args.category,
    }

    return update.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:61
* @route '/dashboard/hotel-categories/{category}'
*/
update.put = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:61
* @route '/dashboard/hotel-categories/{category}'
*/
update.patch = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:61
* @route '/dashboard/hotel-categories/{category}'
*/
const updateForm = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:61
* @route '/dashboard/hotel-categories/{category}'
*/
updateForm.put = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:61
* @route '/dashboard/hotel-categories/{category}'
*/
updateForm.patch = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:70
* @route '/dashboard/hotel-categories/{category}'
*/
export const destroy = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/hotel-categories/{category}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:70
* @route '/dashboard/hotel-categories/{category}'
*/
destroy.url = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { category: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.uuid
        : args.category,
    }

    return destroy.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:70
* @route '/dashboard/hotel-categories/{category}'
*/
destroy.delete = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:70
* @route '/dashboard/hotel-categories/{category}'
*/
const destroyForm = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelCategoryController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelCategoryController.php:70
* @route '/dashboard/hotel-categories/{category}'
*/
destroyForm.delete = (args: { category: string | number | { uuid: string | number } } | [category: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const categories = {
    trash: Object.assign(trash, trash),
    restore: Object.assign(restore, restore),
    forceDelete: Object.assign(forceDelete, forceDelete),
    bulkDelete: Object.assign(bulkDelete, bulkDelete),
    toggleActive: Object.assign(toggleActive, toggleActive),
    confirmDelete: Object.assign(confirmDelete, confirmDelete),
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default categories