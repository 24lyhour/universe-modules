import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:168
* @route '/dashboard/departments/{department}/qr-code'
*/
export const qrCode = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qrCode.url(args, options),
    method: 'get',
})

qrCode.definition = {
    methods: ["get","head"],
    url: '/dashboard/departments/{department}/qr-code',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:168
* @route '/dashboard/departments/{department}/qr-code'
*/
qrCode.url = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { department: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            department: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        department: typeof args.department === 'object'
        ? args.department.id
        : args.department,
    }

    return qrCode.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:168
* @route '/dashboard/departments/{department}/qr-code'
*/
qrCode.get = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: qrCode.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:168
* @route '/dashboard/departments/{department}/qr-code'
*/
qrCode.head = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: qrCode.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:168
* @route '/dashboard/departments/{department}/qr-code'
*/
const qrCodeForm = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: qrCode.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:168
* @route '/dashboard/departments/{department}/qr-code'
*/
qrCodeForm.get = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: qrCode.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::qrCode
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:168
* @route '/dashboard/departments/{department}/qr-code'
*/
qrCodeForm.head = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:54
* @route '/dashboard/departments/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/departments/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:54
* @route '/dashboard/departments/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:54
* @route '/dashboard/departments/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:54
* @route '/dashboard/departments/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:54
* @route '/dashboard/departments/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:54
* @route '/dashboard/departments/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:54
* @route '/dashboard/departments/create'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:65
* @route '/dashboard/departments'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/departments',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:65
* @route '/dashboard/departments'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:65
* @route '/dashboard/departments'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:65
* @route '/dashboard/departments'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:65
* @route '/dashboard/departments'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:41
* @route '/dashboard/departments'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/departments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:41
* @route '/dashboard/departments'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:41
* @route '/dashboard/departments'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:41
* @route '/dashboard/departments'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:41
* @route '/dashboard/departments'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:41
* @route '/dashboard/departments'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:41
* @route '/dashboard/departments'
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::getDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:148
* @route '/dashboard/api/departments'
*/
export const getDepartments = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDepartments.url(options),
    method: 'get',
})

getDepartments.definition = {
    methods: ["get","head"],
    url: '/dashboard/api/departments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::getDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:148
* @route '/dashboard/api/departments'
*/
getDepartments.url = (options?: RouteQueryOptions) => {
    return getDepartments.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::getDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:148
* @route '/dashboard/api/departments'
*/
getDepartments.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDepartments.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::getDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:148
* @route '/dashboard/api/departments'
*/
getDepartments.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getDepartments.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::getDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:148
* @route '/dashboard/api/departments'
*/
const getDepartmentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getDepartments.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::getDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:148
* @route '/dashboard/api/departments'
*/
getDepartmentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getDepartments.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::getDepartments
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:148
* @route '/dashboard/api/departments'
*/
getDepartmentsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: getDepartments.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

getDepartments.form = getDepartmentsForm

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:77
* @route '/dashboard/departments/{department}'
*/
export const show = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/departments/{department}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:77
* @route '/dashboard/departments/{department}'
*/
show.url = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { department: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            department: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        department: typeof args.department === 'object'
        ? args.department.id
        : args.department,
    }

    return show.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:77
* @route '/dashboard/departments/{department}'
*/
show.get = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:77
* @route '/dashboard/departments/{department}'
*/
show.head = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:77
* @route '/dashboard/departments/{department}'
*/
const showForm = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:77
* @route '/dashboard/departments/{department}'
*/
showForm.get = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:77
* @route '/dashboard/departments/{department}'
*/
showForm.head = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:87
* @route '/dashboard/departments/{department}/edit'
*/
export const edit = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/departments/{department}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:87
* @route '/dashboard/departments/{department}/edit'
*/
edit.url = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { department: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            department: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        department: typeof args.department === 'object'
        ? args.department.id
        : args.department,
    }

    return edit.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:87
* @route '/dashboard/departments/{department}/edit'
*/
edit.get = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:87
* @route '/dashboard/departments/{department}/edit'
*/
edit.head = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:87
* @route '/dashboard/departments/{department}/edit'
*/
const editForm = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:87
* @route '/dashboard/departments/{department}/edit'
*/
editForm.get = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:87
* @route '/dashboard/departments/{department}/edit'
*/
editForm.head = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:98
* @route '/dashboard/departments/{department}'
*/
const update72872a0d0bc1a79cf184f4176464fbae = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update72872a0d0bc1a79cf184f4176464fbae.url(args, options),
    method: 'put',
})

update72872a0d0bc1a79cf184f4176464fbae.definition = {
    methods: ["put"],
    url: '/dashboard/departments/{department}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:98
* @route '/dashboard/departments/{department}'
*/
update72872a0d0bc1a79cf184f4176464fbae.url = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { department: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            department: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        department: typeof args.department === 'object'
        ? args.department.id
        : args.department,
    }

    return update72872a0d0bc1a79cf184f4176464fbae.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:98
* @route '/dashboard/departments/{department}'
*/
update72872a0d0bc1a79cf184f4176464fbae.put = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update72872a0d0bc1a79cf184f4176464fbae.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:98
* @route '/dashboard/departments/{department}'
*/
const update72872a0d0bc1a79cf184f4176464fbaeForm = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update72872a0d0bc1a79cf184f4176464fbae.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:98
* @route '/dashboard/departments/{department}'
*/
update72872a0d0bc1a79cf184f4176464fbaeForm.put = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update72872a0d0bc1a79cf184f4176464fbae.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update72872a0d0bc1a79cf184f4176464fbae.form = update72872a0d0bc1a79cf184f4176464fbaeForm
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:98
* @route '/dashboard/departments/{department}'
*/
const update72872a0d0bc1a79cf184f4176464fbae = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update72872a0d0bc1a79cf184f4176464fbae.url(args, options),
    method: 'patch',
})

update72872a0d0bc1a79cf184f4176464fbae.definition = {
    methods: ["patch"],
    url: '/dashboard/departments/{department}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:98
* @route '/dashboard/departments/{department}'
*/
update72872a0d0bc1a79cf184f4176464fbae.url = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { department: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            department: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        department: typeof args.department === 'object'
        ? args.department.id
        : args.department,
    }

    return update72872a0d0bc1a79cf184f4176464fbae.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:98
* @route '/dashboard/departments/{department}'
*/
update72872a0d0bc1a79cf184f4176464fbae.patch = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update72872a0d0bc1a79cf184f4176464fbae.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:98
* @route '/dashboard/departments/{department}'
*/
const update72872a0d0bc1a79cf184f4176464fbaeForm = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update72872a0d0bc1a79cf184f4176464fbae.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:98
* @route '/dashboard/departments/{department}'
*/
update72872a0d0bc1a79cf184f4176464fbaeForm.patch = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update72872a0d0bc1a79cf184f4176464fbae.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update72872a0d0bc1a79cf184f4176464fbae.form = update72872a0d0bc1a79cf184f4176464fbaeForm

export const update = {
    '/dashboard/departments/{department}': update72872a0d0bc1a79cf184f4176464fbae,
    '/dashboard/departments/{department}': update72872a0d0bc1a79cf184f4176464fbae,
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:134
* @route '/dashboard/departments/{department}/toggle-status'
*/
export const toggleStatus = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

toggleStatus.definition = {
    methods: ["put"],
    url: '/dashboard/departments/{department}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:134
* @route '/dashboard/departments/{department}/toggle-status'
*/
toggleStatus.url = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { department: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            department: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        department: typeof args.department === 'object'
        ? args.department.id
        : args.department,
    }

    return toggleStatus.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:134
* @route '/dashboard/departments/{department}/toggle-status'
*/
toggleStatus.put = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:134
* @route '/dashboard/departments/{department}/toggle-status'
*/
const toggleStatusForm = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:134
* @route '/dashboard/departments/{department}/toggle-status'
*/
toggleStatusForm.put = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:110
* @route '/dashboard/departments/{department}/delete'
*/
export const confirmDelete = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/departments/{department}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:110
* @route '/dashboard/departments/{department}/delete'
*/
confirmDelete.url = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { department: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            department: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        department: typeof args.department === 'object'
        ? args.department.id
        : args.department,
    }

    return confirmDelete.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:110
* @route '/dashboard/departments/{department}/delete'
*/
confirmDelete.get = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:110
* @route '/dashboard/departments/{department}/delete'
*/
confirmDelete.head = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:110
* @route '/dashboard/departments/{department}/delete'
*/
const confirmDeleteForm = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:110
* @route '/dashboard/departments/{department}/delete'
*/
confirmDeleteForm.get = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:110
* @route '/dashboard/departments/{department}/delete'
*/
confirmDeleteForm.head = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:122
* @route '/dashboard/departments/{department}'
*/
export const destroy = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/departments/{department}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:122
* @route '/dashboard/departments/{department}'
*/
destroy.url = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { department: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { department: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            department: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        department: typeof args.department === 'object'
        ? args.department.id
        : args.department,
    }

    return destroy.definition.url
            .replace('{department}', parsedArgs.department.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:122
* @route '/dashboard/departments/{department}'
*/
destroy.delete = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:122
* @route '/dashboard/departments/{department}'
*/
const destroyForm = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\DepartmentController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/DepartmentController.php:122
* @route '/dashboard/departments/{department}'
*/
destroyForm.delete = (args: { department: number | { id: number } } | [department: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const DepartmentController = { qrCode, create, store, index, getDepartments, show, edit, update, toggleStatus, confirmDelete, destroy }

export default DepartmentController