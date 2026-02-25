import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:38
* @route '/dashboard/menu-types'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/menu-types',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:38
* @route '/dashboard/menu-types'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:38
* @route '/dashboard/menu-types'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:38
* @route '/dashboard/menu-types'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:38
* @route '/dashboard/menu-types'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:38
* @route '/dashboard/menu-types'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:38
* @route '/dashboard/menu-types'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:51
* @route '/dashboard/menu-types/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/menu-types/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:51
* @route '/dashboard/menu-types/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:51
* @route '/dashboard/menu-types/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:51
* @route '/dashboard/menu-types/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:51
* @route '/dashboard/menu-types/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:51
* @route '/dashboard/menu-types/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:51
* @route '/dashboard/menu-types/create'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:62
* @route '/dashboard/menu-types'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/menu-types',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:62
* @route '/dashboard/menu-types'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:62
* @route '/dashboard/menu-types'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:62
* @route '/dashboard/menu-types'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:62
* @route '/dashboard/menu-types'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:74
* @route '/dashboard/menu-types/{menu_type}'
*/
export const show = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/menu-types/{menu_type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:74
* @route '/dashboard/menu-types/{menu_type}'
*/
show.url = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            menu_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu_type: args.menu_type,
    }

    return show.definition.url
            .replace('{menu_type}', parsedArgs.menu_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:74
* @route '/dashboard/menu-types/{menu_type}'
*/
show.get = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:74
* @route '/dashboard/menu-types/{menu_type}'
*/
show.head = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:74
* @route '/dashboard/menu-types/{menu_type}'
*/
const showForm = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:74
* @route '/dashboard/menu-types/{menu_type}'
*/
showForm.get = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:74
* @route '/dashboard/menu-types/{menu_type}'
*/
showForm.head = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:84
* @route '/dashboard/menu-types/{menu_type}/edit'
*/
export const edit = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/menu-types/{menu_type}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:84
* @route '/dashboard/menu-types/{menu_type}/edit'
*/
edit.url = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            menu_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu_type: args.menu_type,
    }

    return edit.definition.url
            .replace('{menu_type}', parsedArgs.menu_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:84
* @route '/dashboard/menu-types/{menu_type}/edit'
*/
edit.get = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:84
* @route '/dashboard/menu-types/{menu_type}/edit'
*/
edit.head = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:84
* @route '/dashboard/menu-types/{menu_type}/edit'
*/
const editForm = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:84
* @route '/dashboard/menu-types/{menu_type}/edit'
*/
editForm.get = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:84
* @route '/dashboard/menu-types/{menu_type}/edit'
*/
editForm.head = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:95
* @route '/dashboard/menu-types/{menu_type}'
*/
export const update = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/menu-types/{menu_type}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:95
* @route '/dashboard/menu-types/{menu_type}'
*/
update.url = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            menu_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu_type: args.menu_type,
    }

    return update.definition.url
            .replace('{menu_type}', parsedArgs.menu_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:95
* @route '/dashboard/menu-types/{menu_type}'
*/
update.put = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:95
* @route '/dashboard/menu-types/{menu_type}'
*/
update.patch = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:95
* @route '/dashboard/menu-types/{menu_type}'
*/
const updateForm = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:95
* @route '/dashboard/menu-types/{menu_type}'
*/
updateForm.put = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:95
* @route '/dashboard/menu-types/{menu_type}'
*/
updateForm.patch = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:117
* @route '/dashboard/menu-types/{menu_type}'
*/
export const destroy = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/menu-types/{menu_type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:117
* @route '/dashboard/menu-types/{menu_type}'
*/
destroy.url = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            menu_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu_type: args.menu_type,
    }

    return destroy.definition.url
            .replace('{menu_type}', parsedArgs.menu_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:117
* @route '/dashboard/menu-types/{menu_type}'
*/
destroy.delete = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:117
* @route '/dashboard/menu-types/{menu_type}'
*/
const destroyForm = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:117
* @route '/dashboard/menu-types/{menu_type}'
*/
destroyForm.delete = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:107
* @route '/dashboard/menu-types/{menu_type}/delete'
*/
export const confirmDelete = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/menu-types/{menu_type}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:107
* @route '/dashboard/menu-types/{menu_type}/delete'
*/
confirmDelete.url = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { menu_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            menu_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        menu_type: args.menu_type,
    }

    return confirmDelete.definition.url
            .replace('{menu_type}', parsedArgs.menu_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:107
* @route '/dashboard/menu-types/{menu_type}/delete'
*/
confirmDelete.get = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:107
* @route '/dashboard/menu-types/{menu_type}/delete'
*/
confirmDelete.head = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:107
* @route '/dashboard/menu-types/{menu_type}/delete'
*/
const confirmDeleteForm = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:107
* @route '/dashboard/menu-types/{menu_type}/delete'
*/
confirmDeleteForm.get = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\MenuTypeController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/MenuTypeController.php:107
* @route '/dashboard/menu-types/{menu_type}/delete'
*/
confirmDeleteForm.head = (args: { menu_type: string | number } | [menu_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

confirmDelete.form = confirmDeleteForm

const MenuTypeController = { index, create, store, show, edit, update, destroy, confirmDelete }

export default MenuTypeController