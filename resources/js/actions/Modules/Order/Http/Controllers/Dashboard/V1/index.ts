import OrderController from './OrderController'
import CartController from './CartController'
import ProductReviewController from './ProductReviewController'
import OutletReviewController from './OutletReviewController'
import ShippingZoneController from './ShippingZoneController'

const V1 = {
    OrderController: Object.assign(OrderController, OrderController),
    CartController: Object.assign(CartController, CartController),
    ProductReviewController: Object.assign(ProductReviewController, ProductReviewController),
    OutletReviewController: Object.assign(OutletReviewController, OutletReviewController),
    ShippingZoneController: Object.assign(ShippingZoneController, ShippingZoneController),
}

export default V1