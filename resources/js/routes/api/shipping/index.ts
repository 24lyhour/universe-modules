import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::index
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:18
* @route '/api/v1/shipping-addresses'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/shipping-addresses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::index
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:18
* @route '/api/v1/shipping-addresses'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::index
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:18
* @route '/api/v1/shipping-addresses'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::index
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:18
* @route '/api/v1/shipping-addresses'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::index
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:18
* @route '/api/v1/shipping-addresses'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::index
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:18
* @route '/api/v1/shipping-addresses'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::index
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:18
* @route '/api/v1/shipping-addresses'
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
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::store
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:37
* @route '/api/v1/shipping-addresses'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/shipping-addresses',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::store
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:37
* @route '/api/v1/shipping-addresses'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::store
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:37
* @route '/api/v1/shipping-addresses'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::store
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:37
* @route '/api/v1/shipping-addresses'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::store
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:37
* @route '/api/v1/shipping-addresses'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::defaultMethod
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:152
* @route '/api/v1/shipping-addresses/default'
*/
export const defaultMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: defaultMethod.url(options),
    method: 'get',
})

defaultMethod.definition = {
    methods: ["get","head"],
    url: '/api/v1/shipping-addresses/default',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::defaultMethod
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:152
* @route '/api/v1/shipping-addresses/default'
*/
defaultMethod.url = (options?: RouteQueryOptions) => {
    return defaultMethod.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::defaultMethod
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:152
* @route '/api/v1/shipping-addresses/default'
*/
defaultMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: defaultMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::defaultMethod
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:152
* @route '/api/v1/shipping-addresses/default'
*/
defaultMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: defaultMethod.url(options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::defaultMethod
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:152
* @route '/api/v1/shipping-addresses/default'
*/
const defaultMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: defaultMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::defaultMethod
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:152
* @route '/api/v1/shipping-addresses/default'
*/
defaultMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: defaultMethod.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::defaultMethod
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:152
* @route '/api/v1/shipping-addresses/default'
*/
defaultMethodForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: defaultMethod.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

defaultMethod.form = defaultMethodForm

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::show
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:62
* @route '/api/v1/shipping-addresses/{uuid}'
*/
export const show = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/shipping-addresses/{uuid}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::show
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:62
* @route '/api/v1/shipping-addresses/{uuid}'
*/
show.url = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { uuid: args }
    }

    if (Array.isArray(args)) {
        args = {
            uuid: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        uuid: args.uuid,
    }

    return show.definition.url
            .replace('{uuid}', parsedArgs.uuid.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::show
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:62
* @route '/api/v1/shipping-addresses/{uuid}'
*/
show.get = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::show
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:62
* @route '/api/v1/shipping-addresses/{uuid}'
*/
show.head = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::show
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:62
* @route '/api/v1/shipping-addresses/{uuid}'
*/
const showForm = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::show
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:62
* @route '/api/v1/shipping-addresses/{uuid}'
*/
showForm.get = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::show
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:62
* @route '/api/v1/shipping-addresses/{uuid}'
*/
showForm.head = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::update
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:80
* @route '/api/v1/shipping-addresses/{uuid}'
*/
export const update = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/v1/shipping-addresses/{uuid}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::update
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:80
* @route '/api/v1/shipping-addresses/{uuid}'
*/
update.url = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { uuid: args }
    }

    if (Array.isArray(args)) {
        args = {
            uuid: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        uuid: args.uuid,
    }

    return update.definition.url
            .replace('{uuid}', parsedArgs.uuid.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::update
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:80
* @route '/api/v1/shipping-addresses/{uuid}'
*/
update.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::update
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:80
* @route '/api/v1/shipping-addresses/{uuid}'
*/
const updateForm = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::update
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:80
* @route '/api/v1/shipping-addresses/{uuid}'
*/
updateForm.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::destroy
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:100
* @route '/api/v1/shipping-addresses/{uuid}'
*/
export const destroy = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/shipping-addresses/{uuid}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::destroy
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:100
* @route '/api/v1/shipping-addresses/{uuid}'
*/
destroy.url = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { uuid: args }
    }

    if (Array.isArray(args)) {
        args = {
            uuid: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        uuid: args.uuid,
    }

    return destroy.definition.url
            .replace('{uuid}', parsedArgs.uuid.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::destroy
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:100
* @route '/api/v1/shipping-addresses/{uuid}'
*/
destroy.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::destroy
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:100
* @route '/api/v1/shipping-addresses/{uuid}'
*/
const destroyForm = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::destroy
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:100
* @route '/api/v1/shipping-addresses/{uuid}'
*/
destroyForm.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::setDefault
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:132
* @route '/api/v1/shipping-addresses/{uuid}/set-default'
*/
export const setDefault = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: setDefault.url(args, options),
    method: 'patch',
})

setDefault.definition = {
    methods: ["patch"],
    url: '/api/v1/shipping-addresses/{uuid}/set-default',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::setDefault
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:132
* @route '/api/v1/shipping-addresses/{uuid}/set-default'
*/
setDefault.url = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { uuid: args }
    }

    if (Array.isArray(args)) {
        args = {
            uuid: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        uuid: args.uuid,
    }

    return setDefault.definition.url
            .replace('{uuid}', parsedArgs.uuid.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::setDefault
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:132
* @route '/api/v1/shipping-addresses/{uuid}/set-default'
*/
setDefault.patch = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: setDefault.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::setDefault
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:132
* @route '/api/v1/shipping-addresses/{uuid}/set-default'
*/
const setDefaultForm = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setDefault.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::setDefault
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:132
* @route '/api/v1/shipping-addresses/{uuid}/set-default'
*/
setDefaultForm.patch = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: setDefault.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

setDefault.form = setDefaultForm

const shipping = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    default: Object.assign(defaultMethod, defaultMethod),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    setDefault: Object.assign(setDefault, setDefault),
}

export default shipping