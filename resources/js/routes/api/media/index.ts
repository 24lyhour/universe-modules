import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
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
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/media',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::index
* @see Modules/Media/app/Http/Controllers/MediaController.php:20
* @route '/api/v1/media'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::index
* @see Modules/Media/app/Http/Controllers/MediaController.php:20
* @route '/api/v1/media'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::index
* @see Modules/Media/app/Http/Controllers/MediaController.php:20
* @route '/api/v1/media'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::store
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/api/v1/media'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/media',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::store
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/api/v1/media'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::store
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/api/v1/media'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::show
* @see Modules/Media/app/Http/Controllers/MediaController.php:123
* @route '/api/v1/media/{medium}'
*/
export const show = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/media/{medium}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::show
* @see Modules/Media/app/Http/Controllers/MediaController.php:123
* @route '/api/v1/media/{medium}'
*/
show.url = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{medium}', parsedArgs.medium.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::show
* @see Modules/Media/app/Http/Controllers/MediaController.php:123
* @route '/api/v1/media/{medium}'
*/
show.get = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::show
* @see Modules/Media/app/Http/Controllers/MediaController.php:123
* @route '/api/v1/media/{medium}'
*/
show.head = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::update
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/api/v1/media/{medium}'
*/
export const update = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/media/{medium}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::update
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/api/v1/media/{medium}'
*/
update.url = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{medium}', parsedArgs.medium.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::update
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/api/v1/media/{medium}'
*/
update.put = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::update
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/api/v1/media/{medium}'
*/
update.patch = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::destroy
* @see Modules/Media/app/Http/Controllers/MediaController.php:156
* @route '/api/v1/media/{medium}'
*/
export const destroy = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/media/{medium}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::destroy
* @see Modules/Media/app/Http/Controllers/MediaController.php:156
* @route '/api/v1/media/{medium}'
*/
destroy.url = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{medium}', parsedArgs.medium.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::destroy
* @see Modules/Media/app/Http/Controllers/MediaController.php:156
* @route '/api/v1/media/{medium}'
*/
destroy.delete = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const media = {
    upload: Object.assign(upload, upload),
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default media