import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SpecialOffer\SpecialOfferPublicController::index
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SpecialOffer/SpecialOfferPublicController.php:16
* @route '/api/v1/customer/special-offers'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/special-offers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SpecialOffer\SpecialOfferPublicController::index
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SpecialOffer/SpecialOfferPublicController.php:16
* @route '/api/v1/customer/special-offers'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SpecialOffer\SpecialOfferPublicController::index
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SpecialOffer/SpecialOfferPublicController.php:16
* @route '/api/v1/customer/special-offers'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SpecialOffer\SpecialOfferPublicController::index
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SpecialOffer/SpecialOfferPublicController.php:16
* @route '/api/v1/customer/special-offers'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SpecialOffer\SpecialOfferPublicController::show
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SpecialOffer/SpecialOfferPublicController.php:30
* @route '/api/v1/customer/special-offers/{identifier}'
*/
export const show = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/special-offers/{identifier}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SpecialOffer\SpecialOfferPublicController::show
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SpecialOffer/SpecialOfferPublicController.php:30
* @route '/api/v1/customer/special-offers/{identifier}'
*/
show.url = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { identifier: args }
    }

    if (Array.isArray(args)) {
        args = {
            identifier: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        identifier: args.identifier,
    }

    return show.definition.url
            .replace('{identifier}', parsedArgs.identifier.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SpecialOffer\SpecialOfferPublicController::show
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SpecialOffer/SpecialOfferPublicController.php:30
* @route '/api/v1/customer/special-offers/{identifier}'
*/
show.get = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SpecialOffer\SpecialOfferPublicController::show
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SpecialOffer/SpecialOfferPublicController.php:30
* @route '/api/v1/customer/special-offers/{identifier}'
*/
show.head = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

const specialOffers = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
}

export default specialOffers