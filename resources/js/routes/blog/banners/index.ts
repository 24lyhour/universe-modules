import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::index
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:24
* @route '/dashboard/banners'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/banners',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::index
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:24
* @route '/dashboard/banners'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::index
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:24
* @route '/dashboard/banners'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::index
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:24
* @route '/dashboard/banners'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::create
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:38
* @route '/dashboard/banners/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/banners/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::create
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:38
* @route '/dashboard/banners/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::create
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:38
* @route '/dashboard/banners/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::create
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:38
* @route '/dashboard/banners/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::store
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:44
* @route '/dashboard/banners'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/banners',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::store
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:44
* @route '/dashboard/banners'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::store
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:44
* @route '/dashboard/banners'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::show
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:52
* @route '/dashboard/banners/{banner}'
*/
export const show = (args: { banner: string | { uuid: string } } | [banner: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/banners/{banner}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::show
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:52
* @route '/dashboard/banners/{banner}'
*/
show.url = (args: { banner: string | { uuid: string } } | [banner: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { banner: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            banner: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner: typeof args.banner === 'object'
        ? args.banner.uuid
        : args.banner,
    }

    return show.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::show
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:52
* @route '/dashboard/banners/{banner}'
*/
show.get = (args: { banner: string | { uuid: string } } | [banner: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::show
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:52
* @route '/dashboard/banners/{banner}'
*/
show.head = (args: { banner: string | { uuid: string } } | [banner: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::edit
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:59
* @route '/dashboard/banners/{banner}/edit'
*/
export const edit = (args: { banner: string | { uuid: string } } | [banner: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/banners/{banner}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::edit
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:59
* @route '/dashboard/banners/{banner}/edit'
*/
edit.url = (args: { banner: string | { uuid: string } } | [banner: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { banner: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            banner: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner: typeof args.banner === 'object'
        ? args.banner.uuid
        : args.banner,
    }

    return edit.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::edit
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:59
* @route '/dashboard/banners/{banner}/edit'
*/
edit.get = (args: { banner: string | { uuid: string } } | [banner: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::edit
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:59
* @route '/dashboard/banners/{banner}/edit'
*/
edit.head = (args: { banner: string | { uuid: string } } | [banner: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::update
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:66
* @route '/dashboard/banners/{banner}'
*/
export const update = (args: { banner: string | { uuid: string } } | [banner: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/banners/{banner}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::update
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:66
* @route '/dashboard/banners/{banner}'
*/
update.url = (args: { banner: string | { uuid: string } } | [banner: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { banner: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            banner: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner: typeof args.banner === 'object'
        ? args.banner.uuid
        : args.banner,
    }

    return update.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::update
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:66
* @route '/dashboard/banners/{banner}'
*/
update.put = (args: { banner: string | { uuid: string } } | [banner: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::update
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:66
* @route '/dashboard/banners/{banner}'
*/
update.patch = (args: { banner: string | { uuid: string } } | [banner: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::destroy
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:74
* @route '/dashboard/banners/{banner}'
*/
export const destroy = (args: { banner: string | { uuid: string } } | [banner: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/banners/{banner}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::destroy
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:74
* @route '/dashboard/banners/{banner}'
*/
destroy.url = (args: { banner: string | { uuid: string } } | [banner: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { banner: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            banner: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner: typeof args.banner === 'object'
        ? args.banner.uuid
        : args.banner,
    }

    return destroy.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::destroy
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:74
* @route '/dashboard/banners/{banner}'
*/
destroy.delete = (args: { banner: string | { uuid: string } } | [banner: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::toggleActive
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:82
* @route '/dashboard/banners/{banner}/toggle-active'
*/
export const toggleActive = (args: { banner: string | { uuid: string } } | [banner: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleActive.url(args, options),
    method: 'put',
})

toggleActive.definition = {
    methods: ["put"],
    url: '/dashboard/banners/{banner}/toggle-active',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::toggleActive
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:82
* @route '/dashboard/banners/{banner}/toggle-active'
*/
toggleActive.url = (args: { banner: string | { uuid: string } } | [banner: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { banner: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            banner: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner: typeof args.banner === 'object'
        ? args.banner.uuid
        : args.banner,
    }

    return toggleActive.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Dashboard\V1\BannerController::toggleActive
* @see Modules/Blog/app/Http/Controllers/Dashboard/V1/BannerController.php:82
* @route '/dashboard/banners/{banner}/toggle-active'
*/
toggleActive.put = (args: { banner: string | { uuid: string } } | [banner: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleActive.url(args, options),
    method: 'put',
})

const banners = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    toggleActive: Object.assign(toggleActive, toggleActive),
}

export default banners