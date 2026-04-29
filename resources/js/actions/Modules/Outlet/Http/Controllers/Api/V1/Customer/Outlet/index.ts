import OutletApiController from './OutletApiController'
import OutletPublicController from './OutletPublicController'

const Outlet = {
    OutletApiController: Object.assign(OutletApiController, OutletApiController),
    OutletPublicController: Object.assign(OutletPublicController, OutletPublicController),
}

export default Outlet