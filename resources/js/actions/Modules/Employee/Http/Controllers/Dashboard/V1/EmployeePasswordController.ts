import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:25
* @route '/dashboard/employees/{employee}/change-password'
*/
export const edit = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees/{employee}/change-password',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:25
* @route '/dashboard/employees/{employee}/change-password'
*/
edit.url = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employee: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employee: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee: typeof args.employee === 'object'
        ? args.employee.uuid
        : args.employee,
    }

    return edit.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:25
* @route '/dashboard/employees/{employee}/change-password'
*/
edit.get = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:25
* @route '/dashboard/employees/{employee}/change-password'
*/
edit.head = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:25
* @route '/dashboard/employees/{employee}/change-password'
*/
const editForm = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:25
* @route '/dashboard/employees/{employee}/change-password'
*/
editForm.get = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::edit
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:25
* @route '/dashboard/employees/{employee}/change-password'
*/
editForm.head = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:68
* @route '/dashboard/employees/{employee}/change-password'
*/
export const update = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/employees/{employee}/change-password',
} satisfies RouteDefinition<["put"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:68
* @route '/dashboard/employees/{employee}/change-password'
*/
update.url = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employee: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employee: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee: typeof args.employee === 'object'
        ? args.employee.uuid
        : args.employee,
    }

    return update.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:68
* @route '/dashboard/employees/{employee}/change-password'
*/
update.put = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:68
* @route '/dashboard/employees/{employee}/change-password'
*/
const updateForm = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::update
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:68
* @route '/dashboard/employees/{employee}/change-password'
*/
updateForm.put = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::showCreateAccount
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:86
* @route '/dashboard/employees/{employee}/create-account'
*/
export const showCreateAccount = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showCreateAccount.url(args, options),
    method: 'get',
})

showCreateAccount.definition = {
    methods: ["get","head"],
    url: '/dashboard/employees/{employee}/create-account',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::showCreateAccount
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:86
* @route '/dashboard/employees/{employee}/create-account'
*/
showCreateAccount.url = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employee: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employee: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee: typeof args.employee === 'object'
        ? args.employee.uuid
        : args.employee,
    }

    return showCreateAccount.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::showCreateAccount
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:86
* @route '/dashboard/employees/{employee}/create-account'
*/
showCreateAccount.get = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showCreateAccount.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::showCreateAccount
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:86
* @route '/dashboard/employees/{employee}/create-account'
*/
showCreateAccount.head = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showCreateAccount.url(args, options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::showCreateAccount
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:86
* @route '/dashboard/employees/{employee}/create-account'
*/
const showCreateAccountForm = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showCreateAccount.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::showCreateAccount
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:86
* @route '/dashboard/employees/{employee}/create-account'
*/
showCreateAccountForm.get = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showCreateAccount.url(args, options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::showCreateAccount
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:86
* @route '/dashboard/employees/{employee}/create-account'
*/
showCreateAccountForm.head = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showCreateAccount.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showCreateAccount.form = showCreateAccountForm

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::createAccount
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:133
* @route '/dashboard/employees/{employee}/create-account'
*/
export const createAccount = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createAccount.url(args, options),
    method: 'post',
})

createAccount.definition = {
    methods: ["post"],
    url: '/dashboard/employees/{employee}/create-account',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::createAccount
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:133
* @route '/dashboard/employees/{employee}/create-account'
*/
createAccount.url = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { employee: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'uuid' in args) {
        args = { employee: args.uuid }
    }

    if (Array.isArray(args)) {
        args = {
            employee: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        employee: typeof args.employee === 'object'
        ? args.employee.uuid
        : args.employee,
    }

    return createAccount.definition.url
            .replace('{employee}', parsedArgs.employee.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::createAccount
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:133
* @route '/dashboard/employees/{employee}/create-account'
*/
createAccount.post = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: createAccount.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::createAccount
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:133
* @route '/dashboard/employees/{employee}/create-account'
*/
const createAccountForm = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: createAccount.url(args, options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\EmployeePasswordController::createAccount
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/EmployeePasswordController.php:133
* @route '/dashboard/employees/{employee}/create-account'
*/
createAccountForm.post = (args: { employee: string | { uuid: string } } | [employee: string | { uuid: string } ] | string | { uuid: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: createAccount.url(args, options),
    method: 'post',
})

createAccount.form = createAccountForm

const EmployeePasswordController = { edit, update, showCreateAccount, createAccount }

export default EmployeePasswordController