import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerStatusApiController::activate
* @see Modules/Customer/app/Http/Controllers/Api/CustomerStatusApiController.php:20
* @route '/api/v1/customers/{customer}/activate'
*/
export const activate = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activate.url(args, options),
    method: 'patch',
})

activate.definition = {
    methods: ["patch"],
    url: '/api/v1/customers/{customer}/activate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerStatusApiController::activate
* @see Modules/Customer/app/Http/Controllers/Api/CustomerStatusApiController.php:20
* @route '/api/v1/customers/{customer}/activate'
*/
activate.url = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return activate.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerStatusApiController::activate
* @see Modules/Customer/app/Http/Controllers/Api/CustomerStatusApiController.php:20
* @route '/api/v1/customers/{customer}/activate'
*/
activate.patch = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activate.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerStatusApiController::deactivate
* @see Modules/Customer/app/Http/Controllers/Api/CustomerStatusApiController.php:33
* @route '/api/v1/customers/{customer}/deactivate'
*/
export const deactivate = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate.url(args, options),
    method: 'patch',
})

deactivate.definition = {
    methods: ["patch"],
    url: '/api/v1/customers/{customer}/deactivate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerStatusApiController::deactivate
* @see Modules/Customer/app/Http/Controllers/Api/CustomerStatusApiController.php:33
* @route '/api/v1/customers/{customer}/deactivate'
*/
deactivate.url = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return deactivate.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerStatusApiController::deactivate
* @see Modules/Customer/app/Http/Controllers/Api/CustomerStatusApiController.php:33
* @route '/api/v1/customers/{customer}/deactivate'
*/
deactivate.patch = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerStatusApiController::suspend
* @see Modules/Customer/app/Http/Controllers/Api/CustomerStatusApiController.php:46
* @route '/api/v1/customers/{customer}/suspend'
*/
export const suspend = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: suspend.url(args, options),
    method: 'patch',
})

suspend.definition = {
    methods: ["patch"],
    url: '/api/v1/customers/{customer}/suspend',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerStatusApiController::suspend
* @see Modules/Customer/app/Http/Controllers/Api/CustomerStatusApiController.php:46
* @route '/api/v1/customers/{customer}/suspend'
*/
suspend.url = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return suspend.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerStatusApiController::suspend
* @see Modules/Customer/app/Http/Controllers/Api/CustomerStatusApiController.php:46
* @route '/api/v1/customers/{customer}/suspend'
*/
suspend.patch = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: suspend.url(args, options),
    method: 'patch',
})

const CustomerStatusApiController = { activate, deactivate, suspend }

export default CustomerStatusApiController