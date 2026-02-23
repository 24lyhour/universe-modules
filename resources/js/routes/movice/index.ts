import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Movice\Http\Controllers\MoviceController::index
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:13
* @route '/movices'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/movices',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::index
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:13
* @route '/movices'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::index
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:13
* @route '/movices'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::index
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:13
* @route '/movices'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::index
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:13
* @route '/movices'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::index
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:13
* @route '/movices'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::index
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:13
* @route '/movices'
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
* @see \Modules\Movice\Http\Controllers\MoviceController::create
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:21
* @route '/movices/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/movices/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::create
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:21
* @route '/movices/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::create
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:21
* @route '/movices/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::create
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:21
* @route '/movices/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::create
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:21
* @route '/movices/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::create
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:21
* @route '/movices/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::create
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:21
* @route '/movices/create'
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
* @see \Modules\Movice\Http\Controllers\MoviceController::store
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:29
* @route '/movices'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/movices',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::store
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:29
* @route '/movices'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::store
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:29
* @route '/movices'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::store
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:29
* @route '/movices'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::store
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:29
* @route '/movices'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::show
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:34
* @route '/movices/{movice}'
*/
export const show = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/movices/{movice}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::show
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:34
* @route '/movices/{movice}'
*/
show.url = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { movice: args }
    }

    if (Array.isArray(args)) {
        args = {
            movice: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        movice: args.movice,
    }

    return show.definition.url
            .replace('{movice}', parsedArgs.movice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::show
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:34
* @route '/movices/{movice}'
*/
show.get = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::show
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:34
* @route '/movices/{movice}'
*/
show.head = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::show
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:34
* @route '/movices/{movice}'
*/
const showForm = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::show
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:34
* @route '/movices/{movice}'
*/
showForm.get = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::show
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:34
* @route '/movices/{movice}'
*/
showForm.head = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Movice\Http\Controllers\MoviceController::edit
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:42
* @route '/movices/{movice}/edit'
*/
export const edit = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/movices/{movice}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::edit
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:42
* @route '/movices/{movice}/edit'
*/
edit.url = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { movice: args }
    }

    if (Array.isArray(args)) {
        args = {
            movice: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        movice: args.movice,
    }

    return edit.definition.url
            .replace('{movice}', parsedArgs.movice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::edit
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:42
* @route '/movices/{movice}/edit'
*/
edit.get = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::edit
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:42
* @route '/movices/{movice}/edit'
*/
edit.head = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::edit
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:42
* @route '/movices/{movice}/edit'
*/
const editForm = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::edit
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:42
* @route '/movices/{movice}/edit'
*/
editForm.get = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::edit
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:42
* @route '/movices/{movice}/edit'
*/
editForm.head = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Movice\Http\Controllers\MoviceController::update
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:50
* @route '/movices/{movice}'
*/
export const update = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/movices/{movice}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::update
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:50
* @route '/movices/{movice}'
*/
update.url = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { movice: args }
    }

    if (Array.isArray(args)) {
        args = {
            movice: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        movice: args.movice,
    }

    return update.definition.url
            .replace('{movice}', parsedArgs.movice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::update
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:50
* @route '/movices/{movice}'
*/
update.put = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::update
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:50
* @route '/movices/{movice}'
*/
update.patch = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::update
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:50
* @route '/movices/{movice}'
*/
const updateForm = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::update
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:50
* @route '/movices/{movice}'
*/
updateForm.put = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::update
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:50
* @route '/movices/{movice}'
*/
updateForm.patch = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Movice\Http\Controllers\MoviceController::destroy
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:55
* @route '/movices/{movice}'
*/
export const destroy = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/movices/{movice}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::destroy
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:55
* @route '/movices/{movice}'
*/
destroy.url = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { movice: args }
    }

    if (Array.isArray(args)) {
        args = {
            movice: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        movice: args.movice,
    }

    return destroy.definition.url
            .replace('{movice}', parsedArgs.movice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::destroy
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:55
* @route '/movices/{movice}'
*/
destroy.delete = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::destroy
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:55
* @route '/movices/{movice}'
*/
const destroyForm = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::destroy
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:55
* @route '/movices/{movice}'
*/
destroyForm.delete = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const movice = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default movice