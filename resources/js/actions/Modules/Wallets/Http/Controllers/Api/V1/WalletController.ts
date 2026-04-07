import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../../wayfinder'
/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::show
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:17
* @route '/api/v1/customer/wallet'
*/
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/wallet',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::show
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:17
* @route '/api/v1/customer/wallet'
*/
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::show
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:17
* @route '/api/v1/customer/wallet'
*/
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::show
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:17
* @route '/api/v1/customer/wallet'
*/
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::balance
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:29
* @route '/api/v1/customer/wallet/balance'
*/
export const balance = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: balance.url(options),
    method: 'get',
})

balance.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/wallet/balance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::balance
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:29
* @route '/api/v1/customer/wallet/balance'
*/
balance.url = (options?: RouteQueryOptions) => {
    return balance.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::balance
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:29
* @route '/api/v1/customer/wallet/balance'
*/
balance.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: balance.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::balance
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:29
* @route '/api/v1/customer/wallet/balance'
*/
balance.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: balance.url(options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::transactions
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:45
* @route '/api/v1/customer/wallet/transactions'
*/
export const transactions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactions.url(options),
    method: 'get',
})

transactions.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/wallet/transactions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::transactions
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:45
* @route '/api/v1/customer/wallet/transactions'
*/
transactions.url = (options?: RouteQueryOptions) => {
    return transactions.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::transactions
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:45
* @route '/api/v1/customer/wallet/transactions'
*/
transactions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactions.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::transactions
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:45
* @route '/api/v1/customer/wallet/transactions'
*/
transactions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: transactions.url(options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::topUp
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:83
* @route '/api/v1/customer/wallet/top-up'
*/
export const topUp = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: topUp.url(options),
    method: 'post',
})

topUp.definition = {
    methods: ["post"],
    url: '/api/v1/customer/wallet/top-up',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::topUp
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:83
* @route '/api/v1/customer/wallet/top-up'
*/
topUp.url = (options?: RouteQueryOptions) => {
    return topUp.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::topUp
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:83
* @route '/api/v1/customer/wallet/top-up'
*/
topUp.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: topUp.url(options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::pay
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:120
* @route '/api/v1/customer/wallet/pay'
*/
export const pay = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: pay.url(options),
    method: 'post',
})

pay.definition = {
    methods: ["post"],
    url: '/api/v1/customer/wallet/pay',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::pay
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:120
* @route '/api/v1/customer/wallet/pay'
*/
pay.url = (options?: RouteQueryOptions) => {
    return pay.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::pay
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:120
* @route '/api/v1/customer/wallet/pay'
*/
pay.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: pay.url(options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::transfer
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:163
* @route '/api/v1/customer/wallet/transfer'
*/
export const transfer = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: transfer.url(options),
    method: 'post',
})

transfer.definition = {
    methods: ["post"],
    url: '/api/v1/customer/wallet/transfer',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::transfer
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:163
* @route '/api/v1/customer/wallet/transfer'
*/
transfer.url = (options?: RouteQueryOptions) => {
    return transfer.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::transfer
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:163
* @route '/api/v1/customer/wallet/transfer'
*/
transfer.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: transfer.url(options),
    method: 'post',
})

const WalletController = { show, balance, transactions, topUp, pay, transfer }

export default WalletController