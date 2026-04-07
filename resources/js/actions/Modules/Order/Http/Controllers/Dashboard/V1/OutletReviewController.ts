import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:20
* @route '/dashboard/outlet-reviews'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlet-reviews',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:20
* @route '/dashboard/outlet-reviews'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:20
* @route '/dashboard/outlet-reviews'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:20
* @route '/dashboard/outlet-reviews'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:77
* @route '/dashboard/outlet-reviews/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlet-reviews/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:77
* @route '/dashboard/outlet-reviews/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:77
* @route '/dashboard/outlet-reviews/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:77
* @route '/dashboard/outlet-reviews/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:87
* @route '/dashboard/outlet-reviews'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/outlet-reviews',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:87
* @route '/dashboard/outlet-reviews'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:87
* @route '/dashboard/outlet-reviews'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:67
* @route '/dashboard/outlet-reviews/{outletReview}'
*/
export const show = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlet-reviews/{outletReview}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:67
* @route '/dashboard/outlet-reviews/{outletReview}'
*/
show.url = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outletReview: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outletReview: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outletReview: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outletReview: typeof args.outletReview === 'object'
        ? args.outletReview.id
        : args.outletReview,
    }

    return show.definition.url
            .replace('{outletReview}', parsedArgs.outletReview.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:67
* @route '/dashboard/outlet-reviews/{outletReview}'
*/
show.get = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:67
* @route '/dashboard/outlet-reviews/{outletReview}'
*/
show.head = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:95
* @route '/dashboard/outlet-reviews/{outletReview}/edit'
*/
export const edit = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlet-reviews/{outletReview}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:95
* @route '/dashboard/outlet-reviews/{outletReview}/edit'
*/
edit.url = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outletReview: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outletReview: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outletReview: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outletReview: typeof args.outletReview === 'object'
        ? args.outletReview.id
        : args.outletReview,
    }

    return edit.definition.url
            .replace('{outletReview}', parsedArgs.outletReview.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:95
* @route '/dashboard/outlet-reviews/{outletReview}/edit'
*/
edit.get = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:95
* @route '/dashboard/outlet-reviews/{outletReview}/edit'
*/
edit.head = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:105
* @route '/dashboard/outlet-reviews/{outletReview}'
*/
export const update = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/outlet-reviews/{outletReview}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:105
* @route '/dashboard/outlet-reviews/{outletReview}'
*/
update.url = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outletReview: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outletReview: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outletReview: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outletReview: typeof args.outletReview === 'object'
        ? args.outletReview.id
        : args.outletReview,
    }

    return update.definition.url
            .replace('{outletReview}', parsedArgs.outletReview.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:105
* @route '/dashboard/outlet-reviews/{outletReview}'
*/
update.put = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:105
* @route '/dashboard/outlet-reviews/{outletReview}'
*/
update.patch = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:113
* @route '/dashboard/outlet-reviews/{outletReview}'
*/
export const destroy = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/outlet-reviews/{outletReview}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:113
* @route '/dashboard/outlet-reviews/{outletReview}'
*/
destroy.url = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outletReview: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outletReview: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outletReview: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outletReview: typeof args.outletReview === 'object'
        ? args.outletReview.id
        : args.outletReview,
    }

    return destroy.definition.url
            .replace('{outletReview}', parsedArgs.outletReview.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:113
* @route '/dashboard/outlet-reviews/{outletReview}'
*/
destroy.delete = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::replyModal
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:121
* @route '/dashboard/outlet-reviews/{outletReview}/reply'
*/
export const replyModal = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: replyModal.url(args, options),
    method: 'get',
})

replyModal.definition = {
    methods: ["get","head"],
    url: '/dashboard/outlet-reviews/{outletReview}/reply',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::replyModal
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:121
* @route '/dashboard/outlet-reviews/{outletReview}/reply'
*/
replyModal.url = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outletReview: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outletReview: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outletReview: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outletReview: typeof args.outletReview === 'object'
        ? args.outletReview.id
        : args.outletReview,
    }

    return replyModal.definition.url
            .replace('{outletReview}', parsedArgs.outletReview.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::replyModal
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:121
* @route '/dashboard/outlet-reviews/{outletReview}/reply'
*/
replyModal.get = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: replyModal.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::replyModal
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:121
* @route '/dashboard/outlet-reviews/{outletReview}/reply'
*/
replyModal.head = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: replyModal.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::reply
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:131
* @route '/dashboard/outlet-reviews/{outletReview}/reply'
*/
export const reply = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reply.url(args, options),
    method: 'post',
})

reply.definition = {
    methods: ["post"],
    url: '/dashboard/outlet-reviews/{outletReview}/reply',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::reply
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:131
* @route '/dashboard/outlet-reviews/{outletReview}/reply'
*/
reply.url = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outletReview: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outletReview: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outletReview: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outletReview: typeof args.outletReview === 'object'
        ? args.outletReview.id
        : args.outletReview,
    }

    return reply.definition.url
            .replace('{outletReview}', parsedArgs.outletReview.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::reply
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:131
* @route '/dashboard/outlet-reviews/{outletReview}/reply'
*/
reply.post = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reply.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::toggleActive
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:138
* @route '/dashboard/outlet-reviews/{outletReview}/toggle-active'
*/
export const toggleActive = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleActive.url(args, options),
    method: 'put',
})

toggleActive.definition = {
    methods: ["put"],
    url: '/dashboard/outlet-reviews/{outletReview}/toggle-active',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::toggleActive
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:138
* @route '/dashboard/outlet-reviews/{outletReview}/toggle-active'
*/
toggleActive.url = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outletReview: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { outletReview: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            outletReview: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outletReview: typeof args.outletReview === 'object'
        ? args.outletReview.id
        : args.outletReview,
    }

    return toggleActive.definition.url
            .replace('{outletReview}', parsedArgs.outletReview.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\OutletReviewController::toggleActive
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/OutletReviewController.php:138
* @route '/dashboard/outlet-reviews/{outletReview}/toggle-active'
*/
toggleActive.put = (args: { outletReview: number | { id: number } } | [outletReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleActive.url(args, options),
    method: 'put',
})

const OutletReviewController = { index, create, store, show, edit, update, destroy, replyModal, reply, toggleActive }

export default OutletReviewController