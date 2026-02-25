import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
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
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:66
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
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:66
* @route '/dashboard/schools'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:66
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
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:78
* @route '/dashboard/schools/{school}'
*/
export const show = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/schools/{school}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:78
* @route '/dashboard/schools/{school}'
*/
show.url = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { school: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: typeof args.school === 'object'
        ? args.school.id
        : args.school,
    }

    return show.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:78
* @route '/dashboard/schools/{school}'
*/
show.get = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:78
* @route '/dashboard/schools/{school}'
*/
show.head = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:88
* @route '/dashboard/schools/{school}/edit'
*/
export const edit = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/schools/{school}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:88
* @route '/dashboard/schools/{school}/edit'
*/
edit.url = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { school: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: typeof args.school === 'object'
        ? args.school.id
        : args.school,
    }

    return edit.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:88
* @route '/dashboard/schools/{school}/edit'
*/
edit.get = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:88
* @route '/dashboard/schools/{school}/edit'
*/
edit.head = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:99
* @route '/dashboard/schools/{school}'
*/
export const update = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/schools/{school}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:99
* @route '/dashboard/schools/{school}'
*/
update.url = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { school: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: typeof args.school === 'object'
        ? args.school.id
        : args.school,
    }

    return update.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:99
* @route '/dashboard/schools/{school}'
*/
update.put = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:135
* @route '/dashboard/schools/{school}/toggle-status'
*/
export const toggleStatus = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

toggleStatus.definition = {
    methods: ["put"],
    url: '/dashboard/schools/{school}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:135
* @route '/dashboard/schools/{school}/toggle-status'
*/
toggleStatus.url = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { school: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: typeof args.school === 'object'
        ? args.school.id
        : args.school,
    }

    return toggleStatus.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:135
* @route '/dashboard/schools/{school}/toggle-status'
*/
toggleStatus.put = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:111
* @route '/dashboard/schools/{school}/delete'
*/
export const deleteMethod = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

deleteMethod.definition = {
    methods: ["get","head"],
    url: '/dashboard/schools/{school}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:111
* @route '/dashboard/schools/{school}/delete'
*/
deleteMethod.url = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { school: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: typeof args.school === 'object'
        ? args.school.id
        : args.school,
    }

    return deleteMethod.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:111
* @route '/dashboard/schools/{school}/delete'
*/
deleteMethod.get = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deleteMethod.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::deleteMethod
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:111
* @route '/dashboard/schools/{school}/delete'
*/
deleteMethod.head = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deleteMethod.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:123
* @route '/dashboard/schools/{school}'
*/
export const destroy = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/schools/{school}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:123
* @route '/dashboard/schools/{school}'
*/
destroy.url = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { school: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: typeof args.school === 'object'
        ? args.school.id
        : args.school,
    }

    return destroy.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:123
* @route '/dashboard/schools/{school}'
*/
destroy.delete = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const schools = {
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    index: Object.assign(index, index),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    toggleStatus: Object.assign(toggleStatus, toggleStatus),
    delete: Object.assign(deleteMethod, deleteMethod),
    destroy: Object.assign(destroy, destroy),
}

export default schools