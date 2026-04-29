import EmployeeAuthController from './EmployeeAuthController'
import AttendanceController from './AttendanceController'
import PermissionRequestController from './PermissionRequestController'

const Employee = {
    EmployeeAuthController: Object.assign(EmployeeAuthController, EmployeeAuthController),
    AttendanceController: Object.assign(AttendanceController, AttendanceController),
    PermissionRequestController: Object.assign(PermissionRequestController, PermissionRequestController),
}

export default Employee