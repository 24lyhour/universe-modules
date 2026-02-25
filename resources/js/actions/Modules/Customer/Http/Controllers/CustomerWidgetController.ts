import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::getData
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:36
* @route '/dashboard/customers/widget/data'
*/
export const getData = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getData.url(options),
    method: 'get',
})

getData.definition = {
    methods: ["get","head"],
    url: '/dashboard/customers/widget/data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::getData
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:36
* @route '/dashboard/customers/widget/data'
*/
getData.url = (options?: RouteQueryOptions) => {
    return getData.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::getData
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:36
* @route '/dashboard/customers/widget/data'
*/
getData.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getData.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::getData
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:36
* @route '/dashboard/customers/widget/data'
*/
getData.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getData.url(options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::getData
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:36
* @route '/dashboard/customers/widget/data'
*/
const getDataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getData.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::getData
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:36
* @route '/dashboard/customers/widget/data'
*/
getDataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getData.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::getData
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:36
* @route '/dashboard/customers/widget/data'
*/
getDataForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getData.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getData.form = getDataForm

/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::metrics
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:48
* @route '/dashboard/customers/widget/metrics'
*/
export const metrics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: metrics.url(options),
    method: 'get',
})

metrics.definition = {
    methods: ["get","head"],
    url: '/dashboard/customers/widget/metrics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::metrics
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:48
* @route '/dashboard/customers/widget/metrics'
*/
metrics.url = (options?: RouteQueryOptions) => {
    return metrics.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::metrics
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:48
* @route '/dashboard/customers/widget/metrics'
*/
metrics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: metrics.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::metrics
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:48
* @route '/dashboard/customers/widget/metrics'
*/
metrics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: metrics.url(options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::metrics
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:48
* @route '/dashboard/customers/widget/metrics'
*/
const metricsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: metrics.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::metrics
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:48
* @route '/dashboard/customers/widget/metrics'
*/
metricsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: metrics.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::metrics
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:48
* @route '/dashboard/customers/widget/metrics'
*/
metricsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: metrics.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

metrics.form = metricsForm

/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::growth
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:60
* @route '/dashboard/customers/widget/growth'
*/
export const growth = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: growth.url(options),
    method: 'get',
})

growth.definition = {
    methods: ["get","head"],
    url: '/dashboard/customers/widget/growth',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::growth
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:60
* @route '/dashboard/customers/widget/growth'
*/
growth.url = (options?: RouteQueryOptions) => {
    return growth.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::growth
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:60
* @route '/dashboard/customers/widget/growth'
*/
growth.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: growth.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::growth
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:60
* @route '/dashboard/customers/widget/growth'
*/
growth.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: growth.url(options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::growth
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:60
* @route '/dashboard/customers/widget/growth'
*/
const growthForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: growth.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::growth
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:60
* @route '/dashboard/customers/widget/growth'
*/
growthForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: growth.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\CustomerWidgetController::growth
* @see Modules/Customer/app/Http/Controllers/CustomerWidgetController.php:60
* @route '/dashboard/customers/widget/growth'
*/
growthForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: growth.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

growth.form = growthForm

const CustomerWidgetController = { getData, metrics, growth }

export default CustomerWidgetController