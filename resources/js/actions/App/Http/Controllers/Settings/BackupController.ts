import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\BackupController::index
* @see app/Http/Controllers/Settings/BackupController.php:18
* @route '/settings/backup'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/settings/backup',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\BackupController::index
* @see app/Http/Controllers/Settings/BackupController.php:18
* @route '/settings/backup'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\BackupController::index
* @see app/Http/Controllers/Settings/BackupController.php:18
* @route '/settings/backup'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\BackupController::index
* @see app/Http/Controllers/Settings/BackupController.php:18
* @route '/settings/backup'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\BackupController::index
* @see app/Http/Controllers/Settings/BackupController.php:18
* @route '/settings/backup'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\BackupController::index
* @see app/Http/Controllers/Settings/BackupController.php:18
* @route '/settings/backup'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\BackupController::index
* @see app/Http/Controllers/Settings/BackupController.php:18
* @route '/settings/backup'
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
* @see \App\Http\Controllers\Settings\BackupController::store
* @see app/Http/Controllers/Settings/BackupController.php:64
* @route '/settings/backup'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/settings/backup',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\BackupController::store
* @see app/Http/Controllers/Settings/BackupController.php:64
* @route '/settings/backup'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\BackupController::store
* @see app/Http/Controllers/Settings/BackupController.php:64
* @route '/settings/backup'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\BackupController::store
* @see app/Http/Controllers/Settings/BackupController.php:64
* @route '/settings/backup'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\BackupController::store
* @see app/Http/Controllers/Settings/BackupController.php:64
* @route '/settings/backup'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Settings\BackupController::download
* @see app/Http/Controllers/Settings/BackupController.php:91
* @route '/settings/backup/download'
*/
export const download = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(options),
    method: 'get',
})

download.definition = {
    methods: ["get","head"],
    url: '/settings/backup/download',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\BackupController::download
* @see app/Http/Controllers/Settings/BackupController.php:91
* @route '/settings/backup/download'
*/
download.url = (options?: RouteQueryOptions) => {
    return download.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\BackupController::download
* @see app/Http/Controllers/Settings/BackupController.php:91
* @route '/settings/backup/download'
*/
download.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\BackupController::download
* @see app/Http/Controllers/Settings/BackupController.php:91
* @route '/settings/backup/download'
*/
download.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: download.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\BackupController::download
* @see app/Http/Controllers/Settings/BackupController.php:91
* @route '/settings/backup/download'
*/
const downloadForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\BackupController::download
* @see app/Http/Controllers/Settings/BackupController.php:91
* @route '/settings/backup/download'
*/
downloadForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\BackupController::download
* @see app/Http/Controllers/Settings/BackupController.php:91
* @route '/settings/backup/download'
*/
downloadForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: download.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

download.form = downloadForm

/**
* @see \App\Http\Controllers\Settings\BackupController::destroy
* @see app/Http/Controllers/Settings/BackupController.php:106
* @route '/settings/backup'
*/
export const destroy = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/settings/backup',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Settings\BackupController::destroy
* @see app/Http/Controllers/Settings/BackupController.php:106
* @route '/settings/backup'
*/
destroy.url = (options?: RouteQueryOptions) => {
    return destroy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\BackupController::destroy
* @see app/Http/Controllers/Settings/BackupController.php:106
* @route '/settings/backup'
*/
destroy.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Settings\BackupController::destroy
* @see app/Http/Controllers/Settings/BackupController.php:106
* @route '/settings/backup'
*/
const destroyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\BackupController::destroy
* @see app/Http/Controllers/Settings/BackupController.php:106
* @route '/settings/backup'
*/
destroyForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\Settings\BackupController::cleanup
* @see app/Http/Controllers/Settings/BackupController.php:126
* @route '/settings/backup/cleanup'
*/
export const cleanup = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cleanup.url(options),
    method: 'post',
})

cleanup.definition = {
    methods: ["post"],
    url: '/settings/backup/cleanup',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\BackupController::cleanup
* @see app/Http/Controllers/Settings/BackupController.php:126
* @route '/settings/backup/cleanup'
*/
cleanup.url = (options?: RouteQueryOptions) => {
    return cleanup.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\BackupController::cleanup
* @see app/Http/Controllers/Settings/BackupController.php:126
* @route '/settings/backup/cleanup'
*/
cleanup.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cleanup.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\BackupController::cleanup
* @see app/Http/Controllers/Settings/BackupController.php:126
* @route '/settings/backup/cleanup'
*/
const cleanupForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cleanup.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\BackupController::cleanup
* @see app/Http/Controllers/Settings/BackupController.php:126
* @route '/settings/backup/cleanup'
*/
cleanupForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cleanup.url(options),
    method: 'post',
})

cleanup.form = cleanupForm

const BackupController = { index, store, download, destroy, cleanup }

export default BackupController