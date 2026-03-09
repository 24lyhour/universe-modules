import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::preview
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:111
* @route '/dashboard/categories/import/preview'
*/
export const preview = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

preview.definition = {
    methods: ["post"],
    url: '/dashboard/categories/import/preview',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::preview
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:111
* @route '/dashboard/categories/import/preview'
*/
preview.url = (options?: RouteQueryOptions) => {
    return preview.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::preview
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:111
* @route '/dashboard/categories/import/preview'
*/
preview.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: preview.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::preview
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:111
* @route '/dashboard/categories/import/preview'
*/
const previewForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: preview.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::preview
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:111
* @route '/dashboard/categories/import/preview'
*/
previewForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: preview.url(options),
    method: 'post',
})

preview.form = previewForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::process
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:134
* @route '/dashboard/categories/import/process'
*/
export const process = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(options),
    method: 'post',
})

process.definition = {
    methods: ["post"],
    url: '/dashboard/categories/import/process',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::process
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:134
* @route '/dashboard/categories/import/process'
*/
process.url = (options?: RouteQueryOptions) => {
    return process.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::process
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:134
* @route '/dashboard/categories/import/process'
*/
process.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: process.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::process
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:134
* @route '/dashboard/categories/import/process'
*/
const processForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: process.url(options),
    method: 'post',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::process
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:134
* @route '/dashboard/categories/import/process'
*/
processForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: process.url(options),
    method: 'post',
})

process.form = processForm

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:170
* @route '/dashboard/categories/import/template'
*/
export const template = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

template.definition = {
    methods: ["get","head"],
    url: '/dashboard/categories/import/template',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:170
* @route '/dashboard/categories/import/template'
*/
template.url = (options?: RouteQueryOptions) => {
    return template.definition.url + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:170
* @route '/dashboard/categories/import/template'
*/
template.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: template.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:170
* @route '/dashboard/categories/import/template'
*/
template.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: template.url(options),
    method: 'head',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:170
* @route '/dashboard/categories/import/template'
*/
const templateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: template.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:170
* @route '/dashboard/categories/import/template'
*/
templateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: template.url(options),
    method: 'get',
})

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryController::template
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryController.php:170
* @route '/dashboard/categories/import/template'
*/
templateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: template.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

template.form = templateForm

const importMethod = {
    preview: Object.assign(preview, preview),
    process: Object.assign(process, process),
    template: Object.assign(template, template),
}

export default importMethod