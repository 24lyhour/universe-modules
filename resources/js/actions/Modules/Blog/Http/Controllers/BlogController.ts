import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Blog\Http\Controllers\BlogController::index
* @see Modules/Blog/app/Http/Controllers/BlogController.php:22
* @route '/api/v1/blogs'
*/
const index0959e8009a8132629d8287b526c5c921 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0959e8009a8132629d8287b526c5c921.url(options),
    method: 'get',
})

index0959e8009a8132629d8287b526c5c921.definition = {
    methods: ["get","head"],
    url: '/api/v1/blogs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::index
* @see Modules/Blog/app/Http/Controllers/BlogController.php:22
* @route '/api/v1/blogs'
*/
index0959e8009a8132629d8287b526c5c921.url = (options?: RouteQueryOptions) => {
    return index0959e8009a8132629d8287b526c5c921.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::index
* @see Modules/Blog/app/Http/Controllers/BlogController.php:22
* @route '/api/v1/blogs'
*/
index0959e8009a8132629d8287b526c5c921.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0959e8009a8132629d8287b526c5c921.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::index
* @see Modules/Blog/app/Http/Controllers/BlogController.php:22
* @route '/api/v1/blogs'
*/
index0959e8009a8132629d8287b526c5c921.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index0959e8009a8132629d8287b526c5c921.url(options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::index
* @see Modules/Blog/app/Http/Controllers/BlogController.php:22
* @route '/blogs'
*/
const index44043d9858c53e27a123eb7dd8b7e975 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index44043d9858c53e27a123eb7dd8b7e975.url(options),
    method: 'get',
})

index44043d9858c53e27a123eb7dd8b7e975.definition = {
    methods: ["get","head"],
    url: '/blogs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::index
* @see Modules/Blog/app/Http/Controllers/BlogController.php:22
* @route '/blogs'
*/
index44043d9858c53e27a123eb7dd8b7e975.url = (options?: RouteQueryOptions) => {
    return index44043d9858c53e27a123eb7dd8b7e975.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::index
* @see Modules/Blog/app/Http/Controllers/BlogController.php:22
* @route '/blogs'
*/
index44043d9858c53e27a123eb7dd8b7e975.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index44043d9858c53e27a123eb7dd8b7e975.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::index
* @see Modules/Blog/app/Http/Controllers/BlogController.php:22
* @route '/blogs'
*/
index44043d9858c53e27a123eb7dd8b7e975.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index44043d9858c53e27a123eb7dd8b7e975.url(options),
    method: 'head',
})

export const index = {
    '/api/v1/blogs': index0959e8009a8132629d8287b526c5c921,
    '/blogs': index44043d9858c53e27a123eb7dd8b7e975,
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::store
* @see Modules/Blog/app/Http/Controllers/BlogController.php:42
* @route '/api/v1/blogs'
*/
const store0959e8009a8132629d8287b526c5c921 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store0959e8009a8132629d8287b526c5c921.url(options),
    method: 'post',
})

store0959e8009a8132629d8287b526c5c921.definition = {
    methods: ["post"],
    url: '/api/v1/blogs',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::store
* @see Modules/Blog/app/Http/Controllers/BlogController.php:42
* @route '/api/v1/blogs'
*/
store0959e8009a8132629d8287b526c5c921.url = (options?: RouteQueryOptions) => {
    return store0959e8009a8132629d8287b526c5c921.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::store
* @see Modules/Blog/app/Http/Controllers/BlogController.php:42
* @route '/api/v1/blogs'
*/
store0959e8009a8132629d8287b526c5c921.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store0959e8009a8132629d8287b526c5c921.url(options),
    method: 'post',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::store
* @see Modules/Blog/app/Http/Controllers/BlogController.php:42
* @route '/blogs'
*/
const store44043d9858c53e27a123eb7dd8b7e975 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store44043d9858c53e27a123eb7dd8b7e975.url(options),
    method: 'post',
})

store44043d9858c53e27a123eb7dd8b7e975.definition = {
    methods: ["post"],
    url: '/blogs',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::store
* @see Modules/Blog/app/Http/Controllers/BlogController.php:42
* @route '/blogs'
*/
store44043d9858c53e27a123eb7dd8b7e975.url = (options?: RouteQueryOptions) => {
    return store44043d9858c53e27a123eb7dd8b7e975.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::store
* @see Modules/Blog/app/Http/Controllers/BlogController.php:42
* @route '/blogs'
*/
store44043d9858c53e27a123eb7dd8b7e975.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store44043d9858c53e27a123eb7dd8b7e975.url(options),
    method: 'post',
})

export const store = {
    '/api/v1/blogs': store0959e8009a8132629d8287b526c5c921,
    '/blogs': store44043d9858c53e27a123eb7dd8b7e975,
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::show
* @see Modules/Blog/app/Http/Controllers/BlogController.php:54
* @route '/api/v1/blogs/{blog}'
*/
const show89fef74645f4cab8360fd9e46d9914c4 = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show89fef74645f4cab8360fd9e46d9914c4.url(args, options),
    method: 'get',
})

show89fef74645f4cab8360fd9e46d9914c4.definition = {
    methods: ["get","head"],
    url: '/api/v1/blogs/{blog}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::show
* @see Modules/Blog/app/Http/Controllers/BlogController.php:54
* @route '/api/v1/blogs/{blog}'
*/
show89fef74645f4cab8360fd9e46d9914c4.url = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show89fef74645f4cab8360fd9e46d9914c4.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::show
* @see Modules/Blog/app/Http/Controllers/BlogController.php:54
* @route '/api/v1/blogs/{blog}'
*/
show89fef74645f4cab8360fd9e46d9914c4.get = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show89fef74645f4cab8360fd9e46d9914c4.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::show
* @see Modules/Blog/app/Http/Controllers/BlogController.php:54
* @route '/api/v1/blogs/{blog}'
*/
show89fef74645f4cab8360fd9e46d9914c4.head = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show89fef74645f4cab8360fd9e46d9914c4.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::show
* @see Modules/Blog/app/Http/Controllers/BlogController.php:54
* @route '/blogs/{blog}'
*/
const show75e06dd100db872ee0b8e2e2e2eaa951 = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show75e06dd100db872ee0b8e2e2e2eaa951.url(args, options),
    method: 'get',
})

show75e06dd100db872ee0b8e2e2e2eaa951.definition = {
    methods: ["get","head"],
    url: '/blogs/{blog}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::show
* @see Modules/Blog/app/Http/Controllers/BlogController.php:54
* @route '/blogs/{blog}'
*/
show75e06dd100db872ee0b8e2e2e2eaa951.url = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show75e06dd100db872ee0b8e2e2e2eaa951.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::show
* @see Modules/Blog/app/Http/Controllers/BlogController.php:54
* @route '/blogs/{blog}'
*/
show75e06dd100db872ee0b8e2e2e2eaa951.get = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show75e06dd100db872ee0b8e2e2e2eaa951.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::show
* @see Modules/Blog/app/Http/Controllers/BlogController.php:54
* @route '/blogs/{blog}'
*/
show75e06dd100db872ee0b8e2e2e2eaa951.head = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show75e06dd100db872ee0b8e2e2e2eaa951.url(args, options),
    method: 'head',
})

export const show = {
    '/api/v1/blogs/{blog}': show89fef74645f4cab8360fd9e46d9914c4,
    '/blogs/{blog}': show75e06dd100db872ee0b8e2e2e2eaa951,
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::update
* @see Modules/Blog/app/Http/Controllers/BlogController.php:86
* @route '/api/v1/blogs/{blog}'
*/
const update89fef74645f4cab8360fd9e46d9914c4 = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update89fef74645f4cab8360fd9e46d9914c4.url(args, options),
    method: 'put',
})

update89fef74645f4cab8360fd9e46d9914c4.definition = {
    methods: ["put","patch"],
    url: '/api/v1/blogs/{blog}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::update
* @see Modules/Blog/app/Http/Controllers/BlogController.php:86
* @route '/api/v1/blogs/{blog}'
*/
update89fef74645f4cab8360fd9e46d9914c4.url = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update89fef74645f4cab8360fd9e46d9914c4.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::update
* @see Modules/Blog/app/Http/Controllers/BlogController.php:86
* @route '/api/v1/blogs/{blog}'
*/
update89fef74645f4cab8360fd9e46d9914c4.put = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update89fef74645f4cab8360fd9e46d9914c4.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::update
* @see Modules/Blog/app/Http/Controllers/BlogController.php:86
* @route '/api/v1/blogs/{blog}'
*/
update89fef74645f4cab8360fd9e46d9914c4.patch = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update89fef74645f4cab8360fd9e46d9914c4.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::update
* @see Modules/Blog/app/Http/Controllers/BlogController.php:86
* @route '/blogs/{blog}'
*/
const update75e06dd100db872ee0b8e2e2e2eaa951 = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update75e06dd100db872ee0b8e2e2e2eaa951.url(args, options),
    method: 'put',
})

update75e06dd100db872ee0b8e2e2e2eaa951.definition = {
    methods: ["put","patch"],
    url: '/blogs/{blog}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::update
* @see Modules/Blog/app/Http/Controllers/BlogController.php:86
* @route '/blogs/{blog}'
*/
update75e06dd100db872ee0b8e2e2e2eaa951.url = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update75e06dd100db872ee0b8e2e2e2eaa951.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::update
* @see Modules/Blog/app/Http/Controllers/BlogController.php:86
* @route '/blogs/{blog}'
*/
update75e06dd100db872ee0b8e2e2e2eaa951.put = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update75e06dd100db872ee0b8e2e2e2eaa951.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::update
* @see Modules/Blog/app/Http/Controllers/BlogController.php:86
* @route '/blogs/{blog}'
*/
update75e06dd100db872ee0b8e2e2e2eaa951.patch = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update75e06dd100db872ee0b8e2e2e2eaa951.url(args, options),
    method: 'patch',
})

export const update = {
    '/api/v1/blogs/{blog}': update89fef74645f4cab8360fd9e46d9914c4,
    '/blogs/{blog}': update75e06dd100db872ee0b8e2e2e2eaa951,
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::destroy
* @see Modules/Blog/app/Http/Controllers/BlogController.php:102
* @route '/api/v1/blogs/{blog}'
*/
const destroy89fef74645f4cab8360fd9e46d9914c4 = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy89fef74645f4cab8360fd9e46d9914c4.url(args, options),
    method: 'delete',
})

destroy89fef74645f4cab8360fd9e46d9914c4.definition = {
    methods: ["delete"],
    url: '/api/v1/blogs/{blog}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::destroy
* @see Modules/Blog/app/Http/Controllers/BlogController.php:102
* @route '/api/v1/blogs/{blog}'
*/
destroy89fef74645f4cab8360fd9e46d9914c4.url = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy89fef74645f4cab8360fd9e46d9914c4.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::destroy
* @see Modules/Blog/app/Http/Controllers/BlogController.php:102
* @route '/api/v1/blogs/{blog}'
*/
destroy89fef74645f4cab8360fd9e46d9914c4.delete = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy89fef74645f4cab8360fd9e46d9914c4.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Blog\Http\Controllers\BlogController::destroy
* @see Modules/Blog/app/Http/Controllers/BlogController.php:102
* @route '/blogs/{blog}'
*/
const destroy75e06dd100db872ee0b8e2e2e2eaa951 = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy75e06dd100db872ee0b8e2e2e2eaa951.url(args, options),
    method: 'delete',
})

destroy75e06dd100db872ee0b8e2e2e2eaa951.definition = {
    methods: ["delete"],
    url: '/blogs/{blog}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Blog\Http\Controllers\BlogController::destroy
* @see Modules/Blog/app/Http/Controllers/BlogController.php:102
* @route '/blogs/{blog}'
*/
destroy75e06dd100db872ee0b8e2e2e2eaa951.url = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy75e06dd100db872ee0b8e2e2e2eaa951.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\BlogController::destroy
* @see Modules/Blog/app/Http/Controllers/BlogController.php:102
* @route '/blogs/{blog}'
*/
destroy75e06dd100db872ee0b8e2e2e2eaa951.delete = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy75e06dd100db872ee0b8e2e2e2eaa951.url(args, options),
    method: 'delete',
})

export const destroy = {
    '/api/v1/blogs/{blog}': destroy89fef74645f4cab8360fd9e46d9914c4,
    '/blogs/{blog}': destroy75e06dd100db872ee0b8e2e2e2eaa951,
}

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

const BlogController = { index, store, show, update, destroy, create, edit }

export default BlogController