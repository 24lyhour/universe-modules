import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
import wallet0fdd46 from './wallet'
/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::wallet
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:17
* @route '/api/v1/customer/wallet'
*/
export const wallet = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: wallet.url(options),
    method: 'get',
})

wallet.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/wallet',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::wallet
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:17
* @route '/api/v1/customer/wallet'
*/
wallet.url = (options?: RouteQueryOptions) => {
    return wallet.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::wallet
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:17
* @route '/api/v1/customer/wallet'
*/
wallet.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: wallet.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::wallet
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:17
* @route '/api/v1/customer/wallet'
*/
wallet.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: wallet.url(options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::wallet
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:17
* @route '/api/v1/customer/wallet'
*/
const walletForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: wallet.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::wallet
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:17
* @route '/api/v1/customer/wallet'
*/
walletForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: wallet.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::wallet
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:17
* @route '/api/v1/customer/wallet'
*/
walletForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: wallet.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

wallet.form = walletForm

const customer = {
    wallet: Object.assign(wallet, wallet0fdd46),
}

export default customer