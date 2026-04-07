import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\AttendanceController::today
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/AttendanceController.php:19
* @route '/api/v1/employee/attendance/today'
*/
export const today = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: today.url(options),
    method: 'get',
})

today.definition = {
    methods: ["get","head"],
    url: '/api/v1/employee/attendance/today',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\AttendanceController::today
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/AttendanceController.php:19
* @route '/api/v1/employee/attendance/today'
*/
today.url = (options?: RouteQueryOptions) => {
    return today.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\AttendanceController::today
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/AttendanceController.php:19
* @route '/api/v1/employee/attendance/today'
*/
today.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: today.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\AttendanceController::today
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/AttendanceController.php:19
* @route '/api/v1/employee/attendance/today'
*/
today.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: today.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\AttendanceController::checkIn
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/AttendanceController.php:29
* @route '/api/v1/employee/attendance/check-in'
*/
export const checkIn = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkIn.url(options),
    method: 'post',
})

checkIn.definition = {
    methods: ["post"],
    url: '/api/v1/employee/attendance/check-in',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\AttendanceController::checkIn
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/AttendanceController.php:29
* @route '/api/v1/employee/attendance/check-in'
*/
checkIn.url = (options?: RouteQueryOptions) => {
    return checkIn.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\AttendanceController::checkIn
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/AttendanceController.php:29
* @route '/api/v1/employee/attendance/check-in'
*/
checkIn.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkIn.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\AttendanceController::checkOut
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/AttendanceController.php:39
* @route '/api/v1/employee/attendance/check-out'
*/
export const checkOut = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkOut.url(options),
    method: 'post',
})

checkOut.definition = {
    methods: ["post"],
    url: '/api/v1/employee/attendance/check-out',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\AttendanceController::checkOut
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/AttendanceController.php:39
* @route '/api/v1/employee/attendance/check-out'
*/
checkOut.url = (options?: RouteQueryOptions) => {
    return checkOut.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\AttendanceController::checkOut
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/AttendanceController.php:39
* @route '/api/v1/employee/attendance/check-out'
*/
checkOut.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkOut.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\AttendanceController::history
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/AttendanceController.php:49
* @route '/api/v1/employee/attendance/history'
*/
export const history = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(options),
    method: 'get',
})

history.definition = {
    methods: ["get","head"],
    url: '/api/v1/employee/attendance/history',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\AttendanceController::history
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/AttendanceController.php:49
* @route '/api/v1/employee/attendance/history'
*/
history.url = (options?: RouteQueryOptions) => {
    return history.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\AttendanceController::history
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/AttendanceController.php:49
* @route '/api/v1/employee/attendance/history'
*/
history.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Api\V1\Employee\AttendanceController::history
* @see Modules/Employee/app/Http/Controllers/Api/V1/Employee/AttendanceController.php:49
* @route '/api/v1/employee/attendance/history'
*/
history.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: history.url(options),
    method: 'head',
})

const AttendanceController = { today, checkIn, checkOut, history }

export default AttendanceController