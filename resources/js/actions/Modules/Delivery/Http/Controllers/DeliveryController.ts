import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries'
*/
const index8642dab4789244522e4d680126609d2d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index8642dab4789244522e4d680126609d2d.url(options),
    method: 'get',
})

index8642dab4789244522e4d680126609d2d.definition = {
    methods: ["get","head"],
    url: '/api/v1/deliveries',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries'
*/
index8642dab4789244522e4d680126609d2d.url = (options?: RouteQueryOptions) => {
    return index8642dab4789244522e4d680126609d2d.definition.url + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries'
*/
index8642dab4789244522e4d680126609d2d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index8642dab4789244522e4d680126609d2d.url(options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries'
*/
index8642dab4789244522e4d680126609d2d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index8642dab4789244522e4d680126609d2d.url(options),
    method: 'head',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries'
*/
const index8642dab4789244522e4d680126609d2dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index8642dab4789244522e4d680126609d2d.url(options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries'
*/
index8642dab4789244522e4d680126609d2dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index8642dab4789244522e4d680126609d2d.url(options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries'
*/
index8642dab4789244522e4d680126609d2dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index8642dab4789244522e4d680126609d2d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index8642dab4789244522e4d680126609d2d.form = index8642dab4789244522e4d680126609d2dForm
/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries'
*/
const indexdf0a2527508e5549f8f46875dd3ea979 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexdf0a2527508e5549f8f46875dd3ea979.url(options),
    method: 'get',
})

indexdf0a2527508e5549f8f46875dd3ea979.definition = {
    methods: ["get","head"],
    url: '/deliveries',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries'
*/
indexdf0a2527508e5549f8f46875dd3ea979.url = (options?: RouteQueryOptions) => {
    return indexdf0a2527508e5549f8f46875dd3ea979.definition.url + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries'
*/
indexdf0a2527508e5549f8f46875dd3ea979.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexdf0a2527508e5549f8f46875dd3ea979.url(options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries'
*/
indexdf0a2527508e5549f8f46875dd3ea979.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexdf0a2527508e5549f8f46875dd3ea979.url(options),
    method: 'head',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries'
*/
const indexdf0a2527508e5549f8f46875dd3ea979Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexdf0a2527508e5549f8f46875dd3ea979.url(options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries'
*/
indexdf0a2527508e5549f8f46875dd3ea979Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexdf0a2527508e5549f8f46875dd3ea979.url(options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::index
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries'
*/
indexdf0a2527508e5549f8f46875dd3ea979Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexdf0a2527508e5549f8f46875dd3ea979.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexdf0a2527508e5549f8f46875dd3ea979.form = indexdf0a2527508e5549f8f46875dd3ea979Form

export const index = {
    '/api/v1/deliveries': index8642dab4789244522e4d680126609d2d,
    '/deliveries': indexdf0a2527508e5549f8f46875dd3ea979,
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::store
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries'
*/
const store8642dab4789244522e4d680126609d2d = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store8642dab4789244522e4d680126609d2d.url(options),
    method: 'post',
})

store8642dab4789244522e4d680126609d2d.definition = {
    methods: ["post"],
    url: '/api/v1/deliveries',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::store
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries'
*/
store8642dab4789244522e4d680126609d2d.url = (options?: RouteQueryOptions) => {
    return store8642dab4789244522e4d680126609d2d.definition.url + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::store
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries'
*/
store8642dab4789244522e4d680126609d2d.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store8642dab4789244522e4d680126609d2d.url(options),
    method: 'post',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::store
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries'
*/
const store8642dab4789244522e4d680126609d2dForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store8642dab4789244522e4d680126609d2d.url(options),
    method: 'post',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::store
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries'
*/
store8642dab4789244522e4d680126609d2dForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store8642dab4789244522e4d680126609d2d.url(options),
    method: 'post',
})

store8642dab4789244522e4d680126609d2d.form = store8642dab4789244522e4d680126609d2dForm
/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::store
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries'
*/
const storedf0a2527508e5549f8f46875dd3ea979 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storedf0a2527508e5549f8f46875dd3ea979.url(options),
    method: 'post',
})

storedf0a2527508e5549f8f46875dd3ea979.definition = {
    methods: ["post"],
    url: '/deliveries',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::store
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries'
*/
storedf0a2527508e5549f8f46875dd3ea979.url = (options?: RouteQueryOptions) => {
    return storedf0a2527508e5549f8f46875dd3ea979.definition.url + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::store
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries'
*/
storedf0a2527508e5549f8f46875dd3ea979.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storedf0a2527508e5549f8f46875dd3ea979.url(options),
    method: 'post',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::store
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries'
*/
const storedf0a2527508e5549f8f46875dd3ea979Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storedf0a2527508e5549f8f46875dd3ea979.url(options),
    method: 'post',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::store
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries'
*/
storedf0a2527508e5549f8f46875dd3ea979Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storedf0a2527508e5549f8f46875dd3ea979.url(options),
    method: 'post',
})

storedf0a2527508e5549f8f46875dd3ea979.form = storedf0a2527508e5549f8f46875dd3ea979Form

export const store = {
    '/api/v1/deliveries': store8642dab4789244522e4d680126609d2d,
    '/deliveries': storedf0a2527508e5549f8f46875dd3ea979,
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
const show2deaed7b9b556e704532f9aca9693870 = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show2deaed7b9b556e704532f9aca9693870.url(args, options),
    method: 'get',
})

show2deaed7b9b556e704532f9aca9693870.definition = {
    methods: ["get","head"],
    url: '/api/v1/deliveries/{delivery}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
show2deaed7b9b556e704532f9aca9693870.url = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { delivery: args }
    }

    if (Array.isArray(args)) {
        args = {
            delivery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        delivery: args.delivery,
    }

    return show2deaed7b9b556e704532f9aca9693870.definition.url
            .replace('{delivery}', parsedArgs.delivery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
show2deaed7b9b556e704532f9aca9693870.get = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show2deaed7b9b556e704532f9aca9693870.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
show2deaed7b9b556e704532f9aca9693870.head = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show2deaed7b9b556e704532f9aca9693870.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
const show2deaed7b9b556e704532f9aca9693870Form = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show2deaed7b9b556e704532f9aca9693870.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
show2deaed7b9b556e704532f9aca9693870Form.get = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show2deaed7b9b556e704532f9aca9693870.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
show2deaed7b9b556e704532f9aca9693870Form.head = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show2deaed7b9b556e704532f9aca9693870.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show2deaed7b9b556e704532f9aca9693870.form = show2deaed7b9b556e704532f9aca9693870Form
/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
const showd86c49600adb6de438271ec92373782f = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showd86c49600adb6de438271ec92373782f.url(args, options),
    method: 'get',
})

showd86c49600adb6de438271ec92373782f.definition = {
    methods: ["get","head"],
    url: '/deliveries/{delivery}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
showd86c49600adb6de438271ec92373782f.url = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { delivery: args }
    }

    if (Array.isArray(args)) {
        args = {
            delivery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        delivery: args.delivery,
    }

    return showd86c49600adb6de438271ec92373782f.definition.url
            .replace('{delivery}', parsedArgs.delivery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
showd86c49600adb6de438271ec92373782f.get = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showd86c49600adb6de438271ec92373782f.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
showd86c49600adb6de438271ec92373782f.head = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showd86c49600adb6de438271ec92373782f.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
const showd86c49600adb6de438271ec92373782fForm = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showd86c49600adb6de438271ec92373782f.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
showd86c49600adb6de438271ec92373782fForm.get = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showd86c49600adb6de438271ec92373782f.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::show
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
showd86c49600adb6de438271ec92373782fForm.head = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showd86c49600adb6de438271ec92373782f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showd86c49600adb6de438271ec92373782f.form = showd86c49600adb6de438271ec92373782fForm

export const show = {
    '/api/v1/deliveries/{delivery}': show2deaed7b9b556e704532f9aca9693870,
    '/deliveries/{delivery}': showd86c49600adb6de438271ec92373782f,
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
const update2deaed7b9b556e704532f9aca9693870 = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update2deaed7b9b556e704532f9aca9693870.url(args, options),
    method: 'put',
})

update2deaed7b9b556e704532f9aca9693870.definition = {
    methods: ["put","patch"],
    url: '/api/v1/deliveries/{delivery}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
update2deaed7b9b556e704532f9aca9693870.url = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { delivery: args }
    }

    if (Array.isArray(args)) {
        args = {
            delivery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        delivery: args.delivery,
    }

    return update2deaed7b9b556e704532f9aca9693870.definition.url
            .replace('{delivery}', parsedArgs.delivery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
update2deaed7b9b556e704532f9aca9693870.put = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update2deaed7b9b556e704532f9aca9693870.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
update2deaed7b9b556e704532f9aca9693870.patch = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update2deaed7b9b556e704532f9aca9693870.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
const update2deaed7b9b556e704532f9aca9693870Form = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update2deaed7b9b556e704532f9aca9693870.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
update2deaed7b9b556e704532f9aca9693870Form.put = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update2deaed7b9b556e704532f9aca9693870.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
update2deaed7b9b556e704532f9aca9693870Form.patch = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update2deaed7b9b556e704532f9aca9693870.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update2deaed7b9b556e704532f9aca9693870.form = update2deaed7b9b556e704532f9aca9693870Form
/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
const updated86c49600adb6de438271ec92373782f = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updated86c49600adb6de438271ec92373782f.url(args, options),
    method: 'put',
})

updated86c49600adb6de438271ec92373782f.definition = {
    methods: ["put","patch"],
    url: '/deliveries/{delivery}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
updated86c49600adb6de438271ec92373782f.url = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { delivery: args }
    }

    if (Array.isArray(args)) {
        args = {
            delivery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        delivery: args.delivery,
    }

    return updated86c49600adb6de438271ec92373782f.definition.url
            .replace('{delivery}', parsedArgs.delivery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
updated86c49600adb6de438271ec92373782f.put = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updated86c49600adb6de438271ec92373782f.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
updated86c49600adb6de438271ec92373782f.patch = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updated86c49600adb6de438271ec92373782f.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
const updated86c49600adb6de438271ec92373782fForm = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updated86c49600adb6de438271ec92373782f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
updated86c49600adb6de438271ec92373782fForm.put = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updated86c49600adb6de438271ec92373782f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::update
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
updated86c49600adb6de438271ec92373782fForm.patch = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updated86c49600adb6de438271ec92373782f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updated86c49600adb6de438271ec92373782f.form = updated86c49600adb6de438271ec92373782fForm

export const update = {
    '/api/v1/deliveries/{delivery}': update2deaed7b9b556e704532f9aca9693870,
    '/deliveries/{delivery}': updated86c49600adb6de438271ec92373782f,
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::destroy
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
const destroy2deaed7b9b556e704532f9aca9693870 = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy2deaed7b9b556e704532f9aca9693870.url(args, options),
    method: 'delete',
})

destroy2deaed7b9b556e704532f9aca9693870.definition = {
    methods: ["delete"],
    url: '/api/v1/deliveries/{delivery}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::destroy
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
destroy2deaed7b9b556e704532f9aca9693870.url = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { delivery: args }
    }

    if (Array.isArray(args)) {
        args = {
            delivery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        delivery: args.delivery,
    }

    return destroy2deaed7b9b556e704532f9aca9693870.definition.url
            .replace('{delivery}', parsedArgs.delivery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::destroy
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
destroy2deaed7b9b556e704532f9aca9693870.delete = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy2deaed7b9b556e704532f9aca9693870.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::destroy
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
const destroy2deaed7b9b556e704532f9aca9693870Form = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy2deaed7b9b556e704532f9aca9693870.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::destroy
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/api/v1/deliveries/{delivery}'
*/
destroy2deaed7b9b556e704532f9aca9693870Form.delete = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy2deaed7b9b556e704532f9aca9693870.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy2deaed7b9b556e704532f9aca9693870.form = destroy2deaed7b9b556e704532f9aca9693870Form
/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::destroy
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
const destroyd86c49600adb6de438271ec92373782f = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyd86c49600adb6de438271ec92373782f.url(args, options),
    method: 'delete',
})

destroyd86c49600adb6de438271ec92373782f.definition = {
    methods: ["delete"],
    url: '/deliveries/{delivery}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::destroy
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
destroyd86c49600adb6de438271ec92373782f.url = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { delivery: args }
    }

    if (Array.isArray(args)) {
        args = {
            delivery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        delivery: args.delivery,
    }

    return destroyd86c49600adb6de438271ec92373782f.definition.url
            .replace('{delivery}', parsedArgs.delivery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::destroy
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
destroyd86c49600adb6de438271ec92373782f.delete = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyd86c49600adb6de438271ec92373782f.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::destroy
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
const destroyd86c49600adb6de438271ec92373782fForm = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyd86c49600adb6de438271ec92373782f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::destroy
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}'
*/
destroyd86c49600adb6de438271ec92373782fForm.delete = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyd86c49600adb6de438271ec92373782f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyd86c49600adb6de438271ec92373782f.form = destroyd86c49600adb6de438271ec92373782fForm

export const destroy = {
    '/api/v1/deliveries/{delivery}': destroy2deaed7b9b556e704532f9aca9693870,
    '/deliveries/{delivery}': destroyd86c49600adb6de438271ec92373782f,
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::create
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/deliveries/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::create
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::create
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::create
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::create
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::create
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::create
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/create'
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
* @see \Modules\Delivery\Http\Controllers\DeliveryController::edit
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}/edit'
*/
export const edit = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/deliveries/{delivery}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::edit
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}/edit'
*/
edit.url = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { delivery: args }
    }

    if (Array.isArray(args)) {
        args = {
            delivery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        delivery: args.delivery,
    }

    return edit.definition.url
            .replace('{delivery}', parsedArgs.delivery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::edit
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}/edit'
*/
edit.get = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::edit
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}/edit'
*/
edit.head = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::edit
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}/edit'
*/
const editForm = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::edit
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}/edit'
*/
editForm.get = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Delivery\Http\Controllers\DeliveryController::edit
* @see Modules/Delivery/app/Http/Controllers/DeliveryController.php:0
* @route '/deliveries/{delivery}/edit'
*/
editForm.head = (args: { delivery: string | number } | [delivery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const DeliveryController = { index, store, show, update, destroy, create, edit }

export default DeliveryController