import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Media\Http\Controllers\MediaController::upload
* @see Modules/Media/app/Http/Controllers/MediaController.php:71
* @route '/api/v1/media/upload'
*/
export const upload = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

upload.definition = {
    methods: ["post"],
    url: '/api/v1/media/upload',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::upload
* @see Modules/Media/app/Http/Controllers/MediaController.php:71
* @route '/api/v1/media/upload'
*/
upload.url = (options?: RouteQueryOptions) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::upload
* @see Modules/Media/app/Http/Controllers/MediaController.php:71
* @route '/api/v1/media/upload'
*/
upload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::index
* @see Modules/Media/app/Http/Controllers/MediaController.php:20
* @route '/api/v1/media'
*/
const index46c6282de3c06ba451eff0ce018051d9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index46c6282de3c06ba451eff0ce018051d9.url(options),
    method: 'get',
})

index46c6282de3c06ba451eff0ce018051d9.definition = {
    methods: ["get","head"],
    url: '/api/v1/media',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::index
* @see Modules/Media/app/Http/Controllers/MediaController.php:20
* @route '/api/v1/media'
*/
index46c6282de3c06ba451eff0ce018051d9.url = (options?: RouteQueryOptions) => {
    return index46c6282de3c06ba451eff0ce018051d9.definition.url + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::index
* @see Modules/Media/app/Http/Controllers/MediaController.php:20
* @route '/api/v1/media'
*/
index46c6282de3c06ba451eff0ce018051d9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index46c6282de3c06ba451eff0ce018051d9.url(options),
    method: 'get',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::index
* @see Modules/Media/app/Http/Controllers/MediaController.php:20
* @route '/api/v1/media'
*/
index46c6282de3c06ba451eff0ce018051d9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index46c6282de3c06ba451eff0ce018051d9.url(options),
    method: 'head',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::index
* @see Modules/Media/app/Http/Controllers/MediaController.php:20
* @route '/media'
*/
const indexb6e246e27f8af7b9881470f6aa5d44b9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexb6e246e27f8af7b9881470f6aa5d44b9.url(options),
    method: 'get',
})

indexb6e246e27f8af7b9881470f6aa5d44b9.definition = {
    methods: ["get","head"],
    url: '/media',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::index
* @see Modules/Media/app/Http/Controllers/MediaController.php:20
* @route '/media'
*/
indexb6e246e27f8af7b9881470f6aa5d44b9.url = (options?: RouteQueryOptions) => {
    return indexb6e246e27f8af7b9881470f6aa5d44b9.definition.url + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::index
* @see Modules/Media/app/Http/Controllers/MediaController.php:20
* @route '/media'
*/
indexb6e246e27f8af7b9881470f6aa5d44b9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexb6e246e27f8af7b9881470f6aa5d44b9.url(options),
    method: 'get',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::index
* @see Modules/Media/app/Http/Controllers/MediaController.php:20
* @route '/media'
*/
indexb6e246e27f8af7b9881470f6aa5d44b9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexb6e246e27f8af7b9881470f6aa5d44b9.url(options),
    method: 'head',
})

export const index = {
    '/api/v1/media': index46c6282de3c06ba451eff0ce018051d9,
    '/media': indexb6e246e27f8af7b9881470f6aa5d44b9,
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::store
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/api/v1/media'
*/
const store46c6282de3c06ba451eff0ce018051d9 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store46c6282de3c06ba451eff0ce018051d9.url(options),
    method: 'post',
})

store46c6282de3c06ba451eff0ce018051d9.definition = {
    methods: ["post"],
    url: '/api/v1/media',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::store
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/api/v1/media'
*/
store46c6282de3c06ba451eff0ce018051d9.url = (options?: RouteQueryOptions) => {
    return store46c6282de3c06ba451eff0ce018051d9.definition.url + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::store
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/api/v1/media'
*/
store46c6282de3c06ba451eff0ce018051d9.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store46c6282de3c06ba451eff0ce018051d9.url(options),
    method: 'post',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::store
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media'
*/
const storeb6e246e27f8af7b9881470f6aa5d44b9 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeb6e246e27f8af7b9881470f6aa5d44b9.url(options),
    method: 'post',
})

storeb6e246e27f8af7b9881470f6aa5d44b9.definition = {
    methods: ["post"],
    url: '/media',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::store
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media'
*/
storeb6e246e27f8af7b9881470f6aa5d44b9.url = (options?: RouteQueryOptions) => {
    return storeb6e246e27f8af7b9881470f6aa5d44b9.definition.url + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::store
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media'
*/
storeb6e246e27f8af7b9881470f6aa5d44b9.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeb6e246e27f8af7b9881470f6aa5d44b9.url(options),
    method: 'post',
})

export const store = {
    '/api/v1/media': store46c6282de3c06ba451eff0ce018051d9,
    '/media': storeb6e246e27f8af7b9881470f6aa5d44b9,
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::show
* @see Modules/Media/app/Http/Controllers/MediaController.php:123
* @route '/api/v1/media/{medium}'
*/
const showd2237bb93a00be8c2aa245a3f42855b7 = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showd2237bb93a00be8c2aa245a3f42855b7.url(args, options),
    method: 'get',
})

showd2237bb93a00be8c2aa245a3f42855b7.definition = {
    methods: ["get","head"],
    url: '/api/v1/media/{medium}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::show
* @see Modules/Media/app/Http/Controllers/MediaController.php:123
* @route '/api/v1/media/{medium}'
*/
showd2237bb93a00be8c2aa245a3f42855b7.url = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medium: args }
    }

    if (Array.isArray(args)) {
        args = {
            medium: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        medium: args.medium,
    }

    return showd2237bb93a00be8c2aa245a3f42855b7.definition.url
            .replace('{medium}', parsedArgs.medium.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::show
* @see Modules/Media/app/Http/Controllers/MediaController.php:123
* @route '/api/v1/media/{medium}'
*/
showd2237bb93a00be8c2aa245a3f42855b7.get = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showd2237bb93a00be8c2aa245a3f42855b7.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::show
* @see Modules/Media/app/Http/Controllers/MediaController.php:123
* @route '/api/v1/media/{medium}'
*/
showd2237bb93a00be8c2aa245a3f42855b7.head = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showd2237bb93a00be8c2aa245a3f42855b7.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::show
* @see Modules/Media/app/Http/Controllers/MediaController.php:123
* @route '/media/{medium}'
*/
const show4c7101cb25fdb98487f8feb05faa79b1 = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show4c7101cb25fdb98487f8feb05faa79b1.url(args, options),
    method: 'get',
})

show4c7101cb25fdb98487f8feb05faa79b1.definition = {
    methods: ["get","head"],
    url: '/media/{medium}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::show
* @see Modules/Media/app/Http/Controllers/MediaController.php:123
* @route '/media/{medium}'
*/
show4c7101cb25fdb98487f8feb05faa79b1.url = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medium: args }
    }

    if (Array.isArray(args)) {
        args = {
            medium: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        medium: args.medium,
    }

    return show4c7101cb25fdb98487f8feb05faa79b1.definition.url
            .replace('{medium}', parsedArgs.medium.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::show
* @see Modules/Media/app/Http/Controllers/MediaController.php:123
* @route '/media/{medium}'
*/
show4c7101cb25fdb98487f8feb05faa79b1.get = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show4c7101cb25fdb98487f8feb05faa79b1.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::show
* @see Modules/Media/app/Http/Controllers/MediaController.php:123
* @route '/media/{medium}'
*/
show4c7101cb25fdb98487f8feb05faa79b1.head = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show4c7101cb25fdb98487f8feb05faa79b1.url(args, options),
    method: 'head',
})

export const show = {
    '/api/v1/media/{medium}': showd2237bb93a00be8c2aa245a3f42855b7,
    '/media/{medium}': show4c7101cb25fdb98487f8feb05faa79b1,
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::update
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/api/v1/media/{medium}'
*/
const updated2237bb93a00be8c2aa245a3f42855b7 = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updated2237bb93a00be8c2aa245a3f42855b7.url(args, options),
    method: 'put',
})

updated2237bb93a00be8c2aa245a3f42855b7.definition = {
    methods: ["put","patch"],
    url: '/api/v1/media/{medium}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::update
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/api/v1/media/{medium}'
*/
updated2237bb93a00be8c2aa245a3f42855b7.url = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medium: args }
    }

    if (Array.isArray(args)) {
        args = {
            medium: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        medium: args.medium,
    }

    return updated2237bb93a00be8c2aa245a3f42855b7.definition.url
            .replace('{medium}', parsedArgs.medium.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::update
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/api/v1/media/{medium}'
*/
updated2237bb93a00be8c2aa245a3f42855b7.put = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updated2237bb93a00be8c2aa245a3f42855b7.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::update
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/api/v1/media/{medium}'
*/
updated2237bb93a00be8c2aa245a3f42855b7.patch = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updated2237bb93a00be8c2aa245a3f42855b7.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::update
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media/{medium}'
*/
const update4c7101cb25fdb98487f8feb05faa79b1 = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update4c7101cb25fdb98487f8feb05faa79b1.url(args, options),
    method: 'put',
})

update4c7101cb25fdb98487f8feb05faa79b1.definition = {
    methods: ["put","patch"],
    url: '/media/{medium}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::update
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media/{medium}'
*/
update4c7101cb25fdb98487f8feb05faa79b1.url = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medium: args }
    }

    if (Array.isArray(args)) {
        args = {
            medium: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        medium: args.medium,
    }

    return update4c7101cb25fdb98487f8feb05faa79b1.definition.url
            .replace('{medium}', parsedArgs.medium.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::update
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media/{medium}'
*/
update4c7101cb25fdb98487f8feb05faa79b1.put = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update4c7101cb25fdb98487f8feb05faa79b1.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::update
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media/{medium}'
*/
update4c7101cb25fdb98487f8feb05faa79b1.patch = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update4c7101cb25fdb98487f8feb05faa79b1.url(args, options),
    method: 'patch',
})

export const update = {
    '/api/v1/media/{medium}': updated2237bb93a00be8c2aa245a3f42855b7,
    '/media/{medium}': update4c7101cb25fdb98487f8feb05faa79b1,
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::destroy
* @see Modules/Media/app/Http/Controllers/MediaController.php:156
* @route '/api/v1/media/{medium}'
*/
const destroyd2237bb93a00be8c2aa245a3f42855b7 = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyd2237bb93a00be8c2aa245a3f42855b7.url(args, options),
    method: 'delete',
})

destroyd2237bb93a00be8c2aa245a3f42855b7.definition = {
    methods: ["delete"],
    url: '/api/v1/media/{medium}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::destroy
* @see Modules/Media/app/Http/Controllers/MediaController.php:156
* @route '/api/v1/media/{medium}'
*/
destroyd2237bb93a00be8c2aa245a3f42855b7.url = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medium: args }
    }

    if (Array.isArray(args)) {
        args = {
            medium: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        medium: args.medium,
    }

    return destroyd2237bb93a00be8c2aa245a3f42855b7.definition.url
            .replace('{medium}', parsedArgs.medium.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::destroy
* @see Modules/Media/app/Http/Controllers/MediaController.php:156
* @route '/api/v1/media/{medium}'
*/
destroyd2237bb93a00be8c2aa245a3f42855b7.delete = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyd2237bb93a00be8c2aa245a3f42855b7.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::destroy
* @see Modules/Media/app/Http/Controllers/MediaController.php:156
* @route '/media/{medium}'
*/
const destroy4c7101cb25fdb98487f8feb05faa79b1 = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy4c7101cb25fdb98487f8feb05faa79b1.url(args, options),
    method: 'delete',
})

destroy4c7101cb25fdb98487f8feb05faa79b1.definition = {
    methods: ["delete"],
    url: '/media/{medium}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::destroy
* @see Modules/Media/app/Http/Controllers/MediaController.php:156
* @route '/media/{medium}'
*/
destroy4c7101cb25fdb98487f8feb05faa79b1.url = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medium: args }
    }

    if (Array.isArray(args)) {
        args = {
            medium: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        medium: args.medium,
    }

    return destroy4c7101cb25fdb98487f8feb05faa79b1.definition.url
            .replace('{medium}', parsedArgs.medium.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::destroy
* @see Modules/Media/app/Http/Controllers/MediaController.php:156
* @route '/media/{medium}'
*/
destroy4c7101cb25fdb98487f8feb05faa79b1.delete = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy4c7101cb25fdb98487f8feb05faa79b1.url(args, options),
    method: 'delete',
})

export const destroy = {
    '/api/v1/media/{medium}': destroyd2237bb93a00be8c2aa245a3f42855b7,
    '/media/{medium}': destroy4c7101cb25fdb98487f8feb05faa79b1,
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::create
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/media/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::create
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::create
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::create
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::edit
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media/{medium}/edit'
*/
export const edit = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/media/{medium}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::edit
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media/{medium}/edit'
*/
edit.url = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { medium: args }
    }

    if (Array.isArray(args)) {
        args = {
            medium: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        medium: args.medium,
    }

    return edit.definition.url
            .replace('{medium}', parsedArgs.medium.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::edit
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media/{medium}/edit'
*/
edit.get = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::edit
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media/{medium}/edit'
*/
edit.head = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

const MediaController = { upload, index, store, show, update, destroy, create, edit }

export default MediaController