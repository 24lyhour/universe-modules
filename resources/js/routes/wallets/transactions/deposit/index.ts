import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:298
* @route '/dashboard/wallets/{wallet}/transactions/deposit/create'
*/
export const create = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/wallets/{wallet}/transactions/deposit/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:298
* @route '/dashboard/wallets/{wallet}/transactions/deposit/create'
*/
create.url = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { wallet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { wallet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            wallet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        wallet: typeof args.wallet === 'object'
        ? args.wallet.id
        : args.wallet,
    }

    return create.definition.url
            .replace('{wallet}', parsedArgs.wallet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:298
* @route '/dashboard/wallets/{wallet}/transactions/deposit/create'
*/
create.get = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:298
* @route '/dashboard/wallets/{wallet}/transactions/deposit/create'
*/
create.head = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

