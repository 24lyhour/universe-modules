import HotelController from './HotelController'
import HotelCategoryController from './HotelCategoryController'
import AmenityController from './AmenityController'
import RoomController from './RoomController'

const V1 = {
    HotelController: Object.assign(HotelController, HotelController),
    HotelCategoryController: Object.assign(HotelCategoryController, HotelCategoryController),
    AmenityController: Object.assign(AmenityController, AmenityController),
    RoomController: Object.assign(RoomController, RoomController),
}

export default V1