import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:20
* @route '/dashboard/product-reviews'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/product-reviews',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:20
* @route '/dashboard/product-reviews'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:20
* @route '/dashboard/product-reviews'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:20
* @route '/dashboard/product-reviews'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:75
* @route '/dashboard/product-reviews/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/product-reviews/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:75
* @route '/dashboard/product-reviews/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:75
* @route '/dashboard/product-reviews/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:75
* @route '/dashboard/product-reviews/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:84
* @route '/dashboard/product-reviews'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/product-reviews',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:84
* @route '/dashboard/product-reviews'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:84
* @route '/dashboard/product-reviews'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:66
* @route '/dashboard/product-reviews/{productReview}'
*/
export const show = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/product-reviews/{productReview}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:66
* @route '/dashboard/product-reviews/{productReview}'
*/
show.url = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productReview: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { productReview: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            productReview: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        productReview: typeof args.productReview === 'object'
        ? args.productReview.id
        : args.productReview,
    }

    return show.definition.url
            .replace('{productReview}', parsedArgs.productReview.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:66
* @route '/dashboard/product-reviews/{productReview}'
*/
show.get = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:66
* @route '/dashboard/product-reviews/{productReview}'
*/
show.head = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:92
* @route '/dashboard/product-reviews/{productReview}/edit'
*/
export const edit = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/product-reviews/{productReview}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:92
* @route '/dashboard/product-reviews/{productReview}/edit'
*/
edit.url = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productReview: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { productReview: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            productReview: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        productReview: typeof args.productReview === 'object'
        ? args.productReview.id
        : args.productReview,
    }

    return edit.definition.url
            .replace('{productReview}', parsedArgs.productReview.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:92
* @route '/dashboard/product-reviews/{productReview}/edit'
*/
edit.get = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:92
* @route '/dashboard/product-reviews/{productReview}/edit'
*/
edit.head = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:101
* @route '/dashboard/product-reviews/{productReview}'
*/
export const update = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/product-reviews/{productReview}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:101
* @route '/dashboard/product-reviews/{productReview}'
*/
update.url = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productReview: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { productReview: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            productReview: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        productReview: typeof args.productReview === 'object'
        ? args.productReview.id
        : args.productReview,
    }

    return update.definition.url
            .replace('{productReview}', parsedArgs.productReview.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:101
* @route '/dashboard/product-reviews/{productReview}'
*/
update.put = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:101
* @route '/dashboard/product-reviews/{productReview}'
*/
update.patch = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:109
* @route '/dashboard/product-reviews/{productReview}'
*/
export const destroy = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/product-reviews/{productReview}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:109
* @route '/dashboard/product-reviews/{productReview}'
*/
destroy.url = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productReview: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { productReview: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            productReview: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        productReview: typeof args.productReview === 'object'
        ? args.productReview.id
        : args.productReview,
    }

    return destroy.definition.url
            .replace('{productReview}', parsedArgs.productReview.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:109
* @route '/dashboard/product-reviews/{productReview}'
*/
destroy.delete = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::replyModal
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:117
* @route '/dashboard/product-reviews/{productReview}/reply'
*/
export const replyModal = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: replyModal.url(args, options),
    method: 'get',
})

replyModal.definition = {
    methods: ["get","head"],
    url: '/dashboard/product-reviews/{productReview}/reply',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::replyModal
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:117
* @route '/dashboard/product-reviews/{productReview}/reply'
*/
replyModal.url = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productReview: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { productReview: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            productReview: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        productReview: typeof args.productReview === 'object'
        ? args.productReview.id
        : args.productReview,
    }

    return replyModal.definition.url
            .replace('{productReview}', parsedArgs.productReview.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::replyModal
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:117
* @route '/dashboard/product-reviews/{productReview}/reply'
*/
replyModal.get = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: replyModal.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::replyModal
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:117
* @route '/dashboard/product-reviews/{productReview}/reply'
*/
replyModal.head = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: replyModal.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::reply
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:126
* @route '/dashboard/product-reviews/{productReview}/reply'
*/
export const reply = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reply.url(args, options),
    method: 'post',
})

reply.definition = {
    methods: ["post"],
    url: '/dashboard/product-reviews/{productReview}/reply',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::reply
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:126
* @route '/dashboard/product-reviews/{productReview}/reply'
*/
reply.url = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productReview: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { productReview: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            productReview: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        productReview: typeof args.productReview === 'object'
        ? args.productReview.id
        : args.productReview,
    }

    return reply.definition.url
            .replace('{productReview}', parsedArgs.productReview.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::reply
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:126
* @route '/dashboard/product-reviews/{productReview}/reply'
*/
reply.post = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reply.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::toggleActive
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:133
* @route '/dashboard/product-reviews/{productReview}/toggle-active'
*/
export const toggleActive = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleActive.url(args, options),
    method: 'put',
})

toggleActive.definition = {
    methods: ["put"],
    url: '/dashboard/product-reviews/{productReview}/toggle-active',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::toggleActive
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:133
* @route '/dashboard/product-reviews/{productReview}/toggle-active'
*/
toggleActive.url = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productReview: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { productReview: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            productReview: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        productReview: typeof args.productReview === 'object'
        ? args.productReview.id
        : args.productReview,
    }

    return toggleActive.definition.url
            .replace('{productReview}', parsedArgs.productReview.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::toggleActive
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:133
* @route '/dashboard/product-reviews/{productReview}/toggle-active'
*/
toggleActive.put = (args: { productReview: number | { id: number } } | [productReview: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleActive.url(args, options),
    method: 'put',
})

const ProductReviewController = { index, create, store, show, edit, update, destroy, replyModal, reply, toggleActive }

export default ProductReviewController