import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::toggleActive
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:83
* @route '/dashboard/hotel-provinces/{province}/toggle-active'
*/
export const toggleActive = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleActive.url(args, options),
    method: 'patch',
})

toggleActive.definition = {
    methods: ["patch"],
    url: '/dashboard/hotel-provinces/{province}/toggle-active',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::toggleActive
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:83
* @route '/dashboard/hotel-provinces/{province}/toggle-active'
*/
toggleActive.url = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { province: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { province: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            province: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        province: typeof args.province === 'object'
        ? args.province.uuid
        : args.province,
    }

    return toggleActive.definition.url
            .replace('{province}', parsedArgs.province.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::toggleActive
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:83
* @route '/dashboard/hotel-provinces/{province}/toggle-active'
*/
toggleActive.patch = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleActive.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::toggleActive
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:83
* @route '/dashboard/hotel-provinces/{province}/toggle-active'
*/
const toggleActiveForm = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::toggleActive
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:83
* @route '/dashboard/hotel-provinces/{province}/toggle-active'
*/
toggleActiveForm.patch = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:59
* @route '/dashboard/hotel-provinces/{province}/delete'
*/
export const confirmDelete = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-provinces/{province}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:59
* @route '/dashboard/hotel-provinces/{province}/delete'
*/
confirmDelete.url = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { province: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { province: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            province: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        province: typeof args.province === 'object'
        ? args.province.uuid
        : args.province,
    }

    return confirmDelete.definition.url
            .replace('{province}', parsedArgs.province.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:59
* @route '/dashboard/hotel-provinces/{province}/delete'
*/
confirmDelete.get = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:59
* @route '/dashboard/hotel-provinces/{province}/delete'
*/
confirmDelete.head = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:59
* @route '/dashboard/hotel-provinces/{province}/delete'
*/
const confirmDeleteForm = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:59
* @route '/dashboard/hotel-provinces/{province}/delete'
*/
confirmDeleteForm.get = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:59
* @route '/dashboard/hotel-provinces/{province}/delete'
*/
confirmDeleteForm.head = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:23
* @route '/dashboard/hotel-provinces'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-provinces',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:23
* @route '/dashboard/hotel-provinces'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:23
* @route '/dashboard/hotel-provinces'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:23
* @route '/dashboard/hotel-provinces'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:23
* @route '/dashboard/hotel-provinces'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:23
* @route '/dashboard/hotel-provinces'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:23
* @route '/dashboard/hotel-provinces'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:31
* @route '/dashboard/hotel-provinces/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-provinces/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:31
* @route '/dashboard/hotel-provinces/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:31
* @route '/dashboard/hotel-provinces/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:31
* @route '/dashboard/hotel-provinces/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:31
* @route '/dashboard/hotel-provinces/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:31
* @route '/dashboard/hotel-provinces/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::create
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:31
* @route '/dashboard/hotel-provinces/create'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:37
* @route '/dashboard/hotel-provinces'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/hotel-provinces',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:37
* @route '/dashboard/hotel-provinces'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:37
* @route '/dashboard/hotel-provinces'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:37
* @route '/dashboard/hotel-provinces'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::store
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:37
* @route '/dashboard/hotel-provinces'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:52
* @route '/dashboard/hotel-provinces/{province}'
*/
export const show = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-provinces/{province}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:52
* @route '/dashboard/hotel-provinces/{province}'
*/
show.url = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { province: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { province: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            province: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        province: typeof args.province === 'object'
        ? args.province.uuid
        : args.province,
    }

    return show.definition.url
            .replace('{province}', parsedArgs.province.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:52
* @route '/dashboard/hotel-provinces/{province}'
*/
show.get = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:52
* @route '/dashboard/hotel-provinces/{province}'
*/
show.head = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:52
* @route '/dashboard/hotel-provinces/{province}'
*/
const showForm = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:52
* @route '/dashboard/hotel-provinces/{province}'
*/
showForm.get = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:52
* @route '/dashboard/hotel-provinces/{province}'
*/
showForm.head = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:46
* @route '/dashboard/hotel-provinces/{province}/edit'
*/
export const edit = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-provinces/{province}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:46
* @route '/dashboard/hotel-provinces/{province}/edit'
*/
edit.url = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { province: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { province: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            province: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        province: typeof args.province === 'object'
        ? args.province.uuid
        : args.province,
    }

    return edit.definition.url
            .replace('{province}', parsedArgs.province.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:46
* @route '/dashboard/hotel-provinces/{province}/edit'
*/
edit.get = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:46
* @route '/dashboard/hotel-provinces/{province}/edit'
*/
edit.head = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:46
* @route '/dashboard/hotel-provinces/{province}/edit'
*/
const editForm = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:46
* @route '/dashboard/hotel-provinces/{province}/edit'
*/
editForm.get = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::edit
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:46
* @route '/dashboard/hotel-provinces/{province}/edit'
*/
editForm.head = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:65
* @route '/dashboard/hotel-provinces/{province}'
*/
export const update = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/hotel-provinces/{province}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:65
* @route '/dashboard/hotel-provinces/{province}'
*/
update.url = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { province: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { province: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            province: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        province: typeof args.province === 'object'
        ? args.province.uuid
        : args.province,
    }

    return update.definition.url
            .replace('{province}', parsedArgs.province.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:65
* @route '/dashboard/hotel-provinces/{province}'
*/
update.put = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:65
* @route '/dashboard/hotel-provinces/{province}'
*/
update.patch = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:65
* @route '/dashboard/hotel-provinces/{province}'
*/
const updateForm = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:65
* @route '/dashboard/hotel-provinces/{province}'
*/
updateForm.put = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::update
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:65
* @route '/dashboard/hotel-provinces/{province}'
*/
updateForm.patch = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:74
* @route '/dashboard/hotel-provinces/{province}'
*/
export const destroy = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/hotel-provinces/{province}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:74
* @route '/dashboard/hotel-provinces/{province}'
*/
destroy.url = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { province: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { province: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            province: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        province: typeof args.province === 'object'
        ? args.province.uuid
        : args.province,
    }

    return destroy.definition.url
            .replace('{province}', parsedArgs.province.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:74
* @route '/dashboard/hotel-provinces/{province}'
*/
destroy.delete = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:74
* @route '/dashboard/hotel-provinces/{province}'
*/
const destroyForm = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\ProvinceController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/ProvinceController.php:74
* @route '/dashboard/hotel-provinces/{province}'
*/
destroyForm.delete = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const provinces = {
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

export default provinces