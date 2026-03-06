import OutletApiController from './OutletApiController'
import OutletPublicController from './OutletPublicController'

const V1 = {
    OutletApiController: Object.assign(OutletApiController, OutletApiController),
    OutletPublicController: Object.assign(OutletPublicController, OutletPublicController),
}

export default V1