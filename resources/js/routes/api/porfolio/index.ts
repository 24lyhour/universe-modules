import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/api/v1/porfolios'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/porfolios',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/api/v1/porfolios'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/api/v1/porfolios'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/api/v1/porfolios'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::store
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:50
* @route '/api/v1/porfolios'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/porfolios',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::store
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:50
* @route '/api/v1/porfolios'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::store
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:50
* @route '/api/v1/porfolios'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/api/v1/porfolios/{porfolio}'
*/
export const show = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/porfolios/{porfolio}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/api/v1/porfolios/{porfolio}'
*/
show.url = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{porfolio}', parsedArgs.porfolio.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/api/v1/porfolios/{porfolio}'
*/
show.get = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/api/v1/porfolios/{porfolio}'
*/
show.head = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/api/v1/porfolios/{porfolio}'
*/
export const update = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/porfolios/{porfolio}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/api/v1/porfolios/{porfolio}'
*/
update.url = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{porfolio}', parsedArgs.porfolio.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/api/v1/porfolios/{porfolio}'
*/
update.put = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/api/v1/porfolios/{porfolio}'
*/
update.patch = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:114
* @route '/api/v1/porfolios/{porfolio}'
*/
export const destroy = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/porfolios/{porfolio}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:114
* @route '/api/v1/porfolios/{porfolio}'
*/
destroy.url = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{porfolio}', parsedArgs.porfolio.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:114
* @route '/api/v1/porfolios/{porfolio}'
*/
destroy.delete = (args: { porfolio: string | number } | [porfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const porfolio = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default porfolio