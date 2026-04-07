import BlogController from './BlogController'
import Dashboard from './Dashboard'

const Controllers = {
    BlogController: Object.assign(BlogController, BlogController),
    Dashboard: Object.assign(Dashboard, Dashboard),
}

export default Controllers