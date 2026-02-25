import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:40
* @route '/dashboard/categories'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:40
* @route '/dashboard/categories'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:40
* @route '/dashboard/categories'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:40
* @route '/dashboard/categories'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:40
* @route '/dashboard/categories'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:40
* @route '/dashboard/categories'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::index
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:40
* @route '/dashboard/categories'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:53
* @route '/dashboard/categories/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/categories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:53
* @route '/dashboard/categories/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:53
* @route '/dashboard/categories/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:53
* @route '/dashboard/categories/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:53
* @route '/dashboard/categories/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:53
* @route '/dashboard/categories/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::create
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:53
* @route '/dashboard/categories/create'
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:71
* @route '/dashboard/categories'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/categories',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:71
* @route '/dashboard/categories'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:71
* @route '/dashboard/categories'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:71
* @route '/dashboard/categories'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::store
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:71
* @route '/dashboard/categories'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:90
* @route '/dashboard/categories/{category}'
*/
export const show = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/categories/{category}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:90
* @route '/dashboard/categories/{category}'
*/
show.url = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return show.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:90
* @route '/dashboard/categories/{category}'
*/
show.get = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:90
* @route '/dashboard/categories/{category}'
*/
show.head = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:90
* @route '/dashboard/categories/{category}'
*/
const showForm = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:90
* @route '/dashboard/categories/{category}'
*/
showForm.get = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::show
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:90
* @route '/dashboard/categories/{category}'
*/
showForm.head = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:100
* @route '/dashboard/categories/{category}/edit'
*/
export const edit = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/categories/{category}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:100
* @route '/dashboard/categories/{category}/edit'
*/
edit.url = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return edit.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:100
* @route '/dashboard/categories/{category}/edit'
*/
edit.get = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:100
* @route '/dashboard/categories/{category}/edit'
*/
edit.head = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:100
* @route '/dashboard/categories/{category}/edit'
*/
const editForm = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:100
* @route '/dashboard/categories/{category}/edit'
*/
editForm.get = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::edit
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:100
* @route '/dashboard/categories/{category}/edit'
*/
editForm.head = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:111
* @route '/dashboard/categories/{category}'
*/
export const update = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/categories/{category}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:111
* @route '/dashboard/categories/{category}'
*/
update.url = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return update.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:111
* @route '/dashboard/categories/{category}'
*/
update.put = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:111
* @route '/dashboard/categories/{category}'
*/
update.patch = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:111
* @route '/dashboard/categories/{category}'
*/
const updateForm = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:111
* @route '/dashboard/categories/{category}'
*/
updateForm.put = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::update
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:111
* @route '/dashboard/categories/{category}'
*/
updateForm.patch = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:133
* @route '/dashboard/categories/{category}'
*/
export const destroy = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/categories/{category}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:133
* @route '/dashboard/categories/{category}'
*/
destroy.url = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return destroy.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:133
* @route '/dashboard/categories/{category}'
*/
destroy.delete = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:133
* @route '/dashboard/categories/{category}'
*/
const destroyForm = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::destroy
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:133
* @route '/dashboard/categories/{category}'
*/
destroyForm.delete = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:123
* @route '/dashboard/categories/{category}/delete'
*/
export const confirmDelete = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/categories/{category}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:123
* @route '/dashboard/categories/{category}/delete'
*/
confirmDelete.url = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return confirmDelete.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:123
* @route '/dashboard/categories/{category}/delete'
*/
confirmDelete.get = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:123
* @route '/dashboard/categories/{category}/delete'
*/
confirmDelete.head = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:123
* @route '/dashboard/categories/{category}/delete'
*/
const confirmDeleteForm = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:123
* @route '/dashboard/categories/{category}/delete'
*/
confirmDeleteForm.get = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::confirmDelete
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:123
* @route '/dashboard/categories/{category}/delete'
*/
confirmDeleteForm.head = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

confirmDelete.form = confirmDeleteForm

const CategoryController = { index, create, store, show, edit, update, destroy, confirmDelete }

export default CategoryController