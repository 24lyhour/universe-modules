import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Payment\Http\Controllers\PaymentController::index
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:13
* @route '/api/v1/payments'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/payments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::index
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:13
* @route '/api/v1/payments'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::index
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:13
* @route '/api/v1/payments'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::index
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:13
* @route '/api/v1/payments'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::index
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:13
* @route '/api/v1/payments'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::index
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:13
* @route '/api/v1/payments'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::index
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:13
* @route '/api/v1/payments'
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
* @see \Modules\Payment\Http\Controllers\PaymentController::store
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:29
* @route '/api/v1/payments'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/payments',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::store
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:29
* @route '/api/v1/payments'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::store
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:29
* @route '/api/v1/payments'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::store
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:29
* @route '/api/v1/payments'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::store
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:29
* @route '/api/v1/payments'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::show
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:34
* @route '/api/v1/payments/{payment}'
*/
export const show = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/payments/{payment}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::show
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:34
* @route '/api/v1/payments/{payment}'
*/
show.url = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { payment: args }
    }

    if (Array.isArray(args)) {
        args = {
            payment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        payment: args.payment,
    }

    return show.definition.url
            .replace('{payment}', parsedArgs.payment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::show
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:34
* @route '/api/v1/payments/{payment}'
*/
show.get = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::show
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:34
* @route '/api/v1/payments/{payment}'
*/
show.head = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::show
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:34
* @route '/api/v1/payments/{payment}'
*/
const showForm = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::show
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:34
* @route '/api/v1/payments/{payment}'
*/
showForm.get = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::show
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:34
* @route '/api/v1/payments/{payment}'
*/
showForm.head = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Payment\Http\Controllers\PaymentController::update
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:50
* @route '/api/v1/payments/{payment}'
*/
export const update = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/payments/{payment}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::update
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:50
* @route '/api/v1/payments/{payment}'
*/
update.url = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { payment: args }
    }

    if (Array.isArray(args)) {
        args = {
            payment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        payment: args.payment,
    }

    return update.definition.url
            .replace('{payment}', parsedArgs.payment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::update
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:50
* @route '/api/v1/payments/{payment}'
*/
update.put = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::update
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:50
* @route '/api/v1/payments/{payment}'
*/
update.patch = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::update
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:50
* @route '/api/v1/payments/{payment}'
*/
const updateForm = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::update
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:50
* @route '/api/v1/payments/{payment}'
*/
updateForm.put = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::update
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:50
* @route '/api/v1/payments/{payment}'
*/
updateForm.patch = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Payment\Http\Controllers\PaymentController::destroy
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:55
* @route '/api/v1/payments/{payment}'
*/
export const destroy = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/payments/{payment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::destroy
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:55
* @route '/api/v1/payments/{payment}'
*/
destroy.url = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { payment: args }
    }

    if (Array.isArray(args)) {
        args = {
            payment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        payment: args.payment,
    }

    return destroy.definition.url
            .replace('{payment}', parsedArgs.payment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::destroy
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:55
* @route '/api/v1/payments/{payment}'
*/
destroy.delete = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::destroy
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:55
* @route '/api/v1/payments/{payment}'
*/
const destroyForm = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Payment\Http\Controllers\PaymentController::destroy
* @see Modules/Payment/app/Http/Controllers/PaymentController.php:55
* @route '/api/v1/payments/{payment}'
*/
destroyForm.delete = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const payment = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default payment