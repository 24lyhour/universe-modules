import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
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
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::show
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:17
* @route '/api/v1/customer/wallet'
*/
const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::show
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:17
* @route '/api/v1/customer/wallet'
*/
showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::show
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:17
* @route '/api/v1/customer/wallet'
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
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::balance
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:41
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
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:41
* @route '/api/v1/customer/wallet/balance'
*/
balance.url = (options?: RouteQueryOptions) => {
    return balance.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::balance
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:41
* @route '/api/v1/customer/wallet/balance'
*/
balance.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: balance.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::balance
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:41
* @route '/api/v1/customer/wallet/balance'
*/
balance.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: balance.url(options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::balance
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:41
* @route '/api/v1/customer/wallet/balance'
*/
const balanceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: balance.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::balance
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:41
* @route '/api/v1/customer/wallet/balance'
*/
balanceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: balance.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::balance
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:41
* @route '/api/v1/customer/wallet/balance'
*/
balanceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: balance.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

balance.form = balanceForm

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::transactions
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:57
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
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:57
* @route '/api/v1/customer/wallet/transactions'
*/
transactions.url = (options?: RouteQueryOptions) => {
    return transactions.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::transactions
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:57
* @route '/api/v1/customer/wallet/transactions'
*/
transactions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: transactions.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::transactions
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:57
* @route '/api/v1/customer/wallet/transactions'
*/
transactions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: transactions.url(options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::transactions
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:57
* @route '/api/v1/customer/wallet/transactions'
*/
const transactionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: transactions.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::transactions
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:57
* @route '/api/v1/customer/wallet/transactions'
*/
transactionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: transactions.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::transactions
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:57
* @route '/api/v1/customer/wallet/transactions'
*/
transactionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: transactions.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

transactions.form = transactionsForm

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::topUp
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:95
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
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:95
* @route '/api/v1/customer/wallet/top-up'
*/
topUp.url = (options?: RouteQueryOptions) => {
    return topUp.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::topUp
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:95
* @route '/api/v1/customer/wallet/top-up'
*/
topUp.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: topUp.url(options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::topUp
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:95
* @route '/api/v1/customer/wallet/top-up'
*/
const topUpForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: topUp.url(options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::topUp
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:95
* @route '/api/v1/customer/wallet/top-up'
*/
topUpForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: topUp.url(options),
    method: 'post',
})

topUp.form = topUpForm

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::pay
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:132
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
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:132
* @route '/api/v1/customer/wallet/pay'
*/
pay.url = (options?: RouteQueryOptions) => {
    return pay.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::pay
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:132
* @route '/api/v1/customer/wallet/pay'
*/
pay.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: pay.url(options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::pay
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:132
* @route '/api/v1/customer/wallet/pay'
*/
const payForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: pay.url(options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::pay
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:132
* @route '/api/v1/customer/wallet/pay'
*/
payForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: pay.url(options),
    method: 'post',
})

pay.form = payForm

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::transfer
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:175
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
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:175
* @route '/api/v1/customer/wallet/transfer'
*/
transfer.url = (options?: RouteQueryOptions) => {
    return transfer.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::transfer
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:175
* @route '/api/v1/customer/wallet/transfer'
*/
transfer.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: transfer.url(options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::transfer
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:175
* @route '/api/v1/customer/wallet/transfer'
*/
const transferForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: transfer.url(options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\WalletController::transfer
* @see Modules/Wallets/app/Http/Controllers/Api/V1/WalletController.php:175
* @route '/api/v1/customer/wallet/transfer'
*/
transferForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: transfer.url(options),
    method: 'post',
})

transfer.form = transferForm

const WalletController = { show, balance, transactions, topUp, pay, transfer }

export default WalletController