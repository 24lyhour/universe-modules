import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
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
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::login
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:20
* @route '/api/v1/auth/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::login
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:20
* @route '/api/v1/auth/login'
*/
loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

login.form = loginForm

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
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::register
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:22
* @route '/api/v1/auth/register'
*/
const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::register
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:22
* @route '/api/v1/auth/register'
*/
registerForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: register.url(options),
    method: 'post',
})

register.form = registerForm

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
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::checkEmail
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:35
* @route '/api/v1/auth/check-email'
*/
const checkEmailForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: checkEmail.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::checkEmail
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:35
* @route '/api/v1/auth/check-email'
*/
checkEmailForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: checkEmail.url(options),
    method: 'post',
})

checkEmail.form = checkEmailForm

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
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::checkPhone
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:45
* @route '/api/v1/auth/check-phone'
*/
const checkPhoneForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: checkPhone.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::checkPhone
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:45
* @route '/api/v1/auth/check-phone'
*/
checkPhoneForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: checkPhone.url(options),
    method: 'post',
})

checkPhone.form = checkPhoneForm

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
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::logout
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:30
* @route '/api/v1/auth/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::logout
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:30
* @route '/api/v1/auth/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

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
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::logoutAll
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:40
* @route '/api/v1/auth/logout-all'
*/
const logoutAllForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logoutAll.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::logoutAll
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:40
* @route '/api/v1/auth/logout-all'
*/
logoutAllForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logoutAll.url(options),
    method: 'post',
})

logoutAll.form = logoutAllForm

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

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::customer
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:50
* @route '/api/v1/auth/customer'
*/
const customerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: customer.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::customer
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:50
* @route '/api/v1/auth/customer'
*/
customerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: customer.url(options),
    method: 'get',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerAuthController::customer
* @see Modules/Customer/app/Http/Controllers/Api/CustomerAuthController.php:50
* @route '/api/v1/auth/customer'
*/
customerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: customer.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

customer.form = customerForm

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