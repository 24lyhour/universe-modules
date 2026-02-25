import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import auth from './auth'
/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::index
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:24
* @route '/api/v1/customers'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/customers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::index
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:24
* @route '/api/v1/customers'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::index
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:24
* @route '/api/v1/customers'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::index
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:24
* @route '/api/v1/customers'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::index
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:24
* @route '/api/v1/customers'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::index
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:24
* @route '/api/v1/customers'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::index
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:24
* @route '/api/v1/customers'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::store
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:39
* @route '/api/v1/customers'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/customers',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::store
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:39
* @route '/api/v1/customers'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::store
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:39
* @route '/api/v1/customers'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::store
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:39
* @route '/api/v1/customers'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::store
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:39
* @route '/api/v1/customers'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::show
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:52
* @route '/api/v1/customers/{customer}'
*/
export const show = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/customers/{customer}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::show
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:52
* @route '/api/v1/customers/{customer}'
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
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::show
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:52
* @route '/api/v1/customers/{customer}'
*/
show.get = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::show
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:52
* @route '/api/v1/customers/{customer}'
*/
show.head = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::show
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:52
* @route '/api/v1/customers/{customer}'
*/
const showForm = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::show
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:52
* @route '/api/v1/customers/{customer}'
*/
showForm.get = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::show
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:52
* @route '/api/v1/customers/{customer}'
*/
showForm.head = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::update
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:74
* @route '/api/v1/customers/{customer}'
*/
export const update = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/customers/{customer}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::update
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:74
* @route '/api/v1/customers/{customer}'
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
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::update
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:74
* @route '/api/v1/customers/{customer}'
*/
update.put = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::update
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:74
* @route '/api/v1/customers/{customer}'
*/
update.patch = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::update
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:74
* @route '/api/v1/customers/{customer}'
*/
const updateForm = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::update
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:74
* @route '/api/v1/customers/{customer}'
*/
updateForm.put = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::update
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:74
* @route '/api/v1/customers/{customer}'
*/
updateForm.patch = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::destroy
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:87
* @route '/api/v1/customers/{customer}'
*/
export const destroy = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/customers/{customer}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::destroy
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:87
* @route '/api/v1/customers/{customer}'
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
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::destroy
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:87
* @route '/api/v1/customers/{customer}'
*/
destroy.delete = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::destroy
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:87
* @route '/api/v1/customers/{customer}'
*/
const destroyForm = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::destroy
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:87
* @route '/api/v1/customers/{customer}'
*/
destroyForm.delete = (args: { customer: number | { id: number } } | [customer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::stats
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:99
* @route '/api/v1/customers-stats'
*/
export const stats = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

stats.definition = {
    methods: ["get","head"],
    url: '/api/v1/customers-stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::stats
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:99
* @route '/api/v1/customers-stats'
*/
stats.url = (options?: RouteQueryOptions) => {
    return stats.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::stats
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:99
* @route '/api/v1/customers-stats'
*/
stats.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::stats
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:99
* @route '/api/v1/customers-stats'
*/
stats.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stats.url(options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::stats
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:99
* @route '/api/v1/customers-stats'
*/
const statsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::stats
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:99
* @route '/api/v1/customers-stats'
*/
statsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::stats
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:99
* @route '/api/v1/customers-stats'
*/
statsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: stats.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

stats.form = statsForm

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::search
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:109
* @route '/api/v1/customers-search'
*/
export const search = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/api/v1/customers-search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::search
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:109
* @route '/api/v1/customers-search'
*/
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::search
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:109
* @route '/api/v1/customers-search'
*/
search.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::search
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:109
* @route '/api/v1/customers-search'
*/
search.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::search
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:109
* @route '/api/v1/customers-search'
*/
const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::search
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:109
* @route '/api/v1/customers-search'
*/
searchForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerApiController::search
* @see Modules/Customer/app/Http/Controllers/Api/CustomerApiController.php:109
* @route '/api/v1/customers-search'
*/
searchForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

search.form = searchForm

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
* @see \Modules\Customer\Http\Controllers\Api\CustomerStatusApiController::activate
* @see Modules/Customer/app/Http/Controllers/Api/CustomerStatusApiController.php:20
* @route '/api/v1/customers/{customer}/activate'
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
* @see \Modules\Customer\Http\Controllers\Api\CustomerStatusApiController::activate
* @see Modules/Customer/app/Http/Controllers/Api/CustomerStatusApiController.php:20
* @route '/api/v1/customers/{customer}/activate'
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
* @see \Modules\Customer\Http\Controllers\Api\CustomerStatusApiController::deactivate
* @see Modules/Customer/app/Http/Controllers/Api/CustomerStatusApiController.php:33
* @route '/api/v1/customers/{customer}/deactivate'
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
* @see \Modules\Customer\Http\Controllers\Api\CustomerStatusApiController::deactivate
* @see Modules/Customer/app/Http/Controllers/Api/CustomerStatusApiController.php:33
* @route '/api/v1/customers/{customer}/deactivate'
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

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerStatusApiController::suspend
* @see Modules/Customer/app/Http/Controllers/Api/CustomerStatusApiController.php:46
* @route '/api/v1/customers/{customer}/suspend'
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
* @see \Modules\Customer\Http\Controllers\Api\CustomerStatusApiController::suspend
* @see Modules/Customer/app/Http/Controllers/Api/CustomerStatusApiController.php:46
* @route '/api/v1/customers/{customer}/suspend'
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

const customer = {
    auth: Object.assign(auth, auth),
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    stats: Object.assign(stats, stats),
    search: Object.assign(search, search),
    activate: Object.assign(activate, activate),
    deactivate: Object.assign(deactivate, deactivate),
    suspend: Object.assign(suspend, suspend),
}

export default customer