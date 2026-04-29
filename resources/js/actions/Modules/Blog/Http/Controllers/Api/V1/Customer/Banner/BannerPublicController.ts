import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../../wayfinder'
/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\Banner\BannerPublicController::index
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/Banner/BannerPublicController.php:17
* @route '/api/v1/customer/banners'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/banners',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\Banner\BannerPublicController::index
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/Banner/BannerPublicController.php:17
* @route '/api/v1/customer/banners'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\Banner\BannerPublicController::index
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/Banner/BannerPublicController.php:17
* @route '/api/v1/customer/banners'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\Banner\BannerPublicController::index
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/Banner/BannerPublicController.php:17
* @route '/api/v1/customer/banners'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\Banner\BannerPublicController::index
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/Banner/BannerPublicController.php:17
* @route '/api/v1/customer/banners'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\Banner\BannerPublicController::index
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/Banner/BannerPublicController.php:17
* @route '/api/v1/customer/banners'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\Banner\BannerPublicController::index
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/Banner/BannerPublicController.php:17
* @route '/api/v1/customer/banners'
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
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\Banner\BannerPublicController::show
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/Banner/BannerPublicController.php:32
* @route '/api/v1/customer/banners/{identifier}'
*/
export const show = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/banners/{identifier}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\Banner\BannerPublicController::show
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/Banner/BannerPublicController.php:32
* @route '/api/v1/customer/banners/{identifier}'
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
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\Banner\BannerPublicController::show
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/Banner/BannerPublicController.php:32
* @route '/api/v1/customer/banners/{identifier}'
*/
show.get = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\Banner\BannerPublicController::show
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/Banner/BannerPublicController.php:32
* @route '/api/v1/customer/banners/{identifier}'
*/
show.head = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\Banner\BannerPublicController::show
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/Banner/BannerPublicController.php:32
* @route '/api/v1/customer/banners/{identifier}'
*/
const showForm = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\Banner\BannerPublicController::show
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/Banner/BannerPublicController.php:32
* @route '/api/v1/customer/banners/{identifier}'
*/
showForm.get = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\Banner\BannerPublicController::show
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/Banner/BannerPublicController.php:32
* @route '/api/v1/customer/banners/{identifier}'
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

const BannerPublicController = { index, show }

export default BannerPublicController