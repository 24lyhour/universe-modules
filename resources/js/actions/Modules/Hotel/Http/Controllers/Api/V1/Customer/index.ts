import HotelBookingController from './HotelBookingController'
import HotelApiController from './HotelApiController'
import RoomReviewController from './RoomReviewController'
import HotelReviewController from './HotelReviewController'
import ProvinceController from './ProvinceController'
import AmenityController from './AmenityController'

const Customer = {
    HotelBookingController: Object.assign(HotelBookingController, HotelBookingController),
    HotelApiController: Object.assign(HotelApiController, HotelApiController),
    RoomReviewController: Object.assign(RoomReviewController, RoomReviewController),
    HotelReviewController: Object.assign(HotelReviewController, HotelReviewController),
    ProvinceController: Object.assign(ProvinceController, ProvinceController),
    AmenityController: Object.assign(AmenityController, AmenityController),
}

export default Customer