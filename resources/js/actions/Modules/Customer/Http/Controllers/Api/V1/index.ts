import Customer from './Customer'
import Shipping from './Shipping'

const V1 = {
    Customer: Object.assign(Customer, Customer),
    Shipping: Object.assign(Shipping, Shipping),
}

export default V1