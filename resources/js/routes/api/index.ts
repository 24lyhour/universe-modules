import blog from './blog'
import booking from './booking'
import company from './company'
import customer from './customer'
import employee from './employee'
import hotel from './hotel'
import media from './media'
import movice from './movice'
import order from './order'
import outlet from './outlet'
import v1 from './v1'
import payment from './payment'
import porfolio from './porfolio'
import product from './product'
import report from './report'
import school from './school'

const api = {
    blog: Object.assign(blog, blog),
    booking: Object.assign(booking, booking),
    company: Object.assign(company, company),
    customer: Object.assign(customer, customer),
    employee: Object.assign(employee, employee),
    hotel: Object.assign(hotel, hotel),
    media: Object.assign(media, media),
    movice: Object.assign(movice, movice),
    order: Object.assign(order, order),
    outlet: Object.assign(outlet, outlet),
    v1: Object.assign(v1, v1),
    payment: Object.assign(payment, payment),
    porfolio: Object.assign(porfolio, porfolio),
    product: Object.assign(product, product),
    report: Object.assign(report, report),
    school: Object.assign(school, school),
}

export default api