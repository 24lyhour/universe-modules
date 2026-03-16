import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::create
* @see [unknown]:0
* @route '/dashboard/experiences/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/experiences/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::create
* @see [unknown]:0
* @route '/dashboard/experiences/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::create
* @see [unknown]:0
* @route '/dashboard/experiences/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::create
* @see [unknown]:0
* @route '/dashboard/experiences/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::create
* @see [unknown]:0
* @route '/dashboard/experiences/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::create
* @see [unknown]:0
* @route '/dashboard/experiences/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::create
* @see [unknown]:0
* @route '/dashboard/experiences/create'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::store
* @see [unknown]:0
* @route '/dashboard/experiences'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/experiences',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::store
* @see [unknown]:0
* @route '/dashboard/experiences'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::store
* @see [unknown]:0
* @route '/dashboard/experiences'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::store
* @see [unknown]:0
* @route '/dashboard/experiences'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::store
* @see [unknown]:0
* @route '/dashboard/experiences'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::index
* @see [unknown]:0
* @route '/dashboard/experiences'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/experiences',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::index
* @see [unknown]:0
* @route '/dashboard/experiences'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::index
* @see [unknown]:0
* @route '/dashboard/experiences'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::index
* @see [unknown]:0
* @route '/dashboard/experiences'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::index
* @see [unknown]:0
* @route '/dashboard/experiences'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::index
* @see [unknown]:0
* @route '/dashboard/experiences'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::index
* @see [unknown]:0
* @route '/dashboard/experiences'
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::show
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}'
*/
export const show = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/experiences/{experience}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::show
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}'
*/
show.url = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { experience: args }
    }

    if (Array.isArray(args)) {
        args = {
            experience: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        experience: args.experience,
    }

    return show.definition.url
            .replace('{experience}', parsedArgs.experience.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::show
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}'
*/
show.get = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::show
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}'
*/
show.head = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::show
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}'
*/
const showForm = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::show
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}'
*/
showForm.get = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::show
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}'
*/
showForm.head = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::edit
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}/edit'
*/
export const edit = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/experiences/{experience}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::edit
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}/edit'
*/
edit.url = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { experience: args }
    }

    if (Array.isArray(args)) {
        args = {
            experience: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        experience: args.experience,
    }

    return edit.definition.url
            .replace('{experience}', parsedArgs.experience.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::edit
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}/edit'
*/
edit.get = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::edit
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}/edit'
*/
edit.head = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::edit
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}/edit'
*/
const editForm = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::edit
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}/edit'
*/
editForm.get = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::edit
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}/edit'
*/
editForm.head = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::update
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}'
*/
export const update = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/experiences/{experience}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::update
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}'
*/
update.url = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { experience: args }
    }

    if (Array.isArray(args)) {
        args = {
            experience: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        experience: args.experience,
    }

    return update.definition.url
            .replace('{experience}', parsedArgs.experience.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::update
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}'
*/
update.put = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::update
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}'
*/
const updateForm = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::update
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}'
*/
updateForm.put = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::confirmDelete
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}/delete'
*/
export const confirmDelete = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/experiences/{experience}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::confirmDelete
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}/delete'
*/
confirmDelete.url = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { experience: args }
    }

    if (Array.isArray(args)) {
        args = {
            experience: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        experience: args.experience,
    }

    return confirmDelete.definition.url
            .replace('{experience}', parsedArgs.experience.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::confirmDelete
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}/delete'
*/
confirmDelete.get = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::confirmDelete
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}/delete'
*/
confirmDelete.head = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::confirmDelete
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}/delete'
*/
const confirmDeleteForm = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::confirmDelete
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}/delete'
*/
confirmDeleteForm.get = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::confirmDelete
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}/delete'
*/
confirmDeleteForm.head = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::destroy
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}'
*/
export const destroy = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/experiences/{experience}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::destroy
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}'
*/
destroy.url = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { experience: args }
    }

    if (Array.isArray(args)) {
        args = {
            experience: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        experience: args.experience,
    }

    return destroy.definition.url
            .replace('{experience}', parsedArgs.experience.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::destroy
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}'
*/
destroy.delete = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::destroy
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}'
*/
const destroyForm = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeeExperienceController::destroy
* @see [unknown]:0
* @route '/dashboard/experiences/{experience}'
*/
destroyForm.delete = (args: { experience: string | number } | [experience: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const experiences = {
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    index: Object.assign(index, index),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    confirmDelete: Object.assign(confirmDelete, confirmDelete),
    destroy: Object.assign(destroy, destroy),
}

export default experiences