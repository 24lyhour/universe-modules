import WalletController from './WalletController'
import TopUpController from './TopUpController'

const V1 = {
    WalletController: Object.assign(WalletController, WalletController),
    TopUpController: Object.assign(TopUpController, TopUpController),
}

export default V1