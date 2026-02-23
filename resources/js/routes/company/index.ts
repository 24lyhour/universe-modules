import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/companies'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/companies',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/companies'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/companies'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/companies'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/companies'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/companies'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/companies'
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
* @see \Modules\Company\Http\Controllers\CompanyController::create
* @see Modules/Company/app/Http/Controllers/CompanyController.php:34
* @route '/companies/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/companies/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::create
* @see Modules/Company/app/Http/Controllers/CompanyController.php:34
* @route '/companies/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::create
* @see Modules/Company/app/Http/Controllers/CompanyController.php:34
* @route '/companies/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::create
* @see Modules/Company/app/Http/Controllers/CompanyController.php:34
* @route '/companies/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::create
* @see Modules/Company/app/Http/Controllers/CompanyController.php:34
* @route '/companies/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::create
* @see Modules/Company/app/Http/Controllers/CompanyController.php:34
* @route '/companies/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::create
* @see Modules/Company/app/Http/Controllers/CompanyController.php:34
* @route '/companies/create'
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
* @see \Modules\Company\Http\Controllers\CompanyController::store
* @see Modules/Company/app/Http/Controllers/CompanyController.php:42
* @route '/companies'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/companies',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::store
* @see Modules/Company/app/Http/Controllers/CompanyController.php:42
* @route '/companies'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::store
* @see Modules/Company/app/Http/Controllers/CompanyController.php:42
* @route '/companies'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::store
* @see Modules/Company/app/Http/Controllers/CompanyController.php:42
* @route '/companies'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::store
* @see Modules/Company/app/Http/Controllers/CompanyController.php:42
* @route '/companies'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/companies/{company}'
*/
export const show = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/companies/{company}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/companies/{company}'
*/
show.url = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { company: args }
    }

    if (Array.isArray(args)) {
        args = {
            company: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        company: args.company,
    }

    return show.definition.url
            .replace('{company}', parsedArgs.company.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/companies/{company}'
*/
show.get = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/companies/{company}'
*/
show.head = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/companies/{company}'
*/
const showForm = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/companies/{company}'
*/
showForm.get = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/companies/{company}'
*/
showForm.head = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Company\Http\Controllers\CompanyController::edit
* @see Modules/Company/app/Http/Controllers/CompanyController.php:70
* @route '/companies/{company}/edit'
*/
export const edit = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/companies/{company}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::edit
* @see Modules/Company/app/Http/Controllers/CompanyController.php:70
* @route '/companies/{company}/edit'
*/
edit.url = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { company: args }
    }

    if (Array.isArray(args)) {
        args = {
            company: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        company: args.company,
    }

    return edit.definition.url
            .replace('{company}', parsedArgs.company.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::edit
* @see Modules/Company/app/Http/Controllers/CompanyController.php:70
* @route '/companies/{company}/edit'
*/
edit.get = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::edit
* @see Modules/Company/app/Http/Controllers/CompanyController.php:70
* @route '/companies/{company}/edit'
*/
edit.head = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::edit
* @see Modules/Company/app/Http/Controllers/CompanyController.php:70
* @route '/companies/{company}/edit'
*/
const editForm = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::edit
* @see Modules/Company/app/Http/Controllers/CompanyController.php:70
* @route '/companies/{company}/edit'
*/
editForm.get = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::edit
* @see Modules/Company/app/Http/Controllers/CompanyController.php:70
* @route '/companies/{company}/edit'
*/
editForm.head = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/companies/{company}'
*/
export const update = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/companies/{company}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/companies/{company}'
*/
update.url = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { company: args }
    }

    if (Array.isArray(args)) {
        args = {
            company: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        company: args.company,
    }

    return update.definition.url
            .replace('{company}', parsedArgs.company.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/companies/{company}'
*/
update.put = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/companies/{company}'
*/
update.patch = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/companies/{company}'
*/
const updateForm = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/companies/{company}'
*/
updateForm.put = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/companies/{company}'
*/
updateForm.patch = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Company\Http\Controllers\CompanyController::destroy
* @see Modules/Company/app/Http/Controllers/CompanyController.php:102
* @route '/companies/{company}'
*/
export const destroy = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/companies/{company}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::destroy
* @see Modules/Company/app/Http/Controllers/CompanyController.php:102
* @route '/companies/{company}'
*/
destroy.url = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { company: args }
    }

    if (Array.isArray(args)) {
        args = {
            company: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        company: args.company,
    }

    return destroy.definition.url
            .replace('{company}', parsedArgs.company.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::destroy
* @see Modules/Company/app/Http/Controllers/CompanyController.php:102
* @route '/companies/{company}'
*/
destroy.delete = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::destroy
* @see Modules/Company/app/Http/Controllers/CompanyController.php:102
* @route '/companies/{company}'
*/
const destroyForm = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::destroy
* @see Modules/Company/app/Http/Controllers/CompanyController.php:102
* @route '/companies/{company}'
*/
destroyForm.delete = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const company = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default company