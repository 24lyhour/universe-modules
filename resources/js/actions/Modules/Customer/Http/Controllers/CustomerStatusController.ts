import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showActivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:22
* @route '/dashboard/customers/{customer}/activate'
*/
export const showActivate = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showActivate.url(args, options),
    method: 'get',
})

showActivate.definition = {
    methods: ["get","head"],
    url: '/dashboard/customers/{customer}/activate',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showActivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:22
* @route '/dashboard/customers/{customer}/activate'
*/
showActivate.url = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return showActivate.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showActivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:22
* @route '/dashboard/customers/{customer}/activate'
*/
showActivate.get = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showActivate.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showActivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:22
* @route '/dashboard/customers/{customer}/activate'
*/
showActivate.head = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showActivate.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showActivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:22
* @route '/dashboard/customers/{customer}/activate'
*/
const showActivateForm = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showActivate.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showActivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:22
* @route '/dashboard/customers/{customer}/activate'
*/
showActivateForm.get = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showActivate.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showActivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:22
* @route '/dashboard/customers/{customer}/activate'
*/
showActivateForm.head = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showActivate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showActivate.form = showActivateForm

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showDeactivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:47
* @route '/dashboard/customers/{customer}/deactivate'
*/
export const showDeactivate = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showDeactivate.url(args, options),
    method: 'get',
})

showDeactivate.definition = {
    methods: ["get","head"],
    url: '/dashboard/customers/{customer}/deactivate',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showDeactivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:47
* @route '/dashboard/customers/{customer}/deactivate'
*/
showDeactivate.url = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return showDeactivate.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showDeactivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:47
* @route '/dashboard/customers/{customer}/deactivate'
*/
showDeactivate.get = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showDeactivate.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showDeactivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:47
* @route '/dashboard/customers/{customer}/deactivate'
*/
showDeactivate.head = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showDeactivate.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showDeactivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:47
* @route '/dashboard/customers/{customer}/deactivate'
*/
const showDeactivateForm = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showDeactivate.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showDeactivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:47
* @route '/dashboard/customers/{customer}/deactivate'
*/
showDeactivateForm.get = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showDeactivate.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showDeactivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:47
* @route '/dashboard/customers/{customer}/deactivate'
*/
showDeactivateForm.head = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showDeactivate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showDeactivate.form = showDeactivateForm

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showSuspend
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:73
* @route '/dashboard/customers/{customer}/suspend'
*/
export const showSuspend = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showSuspend.url(args, options),
    method: 'get',
})

showSuspend.definition = {
    methods: ["get","head"],
    url: '/dashboard/customers/{customer}/suspend',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showSuspend
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:73
* @route '/dashboard/customers/{customer}/suspend'
*/
showSuspend.url = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return showSuspend.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showSuspend
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:73
* @route '/dashboard/customers/{customer}/suspend'
*/
showSuspend.get = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showSuspend.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showSuspend
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:73
* @route '/dashboard/customers/{customer}/suspend'
*/
showSuspend.head = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showSuspend.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showSuspend
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:73
* @route '/dashboard/customers/{customer}/suspend'
*/
const showSuspendForm = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showSuspend.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showSuspend
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:73
* @route '/dashboard/customers/{customer}/suspend'
*/
showSuspendForm.get = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showSuspend.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::showSuspend
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:73
* @route '/dashboard/customers/{customer}/suspend'
*/
showSuspendForm.head = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showSuspend.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showSuspend.form = showSuspendForm

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::activate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:32
* @route '/dashboard/customers/{customer}/activate'
*/
export const activate = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activate.url(args, options),
    method: 'patch',
})

activate.definition = {
    methods: ["patch"],
    url: '/dashboard/customers/{customer}/activate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::activate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:32
* @route '/dashboard/customers/{customer}/activate'
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
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::activate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:32
* @route '/dashboard/customers/{customer}/activate'
*/
activate.patch = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activate.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::activate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:32
* @route '/dashboard/customers/{customer}/activate'
*/
const activateForm = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: activate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::activate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:32
* @route '/dashboard/customers/{customer}/activate'
*/
activateForm.patch = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: activate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

activate.form = activateForm

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::deactivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:57
* @route '/dashboard/customers/{customer}/deactivate'
*/
export const deactivate = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate.url(args, options),
    method: 'patch',
})

deactivate.definition = {
    methods: ["patch"],
    url: '/dashboard/customers/{customer}/deactivate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::deactivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:57
* @route '/dashboard/customers/{customer}/deactivate'
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
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::deactivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:57
* @route '/dashboard/customers/{customer}/deactivate'
*/
deactivate.patch = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::deactivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:57
* @route '/dashboard/customers/{customer}/deactivate'
*/
const deactivateForm = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deactivate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::deactivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:57
* @route '/dashboard/customers/{customer}/deactivate'
*/
deactivateForm.patch = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deactivate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deactivate.form = deactivateForm

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::suspend
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:83
* @route '/dashboard/customers/{customer}/suspend'
*/
export const suspend = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: suspend.url(args, options),
    method: 'patch',
})

suspend.definition = {
    methods: ["patch"],
    url: '/dashboard/customers/{customer}/suspend',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::suspend
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:83
* @route '/dashboard/customers/{customer}/suspend'
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
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::suspend
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:83
* @route '/dashboard/customers/{customer}/suspend'
*/
suspend.patch = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: suspend.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::suspend
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:83
* @route '/dashboard/customers/{customer}/suspend'
*/
const suspendForm = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: suspend.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::suspend
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:83
* @route '/dashboard/customers/{customer}/suspend'
*/
suspendForm.patch = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: suspend.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

suspend.form = suspendForm

const CustomerStatusController = { showActivate, showDeactivate, showSuspend, activate, deactivate, suspend }

export default CustomerStatusController