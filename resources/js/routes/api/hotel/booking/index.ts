import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelBookingController::home
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelBookingController.php:19
* @route '/api/v1/hotels/booking-home'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/api/v1/hotels/booking-home',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelBookingController::home
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelBookingController.php:19
* @route '/api/v1/hotels/booking-home'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelBookingController::home
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelBookingController.php:19
* @route '/api/v1/hotels/booking-home'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelBookingController::home
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelBookingController.php:19
* @route '/api/v1/hotels/booking-home'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelBookingController::home
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelBookingController.php:19
* @route '/api/v1/hotels/booking-home'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelBookingController::home
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelBookingController.php:19
* @route '/api/v1/hotels/booking-home'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelBookingController::home
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelBookingController.php:19
* @route '/api/v1/hotels/booking-home'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm

const booking = {
    home: Object.assign(home, home),
}

export default booking