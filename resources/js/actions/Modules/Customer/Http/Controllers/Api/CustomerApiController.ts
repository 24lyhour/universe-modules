import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
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

const CustomerApiController = { index, store, show, update, destroy, stats, search }

export default CustomerApiController