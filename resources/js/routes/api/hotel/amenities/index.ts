import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:15
* @route '/api/v1/amenities'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/amenities',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:15
* @route '/api/v1/amenities'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:15
* @route '/api/v1/amenities'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:15
* @route '/api/v1/amenities'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:15
* @route '/api/v1/amenities'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:15
* @route '/api/v1/amenities'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:15
* @route '/api/v1/amenities'
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
* @route '/api/v1/amenities/{amenity}'
*/
export const show = (args: { amenity: string | { uuid: string } } | [amenity: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/amenities/{amenity}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:35
* @route '/api/v1/amenities/{amenity}'
*/
show.url = (args: { amenity: string | { uuid: string } } | [amenity: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
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
* @route '/api/v1/amenities/{amenity}'
*/
show.get = (args: { amenity: string | { uuid: string } } | [amenity: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:35
* @route '/api/v1/amenities/{amenity}'
*/
show.head = (args: { amenity: string | { uuid: string } } | [amenity: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:35
* @route '/api/v1/amenities/{amenity}'
*/
const showForm = (args: { amenity: string | { uuid: string } } | [amenity: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:35
* @route '/api/v1/amenities/{amenity}'
*/
showForm.get = (args: { amenity: string | { uuid: string } } | [amenity: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\AmenityController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/AmenityController.php:35
* @route '/api/v1/amenities/{amenity}'
*/
showForm.head = (args: { amenity: string | { uuid: string } } | [amenity: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const amenities = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
}

export default amenities