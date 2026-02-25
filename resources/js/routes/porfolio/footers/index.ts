import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::index
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:16
* @route '/dashboard/footers'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/footers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::index
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:16
* @route '/dashboard/footers'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::index
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:16
* @route '/dashboard/footers'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::index
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:16
* @route '/dashboard/footers'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::index
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:16
* @route '/dashboard/footers'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::index
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:16
* @route '/dashboard/footers'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::index
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:16
* @route '/dashboard/footers'
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
* @see \Modules\Porfolio\Http\Controllers\FooterController::create
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:28
* @route '/dashboard/footers/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/footers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::create
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:28
* @route '/dashboard/footers/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::create
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:28
* @route '/dashboard/footers/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::create
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:28
* @route '/dashboard/footers/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::create
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:28
* @route '/dashboard/footers/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::create
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:28
* @route '/dashboard/footers/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::create
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:28
* @route '/dashboard/footers/create'
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
* @see \Modules\Porfolio\Http\Controllers\FooterController::store
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:34
* @route '/dashboard/footers'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/footers',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::store
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:34
* @route '/dashboard/footers'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::store
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:34
* @route '/dashboard/footers'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::store
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:34
* @route '/dashboard/footers'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::store
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:34
* @route '/dashboard/footers'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::show
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:0
* @route '/dashboard/footers/{footer}'
*/
export const show = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/footers/{footer}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::show
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:0
* @route '/dashboard/footers/{footer}'
*/
show.url = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { footer: args }
    }

    if (Array.isArray(args)) {
        args = {
            footer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        footer: args.footer,
    }

    return show.definition.url
            .replace('{footer}', parsedArgs.footer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::show
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:0
* @route '/dashboard/footers/{footer}'
*/
show.get = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::show
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:0
* @route '/dashboard/footers/{footer}'
*/
show.head = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::show
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:0
* @route '/dashboard/footers/{footer}'
*/
const showForm = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::show
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:0
* @route '/dashboard/footers/{footer}'
*/
showForm.get = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::show
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:0
* @route '/dashboard/footers/{footer}'
*/
showForm.head = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Porfolio\Http\Controllers\FooterController::edit
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:62
* @route '/dashboard/footers/{footer}/edit'
*/
export const edit = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/footers/{footer}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::edit
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:62
* @route '/dashboard/footers/{footer}/edit'
*/
edit.url = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { footer: args }
    }

    if (Array.isArray(args)) {
        args = {
            footer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        footer: args.footer,
    }

    return edit.definition.url
            .replace('{footer}', parsedArgs.footer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::edit
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:62
* @route '/dashboard/footers/{footer}/edit'
*/
edit.get = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::edit
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:62
* @route '/dashboard/footers/{footer}/edit'
*/
edit.head = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::edit
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:62
* @route '/dashboard/footers/{footer}/edit'
*/
const editForm = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::edit
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:62
* @route '/dashboard/footers/{footer}/edit'
*/
editForm.get = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::edit
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:62
* @route '/dashboard/footers/{footer}/edit'
*/
editForm.head = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Porfolio\Http\Controllers\FooterController::update
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:71
* @route '/dashboard/footers/{footer}'
*/
export const update = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/footers/{footer}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::update
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:71
* @route '/dashboard/footers/{footer}'
*/
update.url = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { footer: args }
    }

    if (Array.isArray(args)) {
        args = {
            footer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        footer: args.footer,
    }

    return update.definition.url
            .replace('{footer}', parsedArgs.footer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::update
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:71
* @route '/dashboard/footers/{footer}'
*/
update.put = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::update
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:71
* @route '/dashboard/footers/{footer}'
*/
update.patch = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::update
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:71
* @route '/dashboard/footers/{footer}'
*/
const updateForm = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::update
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:71
* @route '/dashboard/footers/{footer}'
*/
updateForm.put = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::update
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:71
* @route '/dashboard/footers/{footer}'
*/
updateForm.patch = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Porfolio\Http\Controllers\FooterController::destroy
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:99
* @route '/dashboard/footers/{footer}'
*/
export const destroy = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/footers/{footer}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::destroy
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:99
* @route '/dashboard/footers/{footer}'
*/
destroy.url = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { footer: args }
    }

    if (Array.isArray(args)) {
        args = {
            footer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        footer: args.footer,
    }

    return destroy.definition.url
            .replace('{footer}', parsedArgs.footer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::destroy
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:99
* @route '/dashboard/footers/{footer}'
*/
destroy.delete = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::destroy
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:99
* @route '/dashboard/footers/{footer}'
*/
const destroyForm = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\FooterController::destroy
* @see Modules/Porfolio/app/Http/Controllers/FooterController.php:99
* @route '/dashboard/footers/{footer}'
*/
destroyForm.delete = (args: { footer: string | number } | [footer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const footers = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default footers