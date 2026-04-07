import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
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
* @see \Modules\Media\Http\Controllers\MediaDashboardController::index
* @see Modules/Media/app/Http/Controllers/MediaDashboardController.php:20
* @route '/dashboard/media'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Media\Http\Controllers\MediaDashboardController::index
* @see Modules/Media/app/Http/Controllers/MediaDashboardController.php:20
* @route '/dashboard/media'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Media\Http\Controllers\MediaDashboardController::index
* @see Modules/Media/app/Http/Controllers/MediaDashboardController.php:20
* @route '/dashboard/media'
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

/**
* @see \Modules\Media\Http\Controllers\MediaDashboardController::upload
* @see Modules/Media/app/Http/Controllers/MediaDashboardController.php:71
* @route '/dashboard/media/upload'
*/
const uploadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upload.url(options),
    method: 'post',
})

/**
* @see \Modules\Media\Http\Controllers\MediaDashboardController::upload
* @see Modules/Media/app/Http/Controllers/MediaDashboardController.php:71
* @route '/dashboard/media/upload'
*/
uploadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upload.url(options),
    method: 'post',
})

upload.form = uploadForm

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
* @see \Modules\Media\Http\Controllers\MediaDashboardController::destroy
* @see Modules/Media/app/Http/Controllers/MediaDashboardController.php:121
* @route '/dashboard/media/{id}'
*/
const destroyForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Media\Http\Controllers\MediaDashboardController::destroy
* @see Modules/Media/app/Http/Controllers/MediaDashboardController.php:121
* @route '/dashboard/media/{id}'
*/
destroyForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const MediaDashboardController = { index, upload, destroy }

export default MediaDashboardController