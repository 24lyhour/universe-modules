import menus from './menus'
import categories from './categories'
import menuTypes from './menu-types'

const menu = {
    menus: Object.assign(menus, menus),
    categories: Object.assign(categories, categories),
    menuTypes: Object.assign(menuTypes, menuTypes),
}

export default menu