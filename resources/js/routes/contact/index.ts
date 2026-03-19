import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::submit
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:166
* @route '/contact'
*/
export const submit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/contact',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::submit
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:166
* @route '/contact'
*/
submit.url = (options?: RouteQueryOptions) => {
    return submit.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::submit
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:166
* @route '/contact'
*/
submit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::submit
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:166
* @route '/contact'
*/
const submitForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::submit
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:166
* @route '/contact'
*/
submitForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submit.url(options),
    method: 'post',
})

submit.form = submitForm

const contact = {
    submit: Object.assign(submit, submit),
}

export default contact