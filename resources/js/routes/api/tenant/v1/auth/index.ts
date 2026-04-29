import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see routes/Api/Tenant/V1.php:32
* @route '/api/tenant/v1/auth/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/api/tenant/v1/auth/login',
} satisfies RouteDefinition<["post"]>

/**
* @see routes/Api/Tenant/V1.php:32
* @route '/api/tenant/v1/auth/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see routes/Api/Tenant/V1.php:32
* @route '/api/tenant/v1/auth/login'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see routes/Api/Tenant/V1.php:32
* @route '/api/tenant/v1/auth/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

/**
* @see routes/Api/Tenant/V1.php:32
* @route '/api/tenant/v1/auth/login'
*/
loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

login.form = loginForm

/**
* @see routes/Api/Tenant/V1.php:62
* @route '/api/tenant/v1/auth/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/api/tenant/v1/auth/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see routes/Api/Tenant/V1.php:62
* @route '/api/tenant/v1/auth/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see routes/Api/Tenant/V1.php:62
* @route '/api/tenant/v1/auth/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see routes/Api/Tenant/V1.php:62
* @route '/api/tenant/v1/auth/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see routes/Api/Tenant/V1.php:62
* @route '/api/tenant/v1/auth/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

const auth = {
    login: Object.assign(login, login),
    logout: Object.assign(logout, logout),
}

export default auth