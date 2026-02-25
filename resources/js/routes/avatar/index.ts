import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\AvatarController::upload
* @see app/Http/Controllers/Settings/AvatarController.php:18
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
* @see app/Http/Controllers/Settings/AvatarController.php:18
* @route '/dashboard/avatar/upload'
*/
upload.url = (options?: RouteQueryOptions) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\AvatarController::upload
* @see app/Http/Controllers/Settings/AvatarController.php:18
* @route '/dashboard/avatar/upload'
*/
upload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\AvatarController::upload
* @see app/Http/Controllers/Settings/AvatarController.php:18
* @route '/dashboard/avatar/upload'
*/
const uploadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upload.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\AvatarController::upload
* @see app/Http/Controllers/Settings/AvatarController.php:18
* @route '/dashboard/avatar/upload'
*/
uploadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upload.url(options),
    method: 'post',
})

upload.form = uploadForm

/**
* @see \App\Http\Controllers\Settings\AvatarController::destroy
* @see app/Http/Controllers/Settings/AvatarController.php:57
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
* @see app/Http/Controllers/Settings/AvatarController.php:57
* @route '/dashboard/avatar'
*/
destroy.url = (options?: RouteQueryOptions) => {
    return destroy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\AvatarController::destroy
* @see app/Http/Controllers/Settings/AvatarController.php:57
* @route '/dashboard/avatar'
*/
destroy.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Settings\AvatarController::destroy
* @see app/Http/Controllers/Settings/AvatarController.php:57
* @route '/dashboard/avatar'
*/
const destroyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\AvatarController::destroy
* @see app/Http/Controllers/Settings/AvatarController.php:57
* @route '/dashboard/avatar'
*/
destroyForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const avatar = {
    upload: Object.assign(upload, upload),
    destroy: Object.assign(destroy, destroy),
}

export default avatar