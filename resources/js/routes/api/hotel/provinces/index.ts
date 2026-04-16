import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\ProvinceController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/ProvinceController.php:15
* @route '/api/v1/provinces'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/provinces',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\ProvinceController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/ProvinceController.php:15
* @route '/api/v1/provinces'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\ProvinceController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/ProvinceController.php:15
* @route '/api/v1/provinces'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\ProvinceController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/ProvinceController.php:15
* @route '/api/v1/provinces'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\ProvinceController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/ProvinceController.php:15
* @route '/api/v1/provinces'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\ProvinceController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/ProvinceController.php:15
* @route '/api/v1/provinces'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\ProvinceController::index
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/ProvinceController.php:15
* @route '/api/v1/provinces'
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
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\ProvinceController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/ProvinceController.php:30
* @route '/api/v1/provinces/{province}'
*/
export const show = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/provinces/{province}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\ProvinceController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/ProvinceController.php:30
* @route '/api/v1/provinces/{province}'
*/
show.url = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { province: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { province: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            province: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        province: typeof args.province === 'object'
        ? args.province.uuid
        : args.province,
    }

    return show.definition.url
            .replace('{province}', parsedArgs.province.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\ProvinceController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/ProvinceController.php:30
* @route '/api/v1/provinces/{province}'
*/
show.get = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\ProvinceController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/ProvinceController.php:30
* @route '/api/v1/provinces/{province}'
*/
show.head = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\ProvinceController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/ProvinceController.php:30
* @route '/api/v1/provinces/{province}'
*/
const showForm = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\ProvinceController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/ProvinceController.php:30
* @route '/api/v1/provinces/{province}'
*/
showForm.get = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Api\V1\Customer\ProvinceController::show
* @see Modules/Hotel/app/Http/Controllers/Api/V1/Customer/ProvinceController.php:30
* @route '/api/v1/provinces/{province}'
*/
showForm.head = (args: { province: string | { uuid: string } } | [province: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const provinces = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
}

export default provinces