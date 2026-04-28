import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../wayfinder'
/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:26
* @route '/api/v1/hotels'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/hotels',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:26
* @route '/api/v1/hotels'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:26
* @route '/api/v1/hotels'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:26
* @route '/api/v1/hotels'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:26
* @route '/api/v1/hotels'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:26
* @route '/api/v1/hotels'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:26
* @route '/api/v1/hotels'
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
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::featured
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:152
* @route '/api/v1/hotels/featured'
*/
export const featured = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: featured.url(options),
    method: 'get',
})

featured.definition = {
    methods: ["get","head"],
    url: '/api/v1/hotels/featured',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::featured
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:152
* @route '/api/v1/hotels/featured'
*/
featured.url = (options?: RouteQueryOptions) => {
    return featured.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::featured
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:152
* @route '/api/v1/hotels/featured'
*/
featured.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: featured.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::featured
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:152
* @route '/api/v1/hotels/featured'
*/
featured.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: featured.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::featured
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:152
* @route '/api/v1/hotels/featured'
*/
const featuredForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: featured.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::featured
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:152
* @route '/api/v1/hotels/featured'
*/
featuredForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: featured.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::featured
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:152
* @route '/api/v1/hotels/featured'
*/
featuredForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: featured.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

featured.form = featuredForm

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:50
* @route '/api/v1/hotels/{hotel}'
*/
export const show = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/hotels/{hotel}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:50
* @route '/api/v1/hotels/{hotel}'
*/
show.url = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hotel: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { hotel: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: typeof args.hotel === 'object'
        ? args.hotel.uuid
        : args.hotel,
    }

    return show.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:50
* @route '/api/v1/hotels/{hotel}'
*/
show.get = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:50
* @route '/api/v1/hotels/{hotel}'
*/
show.head = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:50
* @route '/api/v1/hotels/{hotel}'
*/
const showForm = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:50
* @route '/api/v1/hotels/{hotel}'
*/
showForm.get = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:50
* @route '/api/v1/hotels/{hotel}'
*/
showForm.head = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::rooms
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:68
* @route '/api/v1/hotels/{hotel}/rooms'
*/
export const rooms = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rooms.url(args, options),
    method: 'get',
})

rooms.definition = {
    methods: ["get","head"],
    url: '/api/v1/hotels/{hotel}/rooms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::rooms
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:68
* @route '/api/v1/hotels/{hotel}/rooms'
*/
rooms.url = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hotel: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { hotel: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: typeof args.hotel === 'object'
        ? args.hotel.uuid
        : args.hotel,
    }

    return rooms.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::rooms
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:68
* @route '/api/v1/hotels/{hotel}/rooms'
*/
rooms.get = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rooms.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::rooms
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:68
* @route '/api/v1/hotels/{hotel}/rooms'
*/
rooms.head = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: rooms.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::rooms
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:68
* @route '/api/v1/hotels/{hotel}/rooms'
*/
const roomsForm = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rooms.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::rooms
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:68
* @route '/api/v1/hotels/{hotel}/rooms'
*/
roomsForm.get = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rooms.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::rooms
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:68
* @route '/api/v1/hotels/{hotel}/rooms'
*/
roomsForm.head = (args: { hotel: string | number | { uuid: string | number } } | [hotel: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rooms.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

rooms.form = roomsForm

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::categories
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:84
* @route '/api/v1/hotels/categories'
*/
export const categories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categories.url(options),
    method: 'get',
})

categories.definition = {
    methods: ["get","head"],
    url: '/api/v1/hotels/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::categories
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:84
* @route '/api/v1/hotels/categories'
*/
categories.url = (options?: RouteQueryOptions) => {
    return categories.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::categories
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:84
* @route '/api/v1/hotels/categories'
*/
categories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categories.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::categories
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:84
* @route '/api/v1/hotels/categories'
*/
categories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categories.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::categories
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:84
* @route '/api/v1/hotels/categories'
*/
const categoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::categories
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:84
* @route '/api/v1/hotels/categories'
*/
categoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::categories
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:84
* @route '/api/v1/hotels/categories'
*/
categoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

categories.form = categoriesForm

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::cities
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:169
* @route '/api/v1/hotels/cities'
*/
export const cities = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cities.url(options),
    method: 'get',
})

cities.definition = {
    methods: ["get","head"],
    url: '/api/v1/hotels/cities',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::cities
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:169
* @route '/api/v1/hotels/cities'
*/
cities.url = (options?: RouteQueryOptions) => {
    return cities.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::cities
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:169
* @route '/api/v1/hotels/cities'
*/
cities.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cities.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::cities
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:169
* @route '/api/v1/hotels/cities'
*/
cities.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cities.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::cities
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:169
* @route '/api/v1/hotels/cities'
*/
const citiesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cities.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::cities
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:169
* @route '/api/v1/hotels/cities'
*/
citiesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cities.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\HotelApiController::cities
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/HotelApiController.php:169
* @route '/api/v1/hotels/cities'
*/
citiesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cities.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

cities.form = citiesForm

const HotelApiController = { index, featured, show, rooms, categories, cities }

export default HotelApiController