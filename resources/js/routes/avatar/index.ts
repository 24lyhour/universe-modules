import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\AvatarController::media
* @see app/Http/Controllers/Settings/AvatarController.php:20
* @route '/dashboard/avatar/media'
*/
export const media = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: media.url(options),
    method: 'get',
})

media.definition = {
    methods: ["get","head"],
    url: '/dashboard/avatar/media',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\AvatarController::media
* @see app/Http/Controllers/Settings/AvatarController.php:20
* @route '/dashboard/avatar/media'
*/
media.url = (options?: RouteQueryOptions) => {
    return media.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\AvatarController::media
* @see app/Http/Controllers/Settings/AvatarController.php:20
* @route '/dashboard/avatar/media'
*/
media.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: media.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\AvatarController::media
* @see app/Http/Controllers/Settings/AvatarController.php:20
* @route '/dashboard/avatar/media'
*/
media.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: media.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\AvatarController::upload
* @see app/Http/Controllers/Settings/AvatarController.php:65
* @route '/dashboard/avatar/upload'
*/
export const upload = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

upload.definition = {
    methods: ["post"],
    url: '/dashboard/avatar/upload',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\AvatarController::upload
* @see app/Http/Controllers/Settings/AvatarController.php:65
* @route '/dashboard/avatar/upload'
*/
upload.url = (options?: RouteQueryOptions) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\AvatarController::upload
* @see app/Http/Controllers/Settings/AvatarController.php:65
* @route '/dashboard/avatar/upload'
*/
upload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\AvatarController::destroy
* @see app/Http/Controllers/Settings/AvatarController.php:152
* @route '/dashboard/avatar'
*/
export const destroy = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/avatar',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Settings\AvatarController::destroy
* @see app/Http/Controllers/Settings/AvatarController.php:152
* @route '/dashboard/avatar'
*/
destroy.url = (options?: RouteQueryOptions) => {
    return destroy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\AvatarController::destroy
* @see app/Http/Controllers/Settings/AvatarController.php:152
* @route '/dashboard/avatar'
*/
destroy.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(options),
    method: 'delete',
})

const avatar = {
    media: Object.assign(media, media),
    upload: Object.assign(upload, upload),
    destroy: Object.assign(destroy, destroy),
}

export default avatar