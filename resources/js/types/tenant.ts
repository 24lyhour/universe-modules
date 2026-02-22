import type { Role } from './roles';

// Tenant option for dropdowns
export interface TenantOption {
    id: number;
    name: string;
    code: string;
    type: string;
    label: string;
}

// Available tenants grouped by type
export interface AvailableTenants {
    schools: TenantOption[];
    outlets: TenantOption[];
}

// User's tenant access record
export interface UserTenantAccess {
    tenant_type: string;
    tenant_id: number;
    is_primary: boolean;
}

// User with tenant information
export interface UserWithTenant {
    id: number;
    name: string;
    email: string;
    phone?: string;
    avatar?: string;
    email_verified_at?: string;
    created_at?: string;
    updated_at?: string;
    roles: Role[];
    tenant_type?: string | null;
    tenant_id?: number | null;
    tenant_name?: string | null;
    tenant_access?: UserTenantAccess[];
}

// Form data for tenant assignment
export interface TenantFormData {
    tenant_type: string;
    tenant_id: number;
    is_primary: boolean;
}
