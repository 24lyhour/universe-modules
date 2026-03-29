import orders from './orders'
import carts from './carts'
import productReviews from './product-reviews'
import outletReviews from './outlet-reviews'
import shippingZones from './shipping-zones'

const order = {
    orders: Object.assign(orders, orders),
    carts: Object.assign(carts, carts),
    productReviews: Object.assign(productReviews, productReviews),
    outletReviews: Object.assign(outletReviews, outletReviews),
    shippingZones: Object.assign(shippingZones, shippingZones),
}

export default order