import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/landings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/landings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/landings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/landings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/landings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/landings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/landings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/landings'
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
* @see \Modules\Landing\Http\Controllers\LandingController::create
* @see Modules/Landing/app/Http/Controllers/LandingController.php:21
* @route '/landings/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/landings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::create
* @see Modules/Landing/app/Http/Controllers/LandingController.php:21
* @route '/landings/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::create
* @see Modules/Landing/app/Http/Controllers/LandingController.php:21
* @route '/landings/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::create
* @see Modules/Landing/app/Http/Controllers/LandingController.php:21
* @route '/landings/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::create
* @see Modules/Landing/app/Http/Controllers/LandingController.php:21
* @route '/landings/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::create
* @see Modules/Landing/app/Http/Controllers/LandingController.php:21
* @route '/landings/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::create
* @see Modules/Landing/app/Http/Controllers/LandingController.php:21
* @route '/landings/create'
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
* @see \Modules\Landing\Http\Controllers\LandingController::store
* @see Modules/Landing/app/Http/Controllers/LandingController.php:29
* @route '/landings'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/landings',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::store
* @see Modules/Landing/app/Http/Controllers/LandingController.php:29
* @route '/landings'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::store
* @see Modules/Landing/app/Http/Controllers/LandingController.php:29
* @route '/landings'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::store
* @see Modules/Landing/app/Http/Controllers/LandingController.php:29
* @route '/landings'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::store
* @see Modules/Landing/app/Http/Controllers/LandingController.php:29
* @route '/landings'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/landings/{landing}'
*/
export const show = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/landings/{landing}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/landings/{landing}'
*/
show.url = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { landing: args }
    }

    if (Array.isArray(args)) {
        args = {
            landing: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        landing: args.landing,
    }

    return show.definition.url
            .replace('{landing}', parsedArgs.landing.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/landings/{landing}'
*/
show.get = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/landings/{landing}'
*/
show.head = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/landings/{landing}'
*/
const showForm = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/landings/{landing}'
*/
showForm.get = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/landings/{landing}'
*/
showForm.head = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Landing\Http\Controllers\LandingController::edit
* @see Modules/Landing/app/Http/Controllers/LandingController.php:42
* @route '/landings/{landing}/edit'
*/
export const edit = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/landings/{landing}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::edit
* @see Modules/Landing/app/Http/Controllers/LandingController.php:42
* @route '/landings/{landing}/edit'
*/
edit.url = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { landing: args }
    }

    if (Array.isArray(args)) {
        args = {
            landing: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        landing: args.landing,
    }

    return edit.definition.url
            .replace('{landing}', parsedArgs.landing.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::edit
* @see Modules/Landing/app/Http/Controllers/LandingController.php:42
* @route '/landings/{landing}/edit'
*/
edit.get = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::edit
* @see Modules/Landing/app/Http/Controllers/LandingController.php:42
* @route '/landings/{landing}/edit'
*/
edit.head = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::edit
* @see Modules/Landing/app/Http/Controllers/LandingController.php:42
* @route '/landings/{landing}/edit'
*/
const editForm = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::edit
* @see Modules/Landing/app/Http/Controllers/LandingController.php:42
* @route '/landings/{landing}/edit'
*/
editForm.get = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::edit
* @see Modules/Landing/app/Http/Controllers/LandingController.php:42
* @route '/landings/{landing}/edit'
*/
editForm.head = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/landings/{landing}'
*/
export const update = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/landings/{landing}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/landings/{landing}'
*/
update.url = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { landing: args }
    }

    if (Array.isArray(args)) {
        args = {
            landing: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        landing: args.landing,
    }

    return update.definition.url
            .replace('{landing}', parsedArgs.landing.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/landings/{landing}'
*/
update.put = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/landings/{landing}'
*/
update.patch = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/landings/{landing}'
*/
const updateForm = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/landings/{landing}'
*/
updateForm.put = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/landings/{landing}'
*/
updateForm.patch = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Landing\Http\Controllers\LandingController::destroy
* @see Modules/Landing/app/Http/Controllers/LandingController.php:55
* @route '/landings/{landing}'
*/
export const destroy = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/landings/{landing}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::destroy
* @see Modules/Landing/app/Http/Controllers/LandingController.php:55
* @route '/landings/{landing}'
*/
destroy.url = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { landing: args }
    }

    if (Array.isArray(args)) {
        args = {
            landing: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        landing: args.landing,
    }

    return destroy.definition.url
            .replace('{landing}', parsedArgs.landing.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::destroy
* @see Modules/Landing/app/Http/Controllers/LandingController.php:55
* @route '/landings/{landing}'
*/
destroy.delete = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::destroy
* @see Modules/Landing/app/Http/Controllers/LandingController.php:55
* @route '/landings/{landing}'
*/
const destroyForm = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::destroy
* @see Modules/Landing/app/Http/Controllers/LandingController.php:55
* @route '/landings/{landing}'
*/
destroyForm.delete = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const landing = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default landing