import publicMethod from './public'
import admin from './admin'

const product = {
    public: Object.assign(publicMethod, publicMethod),
    admin: Object.assign(admin, admin),
}

export default product