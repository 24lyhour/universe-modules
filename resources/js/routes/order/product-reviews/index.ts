import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
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
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:20
* @route '/dashboard/product-reviews'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:20
* @route '/dashboard/product-reviews'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::index
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:20
* @route '/dashboard/product-reviews'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

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
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:75
* @route '/dashboard/product-reviews/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:75
* @route '/dashboard/product-reviews/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::create
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:75
* @route '/dashboard/product-reviews/create'
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
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:84
* @route '/dashboard/product-reviews'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::store
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:84
* @route '/dashboard/product-reviews'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:66
* @route '/dashboard/product-reviews/{productReview}'
*/
export const show = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
show.url = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
show.get = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:66
* @route '/dashboard/product-reviews/{productReview}'
*/
show.head = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:66
* @route '/dashboard/product-reviews/{productReview}'
*/
const showForm = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:66
* @route '/dashboard/product-reviews/{productReview}'
*/
showForm.get = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::show
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:66
* @route '/dashboard/product-reviews/{productReview}'
*/
showForm.head = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:92
* @route '/dashboard/product-reviews/{productReview}/edit'
*/
export const edit = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
edit.url = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
edit.get = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:92
* @route '/dashboard/product-reviews/{productReview}/edit'
*/
edit.head = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:92
* @route '/dashboard/product-reviews/{productReview}/edit'
*/
const editForm = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:92
* @route '/dashboard/product-reviews/{productReview}/edit'
*/
editForm.get = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::edit
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:92
* @route '/dashboard/product-reviews/{productReview}/edit'
*/
editForm.head = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:101
* @route '/dashboard/product-reviews/{productReview}'
*/
export const update = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
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
update.url = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
update.put = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:101
* @route '/dashboard/product-reviews/{productReview}'
*/
update.patch = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:101
* @route '/dashboard/product-reviews/{productReview}'
*/
const updateForm = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:101
* @route '/dashboard/product-reviews/{productReview}'
*/
updateForm.put = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::update
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:101
* @route '/dashboard/product-reviews/{productReview}'
*/
updateForm.patch = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:109
* @route '/dashboard/product-reviews/{productReview}'
*/
export const destroy = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
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
destroy.url = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
destroy.delete = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:109
* @route '/dashboard/product-reviews/{productReview}'
*/
const destroyForm = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:109
* @route '/dashboard/product-reviews/{productReview}'
*/
destroyForm.delete = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::replyModal
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:117
* @route '/dashboard/product-reviews/{productReview}/reply'
*/
export const replyModal = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
replyModal.url = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
replyModal.get = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: replyModal.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::replyModal
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:117
* @route '/dashboard/product-reviews/{productReview}/reply'
*/
replyModal.head = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: replyModal.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::replyModal
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:117
* @route '/dashboard/product-reviews/{productReview}/reply'
*/
const replyModalForm = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: replyModal.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::replyModal
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:117
* @route '/dashboard/product-reviews/{productReview}/reply'
*/
replyModalForm.get = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: replyModal.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::replyModal
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:117
* @route '/dashboard/product-reviews/{productReview}/reply'
*/
replyModalForm.head = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: replyModal.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

replyModal.form = replyModalForm

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::reply
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:126
* @route '/dashboard/product-reviews/{productReview}/reply'
*/
export const reply = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
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
reply.url = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
reply.post = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reply.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::reply
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:126
* @route '/dashboard/product-reviews/{productReview}/reply'
*/
const replyForm = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reply.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::reply
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:126
* @route '/dashboard/product-reviews/{productReview}/reply'
*/
replyForm.post = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reply.url(args, options),
    method: 'post',
})

reply.form = replyForm

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::toggleActive
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:133
* @route '/dashboard/product-reviews/{productReview}/toggle-active'
*/
export const toggleActive = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
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
toggleActive.url = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
toggleActive.put = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleActive.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::toggleActive
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:133
* @route '/dashboard/product-reviews/{productReview}/toggle-active'
*/
const toggleActiveForm = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Dashboard\V1\ProductReviewController::toggleActive
* @see Modules/Order/app/Http/Controllers/Dashboard/V1/ProductReviewController.php:133
* @route '/dashboard/product-reviews/{productReview}/toggle-active'
*/
toggleActiveForm.put = (args: { productReview: string | number | { id: string | number } } | [productReview: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleActive.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleActive.form = toggleActiveForm

const productReviews = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    replyModal: Object.assign(replyModal, replyModal),
    reply: Object.assign(reply, reply),
    toggleActive: Object.assign(toggleActive, toggleActive),
}

export default productReviews