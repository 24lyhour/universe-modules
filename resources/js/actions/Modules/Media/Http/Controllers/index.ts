import MediaController from './MediaController'
import MediaDashboardController from './MediaDashboardController'

const Controllers = {
    MediaController: Object.assign(MediaController, MediaController),
    MediaDashboardController: Object.assign(MediaDashboardController, MediaDashboardController),
}

export default Controllers