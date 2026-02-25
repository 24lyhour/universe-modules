import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::index
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:15
* @route '/dashboard/headers'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/headers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::index
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:15
* @route '/dashboard/headers'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::index
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:15
* @route '/dashboard/headers'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::index
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:15
* @route '/dashboard/headers'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::create
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:27
* @route '/dashboard/headers/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/headers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::create
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:27
* @route '/dashboard/headers/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::create
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:27
* @route '/dashboard/headers/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::create
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:27
* @route '/dashboard/headers/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::store
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:33
* @route '/dashboard/headers'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/headers',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::store
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:33
* @route '/dashboard/headers'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::store
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:33
* @route '/dashboard/headers'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::show
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:0
* @route '/dashboard/headers/{header}'
*/
export const show = (args: { header: string | number } | [header: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/headers/{header}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::show
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:0
* @route '/dashboard/headers/{header}'
*/
show.url = (args: { header: string | number } | [header: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { header: args }
    }

    if (Array.isArray(args)) {
        args = {
            header: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        header: args.header,
    }

    return show.definition.url
            .replace('{header}', parsedArgs.header.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::show
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:0
* @route '/dashboard/headers/{header}'
*/
show.get = (args: { header: string | number } | [header: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::show
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:0
* @route '/dashboard/headers/{header}'
*/
show.head = (args: { header: string | number } | [header: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::edit
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:58
* @route '/dashboard/headers/{header}/edit'
*/
export const edit = (args: { header: string | number } | [header: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/headers/{header}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::edit
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:58
* @route '/dashboard/headers/{header}/edit'
*/
edit.url = (args: { header: string | number } | [header: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { header: args }
    }

    if (Array.isArray(args)) {
        args = {
            header: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        header: args.header,
    }

    return edit.definition.url
            .replace('{header}', parsedArgs.header.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::edit
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:58
* @route '/dashboard/headers/{header}/edit'
*/
edit.get = (args: { header: string | number } | [header: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::edit
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:58
* @route '/dashboard/headers/{header}/edit'
*/
edit.head = (args: { header: string | number } | [header: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::update
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:67
* @route '/dashboard/headers/{header}'
*/
export const update = (args: { header: string | number } | [header: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/headers/{header}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::update
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:67
* @route '/dashboard/headers/{header}'
*/
update.url = (args: { header: string | number } | [header: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { header: args }
    }

    if (Array.isArray(args)) {
        args = {
            header: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        header: args.header,
    }

    return update.definition.url
            .replace('{header}', parsedArgs.header.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::update
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:67
* @route '/dashboard/headers/{header}'
*/
update.put = (args: { header: string | number } | [header: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::update
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:67
* @route '/dashboard/headers/{header}'
*/
update.patch = (args: { header: string | number } | [header: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::destroy
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:94
* @route '/dashboard/headers/{header}'
*/
export const destroy = (args: { header: string | number } | [header: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/headers/{header}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::destroy
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:94
* @route '/dashboard/headers/{header}'
*/
destroy.url = (args: { header: string | number } | [header: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { header: args }
    }

    if (Array.isArray(args)) {
        args = {
            header: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        header: args.header,
    }

    return destroy.definition.url
            .replace('{header}', parsedArgs.header.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\HeaderController::destroy
* @see Modules/Porfolio/app/Http/Controllers/HeaderController.php:94
* @route '/dashboard/headers/{header}'
*/
destroy.delete = (args: { header: string | number } | [header: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const HeaderController = { index, create, store, show, edit, update, destroy }

export default HeaderController