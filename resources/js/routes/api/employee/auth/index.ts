import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::login
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:18
* @route '/api/v1/employee/auth/login'
*/
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/api/v1/employee/auth/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::login
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:18
* @route '/api/v1/employee/auth/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::login
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:18
* @route '/api/v1/employee/auth/login'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::login
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:18
* @route '/api/v1/employee/auth/login'
*/
const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::login
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:18
* @route '/api/v1/employee/auth/login'
*/
loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: login.url(options),
    method: 'post',
})

login.form = loginForm

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::logout
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:28
* @route '/api/v1/employee/auth/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/api/v1/employee/auth/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::logout
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:28
* @route '/api/v1/employee/auth/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::logout
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:28
* @route '/api/v1/employee/auth/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::logout
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:28
* @route '/api/v1/employee/auth/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::logout
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:28
* @route '/api/v1/employee/auth/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::logoutAll
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:38
* @route '/api/v1/employee/auth/logout-all'
*/
export const logoutAll = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logoutAll.url(options),
    method: 'post',
})

logoutAll.definition = {
    methods: ["post"],
    url: '/api/v1/employee/auth/logout-all',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::logoutAll
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:38
* @route '/api/v1/employee/auth/logout-all'
*/
logoutAll.url = (options?: RouteQueryOptions) => {
    return logoutAll.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::logoutAll
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:38
* @route '/api/v1/employee/auth/logout-all'
*/
logoutAll.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logoutAll.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::logoutAll
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:38
* @route '/api/v1/employee/auth/logout-all'
*/
const logoutAllForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logoutAll.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::logoutAll
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:38
* @route '/api/v1/employee/auth/logout-all'
*/
logoutAllForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logoutAll.url(options),
    method: 'post',
})

logoutAll.form = logoutAllForm

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::me
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:48
* @route '/api/v1/employee/auth/me'
*/
export const me = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: me.url(options),
    method: 'get',
})

me.definition = {
    methods: ["get","head"],
    url: '/api/v1/employee/auth/me',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::me
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:48
* @route '/api/v1/employee/auth/me'
*/
me.url = (options?: RouteQueryOptions) => {
    return me.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::me
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:48
* @route '/api/v1/employee/auth/me'
*/
me.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: me.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::me
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:48
* @route '/api/v1/employee/auth/me'
*/
me.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: me.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::me
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:48
* @route '/api/v1/employee/auth/me'
*/
const meForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: me.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::me
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:48
* @route '/api/v1/employee/auth/me'
*/
meForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: me.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::me
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:48
* @route '/api/v1/employee/auth/me'
*/
meForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: me.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

me.form = meForm

const auth = {
    login: Object.assign(login, login),
    logout: Object.assign(logout, logout),
    logoutAll: Object.assign(logoutAll, logoutAll),
    me: Object.assign(me, me),
}

export default auth