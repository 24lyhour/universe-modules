import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Customer\Http\Controllers\CustomerSecurityController::verifyEmail
* @see Modules/Customer/app/Http/Controllers/CustomerSecurityController.php:18
* @route '/dashboard/customers/{customer}/verify-email'
*/
export const verifyEmail = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: verifyEmail.url(args, options),
    method: 'patch',
})

verifyEmail.definition = {
    methods: ["patch"],
    url: '/dashboard/customers/{customer}/verify-email',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerSecurityController::verifyEmail
* @see Modules/Customer/app/Http/Controllers/CustomerSecurityController.php:18
* @route '/dashboard/customers/{customer}/verify-email'
*/
verifyEmail.url = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return verifyEmail.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerSecurityController::verifyEmail
* @see Modules/Customer/app/Http/Controllers/CustomerSecurityController.php:18
* @route '/dashboard/customers/{customer}/verify-email'
*/
verifyEmail.patch = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: verifyEmail.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerSecurityController::enableTwoFactor
* @see Modules/Customer/app/Http/Controllers/CustomerSecurityController.php:28
* @route '/dashboard/customers/{customer}/enable-2fa'
*/
export const enableTwoFactor = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enableTwoFactor.url(args, options),
    method: 'post',
})

enableTwoFactor.definition = {
    methods: ["post"],
    url: '/dashboard/customers/{customer}/enable-2fa',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerSecurityController::enableTwoFactor
* @see Modules/Customer/app/Http/Controllers/CustomerSecurityController.php:28
* @route '/dashboard/customers/{customer}/enable-2fa'
*/
enableTwoFactor.url = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return enableTwoFactor.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerSecurityController::enableTwoFactor
* @see Modules/Customer/app/Http/Controllers/CustomerSecurityController.php:28
* @route '/dashboard/customers/{customer}/enable-2fa'
*/
enableTwoFactor.post = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enableTwoFactor.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerSecurityController::disableTwoFactor
* @see Modules/Customer/app/Http/Controllers/CustomerSecurityController.php:41
* @route '/dashboard/customers/{customer}/disable-2fa'
*/
export const disableTwoFactor = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: disableTwoFactor.url(args, options),
    method: 'delete',
})

disableTwoFactor.definition = {
    methods: ["delete"],
    url: '/dashboard/customers/{customer}/disable-2fa',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerSecurityController::disableTwoFactor
* @see Modules/Customer/app/Http/Controllers/CustomerSecurityController.php:41
* @route '/dashboard/customers/{customer}/disable-2fa'
*/
disableTwoFactor.url = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return disableTwoFactor.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerSecurityController::disableTwoFactor
* @see Modules/Customer/app/Http/Controllers/CustomerSecurityController.php:41
* @route '/dashboard/customers/{customer}/disable-2fa'
*/
disableTwoFactor.delete = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: disableTwoFactor.url(args, options),
    method: 'delete',
})

const CustomerSecurityController = { verifyEmail, enableTwoFactor, disableTwoFactor }

export default CustomerSecurityController