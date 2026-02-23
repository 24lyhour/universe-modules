import PorfolioController from './PorfolioController'
import KioskController from './KioskController'
import HeaderController from './HeaderController'
import FooterController from './FooterController'
import PageController from './PageController'
import ServiceController from './ServiceController'
import TestimonialController from './TestimonialController'
import SiteSettingController from './SiteSettingController'
import ContactMessageController from './ContactMessageController'

const Controllers = {
    PorfolioController: Object.assign(PorfolioController, PorfolioController),
    KioskController: Object.assign(KioskController, KioskController),
    HeaderController: Object.assign(HeaderController, HeaderController),
    FooterController: Object.assign(FooterController, FooterController),
    PageController: Object.assign(PageController, PageController),
    ServiceController: Object.assign(ServiceController, ServiceController),
    TestimonialController: Object.assign(TestimonialController, TestimonialController),
    SiteSettingController: Object.assign(SiteSettingController, SiteSettingController),
    ContactMessageController: Object.assign(ContactMessageController, ContactMessageController),
}

export default Controllers