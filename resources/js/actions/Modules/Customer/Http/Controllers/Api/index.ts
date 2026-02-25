import CustomerAuthController from './CustomerAuthController'
import CustomerRegisterController from './CustomerRegisterController'
import CustomerApiController from './CustomerApiController'
import CustomerStatusApiController from './CustomerStatusApiController'

const Api = {
    CustomerAuthController: Object.assign(CustomerAuthController, CustomerAuthController),
    CustomerRegisterController: Object.assign(CustomerRegisterController, CustomerRegisterController),
    CustomerApiController: Object.assign(CustomerApiController, CustomerApiController),
    CustomerStatusApiController: Object.assign(CustomerStatusApiController, CustomerStatusApiController),
}

export default Api