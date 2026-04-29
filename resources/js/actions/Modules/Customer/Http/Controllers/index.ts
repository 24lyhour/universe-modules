import Api from './Api'
import CustomerController from './CustomerController'
import CustomerStatusController from './CustomerStatusController'
import CustomerSecurityController from './CustomerSecurityController'
import CustomerWidgetController from './CustomerWidgetController'

const Controllers = {
    Api: Object.assign(Api, Api),
    CustomerController: Object.assign(CustomerController, CustomerController),
    CustomerStatusController: Object.assign(CustomerStatusController, CustomerStatusController),
    CustomerSecurityController: Object.assign(CustomerSecurityController, CustomerSecurityController),
    CustomerWidgetController: Object.assign(CustomerWidgetController, CustomerWidgetController),
}

export default Controllers