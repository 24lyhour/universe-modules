import Api from './Api'
import PaymentController from './PaymentController'

const Controllers = {
    Api: Object.assign(Api, Api),
    PaymentController: Object.assign(PaymentController, PaymentController),
}

export default Controllers