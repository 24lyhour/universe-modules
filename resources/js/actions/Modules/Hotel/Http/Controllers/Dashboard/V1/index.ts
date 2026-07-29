import HotelController from './HotelController'
import HotelCategoryController from './HotelCategoryController'
import AmenityController from './AmenityController'
import ProvinceController from './ProvinceController'
import HotelReviewController from './HotelReviewController'
import RoomReviewController from './RoomReviewController'
import RoomPolicyController from './RoomPolicyController'
import RoomController from './RoomController'

const V1 = {
    HotelController: Object.assign(HotelController, HotelController),
    HotelCategoryController: Object.assign(HotelCategoryController, HotelCategoryController),
    AmenityController: Object.assign(AmenityController, AmenityController),
    ProvinceController: Object.assign(ProvinceController, ProvinceController),
    HotelReviewController: Object.assign(HotelReviewController, HotelReviewController),
    RoomReviewController: Object.assign(RoomReviewController, RoomReviewController),
    RoomPolicyController: Object.assign(RoomPolicyController, RoomPolicyController),
    RoomController: Object.assign(RoomController, RoomController),
}

export default V1