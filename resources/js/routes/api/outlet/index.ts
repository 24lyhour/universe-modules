import publicMethod from './public'
import admin from './admin'

const outlet = {
    public: Object.assign(publicMethod, publicMethod),
    admin: Object.assign(admin, admin),
}

export default outlet