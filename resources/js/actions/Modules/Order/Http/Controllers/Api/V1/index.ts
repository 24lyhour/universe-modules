import ProductReviewController from './ProductReviewController'
import OutletReviewController from './OutletReviewController'
import OrderController from './OrderController'
import CartController from './CartController'

const V1 = {
    ProductReviewController: Object.assign(ProductReviewController, ProductReviewController),
    OutletReviewController: Object.assign(OutletReviewController, OutletReviewController),
    OrderController: Object.assign(OrderController, OrderController),
    CartController: Object.assign(CartController, CartController),
}

export default V1