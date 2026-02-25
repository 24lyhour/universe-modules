import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:26
* @route '/dashboard/products/attributes'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/attributes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:26
* @route '/dashboard/products/attributes'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:26
* @route '/dashboard/products/attributes'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:26
* @route '/dashboard/products/attributes'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:26
* @route '/dashboard/products/attributes'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:26
* @route '/dashboard/products/attributes'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::index
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:26
* @route '/dashboard/products/attributes'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:43
* @route '/dashboard/products/attributes/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/attributes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:43
* @route '/dashboard/products/attributes/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:43
* @route '/dashboard/products/attributes/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:43
* @route '/dashboard/products/attributes/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:43
* @route '/dashboard/products/attributes/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:43
* @route '/dashboard/products/attributes/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::create
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:43
* @route '/dashboard/products/attributes/create'
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:51
* @route '/dashboard/products/attributes'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/products/attributes',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:51
* @route '/dashboard/products/attributes'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:51
* @route '/dashboard/products/attributes'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:51
* @route '/dashboard/products/attributes'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::store
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:51
* @route '/dashboard/products/attributes'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:64
* @route '/dashboard/products/attributes/{attribute}'
*/
export const show = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/attributes/{attribute}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:64
* @route '/dashboard/products/attributes/{attribute}'
*/
show.url = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attribute: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { attribute: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            attribute: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attribute: typeof args.attribute === 'object'
        ? args.attribute.id
        : args.attribute,
    }

    return show.definition.url
            .replace('{attribute}', parsedArgs.attribute.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:64
* @route '/dashboard/products/attributes/{attribute}'
*/
show.get = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:64
* @route '/dashboard/products/attributes/{attribute}'
*/
show.head = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:64
* @route '/dashboard/products/attributes/{attribute}'
*/
const showForm = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:64
* @route '/dashboard/products/attributes/{attribute}'
*/
showForm.get = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::show
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:64
* @route '/dashboard/products/attributes/{attribute}'
*/
showForm.head = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:76
* @route '/dashboard/products/attributes/{attribute}/edit'
*/
export const edit = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/products/attributes/{attribute}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:76
* @route '/dashboard/products/attributes/{attribute}/edit'
*/
edit.url = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attribute: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { attribute: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            attribute: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attribute: typeof args.attribute === 'object'
        ? args.attribute.id
        : args.attribute,
    }

    return edit.definition.url
            .replace('{attribute}', parsedArgs.attribute.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:76
* @route '/dashboard/products/attributes/{attribute}/edit'
*/
edit.get = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:76
* @route '/dashboard/products/attributes/{attribute}/edit'
*/
edit.head = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:76
* @route '/dashboard/products/attributes/{attribute}/edit'
*/
const editForm = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:76
* @route '/dashboard/products/attributes/{attribute}/edit'
*/
editForm.get = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::edit
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:76
* @route '/dashboard/products/attributes/{attribute}/edit'
*/
editForm.head = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:88
* @route '/dashboard/products/attributes/{attribute}'
*/
export const update = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/dashboard/products/attributes/{attribute}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:88
* @route '/dashboard/products/attributes/{attribute}'
*/
update.url = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attribute: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { attribute: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            attribute: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attribute: typeof args.attribute === 'object'
        ? args.attribute.id
        : args.attribute,
    }

    return update.definition.url
            .replace('{attribute}', parsedArgs.attribute.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:88
* @route '/dashboard/products/attributes/{attribute}'
*/
update.put = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:88
* @route '/dashboard/products/attributes/{attribute}'
*/
update.patch = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:88
* @route '/dashboard/products/attributes/{attribute}'
*/
const updateForm = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:88
* @route '/dashboard/products/attributes/{attribute}'
*/
updateForm.put = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::update
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:88
* @route '/dashboard/products/attributes/{attribute}'
*/
updateForm.patch = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:102
* @route '/dashboard/products/attributes/{attribute}'
*/
export const destroy = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/products/attributes/{attribute}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:102
* @route '/dashboard/products/attributes/{attribute}'
*/
destroy.url = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attribute: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { attribute: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            attribute: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attribute: typeof args.attribute === 'object'
        ? args.attribute.id
        : args.attribute,
    }

    return destroy.definition.url
            .replace('{attribute}', parsedArgs.attribute.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:102
* @route '/dashboard/products/attributes/{attribute}'
*/
destroy.delete = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:102
* @route '/dashboard/products/attributes/{attribute}'
*/
const destroyForm = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::destroy
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:102
* @route '/dashboard/products/attributes/{attribute}'
*/
destroyForm.delete = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:115
* @route '/dashboard/products/attributes/{attribute}/toggle-status'
*/
export const toggleStatus = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleStatus.url(args, options),
    method: 'patch',
})

toggleStatus.definition = {
    methods: ["patch"],
    url: '/dashboard/products/attributes/{attribute}/toggle-status',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:115
* @route '/dashboard/products/attributes/{attribute}/toggle-status'
*/
toggleStatus.url = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { attribute: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { attribute: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            attribute: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        attribute: typeof args.attribute === 'object'
        ? args.attribute.id
        : args.attribute,
    }

    return toggleStatus.definition.url
            .replace('{attribute}', parsedArgs.attribute.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:115
* @route '/dashboard/products/attributes/{attribute}/toggle-status'
*/
toggleStatus.patch = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleStatus.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:115
* @route '/dashboard/products/attributes/{attribute}/toggle-status'
*/
const toggleStatusForm = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Product\Http\Controllers\Dashboard\V1\ProductAttributeController::toggleStatus
* @see Modules/Product/app/Http/Controllers/Dashboard/V1/ProductAttributeController.php:115
* @route '/dashboard/products/attributes/{attribute}/toggle-status'
*/
toggleStatusForm.patch = (args: { attribute: number | { id: number } } | [attribute: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

toggleStatus.form = toggleStatusForm

const attributes = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    toggleStatus: Object.assign(toggleStatus, toggleStatus),
}

export default attributes