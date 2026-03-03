import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:137
* @route '/dashboard/wallets/{wallet}/transactions'
*/
export const index = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/wallets/{wallet}/transactions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:137
* @route '/dashboard/wallets/{wallet}/transactions'
*/
index.url = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{wallet}', parsedArgs.wallet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:137
* @route '/dashboard/wallets/{wallet}/transactions'
*/
index.get = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:137
* @route '/dashboard/wallets/{wallet}/transactions'
*/
index.head = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:137
* @route '/dashboard/wallets/{wallet}/transactions'
*/
const indexForm = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:137
* @route '/dashboard/wallets/{wallet}/transactions'
*/
indexForm.get = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::index
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:137
* @route '/dashboard/wallets/{wallet}/transactions'
*/
indexForm.head = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:237
* @route '/dashboard/wallets/{wallet}/transactions/{transaction}'
*/
export const show = (args: { wallet: number | { id: number }, transaction: number | { id: number } } | [wallet: number | { id: number }, transaction: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/wallets/{wallet}/transactions/{transaction}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:237
* @route '/dashboard/wallets/{wallet}/transactions/{transaction}'
*/
show.url = (args: { wallet: number | { id: number }, transaction: number | { id: number } } | [wallet: number | { id: number }, transaction: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            wallet: args[0],
            transaction: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        wallet: typeof args.wallet === 'object'
        ? args.wallet.id
        : args.wallet,
        transaction: typeof args.transaction === 'object'
        ? args.transaction.id
        : args.transaction,
    }

    return show.definition.url
            .replace('{wallet}', parsedArgs.wallet.toString())
            .replace('{transaction}', parsedArgs.transaction.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:237
* @route '/dashboard/wallets/{wallet}/transactions/{transaction}'
*/
show.get = (args: { wallet: number | { id: number }, transaction: number | { id: number } } | [wallet: number | { id: number }, transaction: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:237
* @route '/dashboard/wallets/{wallet}/transactions/{transaction}'
*/
show.head = (args: { wallet: number | { id: number }, transaction: number | { id: number } } | [wallet: number | { id: number }, transaction: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:237
* @route '/dashboard/wallets/{wallet}/transactions/{transaction}'
*/
const showForm = (args: { wallet: number | { id: number }, transaction: number | { id: number } } | [wallet: number | { id: number }, transaction: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:237
* @route '/dashboard/wallets/{wallet}/transactions/{transaction}'
*/
showForm.get = (args: { wallet: number | { id: number }, transaction: number | { id: number } } | [wallet: number | { id: number }, transaction: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::show
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:237
* @route '/dashboard/wallets/{wallet}/transactions/{transaction}'
*/
showForm.head = (args: { wallet: number | { id: number }, transaction: number | { id: number } } | [wallet: number | { id: number }, transaction: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::deposit
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:315
* @route '/dashboard/wallets/{wallet}/transactions/deposit'
*/
export const deposit = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: deposit.url(args, options),
    method: 'post',
})

deposit.definition = {
    methods: ["post"],
    url: '/dashboard/wallets/{wallet}/transactions/deposit',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::deposit
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:315
* @route '/dashboard/wallets/{wallet}/transactions/deposit'
*/
deposit.url = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return deposit.definition.url
            .replace('{wallet}', parsedArgs.wallet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::deposit
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:315
* @route '/dashboard/wallets/{wallet}/transactions/deposit'
*/
deposit.post = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: deposit.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::deposit
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:315
* @route '/dashboard/wallets/{wallet}/transactions/deposit'
*/
const depositForm = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deposit.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::deposit
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:315
* @route '/dashboard/wallets/{wallet}/transactions/deposit'
*/
depositForm.post = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deposit.url(args, options),
    method: 'post',
})

deposit.form = depositForm

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::withdraw
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:356
* @route '/dashboard/wallets/{wallet}/transactions/withdraw'
*/
export const withdraw = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: withdraw.url(args, options),
    method: 'post',
})

withdraw.definition = {
    methods: ["post"],
    url: '/dashboard/wallets/{wallet}/transactions/withdraw',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::withdraw
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:356
* @route '/dashboard/wallets/{wallet}/transactions/withdraw'
*/
withdraw.url = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return withdraw.definition.url
            .replace('{wallet}', parsedArgs.wallet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::withdraw
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:356
* @route '/dashboard/wallets/{wallet}/transactions/withdraw'
*/
withdraw.post = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: withdraw.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::withdraw
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:356
* @route '/dashboard/wallets/{wallet}/transactions/withdraw'
*/
const withdrawForm = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: withdraw.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::withdraw
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:356
* @route '/dashboard/wallets/{wallet}/transactions/withdraw'
*/
withdrawForm.post = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: withdraw.url(args, options),
    method: 'post',
})

withdraw.form = withdrawForm

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::transfer
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:408
* @route '/dashboard/wallets/{wallet}/transactions/transfer'
*/
export const transfer = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: transfer.url(args, options),
    method: 'post',
})

transfer.definition = {
    methods: ["post"],
    url: '/dashboard/wallets/{wallet}/transactions/transfer',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::transfer
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:408
* @route '/dashboard/wallets/{wallet}/transactions/transfer'
*/
transfer.url = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return transfer.definition.url
            .replace('{wallet}', parsedArgs.wallet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::transfer
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:408
* @route '/dashboard/wallets/{wallet}/transactions/transfer'
*/
transfer.post = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: transfer.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::transfer
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:408
* @route '/dashboard/wallets/{wallet}/transactions/transfer'
*/
const transferForm = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: transfer.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::transfer
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:408
* @route '/dashboard/wallets/{wallet}/transactions/transfer'
*/
transferForm.post = (args: { wallet: number | { id: number } } | [wallet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: transfer.url(args, options),
    method: 'post',
})

transfer.form = transferForm

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::reverse
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:432
* @route '/dashboard/wallets/{wallet}/transactions/{transaction}/reverse'
*/
export const reverse = (args: { wallet: number | { id: number }, transaction: number | { id: number } } | [wallet: number | { id: number }, transaction: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reverse.url(args, options),
    method: 'post',
})

reverse.definition = {
    methods: ["post"],
    url: '/dashboard/wallets/{wallet}/transactions/{transaction}/reverse',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::reverse
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:432
* @route '/dashboard/wallets/{wallet}/transactions/{transaction}/reverse'
*/
reverse.url = (args: { wallet: number | { id: number }, transaction: number | { id: number } } | [wallet: number | { id: number }, transaction: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            wallet: args[0],
            transaction: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        wallet: typeof args.wallet === 'object'
        ? args.wallet.id
        : args.wallet,
        transaction: typeof args.transaction === 'object'
        ? args.transaction.id
        : args.transaction,
    }

    return reverse.definition.url
            .replace('{wallet}', parsedArgs.wallet.toString())
            .replace('{transaction}', parsedArgs.transaction.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::reverse
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:432
* @route '/dashboard/wallets/{wallet}/transactions/{transaction}/reverse'
*/
reverse.post = (args: { wallet: number | { id: number }, transaction: number | { id: number } } | [wallet: number | { id: number }, transaction: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reverse.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::reverse
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:432
* @route '/dashboard/wallets/{wallet}/transactions/{transaction}/reverse'
*/
const reverseForm = (args: { wallet: number | { id: number }, transaction: number | { id: number } } | [wallet: number | { id: number }, transaction: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reverse.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::reverse
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:432
* @route '/dashboard/wallets/{wallet}/transactions/{transaction}/reverse'
*/
reverseForm.post = (args: { wallet: number | { id: number }, transaction: number | { id: number } } | [wallet: number | { id: number }, transaction: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reverse.url(args, options),
    method: 'post',
})

reverse.form = reverseForm

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::cancel
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:460
* @route '/dashboard/wallets/{wallet}/transactions/{transaction}/cancel'
*/
export const cancel = (args: { wallet: number | { id: number }, transaction: number | { id: number } } | [wallet: number | { id: number }, transaction: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

cancel.definition = {
    methods: ["post"],
    url: '/dashboard/wallets/{wallet}/transactions/{transaction}/cancel',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::cancel
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:460
* @route '/dashboard/wallets/{wallet}/transactions/{transaction}/cancel'
*/
cancel.url = (args: { wallet: number | { id: number }, transaction: number | { id: number } } | [wallet: number | { id: number }, transaction: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            wallet: args[0],
            transaction: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        wallet: typeof args.wallet === 'object'
        ? args.wallet.id
        : args.wallet,
        transaction: typeof args.transaction === 'object'
        ? args.transaction.id
        : args.transaction,
    }

    return cancel.definition.url
            .replace('{wallet}', parsedArgs.wallet.toString())
            .replace('{transaction}', parsedArgs.transaction.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::cancel
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:460
* @route '/dashboard/wallets/{wallet}/transactions/{transaction}/cancel'
*/
cancel.post = (args: { wallet: number | { id: number }, transaction: number | { id: number } } | [wallet: number | { id: number }, transaction: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::cancel
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:460
* @route '/dashboard/wallets/{wallet}/transactions/{transaction}/cancel'
*/
const cancelForm = (args: { wallet: number | { id: number }, transaction: number | { id: number } } | [wallet: number | { id: number }, transaction: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\TransactionController::cancel
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/TransactionController.php:460
* @route '/dashboard/wallets/{wallet}/transactions/{transaction}/cancel'
*/
cancelForm.post = (args: { wallet: number | { id: number }, transaction: number | { id: number } } | [wallet: number | { id: number }, transaction: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, options),
    method: 'post',
})

cancel.form = cancelForm

const transactions = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
    deposit: Object.assign(deposit, deposit),
    withdraw: Object.assign(withdraw, withdraw),
    transfer: Object.assign(transfer, transfer),
    reverse: Object.assign(reverse, reverse),
    cancel: Object.assign(cancel, cancel),
}

export default transactions