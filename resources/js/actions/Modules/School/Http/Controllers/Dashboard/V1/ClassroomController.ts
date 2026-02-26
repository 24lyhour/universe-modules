import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:147
* @route '/dashboard/classrooms/{classroom}/qr-code'
*/
export const qrCode = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qrCode.url(args, options),
    method: 'get',
})

qrCode.definition = {
    methods: ["get","head"],
    url: '/dashboard/classrooms/{classroom}/qr-code',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:147
* @route '/dashboard/classrooms/{classroom}/qr-code'
*/
qrCode.url = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { classroom: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { classroom: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            classroom: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        classroom: typeof args.classroom === 'object'
        ? args.classroom.uuid
        : args.classroom,
    }

    return qrCode.definition.url
            .replace('{classroom}', parsedArgs.classroom.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:147
* @route '/dashboard/classrooms/{classroom}/qr-code'
*/
qrCode.get = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qrCode.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:147
* @route '/dashboard/classrooms/{classroom}/qr-code'
*/
qrCode.head = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: qrCode.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:147
* @route '/dashboard/classrooms/{classroom}/qr-code'
*/
const qrCodeForm = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: qrCode.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:147
* @route '/dashboard/classrooms/{classroom}/qr-code'
*/
qrCodeForm.get = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: qrCode.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:147
* @route '/dashboard/classrooms/{classroom}/qr-code'
*/
qrCodeForm.head = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: qrCode.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

qrCode.form = qrCodeForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:53
* @route '/dashboard/classrooms/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/classrooms/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:53
* @route '/dashboard/classrooms/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:53
* @route '/dashboard/classrooms/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:53
* @route '/dashboard/classrooms/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:53
* @route '/dashboard/classrooms/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:53
* @route '/dashboard/classrooms/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:53
* @route '/dashboard/classrooms/create'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:64
* @route '/dashboard/classrooms'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/classrooms',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:64
* @route '/dashboard/classrooms'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:64
* @route '/dashboard/classrooms'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:64
* @route '/dashboard/classrooms'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:64
* @route '/dashboard/classrooms'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:40
* @route '/dashboard/classrooms'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/classrooms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:40
* @route '/dashboard/classrooms'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:40
* @route '/dashboard/classrooms'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:40
* @route '/dashboard/classrooms'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:40
* @route '/dashboard/classrooms'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:40
* @route '/dashboard/classrooms'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:40
* @route '/dashboard/classrooms'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:76
* @route '/dashboard/classrooms/{classroom}'
*/
export const show = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/classrooms/{classroom}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:76
* @route '/dashboard/classrooms/{classroom}'
*/
show.url = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { classroom: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { classroom: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            classroom: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        classroom: typeof args.classroom === 'object'
        ? args.classroom.uuid
        : args.classroom,
    }

    return show.definition.url
            .replace('{classroom}', parsedArgs.classroom.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:76
* @route '/dashboard/classrooms/{classroom}'
*/
show.get = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:76
* @route '/dashboard/classrooms/{classroom}'
*/
show.head = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:76
* @route '/dashboard/classrooms/{classroom}'
*/
const showForm = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:76
* @route '/dashboard/classrooms/{classroom}'
*/
showForm.get = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:76
* @route '/dashboard/classrooms/{classroom}'
*/
showForm.head = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:86
* @route '/dashboard/classrooms/{classroom}/edit'
*/
export const edit = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/classrooms/{classroom}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:86
* @route '/dashboard/classrooms/{classroom}/edit'
*/
edit.url = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { classroom: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { classroom: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            classroom: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        classroom: typeof args.classroom === 'object'
        ? args.classroom.uuid
        : args.classroom,
    }

    return edit.definition.url
            .replace('{classroom}', parsedArgs.classroom.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:86
* @route '/dashboard/classrooms/{classroom}/edit'
*/
edit.get = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:86
* @route '/dashboard/classrooms/{classroom}/edit'
*/
edit.head = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:86
* @route '/dashboard/classrooms/{classroom}/edit'
*/
const editForm = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:86
* @route '/dashboard/classrooms/{classroom}/edit'
*/
editForm.get = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:86
* @route '/dashboard/classrooms/{classroom}/edit'
*/
editForm.head = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:97
* @route '/dashboard/classrooms/{classroom}'
*/
const updatea96892df7f47b6af7b923267131dc165 = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatea96892df7f47b6af7b923267131dc165.url(args, options),
    method: 'put',
})

updatea96892df7f47b6af7b923267131dc165.definition = {
    methods: ["put"],
    url: '/dashboard/classrooms/{classroom}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:97
* @route '/dashboard/classrooms/{classroom}'
*/
updatea96892df7f47b6af7b923267131dc165.url = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { classroom: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { classroom: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            classroom: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        classroom: typeof args.classroom === 'object'
        ? args.classroom.uuid
        : args.classroom,
    }

    return updatea96892df7f47b6af7b923267131dc165.definition.url
            .replace('{classroom}', parsedArgs.classroom.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:97
* @route '/dashboard/classrooms/{classroom}'
*/
updatea96892df7f47b6af7b923267131dc165.put = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatea96892df7f47b6af7b923267131dc165.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:97
* @route '/dashboard/classrooms/{classroom}'
*/
const updatea96892df7f47b6af7b923267131dc165Form = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatea96892df7f47b6af7b923267131dc165.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:97
* @route '/dashboard/classrooms/{classroom}'
*/
updatea96892df7f47b6af7b923267131dc165Form.put = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatea96892df7f47b6af7b923267131dc165.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatea96892df7f47b6af7b923267131dc165.form = updatea96892df7f47b6af7b923267131dc165Form
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:97
* @route '/dashboard/classrooms/{classroom}'
*/
const updatea96892df7f47b6af7b923267131dc165 = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatea96892df7f47b6af7b923267131dc165.url(args, options),
    method: 'patch',
})

updatea96892df7f47b6af7b923267131dc165.definition = {
    methods: ["patch"],
    url: '/dashboard/classrooms/{classroom}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:97
* @route '/dashboard/classrooms/{classroom}'
*/
updatea96892df7f47b6af7b923267131dc165.url = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { classroom: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { classroom: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            classroom: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        classroom: typeof args.classroom === 'object'
        ? args.classroom.uuid
        : args.classroom,
    }

    return updatea96892df7f47b6af7b923267131dc165.definition.url
            .replace('{classroom}', parsedArgs.classroom.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:97
* @route '/dashboard/classrooms/{classroom}'
*/
updatea96892df7f47b6af7b923267131dc165.patch = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatea96892df7f47b6af7b923267131dc165.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:97
* @route '/dashboard/classrooms/{classroom}'
*/
const updatea96892df7f47b6af7b923267131dc165Form = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatea96892df7f47b6af7b923267131dc165.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:97
* @route '/dashboard/classrooms/{classroom}'
*/
updatea96892df7f47b6af7b923267131dc165Form.patch = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatea96892df7f47b6af7b923267131dc165.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatea96892df7f47b6af7b923267131dc165.form = updatea96892df7f47b6af7b923267131dc165Form

export const update = {
    '/dashboard/classrooms/{classroom}': updatea96892df7f47b6af7b923267131dc165,
    '/dashboard/classrooms/{classroom}': updatea96892df7f47b6af7b923267131dc165,
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:133
* @route '/dashboard/classrooms/{classroom}/toggle-status'
*/
export const toggleStatus = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

toggleStatus.definition = {
    methods: ["put"],
    url: '/dashboard/classrooms/{classroom}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:133
* @route '/dashboard/classrooms/{classroom}/toggle-status'
*/
toggleStatus.url = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { classroom: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { classroom: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            classroom: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        classroom: typeof args.classroom === 'object'
        ? args.classroom.uuid
        : args.classroom,
    }

    return toggleStatus.definition.url
            .replace('{classroom}', parsedArgs.classroom.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:133
* @route '/dashboard/classrooms/{classroom}/toggle-status'
*/
toggleStatus.put = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:133
* @route '/dashboard/classrooms/{classroom}/toggle-status'
*/
const toggleStatusForm = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:133
* @route '/dashboard/classrooms/{classroom}/toggle-status'
*/
toggleStatusForm.put = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:109
* @route '/dashboard/classrooms/{classroom}/delete'
*/
export const confirmDelete = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/classrooms/{classroom}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:109
* @route '/dashboard/classrooms/{classroom}/delete'
*/
confirmDelete.url = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { classroom: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { classroom: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            classroom: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        classroom: typeof args.classroom === 'object'
        ? args.classroom.uuid
        : args.classroom,
    }

    return confirmDelete.definition.url
            .replace('{classroom}', parsedArgs.classroom.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:109
* @route '/dashboard/classrooms/{classroom}/delete'
*/
confirmDelete.get = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:109
* @route '/dashboard/classrooms/{classroom}/delete'
*/
confirmDelete.head = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:109
* @route '/dashboard/classrooms/{classroom}/delete'
*/
const confirmDeleteForm = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:109
* @route '/dashboard/classrooms/{classroom}/delete'
*/
confirmDeleteForm.get = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:109
* @route '/dashboard/classrooms/{classroom}/delete'
*/
confirmDeleteForm.head = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:121
* @route '/dashboard/classrooms/{classroom}'
*/
export const destroy = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/classrooms/{classroom}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:121
* @route '/dashboard/classrooms/{classroom}'
*/
destroy.url = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { classroom: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { classroom: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            classroom: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        classroom: typeof args.classroom === 'object'
        ? args.classroom.uuid
        : args.classroom,
    }

    return destroy.definition.url
            .replace('{classroom}', parsedArgs.classroom.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:121
* @route '/dashboard/classrooms/{classroom}'
*/
destroy.delete = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:121
* @route '/dashboard/classrooms/{classroom}'
*/
const destroyForm = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ClassroomController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ClassroomController.php:121
* @route '/dashboard/classrooms/{classroom}'
*/
destroyForm.delete = (args: { classroom: string | { uuid: string } } | [classroom: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const ClassroomController = { qrCode, create, store, index, show, edit, update, toggleStatus, confirmDelete, destroy }

export default ClassroomController