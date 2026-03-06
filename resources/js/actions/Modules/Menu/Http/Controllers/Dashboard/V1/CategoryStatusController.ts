import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryStatusController::__invoke
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryStatusController.php:20
* @route '/dashboard/categories/{category}/toggle-status'
*/
const CategoryStatusController = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: CategoryStatusController.url(args, options),
    method: 'put',
})

CategoryStatusController.definition = {
    methods: ["put"],
    url: '/dashboard/categories/{category}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryStatusController::__invoke
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryStatusController.php:20
* @route '/dashboard/categories/{category}/toggle-status'
*/
CategoryStatusController.url = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return CategoryStatusController.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Menu\Http\Controllers\Dashboard\V1\CategoryStatusController::__invoke
* @see Modules/Menu/app/Http/Controllers/Dashboard/V1/CategoryStatusController.php:20
* @route '/dashboard/categories/{category}/toggle-status'
*/
CategoryStatusController.put = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: CategoryStatusController.url(args, options),
    method: 'put',
})

export default CategoryStatusController