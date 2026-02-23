import Blog from './Blog'
import Booking from './Booking'
import Company from './Company'
import Customer from './Customer'
import Employee from './Employee'
import School from './School'
import Hotel from './Hotel'
import Media from './Media'
import Menu from './Menu'
import Movice from './Movice'
import Order from './Order'
import Outlet from './Outlet'
import Payment from './Payment'
import Porfolio from './Porfolio'
import Product from './Product'
import Report from './Report'
import Wallets from './Wallets'

const Modules = {
    Blog: Object.assign(Blog, Blog),
    Booking: Object.assign(Booking, Booking),
    Company: Object.assign(Company, Company),
    Customer: Object.assign(Customer, Customer),
    Employee: Object.assign(Employee, Employee),
    School: Object.assign(School, School),
    Hotel: Object.assign(Hotel, Hotel),
    Media: Object.assign(Media, Media),
    Menu: Object.assign(Menu, Menu),
    Movice: Object.assign(Movice, Movice),
    Order: Object.assign(Order, Order),
    Outlet: Object.assign(Outlet, Outlet),
    Payment: Object.assign(Payment, Payment),
    Porfolio: Object.assign(Porfolio, Porfolio),
    Product: Object.assign(Product, Product),
    Report: Object.assign(Report, Report),
    Wallets: Object.assign(Wallets, Wallets),
}

export default Modules