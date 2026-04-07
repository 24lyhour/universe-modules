import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::index
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:24
* @route '/dashboard/special-offers'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/special-offers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::index
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:24
* @route '/dashboard/special-offers'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::index
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:24
* @route '/dashboard/special-offers'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::index
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:24
* @route '/dashboard/special-offers'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::index
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:24
* @route '/dashboard/special-offers'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::index
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:24
* @route '/dashboard/special-offers'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::index
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:24
* @route '/dashboard/special-offers'
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
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::create
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:38
* @route '/dashboard/special-offers/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/special-offers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::create
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:38
* @route '/dashboard/special-offers/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::create
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:38
* @route '/dashboard/special-offers/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::create
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:38
* @route '/dashboard/special-offers/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::create
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:38
* @route '/dashboard/special-offers/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::create
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:38
* @route '/dashboard/special-offers/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::create
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:38
* @route '/dashboard/special-offers/create'
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
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::store
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:44
* @route '/dashboard/special-offers'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/special-offers',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::store
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:44
* @route '/dashboard/special-offers'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::store
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:44
* @route '/dashboard/special-offers'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::store
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:44
* @route '/dashboard/special-offers'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::store
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:44
* @route '/dashboard/special-offers'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::show
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:52
* @route '/dashboard/special-offers/{specialOffer}'
*/
export const show = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/special-offers/{specialOffer}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::show
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:52
* @route '/dashboard/special-offers/{specialOffer}'
*/
show.url = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { specialOffer: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { specialOffer: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            specialOffer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        specialOffer: typeof args.specialOffer === 'object'
        ? args.specialOffer.uuid
        : args.specialOffer,
    }

    return show.definition.url
            .replace('{specialOffer}', parsedArgs.specialOffer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::show
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:52
* @route '/dashboard/special-offers/{specialOffer}'
*/
show.get = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::show
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:52
* @route '/dashboard/special-offers/{specialOffer}'
*/
show.head = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::show
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:52
* @route '/dashboard/special-offers/{specialOffer}'
*/
const showForm = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::show
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:52
* @route '/dashboard/special-offers/{specialOffer}'
*/
showForm.get = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::show
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:52
* @route '/dashboard/special-offers/{specialOffer}'
*/
showForm.head = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::edit
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:59
* @route '/dashboard/special-offers/{specialOffer}/edit'
*/
export const edit = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/special-offers/{specialOffer}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::edit
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:59
* @route '/dashboard/special-offers/{specialOffer}/edit'
*/
edit.url = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { specialOffer: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { specialOffer: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            specialOffer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        specialOffer: typeof args.specialOffer === 'object'
        ? args.specialOffer.uuid
        : args.specialOffer,
    }

    return edit.definition.url
            .replace('{specialOffer}', parsedArgs.specialOffer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::edit
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:59
* @route '/dashboard/special-offers/{specialOffer}/edit'
*/
edit.get = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::edit
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:59
* @route '/dashboard/special-offers/{specialOffer}/edit'
*/
edit.head = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::edit
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:59
* @route '/dashboard/special-offers/{specialOffer}/edit'
*/
const editForm = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::edit
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:59
* @route '/dashboard/special-offers/{specialOffer}/edit'
*/
editForm.get = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::edit
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:59
* @route '/dashboard/special-offers/{specialOffer}/edit'
*/
editForm.head = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::update
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:66
* @route '/dashboard/special-offers/{specialOffer}'
*/
export const update = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/special-offers/{specialOffer}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::update
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:66
* @route '/dashboard/special-offers/{specialOffer}'
*/
update.url = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { specialOffer: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { specialOffer: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            specialOffer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        specialOffer: typeof args.specialOffer === 'object'
        ? args.specialOffer.uuid
        : args.specialOffer,
    }

    return update.definition.url
            .replace('{specialOffer}', parsedArgs.specialOffer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::update
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:66
* @route '/dashboard/special-offers/{specialOffer}'
*/
update.put = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::update
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:66
* @route '/dashboard/special-offers/{specialOffer}'
*/
update.patch = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::update
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:66
* @route '/dashboard/special-offers/{specialOffer}'
*/
const updateForm = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::update
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:66
* @route '/dashboard/special-offers/{specialOffer}'
*/
updateForm.put = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::update
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:66
* @route '/dashboard/special-offers/{specialOffer}'
*/
updateForm.patch = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::destroy
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:74
* @route '/dashboard/special-offers/{specialOffer}'
*/
export const destroy = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/special-offers/{specialOffer}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::destroy
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:74
* @route '/dashboard/special-offers/{specialOffer}'
*/
destroy.url = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { specialOffer: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { specialOffer: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            specialOffer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        specialOffer: typeof args.specialOffer === 'object'
        ? args.specialOffer.uuid
        : args.specialOffer,
    }

    return destroy.definition.url
            .replace('{specialOffer}', parsedArgs.specialOffer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::destroy
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:74
* @route '/dashboard/special-offers/{specialOffer}'
*/
destroy.delete = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::destroy
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:74
* @route '/dashboard/special-offers/{specialOffer}'
*/
const destroyForm = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::destroy
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:74
* @route '/dashboard/special-offers/{specialOffer}'
*/
destroyForm.delete = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::toggleActive
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:82
* @route '/dashboard/special-offers/{specialOffer}/toggle-active'
*/
export const toggleActive = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleActive.url(args, options),
    method: 'put',
})

toggleActive.definition = {
    methods: ["put"],
    url: '/dashboard/special-offers/{specialOffer}/toggle-active',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::toggleActive
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:82
* @route '/dashboard/special-offers/{specialOffer}/toggle-active'
*/
toggleActive.url = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { specialOffer: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { specialOffer: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            specialOffer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        specialOffer: typeof args.specialOffer === 'object'
        ? args.specialOffer.uuid
        : args.specialOffer,
    }

    return toggleActive.definition.url
            .replace('{specialOffer}', parsedArgs.specialOffer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::toggleActive
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:82
* @route '/dashboard/special-offers/{specialOffer}/toggle-active'
*/
toggleActive.put = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleActive.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::toggleActive
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:82
* @route '/dashboard/special-offers/{specialOffer}/toggle-active'
*/
const toggleActiveForm = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SpecialOfferController::toggleActive
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SpecialOfferController.php:82
* @route '/dashboard/special-offers/{specialOffer}/toggle-active'
*/
toggleActiveForm.put = (args: { specialOffer: string | { uuid: string } } | [specialOffer: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleActive.form = toggleActiveForm

const specialOffers = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    toggleActive: Object.assign(toggleActive, toggleActive),
}

export default specialOffers