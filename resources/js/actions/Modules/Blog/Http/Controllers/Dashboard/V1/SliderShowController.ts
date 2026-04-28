import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::index
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:24
* @route '/dashboard/slider-shows'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/slider-shows',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::index
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:24
* @route '/dashboard/slider-shows'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::index
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:24
* @route '/dashboard/slider-shows'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::index
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:24
* @route '/dashboard/slider-shows'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::index
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:24
* @route '/dashboard/slider-shows'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::index
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:24
* @route '/dashboard/slider-shows'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::index
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:24
* @route '/dashboard/slider-shows'
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
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::create
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:38
* @route '/dashboard/slider-shows/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/slider-shows/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::create
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:38
* @route '/dashboard/slider-shows/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::create
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:38
* @route '/dashboard/slider-shows/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::create
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:38
* @route '/dashboard/slider-shows/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::create
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:38
* @route '/dashboard/slider-shows/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::create
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:38
* @route '/dashboard/slider-shows/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::create
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:38
* @route '/dashboard/slider-shows/create'
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
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::store
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:44
* @route '/dashboard/slider-shows'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/slider-shows',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::store
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:44
* @route '/dashboard/slider-shows'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::store
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:44
* @route '/dashboard/slider-shows'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::store
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:44
* @route '/dashboard/slider-shows'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::store
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:44
* @route '/dashboard/slider-shows'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::show
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:52
* @route '/dashboard/slider-shows/{sliderShow}'
*/
export const show = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/slider-shows/{sliderShow}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::show
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:52
* @route '/dashboard/slider-shows/{sliderShow}'
*/
show.url = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sliderShow: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { sliderShow: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            sliderShow: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sliderShow: typeof args.sliderShow === 'object'
        ? args.sliderShow.uuid
        : args.sliderShow,
    }

    return show.definition.url
            .replace('{sliderShow}', parsedArgs.sliderShow.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::show
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:52
* @route '/dashboard/slider-shows/{sliderShow}'
*/
show.get = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::show
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:52
* @route '/dashboard/slider-shows/{sliderShow}'
*/
show.head = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::show
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:52
* @route '/dashboard/slider-shows/{sliderShow}'
*/
const showForm = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::show
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:52
* @route '/dashboard/slider-shows/{sliderShow}'
*/
showForm.get = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::show
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:52
* @route '/dashboard/slider-shows/{sliderShow}'
*/
showForm.head = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::edit
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:59
* @route '/dashboard/slider-shows/{sliderShow}/edit'
*/
export const edit = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/slider-shows/{sliderShow}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::edit
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:59
* @route '/dashboard/slider-shows/{sliderShow}/edit'
*/
edit.url = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sliderShow: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { sliderShow: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            sliderShow: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sliderShow: typeof args.sliderShow === 'object'
        ? args.sliderShow.uuid
        : args.sliderShow,
    }

    return edit.definition.url
            .replace('{sliderShow}', parsedArgs.sliderShow.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::edit
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:59
* @route '/dashboard/slider-shows/{sliderShow}/edit'
*/
edit.get = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::edit
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:59
* @route '/dashboard/slider-shows/{sliderShow}/edit'
*/
edit.head = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::edit
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:59
* @route '/dashboard/slider-shows/{sliderShow}/edit'
*/
const editForm = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::edit
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:59
* @route '/dashboard/slider-shows/{sliderShow}/edit'
*/
editForm.get = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::edit
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:59
* @route '/dashboard/slider-shows/{sliderShow}/edit'
*/
editForm.head = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::update
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:66
* @route '/dashboard/slider-shows/{sliderShow}'
*/
export const update = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/slider-shows/{sliderShow}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::update
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:66
* @route '/dashboard/slider-shows/{sliderShow}'
*/
update.url = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sliderShow: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { sliderShow: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            sliderShow: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sliderShow: typeof args.sliderShow === 'object'
        ? args.sliderShow.uuid
        : args.sliderShow,
    }

    return update.definition.url
            .replace('{sliderShow}', parsedArgs.sliderShow.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::update
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:66
* @route '/dashboard/slider-shows/{sliderShow}'
*/
update.put = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::update
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:66
* @route '/dashboard/slider-shows/{sliderShow}'
*/
update.patch = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::update
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:66
* @route '/dashboard/slider-shows/{sliderShow}'
*/
const updateForm = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::update
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:66
* @route '/dashboard/slider-shows/{sliderShow}'
*/
updateForm.put = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::update
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:66
* @route '/dashboard/slider-shows/{sliderShow}'
*/
updateForm.patch = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::destroy
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:74
* @route '/dashboard/slider-shows/{sliderShow}'
*/
export const destroy = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/slider-shows/{sliderShow}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::destroy
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:74
* @route '/dashboard/slider-shows/{sliderShow}'
*/
destroy.url = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sliderShow: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { sliderShow: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            sliderShow: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sliderShow: typeof args.sliderShow === 'object'
        ? args.sliderShow.uuid
        : args.sliderShow,
    }

    return destroy.definition.url
            .replace('{sliderShow}', parsedArgs.sliderShow.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::destroy
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:74
* @route '/dashboard/slider-shows/{sliderShow}'
*/
destroy.delete = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::destroy
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:74
* @route '/dashboard/slider-shows/{sliderShow}'
*/
const destroyForm = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::destroy
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:74
* @route '/dashboard/slider-shows/{sliderShow}'
*/
destroyForm.delete = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::toggleActive
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:82
* @route '/dashboard/slider-shows/{sliderShow}/toggle-active'
*/
export const toggleActive = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleActive.url(args, options),
    method: 'put',
})

toggleActive.definition = {
    methods: ["put"],
    url: '/dashboard/slider-shows/{sliderShow}/toggle-active',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::toggleActive
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:82
* @route '/dashboard/slider-shows/{sliderShow}/toggle-active'
*/
toggleActive.url = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sliderShow: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { sliderShow: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            sliderShow: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sliderShow: typeof args.sliderShow === 'object'
        ? args.sliderShow.uuid
        : args.sliderShow,
    }

    return toggleActive.definition.url
            .replace('{sliderShow}', parsedArgs.sliderShow.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::toggleActive
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:82
* @route '/dashboard/slider-shows/{sliderShow}/toggle-active'
*/
toggleActive.put = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleActive.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::toggleActive
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:82
* @route '/dashboard/slider-shows/{sliderShow}/toggle-active'
*/
const toggleActiveForm = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\SliderShowController::toggleActive
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/SliderShowController.php:82
* @route '/dashboard/slider-shows/{sliderShow}/toggle-active'
*/
toggleActiveForm.put = (args: { sliderShow: string | number | { uuid: string | number } } | [sliderShow: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleActive.form = toggleActiveForm

const SliderShowController = { index, create, store, show, edit, update, destroy, toggleActive }

export default SliderShowController