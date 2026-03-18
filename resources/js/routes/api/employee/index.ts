import auth from './auth'
import attendance from './attendance'
import permissionRequests from './permission-requests'

const employee = {
    auth: Object.assign(auth, auth),
    attendance: Object.assign(attendance, attendance),
    permissionRequests: Object.assign(permissionRequests, permissionRequests),
}

export default employee