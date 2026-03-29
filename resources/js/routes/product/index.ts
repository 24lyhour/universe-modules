import products from './products'
import brands from './brands'
import productTypes from './product-types'

const product = {
    products: Object.assign(products, products),
    brands: Object.assign(brands, brands),
    productTypes: Object.assign(productTypes, productTypes),
}

export default product