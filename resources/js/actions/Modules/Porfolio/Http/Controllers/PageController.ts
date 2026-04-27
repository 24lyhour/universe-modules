import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Porfolio\Http\Controllers\PageController::index
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:18
* @route '/dashboard/pages'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/pages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::index
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:18
* @route '/dashboard/pages'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::index
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:18
* @route '/dashboard/pages'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::index
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:18
* @route '/dashboard/pages'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::index
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:18
* @route '/dashboard/pages'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::index
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:18
* @route '/dashboard/pages'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::index
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:18
* @route '/dashboard/pages'
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
* @see \Modules\Porfolio\Http\Controllers\PageController::create
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:30
* @route '/dashboard/pages/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/pages/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::create
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:30
* @route '/dashboard/pages/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::create
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:30
* @route '/dashboard/pages/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::create
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:30
* @route '/dashboard/pages/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::create
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:30
* @route '/dashboard/pages/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::create
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:30
* @route '/dashboard/pages/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::create
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:30
* @route '/dashboard/pages/create'
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
* @see \Modules\Porfolio\Http\Controllers\PageController::store
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:40
* @route '/dashboard/pages'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/pages',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::store
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:40
* @route '/dashboard/pages'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::store
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:40
* @route '/dashboard/pages'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::store
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:40
* @route '/dashboard/pages'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::store
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:40
* @route '/dashboard/pages'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::show
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:0
* @route '/dashboard/pages/{page}'
*/
export const show = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/pages/{page}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::show
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:0
* @route '/dashboard/pages/{page}'
*/
show.url = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

    if (Array.isArray(args)) {
        args = {
            page: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        page: args.page,
    }

    return show.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::show
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:0
* @route '/dashboard/pages/{page}'
*/
show.get = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::show
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:0
* @route '/dashboard/pages/{page}'
*/
show.head = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::show
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:0
* @route '/dashboard/pages/{page}'
*/
const showForm = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::show
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:0
* @route '/dashboard/pages/{page}'
*/
showForm.get = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::show
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:0
* @route '/dashboard/pages/{page}'
*/
showForm.head = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Porfolio\Http\Controllers\PageController::edit
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:75
* @route '/dashboard/pages/{page}/edit'
*/
export const edit = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/pages/{page}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::edit
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:75
* @route '/dashboard/pages/{page}/edit'
*/
edit.url = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

    if (Array.isArray(args)) {
        args = {
            page: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        page: args.page,
    }

    return edit.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::edit
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:75
* @route '/dashboard/pages/{page}/edit'
*/
edit.get = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::edit
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:75
* @route '/dashboard/pages/{page}/edit'
*/
edit.head = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::edit
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:75
* @route '/dashboard/pages/{page}/edit'
*/
const editForm = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::edit
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:75
* @route '/dashboard/pages/{page}/edit'
*/
editForm.get = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::edit
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:75
* @route '/dashboard/pages/{page}/edit'
*/
editForm.head = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Porfolio\Http\Controllers\PageController::update
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:88
* @route '/dashboard/pages/{page}'
*/
export const update = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/pages/{page}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::update
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:88
* @route '/dashboard/pages/{page}'
*/
update.url = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

    if (Array.isArray(args)) {
        args = {
            page: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        page: args.page,
    }

    return update.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::update
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:88
* @route '/dashboard/pages/{page}'
*/
update.put = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::update
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:88
* @route '/dashboard/pages/{page}'
*/
update.patch = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::update
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:88
* @route '/dashboard/pages/{page}'
*/
const updateForm = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::update
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:88
* @route '/dashboard/pages/{page}'
*/
updateForm.put = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::update
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:88
* @route '/dashboard/pages/{page}'
*/
updateForm.patch = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Porfolio\Http\Controllers\PageController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:126
* @route '/dashboard/pages/{page}'
*/
export const destroy = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/pages/{page}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:126
* @route '/dashboard/pages/{page}'
*/
destroy.url = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { page: args }
    }

    if (Array.isArray(args)) {
        args = {
            page: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        page: args.page,
    }

    return destroy.definition.url
            .replace('{page}', parsedArgs.page.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:126
* @route '/dashboard/pages/{page}'
*/
destroy.delete = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:126
* @route '/dashboard/pages/{page}'
*/
const destroyForm = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PageController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PageController.php:126
* @route '/dashboard/pages/{page}'
*/
destroyForm.delete = (args: { page: string | number } | [page: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const PageController = { index, create, store, show, edit, update, destroy }

export default PageController