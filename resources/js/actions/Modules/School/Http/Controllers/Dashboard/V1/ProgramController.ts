import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:55
* @route '/dashboard/programs/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/programs/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:55
* @route '/dashboard/programs/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:55
* @route '/dashboard/programs/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:55
* @route '/dashboard/programs/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:66
* @route '/dashboard/programs'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/programs',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:66
* @route '/dashboard/programs'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:66
* @route '/dashboard/programs'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:42
* @route '/dashboard/programs'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/programs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:42
* @route '/dashboard/programs'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:42
* @route '/dashboard/programs'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:42
* @route '/dashboard/programs'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::getPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:0
* @route '/dashboard/api/programs'
*/
export const getPrograms = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getPrograms.url(options),
    method: 'get',
})

getPrograms.definition = {
    methods: ["get","head"],
    url: '/dashboard/api/programs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::getPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:0
* @route '/dashboard/api/programs'
*/
getPrograms.url = (options?: RouteQueryOptions) => {
    return getPrograms.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::getPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:0
* @route '/dashboard/api/programs'
*/
getPrograms.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getPrograms.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::getPrograms
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:0
* @route '/dashboard/api/programs'
*/
getPrograms.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getPrograms.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:78
* @route '/dashboard/programs/{program}'
*/
export const show = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/programs/{program}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:78
* @route '/dashboard/programs/{program}'
*/
show.url = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { program: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { program: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            program: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        program: typeof args.program === 'object'
        ? args.program.id
        : args.program,
    }

    return show.definition.url
            .replace('{program}', parsedArgs.program.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:78
* @route '/dashboard/programs/{program}'
*/
show.get = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:78
* @route '/dashboard/programs/{program}'
*/
show.head = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:88
* @route '/dashboard/programs/{program}/edit'
*/
export const edit = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/programs/{program}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:88
* @route '/dashboard/programs/{program}/edit'
*/
edit.url = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { program: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { program: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            program: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        program: typeof args.program === 'object'
        ? args.program.id
        : args.program,
    }

    return edit.definition.url
            .replace('{program}', parsedArgs.program.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:88
* @route '/dashboard/programs/{program}/edit'
*/
edit.get = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:88
* @route '/dashboard/programs/{program}/edit'
*/
edit.head = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:99
* @route '/dashboard/programs/{program}'
*/
const updateffcfde5b84da1505203f38950229873e = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateffcfde5b84da1505203f38950229873e.url(args, options),
    method: 'put',
})

updateffcfde5b84da1505203f38950229873e.definition = {
    methods: ["put"],
    url: '/dashboard/programs/{program}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:99
* @route '/dashboard/programs/{program}'
*/
updateffcfde5b84da1505203f38950229873e.url = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { program: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { program: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            program: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        program: typeof args.program === 'object'
        ? args.program.id
        : args.program,
    }

    return updateffcfde5b84da1505203f38950229873e.definition.url
            .replace('{program}', parsedArgs.program.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:99
* @route '/dashboard/programs/{program}'
*/
updateffcfde5b84da1505203f38950229873e.put = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateffcfde5b84da1505203f38950229873e.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:99
* @route '/dashboard/programs/{program}'
*/
const updateffcfde5b84da1505203f38950229873e = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateffcfde5b84da1505203f38950229873e.url(args, options),
    method: 'patch',
})

updateffcfde5b84da1505203f38950229873e.definition = {
    methods: ["patch"],
    url: '/dashboard/programs/{program}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:99
* @route '/dashboard/programs/{program}'
*/
updateffcfde5b84da1505203f38950229873e.url = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { program: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { program: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            program: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        program: typeof args.program === 'object'
        ? args.program.id
        : args.program,
    }

    return updateffcfde5b84da1505203f38950229873e.definition.url
            .replace('{program}', parsedArgs.program.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:99
* @route '/dashboard/programs/{program}'
*/
updateffcfde5b84da1505203f38950229873e.patch = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateffcfde5b84da1505203f38950229873e.url(args, options),
    method: 'patch',
})

export const update = {
    '/dashboard/programs/{program}': updateffcfde5b84da1505203f38950229873e,
    '/dashboard/programs/{program}': updateffcfde5b84da1505203f38950229873e,
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:135
* @route '/dashboard/programs/{program}/toggle-status'
*/
export const toggleStatus = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

toggleStatus.definition = {
    methods: ["put"],
    url: '/dashboard/programs/{program}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:135
* @route '/dashboard/programs/{program}/toggle-status'
*/
toggleStatus.url = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { program: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { program: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            program: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        program: typeof args.program === 'object'
        ? args.program.id
        : args.program,
    }

    return toggleStatus.definition.url
            .replace('{program}', parsedArgs.program.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:135
* @route '/dashboard/programs/{program}/toggle-status'
*/
toggleStatus.put = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:111
* @route '/dashboard/programs/{program}/delete'
*/
export const confirmDelete = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/programs/{program}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:111
* @route '/dashboard/programs/{program}/delete'
*/
confirmDelete.url = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { program: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { program: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            program: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        program: typeof args.program === 'object'
        ? args.program.id
        : args.program,
    }

    return confirmDelete.definition.url
            .replace('{program}', parsedArgs.program.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:111
* @route '/dashboard/programs/{program}/delete'
*/
confirmDelete.get = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:111
* @route '/dashboard/programs/{program}/delete'
*/
confirmDelete.head = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:123
* @route '/dashboard/programs/{program}'
*/
export const destroy = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/programs/{program}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:123
* @route '/dashboard/programs/{program}'
*/
destroy.url = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { program: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { program: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            program: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        program: typeof args.program === 'object'
        ? args.program.id
        : args.program,
    }

    return destroy.definition.url
            .replace('{program}', parsedArgs.program.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\ProgramController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/ProgramController.php:123
* @route '/dashboard/programs/{program}'
*/
destroy.delete = (args: { program: number | { id: number } } | [program: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const ProgramController = { create, store, index, getPrograms, show, edit, update, toggleStatus, confirmDelete, destroy }

export default ProgramController