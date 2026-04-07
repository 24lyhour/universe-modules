import Api from './Api'
import BlogController from './BlogController'
import Dashboard from './Dashboard'

const Controllers = {
    Api: Object.assign(Api, Api),
    BlogController: Object.assign(BlogController, BlogController),
    Dashboard: Object.assign(Dashboard, Dashboard),
}

export default Controllers