import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
import review31e8d2 from './review'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:52
* @route '/dashboard/permission-requests/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/permission-requests/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:52
* @route '/dashboard/permission-requests/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:52
* @route '/dashboard/permission-requests/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::create
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:52
* @route '/dashboard/permission-requests/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:64
* @route '/dashboard/permission-requests'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/permission-requests',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:64
* @route '/dashboard/permission-requests'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::store
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:64
* @route '/dashboard/permission-requests'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:39
* @route '/dashboard/permission-requests'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/permission-requests',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:39
* @route '/dashboard/permission-requests'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:39
* @route '/dashboard/permission-requests'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:39
* @route '/dashboard/permission-requests'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:76
* @route '/dashboard/permission-requests/{permission_request}'
*/
export const show = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/permission-requests/{permission_request}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:76
* @route '/dashboard/permission-requests/{permission_request}'
*/
show.url = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { permission_request: args }
    }

    if (Array.isArray(args)) {
        args = {
            permission_request: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        permission_request: args.permission_request,
    }

    return show.definition.url
            .replace('{permission_request}', parsedArgs.permission_request.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:76
* @route '/dashboard/permission-requests/{permission_request}'
*/
show.get = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::show
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:76
* @route '/dashboard/permission-requests/{permission_request}'
*/
show.head = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:90
* @route '/dashboard/permission-requests/{permission_request}/edit'
*/
export const edit = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/permission-requests/{permission_request}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:90
* @route '/dashboard/permission-requests/{permission_request}/edit'
*/
edit.url = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { permission_request: args }
    }

    if (Array.isArray(args)) {
        args = {
            permission_request: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        permission_request: args.permission_request,
    }

    return edit.definition.url
            .replace('{permission_request}', parsedArgs.permission_request.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:90
* @route '/dashboard/permission-requests/{permission_request}/edit'
*/
edit.get = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:90
* @route '/dashboard/permission-requests/{permission_request}/edit'
*/
edit.head = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:108
* @route '/dashboard/permission-requests/{permission_request}'
*/
export const update = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/permission-requests/{permission_request}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:108
* @route '/dashboard/permission-requests/{permission_request}'
*/
update.url = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { permission_request: args }
    }

    if (Array.isArray(args)) {
        args = {
            permission_request: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        permission_request: args.permission_request,
    }

    return update.definition.url
            .replace('{permission_request}', parsedArgs.permission_request.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:108
* @route '/dashboard/permission-requests/{permission_request}'
*/
update.put = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:127
* @route '/dashboard/permission-requests/{permission_request}/delete'
*/
export const confirmDelete = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/permission-requests/{permission_request}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:127
* @route '/dashboard/permission-requests/{permission_request}/delete'
*/
confirmDelete.url = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { permission_request: args }
    }

    if (Array.isArray(args)) {
        args = {
            permission_request: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        permission_request: args.permission_request,
    }

    return confirmDelete.definition.url
            .replace('{permission_request}', parsedArgs.permission_request.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:127
* @route '/dashboard/permission-requests/{permission_request}/delete'
*/
confirmDelete.get = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::confirmDelete
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:127
* @route '/dashboard/permission-requests/{permission_request}/delete'
*/
confirmDelete.head = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:139
* @route '/dashboard/permission-requests/{permission_request}'
*/
export const destroy = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/permission-requests/{permission_request}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:139
* @route '/dashboard/permission-requests/{permission_request}'
*/
destroy.url = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { permission_request: args }
    }

    if (Array.isArray(args)) {
        args = {
            permission_request: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        permission_request: args.permission_request,
    }

    return destroy.definition.url
            .replace('{permission_request}', parsedArgs.permission_request.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::destroy
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:139
* @route '/dashboard/permission-requests/{permission_request}'
*/
destroy.delete = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::review
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:151
* @route '/dashboard/permission-requests/{permission_request}/review'
*/
export const review = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: review.url(args, options),
    method: 'get',
})

review.definition = {
    methods: ["get","head"],
    url: '/dashboard/permission-requests/{permission_request}/review',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::review
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:151
* @route '/dashboard/permission-requests/{permission_request}/review'
*/
review.url = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { permission_request: args }
    }

    if (Array.isArray(args)) {
        args = {
            permission_request: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        permission_request: args.permission_request,
    }

    return review.definition.url
            .replace('{permission_request}', parsedArgs.permission_request.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::review
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:151
* @route '/dashboard/permission-requests/{permission_request}/review'
*/
review.get = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: review.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\PermissionRequestController::review
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/PermissionRequestController.php:151
* @route '/dashboard/permission-requests/{permission_request}/review'
*/
review.head = (args: { permission_request: string | number } | [permission_request: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: review.url(args, options),
    method: 'head',
})

const permissionRequests = {
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    index: Object.assign(index, index),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    confirmDelete: Object.assign(confirmDelete, confirmDelete),
    destroy: Object.assign(destroy, destroy),
    review: Object.assign(review, review31e8d2),
}

export default permissionRequests