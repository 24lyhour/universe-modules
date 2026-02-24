import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\ActivityLogController::index
* @see app/Http/Controllers/Settings/ActivityLogController.php:20
* @route '/dashboard/settings/activity-log'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/settings/activity-log',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::index
* @see app/Http/Controllers/Settings/ActivityLogController.php:20
* @route '/dashboard/settings/activity-log'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::index
* @see app/Http/Controllers/Settings/ActivityLogController.php:20
* @route '/dashboard/settings/activity-log'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::index
* @see app/Http/Controllers/Settings/ActivityLogController.php:20
* @route '/dashboard/settings/activity-log'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::index
* @see app/Http/Controllers/Settings/ActivityLogController.php:20
* @route '/dashboard/settings/activity-log'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::index
* @see app/Http/Controllers/Settings/ActivityLogController.php:20
* @route '/dashboard/settings/activity-log'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::index
* @see app/Http/Controllers/Settings/ActivityLogController.php:20
* @route '/dashboard/settings/activity-log'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::exportMethod
* @see app/Http/Controllers/Settings/ActivityLogController.php:227
* @route '/dashboard/settings/activity-log/export'
*/
export const exportMethod = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

exportMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/settings/activity-log/export',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::exportMethod
* @see app/Http/Controllers/Settings/ActivityLogController.php:227
* @route '/dashboard/settings/activity-log/export'
*/
exportMethod.url = (options?: RouteQueryOptions) => {
    return exportMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::exportMethod
* @see app/Http/Controllers/Settings/ActivityLogController.php:227
* @route '/dashboard/settings/activity-log/export'
*/
exportMethod.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportMethod.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::exportMethod
* @see app/Http/Controllers/Settings/ActivityLogController.php:227
* @route '/dashboard/settings/activity-log/export'
*/
exportMethod.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportMethod.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::exportMethod
* @see app/Http/Controllers/Settings/ActivityLogController.php:227
* @route '/dashboard/settings/activity-log/export'
*/
const exportMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::exportMethod
* @see app/Http/Controllers/Settings/ActivityLogController.php:227
* @route '/dashboard/settings/activity-log/export'
*/
exportMethodForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::exportMethod
* @see app/Http/Controllers/Settings/ActivityLogController.php:227
* @route '/dashboard/settings/activity-log/export'
*/
exportMethodForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: exportMethod.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

exportMethod.form = exportMethodForm

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::clear
* @see app/Http/Controllers/Settings/ActivityLogController.php:271
* @route '/dashboard/settings/activity-log/clear'
*/
export const clear = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: clear.url(options),
    method: 'post',
})

clear.definition = {
    methods: ["post"],
    url: '/dashboard/settings/activity-log/clear',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::clear
* @see app/Http/Controllers/Settings/ActivityLogController.php:271
* @route '/dashboard/settings/activity-log/clear'
*/
clear.url = (options?: RouteQueryOptions) => {
    return clear.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::clear
* @see app/Http/Controllers/Settings/ActivityLogController.php:271
* @route '/dashboard/settings/activity-log/clear'
*/
clear.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: clear.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::clear
* @see app/Http/Controllers/Settings/ActivityLogController.php:271
* @route '/dashboard/settings/activity-log/clear'
*/
const clearForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: clear.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::clear
* @see app/Http/Controllers/Settings/ActivityLogController.php:271
* @route '/dashboard/settings/activity-log/clear'
*/
clearForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: clear.url(options),
    method: 'post',
})

clear.form = clearForm

const activityLog = {
    index: Object.assign(index, index),
    export: Object.assign(exportMethod, exportMethod),
    clear: Object.assign(clear, clear),
}

export default activityLog