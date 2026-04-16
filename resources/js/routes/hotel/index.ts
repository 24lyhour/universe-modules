import categories from './categories'
import amenities from './amenities'
import provinces from './provinces'
import reviews from './reviews'
import hotels from './hotels'
import rooms from './rooms'

const hotel = {
    categories: Object.assign(categories, categories),
    amenities: Object.assign(amenities, amenities),
    provinces: Object.assign(provinces, provinces),
    reviews: Object.assign(reviews, reviews),
    hotels: Object.assign(hotels, hotels),
    rooms: Object.assign(rooms, rooms),
}

export default hotel