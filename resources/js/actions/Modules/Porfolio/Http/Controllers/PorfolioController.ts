import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/api/v1/porfolios'
*/
const index27cf4c0298e61b96eb76b9d385c68c4c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index27cf4c0298e61b96eb76b9d385c68c4c.url(options),
    method: 'get',
})

index27cf4c0298e61b96eb76b9d385c68c4c.definition = {
    methods: ["get","head"],
    url: '/api/v1/porfolios',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/api/v1/porfolios'
*/
index27cf4c0298e61b96eb76b9d385c68c4c.url = (options?: RouteQueryOptions) => {
    return index27cf4c0298e61b96eb76b9d385c68c4c.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/api/v1/porfolios'
*/
index27cf4c0298e61b96eb76b9d385c68c4c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index27cf4c0298e61b96eb76b9d385c68c4c.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/api/v1/porfolios'
*/
index27cf4c0298e61b96eb76b9d385c68c4c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index27cf4c0298e61b96eb76b9d385c68c4c.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/api/v1/porfolios'
*/
const index27cf4c0298e61b96eb76b9d385c68c4cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index27cf4c0298e61b96eb76b9d385c68c4c.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/api/v1/porfolios'
*/
index27cf4c0298e61b96eb76b9d385c68c4cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index27cf4c0298e61b96eb76b9d385c68c4c.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/api/v1/porfolios'
*/
index27cf4c0298e61b96eb76b9d385c68c4cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index27cf4c0298e61b96eb76b9d385c68c4c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index27cf4c0298e61b96eb76b9d385c68c4c.form = index27cf4c0298e61b96eb76b9d385c68c4cForm
/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/dashboard/portfolios'
*/
const index4a10e4e89ff6cf2d5b1af1db822a0b4d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4a10e4e89ff6cf2d5b1af1db822a0b4d.url(options),
    method: 'get',
})

index4a10e4e89ff6cf2d5b1af1db822a0b4d.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolios',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/dashboard/portfolios'
*/
index4a10e4e89ff6cf2d5b1af1db822a0b4d.url = (options?: RouteQueryOptions) => {
    return index4a10e4e89ff6cf2d5b1af1db822a0b4d.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/dashboard/portfolios'
*/
index4a10e4e89ff6cf2d5b1af1db822a0b4d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4a10e4e89ff6cf2d5b1af1db822a0b4d.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/dashboard/portfolios'
*/
index4a10e4e89ff6cf2d5b1af1db822a0b4d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index4a10e4e89ff6cf2d5b1af1db822a0b4d.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/dashboard/portfolios'
*/
const index4a10e4e89ff6cf2d5b1af1db822a0b4dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4a10e4e89ff6cf2d5b1af1db822a0b4d.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/dashboard/portfolios'
*/
index4a10e4e89ff6cf2d5b1af1db822a0b4dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4a10e4e89ff6cf2d5b1af1db822a0b4d.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/dashboard/portfolios'
*/
index4a10e4e89ff6cf2d5b1af1db822a0b4dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index4a10e4e89ff6cf2d5b1af1db822a0b4d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index4a10e4e89ff6cf2d5b1af1db822a0b4d.form = index4a10e4e89ff6cf2d5b1af1db822a0b4dForm

export const index = {
    '/api/v1/porfolios': index27cf4c0298e61b96eb76b9d385c68c4c,
    '/dashboard/portfolios': index4a10e4e89ff6cf2d5b1af1db822a0b4d,
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::store
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:50
* @route '/api/v1/porfolios'
*/
const store27cf4c0298e61b96eb76b9d385c68c4c = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store27cf4c0298e61b96eb76b9d385c68c4c.url(options),
    method: 'post',
})

store27cf4c0298e61b96eb76b9d385c68c4c.definition = {
    methods: ["post"],
    url: '/api/v1/porfolios',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::store
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:50
* @route '/api/v1/porfolios'
*/
store27cf4c0298e61b96eb76b9d385c68c4c.url = (options?: RouteQueryOptions) => {
    return store27cf4c0298e61b96eb76b9d385c68c4c.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::store
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:50
* @route '/api/v1/porfolios'
*/
store27cf4c0298e61b96eb76b9d385c68c4c.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store27cf4c0298e61b96eb76b9d385c68c4c.url(options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::store
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:50
* @route '/api/v1/porfolios'
*/
const store27cf4c0298e61b96eb76b9d385c68c4cForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store27cf4c0298e61b96eb76b9d385c68c4c.url(options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::store
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:50
* @route '/api/v1/porfolios'
*/
store27cf4c0298e61b96eb76b9d385c68c4cForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store27cf4c0298e61b96eb76b9d385c68c4c.url(options),
    method: 'post',
})

store27cf4c0298e61b96eb76b9d385c68c4c.form = store27cf4c0298e61b96eb76b9d385c68c4cForm
/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::store
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:50
* @route '/dashboard/portfolios'
*/
const store4a10e4e89ff6cf2d5b1af1db822a0b4d = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store4a10e4e89ff6cf2d5b1af1db822a0b4d.url(options),
    method: 'post',
})

store4a10e4e89ff6cf2d5b1af1db822a0b4d.definition = {
    methods: ["post"],
    url: '/dashboard/portfolios',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::store
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:50
* @route '/dashboard/portfolios'
*/
store4a10e4e89ff6cf2d5b1af1db822a0b4d.url = (options?: RouteQueryOptions) => {
    return store4a10e4e89ff6cf2d5b1af1db822a0b4d.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::store
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:50
* @route '/dashboard/portfolios'
*/
store4a10e4e89ff6cf2d5b1af1db822a0b4d.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store4a10e4e89ff6cf2d5b1af1db822a0b4d.url(options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::store
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:50
* @route '/dashboard/portfolios'
*/
const store4a10e4e89ff6cf2d5b1af1db822a0b4dForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store4a10e4e89ff6cf2d5b1af1db822a0b4d.url(options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::store
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:50
* @route '/dashboard/portfolios'
*/
store4a10e4e89ff6cf2d5b1af1db822a0b4dForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store4a10e4e89ff6cf2d5b1af1db822a0b4d.url(options),
    method: 'post',
})

store4a10e4e89ff6cf2d5b1af1db822a0b4d.form = store4a10e4e89ff6cf2d5b1af1db822a0b4dForm

export const store = {
    '/api/v1/porfolios': store27cf4c0298e61b96eb76b9d385c68c4c,
    '/dashboard/portfolios': store4a10e4e89ff6cf2d5b1af1db822a0b4d,
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/api/v1/porfolios/{porfolio}'
*/
const show6b3b90ed6ef53c859374595e52d5ead7 = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show6b3b90ed6ef53c859374595e52d5ead7.url(args, options),
    method: 'get',
})

show6b3b90ed6ef53c859374595e52d5ead7.definition = {
    methods: ["get","head"],
    url: '/api/v1/porfolios/{porfolio}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/api/v1/porfolios/{porfolio}'
*/
show6b3b90ed6ef53c859374595e52d5ead7.url = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { porfolio: args }
    }

    if (Array.isArray(args)) {
        args = {
            porfolio: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        porfolio: args.porfolio,
    }

    return show6b3b90ed6ef53c859374595e52d5ead7.definition.url
            .replace('{porfolio}', parsedArgs.porfolio.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/api/v1/porfolios/{porfolio}'
*/
show6b3b90ed6ef53c859374595e52d5ead7.get = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show6b3b90ed6ef53c859374595e52d5ead7.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/api/v1/porfolios/{porfolio}'
*/
show6b3b90ed6ef53c859374595e52d5ead7.head = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show6b3b90ed6ef53c859374595e52d5ead7.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/api/v1/porfolios/{porfolio}'
*/
const show6b3b90ed6ef53c859374595e52d5ead7Form = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show6b3b90ed6ef53c859374595e52d5ead7.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/api/v1/porfolios/{porfolio}'
*/
show6b3b90ed6ef53c859374595e52d5ead7Form.get = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show6b3b90ed6ef53c859374595e52d5ead7.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/api/v1/porfolios/{porfolio}'
*/
show6b3b90ed6ef53c859374595e52d5ead7Form.head = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show6b3b90ed6ef53c859374595e52d5ead7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show6b3b90ed6ef53c859374595e52d5ead7.form = show6b3b90ed6ef53c859374595e52d5ead7Form
/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/dashboard/portfolios/{portfolio}'
*/
const show53a5afd81948b2b737c9ebbd070af157 = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show53a5afd81948b2b737c9ebbd070af157.url(args, options),
    method: 'get',
})

show53a5afd81948b2b737c9ebbd070af157.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolios/{portfolio}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/dashboard/portfolios/{portfolio}'
*/
show53a5afd81948b2b737c9ebbd070af157.url = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { portfolio: args }
    }

    if (Array.isArray(args)) {
        args = {
            portfolio: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        portfolio: args.portfolio,
    }

    return show53a5afd81948b2b737c9ebbd070af157.definition.url
            .replace('{portfolio}', parsedArgs.portfolio.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/dashboard/portfolios/{portfolio}'
*/
show53a5afd81948b2b737c9ebbd070af157.get = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show53a5afd81948b2b737c9ebbd070af157.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/dashboard/portfolios/{portfolio}'
*/
show53a5afd81948b2b737c9ebbd070af157.head = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show53a5afd81948b2b737c9ebbd070af157.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/dashboard/portfolios/{portfolio}'
*/
const show53a5afd81948b2b737c9ebbd070af157Form = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show53a5afd81948b2b737c9ebbd070af157.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/dashboard/portfolios/{portfolio}'
*/
show53a5afd81948b2b737c9ebbd070af157Form.get = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show53a5afd81948b2b737c9ebbd070af157.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/dashboard/portfolios/{portfolio}'
*/
show53a5afd81948b2b737c9ebbd070af157Form.head = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show53a5afd81948b2b737c9ebbd070af157.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show53a5afd81948b2b737c9ebbd070af157.form = show53a5afd81948b2b737c9ebbd070af157Form

export const show = {
    '/api/v1/porfolios/{porfolio}': show6b3b90ed6ef53c859374595e52d5ead7,
    '/dashboard/portfolios/{portfolio}': show53a5afd81948b2b737c9ebbd070af157,
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/api/v1/porfolios/{porfolio}'
*/
const update6b3b90ed6ef53c859374595e52d5ead7 = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update6b3b90ed6ef53c859374595e52d5ead7.url(args, options),
    method: 'put',
})

update6b3b90ed6ef53c859374595e52d5ead7.definition = {
    methods: ["put","patch"],
    url: '/api/v1/porfolios/{porfolio}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/api/v1/porfolios/{porfolio}'
*/
update6b3b90ed6ef53c859374595e52d5ead7.url = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { porfolio: args }
    }

    if (Array.isArray(args)) {
        args = {
            porfolio: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        porfolio: args.porfolio,
    }

    return update6b3b90ed6ef53c859374595e52d5ead7.definition.url
            .replace('{porfolio}', parsedArgs.porfolio.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/api/v1/porfolios/{porfolio}'
*/
update6b3b90ed6ef53c859374595e52d5ead7.put = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update6b3b90ed6ef53c859374595e52d5ead7.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/api/v1/porfolios/{porfolio}'
*/
update6b3b90ed6ef53c859374595e52d5ead7.patch = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update6b3b90ed6ef53c859374595e52d5ead7.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/api/v1/porfolios/{porfolio}'
*/
const update6b3b90ed6ef53c859374595e52d5ead7Form = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update6b3b90ed6ef53c859374595e52d5ead7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/api/v1/porfolios/{porfolio}'
*/
update6b3b90ed6ef53c859374595e52d5ead7Form.put = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update6b3b90ed6ef53c859374595e52d5ead7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/api/v1/porfolios/{porfolio}'
*/
update6b3b90ed6ef53c859374595e52d5ead7Form.patch = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update6b3b90ed6ef53c859374595e52d5ead7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update6b3b90ed6ef53c859374595e52d5ead7.form = update6b3b90ed6ef53c859374595e52d5ead7Form
/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/dashboard/portfolios/{portfolio}'
*/
const update53a5afd81948b2b737c9ebbd070af157 = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update53a5afd81948b2b737c9ebbd070af157.url(args, options),
    method: 'put',
})

update53a5afd81948b2b737c9ebbd070af157.definition = {
    methods: ["put","patch"],
    url: '/dashboard/portfolios/{portfolio}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/dashboard/portfolios/{portfolio}'
*/
update53a5afd81948b2b737c9ebbd070af157.url = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { portfolio: args }
    }

    if (Array.isArray(args)) {
        args = {
            portfolio: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        portfolio: args.portfolio,
    }

    return update53a5afd81948b2b737c9ebbd070af157.definition.url
            .replace('{portfolio}', parsedArgs.portfolio.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/dashboard/portfolios/{portfolio}'
*/
update53a5afd81948b2b737c9ebbd070af157.put = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update53a5afd81948b2b737c9ebbd070af157.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/dashboard/portfolios/{portfolio}'
*/
update53a5afd81948b2b737c9ebbd070af157.patch = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update53a5afd81948b2b737c9ebbd070af157.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/dashboard/portfolios/{portfolio}'
*/
const update53a5afd81948b2b737c9ebbd070af157Form = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update53a5afd81948b2b737c9ebbd070af157.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/dashboard/portfolios/{portfolio}'
*/
update53a5afd81948b2b737c9ebbd070af157Form.put = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update53a5afd81948b2b737c9ebbd070af157.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/dashboard/portfolios/{portfolio}'
*/
update53a5afd81948b2b737c9ebbd070af157Form.patch = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update53a5afd81948b2b737c9ebbd070af157.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update53a5afd81948b2b737c9ebbd070af157.form = update53a5afd81948b2b737c9ebbd070af157Form

export const update = {
    '/api/v1/porfolios/{porfolio}': update6b3b90ed6ef53c859374595e52d5ead7,
    '/dashboard/portfolios/{portfolio}': update53a5afd81948b2b737c9ebbd070af157,
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:114
* @route '/api/v1/porfolios/{porfolio}'
*/
const destroy6b3b90ed6ef53c859374595e52d5ead7 = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy6b3b90ed6ef53c859374595e52d5ead7.url(args, options),
    method: 'delete',
})

destroy6b3b90ed6ef53c859374595e52d5ead7.definition = {
    methods: ["delete"],
    url: '/api/v1/porfolios/{porfolio}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:114
* @route '/api/v1/porfolios/{porfolio}'
*/
destroy6b3b90ed6ef53c859374595e52d5ead7.url = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { porfolio: args }
    }

    if (Array.isArray(args)) {
        args = {
            porfolio: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        porfolio: args.porfolio,
    }

    return destroy6b3b90ed6ef53c859374595e52d5ead7.definition.url
            .replace('{porfolio}', parsedArgs.porfolio.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:114
* @route '/api/v1/porfolios/{porfolio}'
*/
destroy6b3b90ed6ef53c859374595e52d5ead7.delete = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy6b3b90ed6ef53c859374595e52d5ead7.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:114
* @route '/api/v1/porfolios/{porfolio}'
*/
const destroy6b3b90ed6ef53c859374595e52d5ead7Form = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy6b3b90ed6ef53c859374595e52d5ead7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:114
* @route '/api/v1/porfolios/{porfolio}'
*/
destroy6b3b90ed6ef53c859374595e52d5ead7Form.delete = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy6b3b90ed6ef53c859374595e52d5ead7.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy6b3b90ed6ef53c859374595e52d5ead7.form = destroy6b3b90ed6ef53c859374595e52d5ead7Form
/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:114
* @route '/dashboard/portfolios/{portfolio}'
*/
const destroy53a5afd81948b2b737c9ebbd070af157 = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy53a5afd81948b2b737c9ebbd070af157.url(args, options),
    method: 'delete',
})

destroy53a5afd81948b2b737c9ebbd070af157.definition = {
    methods: ["delete"],
    url: '/dashboard/portfolios/{portfolio}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:114
* @route '/dashboard/portfolios/{portfolio}'
*/
destroy53a5afd81948b2b737c9ebbd070af157.url = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { portfolio: args }
    }

    if (Array.isArray(args)) {
        args = {
            portfolio: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        portfolio: args.portfolio,
    }

    return destroy53a5afd81948b2b737c9ebbd070af157.definition.url
            .replace('{portfolio}', parsedArgs.portfolio.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:114
* @route '/dashboard/portfolios/{portfolio}'
*/
destroy53a5afd81948b2b737c9ebbd070af157.delete = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy53a5afd81948b2b737c9ebbd070af157.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:114
* @route '/dashboard/portfolios/{portfolio}'
*/
const destroy53a5afd81948b2b737c9ebbd070af157Form = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy53a5afd81948b2b737c9ebbd070af157.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:114
* @route '/dashboard/portfolios/{portfolio}'
*/
destroy53a5afd81948b2b737c9ebbd070af157Form.delete = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy53a5afd81948b2b737c9ebbd070af157.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy53a5afd81948b2b737c9ebbd070af157.form = destroy53a5afd81948b2b737c9ebbd070af157Form

export const destroy = {
    '/api/v1/porfolios/{porfolio}': destroy6b3b90ed6ef53c859374595e52d5ead7,
    '/dashboard/portfolios/{portfolio}': destroy53a5afd81948b2b737c9ebbd070af157,
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::create
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:38
* @route '/dashboard/portfolios/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolios/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::create
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:38
* @route '/dashboard/portfolios/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::create
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:38
* @route '/dashboard/portfolios/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::create
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:38
* @route '/dashboard/portfolios/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::create
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:38
* @route '/dashboard/portfolios/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::create
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:38
* @route '/dashboard/portfolios/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::create
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:38
* @route '/dashboard/portfolios/create'
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
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::edit
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:79
* @route '/dashboard/portfolios/{portfolio}/edit'
*/
export const edit = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolios/{portfolio}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::edit
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:79
* @route '/dashboard/portfolios/{portfolio}/edit'
*/
edit.url = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { portfolio: args }
    }

    if (Array.isArray(args)) {
        args = {
            portfolio: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        portfolio: args.portfolio,
    }

    return edit.definition.url
            .replace('{portfolio}', parsedArgs.portfolio.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::edit
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:79
* @route '/dashboard/portfolios/{portfolio}/edit'
*/
edit.get = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::edit
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:79
* @route '/dashboard/portfolios/{portfolio}/edit'
*/
edit.head = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::edit
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:79
* @route '/dashboard/portfolios/{portfolio}/edit'
*/
const editForm = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::edit
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:79
* @route '/dashboard/portfolios/{portfolio}/edit'
*/
editForm.get = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::edit
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:79
* @route '/dashboard/portfolios/{portfolio}/edit'
*/
editForm.head = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const PorfolioController = { index, store, show, update, destroy, create, edit }

export default PorfolioController