import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\School\Http\Controllers\SchoolController::index
* @see Modules/School/app/Http/Controllers/SchoolController.php:13
* @route '/api/v1/schools'
*/
const indexf105ca6ece80e5bf7d5c197953568e6e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexf105ca6ece80e5bf7d5c197953568e6e.url(options),
    method: 'get',
})

indexf105ca6ece80e5bf7d5c197953568e6e.definition = {
    methods: ["get","head"],
    url: '/api/v1/schools',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::index
* @see Modules/School/app/Http/Controllers/SchoolController.php:13
* @route '/api/v1/schools'
*/
indexf105ca6ece80e5bf7d5c197953568e6e.url = (options?: RouteQueryOptions) => {
    return indexf105ca6ece80e5bf7d5c197953568e6e.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::index
* @see Modules/School/app/Http/Controllers/SchoolController.php:13
* @route '/api/v1/schools'
*/
indexf105ca6ece80e5bf7d5c197953568e6e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexf105ca6ece80e5bf7d5c197953568e6e.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::index
* @see Modules/School/app/Http/Controllers/SchoolController.php:13
* @route '/api/v1/schools'
*/
indexf105ca6ece80e5bf7d5c197953568e6e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexf105ca6ece80e5bf7d5c197953568e6e.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::index
* @see Modules/School/app/Http/Controllers/SchoolController.php:13
* @route '/schools'
*/
const index8dac6d9258c000a5f8adebbc9992b510 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index8dac6d9258c000a5f8adebbc9992b510.url(options),
    method: 'get',
})

index8dac6d9258c000a5f8adebbc9992b510.definition = {
    methods: ["get","head"],
    url: '/schools',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::index
* @see Modules/School/app/Http/Controllers/SchoolController.php:13
* @route '/schools'
*/
index8dac6d9258c000a5f8adebbc9992b510.url = (options?: RouteQueryOptions) => {
    return index8dac6d9258c000a5f8adebbc9992b510.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::index
* @see Modules/School/app/Http/Controllers/SchoolController.php:13
* @route '/schools'
*/
index8dac6d9258c000a5f8adebbc9992b510.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index8dac6d9258c000a5f8adebbc9992b510.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::index
* @see Modules/School/app/Http/Controllers/SchoolController.php:13
* @route '/schools'
*/
index8dac6d9258c000a5f8adebbc9992b510.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index8dac6d9258c000a5f8adebbc9992b510.url(options),
    method: 'head',
})

export const index = {
    '/api/v1/schools': indexf105ca6ece80e5bf7d5c197953568e6e,
    '/schools': index8dac6d9258c000a5f8adebbc9992b510,
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::store
* @see Modules/School/app/Http/Controllers/SchoolController.php:29
* @route '/api/v1/schools'
*/
const storef105ca6ece80e5bf7d5c197953568e6e = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storef105ca6ece80e5bf7d5c197953568e6e.url(options),
    method: 'post',
})

storef105ca6ece80e5bf7d5c197953568e6e.definition = {
    methods: ["post"],
    url: '/api/v1/schools',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::store
* @see Modules/School/app/Http/Controllers/SchoolController.php:29
* @route '/api/v1/schools'
*/
storef105ca6ece80e5bf7d5c197953568e6e.url = (options?: RouteQueryOptions) => {
    return storef105ca6ece80e5bf7d5c197953568e6e.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::store
* @see Modules/School/app/Http/Controllers/SchoolController.php:29
* @route '/api/v1/schools'
*/
storef105ca6ece80e5bf7d5c197953568e6e.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storef105ca6ece80e5bf7d5c197953568e6e.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::store
* @see Modules/School/app/Http/Controllers/SchoolController.php:29
* @route '/schools'
*/
const store8dac6d9258c000a5f8adebbc9992b510 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store8dac6d9258c000a5f8adebbc9992b510.url(options),
    method: 'post',
})

store8dac6d9258c000a5f8adebbc9992b510.definition = {
    methods: ["post"],
    url: '/schools',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::store
* @see Modules/School/app/Http/Controllers/SchoolController.php:29
* @route '/schools'
*/
store8dac6d9258c000a5f8adebbc9992b510.url = (options?: RouteQueryOptions) => {
    return store8dac6d9258c000a5f8adebbc9992b510.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::store
* @see Modules/School/app/Http/Controllers/SchoolController.php:29
* @route '/schools'
*/
store8dac6d9258c000a5f8adebbc9992b510.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store8dac6d9258c000a5f8adebbc9992b510.url(options),
    method: 'post',
})

export const store = {
    '/api/v1/schools': storef105ca6ece80e5bf7d5c197953568e6e,
    '/schools': store8dac6d9258c000a5f8adebbc9992b510,
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::show
* @see Modules/School/app/Http/Controllers/SchoolController.php:34
* @route '/api/v1/schools/{school}'
*/
const showd78853dbb2ce3621ee3c4ade5dd3c3d7 = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showd78853dbb2ce3621ee3c4ade5dd3c3d7.url(args, options),
    method: 'get',
})

showd78853dbb2ce3621ee3c4ade5dd3c3d7.definition = {
    methods: ["get","head"],
    url: '/api/v1/schools/{school}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::show
* @see Modules/School/app/Http/Controllers/SchoolController.php:34
* @route '/api/v1/schools/{school}'
*/
showd78853dbb2ce3621ee3c4ade5dd3c3d7.url = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showd78853dbb2ce3621ee3c4ade5dd3c3d7.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::show
* @see Modules/School/app/Http/Controllers/SchoolController.php:34
* @route '/api/v1/schools/{school}'
*/
showd78853dbb2ce3621ee3c4ade5dd3c3d7.get = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showd78853dbb2ce3621ee3c4ade5dd3c3d7.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::show
* @see Modules/School/app/Http/Controllers/SchoolController.php:34
* @route '/api/v1/schools/{school}'
*/
showd78853dbb2ce3621ee3c4ade5dd3c3d7.head = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showd78853dbb2ce3621ee3c4ade5dd3c3d7.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::show
* @see Modules/School/app/Http/Controllers/SchoolController.php:34
* @route '/schools/{school}'
*/
const showf0df42e6cfc3445af40541aaa030930a = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showf0df42e6cfc3445af40541aaa030930a.url(args, options),
    method: 'get',
})

showf0df42e6cfc3445af40541aaa030930a.definition = {
    methods: ["get","head"],
    url: '/schools/{school}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::show
* @see Modules/School/app/Http/Controllers/SchoolController.php:34
* @route '/schools/{school}'
*/
showf0df42e6cfc3445af40541aaa030930a.url = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showf0df42e6cfc3445af40541aaa030930a.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::show
* @see Modules/School/app/Http/Controllers/SchoolController.php:34
* @route '/schools/{school}'
*/
showf0df42e6cfc3445af40541aaa030930a.get = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showf0df42e6cfc3445af40541aaa030930a.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::show
* @see Modules/School/app/Http/Controllers/SchoolController.php:34
* @route '/schools/{school}'
*/
showf0df42e6cfc3445af40541aaa030930a.head = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showf0df42e6cfc3445af40541aaa030930a.url(args, options),
    method: 'head',
})

export const show = {
    '/api/v1/schools/{school}': showd78853dbb2ce3621ee3c4ade5dd3c3d7,
    '/schools/{school}': showf0df42e6cfc3445af40541aaa030930a,
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::update
* @see Modules/School/app/Http/Controllers/SchoolController.php:50
* @route '/api/v1/schools/{school}'
*/
const updated78853dbb2ce3621ee3c4ade5dd3c3d7 = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updated78853dbb2ce3621ee3c4ade5dd3c3d7.url(args, options),
    method: 'put',
})

updated78853dbb2ce3621ee3c4ade5dd3c3d7.definition = {
    methods: ["put","patch"],
    url: '/api/v1/schools/{school}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::update
* @see Modules/School/app/Http/Controllers/SchoolController.php:50
* @route '/api/v1/schools/{school}'
*/
updated78853dbb2ce3621ee3c4ade5dd3c3d7.url = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updated78853dbb2ce3621ee3c4ade5dd3c3d7.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::update
* @see Modules/School/app/Http/Controllers/SchoolController.php:50
* @route '/api/v1/schools/{school}'
*/
updated78853dbb2ce3621ee3c4ade5dd3c3d7.put = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updated78853dbb2ce3621ee3c4ade5dd3c3d7.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::update
* @see Modules/School/app/Http/Controllers/SchoolController.php:50
* @route '/api/v1/schools/{school}'
*/
updated78853dbb2ce3621ee3c4ade5dd3c3d7.patch = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updated78853dbb2ce3621ee3c4ade5dd3c3d7.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::update
* @see Modules/School/app/Http/Controllers/SchoolController.php:50
* @route '/schools/{school}'
*/
const updatef0df42e6cfc3445af40541aaa030930a = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatef0df42e6cfc3445af40541aaa030930a.url(args, options),
    method: 'put',
})

updatef0df42e6cfc3445af40541aaa030930a.definition = {
    methods: ["put","patch"],
    url: '/schools/{school}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::update
* @see Modules/School/app/Http/Controllers/SchoolController.php:50
* @route '/schools/{school}'
*/
updatef0df42e6cfc3445af40541aaa030930a.url = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updatef0df42e6cfc3445af40541aaa030930a.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::update
* @see Modules/School/app/Http/Controllers/SchoolController.php:50
* @route '/schools/{school}'
*/
updatef0df42e6cfc3445af40541aaa030930a.put = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatef0df42e6cfc3445af40541aaa030930a.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::update
* @see Modules/School/app/Http/Controllers/SchoolController.php:50
* @route '/schools/{school}'
*/
updatef0df42e6cfc3445af40541aaa030930a.patch = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatef0df42e6cfc3445af40541aaa030930a.url(args, options),
    method: 'patch',
})

export const update = {
    '/api/v1/schools/{school}': updated78853dbb2ce3621ee3c4ade5dd3c3d7,
    '/schools/{school}': updatef0df42e6cfc3445af40541aaa030930a,
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/SchoolController.php:55
* @route '/api/v1/schools/{school}'
*/
const destroyd78853dbb2ce3621ee3c4ade5dd3c3d7 = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyd78853dbb2ce3621ee3c4ade5dd3c3d7.url(args, options),
    method: 'delete',
})

destroyd78853dbb2ce3621ee3c4ade5dd3c3d7.definition = {
    methods: ["delete"],
    url: '/api/v1/schools/{school}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/SchoolController.php:55
* @route '/api/v1/schools/{school}'
*/
destroyd78853dbb2ce3621ee3c4ade5dd3c3d7.url = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroyd78853dbb2ce3621ee3c4ade5dd3c3d7.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/SchoolController.php:55
* @route '/api/v1/schools/{school}'
*/
destroyd78853dbb2ce3621ee3c4ade5dd3c3d7.delete = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyd78853dbb2ce3621ee3c4ade5dd3c3d7.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/SchoolController.php:55
* @route '/schools/{school}'
*/
const destroyf0df42e6cfc3445af40541aaa030930a = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyf0df42e6cfc3445af40541aaa030930a.url(args, options),
    method: 'delete',
})

destroyf0df42e6cfc3445af40541aaa030930a.definition = {
    methods: ["delete"],
    url: '/schools/{school}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/SchoolController.php:55
* @route '/schools/{school}'
*/
destroyf0df42e6cfc3445af40541aaa030930a.url = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroyf0df42e6cfc3445af40541aaa030930a.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/SchoolController.php:55
* @route '/schools/{school}'
*/
destroyf0df42e6cfc3445af40541aaa030930a.delete = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyf0df42e6cfc3445af40541aaa030930a.url(args, options),
    method: 'delete',
})

export const destroy = {
    '/api/v1/schools/{school}': destroyd78853dbb2ce3621ee3c4ade5dd3c3d7,
    '/schools/{school}': destroyf0df42e6cfc3445af40541aaa030930a,
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::create
* @see Modules/School/app/Http/Controllers/SchoolController.php:21
* @route '/schools/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/schools/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::create
* @see Modules/School/app/Http/Controllers/SchoolController.php:21
* @route '/schools/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::create
* @see Modules/School/app/Http/Controllers/SchoolController.php:21
* @route '/schools/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::create
* @see Modules/School/app/Http/Controllers/SchoolController.php:21
* @route '/schools/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::edit
* @see Modules/School/app/Http/Controllers/SchoolController.php:42
* @route '/schools/{school}/edit'
*/
export const edit = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/schools/{school}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::edit
* @see Modules/School/app/Http/Controllers/SchoolController.php:42
* @route '/schools/{school}/edit'
*/
edit.url = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::edit
* @see Modules/School/app/Http/Controllers/SchoolController.php:42
* @route '/schools/{school}/edit'
*/
edit.get = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::edit
* @see Modules/School/app/Http/Controllers/SchoolController.php:42
* @route '/schools/{school}/edit'
*/
edit.head = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

const SchoolController = { index, store, show, update, destroy, create, edit }

export default SchoolController