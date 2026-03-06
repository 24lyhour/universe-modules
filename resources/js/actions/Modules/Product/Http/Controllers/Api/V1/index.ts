import ProductPublicController from './ProductPublicController'
import ProductApiController from './ProductApiController'
import ProductStatusApiController from './ProductStatusApiController'

const V1 = {
    ProductPublicController: Object.assign(ProductPublicController, ProductPublicController),
    ProductApiController: Object.assign(ProductApiController, ProductApiController),
    ProductStatusApiController: Object.assign(ProductStatusApiController, ProductStatusApiController),
}

export default V1