import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \Modules\Porfolio\Http\Controllers\SiteSettingController::update
* @see Modules/Porfolio/app/Http/Controllers/SiteSettingController.php:31
* @route '/dashboard/settings'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/settings',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Porfolio\Http\Controllers\SiteSettingController::update
* @see Modules/Porfolio/app/Http/Controllers/SiteSettingController.php:31
* @route '/dashboard/settings'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\SiteSettingController::update
* @see Modules/Porfolio/app/Http/Controllers/SiteSettingController.php:31
* @route '/dashboard/settings'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \Modules\Porfolio\Http\Controllers\SiteSettingController::update
* @see Modules/Porfolio/app/Http/Controllers/SiteSettingController.php:31
* @route '/dashboard/settings'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\SiteSettingController::update
* @see Modules/Porfolio/app/Http/Controllers/SiteSettingController.php:31
* @route '/dashboard/settings'
*/
updateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Modules\Porfolio\Http\Controllers\SiteSettingController::store
* @see Modules/Porfolio/app/Http/Controllers/SiteSettingController.php:52
* @route '/dashboard/settings'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/settings',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Porfolio\Http\Controllers\SiteSettingController::store
* @see Modules/Porfolio/app/Http/Controllers/SiteSettingController.php:52
* @route '/dashboard/settings'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\SiteSettingController::store
* @see Modules/Porfolio/app/Http/Controllers/SiteSettingController.php:52
* @route '/dashboard/settings'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\SiteSettingController::store
* @see Modules/Porfolio/app/Http/Controllers/SiteSettingController.php:52
* @route '/dashboard/settings'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\SiteSettingController::store
* @see Modules/Porfolio/app/Http/Controllers/SiteSettingController.php:52
* @route '/dashboard/settings'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\Porfolio\Http\Controllers\SiteSettingController::destroy
* @see Modules/Porfolio/app/Http/Controllers/SiteSettingController.php:72
* @route '/dashboard/settings/{key}'
*/
export const destroy = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/settings/{key}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\Porfolio\Http\Controllers\SiteSettingController::destroy
* @see Modules/Porfolio/app/Http/Controllers/SiteSettingController.php:72
* @route '/dashboard/settings/{key}'
*/
destroy.url = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { key: args }
    }

    if (Array.isArray(args)) {
        args = {
            key: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        key: args.key,
    }

    return destroy.definition.url
            .replace('{key}', parsedArgs.key.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Porfolio\Http\Controllers\SiteSettingController::destroy
* @see Modules/Porfolio/app/Http/Controllers/SiteSettingController.php:72
* @route '/dashboard/settings/{key}'
*/
destroy.delete = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\Porfolio\Http\Controllers\SiteSettingController::destroy
* @see Modules/Porfolio/app/Http/Controllers/SiteSettingController.php:72
* @route '/dashboard/settings/{key}'
*/
const destroyForm = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Porfolio\Http\Controllers\SiteSettingController::destroy
* @see Modules/Porfolio/app/Http/Controllers/SiteSettingController.php:72
* @route '/dashboard/settings/{key}'
*/
destroyForm.delete = (args: { key: string | number } | [key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const SiteSettingController = { update, store, destroy }

export default SiteSettingController