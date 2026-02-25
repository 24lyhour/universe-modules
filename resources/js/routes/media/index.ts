import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Media\Http\Controllers\MediaController::index
* @see Modules/Media/app/Http/Controllers/MediaController.php:20
* @route '/media'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/media',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::index
* @see Modules/Media/app/Http/Controllers/MediaController.php:20
* @route '/media'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::index
* @see Modules/Media/app/Http/Controllers/MediaController.php:20
* @route '/media'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::index
* @see Modules/Media/app/Http/Controllers/MediaController.php:20
* @route '/media'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Media\Http\Controllers\MediaDashboardController::index
* @see Modules/Media/app/Http/Controllers/MediaDashboardController.php:20
* @route '/dashboard/media'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/media',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Media\Http\Controllers\MediaDashboardController::index
* @see Modules/Media/app/Http/Controllers/MediaDashboardController.php:20
* @route '/dashboard/media'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaDashboardController::index
* @see Modules/Media/app/Http/Controllers/MediaDashboardController.php:20
* @route '/dashboard/media'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Media\Http\Controllers\MediaDashboardController::index
* @see Modules/Media/app/Http/Controllers/MediaDashboardController.php:20
* @route '/dashboard/media'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

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
* @see \Modules\Media\Http\Controllers\MediaController::store
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/media',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::store
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaController::store
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::show
* @see Modules/Media/app/Http/Controllers/MediaController.php:123
* @route '/media/{medium}'
*/
export const show = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/media/{medium}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::show
* @see Modules/Media/app/Http/Controllers/MediaController.php:123
* @route '/media/{medium}'
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
* @route '/media/{medium}'
*/
show.get = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::show
* @see Modules/Media/app/Http/Controllers/MediaController.php:123
* @route '/media/{medium}'
*/
show.head = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
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

/**
* @see \Modules\Media\Http\Controllers\MediaController::update
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media/{medium}'
*/
export const update = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/media/{medium}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::update
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media/{medium}'
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
* @route '/media/{medium}'
*/
update.put = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::update
* @see Modules/Media/app/Http/Controllers/MediaController.php:0
* @route '/media/{medium}'
*/
update.patch = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Media\Http\Controllers\MediaController::destroy
* @see Modules/Media/app/Http/Controllers/MediaController.php:156
* @route '/media/{medium}'
*/
export const destroy = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/media/{medium}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Media\Http\Controllers\MediaController::destroy
* @see Modules/Media/app/Http/Controllers/MediaController.php:156
* @route '/media/{medium}'
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
* @route '/media/{medium}'
*/
destroy.delete = (args: { medium: string | number } | [medium: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Media\Http\Controllers\MediaDashboardController::destroy
* @see Modules/Media/app/Http/Controllers/MediaDashboardController.php:121
* @route '/dashboard/media/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/media/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Media\Http\Controllers\MediaDashboardController::destroy
* @see Modules/Media/app/Http/Controllers/MediaDashboardController.php:121
* @route '/dashboard/media/{id}'
*/
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaDashboardController::destroy
* @see Modules/Media/app/Http/Controllers/MediaDashboardController.php:121
* @route '/dashboard/media/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Media\Http\Controllers\MediaDashboardController::upload
* @see Modules/Media/app/Http/Controllers/MediaDashboardController.php:71
* @route '/dashboard/media/upload'
*/
export const upload = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

upload.definition = {
    methods: ["post"],
    url: '/dashboard/media/upload',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Media\Http\Controllers\MediaDashboardController::upload
* @see Modules/Media/app/Http/Controllers/MediaDashboardController.php:71
* @route '/dashboard/media/upload'
*/
upload.url = (options?: RouteQueryOptions) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \Modules\Media\Http\Controllers\MediaDashboardController::upload
* @see Modules/Media/app/Http/Controllers/MediaDashboardController.php:71
* @route '/dashboard/media/upload'
*/
upload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

const media = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    upload: Object.assign(upload, upload),
}

export default media