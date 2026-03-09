import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::show
* @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:28
* @route '/settings/two-factor'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/settings/two-factor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::show
* @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:28
* @route '/settings/two-factor'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::show
* @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:28
* @route '/settings/two-factor'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::show
* @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:28
* @route '/settings/two-factor'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::updateMethod
* @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:43
* @route '/settings/two-factor/method'
*/
export const updateMethod = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateMethod.url(options),
    method: 'put',
})

updateMethod.definition = {
    methods: ["put"],
    url: '/settings/two-factor/method',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::updateMethod
* @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:43
* @route '/settings/two-factor/method'
*/
updateMethod.url = (options?: RouteQueryOptions) => {
    return updateMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::updateMethod
* @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:43
* @route '/settings/two-factor/method'
*/
updateMethod.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateMethod.url(options),
    method: 'put',
})

const TwoFactorAuthenticationController = { show, updateMethod }

export default TwoFactorAuthenticationController