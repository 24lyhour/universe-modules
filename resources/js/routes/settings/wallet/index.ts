import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletSettingsController::update
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletSettingsController.php:45
* @route '/dashboard/settings/wallet'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/dashboard/settings/wallet',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletSettingsController::update
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletSettingsController.php:45
* @route '/dashboard/settings/wallet'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletSettingsController::update
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletSettingsController.php:45
* @route '/dashboard/settings/wallet'
*/
update.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletSettingsController::update
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletSettingsController.php:45
* @route '/dashboard/settings/wallet'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletSettingsController::update
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletSettingsController.php:45
* @route '/dashboard/settings/wallet'
*/
updateForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const wallet = {
    update: Object.assign(update, update),
}

export default wallet