import employees from './employees'
import employeeTypes from './employee-types'
import attendances from './attendances'
import locations from './locations'

const employee = {
    employees: Object.assign(employees, employees),
    employeeTypes: Object.assign(employeeTypes, employeeTypes),
    attendances: Object.assign(attendances, attendances),
    locations: Object.assign(locations, locations),
}

export default employee