import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\TransactionController::exportMethod
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/TransactionController.php:57
* @route '/dashboard/payment-transactions/export'
*/
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/payment-transactions/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\TransactionController::exportMethod
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/TransactionController.php:57
* @route '/dashboard/payment-transactions/export'
*/
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\TransactionController::exportMethod
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/TransactionController.php:57
* @route '/dashboard/payment-transactions/export'
*/
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\TransactionController::exportMethod
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/TransactionController.php:57
* @route '/dashboard/payment-transactions/export'
*/
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\TransactionController::index
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/TransactionController.php:24
* @route '/dashboard/payment-transactions'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/payment-transactions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\TransactionController::index
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/TransactionController.php:24
* @route '/dashboard/payment-transactions'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\TransactionController::index
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/TransactionController.php:24
* @route '/dashboard/payment-transactions'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\TransactionController::index
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/TransactionController.php:24
* @route '/dashboard/payment-transactions'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\TransactionController::show
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/TransactionController.php:45
* @route '/dashboard/payment-transactions/{transaction}'
*/
export const show = (args: { transaction: string | { uuid: string } } | [transaction: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/payment-transactions/{transaction}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\TransactionController::show
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/TransactionController.php:45
* @route '/dashboard/payment-transactions/{transaction}'
*/
show.url = (args: { transaction: string | { uuid: string } } | [transaction: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { transaction: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { transaction: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            transaction: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        transaction: typeof args.transaction === 'object'
        ? args.transaction.uuid
        : args.transaction,
    }

    return show.definition.url
            .replace('{transaction}', parsedArgs.transaction.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\TransactionController::show
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/TransactionController.php:45
* @route '/dashboard/payment-transactions/{transaction}'
*/
show.get = (args: { transaction: string | { uuid: string } } | [transaction: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\Dashboard\V1\TransactionController::show
* @see Modules/Payment/app/Http/Controllers/Dashboard/V1/TransactionController.php:45
* @route '/dashboard/payment-transactions/{transaction}'
*/
show.head = (args: { transaction: string | { uuid: string } } | [transaction: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

const transactions = {
    export: Object.assign(exportMethod, exportMethod),
    index: Object.assign(index, index),
    show: Object.assign(show, show),
}

export default transactions