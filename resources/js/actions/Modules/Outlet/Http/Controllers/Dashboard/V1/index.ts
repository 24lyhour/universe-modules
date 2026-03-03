import OutletDashboardController from './OutletDashboardController'
import OutletStatusController from './OutletStatusController'
import OutletScheduleController from './OutletScheduleController'
import TypeOutletDashboardController from './TypeOutletDashboardController'

const V1 = {
    OutletDashboardController: Object.assign(OutletDashboardController, OutletDashboardController),
    OutletStatusController: Object.assign(OutletStatusController, OutletStatusController),
    OutletScheduleController: Object.assign(OutletScheduleController, OutletScheduleController),
    TypeOutletDashboardController: Object.assign(TypeOutletDashboardController, TypeOutletDashboardController),
}

export default V1