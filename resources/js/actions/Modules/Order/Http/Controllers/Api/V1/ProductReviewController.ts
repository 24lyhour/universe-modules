import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:43
* @route '/api/v1/products/{productId}/reviews'
*/
export const productReviews = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: productReviews.url(args, options),
    method: 'get',
})

productReviews.definition = {
    methods: ["get","head"],
    url: '/api/v1/products/{productId}/reviews',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:43
* @route '/api/v1/products/{productId}/reviews'
*/
productReviews.url = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productId: args }
    }

    if (Array.isArray(args)) {
        args = {
            productId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        productId: args.productId,
    }

    return productReviews.definition.url
            .replace('{productId}', parsedArgs.productId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:43
* @route '/api/v1/products/{productId}/reviews'
*/
productReviews.get = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: productReviews.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:43
* @route '/api/v1/products/{productId}/reviews'
*/
productReviews.head = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: productReviews.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:43
* @route '/api/v1/products/{productId}/reviews'
*/
const productReviewsForm = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: productReviews.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:43
* @route '/api/v1/products/{productId}/reviews'
*/
productReviewsForm.get = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: productReviews.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:43
* @route '/api/v1/products/{productId}/reviews'
*/
productReviewsForm.head = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: productReviews.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

productReviews.form = productReviewsForm

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productSummary
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:67
* @route '/api/v1/products/{productId}/reviews/summary'
*/
export const productSummary = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: productSummary.url(args, options),
    method: 'get',
})

productSummary.definition = {
    methods: ["get","head"],
    url: '/api/v1/products/{productId}/reviews/summary',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productSummary
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:67
* @route '/api/v1/products/{productId}/reviews/summary'
*/
productSummary.url = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productId: args }
    }

    if (Array.isArray(args)) {
        args = {
            productId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        productId: args.productId,
    }

    return productSummary.definition.url
            .replace('{productId}', parsedArgs.productId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productSummary
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:67
* @route '/api/v1/products/{productId}/reviews/summary'
*/
productSummary.get = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: productSummary.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productSummary
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:67
* @route '/api/v1/products/{productId}/reviews/summary'
*/
productSummary.head = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: productSummary.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productSummary
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:67
* @route '/api/v1/products/{productId}/reviews/summary'
*/
const productSummaryForm = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: productSummary.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productSummary
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:67
* @route '/api/v1/products/{productId}/reviews/summary'
*/
productSummaryForm.get = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: productSummary.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productSummary
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:67
* @route '/api/v1/products/{productId}/reviews/summary'
*/
productSummaryForm.head = (args: { productId: string | number } | [productId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: productSummary.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

productSummary.form = productSummaryForm

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::markHelpful
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:144
* @route '/api/v1/product-reviews/{id}/helpful'
*/
export const markHelpful = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markHelpful.url(args, options),
    method: 'post',
})

markHelpful.definition = {
    methods: ["post"],
    url: '/api/v1/product-reviews/{id}/helpful',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::markHelpful
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:144
* @route '/api/v1/product-reviews/{id}/helpful'
*/
markHelpful.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return markHelpful.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::markHelpful
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:144
* @route '/api/v1/product-reviews/{id}/helpful'
*/
markHelpful.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markHelpful.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::markHelpful
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:144
* @route '/api/v1/product-reviews/{id}/helpful'
*/
const markHelpfulForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markHelpful.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::markHelpful
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:144
* @route '/api/v1/product-reviews/{id}/helpful'
*/
markHelpfulForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markHelpful.url(args, options),
    method: 'post',
})

markHelpful.form = markHelpfulForm

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::myReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:18
* @route '/api/v1/customer/reviews'
*/
export const myReviews = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: myReviews.url(options),
    method: 'get',
})

myReviews.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/reviews',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::myReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:18
* @route '/api/v1/customer/reviews'
*/
myReviews.url = (options?: RouteQueryOptions) => {
    return myReviews.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::myReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:18
* @route '/api/v1/customer/reviews'
*/
myReviews.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: myReviews.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::myReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:18
* @route '/api/v1/customer/reviews'
*/
myReviews.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: myReviews.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::myReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:18
* @route '/api/v1/customer/reviews'
*/
const myReviewsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myReviews.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::myReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:18
* @route '/api/v1/customer/reviews'
*/
myReviewsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myReviews.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::myReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:18
* @route '/api/v1/customer/reviews'
*/
myReviewsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myReviews.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

myReviews.form = myReviewsForm

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:87
* @route '/api/v1/customer/reviews'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/customer/reviews',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:87
* @route '/api/v1/customer/reviews'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:87
* @route '/api/v1/customer/reviews'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:87
* @route '/api/v1/customer/reviews'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:87
* @route '/api/v1/customer/reviews'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::update
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:108
* @route '/api/v1/customer/reviews/{id}'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/v1/customer/reviews/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::update
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:108
* @route '/api/v1/customer/reviews/{id}'
*/
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::update
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:108
* @route '/api/v1/customer/reviews/{id}'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::update
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:108
* @route '/api/v1/customer/reviews/{id}'
*/
const updateForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::update
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:108
* @route '/api/v1/customer/reviews/{id}'
*/
updateForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:127
* @route '/api/v1/customer/reviews/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/customer/reviews/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:127
* @route '/api/v1/customer/reviews/{id}'
*/
destroy.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return destroy.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:127
* @route '/api/v1/customer/reviews/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:127
* @route '/api/v1/customer/reviews/{id}'
*/
const destroyForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:127
* @route '/api/v1/customer/reviews/{id}'
*/
destroyForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const ProductReviewController = { productReviews, productSummary, markHelpful, myReviews, store, update, destroy }

export default ProductReviewController