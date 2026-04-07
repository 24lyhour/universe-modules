import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
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
* @see \App\Http\Controllers\Settings\ActivityLogController::suspendUser
* @see app/Http/Controllers/Settings/ActivityLogController.php:114
* @route '/dashboard/settings/users/{user}/suspend'
*/
export const suspendUser = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: suspendUser.url(args, options),
    method: 'post',
})

suspendUser.definition = {
    methods: ["post"],
    url: '/dashboard/settings/users/{user}/suspend',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::suspendUser
* @see app/Http/Controllers/Settings/ActivityLogController.php:114
* @route '/dashboard/settings/users/{user}/suspend'
*/
suspendUser.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return suspendUser.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::suspendUser
* @see app/Http/Controllers/Settings/ActivityLogController.php:114
* @route '/dashboard/settings/users/{user}/suspend'
*/
suspendUser.post = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: suspendUser.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::unsuspendUser
* @see app/Http/Controllers/Settings/ActivityLogController.php:138
* @route '/dashboard/settings/users/{user}/unsuspend'
*/
export const unsuspendUser = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unsuspendUser.url(args, options),
    method: 'post',
})

unsuspendUser.definition = {
    methods: ["post"],
    url: '/dashboard/settings/users/{user}/unsuspend',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::unsuspendUser
* @see app/Http/Controllers/Settings/ActivityLogController.php:138
* @route '/dashboard/settings/users/{user}/unsuspend'
*/
unsuspendUser.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return unsuspendUser.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::unsuspendUser
* @see app/Http/Controllers/Settings/ActivityLogController.php:138
* @route '/dashboard/settings/users/{user}/unsuspend'
*/
unsuspendUser.post = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unsuspendUser.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::forceLogout
* @see app/Http/Controllers/Settings/ActivityLogController.php:154
* @route '/dashboard/settings/users/{user}/force-logout'
*/
export const forceLogout = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: forceLogout.url(args, options),
    method: 'post',
})

forceLogout.definition = {
    methods: ["post"],
    url: '/dashboard/settings/users/{user}/force-logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::forceLogout
* @see app/Http/Controllers/Settings/ActivityLogController.php:154
* @route '/dashboard/settings/users/{user}/force-logout'
*/
forceLogout.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return forceLogout.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::forceLogout
* @see app/Http/Controllers/Settings/ActivityLogController.php:154
* @route '/dashboard/settings/users/{user}/force-logout'
*/
forceLogout.post = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: forceLogout.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::deleteUser
* @see app/Http/Controllers/Settings/ActivityLogController.php:188
* @route '/dashboard/settings/users/{user}'
*/
export const deleteUser = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteUser.url(args, options),
    method: 'delete',
})

deleteUser.definition = {
    methods: ["delete"],
    url: '/dashboard/settings/users/{user}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::deleteUser
* @see app/Http/Controllers/Settings/ActivityLogController.php:188
* @route '/dashboard/settings/users/{user}'
*/
deleteUser.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { user: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            user: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        user: typeof args.user === 'object'
        ? args.user.id
        : args.user,
    }

    return deleteUser.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::deleteUser
* @see app/Http/Controllers/Settings/ActivityLogController.php:188
* @route '/dashboard/settings/users/{user}'
*/
deleteUser.delete = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteUser.url(args, options),
    method: 'delete',
})

const ActivityLogController = { index, exportMethod, clear, suspendUser, unsuspendUser, forceLogout, deleteUser, export: exportMethod }

export default ActivityLogController