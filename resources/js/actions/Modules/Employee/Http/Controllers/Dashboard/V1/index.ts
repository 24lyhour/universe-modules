import EmployeeController from './EmployeeController'
import EmployeeTypeController from './EmployeeTypeController'
import AttendanceController from './AttendanceController'

const V1 = {
    EmployeeController: Object.assign(EmployeeController, EmployeeController),
    EmployeeTypeController: Object.assign(EmployeeTypeController, EmployeeTypeController),
    AttendanceController: Object.assign(AttendanceController, AttendanceController),
}

export default V1