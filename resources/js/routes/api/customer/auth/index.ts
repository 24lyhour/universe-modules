import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
import otp from './otp'
import customer852f7d from './customer'
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
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::register
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:22
* @route '/api/v1/auth/register'
*/
export const register = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

register.definition = {
    methods: ["post"],
    url: '/api/v1/auth/register',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::register
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:22
* @route '/api/v1/auth/register'
*/
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::register
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:22
* @route '/api/v1/auth/register'
*/
register.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: register.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::checkEmail
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:35
* @route '/api/v1/auth/check-email'
*/
export const checkEmail = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkEmail.url(options),
    method: 'post',
})

checkEmail.definition = {
    methods: ["post"],
    url: '/api/v1/auth/check-email',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::checkEmail
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:35
* @route '/api/v1/auth/check-email'
*/
checkEmail.url = (options?: RouteQueryOptions) => {
    return checkEmail.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::checkEmail
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:35
* @route '/api/v1/auth/check-email'
*/
checkEmail.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkEmail.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::checkPhone
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:45
* @route '/api/v1/auth/check-phone'
*/
export const checkPhone = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkPhone.url(options),
    method: 'post',
})

checkPhone.definition = {
    methods: ["post"],
    url: '/api/v1/auth/check-phone',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::checkPhone
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:45
* @route '/api/v1/auth/check-phone'
*/
checkPhone.url = (options?: RouteQueryOptions) => {
    return checkPhone.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::checkPhone
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:45
* @route '/api/v1/auth/check-phone'
*/
checkPhone.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkPhone.url(options),
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
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::customer
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:50
* @route '/api/v1/auth/customer'
*/
export const customer = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: customer.url(options),
    method: 'get',
})

customer.definition = {
    methods: ["get","head"],
    url: '/api/v1/auth/customer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::customer
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:50
* @route '/api/v1/auth/customer'
*/
customer.url = (options?: RouteQueryOptions) => {
    return customer.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::customer
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:50
* @route '/api/v1/auth/customer'
*/
customer.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: customer.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::customer
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:50
* @route '/api/v1/auth/customer'
*/
customer.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: customer.url(options),
    method: 'head',
})

const auth = {
    login: Object.assign(login, login),
    register: Object.assign(register, register),
    checkEmail: Object.assign(checkEmail, checkEmail),
    checkPhone: Object.assign(checkPhone, checkPhone),
    otp: Object.assign(otp, otp),
    logout: Object.assign(logout, logout),
    logoutAll: Object.assign(logoutAll, logoutAll),
    customer: Object.assign(customer, customer852f7d),
}

export default auth