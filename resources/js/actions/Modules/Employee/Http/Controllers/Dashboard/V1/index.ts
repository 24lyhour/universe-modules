import EmployeeTrashController from './EmployeeTrashController'
import EmployeeTypeTrashController from './EmployeeTypeTrashController'
import AttendanceTrashController from './AttendanceTrashController'
import EmployeeController from './EmployeeController'
import EmployeeImportExportController from './EmployeeImportExportController'
import EmployeePasswordController from './EmployeePasswordController'
import EmployeeTypeController from './EmployeeTypeController'
import LocationController from './LocationController'
import SelfServiceAttendanceController from './SelfServiceAttendanceController'
import AttendanceController from './AttendanceController'
import PermissionRequestController from './PermissionRequestController'

const V1 = {
    EmployeeTrashController: Object.assign(EmployeeTrashController, EmployeeTrashController),
    EmployeeTypeTrashController: Object.assign(EmployeeTypeTrashController, EmployeeTypeTrashController),
    AttendanceTrashController: Object.assign(AttendanceTrashController, AttendanceTrashController),
    EmployeeController: Object.assign(EmployeeController, EmployeeController),
    EmployeeImportExportController: Object.assign(EmployeeImportExportController, EmployeeImportExportController),
    EmployeePasswordController: Object.assign(EmployeePasswordController, EmployeePasswordController),
    EmployeeTypeController: Object.assign(EmployeeTypeController, EmployeeTypeController),
    LocationController: Object.assign(LocationController, LocationController),
    SelfServiceAttendanceController: Object.assign(SelfServiceAttendanceController, SelfServiceAttendanceController),
    AttendanceController: Object.assign(AttendanceController, AttendanceController),
    PermissionRequestController: Object.assign(PermissionRequestController, PermissionRequestController),
}

export default V1