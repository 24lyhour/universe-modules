import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Blog\Http\Controllers\BlogController::index
* @see Modules/Blog/app/Http/Controllers/BlogController.php:22
* @route '/api/v1/blogs'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/blogs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::index
* @see Modules/Blog/app/Http/Controllers/BlogController.php:22
* @route '/api/v1/blogs'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::index
* @see Modules/Blog/app/Http/Controllers/BlogController.php:22
* @route '/api/v1/blogs'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::index
* @see Modules/Blog/app/Http/Controllers/BlogController.php:22
* @route '/api/v1/blogs'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::store
* @see Modules/Blog/app/Http/Controllers/BlogController.php:42
* @route '/api/v1/blogs'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/blogs',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::store
* @see Modules/Blog/app/Http/Controllers/BlogController.php:42
* @route '/api/v1/blogs'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::store
* @see Modules/Blog/app/Http/Controllers/BlogController.php:42
* @route '/api/v1/blogs'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::show
* @see Modules/Blog/app/Http/Controllers/BlogController.php:54
* @route '/api/v1/blogs/{blog}'
*/
export const show = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/blogs/{blog}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::show
* @see Modules/Blog/app/Http/Controllers/BlogController.php:54
* @route '/api/v1/blogs/{blog}'
*/
show.url = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blog: args }
    }

    if (Array.isArray(args)) {
        args = {
            blog: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        blog: args.blog,
    }

    return show.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::show
* @see Modules/Blog/app/Http/Controllers/BlogController.php:54
* @route '/api/v1/blogs/{blog}'
*/
show.get = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::show
* @see Modules/Blog/app/Http/Controllers/BlogController.php:54
* @route '/api/v1/blogs/{blog}'
*/
show.head = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::update
* @see Modules/Blog/app/Http/Controllers/BlogController.php:86
* @route '/api/v1/blogs/{blog}'
*/
export const update = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/blogs/{blog}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::update
* @see Modules/Blog/app/Http/Controllers/BlogController.php:86
* @route '/api/v1/blogs/{blog}'
*/
update.url = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blog: args }
    }

    if (Array.isArray(args)) {
        args = {
            blog: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        blog: args.blog,
    }

    return update.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::update
* @see Modules/Blog/app/Http/Controllers/BlogController.php:86
* @route '/api/v1/blogs/{blog}'
*/
update.put = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::update
* @see Modules/Blog/app/Http/Controllers/BlogController.php:86
* @route '/api/v1/blogs/{blog}'
*/
update.patch = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::destroy
* @see Modules/Blog/app/Http/Controllers/BlogController.php:102
* @route '/api/v1/blogs/{blog}'
*/
export const destroy = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/blogs/{blog}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::destroy
* @see Modules/Blog/app/Http/Controllers/BlogController.php:102
* @route '/api/v1/blogs/{blog}'
*/
destroy.url = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blog: args }
    }

    if (Array.isArray(args)) {
        args = {
            blog: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        blog: args.blog,
    }

    return destroy.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::destroy
* @see Modules/Blog/app/Http/Controllers/BlogController.php:102
* @route '/api/v1/blogs/{blog}'
*/
destroy.delete = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const blog = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default blog