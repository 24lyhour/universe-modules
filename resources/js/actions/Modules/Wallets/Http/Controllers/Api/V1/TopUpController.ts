import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\TopUpController::index
* @see Modules/Wallets/app/Http/Controllers/Api/V1/TopUpController.php:24
* @route '/api/v1/customer/wallet/topups'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/wallet/topups',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\TopUpController::index
* @see Modules/Wallets/app/Http/Controllers/Api/V1/TopUpController.php:24
* @route '/api/v1/customer/wallet/topups'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\TopUpController::index
* @see Modules/Wallets/app/Http/Controllers/Api/V1/TopUpController.php:24
* @route '/api/v1/customer/wallet/topups'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\TopUpController::index
* @see Modules/Wallets/app/Http/Controllers/Api/V1/TopUpController.php:24
* @route '/api/v1/customer/wallet/topups'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\TopUpController::index
* @see Modules/Wallets/app/Http/Controllers/Api/V1/TopUpController.php:24
* @route '/api/v1/customer/wallet/topups'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\TopUpController::index
* @see Modules/Wallets/app/Http/Controllers/Api/V1/TopUpController.php:24
* @route '/api/v1/customer/wallet/topups'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\TopUpController::index
* @see Modules/Wallets/app/Http/Controllers/Api/V1/TopUpController.php:24
* @route '/api/v1/customer/wallet/topups'
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
* @see \Modules\Wallets\Http\Controllers\Api\V1\TopUpController::store
* @see Modules/Wallets/app/Http/Controllers/Api/V1/TopUpController.php:56
* @route '/api/v1/customer/wallet/topups'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/customer/wallet/topups',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\TopUpController::store
* @see Modules/Wallets/app/Http/Controllers/Api/V1/TopUpController.php:56
* @route '/api/v1/customer/wallet/topups'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\TopUpController::store
* @see Modules/Wallets/app/Http/Controllers/Api/V1/TopUpController.php:56
* @route '/api/v1/customer/wallet/topups'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\TopUpController::store
* @see Modules/Wallets/app/Http/Controllers/Api/V1/TopUpController.php:56
* @route '/api/v1/customer/wallet/topups'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\TopUpController::store
* @see Modules/Wallets/app/Http/Controllers/Api/V1/TopUpController.php:56
* @route '/api/v1/customer/wallet/topups'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\TopUpController::show
* @see Modules/Wallets/app/Http/Controllers/Api/V1/TopUpController.php:78
* @route '/api/v1/customer/wallet/topups/{reference}'
*/
export const show = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/wallet/topups/{reference}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\TopUpController::show
* @see Modules/Wallets/app/Http/Controllers/Api/V1/TopUpController.php:78
* @route '/api/v1/customer/wallet/topups/{reference}'
*/
show.url = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { reference: args }
    }

    if (Array.isArray(args)) {
        args = {
            reference: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        reference: args.reference,
    }

    return show.definition.url
            .replace('{reference}', parsedArgs.reference.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\TopUpController::show
* @see Modules/Wallets/app/Http/Controllers/Api/V1/TopUpController.php:78
* @route '/api/v1/customer/wallet/topups/{reference}'
*/
show.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\TopUpController::show
* @see Modules/Wallets/app/Http/Controllers/Api/V1/TopUpController.php:78
* @route '/api/v1/customer/wallet/topups/{reference}'
*/
show.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\TopUpController::show
* @see Modules/Wallets/app/Http/Controllers/Api/V1/TopUpController.php:78
* @route '/api/v1/customer/wallet/topups/{reference}'
*/
const showForm = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\TopUpController::show
* @see Modules/Wallets/app/Http/Controllers/Api/V1/TopUpController.php:78
* @route '/api/v1/customer/wallet/topups/{reference}'
*/
showForm.get = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Api\V1\TopUpController::show
* @see Modules/Wallets/app/Http/Controllers/Api/V1/TopUpController.php:78
* @route '/api/v1/customer/wallet/topups/{reference}'
*/
showForm.head = (args: { reference: string | number } | [reference: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const TopUpController = { index, store, show }

export default TopUpController