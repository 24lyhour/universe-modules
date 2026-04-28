import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::types
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:56
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
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:56
* @route '/api/v1/outlet-types'
*/
types.url = (options?: RouteQueryOptions) => {
    return types.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::types
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:56
* @route '/api/v1/outlet-types'
*/
types.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: types.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::types
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:56
* @route '/api/v1/outlet-types'
*/
types.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: types.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::types
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:56
* @route '/api/v1/outlet-types'
*/
const typesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: types.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::types
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:56
* @route '/api/v1/outlet-types'
*/
typesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: types.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::types
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:56
* @route '/api/v1/outlet-types'
*/
typesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: types.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

types.form = typesForm

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::featured
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:78
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
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:78
* @route '/api/v1/outlets-featured'
*/
featured.url = (options?: RouteQueryOptions) => {
    return featured.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::featured
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:78
* @route '/api/v1/outlets-featured'
*/
featured.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: featured.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::featured
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:78
* @route '/api/v1/outlets-featured'
*/
featured.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: featured.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::featured
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:78
* @route '/api/v1/outlets-featured'
*/
const featuredForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: featured.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::featured
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:78
* @route '/api/v1/outlets-featured'
*/
featuredForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: featured.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::featured
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:78
* @route '/api/v1/outlets-featured'
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:32
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
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:32
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
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:32
* @route '/api/v1/outlets/{uuid}'
*/
show.get = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:32
* @route '/api/v1/outlets/{uuid}'
*/
show.head = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:32
* @route '/api/v1/outlets/{uuid}'
*/
const showForm = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:32
* @route '/api/v1/outlets/{uuid}'
*/
showForm.get = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:32
* @route '/api/v1/outlets/{uuid}'
*/
showForm.head = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::products
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:92
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
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:92
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
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:92
* @route '/api/v1/outlets/{uuid}/products'
*/
products.get = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: products.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::products
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:92
* @route '/api/v1/outlets/{uuid}/products'
*/
products.head = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: products.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::products
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:92
* @route '/api/v1/outlets/{uuid}/products'
*/
const productsForm = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: products.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::products
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:92
* @route '/api/v1/outlets/{uuid}/products'
*/
productsForm.get = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: products.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletPublicController::products
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletPublicController.php:92
* @route '/api/v1/outlets/{uuid}/products'
*/
productsForm.head = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: products.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

products.form = productsForm

const publicMethod = {
    types: Object.assign(types, types),
    featured: Object.assign(featured, featured),
    show: Object.assign(show, show),
    products: Object.assign(products, products),
}

export default publicMethod