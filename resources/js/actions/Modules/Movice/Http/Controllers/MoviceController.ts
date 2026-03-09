import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Movice\Http\Controllers\MoviceController::index
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:13
* @route '/api/v1/movices'
*/
const indexfafa6f61680d93000735ab87f6b2933f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexfafa6f61680d93000735ab87f6b2933f.url(options),
    method: 'get',
})

indexfafa6f61680d93000735ab87f6b2933f.definition = {
    methods: ["get","head"],
    url: '/api/v1/movices',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::index
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:13
* @route '/api/v1/movices'
*/
indexfafa6f61680d93000735ab87f6b2933f.url = (options?: RouteQueryOptions) => {
    return indexfafa6f61680d93000735ab87f6b2933f.definition.url + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::index
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:13
* @route '/api/v1/movices'
*/
indexfafa6f61680d93000735ab87f6b2933f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexfafa6f61680d93000735ab87f6b2933f.url(options),
    method: 'get',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::index
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:13
* @route '/api/v1/movices'
*/
indexfafa6f61680d93000735ab87f6b2933f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexfafa6f61680d93000735ab87f6b2933f.url(options),
    method: 'head',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::index
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:13
* @route '/movices'
*/
const indexde6a1e4385664458c895b1e1d7a0835b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexde6a1e4385664458c895b1e1d7a0835b.url(options),
    method: 'get',
})

indexde6a1e4385664458c895b1e1d7a0835b.definition = {
    methods: ["get","head"],
    url: '/movices',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::index
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:13
* @route '/movices'
*/
indexde6a1e4385664458c895b1e1d7a0835b.url = (options?: RouteQueryOptions) => {
    return indexde6a1e4385664458c895b1e1d7a0835b.definition.url + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::index
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:13
* @route '/movices'
*/
indexde6a1e4385664458c895b1e1d7a0835b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexde6a1e4385664458c895b1e1d7a0835b.url(options),
    method: 'get',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::index
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:13
* @route '/movices'
*/
indexde6a1e4385664458c895b1e1d7a0835b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexde6a1e4385664458c895b1e1d7a0835b.url(options),
    method: 'head',
})

export const index = {
    '/api/v1/movices': indexfafa6f61680d93000735ab87f6b2933f,
    '/movices': indexde6a1e4385664458c895b1e1d7a0835b,
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::store
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:29
* @route '/api/v1/movices'
*/
const storefafa6f61680d93000735ab87f6b2933f = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storefafa6f61680d93000735ab87f6b2933f.url(options),
    method: 'post',
})

storefafa6f61680d93000735ab87f6b2933f.definition = {
    methods: ["post"],
    url: '/api/v1/movices',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::store
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:29
* @route '/api/v1/movices'
*/
storefafa6f61680d93000735ab87f6b2933f.url = (options?: RouteQueryOptions) => {
    return storefafa6f61680d93000735ab87f6b2933f.definition.url + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::store
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:29
* @route '/api/v1/movices'
*/
storefafa6f61680d93000735ab87f6b2933f.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storefafa6f61680d93000735ab87f6b2933f.url(options),
    method: 'post',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::store
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:29
* @route '/movices'
*/
const storede6a1e4385664458c895b1e1d7a0835b = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storede6a1e4385664458c895b1e1d7a0835b.url(options),
    method: 'post',
})

storede6a1e4385664458c895b1e1d7a0835b.definition = {
    methods: ["post"],
    url: '/movices',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::store
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:29
* @route '/movices'
*/
storede6a1e4385664458c895b1e1d7a0835b.url = (options?: RouteQueryOptions) => {
    return storede6a1e4385664458c895b1e1d7a0835b.definition.url + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::store
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:29
* @route '/movices'
*/
storede6a1e4385664458c895b1e1d7a0835b.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storede6a1e4385664458c895b1e1d7a0835b.url(options),
    method: 'post',
})

export const store = {
    '/api/v1/movices': storefafa6f61680d93000735ab87f6b2933f,
    '/movices': storede6a1e4385664458c895b1e1d7a0835b,
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::show
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:34
* @route '/api/v1/movices/{movice}'
*/
const show4d3946cbcc9b0fd9d92bd89b6d382010 = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show4d3946cbcc9b0fd9d92bd89b6d382010.url(args, options),
    method: 'get',
})

show4d3946cbcc9b0fd9d92bd89b6d382010.definition = {
    methods: ["get","head"],
    url: '/api/v1/movices/{movice}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::show
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:34
* @route '/api/v1/movices/{movice}'
*/
show4d3946cbcc9b0fd9d92bd89b6d382010.url = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { movice: args }
    }

    if (Array.isArray(args)) {
        args = {
            movice: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        movice: args.movice,
    }

    return show4d3946cbcc9b0fd9d92bd89b6d382010.definition.url
            .replace('{movice}', parsedArgs.movice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::show
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:34
* @route '/api/v1/movices/{movice}'
*/
show4d3946cbcc9b0fd9d92bd89b6d382010.get = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show4d3946cbcc9b0fd9d92bd89b6d382010.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::show
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:34
* @route '/api/v1/movices/{movice}'
*/
show4d3946cbcc9b0fd9d92bd89b6d382010.head = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show4d3946cbcc9b0fd9d92bd89b6d382010.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::show
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:34
* @route '/movices/{movice}'
*/
const showbd139bc4944047aaec8ae1e302c3cdd3 = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showbd139bc4944047aaec8ae1e302c3cdd3.url(args, options),
    method: 'get',
})

showbd139bc4944047aaec8ae1e302c3cdd3.definition = {
    methods: ["get","head"],
    url: '/movices/{movice}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::show
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:34
* @route '/movices/{movice}'
*/
showbd139bc4944047aaec8ae1e302c3cdd3.url = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { movice: args }
    }

    if (Array.isArray(args)) {
        args = {
            movice: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        movice: args.movice,
    }

    return showbd139bc4944047aaec8ae1e302c3cdd3.definition.url
            .replace('{movice}', parsedArgs.movice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::show
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:34
* @route '/movices/{movice}'
*/
showbd139bc4944047aaec8ae1e302c3cdd3.get = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showbd139bc4944047aaec8ae1e302c3cdd3.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::show
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:34
* @route '/movices/{movice}'
*/
showbd139bc4944047aaec8ae1e302c3cdd3.head = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showbd139bc4944047aaec8ae1e302c3cdd3.url(args, options),
    method: 'head',
})

export const show = {
    '/api/v1/movices/{movice}': show4d3946cbcc9b0fd9d92bd89b6d382010,
    '/movices/{movice}': showbd139bc4944047aaec8ae1e302c3cdd3,
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::update
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:50
* @route '/api/v1/movices/{movice}'
*/
const update4d3946cbcc9b0fd9d92bd89b6d382010 = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update4d3946cbcc9b0fd9d92bd89b6d382010.url(args, options),
    method: 'put',
})

update4d3946cbcc9b0fd9d92bd89b6d382010.definition = {
    methods: ["put","patch"],
    url: '/api/v1/movices/{movice}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::update
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:50
* @route '/api/v1/movices/{movice}'
*/
update4d3946cbcc9b0fd9d92bd89b6d382010.url = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { movice: args }
    }

    if (Array.isArray(args)) {
        args = {
            movice: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        movice: args.movice,
    }

    return update4d3946cbcc9b0fd9d92bd89b6d382010.definition.url
            .replace('{movice}', parsedArgs.movice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::update
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:50
* @route '/api/v1/movices/{movice}'
*/
update4d3946cbcc9b0fd9d92bd89b6d382010.put = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update4d3946cbcc9b0fd9d92bd89b6d382010.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::update
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:50
* @route '/api/v1/movices/{movice}'
*/
update4d3946cbcc9b0fd9d92bd89b6d382010.patch = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update4d3946cbcc9b0fd9d92bd89b6d382010.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::update
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:50
* @route '/movices/{movice}'
*/
const updatebd139bc4944047aaec8ae1e302c3cdd3 = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatebd139bc4944047aaec8ae1e302c3cdd3.url(args, options),
    method: 'put',
})

updatebd139bc4944047aaec8ae1e302c3cdd3.definition = {
    methods: ["put","patch"],
    url: '/movices/{movice}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::update
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:50
* @route '/movices/{movice}'
*/
updatebd139bc4944047aaec8ae1e302c3cdd3.url = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { movice: args }
    }

    if (Array.isArray(args)) {
        args = {
            movice: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        movice: args.movice,
    }

    return updatebd139bc4944047aaec8ae1e302c3cdd3.definition.url
            .replace('{movice}', parsedArgs.movice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::update
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:50
* @route '/movices/{movice}'
*/
updatebd139bc4944047aaec8ae1e302c3cdd3.put = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatebd139bc4944047aaec8ae1e302c3cdd3.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::update
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:50
* @route '/movices/{movice}'
*/
updatebd139bc4944047aaec8ae1e302c3cdd3.patch = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatebd139bc4944047aaec8ae1e302c3cdd3.url(args, options),
    method: 'patch',
})

export const update = {
    '/api/v1/movices/{movice}': update4d3946cbcc9b0fd9d92bd89b6d382010,
    '/movices/{movice}': updatebd139bc4944047aaec8ae1e302c3cdd3,
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::destroy
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:55
* @route '/api/v1/movices/{movice}'
*/
const destroy4d3946cbcc9b0fd9d92bd89b6d382010 = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy4d3946cbcc9b0fd9d92bd89b6d382010.url(args, options),
    method: 'delete',
})

destroy4d3946cbcc9b0fd9d92bd89b6d382010.definition = {
    methods: ["delete"],
    url: '/api/v1/movices/{movice}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::destroy
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:55
* @route '/api/v1/movices/{movice}'
*/
destroy4d3946cbcc9b0fd9d92bd89b6d382010.url = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { movice: args }
    }

    if (Array.isArray(args)) {
        args = {
            movice: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        movice: args.movice,
    }

    return destroy4d3946cbcc9b0fd9d92bd89b6d382010.definition.url
            .replace('{movice}', parsedArgs.movice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::destroy
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:55
* @route '/api/v1/movices/{movice}'
*/
destroy4d3946cbcc9b0fd9d92bd89b6d382010.delete = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy4d3946cbcc9b0fd9d92bd89b6d382010.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::destroy
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:55
* @route '/movices/{movice}'
*/
const destroybd139bc4944047aaec8ae1e302c3cdd3 = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroybd139bc4944047aaec8ae1e302c3cdd3.url(args, options),
    method: 'delete',
})

destroybd139bc4944047aaec8ae1e302c3cdd3.definition = {
    methods: ["delete"],
    url: '/movices/{movice}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::destroy
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:55
* @route '/movices/{movice}'
*/
destroybd139bc4944047aaec8ae1e302c3cdd3.url = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { movice: args }
    }

    if (Array.isArray(args)) {
        args = {
            movice: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        movice: args.movice,
    }

    return destroybd139bc4944047aaec8ae1e302c3cdd3.definition.url
            .replace('{movice}', parsedArgs.movice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::destroy
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:55
* @route '/movices/{movice}'
*/
destroybd139bc4944047aaec8ae1e302c3cdd3.delete = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroybd139bc4944047aaec8ae1e302c3cdd3.url(args, options),
    method: 'delete',
})

export const destroy = {
    '/api/v1/movices/{movice}': destroy4d3946cbcc9b0fd9d92bd89b6d382010,
    '/movices/{movice}': destroybd139bc4944047aaec8ae1e302c3cdd3,
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::create
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:21
* @route '/movices/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/movices/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::create
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:21
* @route '/movices/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::create
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:21
* @route '/movices/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::create
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:21
* @route '/movices/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::edit
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:42
* @route '/movices/{movice}/edit'
*/
export const edit = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/movices/{movice}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::edit
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:42
* @route '/movices/{movice}/edit'
*/
edit.url = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { movice: args }
    }

    if (Array.isArray(args)) {
        args = {
            movice: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        movice: args.movice,
    }

    return edit.definition.url
            .replace('{movice}', parsedArgs.movice.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::edit
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:42
* @route '/movices/{movice}/edit'
*/
edit.get = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Movice\Http\Controllers\MoviceController::edit
* @see Modules/Movice/app/Http/Controllers/MoviceController.php:42
* @route '/movices/{movice}/edit'
*/
edit.head = (args: { movice: string | number } | [movice: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

const MoviceController = { index, store, show, update, destroy, create, edit }

export default MoviceController