import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::home
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:22
* @route '/'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::home
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:22
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::home
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:22
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::home
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:22
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::about
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:43
* @route '/about'
*/
export const about = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about.url(options),
    method: 'get',
})

about.definition = {
    methods: ["get","head"],
    url: '/about',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::about
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:43
* @route '/about'
*/
about.url = (options?: RouteQueryOptions) => {
    return about.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::about
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:43
* @route '/about'
*/
about.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: about.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::about
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:43
* @route '/about'
*/
about.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: about.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::portfolioIndex
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:57
* @route '/portfolio'
*/
export const portfolioIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: portfolioIndex.url(options),
    method: 'get',
})

portfolioIndex.definition = {
    methods: ["get","head"],
    url: '/portfolio',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::portfolioIndex
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:57
* @route '/portfolio'
*/
portfolioIndex.url = (options?: RouteQueryOptions) => {
    return portfolioIndex.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::portfolioIndex
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:57
* @route '/portfolio'
*/
portfolioIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: portfolioIndex.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::portfolioIndex
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:57
* @route '/portfolio'
*/
portfolioIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: portfolioIndex.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::portfolioShow
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:87
* @route '/portfolio/{slug}'
*/
export const portfolioShow = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: portfolioShow.url(args, options),
    method: 'get',
})

portfolioShow.definition = {
    methods: ["get","head"],
    url: '/portfolio/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::portfolioShow
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:87
* @route '/portfolio/{slug}'
*/
portfolioShow.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return portfolioShow.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::portfolioShow
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:87
* @route '/portfolio/{slug}'
*/
portfolioShow.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: portfolioShow.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::portfolioShow
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:87
* @route '/portfolio/{slug}'
*/
portfolioShow.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: portfolioShow.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::servicesIndex
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:117
* @route '/services'
*/
export const servicesIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: servicesIndex.url(options),
    method: 'get',
})

servicesIndex.definition = {
    methods: ["get","head"],
    url: '/services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::servicesIndex
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:117
* @route '/services'
*/
servicesIndex.url = (options?: RouteQueryOptions) => {
    return servicesIndex.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::servicesIndex
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:117
* @route '/services'
*/
servicesIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: servicesIndex.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::servicesIndex
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:117
* @route '/services'
*/
servicesIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: servicesIndex.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::serviceShow
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:131
* @route '/services/{slug}'
*/
export const serviceShow = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: serviceShow.url(args, options),
    method: 'get',
})

serviceShow.definition = {
    methods: ["get","head"],
    url: '/services/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::serviceShow
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:131
* @route '/services/{slug}'
*/
serviceShow.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return serviceShow.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::serviceShow
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:131
* @route '/services/{slug}'
*/
serviceShow.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: serviceShow.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::serviceShow
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:131
* @route '/services/{slug}'
*/
serviceShow.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: serviceShow.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::contact
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:153
* @route '/contact'
*/
export const contact = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact.url(options),
    method: 'get',
})

contact.definition = {
    methods: ["get","head"],
    url: '/contact',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::contact
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:153
* @route '/contact'
*/
contact.url = (options?: RouteQueryOptions) => {
    return contact.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::contact
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:153
* @route '/contact'
*/
contact.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::contact
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:153
* @route '/contact'
*/
contact.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contact.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::submitContact
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:166
* @route '/contact'
*/
export const submitContact = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submitContact.url(options),
    method: 'post',
})

submitContact.definition = {
    methods: ["post"],
    url: '/contact',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::submitContact
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:166
* @route '/contact'
*/
submitContact.url = (options?: RouteQueryOptions) => {
    return submitContact.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::submitContact
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:166
* @route '/contact'
*/
submitContact.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submitContact.url(options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::page
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:189
* @route '/page/{slug}'
*/
export const page = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page.url(args, options),
    method: 'get',
})

page.definition = {
    methods: ["get","head"],
    url: '/page/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::page
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:189
* @route '/page/{slug}'
*/
page.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return page.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::page
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:189
* @route '/page/{slug}'
*/
page.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: page.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\KioskController::page
* @see Modules/Porfolio/app/Http/Controllers/KioskController.php:189
* @route '/page/{slug}'
*/
page.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: page.url(args, options),
    method: 'head',
})

const KioskController = { home, about, portfolioIndex, portfolioShow, servicesIndex, serviceShow, contact, submitContact, page }

export default KioskController