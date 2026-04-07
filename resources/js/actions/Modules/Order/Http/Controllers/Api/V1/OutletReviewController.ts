import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:43
* @route '/api/v1/outlets/{outletId}/reviews'
*/
export const outletReviews = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: outletReviews.url(args, options),
    method: 'get',
})

outletReviews.definition = {
    methods: ["get","head"],
    url: '/api/v1/outlets/{outletId}/reviews',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:43
* @route '/api/v1/outlets/{outletId}/reviews'
*/
outletReviews.url = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outletId: args }
    }

    if (Array.isArray(args)) {
        args = {
            outletId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outletId: args.outletId,
    }

    return outletReviews.definition.url
            .replace('{outletId}', parsedArgs.outletId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:43
* @route '/api/v1/outlets/{outletId}/reviews'
*/
outletReviews.get = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: outletReviews.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:43
* @route '/api/v1/outlets/{outletId}/reviews'
*/
outletReviews.head = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: outletReviews.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:43
* @route '/api/v1/outlets/{outletId}/reviews'
*/
const outletReviewsForm = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: outletReviews.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:43
* @route '/api/v1/outlets/{outletId}/reviews'
*/
outletReviewsForm.get = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: outletReviews.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:43
* @route '/api/v1/outlets/{outletId}/reviews'
*/
outletReviewsForm.head = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: outletReviews.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

outletReviews.form = outletReviewsForm

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletSummary
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:67
* @route '/api/v1/outlets/{outletId}/reviews/summary'
*/
export const outletSummary = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: outletSummary.url(args, options),
    method: 'get',
})

outletSummary.definition = {
    methods: ["get","head"],
    url: '/api/v1/outlets/{outletId}/reviews/summary',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletSummary
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:67
* @route '/api/v1/outlets/{outletId}/reviews/summary'
*/
outletSummary.url = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { outletId: args }
    }

    if (Array.isArray(args)) {
        args = {
            outletId: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        outletId: args.outletId,
    }

    return outletSummary.definition.url
            .replace('{outletId}', parsedArgs.outletId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletSummary
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:67
* @route '/api/v1/outlets/{outletId}/reviews/summary'
*/
outletSummary.get = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: outletSummary.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletSummary
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:67
* @route '/api/v1/outlets/{outletId}/reviews/summary'
*/
outletSummary.head = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: outletSummary.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletSummary
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:67
* @route '/api/v1/outlets/{outletId}/reviews/summary'
*/
const outletSummaryForm = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: outletSummary.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletSummary
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:67
* @route '/api/v1/outlets/{outletId}/reviews/summary'
*/
outletSummaryForm.get = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: outletSummary.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletSummary
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:67
* @route '/api/v1/outlets/{outletId}/reviews/summary'
*/
outletSummaryForm.head = (args: { outletId: string | number } | [outletId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: outletSummary.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

outletSummary.form = outletSummaryForm

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::markHelpful
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:149
* @route '/api/v1/outlet-reviews/{id}/helpful'
*/
export const markHelpful = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markHelpful.url(args, options),
    method: 'post',
})

markHelpful.definition = {
    methods: ["post"],
    url: '/api/v1/outlet-reviews/{id}/helpful',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::markHelpful
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:149
* @route '/api/v1/outlet-reviews/{id}/helpful'
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
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::markHelpful
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:149
* @route '/api/v1/outlet-reviews/{id}/helpful'
*/
markHelpful.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markHelpful.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::markHelpful
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:149
* @route '/api/v1/outlet-reviews/{id}/helpful'
*/
const markHelpfulForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markHelpful.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::markHelpful
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:149
* @route '/api/v1/outlet-reviews/{id}/helpful'
*/
markHelpfulForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markHelpful.url(args, options),
    method: 'post',
})

markHelpful.form = markHelpfulForm

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::myReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:18
* @route '/api/v1/customer/outlet-reviews'
*/
export const myReviews = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: myReviews.url(options),
    method: 'get',
})

myReviews.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/outlet-reviews',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::myReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:18
* @route '/api/v1/customer/outlet-reviews'
*/
myReviews.url = (options?: RouteQueryOptions) => {
    return myReviews.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::myReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:18
* @route '/api/v1/customer/outlet-reviews'
*/
myReviews.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: myReviews.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::myReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:18
* @route '/api/v1/customer/outlet-reviews'
*/
myReviews.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: myReviews.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::myReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:18
* @route '/api/v1/customer/outlet-reviews'
*/
const myReviewsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myReviews.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::myReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:18
* @route '/api/v1/customer/outlet-reviews'
*/
myReviewsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: myReviews.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::myReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:18
* @route '/api/v1/customer/outlet-reviews'
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
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:92
* @route '/api/v1/customer/outlet-reviews'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/customer/outlet-reviews',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:92
* @route '/api/v1/customer/outlet-reviews'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:92
* @route '/api/v1/customer/outlet-reviews'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:92
* @route '/api/v1/customer/outlet-reviews'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::store
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:92
* @route '/api/v1/customer/outlet-reviews'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::update
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:113
* @route '/api/v1/customer/outlet-reviews/{id}'
*/
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/api/v1/customer/outlet-reviews/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::update
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:113
* @route '/api/v1/customer/outlet-reviews/{id}'
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
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::update
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:113
* @route '/api/v1/customer/outlet-reviews/{id}'
*/
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::update
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:113
* @route '/api/v1/customer/outlet-reviews/{id}'
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
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::update
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:113
* @route '/api/v1/customer/outlet-reviews/{id}'
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
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:132
* @route '/api/v1/customer/outlet-reviews/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/customer/outlet-reviews/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:132
* @route '/api/v1/customer/outlet-reviews/{id}'
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
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:132
* @route '/api/v1/customer/outlet-reviews/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:132
* @route '/api/v1/customer/outlet-reviews/{id}'
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
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::destroy
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:132
* @route '/api/v1/customer/outlet-reviews/{id}'
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

const OutletReviewController = { outletReviews, outletSummary, markHelpful, myReviews, store, update, destroy }

export default OutletReviewController