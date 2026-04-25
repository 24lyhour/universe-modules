import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/api/v1/landings'
*/
const index9c96a6b45d1f57f876ab206b58706462 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index9c96a6b45d1f57f876ab206b58706462.url(options),
    method: 'get',
})

index9c96a6b45d1f57f876ab206b58706462.definition = {
    methods: ["get","head"],
    url: '/api/v1/landings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/api/v1/landings'
*/
index9c96a6b45d1f57f876ab206b58706462.url = (options?: RouteQueryOptions) => {
    return index9c96a6b45d1f57f876ab206b58706462.definition.url + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/api/v1/landings'
*/
index9c96a6b45d1f57f876ab206b58706462.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index9c96a6b45d1f57f876ab206b58706462.url(options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/api/v1/landings'
*/
index9c96a6b45d1f57f876ab206b58706462.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index9c96a6b45d1f57f876ab206b58706462.url(options),
    method: 'head',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/api/v1/landings'
*/
const index9c96a6b45d1f57f876ab206b58706462Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index9c96a6b45d1f57f876ab206b58706462.url(options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/api/v1/landings'
*/
index9c96a6b45d1f57f876ab206b58706462Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index9c96a6b45d1f57f876ab206b58706462.url(options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/api/v1/landings'
*/
index9c96a6b45d1f57f876ab206b58706462Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index9c96a6b45d1f57f876ab206b58706462.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index9c96a6b45d1f57f876ab206b58706462.form = index9c96a6b45d1f57f876ab206b58706462Form
/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/landings'
*/
const indexa2aa9e8baba66d4fdd7a99690739c610 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexa2aa9e8baba66d4fdd7a99690739c610.url(options),
    method: 'get',
})

indexa2aa9e8baba66d4fdd7a99690739c610.definition = {
    methods: ["get","head"],
    url: '/landings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/landings'
*/
indexa2aa9e8baba66d4fdd7a99690739c610.url = (options?: RouteQueryOptions) => {
    return indexa2aa9e8baba66d4fdd7a99690739c610.definition.url + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/landings'
*/
indexa2aa9e8baba66d4fdd7a99690739c610.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexa2aa9e8baba66d4fdd7a99690739c610.url(options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/landings'
*/
indexa2aa9e8baba66d4fdd7a99690739c610.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexa2aa9e8baba66d4fdd7a99690739c610.url(options),
    method: 'head',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/landings'
*/
const indexa2aa9e8baba66d4fdd7a99690739c610Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexa2aa9e8baba66d4fdd7a99690739c610.url(options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/landings'
*/
indexa2aa9e8baba66d4fdd7a99690739c610Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexa2aa9e8baba66d4fdd7a99690739c610.url(options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::index
* @see Modules/Landing/app/Http/Controllers/LandingController.php:13
* @route '/landings'
*/
indexa2aa9e8baba66d4fdd7a99690739c610Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexa2aa9e8baba66d4fdd7a99690739c610.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexa2aa9e8baba66d4fdd7a99690739c610.form = indexa2aa9e8baba66d4fdd7a99690739c610Form

export const index = {
    '/api/v1/landings': index9c96a6b45d1f57f876ab206b58706462,
    '/landings': indexa2aa9e8baba66d4fdd7a99690739c610,
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::store
* @see Modules/Landing/app/Http/Controllers/LandingController.php:29
* @route '/api/v1/landings'
*/
const store9c96a6b45d1f57f876ab206b58706462 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store9c96a6b45d1f57f876ab206b58706462.url(options),
    method: 'post',
})

store9c96a6b45d1f57f876ab206b58706462.definition = {
    methods: ["post"],
    url: '/api/v1/landings',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::store
* @see Modules/Landing/app/Http/Controllers/LandingController.php:29
* @route '/api/v1/landings'
*/
store9c96a6b45d1f57f876ab206b58706462.url = (options?: RouteQueryOptions) => {
    return store9c96a6b45d1f57f876ab206b58706462.definition.url + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::store
* @see Modules/Landing/app/Http/Controllers/LandingController.php:29
* @route '/api/v1/landings'
*/
store9c96a6b45d1f57f876ab206b58706462.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store9c96a6b45d1f57f876ab206b58706462.url(options),
    method: 'post',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::store
* @see Modules/Landing/app/Http/Controllers/LandingController.php:29
* @route '/api/v1/landings'
*/
const store9c96a6b45d1f57f876ab206b58706462Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store9c96a6b45d1f57f876ab206b58706462.url(options),
    method: 'post',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::store
* @see Modules/Landing/app/Http/Controllers/LandingController.php:29
* @route '/api/v1/landings'
*/
store9c96a6b45d1f57f876ab206b58706462Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store9c96a6b45d1f57f876ab206b58706462.url(options),
    method: 'post',
})

store9c96a6b45d1f57f876ab206b58706462.form = store9c96a6b45d1f57f876ab206b58706462Form
/**
* @see \Modules\Landing\Http\Controllers\LandingController::store
* @see Modules/Landing/app/Http/Controllers/LandingController.php:29
* @route '/landings'
*/
const storea2aa9e8baba66d4fdd7a99690739c610 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storea2aa9e8baba66d4fdd7a99690739c610.url(options),
    method: 'post',
})

storea2aa9e8baba66d4fdd7a99690739c610.definition = {
    methods: ["post"],
    url: '/landings',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::store
* @see Modules/Landing/app/Http/Controllers/LandingController.php:29
* @route '/landings'
*/
storea2aa9e8baba66d4fdd7a99690739c610.url = (options?: RouteQueryOptions) => {
    return storea2aa9e8baba66d4fdd7a99690739c610.definition.url + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::store
* @see Modules/Landing/app/Http/Controllers/LandingController.php:29
* @route '/landings'
*/
storea2aa9e8baba66d4fdd7a99690739c610.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storea2aa9e8baba66d4fdd7a99690739c610.url(options),
    method: 'post',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::store
* @see Modules/Landing/app/Http/Controllers/LandingController.php:29
* @route '/landings'
*/
const storea2aa9e8baba66d4fdd7a99690739c610Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storea2aa9e8baba66d4fdd7a99690739c610.url(options),
    method: 'post',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::store
* @see Modules/Landing/app/Http/Controllers/LandingController.php:29
* @route '/landings'
*/
storea2aa9e8baba66d4fdd7a99690739c610Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storea2aa9e8baba66d4fdd7a99690739c610.url(options),
    method: 'post',
})

storea2aa9e8baba66d4fdd7a99690739c610.form = storea2aa9e8baba66d4fdd7a99690739c610Form

export const store = {
    '/api/v1/landings': store9c96a6b45d1f57f876ab206b58706462,
    '/landings': storea2aa9e8baba66d4fdd7a99690739c610,
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/api/v1/landings/{landing}'
*/
const show12c405cd0a15c30e32c4cb2d98502849 = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show12c405cd0a15c30e32c4cb2d98502849.url(args, options),
    method: 'get',
})

show12c405cd0a15c30e32c4cb2d98502849.definition = {
    methods: ["get","head"],
    url: '/api/v1/landings/{landing}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/api/v1/landings/{landing}'
*/
show12c405cd0a15c30e32c4cb2d98502849.url = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { landing: args }
    }

    if (Array.isArray(args)) {
        args = {
            landing: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        landing: args.landing,
    }

    return show12c405cd0a15c30e32c4cb2d98502849.definition.url
            .replace('{landing}', parsedArgs.landing.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/api/v1/landings/{landing}'
*/
show12c405cd0a15c30e32c4cb2d98502849.get = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show12c405cd0a15c30e32c4cb2d98502849.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/api/v1/landings/{landing}'
*/
show12c405cd0a15c30e32c4cb2d98502849.head = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show12c405cd0a15c30e32c4cb2d98502849.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/api/v1/landings/{landing}'
*/
const show12c405cd0a15c30e32c4cb2d98502849Form = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show12c405cd0a15c30e32c4cb2d98502849.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/api/v1/landings/{landing}'
*/
show12c405cd0a15c30e32c4cb2d98502849Form.get = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show12c405cd0a15c30e32c4cb2d98502849.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/api/v1/landings/{landing}'
*/
show12c405cd0a15c30e32c4cb2d98502849Form.head = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show12c405cd0a15c30e32c4cb2d98502849.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show12c405cd0a15c30e32c4cb2d98502849.form = show12c405cd0a15c30e32c4cb2d98502849Form
/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/landings/{landing}'
*/
const show47414ca29f937e915230468830122b00 = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show47414ca29f937e915230468830122b00.url(args, options),
    method: 'get',
})

show47414ca29f937e915230468830122b00.definition = {
    methods: ["get","head"],
    url: '/landings/{landing}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/landings/{landing}'
*/
show47414ca29f937e915230468830122b00.url = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { landing: args }
    }

    if (Array.isArray(args)) {
        args = {
            landing: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        landing: args.landing,
    }

    return show47414ca29f937e915230468830122b00.definition.url
            .replace('{landing}', parsedArgs.landing.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/landings/{landing}'
*/
show47414ca29f937e915230468830122b00.get = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show47414ca29f937e915230468830122b00.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/landings/{landing}'
*/
show47414ca29f937e915230468830122b00.head = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show47414ca29f937e915230468830122b00.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/landings/{landing}'
*/
const show47414ca29f937e915230468830122b00Form = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show47414ca29f937e915230468830122b00.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/landings/{landing}'
*/
show47414ca29f937e915230468830122b00Form.get = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show47414ca29f937e915230468830122b00.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::show
* @see Modules/Landing/app/Http/Controllers/LandingController.php:34
* @route '/landings/{landing}'
*/
show47414ca29f937e915230468830122b00Form.head = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show47414ca29f937e915230468830122b00.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show47414ca29f937e915230468830122b00.form = show47414ca29f937e915230468830122b00Form

export const show = {
    '/api/v1/landings/{landing}': show12c405cd0a15c30e32c4cb2d98502849,
    '/landings/{landing}': show47414ca29f937e915230468830122b00,
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/api/v1/landings/{landing}'
*/
const update12c405cd0a15c30e32c4cb2d98502849 = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update12c405cd0a15c30e32c4cb2d98502849.url(args, options),
    method: 'put',
})

update12c405cd0a15c30e32c4cb2d98502849.definition = {
    methods: ["put","patch"],
    url: '/api/v1/landings/{landing}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/api/v1/landings/{landing}'
*/
update12c405cd0a15c30e32c4cb2d98502849.url = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { landing: args }
    }

    if (Array.isArray(args)) {
        args = {
            landing: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        landing: args.landing,
    }

    return update12c405cd0a15c30e32c4cb2d98502849.definition.url
            .replace('{landing}', parsedArgs.landing.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/api/v1/landings/{landing}'
*/
update12c405cd0a15c30e32c4cb2d98502849.put = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update12c405cd0a15c30e32c4cb2d98502849.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/api/v1/landings/{landing}'
*/
update12c405cd0a15c30e32c4cb2d98502849.patch = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update12c405cd0a15c30e32c4cb2d98502849.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/api/v1/landings/{landing}'
*/
const update12c405cd0a15c30e32c4cb2d98502849Form = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update12c405cd0a15c30e32c4cb2d98502849.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/api/v1/landings/{landing}'
*/
update12c405cd0a15c30e32c4cb2d98502849Form.put = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update12c405cd0a15c30e32c4cb2d98502849.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/api/v1/landings/{landing}'
*/
update12c405cd0a15c30e32c4cb2d98502849Form.patch = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update12c405cd0a15c30e32c4cb2d98502849.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update12c405cd0a15c30e32c4cb2d98502849.form = update12c405cd0a15c30e32c4cb2d98502849Form
/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/landings/{landing}'
*/
const update47414ca29f937e915230468830122b00 = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update47414ca29f937e915230468830122b00.url(args, options),
    method: 'put',
})

update47414ca29f937e915230468830122b00.definition = {
    methods: ["put","patch"],
    url: '/landings/{landing}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/landings/{landing}'
*/
update47414ca29f937e915230468830122b00.url = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { landing: args }
    }

    if (Array.isArray(args)) {
        args = {
            landing: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        landing: args.landing,
    }

    return update47414ca29f937e915230468830122b00.definition.url
            .replace('{landing}', parsedArgs.landing.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/landings/{landing}'
*/
update47414ca29f937e915230468830122b00.put = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update47414ca29f937e915230468830122b00.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/landings/{landing}'
*/
update47414ca29f937e915230468830122b00.patch = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update47414ca29f937e915230468830122b00.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/landings/{landing}'
*/
const update47414ca29f937e915230468830122b00Form = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update47414ca29f937e915230468830122b00.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/landings/{landing}'
*/
update47414ca29f937e915230468830122b00Form.put = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update47414ca29f937e915230468830122b00.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::update
* @see Modules/Landing/app/Http/Controllers/LandingController.php:50
* @route '/landings/{landing}'
*/
update47414ca29f937e915230468830122b00Form.patch = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update47414ca29f937e915230468830122b00.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update47414ca29f937e915230468830122b00.form = update47414ca29f937e915230468830122b00Form

export const update = {
    '/api/v1/landings/{landing}': update12c405cd0a15c30e32c4cb2d98502849,
    '/landings/{landing}': update47414ca29f937e915230468830122b00,
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::destroy
* @see Modules/Landing/app/Http/Controllers/LandingController.php:55
* @route '/api/v1/landings/{landing}'
*/
const destroy12c405cd0a15c30e32c4cb2d98502849 = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy12c405cd0a15c30e32c4cb2d98502849.url(args, options),
    method: 'delete',
})

destroy12c405cd0a15c30e32c4cb2d98502849.definition = {
    methods: ["delete"],
    url: '/api/v1/landings/{landing}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::destroy
* @see Modules/Landing/app/Http/Controllers/LandingController.php:55
* @route '/api/v1/landings/{landing}'
*/
destroy12c405cd0a15c30e32c4cb2d98502849.url = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { landing: args }
    }

    if (Array.isArray(args)) {
        args = {
            landing: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        landing: args.landing,
    }

    return destroy12c405cd0a15c30e32c4cb2d98502849.definition.url
            .replace('{landing}', parsedArgs.landing.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::destroy
* @see Modules/Landing/app/Http/Controllers/LandingController.php:55
* @route '/api/v1/landings/{landing}'
*/
destroy12c405cd0a15c30e32c4cb2d98502849.delete = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy12c405cd0a15c30e32c4cb2d98502849.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::destroy
* @see Modules/Landing/app/Http/Controllers/LandingController.php:55
* @route '/api/v1/landings/{landing}'
*/
const destroy12c405cd0a15c30e32c4cb2d98502849Form = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy12c405cd0a15c30e32c4cb2d98502849.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::destroy
* @see Modules/Landing/app/Http/Controllers/LandingController.php:55
* @route '/api/v1/landings/{landing}'
*/
destroy12c405cd0a15c30e32c4cb2d98502849Form.delete = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy12c405cd0a15c30e32c4cb2d98502849.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy12c405cd0a15c30e32c4cb2d98502849.form = destroy12c405cd0a15c30e32c4cb2d98502849Form
/**
* @see \Modules\Landing\Http\Controllers\LandingController::destroy
* @see Modules/Landing/app/Http/Controllers/LandingController.php:55
* @route '/landings/{landing}'
*/
const destroy47414ca29f937e915230468830122b00 = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy47414ca29f937e915230468830122b00.url(args, options),
    method: 'delete',
})

destroy47414ca29f937e915230468830122b00.definition = {
    methods: ["delete"],
    url: '/landings/{landing}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::destroy
* @see Modules/Landing/app/Http/Controllers/LandingController.php:55
* @route '/landings/{landing}'
*/
destroy47414ca29f937e915230468830122b00.url = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { landing: args }
    }

    if (Array.isArray(args)) {
        args = {
            landing: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        landing: args.landing,
    }

    return destroy47414ca29f937e915230468830122b00.definition.url
            .replace('{landing}', parsedArgs.landing.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::destroy
* @see Modules/Landing/app/Http/Controllers/LandingController.php:55
* @route '/landings/{landing}'
*/
destroy47414ca29f937e915230468830122b00.delete = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy47414ca29f937e915230468830122b00.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::destroy
* @see Modules/Landing/app/Http/Controllers/LandingController.php:55
* @route '/landings/{landing}'
*/
const destroy47414ca29f937e915230468830122b00Form = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy47414ca29f937e915230468830122b00.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::destroy
* @see Modules/Landing/app/Http/Controllers/LandingController.php:55
* @route '/landings/{landing}'
*/
destroy47414ca29f937e915230468830122b00Form.delete = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy47414ca29f937e915230468830122b00.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy47414ca29f937e915230468830122b00.form = destroy47414ca29f937e915230468830122b00Form

export const destroy = {
    '/api/v1/landings/{landing}': destroy12c405cd0a15c30e32c4cb2d98502849,
    '/landings/{landing}': destroy47414ca29f937e915230468830122b00,
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::create
* @see Modules/Landing/app/Http/Controllers/LandingController.php:21
* @route '/landings/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/landings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::create
* @see Modules/Landing/app/Http/Controllers/LandingController.php:21
* @route '/landings/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::create
* @see Modules/Landing/app/Http/Controllers/LandingController.php:21
* @route '/landings/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::create
* @see Modules/Landing/app/Http/Controllers/LandingController.php:21
* @route '/landings/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::create
* @see Modules/Landing/app/Http/Controllers/LandingController.php:21
* @route '/landings/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::create
* @see Modules/Landing/app/Http/Controllers/LandingController.php:21
* @route '/landings/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::create
* @see Modules/Landing/app/Http/Controllers/LandingController.php:21
* @route '/landings/create'
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
* @see \Modules\Landing\Http\Controllers\LandingController::edit
* @see Modules/Landing/app/Http/Controllers/LandingController.php:42
* @route '/landings/{landing}/edit'
*/
export const edit = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/landings/{landing}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Landing\Http\Controllers\LandingController::edit
* @see Modules/Landing/app/Http/Controllers/LandingController.php:42
* @route '/landings/{landing}/edit'
*/
edit.url = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { landing: args }
    }

    if (Array.isArray(args)) {
        args = {
            landing: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        landing: args.landing,
    }

    return edit.definition.url
            .replace('{landing}', parsedArgs.landing.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Landing\Http\Controllers\LandingController::edit
* @see Modules/Landing/app/Http/Controllers/LandingController.php:42
* @route '/landings/{landing}/edit'
*/
edit.get = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::edit
* @see Modules/Landing/app/Http/Controllers/LandingController.php:42
* @route '/landings/{landing}/edit'
*/
edit.head = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::edit
* @see Modules/Landing/app/Http/Controllers/LandingController.php:42
* @route '/landings/{landing}/edit'
*/
const editForm = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::edit
* @see Modules/Landing/app/Http/Controllers/LandingController.php:42
* @route '/landings/{landing}/edit'
*/
editForm.get = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Landing\Http\Controllers\LandingController::edit
* @see Modules/Landing/app/Http/Controllers/LandingController.php:42
* @route '/landings/{landing}/edit'
*/
editForm.head = (args: { landing: string | number } | [landing: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const LandingController = { index, store, show, update, destroy, create, edit }

export default LandingController