import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
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
* @see \Modules\Customer\Http\Controllers\Api\V1\Customer\DeviceTokenController::store
* @see Modules/Customer/app/Http/Controllers/Api/V1/Customer/DeviceTokenController.php:14
* @route '/api/v1/auth/device-token'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Customer\DeviceTokenController::store
* @see Modules/Customer/app/Http/Controllers/Api/V1/Customer/DeviceTokenController.php:14
* @route '/api/v1/auth/device-token'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

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

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Customer\DeviceTokenController::destroy
* @see Modules/Customer/app/Http/Controllers/Api/V1/Customer/DeviceTokenController.php:33
* @route '/api/v1/auth/device-token'
*/
const destroyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\V1\Customer\DeviceTokenController::destroy
* @see Modules/Customer/app/Http/Controllers/Api/V1/Customer/DeviceTokenController.php:33
* @route '/api/v1/auth/device-token'
*/
destroyForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const deviceToken = {
    store: Object.assign(store, store),
    destroy: Object.assign(destroy, destroy),
}

export default deviceToken