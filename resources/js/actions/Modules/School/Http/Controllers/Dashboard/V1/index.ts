import DepartmentController from './DepartmentController'
import ClassroomController from './ClassroomController'
import SchoolController from './SchoolController'
import ProgramController from './ProgramController'
import CourseController from './CourseController'
import EquipmentController from './EquipmentController'

const V1 = {
    DepartmentController: Object.assign(DepartmentController, DepartmentController),
    ClassroomController: Object.assign(ClassroomController, ClassroomController),
    SchoolController: Object.assign(SchoolController, SchoolController),
    ProgramController: Object.assign(ProgramController, ProgramController),
    CourseController: Object.assign(CourseController, CourseController),
    EquipmentController: Object.assign(EquipmentController, EquipmentController),
}

export default V1