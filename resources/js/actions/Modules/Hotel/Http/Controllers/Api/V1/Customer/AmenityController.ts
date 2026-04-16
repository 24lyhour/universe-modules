import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:15
* @route '/api/v1/hotels/amenities'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/hotels/amenities',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:15
* @route '/api/v1/hotels/amenities'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:15
* @route '/api/v1/hotels/amenities'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:15
* @route '/api/v1/hotels/amenities'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:15
* @route '/api/v1/hotels/amenities'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:15
* @route '/api/v1/hotels/amenities'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:15
* @route '/api/v1/hotels/amenities'
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
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:35
* @route '/api/v1/hotels/amenities/{amenity}'
*/
export const show = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/hotels/amenities/{amenity}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:35
* @route '/api/v1/hotels/amenities/{amenity}'
*/
show.url = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { amenity: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { amenity: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            amenity: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        amenity: typeof args.amenity === 'object'
        ? args.amenity.uuid
        : args.amenity,
    }

    return show.definition.url
            .replace('{amenity}', parsedArgs.amenity.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:35
* @route '/api/v1/hotels/amenities/{amenity}'
*/
show.get = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:35
* @route '/api/v1/hotels/amenities/{amenity}'
*/
show.head = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:35
* @route '/api/v1/hotels/amenities/{amenity}'
*/
const showForm = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:35
* @route '/api/v1/hotels/amenities/{amenity}'
*/
showForm.get = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:35
* @route '/api/v1/hotels/amenities/{amenity}'
*/
showForm.head = (args: { amenity: string | number | { uuid: string | number } } | [amenity: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const AmenityController = { index, show }

export default AmenityController