import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Customer\DeviceTokenController::store
* @see Modules/Customer/app/Http/Controllers/Api/V1/Customer/DeviceTokenController.php:14
* @route '/api/v1/auth/device-token'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/auth/device-token',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Customer\DeviceTokenController::store
* @see Modules/Customer/app/Http/Controllers/Api/V1/Customer/DeviceTokenController.php:14
* @route '/api/v1/auth/device-token'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Customer\DeviceTokenController::store
* @see Modules/Customer/app/Http/Controllers/Api/V1/Customer/DeviceTokenController.php:14
* @route '/api/v1/auth/device-token'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Customer\DeviceTokenController::destroy
* @see Modules/Customer/app/Http/Controllers/Api/V1/Customer/DeviceTokenController.php:33
* @route '/api/v1/auth/device-token'
*/
export const destroy = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/auth/device-token',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Customer\DeviceTokenController::destroy
* @see Modules/Customer/app/Http/Controllers/Api/V1/Customer/DeviceTokenController.php:33
* @route '/api/v1/auth/device-token'
*/
destroy.url = (options?: RouteQueryOptions) => {
    return destroy.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Customer\DeviceTokenController::destroy
* @see Modules/Customer/app/Http/Controllers/Api/V1/Customer/DeviceTokenController.php:33
* @route '/api/v1/auth/device-token'
*/
destroy.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(options),
    method: 'delete',
})

const DeviceTokenController = { store, destroy }

export default DeviceTokenController