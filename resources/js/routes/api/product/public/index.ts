import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:33
* @route '/api/v1/products'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/products',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:33
* @route '/api/v1/products'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:33
* @route '/api/v1/products'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:33
* @route '/api/v1/products'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:33
* @route '/api/v1/products'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:33
* @route '/api/v1/products'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::index
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:33
* @route '/api/v1/products'
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::types
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:190
* @route '/api/v1/product-types'
*/
export const types = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: types.url(options),
    method: 'get',
})

types.definition = {
    methods: ["get","head"],
    url: '/api/v1/product-types',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::types
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:190
* @route '/api/v1/product-types'
*/
types.url = (options?: RouteQueryOptions) => {
    return types.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::types
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:190
* @route '/api/v1/product-types'
*/
types.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: types.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::types
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:190
* @route '/api/v1/product-types'
*/
types.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: types.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::types
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:190
* @route '/api/v1/product-types'
*/
const typesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: types.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::types
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:190
* @route '/api/v1/product-types'
*/
typesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: types.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::types
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:190
* @route '/api/v1/product-types'
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::search
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:82
* @route '/api/v1/products-search'
*/
export const search = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/api/v1/products-search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::search
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:82
* @route '/api/v1/products-search'
*/
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::search
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:82
* @route '/api/v1/products-search'
*/
search.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::search
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:82
* @route '/api/v1/products-search'
*/
search.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::search
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:82
* @route '/api/v1/products-search'
*/
const searchForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::search
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:82
* @route '/api/v1/products-search'
*/
searchForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::search
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:82
* @route '/api/v1/products-search'
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

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::featured
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:106
* @route '/api/v1/products-featured'
*/
export const featured = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: featured.url(options),
    method: 'get',
})

featured.definition = {
    methods: ["get","head"],
    url: '/api/v1/products-featured',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::featured
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:106
* @route '/api/v1/products-featured'
*/
featured.url = (options?: RouteQueryOptions) => {
    return featured.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::featured
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:106
* @route '/api/v1/products-featured'
*/
featured.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: featured.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::featured
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:106
* @route '/api/v1/products-featured'
*/
featured.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: featured.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::featured
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:106
* @route '/api/v1/products-featured'
*/
const featuredForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: featured.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::featured
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:106
* @route '/api/v1/products-featured'
*/
featuredForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: featured.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::featured
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:106
* @route '/api/v1/products-featured'
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::newArrivals
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:126
* @route '/api/v1/products-new-arrivals'
*/
export const newArrivals = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: newArrivals.url(options),
    method: 'get',
})

newArrivals.definition = {
    methods: ["get","head"],
    url: '/api/v1/products-new-arrivals',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::newArrivals
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:126
* @route '/api/v1/products-new-arrivals'
*/
newArrivals.url = (options?: RouteQueryOptions) => {
    return newArrivals.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::newArrivals
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:126
* @route '/api/v1/products-new-arrivals'
*/
newArrivals.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: newArrivals.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::newArrivals
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:126
* @route '/api/v1/products-new-arrivals'
*/
newArrivals.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: newArrivals.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::newArrivals
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:126
* @route '/api/v1/products-new-arrivals'
*/
const newArrivalsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: newArrivals.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::newArrivals
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:126
* @route '/api/v1/products-new-arrivals'
*/
newArrivalsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: newArrivals.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::newArrivals
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:126
* @route '/api/v1/products-new-arrivals'
*/
newArrivalsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: newArrivals.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

newArrivals.form = newArrivalsForm

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::onSale
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:145
* @route '/api/v1/products-on-sale'
*/
export const onSale = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: onSale.url(options),
    method: 'get',
})

onSale.definition = {
    methods: ["get","head"],
    url: '/api/v1/products-on-sale',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::onSale
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:145
* @route '/api/v1/products-on-sale'
*/
onSale.url = (options?: RouteQueryOptions) => {
    return onSale.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::onSale
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:145
* @route '/api/v1/products-on-sale'
*/
onSale.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: onSale.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::onSale
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:145
* @route '/api/v1/products-on-sale'
*/
onSale.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: onSale.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::onSale
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:145
* @route '/api/v1/products-on-sale'
*/
const onSaleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: onSale.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::onSale
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:145
* @route '/api/v1/products-on-sale'
*/
onSaleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: onSale.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::onSale
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:145
* @route '/api/v1/products-on-sale'
*/
onSaleForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: onSale.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

onSale.form = onSaleForm

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:63
* @route '/api/v1/products/{identifier}'
*/
export const show = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/products/{identifier}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:63
* @route '/api/v1/products/{identifier}'
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:63
* @route '/api/v1/products/{identifier}'
*/
show.get = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:63
* @route '/api/v1/products/{identifier}'
*/
show.head = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:63
* @route '/api/v1/products/{identifier}'
*/
const showForm = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:63
* @route '/api/v1/products/{identifier}'
*/
showForm.get = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::show
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:63
* @route '/api/v1/products/{identifier}'
*/
showForm.head = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::related
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:166
* @route '/api/v1/products/{identifier}/related'
*/
export const related = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: related.url(args, options),
    method: 'get',
})

related.definition = {
    methods: ["get","head"],
    url: '/api/v1/products/{identifier}/related',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::related
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:166
* @route '/api/v1/products/{identifier}/related'
*/
related.url = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return related.definition.url
            .replace('{identifier}', parsedArgs.identifier.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::related
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:166
* @route '/api/v1/products/{identifier}/related'
*/
related.get = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: related.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::related
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:166
* @route '/api/v1/products/{identifier}/related'
*/
related.head = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: related.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::related
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:166
* @route '/api/v1/products/{identifier}/related'
*/
const relatedForm = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: related.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::related
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:166
* @route '/api/v1/products/{identifier}/related'
*/
relatedForm.get = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: related.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Api\V1\ProductPublicController::related
* @see Modules/Product/app/Http/Controllers/Api/V1/ProductPublicController.php:166
* @route '/api/v1/products/{identifier}/related'
*/
relatedForm.head = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: related.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

related.form = relatedForm

const publicMethod = {
    index: Object.assign(index, index),
    types: Object.assign(types, types),
    search: Object.assign(search, search),
    featured: Object.assign(featured, featured),
    newArrivals: Object.assign(newArrivals, newArrivals),
    onSale: Object.assign(onSale, onSale),
    show: Object.assign(show, show),
    related: Object.assign(related, related),
}

export default publicMethod