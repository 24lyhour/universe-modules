import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
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
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::getDefault
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:152
* @route '/api/v1/shipping-addresses/default'
*/
export const getDefault = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDefault.url(options),
    method: 'get',
})

getDefault.definition = {
    methods: ["get","head"],
    url: '/api/v1/shipping-addresses/default',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::getDefault
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:152
* @route '/api/v1/shipping-addresses/default'
*/
getDefault.url = (options?: RouteQueryOptions) => {
    return getDefault.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::getDefault
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:152
* @route '/api/v1/shipping-addresses/default'
*/
getDefault.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDefault.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Shipping\CustomerShippingController::getDefault
* @see Modules/Customer/app/Http/Controllers/Api/V1/Shipping/CustomerShippingController.php:152
* @route '/api/v1/shipping-addresses/default'
*/
getDefault.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getDefault.url(options),
    method: 'head',
})

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

const CustomerShippingController = { index, store, getDefault, show, update, destroy, setDefault }

export default CustomerShippingController