import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\School\Http\Controllers\SchoolController::index
* @see Modules/School/app/Http/Controllers/SchoolController.php:13
* @route '/api/v1/schools'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/schools',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::index
* @see Modules/School/app/Http/Controllers/SchoolController.php:13
* @route '/api/v1/schools'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::index
* @see Modules/School/app/Http/Controllers/SchoolController.php:13
* @route '/api/v1/schools'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::index
* @see Modules/School/app/Http/Controllers/SchoolController.php:13
* @route '/api/v1/schools'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::store
* @see Modules/School/app/Http/Controllers/SchoolController.php:29
* @route '/api/v1/schools'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/schools',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::store
* @see Modules/School/app/Http/Controllers/SchoolController.php:29
* @route '/api/v1/schools'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::store
* @see Modules/School/app/Http/Controllers/SchoolController.php:29
* @route '/api/v1/schools'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::show
* @see Modules/School/app/Http/Controllers/SchoolController.php:34
* @route '/api/v1/schools/{school}'
*/
export const show = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/schools/{school}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::show
* @see Modules/School/app/Http/Controllers/SchoolController.php:34
* @route '/api/v1/schools/{school}'
*/
show.url = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: args.school,
    }

    return show.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::show
* @see Modules/School/app/Http/Controllers/SchoolController.php:34
* @route '/api/v1/schools/{school}'
*/
show.get = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::show
* @see Modules/School/app/Http/Controllers/SchoolController.php:34
* @route '/api/v1/schools/{school}'
*/
show.head = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::update
* @see Modules/School/app/Http/Controllers/SchoolController.php:50
* @route '/api/v1/schools/{school}'
*/
export const update = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/schools/{school}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::update
* @see Modules/School/app/Http/Controllers/SchoolController.php:50
* @route '/api/v1/schools/{school}'
*/
update.url = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: args.school,
    }

    return update.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::update
* @see Modules/School/app/Http/Controllers/SchoolController.php:50
* @route '/api/v1/schools/{school}'
*/
update.put = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::update
* @see Modules/School/app/Http/Controllers/SchoolController.php:50
* @route '/api/v1/schools/{school}'
*/
update.patch = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/SchoolController.php:55
* @route '/api/v1/schools/{school}'
*/
export const destroy = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/schools/{school}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/SchoolController.php:55
* @route '/api/v1/schools/{school}'
*/
destroy.url = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: args.school,
    }

    return destroy.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/SchoolController.php:55
* @route '/api/v1/schools/{school}'
*/
destroy.delete = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const school = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default school