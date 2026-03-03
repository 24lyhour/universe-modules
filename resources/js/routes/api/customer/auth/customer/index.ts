import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::update
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:60
* @route '/api/v1/auth/customer'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/api/v1/auth/customer',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::update
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:60
* @route '/api/v1/auth/customer'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::update
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:60
* @route '/api/v1/auth/customer'
*/
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

const customer = {
    update: Object.assign(update, update),
}

export default customer