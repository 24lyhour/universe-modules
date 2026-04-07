import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../../../wayfinder'
/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:20
* @route '/api/v1/outlets'
*/
const index868b732ed7f8d75965954e62fdbc29f0 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index868b732ed7f8d75965954e62fdbc29f0.url(options),
    method: 'get',
})

index868b732ed7f8d75965954e62fdbc29f0.definition = {
    methods: ["get","head"],
    url: '/api/v1/outlets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:20
* @route '/api/v1/outlets'
*/
index868b732ed7f8d75965954e62fdbc29f0.url = (options?: RouteQueryOptions) => {
    return index868b732ed7f8d75965954e62fdbc29f0.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:20
* @route '/api/v1/outlets'
*/
index868b732ed7f8d75965954e62fdbc29f0.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index868b732ed7f8d75965954e62fdbc29f0.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:20
* @route '/api/v1/outlets'
*/
index868b732ed7f8d75965954e62fdbc29f0.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index868b732ed7f8d75965954e62fdbc29f0.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:20
* @route '/api/v1/admin/outlets'
*/
const index750dedf4456f8dbde4e1c25b89ddfdff = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index750dedf4456f8dbde4e1c25b89ddfdff.url(options),
    method: 'get',
})

index750dedf4456f8dbde4e1c25b89ddfdff.definition = {
    methods: ["get","head"],
    url: '/api/v1/admin/outlets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:20
* @route '/api/v1/admin/outlets'
*/
index750dedf4456f8dbde4e1c25b89ddfdff.url = (options?: RouteQueryOptions) => {
    return index750dedf4456f8dbde4e1c25b89ddfdff.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:20
* @route '/api/v1/admin/outlets'
*/
index750dedf4456f8dbde4e1c25b89ddfdff.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index750dedf4456f8dbde4e1c25b89ddfdff.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:20
* @route '/api/v1/admin/outlets'
*/
index750dedf4456f8dbde4e1c25b89ddfdff.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index750dedf4456f8dbde4e1c25b89ddfdff.url(options),
    method: 'head',
})

export const index = {
    '/api/v1/outlets': index868b732ed7f8d75965954e62fdbc29f0,
    '/api/v1/admin/outlets': index750dedf4456f8dbde4e1c25b89ddfdff,
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::search
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:0
* @route '/api/v1/outlets-search'
*/
export const search = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/api/v1/outlets-search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::search
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:0
* @route '/api/v1/outlets-search'
*/
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::search
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:0
* @route '/api/v1/outlets-search'
*/
search.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::search
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:0
* @route '/api/v1/outlets-search'
*/
search.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:34
* @route '/api/v1/admin/outlets'
*/
const store750dedf4456f8dbde4e1c25b89ddfdff = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store750dedf4456f8dbde4e1c25b89ddfdff.url(options),
    method: 'post',
})

store750dedf4456f8dbde4e1c25b89ddfdff.definition = {
    methods: ["post"],
    url: '/api/v1/admin/outlets',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:34
* @route '/api/v1/admin/outlets'
*/
store750dedf4456f8dbde4e1c25b89ddfdff.url = (options?: RouteQueryOptions) => {
    return store750dedf4456f8dbde4e1c25b89ddfdff.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:34
* @route '/api/v1/admin/outlets'
*/
store750dedf4456f8dbde4e1c25b89ddfdff.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store750dedf4456f8dbde4e1c25b89ddfdff.url(options),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:34
* @route '/api/v1/outlets'
*/
const store868b732ed7f8d75965954e62fdbc29f0 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store868b732ed7f8d75965954e62fdbc29f0.url(options),
    method: 'post',
})

store868b732ed7f8d75965954e62fdbc29f0.definition = {
    methods: ["post"],
    url: '/api/v1/outlets',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:34
* @route '/api/v1/outlets'
*/
store868b732ed7f8d75965954e62fdbc29f0.url = (options?: RouteQueryOptions) => {
    return store868b732ed7f8d75965954e62fdbc29f0.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:34
* @route '/api/v1/outlets'
*/
store868b732ed7f8d75965954e62fdbc29f0.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store868b732ed7f8d75965954e62fdbc29f0.url(options),
    method: 'post',
})

export const store = {
    '/api/v1/admin/outlets': store750dedf4456f8dbde4e1c25b89ddfdff,
    '/api/v1/outlets': store868b732ed7f8d75965954e62fdbc29f0,
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:44
* @route '/api/v1/admin/outlets/{outlet}'
*/
const show178358a3c51ddd1b044cd422e96b73fd = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show178358a3c51ddd1b044cd422e96b73fd.url(args, options),
    method: 'get',
})

show178358a3c51ddd1b044cd422e96b73fd.definition = {
    methods: ["get","head"],
    url: '/api/v1/admin/outlets/{outlet}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:44
* @route '/api/v1/admin/outlets/{outlet}'
*/
show178358a3c51ddd1b044cd422e96b73fd.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return show178358a3c51ddd1b044cd422e96b73fd.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:44
* @route '/api/v1/admin/outlets/{outlet}'
*/
show178358a3c51ddd1b044cd422e96b73fd.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show178358a3c51ddd1b044cd422e96b73fd.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:44
* @route '/api/v1/admin/outlets/{outlet}'
*/
show178358a3c51ddd1b044cd422e96b73fd.head = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show178358a3c51ddd1b044cd422e96b73fd.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:44
* @route '/api/v1/outlets/{outlet}'
*/
const show6bce8bd6bc44d74526728ef09747dba2 = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show6bce8bd6bc44d74526728ef09747dba2.url(args, options),
    method: 'get',
})

show6bce8bd6bc44d74526728ef09747dba2.definition = {
    methods: ["get","head"],
    url: '/api/v1/outlets/{outlet}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:44
* @route '/api/v1/outlets/{outlet}'
*/
show6bce8bd6bc44d74526728ef09747dba2.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return show6bce8bd6bc44d74526728ef09747dba2.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:44
* @route '/api/v1/outlets/{outlet}'
*/
show6bce8bd6bc44d74526728ef09747dba2.get = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show6bce8bd6bc44d74526728ef09747dba2.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:44
* @route '/api/v1/outlets/{outlet}'
*/
show6bce8bd6bc44d74526728ef09747dba2.head = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show6bce8bd6bc44d74526728ef09747dba2.url(args, options),
    method: 'head',
})

export const show = {
    '/api/v1/admin/outlets/{outlet}': show178358a3c51ddd1b044cd422e96b73fd,
    '/api/v1/outlets/{outlet}': show6bce8bd6bc44d74526728ef09747dba2,
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:51
* @route '/api/v1/admin/outlets/{outlet}'
*/
const update178358a3c51ddd1b044cd422e96b73fd = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update178358a3c51ddd1b044cd422e96b73fd.url(args, options),
    method: 'put',
})

update178358a3c51ddd1b044cd422e96b73fd.definition = {
    methods: ["put","patch"],
    url: '/api/v1/admin/outlets/{outlet}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:51
* @route '/api/v1/admin/outlets/{outlet}'
*/
update178358a3c51ddd1b044cd422e96b73fd.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return update178358a3c51ddd1b044cd422e96b73fd.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:51
* @route '/api/v1/admin/outlets/{outlet}'
*/
update178358a3c51ddd1b044cd422e96b73fd.put = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update178358a3c51ddd1b044cd422e96b73fd.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:51
* @route '/api/v1/admin/outlets/{outlet}'
*/
update178358a3c51ddd1b044cd422e96b73fd.patch = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update178358a3c51ddd1b044cd422e96b73fd.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:51
* @route '/api/v1/outlets/{outlet}'
*/
const update6bce8bd6bc44d74526728ef09747dba2 = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update6bce8bd6bc44d74526728ef09747dba2.url(args, options),
    method: 'put',
})

update6bce8bd6bc44d74526728ef09747dba2.definition = {
    methods: ["put","patch"],
    url: '/api/v1/outlets/{outlet}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:51
* @route '/api/v1/outlets/{outlet}'
*/
update6bce8bd6bc44d74526728ef09747dba2.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return update6bce8bd6bc44d74526728ef09747dba2.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:51
* @route '/api/v1/outlets/{outlet}'
*/
update6bce8bd6bc44d74526728ef09747dba2.put = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update6bce8bd6bc44d74526728ef09747dba2.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:51
* @route '/api/v1/outlets/{outlet}'
*/
update6bce8bd6bc44d74526728ef09747dba2.patch = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update6bce8bd6bc44d74526728ef09747dba2.url(args, options),
    method: 'patch',
})

export const update = {
    '/api/v1/admin/outlets/{outlet}': update178358a3c51ddd1b044cd422e96b73fd,
    '/api/v1/outlets/{outlet}': update6bce8bd6bc44d74526728ef09747dba2,
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:61
* @route '/api/v1/admin/outlets/{outlet}'
*/
const destroy178358a3c51ddd1b044cd422e96b73fd = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy178358a3c51ddd1b044cd422e96b73fd.url(args, options),
    method: 'delete',
})

destroy178358a3c51ddd1b044cd422e96b73fd.definition = {
    methods: ["delete"],
    url: '/api/v1/admin/outlets/{outlet}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:61
* @route '/api/v1/admin/outlets/{outlet}'
*/
destroy178358a3c51ddd1b044cd422e96b73fd.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return destroy178358a3c51ddd1b044cd422e96b73fd.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:61
* @route '/api/v1/admin/outlets/{outlet}'
*/
destroy178358a3c51ddd1b044cd422e96b73fd.delete = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy178358a3c51ddd1b044cd422e96b73fd.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:61
* @route '/api/v1/outlets/{outlet}'
*/
const destroy6bce8bd6bc44d74526728ef09747dba2 = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy6bce8bd6bc44d74526728ef09747dba2.url(args, options),
    method: 'delete',
})

destroy6bce8bd6bc44d74526728ef09747dba2.definition = {
    methods: ["delete"],
    url: '/api/v1/outlets/{outlet}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:61
* @route '/api/v1/outlets/{outlet}'
*/
destroy6bce8bd6bc44d74526728ef09747dba2.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return destroy6bce8bd6bc44d74526728ef09747dba2.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:61
* @route '/api/v1/outlets/{outlet}'
*/
destroy6bce8bd6bc44d74526728ef09747dba2.delete = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy6bce8bd6bc44d74526728ef09747dba2.url(args, options),
    method: 'delete',
})

export const destroy = {
    '/api/v1/admin/outlets/{outlet}': destroy178358a3c51ddd1b044cd422e96b73fd,
    '/api/v1/outlets/{outlet}': destroy6bce8bd6bc44d74526728ef09747dba2,
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:68
* @route '/api/v1/admin/outlets-stats'
*/
const stats603d6939c8db45cfde989b204e9ecee8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats603d6939c8db45cfde989b204e9ecee8.url(options),
    method: 'get',
})

stats603d6939c8db45cfde989b204e9ecee8.definition = {
    methods: ["get","head"],
    url: '/api/v1/admin/outlets-stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:68
* @route '/api/v1/admin/outlets-stats'
*/
stats603d6939c8db45cfde989b204e9ecee8.url = (options?: RouteQueryOptions) => {
    return stats603d6939c8db45cfde989b204e9ecee8.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:68
* @route '/api/v1/admin/outlets-stats'
*/
stats603d6939c8db45cfde989b204e9ecee8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats603d6939c8db45cfde989b204e9ecee8.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:68
* @route '/api/v1/admin/outlets-stats'
*/
stats603d6939c8db45cfde989b204e9ecee8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stats603d6939c8db45cfde989b204e9ecee8.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:68
* @route '/api/v1/outlets-stats'
*/
const statseba1790579c60c409d595b7aa3a51009 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: statseba1790579c60c409d595b7aa3a51009.url(options),
    method: 'get',
})

statseba1790579c60c409d595b7aa3a51009.definition = {
    methods: ["get","head"],
    url: '/api/v1/outlets-stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:68
* @route '/api/v1/outlets-stats'
*/
statseba1790579c60c409d595b7aa3a51009.url = (options?: RouteQueryOptions) => {
    return statseba1790579c60c409d595b7aa3a51009.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:68
* @route '/api/v1/outlets-stats'
*/
statseba1790579c60c409d595b7aa3a51009.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: statseba1790579c60c409d595b7aa3a51009.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:68
* @route '/api/v1/outlets-stats'
*/
statseba1790579c60c409d595b7aa3a51009.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: statseba1790579c60c409d595b7aa3a51009.url(options),
    method: 'head',
})

export const stats = {
    '/api/v1/admin/outlets-stats': stats603d6939c8db45cfde989b204e9ecee8,
    '/api/v1/outlets-stats': statseba1790579c60c409d595b7aa3a51009,
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:73
* @route '/api/v1/admin/outlets/{outlet}/activate'
*/
const activate4af3a865935451874c65a44927dd34a8 = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activate4af3a865935451874c65a44927dd34a8.url(args, options),
    method: 'patch',
})

activate4af3a865935451874c65a44927dd34a8.definition = {
    methods: ["patch"],
    url: '/api/v1/admin/outlets/{outlet}/activate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:73
* @route '/api/v1/admin/outlets/{outlet}/activate'
*/
activate4af3a865935451874c65a44927dd34a8.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return activate4af3a865935451874c65a44927dd34a8.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:73
* @route '/api/v1/admin/outlets/{outlet}/activate'
*/
activate4af3a865935451874c65a44927dd34a8.patch = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activate4af3a865935451874c65a44927dd34a8.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:73
* @route '/api/v1/outlets/{outlet}/activate'
*/
const activatece8a40e38344b532601a14c6eb1ca7f3 = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activatece8a40e38344b532601a14c6eb1ca7f3.url(args, options),
    method: 'patch',
})

activatece8a40e38344b532601a14c6eb1ca7f3.definition = {
    methods: ["patch"],
    url: '/api/v1/outlets/{outlet}/activate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:73
* @route '/api/v1/outlets/{outlet}/activate'
*/
activatece8a40e38344b532601a14c6eb1ca7f3.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return activatece8a40e38344b532601a14c6eb1ca7f3.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:73
* @route '/api/v1/outlets/{outlet}/activate'
*/
activatece8a40e38344b532601a14c6eb1ca7f3.patch = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activatece8a40e38344b532601a14c6eb1ca7f3.url(args, options),
    method: 'patch',
})

export const activate = {
    '/api/v1/admin/outlets/{outlet}/activate': activate4af3a865935451874c65a44927dd34a8,
    '/api/v1/outlets/{outlet}/activate': activatece8a40e38344b532601a14c6eb1ca7f3,
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:83
* @route '/api/v1/admin/outlets/{outlet}/deactivate'
*/
const deactivate1b948d3c0754b00071b05bdf5ffdf35a = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate1b948d3c0754b00071b05bdf5ffdf35a.url(args, options),
    method: 'patch',
})

deactivate1b948d3c0754b00071b05bdf5ffdf35a.definition = {
    methods: ["patch"],
    url: '/api/v1/admin/outlets/{outlet}/deactivate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:83
* @route '/api/v1/admin/outlets/{outlet}/deactivate'
*/
deactivate1b948d3c0754b00071b05bdf5ffdf35a.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return deactivate1b948d3c0754b00071b05bdf5ffdf35a.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:83
* @route '/api/v1/admin/outlets/{outlet}/deactivate'
*/
deactivate1b948d3c0754b00071b05bdf5ffdf35a.patch = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate1b948d3c0754b00071b05bdf5ffdf35a.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:83
* @route '/api/v1/outlets/{outlet}/deactivate'
*/
const deactivate256ada6cebab7832b45e75f745b4e7cf = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate256ada6cebab7832b45e75f745b4e7cf.url(args, options),
    method: 'patch',
})

deactivate256ada6cebab7832b45e75f745b4e7cf.definition = {
    methods: ["patch"],
    url: '/api/v1/outlets/{outlet}/deactivate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:83
* @route '/api/v1/outlets/{outlet}/deactivate'
*/
deactivate256ada6cebab7832b45e75f745b4e7cf.url = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { outlet: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.uuid
        : args.outlet,
    }

    return deactivate256ada6cebab7832b45e75f745b4e7cf.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\Customer\Outlet\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/Customer/Outlet/OutletApiController.php:83
* @route '/api/v1/outlets/{outlet}/deactivate'
*/
deactivate256ada6cebab7832b45e75f745b4e7cf.patch = (args: { outlet: string | { uuid: string } } | [outlet: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate256ada6cebab7832b45e75f745b4e7cf.url(args, options),
    method: 'patch',
})

export const deactivate = {
    '/api/v1/admin/outlets/{outlet}/deactivate': deactivate1b948d3c0754b00071b05bdf5ffdf35a,
    '/api/v1/outlets/{outlet}/deactivate': deactivate256ada6cebab7832b45e75f745b4e7cf,
}

const OutletApiController = { index, search, store, show, update, destroy, stats, activate, deactivate }

export default OutletApiController