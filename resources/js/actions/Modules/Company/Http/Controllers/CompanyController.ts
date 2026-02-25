import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/api/v1/companies'
*/
const indexaa2996eb82d2b936339638ef6a4e0dca = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexaa2996eb82d2b936339638ef6a4e0dca.url(options),
    method: 'get',
})

indexaa2996eb82d2b936339638ef6a4e0dca.definition = {
    methods: ["get","head"],
    url: '/api/v1/companies',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/api/v1/companies'
*/
indexaa2996eb82d2b936339638ef6a4e0dca.url = (options?: RouteQueryOptions) => {
    return indexaa2996eb82d2b936339638ef6a4e0dca.definition.url + queryParams(options)
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/api/v1/companies'
*/
indexaa2996eb82d2b936339638ef6a4e0dca.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexaa2996eb82d2b936339638ef6a4e0dca.url(options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/api/v1/companies'
*/
indexaa2996eb82d2b936339638ef6a4e0dca.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexaa2996eb82d2b936339638ef6a4e0dca.url(options),
    method: 'head',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/api/v1/companies'
*/
const indexaa2996eb82d2b936339638ef6a4e0dcaForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexaa2996eb82d2b936339638ef6a4e0dca.url(options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/api/v1/companies'
*/
indexaa2996eb82d2b936339638ef6a4e0dcaForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexaa2996eb82d2b936339638ef6a4e0dca.url(options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/api/v1/companies'
*/
indexaa2996eb82d2b936339638ef6a4e0dcaForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexaa2996eb82d2b936339638ef6a4e0dca.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexaa2996eb82d2b936339638ef6a4e0dca.form = indexaa2996eb82d2b936339638ef6a4e0dcaForm
/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/companies'
*/
const index5000462d9c23a562f4014a314fb30901 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index5000462d9c23a562f4014a314fb30901.url(options),
    method: 'get',
})

index5000462d9c23a562f4014a314fb30901.definition = {
    methods: ["get","head"],
    url: '/companies',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/companies'
*/
index5000462d9c23a562f4014a314fb30901.url = (options?: RouteQueryOptions) => {
    return index5000462d9c23a562f4014a314fb30901.definition.url + queryParams(options)
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/companies'
*/
index5000462d9c23a562f4014a314fb30901.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index5000462d9c23a562f4014a314fb30901.url(options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/companies'
*/
index5000462d9c23a562f4014a314fb30901.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index5000462d9c23a562f4014a314fb30901.url(options),
    method: 'head',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/companies'
*/
const index5000462d9c23a562f4014a314fb30901Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index5000462d9c23a562f4014a314fb30901.url(options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/companies'
*/
index5000462d9c23a562f4014a314fb30901Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index5000462d9c23a562f4014a314fb30901.url(options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::index
* @see Modules/Company/app/Http/Controllers/CompanyController.php:22
* @route '/companies'
*/
index5000462d9c23a562f4014a314fb30901Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index5000462d9c23a562f4014a314fb30901.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index5000462d9c23a562f4014a314fb30901.form = index5000462d9c23a562f4014a314fb30901Form

export const index = {
    '/api/v1/companies': indexaa2996eb82d2b936339638ef6a4e0dca,
    '/companies': index5000462d9c23a562f4014a314fb30901,
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::store
* @see Modules/Company/app/Http/Controllers/CompanyController.php:42
* @route '/api/v1/companies'
*/
const storeaa2996eb82d2b936339638ef6a4e0dca = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeaa2996eb82d2b936339638ef6a4e0dca.url(options),
    method: 'post',
})

storeaa2996eb82d2b936339638ef6a4e0dca.definition = {
    methods: ["post"],
    url: '/api/v1/companies',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::store
* @see Modules/Company/app/Http/Controllers/CompanyController.php:42
* @route '/api/v1/companies'
*/
storeaa2996eb82d2b936339638ef6a4e0dca.url = (options?: RouteQueryOptions) => {
    return storeaa2996eb82d2b936339638ef6a4e0dca.definition.url + queryParams(options)
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::store
* @see Modules/Company/app/Http/Controllers/CompanyController.php:42
* @route '/api/v1/companies'
*/
storeaa2996eb82d2b936339638ef6a4e0dca.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeaa2996eb82d2b936339638ef6a4e0dca.url(options),
    method: 'post',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::store
* @see Modules/Company/app/Http/Controllers/CompanyController.php:42
* @route '/api/v1/companies'
*/
const storeaa2996eb82d2b936339638ef6a4e0dcaForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeaa2996eb82d2b936339638ef6a4e0dca.url(options),
    method: 'post',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::store
* @see Modules/Company/app/Http/Controllers/CompanyController.php:42
* @route '/api/v1/companies'
*/
storeaa2996eb82d2b936339638ef6a4e0dcaForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeaa2996eb82d2b936339638ef6a4e0dca.url(options),
    method: 'post',
})

storeaa2996eb82d2b936339638ef6a4e0dca.form = storeaa2996eb82d2b936339638ef6a4e0dcaForm
/**
* @see \Modules\Company\Http\Controllers\CompanyController::store
* @see Modules/Company/app/Http/Controllers/CompanyController.php:42
* @route '/companies'
*/
const store5000462d9c23a562f4014a314fb30901 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store5000462d9c23a562f4014a314fb30901.url(options),
    method: 'post',
})

store5000462d9c23a562f4014a314fb30901.definition = {
    methods: ["post"],
    url: '/companies',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::store
* @see Modules/Company/app/Http/Controllers/CompanyController.php:42
* @route '/companies'
*/
store5000462d9c23a562f4014a314fb30901.url = (options?: RouteQueryOptions) => {
    return store5000462d9c23a562f4014a314fb30901.definition.url + queryParams(options)
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::store
* @see Modules/Company/app/Http/Controllers/CompanyController.php:42
* @route '/companies'
*/
store5000462d9c23a562f4014a314fb30901.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store5000462d9c23a562f4014a314fb30901.url(options),
    method: 'post',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::store
* @see Modules/Company/app/Http/Controllers/CompanyController.php:42
* @route '/companies'
*/
const store5000462d9c23a562f4014a314fb30901Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store5000462d9c23a562f4014a314fb30901.url(options),
    method: 'post',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::store
* @see Modules/Company/app/Http/Controllers/CompanyController.php:42
* @route '/companies'
*/
store5000462d9c23a562f4014a314fb30901Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store5000462d9c23a562f4014a314fb30901.url(options),
    method: 'post',
})

store5000462d9c23a562f4014a314fb30901.form = store5000462d9c23a562f4014a314fb30901Form

export const store = {
    '/api/v1/companies': storeaa2996eb82d2b936339638ef6a4e0dca,
    '/companies': store5000462d9c23a562f4014a314fb30901,
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/api/v1/companies/{company}'
*/
const showe6d4504e010b72e5bbee1bcb7de80765 = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showe6d4504e010b72e5bbee1bcb7de80765.url(args, options),
    method: 'get',
})

showe6d4504e010b72e5bbee1bcb7de80765.definition = {
    methods: ["get","head"],
    url: '/api/v1/companies/{company}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/api/v1/companies/{company}'
*/
showe6d4504e010b72e5bbee1bcb7de80765.url = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showe6d4504e010b72e5bbee1bcb7de80765.definition.url
            .replace('{company}', parsedArgs.company.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/api/v1/companies/{company}'
*/
showe6d4504e010b72e5bbee1bcb7de80765.get = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showe6d4504e010b72e5bbee1bcb7de80765.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/api/v1/companies/{company}'
*/
showe6d4504e010b72e5bbee1bcb7de80765.head = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showe6d4504e010b72e5bbee1bcb7de80765.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/api/v1/companies/{company}'
*/
const showe6d4504e010b72e5bbee1bcb7de80765Form = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showe6d4504e010b72e5bbee1bcb7de80765.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/api/v1/companies/{company}'
*/
showe6d4504e010b72e5bbee1bcb7de80765Form.get = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showe6d4504e010b72e5bbee1bcb7de80765.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/api/v1/companies/{company}'
*/
showe6d4504e010b72e5bbee1bcb7de80765Form.head = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showe6d4504e010b72e5bbee1bcb7de80765.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showe6d4504e010b72e5bbee1bcb7de80765.form = showe6d4504e010b72e5bbee1bcb7de80765Form
/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/companies/{company}'
*/
const show51e32776e1cd4375dda876ca4fc54c6c = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show51e32776e1cd4375dda876ca4fc54c6c.url(args, options),
    method: 'get',
})

show51e32776e1cd4375dda876ca4fc54c6c.definition = {
    methods: ["get","head"],
    url: '/companies/{company}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/companies/{company}'
*/
show51e32776e1cd4375dda876ca4fc54c6c.url = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show51e32776e1cd4375dda876ca4fc54c6c.definition.url
            .replace('{company}', parsedArgs.company.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/companies/{company}'
*/
show51e32776e1cd4375dda876ca4fc54c6c.get = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show51e32776e1cd4375dda876ca4fc54c6c.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/companies/{company}'
*/
show51e32776e1cd4375dda876ca4fc54c6c.head = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show51e32776e1cd4375dda876ca4fc54c6c.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/companies/{company}'
*/
const show51e32776e1cd4375dda876ca4fc54c6cForm = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show51e32776e1cd4375dda876ca4fc54c6c.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/companies/{company}'
*/
show51e32776e1cd4375dda876ca4fc54c6cForm.get = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show51e32776e1cd4375dda876ca4fc54c6c.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::show
* @see Modules/Company/app/Http/Controllers/CompanyController.php:54
* @route '/companies/{company}'
*/
show51e32776e1cd4375dda876ca4fc54c6cForm.head = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show51e32776e1cd4375dda876ca4fc54c6c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show51e32776e1cd4375dda876ca4fc54c6c.form = show51e32776e1cd4375dda876ca4fc54c6cForm

export const show = {
    '/api/v1/companies/{company}': showe6d4504e010b72e5bbee1bcb7de80765,
    '/companies/{company}': show51e32776e1cd4375dda876ca4fc54c6c,
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/api/v1/companies/{company}'
*/
const updatee6d4504e010b72e5bbee1bcb7de80765 = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatee6d4504e010b72e5bbee1bcb7de80765.url(args, options),
    method: 'put',
})

updatee6d4504e010b72e5bbee1bcb7de80765.definition = {
    methods: ["put","patch"],
    url: '/api/v1/companies/{company}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/api/v1/companies/{company}'
*/
updatee6d4504e010b72e5bbee1bcb7de80765.url = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updatee6d4504e010b72e5bbee1bcb7de80765.definition.url
            .replace('{company}', parsedArgs.company.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/api/v1/companies/{company}'
*/
updatee6d4504e010b72e5bbee1bcb7de80765.put = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatee6d4504e010b72e5bbee1bcb7de80765.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/api/v1/companies/{company}'
*/
updatee6d4504e010b72e5bbee1bcb7de80765.patch = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatee6d4504e010b72e5bbee1bcb7de80765.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/api/v1/companies/{company}'
*/
const updatee6d4504e010b72e5bbee1bcb7de80765Form = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatee6d4504e010b72e5bbee1bcb7de80765.url(args, {
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
updatee6d4504e010b72e5bbee1bcb7de80765Form.put = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatee6d4504e010b72e5bbee1bcb7de80765.url(args, {
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
updatee6d4504e010b72e5bbee1bcb7de80765Form.patch = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatee6d4504e010b72e5bbee1bcb7de80765.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatee6d4504e010b72e5bbee1bcb7de80765.form = updatee6d4504e010b72e5bbee1bcb7de80765Form
/**
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/companies/{company}'
*/
const update51e32776e1cd4375dda876ca4fc54c6c = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update51e32776e1cd4375dda876ca4fc54c6c.url(args, options),
    method: 'put',
})

update51e32776e1cd4375dda876ca4fc54c6c.definition = {
    methods: ["put","patch"],
    url: '/companies/{company}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/companies/{company}'
*/
update51e32776e1cd4375dda876ca4fc54c6c.url = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update51e32776e1cd4375dda876ca4fc54c6c.definition.url
            .replace('{company}', parsedArgs.company.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/companies/{company}'
*/
update51e32776e1cd4375dda876ca4fc54c6c.put = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update51e32776e1cd4375dda876ca4fc54c6c.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/companies/{company}'
*/
update51e32776e1cd4375dda876ca4fc54c6c.patch = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update51e32776e1cd4375dda876ca4fc54c6c.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::update
* @see Modules/Company/app/Http/Controllers/CompanyController.php:86
* @route '/companies/{company}'
*/
const update51e32776e1cd4375dda876ca4fc54c6cForm = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update51e32776e1cd4375dda876ca4fc54c6c.url(args, {
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
update51e32776e1cd4375dda876ca4fc54c6cForm.put = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update51e32776e1cd4375dda876ca4fc54c6c.url(args, {
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
update51e32776e1cd4375dda876ca4fc54c6cForm.patch = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update51e32776e1cd4375dda876ca4fc54c6c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update51e32776e1cd4375dda876ca4fc54c6c.form = update51e32776e1cd4375dda876ca4fc54c6cForm

export const update = {
    '/api/v1/companies/{company}': updatee6d4504e010b72e5bbee1bcb7de80765,
    '/companies/{company}': update51e32776e1cd4375dda876ca4fc54c6c,
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::destroy
* @see Modules/Company/app/Http/Controllers/CompanyController.php:102
* @route '/api/v1/companies/{company}'
*/
const destroye6d4504e010b72e5bbee1bcb7de80765 = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroye6d4504e010b72e5bbee1bcb7de80765.url(args, options),
    method: 'delete',
})

destroye6d4504e010b72e5bbee1bcb7de80765.definition = {
    methods: ["delete"],
    url: '/api/v1/companies/{company}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::destroy
* @see Modules/Company/app/Http/Controllers/CompanyController.php:102
* @route '/api/v1/companies/{company}'
*/
destroye6d4504e010b72e5bbee1bcb7de80765.url = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroye6d4504e010b72e5bbee1bcb7de80765.definition.url
            .replace('{company}', parsedArgs.company.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::destroy
* @see Modules/Company/app/Http/Controllers/CompanyController.php:102
* @route '/api/v1/companies/{company}'
*/
destroye6d4504e010b72e5bbee1bcb7de80765.delete = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroye6d4504e010b72e5bbee1bcb7de80765.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::destroy
* @see Modules/Company/app/Http/Controllers/CompanyController.php:102
* @route '/api/v1/companies/{company}'
*/
const destroye6d4504e010b72e5bbee1bcb7de80765Form = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroye6d4504e010b72e5bbee1bcb7de80765.url(args, {
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
destroye6d4504e010b72e5bbee1bcb7de80765Form.delete = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroye6d4504e010b72e5bbee1bcb7de80765.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroye6d4504e010b72e5bbee1bcb7de80765.form = destroye6d4504e010b72e5bbee1bcb7de80765Form
/**
* @see \Modules\Company\Http\Controllers\CompanyController::destroy
* @see Modules/Company/app/Http/Controllers/CompanyController.php:102
* @route '/companies/{company}'
*/
const destroy51e32776e1cd4375dda876ca4fc54c6c = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy51e32776e1cd4375dda876ca4fc54c6c.url(args, options),
    method: 'delete',
})

destroy51e32776e1cd4375dda876ca4fc54c6c.definition = {
    methods: ["delete"],
    url: '/companies/{company}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Company\Http\Controllers\CompanyController::destroy
* @see Modules/Company/app/Http/Controllers/CompanyController.php:102
* @route '/companies/{company}'
*/
destroy51e32776e1cd4375dda876ca4fc54c6c.url = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy51e32776e1cd4375dda876ca4fc54c6c.definition.url
            .replace('{company}', parsedArgs.company.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Company\Http\Controllers\CompanyController::destroy
* @see Modules/Company/app/Http/Controllers/CompanyController.php:102
* @route '/companies/{company}'
*/
destroy51e32776e1cd4375dda876ca4fc54c6c.delete = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy51e32776e1cd4375dda876ca4fc54c6c.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Company\Http\Controllers\CompanyController::destroy
* @see Modules/Company/app/Http/Controllers/CompanyController.php:102
* @route '/companies/{company}'
*/
const destroy51e32776e1cd4375dda876ca4fc54c6cForm = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy51e32776e1cd4375dda876ca4fc54c6c.url(args, {
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
destroy51e32776e1cd4375dda876ca4fc54c6cForm.delete = (args: { company: string | number } | [company: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy51e32776e1cd4375dda876ca4fc54c6c.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy51e32776e1cd4375dda876ca4fc54c6c.form = destroy51e32776e1cd4375dda876ca4fc54c6cForm

export const destroy = {
    '/api/v1/companies/{company}': destroye6d4504e010b72e5bbee1bcb7de80765,
    '/companies/{company}': destroy51e32776e1cd4375dda876ca4fc54c6c,
}

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

const CompanyController = { index, store, show, update, destroy, create, edit }

export default CompanyController