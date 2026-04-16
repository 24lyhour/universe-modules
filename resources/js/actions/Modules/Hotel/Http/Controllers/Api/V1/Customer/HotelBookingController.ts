import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../../wayfinder'
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

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelBookingController::search
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelBookingController.php:72
* @route '/api/v1/hotels/search'
*/
export const search = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/api/v1/hotels/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelBookingController::search
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelBookingController.php:72
* @route '/api/v1/hotels/search'
*/
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelBookingController::search
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelBookingController.php:72
* @route '/api/v1/hotels/search'
*/
search.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelBookingController::search
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelBookingController.php:72
* @route '/api/v1/hotels/search'
*/
search.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelBookingController::search
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelBookingController.php:72
* @route '/api/v1/hotels/search'
*/
const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelBookingController::search
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelBookingController.php:72
* @route '/api/v1/hotels/search'
*/
searchForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelBookingController::search
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelBookingController.php:72
* @route '/api/v1/hotels/search'
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

const HotelBookingController = { home, search }

export default HotelBookingController