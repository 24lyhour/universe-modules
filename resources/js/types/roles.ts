export interface Permission {
    id: number;
    name: string;
    action?: string;
    guard_name?: string;
    created_at?: string;
    updated_at?: string;
}

export interface Role {
    id: number;
    name: string;
    guard_name: string;
    permissions?: Permission[];
    permissions_count?: number;
    users_count?: number;
    created_at?: string;
    updated_at?: string;
}

export interface GroupedPermissions {
    [module: string]: Permission[];
}

// New hierarchical structure for module -> resource -> permissions
export interface ModulePermissions {
    resources: {
        [resource: string]: Permission[];
    };
    totalPermissions: number;
}

export interface HierarchicalGroupedPermissions {
    [module: string]: ModulePermissions;
}

export interface RoleFormData {
    name: string;
    permissions: number[];
}

export interface RolesIndexProps {
    roles: {
        data: Role[];
        meta: {
            current_page: number;
            last_page: number;
            per_page: number;
            total: number;
        };
    };
}

export interface RoleCreateProps {
    groupedPermissions: GroupedPermissions;
}

export interface RoleEditProps {
    role: Role;
    groupedPermissions: GroupedPermissions;
}
