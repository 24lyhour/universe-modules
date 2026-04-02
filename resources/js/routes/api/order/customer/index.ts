import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
import ordersB47e5f from './orders'
import cartB8cf73 from './cart'
import productReviews356f95 from './product-reviews'
import outletReviewsE9f95e from './outlet-reviews'
/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::orders
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:21
* @route '/api/v1/customer/orders'
*/
export const orders = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: orders.url(options),
    method: 'get',
})

orders.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::orders
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:21
* @route '/api/v1/customer/orders'
*/
orders.url = (options?: RouteQueryOptions) => {
    return orders.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::orders
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:21
* @route '/api/v1/customer/orders'
*/
orders.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: orders.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::orders
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:21
* @route '/api/v1/customer/orders'
*/
orders.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: orders.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::orders
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:21
* @route '/api/v1/customer/orders'
*/
const ordersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: orders.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::orders
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:21
* @route '/api/v1/customer/orders'
*/
ordersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: orders.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OrderController::orders
* @see Modules/Order/app/Http/Controllers/Api/V1/OrderController.php:21
* @route '/api/v1/customer/orders'
*/
ordersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: orders.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

orders.form = ordersForm

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::cart
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:24
* @route '/api/v1/customer/cart'
*/
export const cart = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cart.url(options),
    method: 'get',
})

cart.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/cart',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::cart
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:24
* @route '/api/v1/customer/cart'
*/
cart.url = (options?: RouteQueryOptions) => {
    return cart.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::cart
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:24
* @route '/api/v1/customer/cart'
*/
cart.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cart.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::cart
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:24
* @route '/api/v1/customer/cart'
*/
cart.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cart.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::cart
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:24
* @route '/api/v1/customer/cart'
*/
const cartForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cart.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::cart
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:24
* @route '/api/v1/customer/cart'
*/
cartForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cart.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\CartController::cart
* @see Modules/Order/app/Http/Controllers/Api/V1/CartController.php:24
* @route '/api/v1/customer/cart'
*/
cartForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: cart.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

cart.form = cartForm

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:18
* @route '/api/v1/customer/reviews'
*/
export const productReviews = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: productReviews.url(options),
    method: 'get',
})

productReviews.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/reviews',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:18
* @route '/api/v1/customer/reviews'
*/
productReviews.url = (options?: RouteQueryOptions) => {
    return productReviews.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:18
* @route '/api/v1/customer/reviews'
*/
productReviews.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: productReviews.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:18
* @route '/api/v1/customer/reviews'
*/
productReviews.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: productReviews.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:18
* @route '/api/v1/customer/reviews'
*/
const productReviewsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: productReviews.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:18
* @route '/api/v1/customer/reviews'
*/
productReviewsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: productReviews.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\ProductReviewController::productReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/ProductReviewController.php:18
* @route '/api/v1/customer/reviews'
*/
productReviewsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: productReviews.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

productReviews.form = productReviewsForm

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:18
* @route '/api/v1/customer/outlet-reviews'
*/
export const outletReviews = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: outletReviews.url(options),
    method: 'get',
})

outletReviews.definition = {
    methods: ["get","head"],
    url: '/api/v1/customer/outlet-reviews',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:18
* @route '/api/v1/customer/outlet-reviews'
*/
outletReviews.url = (options?: RouteQueryOptions) => {
    return outletReviews.definition.url + queryParams(options)
}

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:18
* @route '/api/v1/customer/outlet-reviews'
*/
outletReviews.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: outletReviews.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:18
* @route '/api/v1/customer/outlet-reviews'
*/
outletReviews.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: outletReviews.url(options),
    method: 'head',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:18
* @route '/api/v1/customer/outlet-reviews'
*/
const outletReviewsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: outletReviews.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:18
* @route '/api/v1/customer/outlet-reviews'
*/
outletReviewsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: outletReviews.url(options),
    method: 'get',
})

/**
* @see \Modules\Order\Http\Controllers\Api\V1\OutletReviewController::outletReviews
* @see Modules/Order/app/Http/Controllers/Api/V1/OutletReviewController.php:18
* @route '/api/v1/customer/outlet-reviews'
*/
outletReviewsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: outletReviews.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

outletReviews.form = outletReviewsForm

const customer = {
    orders: Object.assign(orders, ordersB47e5f),
    cart: Object.assign(cart, cartB8cf73),
    productReviews: Object.assign(productReviews, productReviews356f95),
    outletReviews: Object.assign(outletReviews, outletReviewsE9f95e),
}

export default customer