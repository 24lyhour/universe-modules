import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::index
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:16
* @route '/dashboard/services'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::index
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:16
* @route '/dashboard/services'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::index
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:16
* @route '/dashboard/services'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::index
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:16
* @route '/dashboard/services'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::index
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:16
* @route '/dashboard/services'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::index
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:16
* @route '/dashboard/services'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::index
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:16
* @route '/dashboard/services'
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
* @see \Modules\Porfolio\Http\Controllers\ServiceController::create
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:28
* @route '/dashboard/services/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/services/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::create
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:28
* @route '/dashboard/services/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::create
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:28
* @route '/dashboard/services/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::create
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:28
* @route '/dashboard/services/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::create
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:28
* @route '/dashboard/services/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::create
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:28
* @route '/dashboard/services/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::create
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:28
* @route '/dashboard/services/create'
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
* @see \Modules\Porfolio\Http\Controllers\ServiceController::store
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:34
* @route '/dashboard/services'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/services',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::store
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:34
* @route '/dashboard/services'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::store
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:34
* @route '/dashboard/services'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::store
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:34
* @route '/dashboard/services'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::store
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:34
* @route '/dashboard/services'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::show
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:0
* @route '/dashboard/services/{service}'
*/
export const show = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/services/{service}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::show
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:0
* @route '/dashboard/services/{service}'
*/
show.url = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service: args }
    }

    if (Array.isArray(args)) {
        args = {
            service: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        service: args.service,
    }

    return show.definition.url
            .replace('{service}', parsedArgs.service.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::show
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:0
* @route '/dashboard/services/{service}'
*/
show.get = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::show
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:0
* @route '/dashboard/services/{service}'
*/
show.head = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::show
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:0
* @route '/dashboard/services/{service}'
*/
const showForm = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::show
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:0
* @route '/dashboard/services/{service}'
*/
showForm.get = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::show
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:0
* @route '/dashboard/services/{service}'
*/
showForm.head = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Porfolio\Http\Controllers\ServiceController::edit
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:59
* @route '/dashboard/services/{service}/edit'
*/
export const edit = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/services/{service}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::edit
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:59
* @route '/dashboard/services/{service}/edit'
*/
edit.url = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service: args }
    }

    if (Array.isArray(args)) {
        args = {
            service: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        service: args.service,
    }

    return edit.definition.url
            .replace('{service}', parsedArgs.service.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::edit
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:59
* @route '/dashboard/services/{service}/edit'
*/
edit.get = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::edit
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:59
* @route '/dashboard/services/{service}/edit'
*/
edit.head = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::edit
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:59
* @route '/dashboard/services/{service}/edit'
*/
const editForm = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::edit
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:59
* @route '/dashboard/services/{service}/edit'
*/
editForm.get = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::edit
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:59
* @route '/dashboard/services/{service}/edit'
*/
editForm.head = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Porfolio\Http\Controllers\ServiceController::update
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:68
* @route '/dashboard/services/{service}'
*/
export const update = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/services/{service}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::update
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:68
* @route '/dashboard/services/{service}'
*/
update.url = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service: args }
    }

    if (Array.isArray(args)) {
        args = {
            service: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        service: args.service,
    }

    return update.definition.url
            .replace('{service}', parsedArgs.service.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::update
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:68
* @route '/dashboard/services/{service}'
*/
update.put = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::update
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:68
* @route '/dashboard/services/{service}'
*/
update.patch = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::update
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:68
* @route '/dashboard/services/{service}'
*/
const updateForm = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::update
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:68
* @route '/dashboard/services/{service}'
*/
updateForm.put = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::update
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:68
* @route '/dashboard/services/{service}'
*/
updateForm.patch = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Porfolio\Http\Controllers\ServiceController::destroy
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:96
* @route '/dashboard/services/{service}'
*/
export const destroy = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/services/{service}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::destroy
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:96
* @route '/dashboard/services/{service}'
*/
destroy.url = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service: args }
    }

    if (Array.isArray(args)) {
        args = {
            service: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        service: args.service,
    }

    return destroy.definition.url
            .replace('{service}', parsedArgs.service.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::destroy
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:96
* @route '/dashboard/services/{service}'
*/
destroy.delete = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::destroy
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:96
* @route '/dashboard/services/{service}'
*/
const destroyForm = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ServiceController::destroy
* @see Modules/Porfolio/app/Http/Controllers/ServiceController.php:96
* @route '/dashboard/services/{service}'
*/
destroyForm.delete = (args: { service: string | number } | [service: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const ServiceController = { index, create, store, show, edit, update, destroy }

export default ServiceController