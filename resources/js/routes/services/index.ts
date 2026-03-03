import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::index
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:117
* @route '/services'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::index
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:117
* @route '/services'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::index
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:117
* @route '/services'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::index
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:117
* @route '/services'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::show
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:131
* @route '/services/{slug}'
*/
export const show = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/services/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::show
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:131
* @route '/services/{slug}'
*/
show.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    if (Array.isArray(args)) {
        args = {
            slug: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        slug: args.slug,
    }

    return show.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::show
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:131
* @route '/services/{slug}'
*/
show.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::show
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:131
* @route '/services/{slug}'
*/
show.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

const services = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
}

export default services