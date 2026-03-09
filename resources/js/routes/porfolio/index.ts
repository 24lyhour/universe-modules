import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
import headers from './headers'
import footers from './footers'
import pages from './pages'
import services from './services'
import testimonials from './testimonials'
import settings from './settings'
import messages from './messages'
/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/dashboard/portfolios'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolios',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/dashboard/portfolios'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/dashboard/portfolios'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::index
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:23
* @route '/dashboard/portfolios'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

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
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::store
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:50
* @route '/dashboard/portfolios'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/portfolios',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::store
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:50
* @route '/dashboard/portfolios'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::store
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:50
* @route '/dashboard/portfolios'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/dashboard/portfolios/{portfolio}'
*/
export const show = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/portfolios/{portfolio}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/dashboard/portfolios/{portfolio}'
*/
show.url = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{portfolio}', parsedArgs.portfolio.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/dashboard/portfolios/{portfolio}'
*/
show.get = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::show
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:62
* @route '/dashboard/portfolios/{portfolio}'
*/
show.head = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

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
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/dashboard/portfolios/{portfolio}'
*/
export const update = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/portfolios/{portfolio}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/dashboard/portfolios/{portfolio}'
*/
update.url = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{portfolio}', parsedArgs.portfolio.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/dashboard/portfolios/{portfolio}'
*/
update.put = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::update
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:98
* @route '/dashboard/portfolios/{portfolio}'
*/
update.patch = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:114
* @route '/dashboard/portfolios/{portfolio}'
*/
export const destroy = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/portfolios/{portfolio}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:114
* @route '/dashboard/portfolios/{portfolio}'
*/
destroy.url = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{portfolio}', parsedArgs.portfolio.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\PorfolioController::destroy
* @see Modules/Porfolio/app/Http/Controllers/PorfolioController.php:114
* @route '/dashboard/portfolios/{portfolio}'
*/
destroy.delete = (args: { portfolio: string | number } | [portfolio: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const porfolio = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    headers: Object.assign(headers, headers),
    footers: Object.assign(footers, footers),
    pages: Object.assign(pages, pages),
    services: Object.assign(services, services),
    testimonials: Object.assign(testimonials, testimonials),
    settings: Object.assign(settings, settings),
    messages: Object.assign(messages, messages),
}

export default porfolio