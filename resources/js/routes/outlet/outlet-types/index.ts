import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::index
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:18
* @route '/dashboard/outlet-types'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlet-types',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::index
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:18
* @route '/dashboard/outlet-types'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::index
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:18
* @route '/dashboard/outlet-types'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::index
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:18
* @route '/dashboard/outlet-types'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::index
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:18
* @route '/dashboard/outlet-types'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::index
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:18
* @route '/dashboard/outlet-types'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::index
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:18
* @route '/dashboard/outlet-types'
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
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::create
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:72
* @route '/dashboard/outlet-types/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlet-types/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::create
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:72
* @route '/dashboard/outlet-types/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::create
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:72
* @route '/dashboard/outlet-types/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::create
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:72
* @route '/dashboard/outlet-types/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::create
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:72
* @route '/dashboard/outlet-types/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::create
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:72
* @route '/dashboard/outlet-types/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::create
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:72
* @route '/dashboard/outlet-types/create'
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
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::store
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:81
* @route '/dashboard/outlet-types'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/outlet-types',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::store
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:81
* @route '/dashboard/outlet-types'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::store
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:81
* @route '/dashboard/outlet-types'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::store
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:81
* @route '/dashboard/outlet-types'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::store
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:81
* @route '/dashboard/outlet-types'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:103
* @route '/dashboard/outlet-types/{outlet_type}'
*/
export const show = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlet-types/{outlet_type}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:103
* @route '/dashboard/outlet-types/{outlet_type}'
*/
show.url = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            outlet_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet_type: args.outlet_type,
    }

    return show.definition.url
            .replace('{outlet_type}', parsedArgs.outlet_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:103
* @route '/dashboard/outlet-types/{outlet_type}'
*/
show.get = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:103
* @route '/dashboard/outlet-types/{outlet_type}'
*/
show.head = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:103
* @route '/dashboard/outlet-types/{outlet_type}'
*/
const showForm = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:103
* @route '/dashboard/outlet-types/{outlet_type}'
*/
showForm.get = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::show
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:103
* @route '/dashboard/outlet-types/{outlet_type}'
*/
showForm.head = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::edit
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:120
* @route '/dashboard/outlet-types/{outlet_type}/edit'
*/
export const edit = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlet-types/{outlet_type}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::edit
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:120
* @route '/dashboard/outlet-types/{outlet_type}/edit'
*/
edit.url = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            outlet_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet_type: args.outlet_type,
    }

    return edit.definition.url
            .replace('{outlet_type}', parsedArgs.outlet_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::edit
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:120
* @route '/dashboard/outlet-types/{outlet_type}/edit'
*/
edit.get = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::edit
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:120
* @route '/dashboard/outlet-types/{outlet_type}/edit'
*/
edit.head = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::edit
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:120
* @route '/dashboard/outlet-types/{outlet_type}/edit'
*/
const editForm = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::edit
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:120
* @route '/dashboard/outlet-types/{outlet_type}/edit'
*/
editForm.get = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::edit
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:120
* @route '/dashboard/outlet-types/{outlet_type}/edit'
*/
editForm.head = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:137
* @route '/dashboard/outlet-types/{outlet_type}'
*/
export const update = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/outlet-types/{outlet_type}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:137
* @route '/dashboard/outlet-types/{outlet_type}'
*/
update.url = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            outlet_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet_type: args.outlet_type,
    }

    return update.definition.url
            .replace('{outlet_type}', parsedArgs.outlet_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:137
* @route '/dashboard/outlet-types/{outlet_type}'
*/
update.put = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:137
* @route '/dashboard/outlet-types/{outlet_type}'
*/
update.patch = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:137
* @route '/dashboard/outlet-types/{outlet_type}'
*/
const updateForm = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:137
* @route '/dashboard/outlet-types/{outlet_type}'
*/
updateForm.put = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::update
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:137
* @route '/dashboard/outlet-types/{outlet_type}'
*/
updateForm.patch = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::destroy
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:176
* @route '/dashboard/outlet-types/{outlet_type}'
*/
export const destroy = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/outlet-types/{outlet_type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::destroy
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:176
* @route '/dashboard/outlet-types/{outlet_type}'
*/
destroy.url = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            outlet_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet_type: args.outlet_type,
    }

    return destroy.definition.url
            .replace('{outlet_type}', parsedArgs.outlet_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::destroy
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:176
* @route '/dashboard/outlet-types/{outlet_type}'
*/
destroy.delete = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::destroy
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:176
* @route '/dashboard/outlet-types/{outlet_type}'
*/
const destroyForm = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::destroy
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:176
* @route '/dashboard/outlet-types/{outlet_type}'
*/
destroyForm.delete = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::confirmDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:159
* @route '/dashboard/outlet-types/{outlet_type}/delete'
*/
export const confirmDelete = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlet-types/{outlet_type}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::confirmDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:159
* @route '/dashboard/outlet-types/{outlet_type}/delete'
*/
confirmDelete.url = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet_type: args }
    }

    if (Array.isArray(args)) {
        args = {
            outlet_type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet_type: args.outlet_type,
    }

    return confirmDelete.definition.url
            .replace('{outlet_type}', parsedArgs.outlet_type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::confirmDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:159
* @route '/dashboard/outlet-types/{outlet_type}/delete'
*/
confirmDelete.get = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::confirmDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:159
* @route '/dashboard/outlet-types/{outlet_type}/delete'
*/
confirmDelete.head = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::confirmDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:159
* @route '/dashboard/outlet-types/{outlet_type}/delete'
*/
const confirmDeleteForm = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::confirmDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:159
* @route '/dashboard/outlet-types/{outlet_type}/delete'
*/
confirmDeleteForm.get = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Dashboard\V1\TypeOutletDashboardController::confirmDelete
* @see Modules/Outlet/app/Http/Controllers/Dashboard/V1/TypeOutletDashboardController.php:159
* @route '/dashboard/outlet-types/{outlet_type}/delete'
*/
confirmDeleteForm.head = (args: { outlet_type: string | number } | [outlet_type: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

confirmDelete.form = confirmDeleteForm

const outletTypes = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    confirmDelete: Object.assign(confirmDelete, confirmDelete),
}

export default outletTypes