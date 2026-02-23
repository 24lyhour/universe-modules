import employees from './employees'
import employeeTypes from './employee-types'
import attendances from './attendances'

const employee = {
    employees: Object.assign(employees, employees),
    employeeTypes: Object.assign(employeeTypes, employeeTypes),
    attendances: Object.assign(attendances, attendances),
}

export default employee