import Auth from './Auth'
import DashboardController from './DashboardController'
import Settings from './Settings'

const Controllers = {
    Auth: Object.assign(Auth, Auth),
    DashboardController: Object.assign(DashboardController, DashboardController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers