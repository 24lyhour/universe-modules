import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import wallet0fdd46 from './wallet'
/**
* @see \App\Http\Controllers\Settings\WidgetController::index
* @see app/Http/Controllers/Settings/WidgetController.php:51
* @route '/dashboard/settings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\WidgetController::index
* @see app/Http/Controllers/Settings/WidgetController.php:51
* @route '/dashboard/settings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\WidgetController::index
* @see app/Http/Controllers/Settings/WidgetController.php:51
* @route '/dashboard/settings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\WidgetController::index
* @see app/Http/Controllers/Settings/WidgetController.php:51
* @route '/dashboard/settings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\WidgetController::index
* @see app/Http/Controllers/Settings/WidgetController.php:51
* @route '/dashboard/settings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\WidgetController::index
* @see app/Http/Controllers/Settings/WidgetController.php:51
* @route '/dashboard/settings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\WidgetController::index
* @see app/Http/Controllers/Settings/WidgetController.php:51
* @route '/dashboard/settings'
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
* @see \App\Http\Controllers\Settings\WidgetController::update
* @see app/Http/Controllers/Settings/WidgetController.php:84
* @route '/dashboard/settings/widgets/{widget}'
*/
export const update = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/dashboard/settings/widgets/{widget}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Settings\WidgetController::update
* @see app/Http/Controllers/Settings/WidgetController.php:84
* @route '/dashboard/settings/widgets/{widget}'
*/
update.url = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { widget: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { widget: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            widget: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        widget: typeof args.widget === 'object'
        ? args.widget.id
        : args.widget,
    }

    return update.definition.url
            .replace('{widget}', parsedArgs.widget.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\WidgetController::update
* @see app/Http/Controllers/Settings/WidgetController.php:84
* @route '/dashboard/settings/widgets/{widget}'
*/
update.patch = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Settings\WidgetController::update
* @see app/Http/Controllers/Settings/WidgetController.php:84
* @route '/dashboard/settings/widgets/{widget}'
*/
const updateForm = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\WidgetController::update
* @see app/Http/Controllers/Settings/WidgetController.php:84
* @route '/dashboard/settings/widgets/{widget}'
*/
updateForm.patch = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Settings\WidgetController::order
* @see app/Http/Controllers/Settings/WidgetController.php:102
* @route '/dashboard/settings/widgets/order'
*/
export const order = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: order.url(options),
    method: 'post',
})

order.definition = {
    methods: ["post"],
    url: '/dashboard/settings/widgets/order',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\WidgetController::order
* @see app/Http/Controllers/Settings/WidgetController.php:102
* @route '/dashboard/settings/widgets/order'
*/
order.url = (options?: RouteQueryOptions) => {
    return order.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\WidgetController::order
* @see app/Http/Controllers/Settings/WidgetController.php:102
* @route '/dashboard/settings/widgets/order'
*/
order.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: order.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\WidgetController::order
* @see app/Http/Controllers/Settings/WidgetController.php:102
* @route '/dashboard/settings/widgets/order'
*/
const orderForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: order.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\WidgetController::order
* @see app/Http/Controllers/Settings/WidgetController.php:102
* @route '/dashboard/settings/widgets/order'
*/
orderForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: order.url(options),
    method: 'post',
})

order.form = orderForm

/**
* @see \App\Http\Controllers\Settings\WidgetController::toggle
* @see app/Http/Controllers/Settings/WidgetController.php:122
* @route '/dashboard/settings/widgets/toggle-module'
*/
export const toggle = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggle.url(options),
    method: 'post',
})

toggle.definition = {
    methods: ["post"],
    url: '/dashboard/settings/widgets/toggle-module',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\WidgetController::toggle
* @see app/Http/Controllers/Settings/WidgetController.php:122
* @route '/dashboard/settings/widgets/toggle-module'
*/
toggle.url = (options?: RouteQueryOptions) => {
    return toggle.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\WidgetController::toggle
* @see app/Http/Controllers/Settings/WidgetController.php:122
* @route '/dashboard/settings/widgets/toggle-module'
*/
toggle.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggle.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\WidgetController::toggle
* @see app/Http/Controllers/Settings/WidgetController.php:122
* @route '/dashboard/settings/widgets/toggle-module'
*/
const toggleForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\WidgetController::toggle
* @see app/Http/Controllers/Settings/WidgetController.php:122
* @route '/dashboard/settings/widgets/toggle-module'
*/
toggleForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggle.url(options),
    method: 'post',
})

toggle.form = toggleForm

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletSettingsController::wallet
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletSettingsController.php:30
* @route '/dashboard/settings/wallet'
*/
export const wallet = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: wallet.url(options),
    method: 'get',
})

wallet.definition = {
    methods: ["get","head"],
    url: '/dashboard/settings/wallet',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletSettingsController::wallet
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletSettingsController.php:30
* @route '/dashboard/settings/wallet'
*/
wallet.url = (options?: RouteQueryOptions) => {
    return wallet.definition.url + queryParams(options)
}

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletSettingsController::wallet
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletSettingsController.php:30
* @route '/dashboard/settings/wallet'
*/
wallet.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: wallet.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletSettingsController::wallet
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletSettingsController.php:30
* @route '/dashboard/settings/wallet'
*/
wallet.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: wallet.url(options),
    method: 'head',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletSettingsController::wallet
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletSettingsController.php:30
* @route '/dashboard/settings/wallet'
*/
const walletForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: wallet.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletSettingsController::wallet
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletSettingsController.php:30
* @route '/dashboard/settings/wallet'
*/
walletForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: wallet.url(options),
    method: 'get',
})

/**
* @see \Modules\Wallets\Http\Controllers\Dashboard\V1\WalletSettingsController::wallet
* @see Modules/Wallets/app/Http/Controllers/Dashboard/V1/WalletSettingsController.php:30
* @route '/dashboard/settings/wallet'
*/
walletForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: wallet.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

wallet.form = walletForm

const settings = {
    index: Object.assign(index, index),
    update: Object.assign(update, update),
    order: Object.assign(order, order),
    toggle: Object.assign(toggle, toggle),
    wallet: Object.assign(wallet, wallet0fdd46),
}

export default settings