import Auth from './Auth'
import DashboardController from './DashboardController'
import Settings from './Settings'
import QrShareController from './QrShareController'

const Controllers = {
    Auth: Object.assign(Auth, Auth),
    DashboardController: Object.assign(DashboardController, DashboardController),
    Settings: Object.assign(Settings, Settings),
    QrShareController: Object.assign(QrShareController, QrShareController),
}

export default Controllers