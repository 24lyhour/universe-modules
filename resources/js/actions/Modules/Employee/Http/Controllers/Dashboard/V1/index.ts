import EmployeeTrashController from './EmployeeTrashController'
import EmployeeTypeTrashController from './EmployeeTypeTrashController'
import AttendanceTrashController from './AttendanceTrashController'
import EmployeeController from './EmployeeController'
import EmployeeImportExportController from './EmployeeImportExportController'
import EmployeeTypeController from './EmployeeTypeController'
import AttendanceController from './AttendanceController'

const V1 = {
    EmployeeTrashController: Object.assign(EmployeeTrashController, EmployeeTrashController),
    EmployeeTypeTrashController: Object.assign(EmployeeTypeTrashController, EmployeeTypeTrashController),
    AttendanceTrashController: Object.assign(AttendanceTrashController, AttendanceTrashController),
    EmployeeController: Object.assign(EmployeeController, EmployeeController),
    EmployeeImportExportController: Object.assign(EmployeeImportExportController, EmployeeImportExportController),
    EmployeeTypeController: Object.assign(EmployeeTypeController, EmployeeTypeController),
    AttendanceController: Object.assign(AttendanceController, AttendanceController),
}

export default V1