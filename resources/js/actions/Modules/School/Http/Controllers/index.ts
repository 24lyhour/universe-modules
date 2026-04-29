import Dashboard from './Dashboard'
import SchoolController from './SchoolController'

const Controllers = {
    Dashboard: Object.assign(Dashboard, Dashboard),
    SchoolController: Object.assign(SchoolController, SchoolController),
}

export default Controllers