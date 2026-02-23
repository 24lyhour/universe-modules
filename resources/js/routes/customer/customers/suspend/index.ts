import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::store
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:83
* @route '/dashboard/customers/{customer}/suspend'
*/
export const store = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: store.url(args, options),
    method: 'patch',
})

store.definition = {
    methods: ["patch"],
    url: '/dashboard/customers/{customer}/suspend',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::store
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:83
* @route '/dashboard/customers/{customer}/suspend'
*/
store.url = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customer: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { customer: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            customer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        customer: typeof args.customer === 'object'
        ? args.customer.id
        : args.customer,
    }

    return store.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::store
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:83
* @route '/dashboard/customers/{customer}/suspend'
*/
store.patch = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: store.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::store
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:83
* @route '/dashboard/customers/{customer}/suspend'
*/
const storeForm = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::store
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:83
* @route '/dashboard/customers/{customer}/suspend'
*/
storeForm.patch = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

store.form = storeForm

const suspend = {
    store: Object.assign(store, store),
}

export default suspend