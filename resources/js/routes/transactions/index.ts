import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:24
* @route '/dashboard/transactions'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/transactions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:24
* @route '/dashboard/transactions'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:24
* @route '/dashboard/transactions'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:24
* @route '/dashboard/transactions'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const transactions = {
    index: Object.assign(index, index),
}

export default transactions