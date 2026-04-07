import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../../../wayfinder'
/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::types
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:42
* @route '/api/v1/outlet-types'
*/
export const types = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: types.url(options),
    method: 'get',
})

types.definition = {
    methods: ["get","head"],
    url: '/api/v1/outlet-types',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::types
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:42
* @route '/api/v1/outlet-types'
*/
types.url = (options?: RouteQueryOptions) => {
    return types.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::types
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:42
* @route '/api/v1/outlet-types'
*/
types.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: types.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::types
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:42
* @route '/api/v1/outlet-types'
*/
types.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: types.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::featured
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:64
* @route '/api/v1/outlets-featured'
*/
export const featured = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: featured.url(options),
    method: 'get',
})

featured.definition = {
    methods: ["get","head"],
    url: '/api/v1/outlets-featured',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::featured
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:64
* @route '/api/v1/outlets-featured'
*/
featured.url = (options?: RouteQueryOptions) => {
    return featured.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::featured
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:64
* @route '/api/v1/outlets-featured'
*/
featured.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: featured.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::featured
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:64
* @route '/api/v1/outlets-featured'
*/
featured.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: featured.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:30
* @route '/api/v1/outlets/{uuid}'
*/
export const show = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/outlets/{uuid}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:30
* @route '/api/v1/outlets/{uuid}'
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:30
* @route '/api/v1/outlets/{uuid}'
*/
show.get = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:30
* @route '/api/v1/outlets/{uuid}'
*/
show.head = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::products
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:78
* @route '/api/v1/outlets/{uuid}/products'
*/
export const products = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: products.url(args, options),
    method: 'get',
})

products.definition = {
    methods: ["get","head"],
    url: '/api/v1/outlets/{uuid}/products',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::products
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:78
* @route '/api/v1/outlets/{uuid}/products'
*/
products.url = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return products.definition.url
            .replace('{uuid}', parsedArgs.uuid.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::products
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:78
* @route '/api/v1/outlets/{uuid}/products'
*/
products.get = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: products.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::products
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:78
* @route '/api/v1/outlets/{uuid}/products'
*/
products.head = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: products.url(args, options),
    method: 'head',
})

const OutletPublicController = { types, featured, show, products }

export default OutletPublicController