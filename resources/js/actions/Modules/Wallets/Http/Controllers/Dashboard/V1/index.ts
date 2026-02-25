import WalletSettingsController from './WalletSettingsController'
import WalletController from './WalletController'
import TransactionController from './TransactionController'

const V1 = {
    WalletSettingsController: Object.assign(WalletSettingsController, WalletSettingsController),
    WalletController: Object.assign(WalletController, WalletController),
    TransactionController: Object.assign(TransactionController, TransactionController),
}

export default V1