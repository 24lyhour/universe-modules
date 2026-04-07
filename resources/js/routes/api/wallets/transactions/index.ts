import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::index
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:45
* @route '/api/v1/customer/wallet/transactions'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/wallet/transactions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::index
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:45
* @route '/api/v1/customer/wallet/transactions'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::index
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:45
* @route '/api/v1/customer/wallet/transactions'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::index
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:45
* @route '/api/v1/customer/wallet/transactions'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const transactions = {
    index: Object.assign(index, index),
}

export default transactions