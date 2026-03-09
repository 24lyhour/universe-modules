import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
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
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletSettingsController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletSettingsController.php:30
* @route '/dashboard/settings/wallet'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletSettingsController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletSettingsController.php:30
* @route '/dashboard/settings/wallet'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletSettingsController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletSettingsController.php:30
* @route '/dashboard/settings/wallet'
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

const WalletSettingsController = { index, update }

export default WalletSettingsController