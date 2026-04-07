import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../../wayfinder'
/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\SelfServiceAttendanceController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/SelfServiceAttendanceController.php:69
* @route '/dashboard/attendances/self-service'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/attendances/self-service',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\SelfServiceAttendanceController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/SelfServiceAttendanceController.php:69
* @route '/dashboard/attendances/self-service'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\SelfServiceAttendanceController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/SelfServiceAttendanceController.php:69
* @route '/dashboard/attendances/self-service'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\SelfServiceAttendanceController::index
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/SelfServiceAttendanceController.php:69
* @route '/dashboard/attendances/self-service'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\SelfServiceAttendanceController::checkIn
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/SelfServiceAttendanceController.php:116
* @route '/dashboard/attendances/self-service/check-in'
*/
export const checkIn = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkIn.url(options),
    method: 'post',
})

checkIn.definition = {
    methods: ["post"],
    url: '/dashboard/attendances/self-service/check-in',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\SelfServiceAttendanceController::checkIn
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/SelfServiceAttendanceController.php:116
* @route '/dashboard/attendances/self-service/check-in'
*/
checkIn.url = (options?: RouteQueryOptions) => {
    return checkIn.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\SelfServiceAttendanceController::checkIn
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/SelfServiceAttendanceController.php:116
* @route '/dashboard/attendances/self-service/check-in'
*/
checkIn.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkIn.url(options),
    method: 'post',
})

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\SelfServiceAttendanceController::checkOut
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/SelfServiceAttendanceController.php:145
* @route '/dashboard/attendances/self-service/check-out'
*/
export const checkOut = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkOut.url(options),
    method: 'post',
})

checkOut.definition = {
    methods: ["post"],
    url: '/dashboard/attendances/self-service/check-out',
} satisfies RouteDefinition<["post"]>

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\SelfServiceAttendanceController::checkOut
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/SelfServiceAttendanceController.php:145
* @route '/dashboard/attendances/self-service/check-out'
*/
checkOut.url = (options?: RouteQueryOptions) => {
    return checkOut.definition.url + queryParams(options)
}

/**
* @see \Modules\Employee\Http\Controllers\Dashboard\V1\SelfServiceAttendanceController::checkOut
* @see Modules/Employee/app/Http/Controllers/Dashboard/V1/SelfServiceAttendanceController.php:145
* @route '/dashboard/attendances/self-service/check-out'
*/
checkOut.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: checkOut.url(options),
    method: 'post',
})

const SelfServiceAttendanceController = { index, checkIn, checkOut }

export default SelfServiceAttendanceController