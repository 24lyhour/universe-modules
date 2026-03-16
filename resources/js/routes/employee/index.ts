import employees from './employees'
import employeeTypes from './employee-types'
import attendances from './attendances'
import locations from './locations'
import experiences from './experiences'
import permissionRequests from './permission-requests'

const employee = {
    employees: Object.assign(employees, employees),
    employeeTypes: Object.assign(employeeTypes, employeeTypes),
    attendances: Object.assign(attendances, attendances),
    locations: Object.assign(locations, locations),
    experiences: Object.assign(experiences, experiences),
    permissionRequests: Object.assign(permissionRequests, permissionRequests),
}

export default employee