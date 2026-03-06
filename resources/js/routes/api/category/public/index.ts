import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::index
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:23
* @route '/api/v1/categories'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::index
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:23
* @route '/api/v1/categories'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::index
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:23
* @route '/api/v1/categories'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::index
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:23
* @route '/api/v1/categories'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::index
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:23
* @route '/api/v1/categories'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::index
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:23
* @route '/api/v1/categories'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::index
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:23
* @route '/api/v1/categories'
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
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::featured
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:123
* @route '/api/v1/categories-featured'
*/
export const featured = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: featured.url(options),
    method: 'get',
})

featured.definition = {
    methods: ["get","head"],
    url: '/api/v1/categories-featured',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::featured
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:123
* @route '/api/v1/categories-featured'
*/
featured.url = (options?: RouteQueryOptions) => {
    return featured.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::featured
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:123
* @route '/api/v1/categories-featured'
*/
featured.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: featured.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::featured
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:123
* @route '/api/v1/categories-featured'
*/
featured.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: featured.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::featured
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:123
* @route '/api/v1/categories-featured'
*/
const featuredForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: featured.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::featured
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:123
* @route '/api/v1/categories-featured'
*/
featuredForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: featured.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::featured
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:123
* @route '/api/v1/categories-featured'
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
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:55
* @route '/api/v1/categories/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/categories/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:55
* @route '/api/v1/categories/{id}'
*/
show.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return show.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:55
* @route '/api/v1/categories/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:55
* @route '/api/v1/categories/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:55
* @route '/api/v1/categories/{id}'
*/
const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:55
* @route '/api/v1/categories/{id}'
*/
showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::show
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:55
* @route '/api/v1/categories/{id}'
*/
showForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::products
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:90
* @route '/api/v1/categories/{identifier}/products'
*/
export const products = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: products.url(args, options),
    method: 'get',
})

products.definition = {
    methods: ["get","head"],
    url: '/api/v1/categories/{identifier}/products',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::products
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:90
* @route '/api/v1/categories/{identifier}/products'
*/
products.url = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return products.definition.url
            .replace('{identifier}', parsedArgs.identifier.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::products
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:90
* @route '/api/v1/categories/{identifier}/products'
*/
products.get = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: products.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::products
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:90
* @route '/api/v1/categories/{identifier}/products'
*/
products.head = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: products.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::products
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:90
* @route '/api/v1/categories/{identifier}/products'
*/
const productsForm = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: products.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::products
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:90
* @route '/api/v1/categories/{identifier}/products'
*/
productsForm.get = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: products.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Api\V1\CategoryPublicController::products
* @see Modules/Menu/app/Http/Controllers/Api/V1/CategoryPublicController.php:90
* @route '/api/v1/categories/{identifier}/products'
*/
productsForm.head = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
    index: Object.assign(index, index),
    featured: Object.assign(featured, featured),
    show: Object.assign(show, show),
    products: Object.assign(products, products),
}

export default publicMethod