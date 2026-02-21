import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

/**
 * Composable for checking user permissions and roles
 */
export function usePermissions() {
    const page = usePage();

    const auth = computed(() => page.props.auth as {
        user: any;
        roles: string[];
        permissions: string[];
    });

    const roles = computed(() => auth.value?.roles || []);
    const permissions = computed(() => auth.value?.permissions || []);

    /**
     * Check if user has a specific permission
     */
    const can = (permission: string): boolean => {
        // Super admin has all permissions
        if (roles.value.includes('super-admin')) {
            return true;
        }
        return permissions.value.includes(permission);
    };

    /**
     * Check if user has any of the specified permissions
     */
    const canAny = (permissionList: string[]): boolean => {
        if (roles.value.includes('super-admin')) {
            return true;
        }
        return permissionList.some(permission => permissions.value.includes(permission));
    };

    /**
     * Check if user has all of the specified permissions
     */
    const canAll = (permissionList: string[]): boolean => {
        if (roles.value.includes('super-admin')) {
            return true;
        }
        return permissionList.every(permission => permissions.value.includes(permission));
    };

    /**
     * Check if user has a specific role
     */
    const hasRole = (role: string): boolean => {
        return roles.value.includes(role);
    };

    /**
     * Check if user has any of the specified roles
     */
    const hasAnyRole = (roleList: string[]): boolean => {
        return roleList.some(role => roles.value.includes(role));
    };

    /**
     * Check if user is a super admin
     */
    const isSuperAdmin = computed(() => roles.value.includes('super-admin'));

    /**
     * Check if user is an admin (super-admin or admin)
     */
    const isAdmin = computed(() => roles.value.includes('super-admin') || roles.value.includes('admin'));

    return {
        roles,
        permissions,
        can,
        canAny,
        canAll,
        hasRole,
        hasAnyRole,
        isSuperAdmin,
        isAdmin,
    };
}
