import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\TwoFactorEmailController::send
* @see app/Http/Controllers/Auth/TwoFactorEmailController.php:23
* @route '/two-factor/email/send'
*/
export const send = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

send.definition = {
    methods: ["post"],
    url: '/two-factor/email/send',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\TwoFactorEmailController::send
* @see app/Http/Controllers/Auth/TwoFactorEmailController.php:23
* @route '/two-factor/email/send'
*/
send.url = (options?: RouteQueryOptions) => {
    return send.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\TwoFactorEmailController::send
* @see app/Http/Controllers/Auth/TwoFactorEmailController.php:23
* @route '/two-factor/email/send'
*/
send.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\TwoFactorEmailController::send
* @see app/Http/Controllers/Auth/TwoFactorEmailController.php:23
* @route '/two-factor/email/send'
*/
const sendForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: send.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\TwoFactorEmailController::send
* @see app/Http/Controllers/Auth/TwoFactorEmailController.php:23
* @route '/two-factor/email/send'
*/
sendForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: send.url(options),
    method: 'post',
})

send.form = sendForm

/**
* @see \App\Http\Controllers\Auth\TwoFactorEmailController::verify
* @see app/Http/Controllers/Auth/TwoFactorEmailController.php:54
* @route '/two-factor/email/verify'
*/
export const verify = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(options),
    method: 'post',
})

verify.definition = {
    methods: ["post"],
    url: '/two-factor/email/verify',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\TwoFactorEmailController::verify
* @see app/Http/Controllers/Auth/TwoFactorEmailController.php:54
* @route '/two-factor/email/verify'
*/
verify.url = (options?: RouteQueryOptions) => {
    return verify.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\TwoFactorEmailController::verify
* @see app/Http/Controllers/Auth/TwoFactorEmailController.php:54
* @route '/two-factor/email/verify'
*/
verify.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\TwoFactorEmailController::verify
* @see app/Http/Controllers/Auth/TwoFactorEmailController.php:54
* @route '/two-factor/email/verify'
*/
const verifyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\TwoFactorEmailController::verify
* @see app/Http/Controllers/Auth/TwoFactorEmailController.php:54
* @route '/two-factor/email/verify'
*/
verifyForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: verify.url(options),
    method: 'post',
})

verify.form = verifyForm

const TwoFactorEmailController = { send, verify }

export default TwoFactorEmailController