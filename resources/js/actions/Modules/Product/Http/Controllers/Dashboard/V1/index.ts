import ProductSettingsController from './ProductSettingsController'
import ProductAttributeController from './ProductAttributeController'
import ProductAddOnController from './ProductAddOnController'
import ProductController from './ProductController'
import ProductVariantController from './ProductVariantController'
import ProductUpsellController from './ProductUpsellController'

const V1 = {
    ProductSettingsController: Object.assign(ProductSettingsController, ProductSettingsController),
    ProductAttributeController: Object.assign(ProductAttributeController, ProductAttributeController),
    ProductAddOnController: Object.assign(ProductAddOnController, ProductAddOnController),
    ProductController: Object.assign(ProductController, ProductController),
    ProductVariantController: Object.assign(ProductVariantController, ProductVariantController),
    ProductUpsellController: Object.assign(ProductUpsellController, ProductUpsellController),
}

export default V1