import categories from './categories'
import amenities from './amenities'
import hotels from './hotels'

const hotel = {
    categories: Object.assign(categories, categories),
    amenities: Object.assign(amenities, amenities),
    hotels: Object.assign(hotels, hotels),
}

export default hotel