import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\UserRoleController::create
* @see app/Http/Controllers/Settings/UserRoleController.php:99
* @route '/dashboard/settings/users/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/settings/users/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\UserRoleController::create
* @see app/Http/Controllers/Settings/UserRoleController.php:99
* @route '/dashboard/settings/users/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\UserRoleController::create
* @see app/Http/Controllers/Settings/UserRoleController.php:99
* @route '/dashboard/settings/users/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::create
* @see app/Http/Controllers/Settings/UserRoleController.php:99
* @route '/dashboard/settings/users/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::store
* @see app/Http/Controllers/Settings/UserRoleController.php:191
* @route '/dashboard/settings/users'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/settings/users',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\UserRoleController::store
* @see app/Http/Controllers/Settings/UserRoleController.php:191
* @route '/dashboard/settings/users'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\UserRoleController::store
* @see app/Http/Controllers/Settings/UserRoleController.php:191
* @route '/dashboard/settings/users'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::index
* @see app/Http/Controllers/Settings/UserRoleController.php:26
* @route '/dashboard/settings/users'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/settings/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\UserRoleController::index
* @see app/Http/Controllers/Settings/UserRoleController.php:26
* @route '/dashboard/settings/users'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\UserRoleController::index
* @see app/Http/Controllers/Settings/UserRoleController.php:26
* @route '/dashboard/settings/users'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::index
* @see app/Http/Controllers/Settings/UserRoleController.php:26
* @route '/dashboard/settings/users'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::edit
* @see app/Http/Controllers/Settings/UserRoleController.php:277
* @route '/dashboard/settings/users/{user}/edit'
*/
export const edit = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/settings/users/{user}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\UserRoleController::edit
* @see app/Http/Controllers/Settings/UserRoleController.php:277
* @route '/dashboard/settings/users/{user}/edit'
*/
edit.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\UserRoleController::edit
* @see app/Http/Controllers/Settings/UserRoleController.php:277
* @route '/dashboard/settings/users/{user}/edit'
*/
edit.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::edit
* @see app/Http/Controllers/Settings/UserRoleController.php:277
* @route '/dashboard/settings/users/{user}/edit'
*/
edit.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::update
* @see app/Http/Controllers/Settings/UserRoleController.php:372
* @route '/dashboard/settings/users/{user}'
*/
export const update = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/settings/users/{user}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Settings\UserRoleController::update
* @see app/Http/Controllers/Settings/UserRoleController.php:372
* @route '/dashboard/settings/users/{user}'
*/
update.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\UserRoleController::update
* @see app/Http/Controllers/Settings/UserRoleController.php:372
* @route '/dashboard/settings/users/{user}'
*/
update.put = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::assignRole
* @see app/Http/Controllers/Settings/UserRoleController.php:462
* @route '/dashboard/settings/users/{user}/assign-role'
*/
export const assignRole = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assignRole.url(args, options),
    method: 'post',
})

assignRole.definition = {
    methods: ["post"],
    url: '/dashboard/settings/users/{user}/assign-role',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\UserRoleController::assignRole
* @see app/Http/Controllers/Settings/UserRoleController.php:462
* @route '/dashboard/settings/users/{user}/assign-role'
*/
assignRole.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return assignRole.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\UserRoleController::assignRole
* @see app/Http/Controllers/Settings/UserRoleController.php:462
* @route '/dashboard/settings/users/{user}/assign-role'
*/
assignRole.post = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assignRole.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::removeRole
* @see app/Http/Controllers/Settings/UserRoleController.php:477
* @route '/dashboard/settings/users/{user}/remove-role'
*/
export const removeRole = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: removeRole.url(args, options),
    method: 'post',
})

removeRole.definition = {
    methods: ["post"],
    url: '/dashboard/settings/users/{user}/remove-role',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\UserRoleController::removeRole
* @see app/Http/Controllers/Settings/UserRoleController.php:477
* @route '/dashboard/settings/users/{user}/remove-role'
*/
removeRole.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return removeRole.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\UserRoleController::removeRole
* @see app/Http/Controllers/Settings/UserRoleController.php:477
* @route '/dashboard/settings/users/{user}/remove-role'
*/
removeRole.post = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: removeRole.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::suspend
* @see app/Http/Controllers/Settings/ActivityLogController.php:114
* @route '/dashboard/settings/users/{user}/suspend'
*/
export const suspend = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: suspend.url(args, options),
    method: 'post',
})

suspend.definition = {
    methods: ["post"],
    url: '/dashboard/settings/users/{user}/suspend',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::suspend
* @see app/Http/Controllers/Settings/ActivityLogController.php:114
* @route '/dashboard/settings/users/{user}/suspend'
*/
suspend.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return suspend.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::suspend
* @see app/Http/Controllers/Settings/ActivityLogController.php:114
* @route '/dashboard/settings/users/{user}/suspend'
*/
suspend.post = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: suspend.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::unsuspend
* @see app/Http/Controllers/Settings/ActivityLogController.php:138
* @route '/dashboard/settings/users/{user}/unsuspend'
*/
export const unsuspend = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unsuspend.url(args, options),
    method: 'post',
})

unsuspend.definition = {
    methods: ["post"],
    url: '/dashboard/settings/users/{user}/unsuspend',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::unsuspend
* @see app/Http/Controllers/Settings/ActivityLogController.php:138
* @route '/dashboard/settings/users/{user}/unsuspend'
*/
unsuspend.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return unsuspend.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::unsuspend
* @see app/Http/Controllers/Settings/ActivityLogController.php:138
* @route '/dashboard/settings/users/{user}/unsuspend'
*/
unsuspend.post = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: unsuspend.url(args, options),
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
* @see \App\Http\Controllers\Settings\ActivityLogController::deleteMethod
* @see app/Http/Controllers/Settings/ActivityLogController.php:188
* @route '/dashboard/settings/users/{user}'
*/
export const deleteMethod = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/dashboard/settings/users/{user}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::deleteMethod
* @see app/Http/Controllers/Settings/ActivityLogController.php:188
* @route '/dashboard/settings/users/{user}'
*/
deleteMethod.url = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return deleteMethod.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ActivityLogController::deleteMethod
* @see app/Http/Controllers/Settings/ActivityLogController.php:188
* @route '/dashboard/settings/users/{user}'
*/
deleteMethod.delete = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

const users = {
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    index: Object.assign(index, index),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    assignRole: Object.assign(assignRole, assignRole),
    removeRole: Object.assign(removeRole, removeRole),
    suspend: Object.assign(suspend, suspend),
    unsuspend: Object.assign(unsuspend, unsuspend),
    forceLogout: Object.assign(forceLogout, forceLogout),
    delete: Object.assign(deleteMethod, deleteMethod),
}

export default users