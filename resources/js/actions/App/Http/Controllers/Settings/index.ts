import WidgetController from './WidgetController'
import LoginSettingsController from './LoginSettingsController'
import RoleController from './RoleController'
import UserRoleController from './UserRoleController'
import ProfileController from './ProfileController'
import PasswordController from './PasswordController'
import TwoFactorAuthenticationController from './TwoFactorAuthenticationController'

const Settings = {
    WidgetController: Object.assign(WidgetController, WidgetController),
    LoginSettingsController: Object.assign(LoginSettingsController, LoginSettingsController),
    RoleController: Object.assign(RoleController, RoleController),
    UserRoleController: Object.assign(UserRoleController, UserRoleController),
    ProfileController: Object.assign(ProfileController, ProfileController),
    PasswordController: Object.assign(PasswordController, PasswordController),
    TwoFactorAuthenticationController: Object.assign(TwoFactorAuthenticationController, TwoFactorAuthenticationController),
}

export default Settings