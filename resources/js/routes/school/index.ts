import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import departments from './departments'
import classrooms from './classrooms'
import schools from './schools'
import programs from './programs'
import courses from './courses'
import equipment from './equipment'
/**
* @see \Modules\School\Http\Controllers\SchoolController::index
* @see Modules/School/app/Http/Controllers/SchoolController.php:13
* @route '/schools'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/schools',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::index
* @see Modules/School/app/Http/Controllers/SchoolController.php:13
* @route '/schools'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::index
* @see Modules/School/app/Http/Controllers/SchoolController.php:13
* @route '/schools'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::index
* @see Modules/School/app/Http/Controllers/SchoolController.php:13
* @route '/schools'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::index
* @see Modules/School/app/Http/Controllers/SchoolController.php:13
* @route '/schools'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::index
* @see Modules/School/app/Http/Controllers/SchoolController.php:13
* @route '/schools'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::index
* @see Modules/School/app/Http/Controllers/SchoolController.php:13
* @route '/schools'
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
* @see \Modules\School\Http\Controllers\SchoolController::create
* @see Modules/School/app/Http/Controllers/SchoolController.php:21
* @route '/schools/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/schools/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::create
* @see Modules/School/app/Http/Controllers/SchoolController.php:21
* @route '/schools/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::create
* @see Modules/School/app/Http/Controllers/SchoolController.php:21
* @route '/schools/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::create
* @see Modules/School/app/Http/Controllers/SchoolController.php:21
* @route '/schools/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::create
* @see Modules/School/app/Http/Controllers/SchoolController.php:21
* @route '/schools/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::create
* @see Modules/School/app/Http/Controllers/SchoolController.php:21
* @route '/schools/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::create
* @see Modules/School/app/Http/Controllers/SchoolController.php:21
* @route '/schools/create'
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
* @see \Modules\School\Http\Controllers\SchoolController::store
* @see Modules/School/app/Http/Controllers/SchoolController.php:29
* @route '/schools'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/schools',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::store
* @see Modules/School/app/Http/Controllers/SchoolController.php:29
* @route '/schools'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::store
* @see Modules/School/app/Http/Controllers/SchoolController.php:29
* @route '/schools'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::store
* @see Modules/School/app/Http/Controllers/SchoolController.php:29
* @route '/schools'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::store
* @see Modules/School/app/Http/Controllers/SchoolController.php:29
* @route '/schools'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Modules\School\Http\Controllers\SchoolController::show
* @see Modules/School/app/Http/Controllers/SchoolController.php:34
* @route '/schools/{school}'
*/
export const show = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/schools/{school}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::show
* @see Modules/School/app/Http/Controllers/SchoolController.php:34
* @route '/schools/{school}'
*/
show.url = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: args.school,
    }

    return show.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::show
* @see Modules/School/app/Http/Controllers/SchoolController.php:34
* @route '/schools/{school}'
*/
show.get = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::show
* @see Modules/School/app/Http/Controllers/SchoolController.php:34
* @route '/schools/{school}'
*/
show.head = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::show
* @see Modules/School/app/Http/Controllers/SchoolController.php:34
* @route '/schools/{school}'
*/
const showForm = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::show
* @see Modules/School/app/Http/Controllers/SchoolController.php:34
* @route '/schools/{school}'
*/
showForm.get = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::show
* @see Modules/School/app/Http/Controllers/SchoolController.php:34
* @route '/schools/{school}'
*/
showForm.head = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\School\Http\Controllers\SchoolController::edit
* @see Modules/School/app/Http/Controllers/SchoolController.php:42
* @route '/schools/{school}/edit'
*/
export const edit = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/schools/{school}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::edit
* @see Modules/School/app/Http/Controllers/SchoolController.php:42
* @route '/schools/{school}/edit'
*/
edit.url = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: args.school,
    }

    return edit.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::edit
* @see Modules/School/app/Http/Controllers/SchoolController.php:42
* @route '/schools/{school}/edit'
*/
edit.get = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::edit
* @see Modules/School/app/Http/Controllers/SchoolController.php:42
* @route '/schools/{school}/edit'
*/
edit.head = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::edit
* @see Modules/School/app/Http/Controllers/SchoolController.php:42
* @route '/schools/{school}/edit'
*/
const editForm = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::edit
* @see Modules/School/app/Http/Controllers/SchoolController.php:42
* @route '/schools/{school}/edit'
*/
editForm.get = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::edit
* @see Modules/School/app/Http/Controllers/SchoolController.php:42
* @route '/schools/{school}/edit'
*/
editForm.head = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\School\Http\Controllers\SchoolController::update
* @see Modules/School/app/Http/Controllers/SchoolController.php:50
* @route '/schools/{school}'
*/
export const update = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/schools/{school}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::update
* @see Modules/School/app/Http/Controllers/SchoolController.php:50
* @route '/schools/{school}'
*/
update.url = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: args.school,
    }

    return update.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::update
* @see Modules/School/app/Http/Controllers/SchoolController.php:50
* @route '/schools/{school}'
*/
update.put = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::update
* @see Modules/School/app/Http/Controllers/SchoolController.php:50
* @route '/schools/{school}'
*/
update.patch = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::update
* @see Modules/School/app/Http/Controllers/SchoolController.php:50
* @route '/schools/{school}'
*/
const updateForm = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::update
* @see Modules/School/app/Http/Controllers/SchoolController.php:50
* @route '/schools/{school}'
*/
updateForm.put = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::update
* @see Modules/School/app/Http/Controllers/SchoolController.php:50
* @route '/schools/{school}'
*/
updateForm.patch = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \Modules\School\Http\Controllers\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/SchoolController.php:55
* @route '/schools/{school}'
*/
export const destroy = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/schools/{school}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Modules\School\Http\Controllers\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/SchoolController.php:55
* @route '/schools/{school}'
*/
destroy.url = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: args.school,
    }

    return destroy.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\School\Http\Controllers\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/SchoolController.php:55
* @route '/schools/{school}'
*/
destroy.delete = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/SchoolController.php:55
* @route '/schools/{school}'
*/
const destroyForm = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\School\Http\Controllers\SchoolController::destroy
* @see Modules/School/app/Http/Controllers/SchoolController.php:55
* @route '/schools/{school}'
*/
destroyForm.delete = (args: { school: string | number } | [school: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const school = {
    departments: Object.assign(departments, departments),
    classrooms: Object.assign(classrooms, classrooms),
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
    schools: Object.assign(schools, schools),
    programs: Object.assign(programs, programs),
    courses: Object.assign(courses, courses),
    equipment: Object.assign(equipment, equipment),
}

export default school