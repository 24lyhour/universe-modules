import products from './products'
import outlets from './outlets'
import productReviews from './product-reviews'
import outletReviews from './outlet-reviews'
import customer from './customer'

const order = {
    products: Object.assign(products, products),
    outlets: Object.assign(outlets, outlets),
    productReviews: Object.assign(productReviews, productReviews),
    outletReviews: Object.assign(outletReviews, outletReviews),
    customer: Object.assign(customer, customer),
}

export default order