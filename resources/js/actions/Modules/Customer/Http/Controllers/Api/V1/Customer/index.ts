import CustomerAuthController from './CustomerAuthController'
import CustomerRegisterController from './CustomerRegisterController'
import DeviceTokenController from './DeviceTokenController'
import CustomerApiController from './CustomerApiController'
import CustomerStatusApiController from './CustomerStatusApiController'

const Customer = {
    CustomerAuthController: Object.assign(CustomerAuthController, CustomerAuthController),
    CustomerRegisterController: Object.assign(CustomerRegisterController, CustomerRegisterController),
    DeviceTokenController: Object.assign(DeviceTokenController, DeviceTokenController),
    CustomerApiController: Object.assign(CustomerApiController, CustomerApiController),
    CustomerStatusApiController: Object.assign(CustomerStatusApiController, CustomerStatusApiController),
}

export default Customer