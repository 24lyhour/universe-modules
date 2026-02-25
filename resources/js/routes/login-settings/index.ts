import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\LoginSettingsController::index
* @see app/Http/Controllers/Settings/LoginSettingsController.php:27
* @route '/dashboard/settings/login'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/settings/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\LoginSettingsController::index
* @see app/Http/Controllers/Settings/LoginSettingsController.php:27
* @route '/dashboard/settings/login'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\LoginSettingsController::index
* @see app/Http/Controllers/Settings/LoginSettingsController.php:27
* @route '/dashboard/settings/login'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\LoginSettingsController::index
* @see app/Http/Controllers/Settings/LoginSettingsController.php:27
* @route '/dashboard/settings/login'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\LoginSettingsController::update
* @see app/Http/Controllers/Settings/LoginSettingsController.php:38
* @route '/dashboard/settings/login'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/dashboard/settings/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\LoginSettingsController::update
* @see app/Http/Controllers/Settings/LoginSettingsController.php:38
* @route '/dashboard/settings/login'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\LoginSettingsController::update
* @see app/Http/Controllers/Settings/LoginSettingsController.php:38
* @route '/dashboard/settings/login'
*/
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\LoginSettingsController::removeImage
* @see app/Http/Controllers/Settings/LoginSettingsController.php:48
* @route '/dashboard/settings/login/image'
*/
export const removeImage = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: removeImage.url(options),
    method: 'delete',
})

removeImage.definition = {
    methods: ["delete"],
    url: '/dashboard/settings/login/image',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Settings\LoginSettingsController::removeImage
* @see app/Http/Controllers/Settings/LoginSettingsController.php:48
* @route '/dashboard/settings/login/image'
*/
removeImage.url = (options?: RouteQueryOptions) => {
    return removeImage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\LoginSettingsController::removeImage
* @see app/Http/Controllers/Settings/LoginSettingsController.php:48
* @route '/dashboard/settings/login/image'
*/
removeImage.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: removeImage.url(options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Settings\LoginSettingsController::removeLogo
* @see app/Http/Controllers/Settings/LoginSettingsController.php:58
* @route '/dashboard/settings/login/logo'
*/
export const removeLogo = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: removeLogo.url(options),
    method: 'delete',
})

removeLogo.definition = {
    methods: ["delete"],
    url: '/dashboard/settings/login/logo',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Settings\LoginSettingsController::removeLogo
* @see app/Http/Controllers/Settings/LoginSettingsController.php:58
* @route '/dashboard/settings/login/logo'
*/
removeLogo.url = (options?: RouteQueryOptions) => {
    return removeLogo.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\LoginSettingsController::removeLogo
* @see app/Http/Controllers/Settings/LoginSettingsController.php:58
* @route '/dashboard/settings/login/logo'
*/
removeLogo.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: removeLogo.url(options),
    method: 'delete',
})

const loginSettings = {
    index: Object.assign(index, index),
    update: Object.assign(update, update),
    removeImage: Object.assign(removeImage, removeImage),
    removeLogo: Object.assign(removeLogo, removeLogo),
}

export default loginSettings