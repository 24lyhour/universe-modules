import Api from './Api'
import PaymentController from './PaymentController'
import Dashboard from './Dashboard'

const Controllers = {
    Api: Object.assign(Api, Api),
    PaymentController: Object.assign(PaymentController, PaymentController),
    Dashboard: Object.assign(Dashboard, Dashboard),
}

export default Controllers