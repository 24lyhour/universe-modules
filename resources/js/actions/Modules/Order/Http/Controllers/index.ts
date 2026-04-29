import Api from './Api'
import Dashboard from './Dashboard'

const Controllers = {
    Api: Object.assign(Api, Api),
    Dashboard: Object.assign(Dashboard, Dashboard),
}

export default Controllers