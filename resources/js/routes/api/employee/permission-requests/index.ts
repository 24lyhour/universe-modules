import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::types
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:65
* @route '/api/v1/employee/permission-requests/types'
*/
export const types = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: types.url(options),
    method: 'get',
})

types.definition = {
    methods: ["get","head"],
    url: '/api/v1/employee/permission-requests/types',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::types
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:65
* @route '/api/v1/employee/permission-requests/types'
*/
types.url = (options?: RouteQueryOptions) => {
    return types.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::types
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:65
* @route '/api/v1/employee/permission-requests/types'
*/
types.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: types.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::types
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:65
* @route '/api/v1/employee/permission-requests/types'
*/
types.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: types.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::types
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:65
* @route '/api/v1/employee/permission-requests/types'
*/
const typesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: types.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::types
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:65
* @route '/api/v1/employee/permission-requests/types'
*/
typesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: types.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::types
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:65
* @route '/api/v1/employee/permission-requests/types'
*/
typesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: types.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

types.form = typesForm

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::index
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:20
* @route '/api/v1/employee/permission-requests'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/employee/permission-requests',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::index
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:20
* @route '/api/v1/employee/permission-requests'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::index
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:20
* @route '/api/v1/employee/permission-requests'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::index
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:20
* @route '/api/v1/employee/permission-requests'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::index
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:20
* @route '/api/v1/employee/permission-requests'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::index
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:20
* @route '/api/v1/employee/permission-requests'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::index
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:20
* @route '/api/v1/employee/permission-requests'
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
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::store
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:35
* @route '/api/v1/employee/permission-requests'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/employee/permission-requests',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::store
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:35
* @route '/api/v1/employee/permission-requests'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::store
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:35
* @route '/api/v1/employee/permission-requests'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::store
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:35
* @route '/api/v1/employee/permission-requests'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::store
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:35
* @route '/api/v1/employee/permission-requests'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::show
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:45
* @route '/api/v1/employee/permission-requests/{uuid}'
*/
export const show = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/employee/permission-requests/{uuid}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::show
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:45
* @route '/api/v1/employee/permission-requests/{uuid}'
*/
show.url = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { uuid: args }
    }

    if (Array.isArray(args)) {
        args = {
            uuid: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        uuid: args.uuid,
    }

    return show.definition.url
            .replace('{uuid}', parsedArgs.uuid.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::show
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:45
* @route '/api/v1/employee/permission-requests/{uuid}'
*/
show.get = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::show
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:45
* @route '/api/v1/employee/permission-requests/{uuid}'
*/
show.head = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::show
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:45
* @route '/api/v1/employee/permission-requests/{uuid}'
*/
const showForm = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::show
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:45
* @route '/api/v1/employee/permission-requests/{uuid}'
*/
showForm.get = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::show
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:45
* @route '/api/v1/employee/permission-requests/{uuid}'
*/
showForm.head = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::cancel
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:55
* @route '/api/v1/employee/permission-requests/{uuid}'
*/
export const cancel = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: cancel.url(args, options),
    method: 'delete',
})

cancel.definition = {
    methods: ["delete"],
    url: '/api/v1/employee/permission-requests/{uuid}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::cancel
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:55
* @route '/api/v1/employee/permission-requests/{uuid}'
*/
cancel.url = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { uuid: args }
    }

    if (Array.isArray(args)) {
        args = {
            uuid: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        uuid: args.uuid,
    }

    return cancel.definition.url
            .replace('{uuid}', parsedArgs.uuid.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::cancel
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:55
* @route '/api/v1/employee/permission-requests/{uuid}'
*/
cancel.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: cancel.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::cancel
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:55
* @route '/api/v1/employee/permission-requests/{uuid}'
*/
const cancelForm = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\PermissionRequestController::cancel
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/PermissionRequestController.php:55
* @route '/api/v1/employee/permission-requests/{uuid}'
*/
cancelForm.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

cancel.form = cancelForm

const permissionRequests = {
    types: Object.assign(types, types),
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    cancel: Object.assign(cancel, cancel),
}

export default permissionRequests