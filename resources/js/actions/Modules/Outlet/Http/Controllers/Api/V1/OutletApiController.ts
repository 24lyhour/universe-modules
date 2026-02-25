import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:26
* @route '/api/outlets/outlets'
*/
const indexe93d55c472bb7a15a15d6697c5ec4377 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexe93d55c472bb7a15a15d6697c5ec4377.url(options),
    method: 'get',
})

indexe93d55c472bb7a15a15d6697c5ec4377.definition = {
    methods: ["get","head"],
    url: '/api/outlets/outlets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:26
* @route '/api/outlets/outlets'
*/
indexe93d55c472bb7a15a15d6697c5ec4377.url = (options?: RouteQueryOptions) => {
    return indexe93d55c472bb7a15a15d6697c5ec4377.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:26
* @route '/api/outlets/outlets'
*/
indexe93d55c472bb7a15a15d6697c5ec4377.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexe93d55c472bb7a15a15d6697c5ec4377.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:26
* @route '/api/outlets/outlets'
*/
indexe93d55c472bb7a15a15d6697c5ec4377.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexe93d55c472bb7a15a15d6697c5ec4377.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:26
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:26
* @route '/api/v1/outlets'
*/
index868b732ed7f8d75965954e62fdbc29f0.url = (options?: RouteQueryOptions) => {
    return index868b732ed7f8d75965954e62fdbc29f0.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:26
* @route '/api/v1/outlets'
*/
index868b732ed7f8d75965954e62fdbc29f0.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index868b732ed7f8d75965954e62fdbc29f0.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::index
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:26
* @route '/api/v1/outlets'
*/
index868b732ed7f8d75965954e62fdbc29f0.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index868b732ed7f8d75965954e62fdbc29f0.url(options),
    method: 'head',
})

export const index = {
    '/api/outlets/outlets': indexe93d55c472bb7a15a15d6697c5ec4377,
    '/api/v1/outlets': index868b732ed7f8d75965954e62fdbc29f0,
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:47
* @route '/api/outlets/outlets'
*/
const storee93d55c472bb7a15a15d6697c5ec4377 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storee93d55c472bb7a15a15d6697c5ec4377.url(options),
    method: 'post',
})

storee93d55c472bb7a15a15d6697c5ec4377.definition = {
    methods: ["post"],
    url: '/api/outlets/outlets',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:47
* @route '/api/outlets/outlets'
*/
storee93d55c472bb7a15a15d6697c5ec4377.url = (options?: RouteQueryOptions) => {
    return storee93d55c472bb7a15a15d6697c5ec4377.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:47
* @route '/api/outlets/outlets'
*/
storee93d55c472bb7a15a15d6697c5ec4377.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storee93d55c472bb7a15a15d6697c5ec4377.url(options),
    method: 'post',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:47
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:47
* @route '/api/v1/outlets'
*/
store868b732ed7f8d75965954e62fdbc29f0.url = (options?: RouteQueryOptions) => {
    return store868b732ed7f8d75965954e62fdbc29f0.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::store
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:47
* @route '/api/v1/outlets'
*/
store868b732ed7f8d75965954e62fdbc29f0.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store868b732ed7f8d75965954e62fdbc29f0.url(options),
    method: 'post',
})

export const store = {
    '/api/outlets/outlets': storee93d55c472bb7a15a15d6697c5ec4377,
    '/api/v1/outlets': store868b732ed7f8d75965954e62fdbc29f0,
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:60
* @route '/api/outlets/outlets/{outlet}'
*/
const show51232df02f0600ec5137d6c58e38636a = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show51232df02f0600ec5137d6c58e38636a.url(args, options),
    method: 'get',
})

show51232df02f0600ec5137d6c58e38636a.definition = {
    methods: ["get","head"],
    url: '/api/outlets/outlets/{outlet}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:60
* @route '/api/outlets/outlets/{outlet}'
*/
show51232df02f0600ec5137d6c58e38636a.url = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outlet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.id
        : args.outlet,
    }

    return show51232df02f0600ec5137d6c58e38636a.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:60
* @route '/api/outlets/outlets/{outlet}'
*/
show51232df02f0600ec5137d6c58e38636a.get = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show51232df02f0600ec5137d6c58e38636a.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:60
* @route '/api/outlets/outlets/{outlet}'
*/
show51232df02f0600ec5137d6c58e38636a.head = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show51232df02f0600ec5137d6c58e38636a.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:60
* @route '/api/v1/outlets/{outlet}'
*/
const show6bce8bd6bc44d74526728ef09747dba2 = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show6bce8bd6bc44d74526728ef09747dba2.url(args, options),
    method: 'get',
})

show6bce8bd6bc44d74526728ef09747dba2.definition = {
    methods: ["get","head"],
    url: '/api/v1/outlets/{outlet}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:60
* @route '/api/v1/outlets/{outlet}'
*/
show6bce8bd6bc44d74526728ef09747dba2.url = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outlet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.id
        : args.outlet,
    }

    return show6bce8bd6bc44d74526728ef09747dba2.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:60
* @route '/api/v1/outlets/{outlet}'
*/
show6bce8bd6bc44d74526728ef09747dba2.get = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show6bce8bd6bc44d74526728ef09747dba2.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::show
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:60
* @route '/api/v1/outlets/{outlet}'
*/
show6bce8bd6bc44d74526728ef09747dba2.head = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show6bce8bd6bc44d74526728ef09747dba2.url(args, options),
    method: 'head',
})

export const show = {
    '/api/outlets/outlets/{outlet}': show51232df02f0600ec5137d6c58e38636a,
    '/api/v1/outlets/{outlet}': show6bce8bd6bc44d74526728ef09747dba2,
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:70
* @route '/api/outlets/outlets/{outlet}'
*/
const update51232df02f0600ec5137d6c58e38636a = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update51232df02f0600ec5137d6c58e38636a.url(args, options),
    method: 'put',
})

update51232df02f0600ec5137d6c58e38636a.definition = {
    methods: ["put","patch"],
    url: '/api/outlets/outlets/{outlet}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:70
* @route '/api/outlets/outlets/{outlet}'
*/
update51232df02f0600ec5137d6c58e38636a.url = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outlet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.id
        : args.outlet,
    }

    return update51232df02f0600ec5137d6c58e38636a.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:70
* @route '/api/outlets/outlets/{outlet}'
*/
update51232df02f0600ec5137d6c58e38636a.put = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update51232df02f0600ec5137d6c58e38636a.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:70
* @route '/api/outlets/outlets/{outlet}'
*/
update51232df02f0600ec5137d6c58e38636a.patch = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update51232df02f0600ec5137d6c58e38636a.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:70
* @route '/api/v1/outlets/{outlet}'
*/
const update6bce8bd6bc44d74526728ef09747dba2 = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update6bce8bd6bc44d74526728ef09747dba2.url(args, options),
    method: 'put',
})

update6bce8bd6bc44d74526728ef09747dba2.definition = {
    methods: ["put","patch"],
    url: '/api/v1/outlets/{outlet}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:70
* @route '/api/v1/outlets/{outlet}'
*/
update6bce8bd6bc44d74526728ef09747dba2.url = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outlet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.id
        : args.outlet,
    }

    return update6bce8bd6bc44d74526728ef09747dba2.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:70
* @route '/api/v1/outlets/{outlet}'
*/
update6bce8bd6bc44d74526728ef09747dba2.put = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update6bce8bd6bc44d74526728ef09747dba2.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::update
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:70
* @route '/api/v1/outlets/{outlet}'
*/
update6bce8bd6bc44d74526728ef09747dba2.patch = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update6bce8bd6bc44d74526728ef09747dba2.url(args, options),
    method: 'patch',
})

export const update = {
    '/api/outlets/outlets/{outlet}': update51232df02f0600ec5137d6c58e38636a,
    '/api/v1/outlets/{outlet}': update6bce8bd6bc44d74526728ef09747dba2,
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:83
* @route '/api/outlets/outlets/{outlet}'
*/
const destroy51232df02f0600ec5137d6c58e38636a = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy51232df02f0600ec5137d6c58e38636a.url(args, options),
    method: 'delete',
})

destroy51232df02f0600ec5137d6c58e38636a.definition = {
    methods: ["delete"],
    url: '/api/outlets/outlets/{outlet}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:83
* @route '/api/outlets/outlets/{outlet}'
*/
destroy51232df02f0600ec5137d6c58e38636a.url = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outlet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.id
        : args.outlet,
    }

    return destroy51232df02f0600ec5137d6c58e38636a.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:83
* @route '/api/outlets/outlets/{outlet}'
*/
destroy51232df02f0600ec5137d6c58e38636a.delete = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy51232df02f0600ec5137d6c58e38636a.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:83
* @route '/api/v1/outlets/{outlet}'
*/
const destroy6bce8bd6bc44d74526728ef09747dba2 = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy6bce8bd6bc44d74526728ef09747dba2.url(args, options),
    method: 'delete',
})

destroy6bce8bd6bc44d74526728ef09747dba2.definition = {
    methods: ["delete"],
    url: '/api/v1/outlets/{outlet}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:83
* @route '/api/v1/outlets/{outlet}'
*/
destroy6bce8bd6bc44d74526728ef09747dba2.url = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outlet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.id
        : args.outlet,
    }

    return destroy6bce8bd6bc44d74526728ef09747dba2.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::destroy
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:83
* @route '/api/v1/outlets/{outlet}'
*/
destroy6bce8bd6bc44d74526728ef09747dba2.delete = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy6bce8bd6bc44d74526728ef09747dba2.url(args, options),
    method: 'delete',
})

export const destroy = {
    '/api/outlets/outlets/{outlet}': destroy51232df02f0600ec5137d6c58e38636a,
    '/api/v1/outlets/{outlet}': destroy6bce8bd6bc44d74526728ef09747dba2,
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:95
* @route '/api/outlets/outlets-stats'
*/
const stats711fee6881a6d9d329a3dc68206c4dca = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats711fee6881a6d9d329a3dc68206c4dca.url(options),
    method: 'get',
})

stats711fee6881a6d9d329a3dc68206c4dca.definition = {
    methods: ["get","head"],
    url: '/api/outlets/outlets-stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:95
* @route '/api/outlets/outlets-stats'
*/
stats711fee6881a6d9d329a3dc68206c4dca.url = (options?: RouteQueryOptions) => {
    return stats711fee6881a6d9d329a3dc68206c4dca.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:95
* @route '/api/outlets/outlets-stats'
*/
stats711fee6881a6d9d329a3dc68206c4dca.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stats711fee6881a6d9d329a3dc68206c4dca.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:95
* @route '/api/outlets/outlets-stats'
*/
stats711fee6881a6d9d329a3dc68206c4dca.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stats711fee6881a6d9d329a3dc68206c4dca.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:95
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
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:95
* @route '/api/v1/outlets-stats'
*/
statseba1790579c60c409d595b7aa3a51009.url = (options?: RouteQueryOptions) => {
    return statseba1790579c60c409d595b7aa3a51009.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:95
* @route '/api/v1/outlets-stats'
*/
statseba1790579c60c409d595b7aa3a51009.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: statseba1790579c60c409d595b7aa3a51009.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::stats
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:95
* @route '/api/v1/outlets-stats'
*/
statseba1790579c60c409d595b7aa3a51009.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: statseba1790579c60c409d595b7aa3a51009.url(options),
    method: 'head',
})

export const stats = {
    '/api/outlets/outlets-stats': stats711fee6881a6d9d329a3dc68206c4dca,
    '/api/v1/outlets-stats': statseba1790579c60c409d595b7aa3a51009,
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::search
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:105
* @route '/api/outlets/outlets-search'
*/
const search19ceb589fbf10a529b7cb9f22383284e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search19ceb589fbf10a529b7cb9f22383284e.url(options),
    method: 'get',
})

search19ceb589fbf10a529b7cb9f22383284e.definition = {
    methods: ["get","head"],
    url: '/api/outlets/outlets-search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::search
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:105
* @route '/api/outlets/outlets-search'
*/
search19ceb589fbf10a529b7cb9f22383284e.url = (options?: RouteQueryOptions) => {
    return search19ceb589fbf10a529b7cb9f22383284e.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::search
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:105
* @route '/api/outlets/outlets-search'
*/
search19ceb589fbf10a529b7cb9f22383284e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search19ceb589fbf10a529b7cb9f22383284e.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::search
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:105
* @route '/api/outlets/outlets-search'
*/
search19ceb589fbf10a529b7cb9f22383284e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search19ceb589fbf10a529b7cb9f22383284e.url(options),
    method: 'head',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::search
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:105
* @route '/api/v1/outlets-search'
*/
const search0f7c1d19af47e260e34849e2092bddfb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search0f7c1d19af47e260e34849e2092bddfb.url(options),
    method: 'get',
})

search0f7c1d19af47e260e34849e2092bddfb.definition = {
    methods: ["get","head"],
    url: '/api/v1/outlets-search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::search
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:105
* @route '/api/v1/outlets-search'
*/
search0f7c1d19af47e260e34849e2092bddfb.url = (options?: RouteQueryOptions) => {
    return search0f7c1d19af47e260e34849e2092bddfb.definition.url + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::search
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:105
* @route '/api/v1/outlets-search'
*/
search0f7c1d19af47e260e34849e2092bddfb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search0f7c1d19af47e260e34849e2092bddfb.url(options),
    method: 'get',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::search
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:105
* @route '/api/v1/outlets-search'
*/
search0f7c1d19af47e260e34849e2092bddfb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search0f7c1d19af47e260e34849e2092bddfb.url(options),
    method: 'head',
})

export const search = {
    '/api/outlets/outlets-search': search19ceb589fbf10a529b7cb9f22383284e,
    '/api/v1/outlets-search': search0f7c1d19af47e260e34849e2092bddfb,
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:120
* @route '/api/outlets/outlets/{outlet}/activate'
*/
const activateb02095d6a616f2ad26bc358b8809a450 = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activateb02095d6a616f2ad26bc358b8809a450.url(args, options),
    method: 'patch',
})

activateb02095d6a616f2ad26bc358b8809a450.definition = {
    methods: ["patch"],
    url: '/api/outlets/outlets/{outlet}/activate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:120
* @route '/api/outlets/outlets/{outlet}/activate'
*/
activateb02095d6a616f2ad26bc358b8809a450.url = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outlet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.id
        : args.outlet,
    }

    return activateb02095d6a616f2ad26bc358b8809a450.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:120
* @route '/api/outlets/outlets/{outlet}/activate'
*/
activateb02095d6a616f2ad26bc358b8809a450.patch = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activateb02095d6a616f2ad26bc358b8809a450.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:120
* @route '/api/v1/outlets/{outlet}/activate'
*/
const activatece8a40e38344b532601a14c6eb1ca7f3 = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activatece8a40e38344b532601a14c6eb1ca7f3.url(args, options),
    method: 'patch',
})

activatece8a40e38344b532601a14c6eb1ca7f3.definition = {
    methods: ["patch"],
    url: '/api/v1/outlets/{outlet}/activate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:120
* @route '/api/v1/outlets/{outlet}/activate'
*/
activatece8a40e38344b532601a14c6eb1ca7f3.url = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outlet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.id
        : args.outlet,
    }

    return activatece8a40e38344b532601a14c6eb1ca7f3.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::activate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:120
* @route '/api/v1/outlets/{outlet}/activate'
*/
activatece8a40e38344b532601a14c6eb1ca7f3.patch = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: activatece8a40e38344b532601a14c6eb1ca7f3.url(args, options),
    method: 'patch',
})

export const activate = {
    '/api/outlets/outlets/{outlet}/activate': activateb02095d6a616f2ad26bc358b8809a450,
    '/api/v1/outlets/{outlet}/activate': activatece8a40e38344b532601a14c6eb1ca7f3,
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:133
* @route '/api/outlets/outlets/{outlet}/deactivate'
*/
const deactivatebe540b45602837b105dc13d3ca08649f = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivatebe540b45602837b105dc13d3ca08649f.url(args, options),
    method: 'patch',
})

deactivatebe540b45602837b105dc13d3ca08649f.definition = {
    methods: ["patch"],
    url: '/api/outlets/outlets/{outlet}/deactivate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:133
* @route '/api/outlets/outlets/{outlet}/deactivate'
*/
deactivatebe540b45602837b105dc13d3ca08649f.url = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outlet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.id
        : args.outlet,
    }

    return deactivatebe540b45602837b105dc13d3ca08649f.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:133
* @route '/api/outlets/outlets/{outlet}/deactivate'
*/
deactivatebe540b45602837b105dc13d3ca08649f.patch = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivatebe540b45602837b105dc13d3ca08649f.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:133
* @route '/api/v1/outlets/{outlet}/deactivate'
*/
const deactivate256ada6cebab7832b45e75f745b4e7cf = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate256ada6cebab7832b45e75f745b4e7cf.url(args, options),
    method: 'patch',
})

deactivate256ada6cebab7832b45e75f745b4e7cf.definition = {
    methods: ["patch"],
    url: '/api/v1/outlets/{outlet}/deactivate',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:133
* @route '/api/v1/outlets/{outlet}/deactivate'
*/
deactivate256ada6cebab7832b45e75f745b4e7cf.url = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outlet: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outlet: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outlet: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outlet: typeof args.outlet === 'object'
        ? args.outlet.id
        : args.outlet,
    }

    return deactivate256ada6cebab7832b45e75f745b4e7cf.definition.url
            .replace('{outlet}', parsedArgs.outlet.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Outlet\Http\Controllers\Api\V1\OutletApiController::deactivate
* @see Modules/Outlet/app/Http/Controllers/Api/V1/OutletApiController.php:133
* @route '/api/v1/outlets/{outlet}/deactivate'
*/
deactivate256ada6cebab7832b45e75f745b4e7cf.patch = (args: { outlet: number | { id: number } } | [outlet: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: deactivate256ada6cebab7832b45e75f745b4e7cf.url(args, options),
    method: 'patch',
})

export const deactivate = {
    '/api/outlets/outlets/{outlet}/deactivate': deactivatebe540b45602837b105dc13d3ca08649f,
    '/api/v1/outlets/{outlet}/deactivate': deactivate256ada6cebab7832b45e75f745b4e7cf,
}

const OutletApiController = { index, store, show, update, destroy, stats, search, activate, deactivate }

export default OutletApiController