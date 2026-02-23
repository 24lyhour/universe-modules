import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::index
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:15
* @route '/dashboard/messages'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/messages',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::index
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:15
* @route '/dashboard/messages'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::index
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:15
* @route '/dashboard/messages'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::index
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:15
* @route '/dashboard/messages'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::index
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:15
* @route '/dashboard/messages'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::index
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:15
* @route '/dashboard/messages'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::index
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:15
* @route '/dashboard/messages'
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
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::show
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:32
* @route '/dashboard/messages/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/messages/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::show
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:32
* @route '/dashboard/messages/{id}'
*/
show.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::show
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:32
* @route '/dashboard/messages/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::show
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:32
* @route '/dashboard/messages/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::show
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:32
* @route '/dashboard/messages/{id}'
*/
const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::show
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:32
* @route '/dashboard/messages/{id}'
*/
showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::show
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:32
* @route '/dashboard/messages/{id}'
*/
showForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::destroy
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:45
* @route '/dashboard/messages/{id}'
*/
export const destroy = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/messages/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::destroy
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:45
* @route '/dashboard/messages/{id}'
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
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::destroy
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:45
* @route '/dashboard/messages/{id}'
*/
destroy.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::destroy
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:45
* @route '/dashboard/messages/{id}'
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
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::destroy
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:45
* @route '/dashboard/messages/{id}'
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

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::markAsRead
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:54
* @route '/dashboard/messages/{id}/read'
*/
export const markAsRead = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsRead.url(args, options),
    method: 'post',
})

markAsRead.definition = {
    methods: ["post"],
    url: '/dashboard/messages/{id}/read',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::markAsRead
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:54
* @route '/dashboard/messages/{id}/read'
*/
markAsRead.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return markAsRead.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::markAsRead
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:54
* @route '/dashboard/messages/{id}/read'
*/
markAsRead.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsRead.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::markAsRead
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:54
* @route '/dashboard/messages/{id}/read'
*/
const markAsReadForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAsRead.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::markAsRead
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:54
* @route '/dashboard/messages/{id}/read'
*/
markAsReadForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAsRead.url(args, options),
    method: 'post',
})

markAsRead.form = markAsReadForm

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::markAsReplied
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:63
* @route '/dashboard/messages/{id}/replied'
*/
export const markAsReplied = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsReplied.url(args, options),
    method: 'post',
})

markAsReplied.definition = {
    methods: ["post"],
    url: '/dashboard/messages/{id}/replied',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::markAsReplied
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:63
* @route '/dashboard/messages/{id}/replied'
*/
markAsReplied.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return markAsReplied.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::markAsReplied
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:63
* @route '/dashboard/messages/{id}/replied'
*/
markAsReplied.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markAsReplied.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::markAsReplied
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:63
* @route '/dashboard/messages/{id}/replied'
*/
const markAsRepliedForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAsReplied.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\ContactMessageController::markAsReplied
* @see Modules/Porfolio/app/Http/Controllers/ContactMessageController.php:63
* @route '/dashboard/messages/{id}/replied'
*/
markAsRepliedForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markAsReplied.url(args, options),
    method: 'post',
})

markAsReplied.form = markAsRepliedForm

const ContactMessageController = { index, show, destroy, markAsRead, markAsReplied }

export default ContactMessageController