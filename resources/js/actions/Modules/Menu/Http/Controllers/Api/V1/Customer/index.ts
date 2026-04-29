import Menu from './Menu'
import Category from './Category'

const Customer = {
    Menu: Object.assign(Menu, Menu),
    Category: Object.assign(Category, Category),
}

export default Customer