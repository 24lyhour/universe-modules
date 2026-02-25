import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
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
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::show
* @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:28
* @route '/settings/two-factor'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::show
* @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:28
* @route '/settings/two-factor'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::show
* @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:28
* @route '/settings/two-factor'
*/
showForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

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

/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::updateMethod
* @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:43
* @route '/settings/two-factor/method'
*/
const updateMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateMethod.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::updateMethod
* @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:43
* @route '/settings/two-factor/method'
*/
updateMethodForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateMethod.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateMethod.form = updateMethodForm

const TwoFactorAuthenticationController = { show, updateMethod }

export default TwoFactorAuthenticationController