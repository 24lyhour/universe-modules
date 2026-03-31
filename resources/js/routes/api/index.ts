import ai from './ai'
import blog from './blog'
import booking from './booking'
import company from './company'
import customer from './customer'
import shipping from './shipping'
import employee from './employee'
import hotel from './hotel'
import media from './media'
import menu from './menu'
import category from './category'
import movice from './movice'
import order from './order'
import v1 from './v1'
import outlet from './outlet'
import payment from './payment'
import porfolio from './porfolio'
import product from './product'
import report from './report'
import school from './school'

const api = {
    ai: Object.assign(ai, ai),
    blog: Object.assign(blog, blog),
    booking: Object.assign(booking, booking),
    company: Object.assign(company, company),
    customer: Object.assign(customer, customer),
    shipping: Object.assign(shipping, shipping),
    employee: Object.assign(employee, employee),
    hotel: Object.assign(hotel, hotel),
    media: Object.assign(media, media),
    menu: Object.assign(menu, menu),
    category: Object.assign(category, category),
    movice: Object.assign(movice, movice),
    order: Object.assign(order, order),
    v1: Object.assign(v1, v1),
    outlet: Object.assign(outlet, outlet),
    payment: Object.assign(payment, payment),
    porfolio: Object.assign(porfolio, porfolio),
    product: Object.assign(product, product),
    report: Object.assign(report, report),
    school: Object.assign(school, school),
}

export default api