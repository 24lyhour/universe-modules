import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/api/v1/companies'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/companies',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/api/v1/companies'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/api/v1/companies'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/api/v1/companies'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/api/v1/companies'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/api/v1/companies'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/api/v1/companies'
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
* @see \Modules\Company\Http\Controllers\CompanyController::store
* @see Modules/Company/app/Http/Controllers/CompanyController.php:42
* @route '/api/v1/companies'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/companies',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::store
* @see Modules/Company/app/Http/Controllers/CompanyController.php:42
* @route '/api/v1/companies'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::store
* @see Modules/Company/app/Http/Controllers/CompanyController.php:42
* @route '/api/v1/companies'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::store
* @see Modules/Company/app/Http/Controllers/CompanyController.php:42
* @route '/api/v1/companies'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::store
* @see Modules/Company/app/Http/Controllers/CompanyController.php:42
* @route '/api/v1/companies'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/api/v1/companies/{company}'
*/
export const show = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/companies/{company}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/api/v1/companies/{company}'
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
* @route '/api/v1/companies/{company}'
*/
show.get = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/api/v1/companies/{company}'
*/
show.head = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/api/v1/companies/{company}'
*/
const showForm = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/api/v1/companies/{company}'
*/
showForm.get = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/api/v1/companies/{company}'
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
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/api/v1/companies/{company}'
*/
export const update = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/companies/{company}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/api/v1/companies/{company}'
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
* @route '/api/v1/companies/{company}'
*/
update.put = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/api/v1/companies/{company}'
*/
update.patch = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/api/v1/companies/{company}'
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
* @route '/api/v1/companies/{company}'
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
* @route '/api/v1/companies/{company}'
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
* @route '/api/v1/companies/{company}'
*/
export const destroy = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/companies/{company}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::destroy
* @see Modules/Company/app/Http/Controllers/CompanyController.php:102
* @route '/api/v1/companies/{company}'
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
* @route '/api/v1/companies/{company}'
*/
destroy.delete = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::destroy
* @see Modules/Company/app/Http/Controllers/CompanyController.php:102
* @route '/api/v1/companies/{company}'
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
* @route '/api/v1/companies/{company}'
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
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default company