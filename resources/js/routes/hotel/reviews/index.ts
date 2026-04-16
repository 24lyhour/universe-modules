import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:19
* @route '/dashboard/hotel-reviews'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-reviews',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:19
* @route '/dashboard/hotel-reviews'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:19
* @route '/dashboard/hotel-reviews'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:19
* @route '/dashboard/hotel-reviews'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:19
* @route '/dashboard/hotel-reviews'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:19
* @route '/dashboard/hotel-reviews'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::index
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:19
* @route '/dashboard/hotel-reviews'
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:78
* @route '/dashboard/hotel-reviews/trash'
*/
export const trash = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

trash.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-reviews/trash',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:78
* @route '/dashboard/hotel-reviews/trash'
*/
trash.url = (options?: RouteQueryOptions) => {
    return trash.definition.url + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:78
* @route '/dashboard/hotel-reviews/trash'
*/
trash.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:78
* @route '/dashboard/hotel-reviews/trash'
*/
trash.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: trash.url(options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:78
* @route '/dashboard/hotel-reviews/trash'
*/
const trashForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:78
* @route '/dashboard/hotel-reviews/trash'
*/
trashForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url(options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::trash
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:78
* @route '/dashboard/hotel-reviews/trash'
*/
trashForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: trash.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

trash.form = trashForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:27
* @route '/dashboard/hotel-reviews/{review}'
*/
export const show = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-reviews/{review}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:27
* @route '/dashboard/hotel-reviews/{review}'
*/
show.url = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { review: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { review: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            review: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        review: typeof args.review === 'object'
        ? args.review.uuid
        : args.review,
    }

    return show.definition.url
            .replace('{review}', parsedArgs.review.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:27
* @route '/dashboard/hotel-reviews/{review}'
*/
show.get = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:27
* @route '/dashboard/hotel-reviews/{review}'
*/
show.head = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:27
* @route '/dashboard/hotel-reviews/{review}'
*/
const showForm = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:27
* @route '/dashboard/hotel-reviews/{review}'
*/
showForm.get = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::show
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:27
* @route '/dashboard/hotel-reviews/{review}'
*/
showForm.head = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:58
* @route '/dashboard/hotel-reviews/{review}/delete'
*/
export const confirmDelete = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/hotel-reviews/{review}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:58
* @route '/dashboard/hotel-reviews/{review}/delete'
*/
confirmDelete.url = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { review: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { review: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            review: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        review: typeof args.review === 'object'
        ? args.review.uuid
        : args.review,
    }

    return confirmDelete.definition.url
            .replace('{review}', parsedArgs.review.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:58
* @route '/dashboard/hotel-reviews/{review}/delete'
*/
confirmDelete.get = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:58
* @route '/dashboard/hotel-reviews/{review}/delete'
*/
confirmDelete.head = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:58
* @route '/dashboard/hotel-reviews/{review}/delete'
*/
const confirmDeleteForm = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:58
* @route '/dashboard/hotel-reviews/{review}/delete'
*/
confirmDeleteForm.get = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::confirmDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:58
* @route '/dashboard/hotel-reviews/{review}/delete'
*/
confirmDeleteForm.head = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: confirmDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

confirmDelete.form = confirmDeleteForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::updateStatus
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:0
* @route '/dashboard/hotel-reviews/{review}/status'
*/
export const updateStatus = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStatus.url(args, options),
    method: 'patch',
})

updateStatus.definition = {
    methods: ["patch"],
    url: '/dashboard/hotel-reviews/{review}/status',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::updateStatus
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:0
* @route '/dashboard/hotel-reviews/{review}/status'
*/
updateStatus.url = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { review: args }
    }

    if (Array.isArray(args)) {
        args = {
            review: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        review: args.review,
    }

    return updateStatus.definition.url
            .replace('{review}', parsedArgs.review.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::updateStatus
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:0
* @route '/dashboard/hotel-reviews/{review}/status'
*/
updateStatus.patch = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateStatus.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::updateStatus
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:0
* @route '/dashboard/hotel-reviews/{review}/status'
*/
const updateStatusForm = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::updateStatus
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:0
* @route '/dashboard/hotel-reviews/{review}/status'
*/
updateStatusForm.patch = (args: { review: string | number } | [review: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateStatus.form = updateStatusForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::reply
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:36
* @route '/dashboard/hotel-reviews/{review}/reply'
*/
export const reply = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: reply.url(args, options),
    method: 'patch',
})

reply.definition = {
    methods: ["patch"],
    url: '/dashboard/hotel-reviews/{review}/reply',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::reply
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:36
* @route '/dashboard/hotel-reviews/{review}/reply'
*/
reply.url = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { review: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { review: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            review: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        review: typeof args.review === 'object'
        ? args.review.uuid
        : args.review,
    }

    return reply.definition.url
            .replace('{review}', parsedArgs.review.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::reply
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:36
* @route '/dashboard/hotel-reviews/{review}/reply'
*/
reply.patch = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: reply.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::reply
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:36
* @route '/dashboard/hotel-reviews/{review}/reply'
*/
const replyForm = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reply.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::reply
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:36
* @route '/dashboard/hotel-reviews/{review}/reply'
*/
replyForm.patch = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reply.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

reply.form = replyForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:67
* @route '/dashboard/hotel-reviews/{review}'
*/
export const destroy = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/hotel-reviews/{review}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:67
* @route '/dashboard/hotel-reviews/{review}'
*/
destroy.url = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { review: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { review: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            review: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        review: typeof args.review === 'object'
        ? args.review.uuid
        : args.review,
    }

    return destroy.definition.url
            .replace('{review}', parsedArgs.review.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:67
* @route '/dashboard/hotel-reviews/{review}'
*/
destroy.delete = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:67
* @route '/dashboard/hotel-reviews/{review}'
*/
const destroyForm = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::destroy
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:67
* @route '/dashboard/hotel-reviews/{review}'
*/
destroyForm.delete = (args: { review: string | number | { uuid: string | number } } | [review: string | number | { uuid: string | number } ] | string | number | { uuid: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:87
* @route '/dashboard/hotel-reviews/{uuid}/restore'
*/
export const restore = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

restore.definition = {
    methods: ["put"],
    url: '/dashboard/hotel-reviews/{uuid}/restore',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:87
* @route '/dashboard/hotel-reviews/{uuid}/restore'
*/
restore.url = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { uuid: args }
    }

    if (Array.isArray(args)) {
        args = {
            uuid: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        uuid: args.uuid,
    }

    return restore.definition.url
            .replace('{uuid}', parsedArgs.uuid.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:87
* @route '/dashboard/hotel-reviews/{uuid}/restore'
*/
restore.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: restore.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:87
* @route '/dashboard/hotel-reviews/{uuid}/restore'
*/
const restoreForm = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::restore
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:87
* @route '/dashboard/hotel-reviews/{uuid}/restore'
*/
restoreForm.put = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

restore.form = restoreForm

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:95
* @route '/dashboard/hotel-reviews/{uuid}/force-delete'
*/
export const forceDelete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/dashboard/hotel-reviews/{uuid}/force-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:95
* @route '/dashboard/hotel-reviews/{uuid}/force-delete'
*/
forceDelete.url = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { uuid: args }
    }

    if (Array.isArray(args)) {
        args = {
            uuid: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        uuid: args.uuid,
    }

    return forceDelete.definition.url
            .replace('{uuid}', parsedArgs.uuid.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:95
* @route '/dashboard/hotel-reviews/{uuid}/force-delete'
*/
forceDelete.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:95
* @route '/dashboard/hotel-reviews/{uuid}/force-delete'
*/
const forceDeleteForm = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Hotel\Http\Controllers\Dashboard\V1\HotelReviewController::forceDelete
* @see Modules/Hotel/app/Http/Controllers/Dashboard/V1/HotelReviewController.php:95
* @route '/dashboard/hotel-reviews/{uuid}/force-delete'
*/
forceDeleteForm.delete = (args: { uuid: string | number } | [uuid: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

forceDelete.form = forceDeleteForm

const reviews = {
    index: Object.assign(index, index),
    trash: Object.assign(trash, trash),
    show: Object.assign(show, show),
    confirmDelete: Object.assign(confirmDelete, confirmDelete),
    updateStatus: Object.assign(updateStatus, updateStatus),
    reply: Object.assign(reply, reply),
    destroy: Object.assign(destroy, destroy),
    restore: Object.assign(restore, restore),
    forceDelete: Object.assign(forceDelete, forceDelete),
}

export default reviews