import BlogController from './BlogController'
import BannerController from './BannerController'
import SpecialOfferController from './SpecialOfferController'
import SliderShowController from './SliderShowController'

const V1 = {
    BlogController: Object.assign(BlogController, BlogController),
    BannerController: Object.assign(BannerController, BannerController),
    SpecialOfferController: Object.assign(SpecialOfferController, SpecialOfferController),
    SliderShowController: Object.assign(SliderShowController, SliderShowController),
}

export default V1