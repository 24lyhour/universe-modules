import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Blog\Http\Controllers\BlogController::index
* @see Modules/Blog/app/Http/Controllers/BlogController.php:22
* @route '/blogs'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/blogs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::index
* @see Modules/Blog/app/Http/Controllers/BlogController.php:22
* @route '/blogs'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::index
* @see Modules/Blog/app/Http/Controllers/BlogController.php:22
* @route '/blogs'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::index
* @see Modules/Blog/app/Http/Controllers/BlogController.php:22
* @route '/blogs'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::create
* @see Modules/Blog/app/Http/Controllers/BlogController.php:34
* @route '/blogs/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/blogs/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::create
* @see Modules/Blog/app/Http/Controllers/BlogController.php:34
* @route '/blogs/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::create
* @see Modules/Blog/app/Http/Controllers/BlogController.php:34
* @route '/blogs/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::create
* @see Modules/Blog/app/Http/Controllers/BlogController.php:34
* @route '/blogs/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::store
* @see Modules/Blog/app/Http/Controllers/BlogController.php:42
* @route '/blogs'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/blogs',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::store
* @see Modules/Blog/app/Http/Controllers/BlogController.php:42
* @route '/blogs'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::store
* @see Modules/Blog/app/Http/Controllers/BlogController.php:42
* @route '/blogs'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::show
* @see Modules/Blog/app/Http/Controllers/BlogController.php:54
* @route '/blogs/{blog}'
*/
export const show = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/blogs/{blog}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::show
* @see Modules/Blog/app/Http/Controllers/BlogController.php:54
* @route '/blogs/{blog}'
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
* @route '/blogs/{blog}'
*/
show.get = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::show
* @see Modules/Blog/app/Http/Controllers/BlogController.php:54
* @route '/blogs/{blog}'
*/
show.head = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::edit
* @see Modules/Blog/app/Http/Controllers/BlogController.php:70
* @route '/blogs/{blog}/edit'
*/
export const edit = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/blogs/{blog}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::edit
* @see Modules/Blog/app/Http/Controllers/BlogController.php:70
* @route '/blogs/{blog}/edit'
*/
edit.url = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::edit
* @see Modules/Blog/app/Http/Controllers/BlogController.php:70
* @route '/blogs/{blog}/edit'
*/
edit.get = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::edit
* @see Modules/Blog/app/Http/Controllers/BlogController.php:70
* @route '/blogs/{blog}/edit'
*/
edit.head = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::update
* @see Modules/Blog/app/Http/Controllers/BlogController.php:86
* @route '/blogs/{blog}'
*/
export const update = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/blogs/{blog}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::update
* @see Modules/Blog/app/Http/Controllers/BlogController.php:86
* @route '/blogs/{blog}'
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
* @route '/blogs/{blog}'
*/
update.put = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::update
* @see Modules/Blog/app/Http/Controllers/BlogController.php:86
* @route '/blogs/{blog}'
*/
update.patch = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::destroy
* @see Modules/Blog/app/Http/Controllers/BlogController.php:102
* @route '/blogs/{blog}'
*/
export const destroy = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/blogs/{blog}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::destroy
* @see Modules/Blog/app/Http/Controllers/BlogController.php:102
* @route '/blogs/{blog}'
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
* @route '/blogs/{blog}'
*/
destroy.delete = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const blog = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default blog