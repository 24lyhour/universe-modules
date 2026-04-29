import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
import auth from './auth'
import outlets from './outlets'
import hotels from './hotels'
/**
* @see routes/Api/Tenant/V1.php:69
* @route '/api/tenant/v1/me'
*/
export const me = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: me.url(options),
    method: 'get',
})

me.definition = {
    methods: ["get","head"],
    url: '/api/tenant/v1/me',
} satisfies RouteDefinition<["get","head"]>

/**
* @see routes/Api/Tenant/V1.php:69
* @route '/api/tenant/v1/me'
*/
me.url = (options?: RouteQueryOptions) => {
    return me.definition.url + queryParams(options)
}

/**
* @see routes/Api/Tenant/V1.php:69
* @route '/api/tenant/v1/me'
*/
me.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: me.url(options),
    method: 'get',
})

/**
* @see routes/Api/Tenant/V1.php:69
* @route '/api/tenant/v1/me'
*/
me.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: me.url(options),
    method: 'head',
})

/**
* @see routes/Api/Tenant/V1.php:69
* @route '/api/tenant/v1/me'
*/
const meForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: me.url(options),
    method: 'get',
})

/**
* @see routes/Api/Tenant/V1.php:69
* @route '/api/tenant/v1/me'
*/
meForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: me.url(options),
    method: 'get',
})

/**
* @see routes/Api/Tenant/V1.php:69
* @route '/api/tenant/v1/me'
*/
meForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: me.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

me.form = meForm

const v1 = {
    auth: Object.assign(auth, auth),
    me: Object.assign(me, me),
    outlets: Object.assign(outlets, outlets),
    hotels: Object.assign(hotels, hotels),
}

export default v1