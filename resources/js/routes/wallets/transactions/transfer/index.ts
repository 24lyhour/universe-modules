import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:131
* @route '/dashboard/wallets/{wallet}/transactions/transfer/create'
*/
export const create = (args: { wallet: string | number | { id: string | number } } | [wallet: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/wallets/{wallet}/transactions/transfer/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:131
* @route '/dashboard/wallets/{wallet}/transactions/transfer/create'
*/
create.url = (args: { wallet: string | number | { id: string | number } } | [wallet: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:131
* @route '/dashboard/wallets/{wallet}/transactions/transfer/create'
*/
create.get = (args: { wallet: string | number | { id: string | number } } | [wallet: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:131
* @route '/dashboard/wallets/{wallet}/transactions/transfer/create'
*/
create.head = (args: { wallet: string | number | { id: string | number } } | [wallet: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:131
* @route '/dashboard/wallets/{wallet}/transactions/transfer/create'
*/
const createForm = (args: { wallet: string | number | { id: string | number } } | [wallet: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:131
* @route '/dashboard/wallets/{wallet}/transactions/transfer/create'
*/
createForm.get = (args: { wallet: string | number | { id: string | number } } | [wallet: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::create
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:131
* @route '/dashboard/wallets/{wallet}/transactions/transfer/create'
*/
createForm.head = (args: { wallet: string | number | { id: string | number } } | [wallet: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm
