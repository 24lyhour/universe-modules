import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../../wayfinder'
/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletSettingsController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletSettingsController.php:30
* @route '/dashboard/settings/wallet'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/settings/wallet',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletSettingsController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletSettingsController.php:30
* @route '/dashboard/settings/wallet'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletSettingsController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletSettingsController.php:30
* @route '/dashboard/settings/wallet'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletSettingsController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletSettingsController.php:30
* @route '/dashboard/settings/wallet'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

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

const WalletSettingsController = { index, update }

export default WalletSettingsController