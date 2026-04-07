import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
import activate247610 from './activate'
import deactivateEe368b from './deactivate'
import suspend938f47 from './suspend'
/**
* @see \Modules\Customer\Http\Controllers\CustomerController::index
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:29
* @route '/dashboard/customers'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/customers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::index
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:29
* @route '/dashboard/customers'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::index
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:29
* @route '/dashboard/customers'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::index
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:29
* @route '/dashboard/customers'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::create
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:49
* @route '/dashboard/customers/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/customers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::create
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:49
* @route '/dashboard/customers/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::create
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:49
* @route '/dashboard/customers/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::create
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:49
* @route '/dashboard/customers/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::store
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:58
* @route '/dashboard/customers'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/customers',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::store
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:58
* @route '/dashboard/customers'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::store
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:58
* @route '/dashboard/customers'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::show
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:69
* @route '/dashboard/customers/{customer}'
*/
export const show = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/customers/{customer}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::show
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:69
* @route '/dashboard/customers/{customer}'
*/
show.url = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::show
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:69
* @route '/dashboard/customers/{customer}'
*/
show.get = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::show
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:69
* @route '/dashboard/customers/{customer}'
*/
show.head = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::edit
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:92
* @route '/dashboard/customers/{customer}/edit'
*/
export const edit = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/customers/{customer}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::edit
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:92
* @route '/dashboard/customers/{customer}/edit'
*/
edit.url = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::edit
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:92
* @route '/dashboard/customers/{customer}/edit'
*/
edit.get = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::edit
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:92
* @route '/dashboard/customers/{customer}/edit'
*/
edit.head = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::update
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:102
* @route '/dashboard/customers/{customer}'
*/
export const update = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/customers/{customer}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::update
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:102
* @route '/dashboard/customers/{customer}'
*/
update.url = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::update
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:102
* @route '/dashboard/customers/{customer}'
*/
update.put = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::update
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:102
* @route '/dashboard/customers/{customer}'
*/
update.patch = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::destroy
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:113
* @route '/dashboard/customers/{customer}'
*/
export const destroy = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/customers/{customer}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::destroy
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:113
* @route '/dashboard/customers/{customer}'
*/
destroy.url = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerController::destroy
* @see Modules/Customer/app/Http/Controllers/CustomerController.php:113
* @route '/dashboard/customers/{customer}'
*/
destroy.delete = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::activate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:22
* @route '/dashboard/customers/{customer}/activate'
*/
export const activate = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activate.url(args, options),
    method: 'get',
})

activate.definition = {
    methods: ["get","head"],
    url: '/dashboard/customers/{customer}/activate',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::activate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:22
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
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:22
* @route '/dashboard/customers/{customer}/activate'
*/
activate.get = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activate.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::activate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:22
* @route '/dashboard/customers/{customer}/activate'
*/
activate.head = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: activate.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::deactivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:47
* @route '/dashboard/customers/{customer}/deactivate'
*/
export const deactivate = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deactivate.url(args, options),
    method: 'get',
})

deactivate.definition = {
    methods: ["get","head"],
    url: '/dashboard/customers/{customer}/deactivate',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::deactivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:47
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
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:47
* @route '/dashboard/customers/{customer}/deactivate'
*/
deactivate.get = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deactivate.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::deactivate
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:47
* @route '/dashboard/customers/{customer}/deactivate'
*/
deactivate.head = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deactivate.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::suspend
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:73
* @route '/dashboard/customers/{customer}/suspend'
*/
export const suspend = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: suspend.url(args, options),
    method: 'get',
})

suspend.definition = {
    methods: ["get","head"],
    url: '/dashboard/customers/{customer}/suspend',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::suspend
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:73
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
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:73
* @route '/dashboard/customers/{customer}/suspend'
*/
suspend.get = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: suspend.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerStatusController::suspend
* @see Modules/Customer/app/Http/Controllers/CustomerStatusController.php:73
* @route '/dashboard/customers/{customer}/suspend'
*/
suspend.head = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: suspend.url(args, options),
    method: 'head',
})

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
* @see \Modules\Customer\Http\Controllers\CustomerSecurityController::enable2fa
* @see Modules/Customer/app/Http/Controllers/CustomerSecurityController.php:28
* @route '/dashboard/customers/{customer}/enable-2fa'
*/
export const enable2fa = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enable2fa.url(args, options),
    method: 'post',
})

enable2fa.definition = {
    methods: ["post"],
    url: '/dashboard/customers/{customer}/enable-2fa',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerSecurityController::enable2fa
* @see Modules/Customer/app/Http/Controllers/CustomerSecurityController.php:28
* @route '/dashboard/customers/{customer}/enable-2fa'
*/
enable2fa.url = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return enable2fa.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerSecurityController::enable2fa
* @see Modules/Customer/app/Http/Controllers/CustomerSecurityController.php:28
* @route '/dashboard/customers/{customer}/enable-2fa'
*/
enable2fa.post = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enable2fa.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerSecurityController::disable2fa
* @see Modules/Customer/app/Http/Controllers/CustomerSecurityController.php:41
* @route '/dashboard/customers/{customer}/disable-2fa'
*/
export const disable2fa = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: disable2fa.url(args, options),
    method: 'delete',
})

disable2fa.definition = {
    methods: ["delete"],
    url: '/dashboard/customers/{customer}/disable-2fa',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerSecurityController::disable2fa
* @see Modules/Customer/app/Http/Controllers/CustomerSecurityController.php:41
* @route '/dashboard/customers/{customer}/disable-2fa'
*/
disable2fa.url = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return disable2fa.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerSecurityController::disable2fa
* @see Modules/Customer/app/Http/Controllers/CustomerSecurityController.php:41
* @route '/dashboard/customers/{customer}/disable-2fa'
*/
disable2fa.delete = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: disable2fa.url(args, options),
    method: 'delete',
})

const customers = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    activate: Object.assign(activate, activate247610),
    deactivate: Object.assign(deactivate, deactivateEe368b),
    suspend: Object.assign(suspend, suspend938f47),
    verifyEmail: Object.assign(verifyEmail, verifyEmail),
    enable2fa: Object.assign(enable2fa, enable2fa),
    disable2fa: Object.assign(disable2fa, disable2fa),
}

export default customers