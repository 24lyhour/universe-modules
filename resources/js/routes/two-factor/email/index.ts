import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\TwoFactorEmailController::send
* @see app/Http/Controllers/Auth/TwoFactorEmailController.php:22
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
* @see app/Http/Controllers/Auth/TwoFactorEmailController.php:22
* @route '/two-factor/email/send'
*/
send.url = (options?: RouteQueryOptions) => {
    return send.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\TwoFactorEmailController::send
* @see app/Http/Controllers/Auth/TwoFactorEmailController.php:22
* @route '/two-factor/email/send'
*/
send.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\TwoFactorEmailController::verify
* @see app/Http/Controllers/Auth/TwoFactorEmailController.php:41
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
* @see app/Http/Controllers/Auth/TwoFactorEmailController.php:41
* @route '/two-factor/email/verify'
*/
verify.url = (options?: RouteQueryOptions) => {
    return verify.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\TwoFactorEmailController::verify
* @see app/Http/Controllers/Auth/TwoFactorEmailController.php:41
* @route '/two-factor/email/verify'
*/
verify.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(options),
    method: 'post',
})

const email = {
    send: Object.assign(send, send),
    verify: Object.assign(verify, verify),
}

export default email