import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
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
* @see \App\Http\Controllers\Settings\UserRoleController::create
* @see app/Http/Controllers/Settings/UserRoleController.php:99
* @route '/dashboard/settings/users/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::create
* @see app/Http/Controllers/Settings/UserRoleController.php:99
* @route '/dashboard/settings/users/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::create
* @see app/Http/Controllers/Settings/UserRoleController.php:99
* @route '/dashboard/settings/users/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

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
* @see \App\Http\Controllers\Settings\UserRoleController::store
* @see app/Http/Controllers/Settings/UserRoleController.php:191
* @route '/dashboard/settings/users'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::store
* @see app/Http/Controllers/Settings/UserRoleController.php:191
* @route '/dashboard/settings/users'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

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
* @see \App\Http\Controllers\Settings\UserRoleController::index
* @see app/Http/Controllers/Settings/UserRoleController.php:26
* @route '/dashboard/settings/users'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::index
* @see app/Http/Controllers/Settings/UserRoleController.php:26
* @route '/dashboard/settings/users'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::index
* @see app/Http/Controllers/Settings/UserRoleController.php:26
* @route '/dashboard/settings/users'
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
* @see \App\Http\Controllers\Settings\UserRoleController::edit
* @see app/Http/Controllers/Settings/UserRoleController.php:275
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
* @see app/Http/Controllers/Settings/UserRoleController.php:275
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
* @see app/Http/Controllers/Settings/UserRoleController.php:275
* @route '/dashboard/settings/users/{user}/edit'
*/
edit.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::edit
* @see app/Http/Controllers/Settings/UserRoleController.php:275
* @route '/dashboard/settings/users/{user}/edit'
*/
edit.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::edit
* @see app/Http/Controllers/Settings/UserRoleController.php:275
* @route '/dashboard/settings/users/{user}/edit'
*/
const editForm = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::edit
* @see app/Http/Controllers/Settings/UserRoleController.php:275
* @route '/dashboard/settings/users/{user}/edit'
*/
editForm.get = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::edit
* @see app/Http/Controllers/Settings/UserRoleController.php:275
* @route '/dashboard/settings/users/{user}/edit'
*/
editForm.head = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\Settings\UserRoleController::update
* @see app/Http/Controllers/Settings/UserRoleController.php:370
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
* @see app/Http/Controllers/Settings/UserRoleController.php:370
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
* @see app/Http/Controllers/Settings/UserRoleController.php:370
* @route '/dashboard/settings/users/{user}'
*/
update.put = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::update
* @see app/Http/Controllers/Settings/UserRoleController.php:370
* @route '/dashboard/settings/users/{user}'
*/
const updateForm = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::update
* @see app/Http/Controllers/Settings/UserRoleController.php:370
* @route '/dashboard/settings/users/{user}'
*/
updateForm.put = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Settings\UserRoleController::assignRole
* @see app/Http/Controllers/Settings/UserRoleController.php:452
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
* @see app/Http/Controllers/Settings/UserRoleController.php:452
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
* @see app/Http/Controllers/Settings/UserRoleController.php:452
* @route '/dashboard/settings/users/{user}/assign-role'
*/
assignRole.post = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: assignRole.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::assignRole
* @see app/Http/Controllers/Settings/UserRoleController.php:452
* @route '/dashboard/settings/users/{user}/assign-role'
*/
const assignRoleForm = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: assignRole.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::assignRole
* @see app/Http/Controllers/Settings/UserRoleController.php:452
* @route '/dashboard/settings/users/{user}/assign-role'
*/
assignRoleForm.post = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: assignRole.url(args, options),
    method: 'post',
})

assignRole.form = assignRoleForm

/**
* @see \App\Http\Controllers\Settings\UserRoleController::removeRole
* @see app/Http/Controllers/Settings/UserRoleController.php:467
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
* @see app/Http/Controllers/Settings/UserRoleController.php:467
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
* @see app/Http/Controllers/Settings/UserRoleController.php:467
* @route '/dashboard/settings/users/{user}/remove-role'
*/
removeRole.post = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: removeRole.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::removeRole
* @see app/Http/Controllers/Settings/UserRoleController.php:467
* @route '/dashboard/settings/users/{user}/remove-role'
*/
const removeRoleForm = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: removeRole.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\UserRoleController::removeRole
* @see app/Http/Controllers/Settings/UserRoleController.php:467
* @route '/dashboard/settings/users/{user}/remove-role'
*/
removeRoleForm.post = (args: { user: number | { id: number } } | [user: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: removeRole.url(args, options),
    method: 'post',
})

removeRole.form = removeRoleForm

const UserRoleController = { create, store, index, edit, update, assignRole, removeRole }

export default UserRoleController