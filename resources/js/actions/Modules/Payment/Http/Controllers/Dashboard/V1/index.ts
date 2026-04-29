import TransactionController from './TransactionController'
import PaymentSettingsController from './PaymentSettingsController'

const V1 = {
    TransactionController: Object.assign(TransactionController, TransactionController),
    PaymentSettingsController: Object.assign(PaymentSettingsController, PaymentSettingsController),
}

export default V1