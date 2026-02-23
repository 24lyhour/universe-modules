import EmployeeController from './EmployeeController'
import Dashboard from './Dashboard'

const Controllers = {
    EmployeeController: Object.assign(EmployeeController, EmployeeController),
    Dashboard: Object.assign(Dashboard, Dashboard),
}

export default Controllers