import HotelBookingController from './HotelBookingController'
import HotelApiController from './HotelApiController'
import HotelReviewController from './HotelReviewController'
import ProvinceController from './ProvinceController'
import AmenityController from './AmenityController'

const Customer = {
    HotelBookingController: Object.assign(HotelBookingController, HotelBookingController),
    HotelApiController: Object.assign(HotelApiController, HotelApiController),
    HotelReviewController: Object.assign(HotelReviewController, HotelReviewController),
    ProvinceController: Object.assign(ProvinceController, ProvinceController),
    AmenityController: Object.assign(AmenityController, AmenityController),
}

export default Customer