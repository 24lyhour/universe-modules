import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\QrShareController::upload
* @see app/Http/Controllers/QrShareController.php:15
* @route '/settings/two-factor/qr-share'
*/
export const upload = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

upload.definition = {
    methods: ["post"],
    url: '/settings/two-factor/qr-share',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\QrShareController::upload
* @see app/Http/Controllers/QrShareController.php:15
* @route '/settings/two-factor/qr-share'
*/
upload.url = (options?: RouteQueryOptions) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\QrShareController::upload
* @see app/Http/Controllers/QrShareController.php:15
* @route '/settings/two-factor/qr-share'
*/
upload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\QrShareController::upload
* @see app/Http/Controllers/QrShareController.php:15
* @route '/settings/two-factor/qr-share'
*/
const uploadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upload.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\QrShareController::upload
* @see app/Http/Controllers/QrShareController.php:15
* @route '/settings/two-factor/qr-share'
*/
uploadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upload.url(options),
    method: 'post',
})

upload.form = uploadForm

const QrShareController = { upload }

export default QrShareController