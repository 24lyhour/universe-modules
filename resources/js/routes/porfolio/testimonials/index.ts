import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::index
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:16
* @route '/dashboard/testimonials'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/testimonials',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::index
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:16
* @route '/dashboard/testimonials'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::index
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:16
* @route '/dashboard/testimonials'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::index
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:16
* @route '/dashboard/testimonials'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::create
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:28
* @route '/dashboard/testimonials/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/testimonials/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::create
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:28
* @route '/dashboard/testimonials/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::create
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:28
* @route '/dashboard/testimonials/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::create
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:28
* @route '/dashboard/testimonials/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::store
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:34
* @route '/dashboard/testimonials'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/testimonials',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::store
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:34
* @route '/dashboard/testimonials'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::store
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:34
* @route '/dashboard/testimonials'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::show
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:0
* @route '/dashboard/testimonials/{testimonial}'
*/
export const show = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/testimonials/{testimonial}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::show
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:0
* @route '/dashboard/testimonials/{testimonial}'
*/
show.url = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimonial: args }
    }

    if (Array.isArray(args)) {
        args = {
            testimonial: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        testimonial: args.testimonial,
    }

    return show.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::show
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:0
* @route '/dashboard/testimonials/{testimonial}'
*/
show.get = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::show
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:0
* @route '/dashboard/testimonials/{testimonial}'
*/
show.head = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::edit
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:56
* @route '/dashboard/testimonials/{testimonial}/edit'
*/
export const edit = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/testimonials/{testimonial}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::edit
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:56
* @route '/dashboard/testimonials/{testimonial}/edit'
*/
edit.url = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimonial: args }
    }

    if (Array.isArray(args)) {
        args = {
            testimonial: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        testimonial: args.testimonial,
    }

    return edit.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::edit
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:56
* @route '/dashboard/testimonials/{testimonial}/edit'
*/
edit.get = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::edit
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:56
* @route '/dashboard/testimonials/{testimonial}/edit'
*/
edit.head = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::update
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:65
* @route '/dashboard/testimonials/{testimonial}'
*/
export const update = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/testimonials/{testimonial}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::update
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:65
* @route '/dashboard/testimonials/{testimonial}'
*/
update.url = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimonial: args }
    }

    if (Array.isArray(args)) {
        args = {
            testimonial: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        testimonial: args.testimonial,
    }

    return update.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::update
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:65
* @route '/dashboard/testimonials/{testimonial}'
*/
update.put = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::update
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:65
* @route '/dashboard/testimonials/{testimonial}'
*/
update.patch = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::destroy
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:87
* @route '/dashboard/testimonials/{testimonial}'
*/
export const destroy = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/testimonials/{testimonial}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::destroy
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:87
* @route '/dashboard/testimonials/{testimonial}'
*/
destroy.url = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimonial: args }
    }

    if (Array.isArray(args)) {
        args = {
            testimonial: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        testimonial: args.testimonial,
    }

    return destroy.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\TestimonialController::destroy
* @see Modules/Porfolio/app/Http/Controllers/TestimonialController.php:87
* @route '/dashboard/testimonials/{testimonial}'
*/
destroy.delete = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const testimonials = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default testimonials