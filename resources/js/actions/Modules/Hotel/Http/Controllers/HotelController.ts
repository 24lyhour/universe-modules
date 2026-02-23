import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/api/v1/hotels'
*/
const indexd4f71c8901d53866766eca1bf226c45a = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexd4f71c8901d53866766eca1bf226c45a.url(options),
    method: 'get',
})

indexd4f71c8901d53866766eca1bf226c45a.definition = {
    methods: ["get","head"],
    url: '/api/v1/hotels',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/api/v1/hotels'
*/
indexd4f71c8901d53866766eca1bf226c45a.url = (options?: RouteQueryOptions) => {
    return indexd4f71c8901d53866766eca1bf226c45a.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/api/v1/hotels'
*/
indexd4f71c8901d53866766eca1bf226c45a.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexd4f71c8901d53866766eca1bf226c45a.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/api/v1/hotels'
*/
indexd4f71c8901d53866766eca1bf226c45a.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexd4f71c8901d53866766eca1bf226c45a.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/api/v1/hotels'
*/
const indexd4f71c8901d53866766eca1bf226c45aForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexd4f71c8901d53866766eca1bf226c45a.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/api/v1/hotels'
*/
indexd4f71c8901d53866766eca1bf226c45aForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexd4f71c8901d53866766eca1bf226c45a.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/api/v1/hotels'
*/
indexd4f71c8901d53866766eca1bf226c45aForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexd4f71c8901d53866766eca1bf226c45a.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexd4f71c8901d53866766eca1bf226c45a.form = indexd4f71c8901d53866766eca1bf226c45aForm
/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/hotels'
*/
const index3f54a5facbd4b6ed22f1ef9eddab12ee = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index3f54a5facbd4b6ed22f1ef9eddab12ee.url(options),
    method: 'get',
})

index3f54a5facbd4b6ed22f1ef9eddab12ee.definition = {
    methods: ["get","head"],
    url: '/hotels',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/hotels'
*/
index3f54a5facbd4b6ed22f1ef9eddab12ee.url = (options?: RouteQueryOptions) => {
    return index3f54a5facbd4b6ed22f1ef9eddab12ee.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/hotels'
*/
index3f54a5facbd4b6ed22f1ef9eddab12ee.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index3f54a5facbd4b6ed22f1ef9eddab12ee.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/hotels'
*/
index3f54a5facbd4b6ed22f1ef9eddab12ee.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index3f54a5facbd4b6ed22f1ef9eddab12ee.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/hotels'
*/
const index3f54a5facbd4b6ed22f1ef9eddab12eeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index3f54a5facbd4b6ed22f1ef9eddab12ee.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/hotels'
*/
index3f54a5facbd4b6ed22f1ef9eddab12eeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index3f54a5facbd4b6ed22f1ef9eddab12ee.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::index
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:22
* @route '/hotels'
*/
index3f54a5facbd4b6ed22f1ef9eddab12eeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index3f54a5facbd4b6ed22f1ef9eddab12ee.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index3f54a5facbd4b6ed22f1ef9eddab12ee.form = index3f54a5facbd4b6ed22f1ef9eddab12eeForm

export const index = {
    '/api/v1/hotels': indexd4f71c8901d53866766eca1bf226c45a,
    '/hotels': index3f54a5facbd4b6ed22f1ef9eddab12ee,
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:42
* @route '/api/v1/hotels'
*/
const stored4f71c8901d53866766eca1bf226c45a = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: stored4f71c8901d53866766eca1bf226c45a.url(options),
    method: 'post',
})

stored4f71c8901d53866766eca1bf226c45a.definition = {
    methods: ["post"],
    url: '/api/v1/hotels',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:42
* @route '/api/v1/hotels'
*/
stored4f71c8901d53866766eca1bf226c45a.url = (options?: RouteQueryOptions) => {
    return stored4f71c8901d53866766eca1bf226c45a.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:42
* @route '/api/v1/hotels'
*/
stored4f71c8901d53866766eca1bf226c45a.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: stored4f71c8901d53866766eca1bf226c45a.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:42
* @route '/api/v1/hotels'
*/
const stored4f71c8901d53866766eca1bf226c45aForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: stored4f71c8901d53866766eca1bf226c45a.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:42
* @route '/api/v1/hotels'
*/
stored4f71c8901d53866766eca1bf226c45aForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: stored4f71c8901d53866766eca1bf226c45a.url(options),
    method: 'post',
})

stored4f71c8901d53866766eca1bf226c45a.form = stored4f71c8901d53866766eca1bf226c45aForm
/**
* @see \Modules\Hotel\Http\Controllers\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:42
* @route '/hotels'
*/
const store3f54a5facbd4b6ed22f1ef9eddab12ee = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store3f54a5facbd4b6ed22f1ef9eddab12ee.url(options),
    method: 'post',
})

store3f54a5facbd4b6ed22f1ef9eddab12ee.definition = {
    methods: ["post"],
    url: '/hotels',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:42
* @route '/hotels'
*/
store3f54a5facbd4b6ed22f1ef9eddab12ee.url = (options?: RouteQueryOptions) => {
    return store3f54a5facbd4b6ed22f1ef9eddab12ee.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:42
* @route '/hotels'
*/
store3f54a5facbd4b6ed22f1ef9eddab12ee.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store3f54a5facbd4b6ed22f1ef9eddab12ee.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:42
* @route '/hotels'
*/
const store3f54a5facbd4b6ed22f1ef9eddab12eeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store3f54a5facbd4b6ed22f1ef9eddab12ee.url(options),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::store
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:42
* @route '/hotels'
*/
store3f54a5facbd4b6ed22f1ef9eddab12eeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store3f54a5facbd4b6ed22f1ef9eddab12ee.url(options),
    method: 'post',
})

store3f54a5facbd4b6ed22f1ef9eddab12ee.form = store3f54a5facbd4b6ed22f1ef9eddab12eeForm

export const store = {
    '/api/v1/hotels': stored4f71c8901d53866766eca1bf226c45a,
    '/hotels': store3f54a5facbd4b6ed22f1ef9eddab12ee,
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/api/v1/hotels/{hotel}'
*/
const show38e4793f7ab4c403291780565438ce6d = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show38e4793f7ab4c403291780565438ce6d.url(args, options),
    method: 'get',
})

show38e4793f7ab4c403291780565438ce6d.definition = {
    methods: ["get","head"],
    url: '/api/v1/hotels/{hotel}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/api/v1/hotels/{hotel}'
*/
show38e4793f7ab4c403291780565438ce6d.url = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hotel: args }
    }

    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: args.hotel,
    }

    return show38e4793f7ab4c403291780565438ce6d.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/api/v1/hotels/{hotel}'
*/
show38e4793f7ab4c403291780565438ce6d.get = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show38e4793f7ab4c403291780565438ce6d.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/api/v1/hotels/{hotel}'
*/
show38e4793f7ab4c403291780565438ce6d.head = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show38e4793f7ab4c403291780565438ce6d.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/api/v1/hotels/{hotel}'
*/
const show38e4793f7ab4c403291780565438ce6dForm = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show38e4793f7ab4c403291780565438ce6d.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/api/v1/hotels/{hotel}'
*/
show38e4793f7ab4c403291780565438ce6dForm.get = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show38e4793f7ab4c403291780565438ce6d.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/api/v1/hotels/{hotel}'
*/
show38e4793f7ab4c403291780565438ce6dForm.head = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show38e4793f7ab4c403291780565438ce6d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show38e4793f7ab4c403291780565438ce6d.form = show38e4793f7ab4c403291780565438ce6dForm
/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/hotels/{hotel}'
*/
const show0a85c6a9488c3d6025279870c59d8e2b = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show0a85c6a9488c3d6025279870c59d8e2b.url(args, options),
    method: 'get',
})

show0a85c6a9488c3d6025279870c59d8e2b.definition = {
    methods: ["get","head"],
    url: '/hotels/{hotel}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/hotels/{hotel}'
*/
show0a85c6a9488c3d6025279870c59d8e2b.url = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hotel: args }
    }

    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: args.hotel,
    }

    return show0a85c6a9488c3d6025279870c59d8e2b.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/hotels/{hotel}'
*/
show0a85c6a9488c3d6025279870c59d8e2b.get = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show0a85c6a9488c3d6025279870c59d8e2b.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/hotels/{hotel}'
*/
show0a85c6a9488c3d6025279870c59d8e2b.head = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show0a85c6a9488c3d6025279870c59d8e2b.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/hotels/{hotel}'
*/
const show0a85c6a9488c3d6025279870c59d8e2bForm = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show0a85c6a9488c3d6025279870c59d8e2b.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/hotels/{hotel}'
*/
show0a85c6a9488c3d6025279870c59d8e2bForm.get = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show0a85c6a9488c3d6025279870c59d8e2b.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::show
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:54
* @route '/hotels/{hotel}'
*/
show0a85c6a9488c3d6025279870c59d8e2bForm.head = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show0a85c6a9488c3d6025279870c59d8e2b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show0a85c6a9488c3d6025279870c59d8e2b.form = show0a85c6a9488c3d6025279870c59d8e2bForm

export const show = {
    '/api/v1/hotels/{hotel}': show38e4793f7ab4c403291780565438ce6d,
    '/hotels/{hotel}': show0a85c6a9488c3d6025279870c59d8e2b,
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/api/v1/hotels/{hotel}'
*/
const update38e4793f7ab4c403291780565438ce6d = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update38e4793f7ab4c403291780565438ce6d.url(args, options),
    method: 'put',
})

update38e4793f7ab4c403291780565438ce6d.definition = {
    methods: ["put","patch"],
    url: '/api/v1/hotels/{hotel}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/api/v1/hotels/{hotel}'
*/
update38e4793f7ab4c403291780565438ce6d.url = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hotel: args }
    }

    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: args.hotel,
    }

    return update38e4793f7ab4c403291780565438ce6d.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/api/v1/hotels/{hotel}'
*/
update38e4793f7ab4c403291780565438ce6d.put = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update38e4793f7ab4c403291780565438ce6d.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/api/v1/hotels/{hotel}'
*/
update38e4793f7ab4c403291780565438ce6d.patch = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update38e4793f7ab4c403291780565438ce6d.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/api/v1/hotels/{hotel}'
*/
const update38e4793f7ab4c403291780565438ce6dForm = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update38e4793f7ab4c403291780565438ce6d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/api/v1/hotels/{hotel}'
*/
update38e4793f7ab4c403291780565438ce6dForm.put = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update38e4793f7ab4c403291780565438ce6d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/api/v1/hotels/{hotel}'
*/
update38e4793f7ab4c403291780565438ce6dForm.patch = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update38e4793f7ab4c403291780565438ce6d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update38e4793f7ab4c403291780565438ce6d.form = update38e4793f7ab4c403291780565438ce6dForm
/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/hotels/{hotel}'
*/
const update0a85c6a9488c3d6025279870c59d8e2b = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update0a85c6a9488c3d6025279870c59d8e2b.url(args, options),
    method: 'put',
})

update0a85c6a9488c3d6025279870c59d8e2b.definition = {
    methods: ["put","patch"],
    url: '/hotels/{hotel}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/hotels/{hotel}'
*/
update0a85c6a9488c3d6025279870c59d8e2b.url = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hotel: args }
    }

    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: args.hotel,
    }

    return update0a85c6a9488c3d6025279870c59d8e2b.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/hotels/{hotel}'
*/
update0a85c6a9488c3d6025279870c59d8e2b.put = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update0a85c6a9488c3d6025279870c59d8e2b.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/hotels/{hotel}'
*/
update0a85c6a9488c3d6025279870c59d8e2b.patch = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update0a85c6a9488c3d6025279870c59d8e2b.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/hotels/{hotel}'
*/
const update0a85c6a9488c3d6025279870c59d8e2bForm = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update0a85c6a9488c3d6025279870c59d8e2b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/hotels/{hotel}'
*/
update0a85c6a9488c3d6025279870c59d8e2bForm.put = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update0a85c6a9488c3d6025279870c59d8e2b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::update
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:86
* @route '/hotels/{hotel}'
*/
update0a85c6a9488c3d6025279870c59d8e2bForm.patch = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update0a85c6a9488c3d6025279870c59d8e2b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update0a85c6a9488c3d6025279870c59d8e2b.form = update0a85c6a9488c3d6025279870c59d8e2bForm

export const update = {
    '/api/v1/hotels/{hotel}': update38e4793f7ab4c403291780565438ce6d,
    '/hotels/{hotel}': update0a85c6a9488c3d6025279870c59d8e2b,
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:102
* @route '/api/v1/hotels/{hotel}'
*/
const destroy38e4793f7ab4c403291780565438ce6d = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy38e4793f7ab4c403291780565438ce6d.url(args, options),
    method: 'delete',
})

destroy38e4793f7ab4c403291780565438ce6d.definition = {
    methods: ["delete"],
    url: '/api/v1/hotels/{hotel}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:102
* @route '/api/v1/hotels/{hotel}'
*/
destroy38e4793f7ab4c403291780565438ce6d.url = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hotel: args }
    }

    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: args.hotel,
    }

    return destroy38e4793f7ab4c403291780565438ce6d.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:102
* @route '/api/v1/hotels/{hotel}'
*/
destroy38e4793f7ab4c403291780565438ce6d.delete = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy38e4793f7ab4c403291780565438ce6d.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:102
* @route '/api/v1/hotels/{hotel}'
*/
const destroy38e4793f7ab4c403291780565438ce6dForm = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy38e4793f7ab4c403291780565438ce6d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:102
* @route '/api/v1/hotels/{hotel}'
*/
destroy38e4793f7ab4c403291780565438ce6dForm.delete = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy38e4793f7ab4c403291780565438ce6d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy38e4793f7ab4c403291780565438ce6d.form = destroy38e4793f7ab4c403291780565438ce6dForm
/**
* @see \Modules\Hotel\Http\Controllers\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:102
* @route '/hotels/{hotel}'
*/
const destroy0a85c6a9488c3d6025279870c59d8e2b = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy0a85c6a9488c3d6025279870c59d8e2b.url(args, options),
    method: 'delete',
})

destroy0a85c6a9488c3d6025279870c59d8e2b.definition = {
    methods: ["delete"],
    url: '/hotels/{hotel}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:102
* @route '/hotels/{hotel}'
*/
destroy0a85c6a9488c3d6025279870c59d8e2b.url = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hotel: args }
    }

    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: args.hotel,
    }

    return destroy0a85c6a9488c3d6025279870c59d8e2b.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:102
* @route '/hotels/{hotel}'
*/
destroy0a85c6a9488c3d6025279870c59d8e2b.delete = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy0a85c6a9488c3d6025279870c59d8e2b.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:102
* @route '/hotels/{hotel}'
*/
const destroy0a85c6a9488c3d6025279870c59d8e2bForm = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy0a85c6a9488c3d6025279870c59d8e2b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::destroy
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:102
* @route '/hotels/{hotel}'
*/
destroy0a85c6a9488c3d6025279870c59d8e2bForm.delete = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy0a85c6a9488c3d6025279870c59d8e2b.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy0a85c6a9488c3d6025279870c59d8e2b.form = destroy0a85c6a9488c3d6025279870c59d8e2bForm

export const destroy = {
    '/api/v1/hotels/{hotel}': destroy38e4793f7ab4c403291780565438ce6d,
    '/hotels/{hotel}': destroy0a85c6a9488c3d6025279870c59d8e2b,
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:34
* @route '/hotels/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/hotels/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:34
* @route '/hotels/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:34
* @route '/hotels/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:34
* @route '/hotels/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:34
* @route '/hotels/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:34
* @route '/hotels/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::create
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:34
* @route '/hotels/create'
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
* @see \Modules\Hotel\Http\Controllers\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:70
* @route '/hotels/{hotel}/edit'
*/
export const edit = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/hotels/{hotel}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:70
* @route '/hotels/{hotel}/edit'
*/
edit.url = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hotel: args }
    }

    if (Array.isArray(args)) {
        args = {
            hotel: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        hotel: args.hotel,
    }

    return edit.definition.url
            .replace('{hotel}', parsedArgs.hotel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:70
* @route '/hotels/{hotel}/edit'
*/
edit.get = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:70
* @route '/hotels/{hotel}/edit'
*/
edit.head = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:70
* @route '/hotels/{hotel}/edit'
*/
const editForm = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:70
* @route '/hotels/{hotel}/edit'
*/
editForm.get = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\HotelController::edit
* @see Modules/Hotel/app/Http/Controllers/HotelController.php:70
* @route '/hotels/{hotel}/edit'
*/
editForm.head = (args: { hotel: string | number } | [hotel: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const HotelController = { index, store, show, update, destroy, create, edit }

export default HotelController