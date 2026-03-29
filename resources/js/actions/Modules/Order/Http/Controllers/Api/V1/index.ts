import ProductReviewController from './ProductReviewController'
import OutletReviewController from './OutletReviewController'
import CartController from './CartController'

const V1 = {
    ProductReviewController: Object.assign(ProductReviewController, ProductReviewController),
    OutletReviewController: Object.assign(OutletReviewController, OutletReviewController),
    CartController: Object.assign(CartController, CartController),
}

export default V1