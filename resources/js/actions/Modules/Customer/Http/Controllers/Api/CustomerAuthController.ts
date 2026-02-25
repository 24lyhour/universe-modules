import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::login
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:20
* @route '/api/v1/auth/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/api/v1/auth/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::login
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:20
* @route '/api/v1/auth/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::login
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:20
* @route '/api/v1/auth/login'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::logout
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:30
* @route '/api/v1/auth/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/api/v1/auth/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::logout
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:30
* @route '/api/v1/auth/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::logout
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:30
* @route '/api/v1/auth/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::logoutAll
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:40
* @route '/api/v1/auth/logout-all'
*/
export const logoutAll = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logoutAll.url(options),
    method: 'post',
})

logoutAll.definition = {
    methods: ["post"],
    url: '/api/v1/auth/logout-all',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::logoutAll
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:40
* @route '/api/v1/auth/logout-all'
*/
logoutAll.url = (options?: RouteQueryOptions) => {
    return logoutAll.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::logoutAll
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:40
* @route '/api/v1/auth/logout-all'
*/
logoutAll.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logoutAll.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::me
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:50
* @route '/api/v1/auth/customer'
*/
export const me = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: me.url(options),
    method: 'get',
})

me.definition = {
    methods: ["get","head"],
    url: '/api/v1/auth/customer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::me
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:50
* @route '/api/v1/auth/customer'
*/
me.url = (options?: RouteQueryOptions) => {
    return me.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::me
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:50
* @route '/api/v1/auth/customer'
*/
me.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: me.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::me
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:50
* @route '/api/v1/auth/customer'
*/
me.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: me.url(options),
    method: 'head',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::update
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:60
* @route '/api/v1/auth/customer'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/api/v1/auth/customer',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::update
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:60
* @route '/api/v1/auth/customer'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::update
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:60
* @route '/api/v1/auth/customer'
*/
update.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(options),
    method: 'post',
})

const CustomerAuthController = { login, logout, logoutAll, me, update }

export default CustomerAuthController