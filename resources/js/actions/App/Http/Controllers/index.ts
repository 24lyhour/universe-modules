import Api from './Api'
import Auth from './Auth'
import DashboardController from './DashboardController'
import Settings from './Settings'

const Controllers = {
    Api: Object.assign(Api, Api),
    Auth: Object.assign(Auth, Auth),
    DashboardController: Object.assign(DashboardController, DashboardController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers