import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:55
* @route '/dashboard/schools/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/schools/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:55
* @route '/dashboard/schools/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:55
* @route '/dashboard/schools/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:55
* @route '/dashboard/schools/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:65
* @route '/dashboard/schools'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/schools',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:65
* @route '/dashboard/schools'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:65
* @route '/dashboard/schools'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:42
* @route '/dashboard/schools'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/schools',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:42
* @route '/dashboard/schools'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:42
* @route '/dashboard/schools'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:42
* @route '/dashboard/schools'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:77
* @route '/dashboard/schools/{school}'
*/
export const show = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/schools/{school}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:77
* @route '/dashboard/schools/{school}'
*/
show.url = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { school: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: typeof args.school === 'object'
        ? args.school.uuid
        : args.school,
    }

    return show.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:77
* @route '/dashboard/schools/{school}'
*/
show.get = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:77
* @route '/dashboard/schools/{school}'
*/
show.head = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:87
* @route '/dashboard/schools/{school}/edit'
*/
export const edit = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/schools/{school}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:87
* @route '/dashboard/schools/{school}/edit'
*/
edit.url = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { school: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: typeof args.school === 'object'
        ? args.school.uuid
        : args.school,
    }

    return edit.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:87
* @route '/dashboard/schools/{school}/edit'
*/
edit.get = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:87
* @route '/dashboard/schools/{school}/edit'
*/
edit.head = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:97
* @route '/dashboard/schools/{school}'
*/
const update7bf1d760f81c98a634e8d13339ffa7d4 = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update7bf1d760f81c98a634e8d13339ffa7d4.url(args, options),
    method: 'put',
})

update7bf1d760f81c98a634e8d13339ffa7d4.definition = {
    methods: ["put"],
    url: '/dashboard/schools/{school}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:97
* @route '/dashboard/schools/{school}'
*/
update7bf1d760f81c98a634e8d13339ffa7d4.url = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { school: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: typeof args.school === 'object'
        ? args.school.uuid
        : args.school,
    }

    return update7bf1d760f81c98a634e8d13339ffa7d4.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:97
* @route '/dashboard/schools/{school}'
*/
update7bf1d760f81c98a634e8d13339ffa7d4.put = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update7bf1d760f81c98a634e8d13339ffa7d4.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:97
* @route '/dashboard/schools/{school}'
*/
const update7bf1d760f81c98a634e8d13339ffa7d4 = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update7bf1d760f81c98a634e8d13339ffa7d4.url(args, options),
    method: 'patch',
})

update7bf1d760f81c98a634e8d13339ffa7d4.definition = {
    methods: ["patch"],
    url: '/dashboard/schools/{school}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:97
* @route '/dashboard/schools/{school}'
*/
update7bf1d760f81c98a634e8d13339ffa7d4.url = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { school: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: typeof args.school === 'object'
        ? args.school.uuid
        : args.school,
    }

    return update7bf1d760f81c98a634e8d13339ffa7d4.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:97
* @route '/dashboard/schools/{school}'
*/
update7bf1d760f81c98a634e8d13339ffa7d4.patch = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update7bf1d760f81c98a634e8d13339ffa7d4.url(args, options),
    method: 'patch',
})

export const update = {
    '/dashboard/schools/{school}': update7bf1d760f81c98a634e8d13339ffa7d4,
    '/dashboard/schools/{school}': update7bf1d760f81c98a634e8d13339ffa7d4,
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:133
* @route '/dashboard/schools/{school}/toggle-status'
*/
export const toggleStatus = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

toggleStatus.definition = {
    methods: ["put"],
    url: '/dashboard/schools/{school}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:133
* @route '/dashboard/schools/{school}/toggle-status'
*/
toggleStatus.url = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { school: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: typeof args.school === 'object'
        ? args.school.uuid
        : args.school,
    }

    return toggleStatus.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:133
* @route '/dashboard/schools/{school}/toggle-status'
*/
toggleStatus.put = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:109
* @route '/dashboard/schools/{school}/delete'
*/
export const confirmDelete = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/schools/{school}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:109
* @route '/dashboard/schools/{school}/delete'
*/
confirmDelete.url = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { school: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: typeof args.school === 'object'
        ? args.school.uuid
        : args.school,
    }

    return confirmDelete.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:109
* @route '/dashboard/schools/{school}/delete'
*/
confirmDelete.get = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:109
* @route '/dashboard/schools/{school}/delete'
*/
confirmDelete.head = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:121
* @route '/dashboard/schools/{school}'
*/
export const destroy = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/schools/{school}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:121
* @route '/dashboard/schools/{school}'
*/
destroy.url = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { school: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: typeof args.school === 'object'
        ? args.school.uuid
        : args.school,
    }

    return destroy.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:121
* @route '/dashboard/schools/{school}'
*/
destroy.delete = (args: { school: string | { uuid: string } } | [school: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const SchoolController = { create, store, index, show, edit, update, toggleStatus, confirmDelete, destroy }

export default SchoolController