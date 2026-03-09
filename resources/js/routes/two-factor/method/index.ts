import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::update
* @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:43
* @route '/settings/two-factor/method'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/settings/two-factor/method',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::update
* @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:43
* @route '/settings/two-factor/method'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::update
* @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:43
* @route '/settings/two-factor/method'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::update
* @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:43
* @route '/settings/two-factor/method'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\TwoFactorAuthenticationController::update
* @see app/Http/Controllers/Settings/TwoFactorAuthenticationController.php:43
* @route '/settings/two-factor/method'
*/
updateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const method = {
    update: Object.assign(update, update),
}

export default method