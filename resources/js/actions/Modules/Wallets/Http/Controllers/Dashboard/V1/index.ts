import WalletSettingsController from './WalletSettingsController'
import WalletController from './WalletController'
import TransactionController from './TransactionController'
import TopUpController from './TopUpController'

const V1 = {
    WalletSettingsController: Object.assign(WalletSettingsController, WalletSettingsController),
    WalletController: Object.assign(WalletController, WalletController),
    TransactionController: Object.assign(TransactionController, TransactionController),
    TopUpController: Object.assign(TopUpController, TopUpController),
}

export default V1