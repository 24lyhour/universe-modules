import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::send
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:55
* @route '/api/v1/auth/otp/send'
*/
export const send = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

send.definition = {
    methods: ["post"],
    url: '/api/v1/auth/otp/send',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::send
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:55
* @route '/api/v1/auth/otp/send'
*/
send.url = (options?: RouteQueryOptions) => {
    return send.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::send
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:55
* @route '/api/v1/auth/otp/send'
*/
send.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::send
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:55
* @route '/api/v1/auth/otp/send'
*/
const sendForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: send.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::send
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:55
* @route '/api/v1/auth/otp/send'
*/
sendForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: send.url(options),
    method: 'post',
})

send.form = sendForm

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::verify
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:70
* @route '/api/v1/auth/otp/verify'
*/
export const verify = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(options),
    method: 'post',
})

verify.definition = {
    methods: ["post"],
    url: '/api/v1/auth/otp/verify',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::verify
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:70
* @route '/api/v1/auth/otp/verify'
*/
verify.url = (options?: RouteQueryOptions) => {
    return verify.definition.url + queryParams(options)
}

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::verify
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:70
* @route '/api/v1/auth/otp/verify'
*/
verify.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::verify
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:70
* @route '/api/v1/auth/otp/verify'
*/
const verifyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify.url(options),
    method: 'post',
})

/**
* @see \Modules\Customer\Http\Controllers\Api\CustomerRegisterController::verify
* @see Modules/Customer/app/Http/Controllers/Api/CustomerRegisterController.php:70
* @route '/api/v1/auth/otp/verify'
*/
verifyForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify.url(options),
    method: 'post',
})

verify.form = verifyForm

const otp = {
    send: Object.assign(send, send),
    verify: Object.assign(verify, verify),
}

export default otp