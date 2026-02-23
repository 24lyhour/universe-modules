import MenuController from './MenuController'
import MenuStatusController from './MenuStatusController'
import MenuCategoryController from './MenuCategoryController'
import CategoryController from './CategoryController'
import CategoryStatusController from './CategoryStatusController'
import CategoryProductController from './CategoryProductController'
import MenuTypeController from './MenuTypeController'
import MenuTypeStatusController from './MenuTypeStatusController'

const V1 = {
    MenuController: Object.assign(MenuController, MenuController),
    MenuStatusController: Object.assign(MenuStatusController, MenuStatusController),
    MenuCategoryController: Object.assign(MenuCategoryController, MenuCategoryController),
    CategoryController: Object.assign(CategoryController, CategoryController),
    CategoryStatusController: Object.assign(CategoryStatusController, CategoryStatusController),
    CategoryProductController: Object.assign(CategoryProductController, CategoryProductController),
    MenuTypeController: Object.assign(MenuTypeController, MenuTypeController),
    MenuTypeStatusController: Object.assign(MenuTypeStatusController, MenuTypeStatusController),
}

export default V1