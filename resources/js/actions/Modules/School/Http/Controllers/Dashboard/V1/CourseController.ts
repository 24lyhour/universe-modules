import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:53
* @route '/dashboard/courses/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/courses/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:53
* @route '/dashboard/courses/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:53
* @route '/dashboard/courses/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::create
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:53
* @route '/dashboard/courses/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:64
* @route '/dashboard/courses'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/dashboard/courses',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:64
* @route '/dashboard/courses'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::store
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:64
* @route '/dashboard/courses'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:40
* @route '/dashboard/courses'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/courses',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:40
* @route '/dashboard/courses'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:40
* @route '/dashboard/courses'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::index
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:40
* @route '/dashboard/courses'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:76
* @route '/dashboard/courses/{course}'
*/
export const show = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/courses/{course}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:76
* @route '/dashboard/courses/{course}'
*/
show.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { course: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.id
        : args.course,
    }

    return show.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:76
* @route '/dashboard/courses/{course}'
*/
show.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::show
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:76
* @route '/dashboard/courses/{course}'
*/
show.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:86
* @route '/dashboard/courses/{course}/edit'
*/
export const edit = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/courses/{course}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:86
* @route '/dashboard/courses/{course}/edit'
*/
edit.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { course: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.id
        : args.course,
    }

    return edit.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:86
* @route '/dashboard/courses/{course}/edit'
*/
edit.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::edit
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:86
* @route '/dashboard/courses/{course}/edit'
*/
edit.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:97
* @route '/dashboard/courses/{course}'
*/
const updatef2bad258ac59202dd211a45f266dc62d = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatef2bad258ac59202dd211a45f266dc62d.url(args, options),
    method: 'put',
})

updatef2bad258ac59202dd211a45f266dc62d.definition = {
    methods: ["put"],
    url: '/dashboard/courses/{course}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:97
* @route '/dashboard/courses/{course}'
*/
updatef2bad258ac59202dd211a45f266dc62d.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { course: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.id
        : args.course,
    }

    return updatef2bad258ac59202dd211a45f266dc62d.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:97
* @route '/dashboard/courses/{course}'
*/
updatef2bad258ac59202dd211a45f266dc62d.put = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatef2bad258ac59202dd211a45f266dc62d.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:97
* @route '/dashboard/courses/{course}'
*/
const updatef2bad258ac59202dd211a45f266dc62d = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatef2bad258ac59202dd211a45f266dc62d.url(args, options),
    method: 'patch',
})

updatef2bad258ac59202dd211a45f266dc62d.definition = {
    methods: ["patch"],
    url: '/dashboard/courses/{course}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:97
* @route '/dashboard/courses/{course}'
*/
updatef2bad258ac59202dd211a45f266dc62d.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { course: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.id
        : args.course,
    }

    return updatef2bad258ac59202dd211a45f266dc62d.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::update
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:97
* @route '/dashboard/courses/{course}'
*/
updatef2bad258ac59202dd211a45f266dc62d.patch = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatef2bad258ac59202dd211a45f266dc62d.url(args, options),
    method: 'patch',
})

export const update = {
    '/dashboard/courses/{course}': updatef2bad258ac59202dd211a45f266dc62d,
    '/dashboard/courses/{course}': updatef2bad258ac59202dd211a45f266dc62d,
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:133
* @route '/dashboard/courses/{course}/toggle-status'
*/
export const toggleStatus = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

toggleStatus.definition = {
    methods: ["put"],
    url: '/dashboard/courses/{course}/toggle-status',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:133
* @route '/dashboard/courses/{course}/toggle-status'
*/
toggleStatus.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { course: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.id
        : args.course,
    }

    return toggleStatus.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::toggleStatus
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:133
* @route '/dashboard/courses/{course}/toggle-status'
*/
toggleStatus.put = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: toggleStatus.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:109
* @route '/dashboard/courses/{course}/delete'
*/
export const confirmDelete = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

confirmDelete.definition = {
    methods: ["get","head"],
    url: '/dashboard/courses/{course}/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:109
* @route '/dashboard/courses/{course}/delete'
*/
confirmDelete.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { course: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.id
        : args.course,
    }

    return confirmDelete.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:109
* @route '/dashboard/courses/{course}/delete'
*/
confirmDelete.get = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: confirmDelete.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::confirmDelete
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:109
* @route '/dashboard/courses/{course}/delete'
*/
confirmDelete.head = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: confirmDelete.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:121
* @route '/dashboard/courses/{course}'
*/
export const destroy = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/courses/{course}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:121
* @route '/dashboard/courses/{course}'
*/
destroy.url = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { course: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { course: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            course: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        course: typeof args.course === 'object'
        ? args.course.id
        : args.course,
    }

    return destroy.definition.url
            .replace('{course}', parsedArgs.course.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\Dashboard\V1\CourseController::destroy
* @see Modules/School/app/Http/Controllers/Dashboard/V1/CourseController.php:121
* @route '/dashboard/courses/{course}'
*/
destroy.delete = (args: { course: number | { id: number } } | [course: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const CourseController = { create, store, index, show, edit, update, toggleStatus, confirmDelete, destroy }

export default CourseController