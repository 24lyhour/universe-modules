import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../../../wayfinder'
/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SliderShow\SliderShowPublicController::index
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SliderShow/SliderShowPublicController.php:13
* @route '/api/v1/customer/slider-show'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/slider-show',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SliderShow\SliderShowPublicController::index
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SliderShow/SliderShowPublicController.php:13
* @route '/api/v1/customer/slider-show'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SliderShow\SliderShowPublicController::index
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SliderShow/SliderShowPublicController.php:13
* @route '/api/v1/customer/slider-show'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SliderShow\SliderShowPublicController::index
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SliderShow/SliderShowPublicController.php:13
* @route '/api/v1/customer/slider-show'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SliderShow\SliderShowPublicController::index
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SliderShow/SliderShowPublicController.php:13
* @route '/api/v1/customer/slider-show'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SliderShow\SliderShowPublicController::index
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SliderShow/SliderShowPublicController.php:13
* @route '/api/v1/customer/slider-show'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SliderShow\SliderShowPublicController::index
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SliderShow/SliderShowPublicController.php:13
* @route '/api/v1/customer/slider-show'
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
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SliderShow\SliderShowPublicController::show
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SliderShow/SliderShowPublicController.php:24
* @route '/api/v1/customer/slider-show/{identifier}'
*/
export const show = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/slider-show/{identifier}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SliderShow\SliderShowPublicController::show
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SliderShow/SliderShowPublicController.php:24
* @route '/api/v1/customer/slider-show/{identifier}'
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
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SliderShow\SliderShowPublicController::show
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SliderShow/SliderShowPublicController.php:24
* @route '/api/v1/customer/slider-show/{identifier}'
*/
show.get = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SliderShow\SliderShowPublicController::show
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SliderShow/SliderShowPublicController.php:24
* @route '/api/v1/customer/slider-show/{identifier}'
*/
show.head = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SliderShow\SliderShowPublicController::show
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SliderShow/SliderShowPublicController.php:24
* @route '/api/v1/customer/slider-show/{identifier}'
*/
const showForm = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SliderShow\SliderShowPublicController::show
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SliderShow/SliderShowPublicController.php:24
* @route '/api/v1/customer/slider-show/{identifier}'
*/
showForm.get = (args: { identifier: string | number } | [identifier: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Blog\Http\Controllers\Api\V1\Customer\SliderShow\SliderShowPublicController::show
* @see Modules/Blog/app/Http/Controllers/Api/V1/Customer/SliderShow/SliderShowPublicController.php:24
* @route '/api/v1/customer/slider-show/{identifier}'
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

const SliderShowPublicController = { index, show }

export default SliderShowPublicController