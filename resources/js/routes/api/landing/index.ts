import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/api/v1/landings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/landings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/api/v1/landings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/api/v1/landings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/api/v1/landings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/api/v1/landings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/api/v1/landings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/api/v1/landings'
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
* @see \Modules\Landing\Http\Controllers\LandingController::store
* @see Modules/Landing/app/Http/Controllers/LandingController.php:29
* @route '/api/v1/landings'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/landings',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::store
* @see Modules/Landing/app/Http/Controllers/LandingController.php:29
* @route '/api/v1/landings'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::store
* @see Modules/Landing/app/Http/Controllers/LandingController.php:29
* @route '/api/v1/landings'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::store
* @see Modules/Landing/app/Http/Controllers/LandingController.php:29
* @route '/api/v1/landings'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::store
* @see Modules/Landing/app/Http/Controllers/LandingController.php:29
* @route '/api/v1/landings'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/api/v1/landings/{landing}'
*/
export const show = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/landings/{landing}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/api/v1/landings/{landing}'
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
* @route '/api/v1/landings/{landing}'
*/
show.get = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/api/v1/landings/{landing}'
*/
show.head = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/api/v1/landings/{landing}'
*/
const showForm = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/api/v1/landings/{landing}'
*/
showForm.get = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/api/v1/landings/{landing}'
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
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/api/v1/landings/{landing}'
*/
export const update = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/landings/{landing}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/api/v1/landings/{landing}'
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
* @route '/api/v1/landings/{landing}'
*/
update.put = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/api/v1/landings/{landing}'
*/
update.patch = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/api/v1/landings/{landing}'
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
* @route '/api/v1/landings/{landing}'
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
* @route '/api/v1/landings/{landing}'
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
* @route '/api/v1/landings/{landing}'
*/
export const destroy = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/landings/{landing}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::destroy
* @see Modules/Landing/app/Http/Controllers/LandingController.php:55
* @route '/api/v1/landings/{landing}'
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
* @route '/api/v1/landings/{landing}'
*/
destroy.delete = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::destroy
* @see Modules/Landing/app/Http/Controllers/LandingController.php:55
* @route '/api/v1/landings/{landing}'
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
* @route '/api/v1/landings/{landing}'
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
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default landing