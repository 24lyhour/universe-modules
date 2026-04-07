import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
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

const selfService = {
    checkIn: Object.assign(checkIn, checkIn),
    checkOut: Object.assign(checkOut, checkOut),
}

export default selfService