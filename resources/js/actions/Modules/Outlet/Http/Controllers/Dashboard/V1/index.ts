import OutletDashboardController from './OutletDashboardController'
import OutletStatusController from './OutletStatusController'
import OutletScheduleController from './OutletScheduleController'
import OutletPayWayController from './OutletPayWayController'
import TypeOutletDashboardController from './TypeOutletDashboardController'

const V1 = {
    OutletDashboardController: Object.assign(OutletDashboardController, OutletDashboardController),
    OutletStatusController: Object.assign(OutletStatusController, OutletStatusController),
    OutletScheduleController: Object.assign(OutletScheduleController, OutletScheduleController),
    OutletPayWayController: Object.assign(OutletPayWayController, OutletPayWayController),
    TypeOutletDashboardController: Object.assign(TypeOutletDashboardController, TypeOutletDashboardController),
}

export default V1