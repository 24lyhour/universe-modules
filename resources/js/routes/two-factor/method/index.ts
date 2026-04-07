import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
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

const method = {
    update: Object.assign(update, update),
}

export default method