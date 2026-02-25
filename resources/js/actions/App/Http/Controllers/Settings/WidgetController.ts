import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\WidgetController::index
* @see app/Http/Controllers/Settings/WidgetController.php:51
* @route '/dashboard/settings'
*/
const index4afa5860ec9efce08b0baa86e7a3f13f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4afa5860ec9efce08b0baa86e7a3f13f.url(options),
    method: 'get',
})

index4afa5860ec9efce08b0baa86e7a3f13f.definition = {
    methods: ["get","head"],
    url: '/dashboard/settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\WidgetController::index
* @see app/Http/Controllers/Settings/WidgetController.php:51
* @route '/dashboard/settings'
*/
index4afa5860ec9efce08b0baa86e7a3f13f.url = (options?: RouteQueryOptions) => {
    return index4afa5860ec9efce08b0baa86e7a3f13f.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\WidgetController::index
* @see app/Http/Controllers/Settings/WidgetController.php:51
* @route '/dashboard/settings'
*/
index4afa5860ec9efce08b0baa86e7a3f13f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index4afa5860ec9efce08b0baa86e7a3f13f.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\WidgetController::index
* @see app/Http/Controllers/Settings/WidgetController.php:51
* @route '/dashboard/settings'
*/
index4afa5860ec9efce08b0baa86e7a3f13f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index4afa5860ec9efce08b0baa86e7a3f13f.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\WidgetController::index
* @see app/Http/Controllers/Settings/WidgetController.php:51
* @route '/settings/widgets'
*/
const indexece6000b7bfaa8222ecc252466848ad9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexece6000b7bfaa8222ecc252466848ad9.url(options),
    method: 'get',
})

indexece6000b7bfaa8222ecc252466848ad9.definition = {
    methods: ["get","head"],
    url: '/settings/widgets',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\WidgetController::index
* @see app/Http/Controllers/Settings/WidgetController.php:51
* @route '/settings/widgets'
*/
indexece6000b7bfaa8222ecc252466848ad9.url = (options?: RouteQueryOptions) => {
    return indexece6000b7bfaa8222ecc252466848ad9.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\WidgetController::index
* @see app/Http/Controllers/Settings/WidgetController.php:51
* @route '/settings/widgets'
*/
indexece6000b7bfaa8222ecc252466848ad9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexece6000b7bfaa8222ecc252466848ad9.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\WidgetController::index
* @see app/Http/Controllers/Settings/WidgetController.php:51
* @route '/settings/widgets'
*/
indexece6000b7bfaa8222ecc252466848ad9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexece6000b7bfaa8222ecc252466848ad9.url(options),
    method: 'head',
})

export const index = {
    '/dashboard/settings': index4afa5860ec9efce08b0baa86e7a3f13f,
    '/settings/widgets': indexece6000b7bfaa8222ecc252466848ad9,
}

/**
* @see \App\Http\Controllers\Settings\WidgetController::update
* @see app/Http/Controllers/Settings/WidgetController.php:84
* @route '/dashboard/settings/widgets/{widget}'
*/
const updatebe0eed584efe07a5bb507a31908977b1 = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatebe0eed584efe07a5bb507a31908977b1.url(args, options),
    method: 'patch',
})

updatebe0eed584efe07a5bb507a31908977b1.definition = {
    methods: ["patch"],
    url: '/dashboard/settings/widgets/{widget}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Settings\WidgetController::update
* @see app/Http/Controllers/Settings/WidgetController.php:84
* @route '/dashboard/settings/widgets/{widget}'
*/
updatebe0eed584efe07a5bb507a31908977b1.url = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return updatebe0eed584efe07a5bb507a31908977b1.definition.url
            .replace('{widget}', parsedArgs.widget.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\WidgetController::update
* @see app/Http/Controllers/Settings/WidgetController.php:84
* @route '/dashboard/settings/widgets/{widget}'
*/
updatebe0eed584efe07a5bb507a31908977b1.patch = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatebe0eed584efe07a5bb507a31908977b1.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Settings\WidgetController::update
* @see app/Http/Controllers/Settings/WidgetController.php:84
* @route '/settings/widgets/{widget}'
*/
const update685d674c98896447044b43e90e172ed7 = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update685d674c98896447044b43e90e172ed7.url(args, options),
    method: 'patch',
})

update685d674c98896447044b43e90e172ed7.definition = {
    methods: ["patch"],
    url: '/settings/widgets/{widget}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Settings\WidgetController::update
* @see app/Http/Controllers/Settings/WidgetController.php:84
* @route '/settings/widgets/{widget}'
*/
update685d674c98896447044b43e90e172ed7.url = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update685d674c98896447044b43e90e172ed7.definition.url
            .replace('{widget}', parsedArgs.widget.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\WidgetController::update
* @see app/Http/Controllers/Settings/WidgetController.php:84
* @route '/settings/widgets/{widget}'
*/
update685d674c98896447044b43e90e172ed7.patch = (args: { widget: number | { id: number } } | [widget: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update685d674c98896447044b43e90e172ed7.url(args, options),
    method: 'patch',
})

export const update = {
    '/dashboard/settings/widgets/{widget}': updatebe0eed584efe07a5bb507a31908977b1,
    '/settings/widgets/{widget}': update685d674c98896447044b43e90e172ed7,
}

/**
* @see \App\Http\Controllers\Settings\WidgetController::updateOrder
* @see app/Http/Controllers/Settings/WidgetController.php:102
* @route '/dashboard/settings/widgets/order'
*/
const updateOrderedf5d6349c8c6255e1d987cebc720d24 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateOrderedf5d6349c8c6255e1d987cebc720d24.url(options),
    method: 'post',
})

updateOrderedf5d6349c8c6255e1d987cebc720d24.definition = {
    methods: ["post"],
    url: '/dashboard/settings/widgets/order',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\WidgetController::updateOrder
* @see app/Http/Controllers/Settings/WidgetController.php:102
* @route '/dashboard/settings/widgets/order'
*/
updateOrderedf5d6349c8c6255e1d987cebc720d24.url = (options?: RouteQueryOptions) => {
    return updateOrderedf5d6349c8c6255e1d987cebc720d24.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\WidgetController::updateOrder
* @see app/Http/Controllers/Settings/WidgetController.php:102
* @route '/dashboard/settings/widgets/order'
*/
updateOrderedf5d6349c8c6255e1d987cebc720d24.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateOrderedf5d6349c8c6255e1d987cebc720d24.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\WidgetController::updateOrder
* @see app/Http/Controllers/Settings/WidgetController.php:102
* @route '/settings/widgets/order'
*/
const updateOrderbb97ee3df2ee7f654f907b60b18e72c8 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateOrderbb97ee3df2ee7f654f907b60b18e72c8.url(options),
    method: 'post',
})

updateOrderbb97ee3df2ee7f654f907b60b18e72c8.definition = {
    methods: ["post"],
    url: '/settings/widgets/order',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\WidgetController::updateOrder
* @see app/Http/Controllers/Settings/WidgetController.php:102
* @route '/settings/widgets/order'
*/
updateOrderbb97ee3df2ee7f654f907b60b18e72c8.url = (options?: RouteQueryOptions) => {
    return updateOrderbb97ee3df2ee7f654f907b60b18e72c8.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\WidgetController::updateOrder
* @see app/Http/Controllers/Settings/WidgetController.php:102
* @route '/settings/widgets/order'
*/
updateOrderbb97ee3df2ee7f654f907b60b18e72c8.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateOrderbb97ee3df2ee7f654f907b60b18e72c8.url(options),
    method: 'post',
})

export const updateOrder = {
    '/dashboard/settings/widgets/order': updateOrderedf5d6349c8c6255e1d987cebc720d24,
    '/settings/widgets/order': updateOrderbb97ee3df2ee7f654f907b60b18e72c8,
}

/**
* @see \App\Http\Controllers\Settings\WidgetController::toggleModule
* @see app/Http/Controllers/Settings/WidgetController.php:122
* @route '/dashboard/settings/widgets/toggle-module'
*/
export const toggleModule = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleModule.url(options),
    method: 'post',
})

toggleModule.definition = {
    methods: ["post"],
    url: '/dashboard/settings/widgets/toggle-module',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\WidgetController::toggleModule
* @see app/Http/Controllers/Settings/WidgetController.php:122
* @route '/dashboard/settings/widgets/toggle-module'
*/
toggleModule.url = (options?: RouteQueryOptions) => {
    return toggleModule.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\WidgetController::toggleModule
* @see app/Http/Controllers/Settings/WidgetController.php:122
* @route '/dashboard/settings/widgets/toggle-module'
*/
toggleModule.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleModule.url(options),
    method: 'post',
})

const WidgetController = { index, update, updateOrder, toggleModule }

export default WidgetController