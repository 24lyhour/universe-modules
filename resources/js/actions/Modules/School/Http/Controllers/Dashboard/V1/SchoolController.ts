import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:55
* @route '/dashboard/schools/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:55
* @route '/dashboard/schools/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:55
* @route '/dashboard/schools/create'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:66
* @route '/dashboard/schools'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:66
* @route '/dashboard/schools'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

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
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:42
* @route '/dashboard/schools'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:42
* @route '/dashboard/schools'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:42
* @route '/dashboard/schools'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:78
* @route '/dashboard/schools/{school}'
*/
const showForm = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:78
* @route '/dashboard/schools/{school}'
*/
showForm.get = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:78
* @route '/dashboard/schools/{school}'
*/
showForm.head = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:88
* @route '/dashboard/schools/{school}/edit'
*/
const editForm = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:88
* @route '/dashboard/schools/{school}/edit'
*/
editForm.get = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:88
* @route '/dashboard/schools/{school}/edit'
*/
editForm.head = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:99
* @route '/dashboard/schools/{school}'
*/
const update7bf1d760f81c98a634e8d13339ffa7d4 = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update7bf1d760f81c98a634e8d13339ffa7d4.url(args, options),
    method: 'put',
})

update7bf1d760f81c98a634e8d13339ffa7d4.definition = {
    methods: ["put"],
    url: '/dashboard/schools/{school}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:99
* @route '/dashboard/schools/{school}'
*/
update7bf1d760f81c98a634e8d13339ffa7d4.url = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update7bf1d760f81c98a634e8d13339ffa7d4.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:99
* @route '/dashboard/schools/{school}'
*/
update7bf1d760f81c98a634e8d13339ffa7d4.put = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update7bf1d760f81c98a634e8d13339ffa7d4.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:99
* @route '/dashboard/schools/{school}'
*/
const update7bf1d760f81c98a634e8d13339ffa7d4Form = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update7bf1d760f81c98a634e8d13339ffa7d4.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:99
* @route '/dashboard/schools/{school}'
*/
update7bf1d760f81c98a634e8d13339ffa7d4Form.put = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update7bf1d760f81c98a634e8d13339ffa7d4.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update7bf1d760f81c98a634e8d13339ffa7d4.form = update7bf1d760f81c98a634e8d13339ffa7d4Form
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:99
* @route '/dashboard/schools/{school}'
*/
const update7bf1d760f81c98a634e8d13339ffa7d4 = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update7bf1d760f81c98a634e8d13339ffa7d4.url(args, options),
    method: 'patch',
})

update7bf1d760f81c98a634e8d13339ffa7d4.definition = {
    methods: ["patch"],
    url: '/dashboard/schools/{school}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:99
* @route '/dashboard/schools/{school}'
*/
update7bf1d760f81c98a634e8d13339ffa7d4.url = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update7bf1d760f81c98a634e8d13339ffa7d4.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:99
* @route '/dashboard/schools/{school}'
*/
update7bf1d760f81c98a634e8d13339ffa7d4.patch = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update7bf1d760f81c98a634e8d13339ffa7d4.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:99
* @route '/dashboard/schools/{school}'
*/
const update7bf1d760f81c98a634e8d13339ffa7d4Form = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update7bf1d760f81c98a634e8d13339ffa7d4.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:99
* @route '/dashboard/schools/{school}'
*/
update7bf1d760f81c98a634e8d13339ffa7d4Form.patch = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update7bf1d760f81c98a634e8d13339ffa7d4.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update7bf1d760f81c98a634e8d13339ffa7d4.form = update7bf1d760f81c98a634e8d13339ffa7d4Form

export const update = {
    '/dashboard/schools/{school}': update7bf1d760f81c98a634e8d13339ffa7d4,
    '/dashboard/schools/{school}': update7bf1d760f81c98a634e8d13339ffa7d4,
}

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
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:135
* @route '/dashboard/schools/{school}/toggle-status'
*/
const toggleStatusForm = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:135
* @route '/dashboard/schools/{school}/toggle-status'
*/
toggleStatusForm.put = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleStatus.form = toggleStatusForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:111
* @route '/dashboard/schools/{school}/delete'
*/
export const confirmDelete = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/schools/{school}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:111
* @route '/dashboard/schools/{school}/delete'
*/
confirmDelete.url = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return confirmDelete.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:111
* @route '/dashboard/schools/{school}/delete'
*/
confirmDelete.get = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:111
* @route '/dashboard/schools/{school}/delete'
*/
confirmDelete.head = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:111
* @route '/dashboard/schools/{school}/delete'
*/
const confirmDeleteForm = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:111
* @route '/dashboard/schools/{school}/delete'
*/
confirmDeleteForm.get = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:111
* @route '/dashboard/schools/{school}/delete'
*/
confirmDeleteForm.head = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

confirmDelete.form = confirmDeleteForm

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

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:123
* @route '/dashboard/schools/{school}'
*/
const destroyForm = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/SchoolController.php:123
* @route '/dashboard/schools/{school}'
*/
destroyForm.delete = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const SchoolController = { create, store, index, show, edit, update, toggleStatus, confirmDelete, destroy }

export default SchoolController