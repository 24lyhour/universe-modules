import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::login
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:20
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
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:20
* @route '/api/v1/employee/auth/login'
*/
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::login
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:20
* @route '/api/v1/employee/auth/login'
*/
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::logout
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:30
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
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:30
* @route '/api/v1/employee/auth/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::logout
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:30
* @route '/api/v1/employee/auth/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::logoutAll
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:40
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
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:40
* @route '/api/v1/employee/auth/logout-all'
*/
logoutAll.url = (options?: RouteQueryOptions) => {
    return logoutAll.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::logoutAll
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:40
* @route '/api/v1/employee/auth/logout-all'
*/
logoutAll.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logoutAll.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::me
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:50
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
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:50
* @route '/api/v1/employee/auth/me'
*/
me.url = (options?: RouteQueryOptions) => {
    return me.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::me
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:50
* @route '/api/v1/employee/auth/me'
*/
me.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: me.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::me
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:50
* @route '/api/v1/employee/auth/me'
*/
me.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: me.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::updateProfile
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:60
* @route '/api/v1/employee/auth/update-profile'
*/
export const updateProfile = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateProfile.url(options),
    method: 'post',
})

updateProfile.definition = {
    methods: ["post"],
    url: '/api/v1/employee/auth/update-profile',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::updateProfile
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:60
* @route '/api/v1/employee/auth/update-profile'
*/
updateProfile.url = (options?: RouteQueryOptions) => {
    return updateProfile.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\EmployeeAuthController::updateProfile
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/EmployeeAuthController.php:60
* @route '/api/v1/employee/auth/update-profile'
*/
updateProfile.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateProfile.url(options),
    method: 'post',
})

const auth = {
    login: Object.assign(login, login),
    logout: Object.assign(logout, logout),
    logoutAll: Object.assign(logoutAll, logoutAll),
    me: Object.assign(me, me),
    updateProfile: Object.assign(updateProfile, updateProfile),
}

export default auth