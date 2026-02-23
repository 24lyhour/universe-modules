import ProductApiController from './ProductApiController'
import ProductStatusApiController from './ProductStatusApiController'

const V1 = {
    ProductApiController: Object.assign(ProductApiController, ProductApiController),
    ProductStatusApiController: Object.assign(ProductStatusApiController, ProductStatusApiController),
}

export default V1