import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
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
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::sendOtp
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:55
* @route '/api/v1/auth/otp/send'
*/
export const sendOtp = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendOtp.url(options),
    method: 'post',
})

sendOtp.definition = {
    methods: ["post"],
    url: '/api/v1/auth/otp/send',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::sendOtp
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:55
* @route '/api/v1/auth/otp/send'
*/
sendOtp.url = (options?: RouteQueryOptions) => {
    return sendOtp.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::sendOtp
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:55
* @route '/api/v1/auth/otp/send'
*/
sendOtp.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendOtp.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::sendOtp
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:55
* @route '/api/v1/auth/otp/send'
*/
const sendOtpForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sendOtp.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::sendOtp
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:55
* @route '/api/v1/auth/otp/send'
*/
sendOtpForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sendOtp.url(options),
    method: 'post',
})

sendOtp.form = sendOtpForm

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::verifyOtp
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:70
* @route '/api/v1/auth/otp/verify'
*/
export const verifyOtp = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyOtp.url(options),
    method: 'post',
})

verifyOtp.definition = {
    methods: ["post"],
    url: '/api/v1/auth/otp/verify',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::verifyOtp
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:70
* @route '/api/v1/auth/otp/verify'
*/
verifyOtp.url = (options?: RouteQueryOptions) => {
    return verifyOtp.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::verifyOtp
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:70
* @route '/api/v1/auth/otp/verify'
*/
verifyOtp.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verifyOtp.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::verifyOtp
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:70
* @route '/api/v1/auth/otp/verify'
*/
const verifyOtpForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyOtp.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::verifyOtp
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:70
* @route '/api/v1/auth/otp/verify'
*/
verifyOtpForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verifyOtp.url(options),
    method: 'post',
})

verifyOtp.form = verifyOtpForm

const CustomerRegisterController = { register, checkEmail, checkPhone, sendOtp, verifyOtp }

export default CustomerRegisterController