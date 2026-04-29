import Tenant from './Tenant'
import Customer from './Customer'

const V1 = {
    Tenant: Object.assign(Tenant, Tenant),
    Customer: Object.assign(Customer, Customer),
}

export default V1