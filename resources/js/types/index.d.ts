import { InertiaLinkProps } from '@inertiajs/vue3';
import type { LucideIcon } from 'lucide-vue-next';

export interface Auth {
    user: User;
    roles: string[];
    permissions: string[];
}

export interface Role {
    id: number;
    name: string;
    guard_name: string;
    permissions?: Permission[];
    users_count?: number;
    created_at?: string;
}

export interface Permission {
    id: number;
    name: string;
    guard_name: string;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon;
    isActive?: boolean;
}

export interface NavSubItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon;
}

export interface NavModuleItem {
    title: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items: NavSubItem[];
}

export interface MenuSubItem {
    title: string;
    url: string;
    order: number;
    permissions: string | null;
    route: string | null;
    icon: string | null;
}

export interface MenuItem {
    id: string;
    title: string;
    url: string;
    icon: string;
    order: number;
    permissions: string | null;
    route: string | null;
    items: MenuSubItem[];
}

export interface Menus {
    primary: MenuItem[];
    footer: MenuItem[];
}

export interface Tenant {
    has_tenant: boolean;
    tenant_type: string | null;
    tenant_id: number | null;
    tenant_name: string | null;
}

export type AppPageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    tenant: Tenant;
    sidebarOpen: boolean;
    menus: Menus;
};

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    tenant_type?: string | null;
    tenant_id?: number | null;
    created_at: string;
    updated_at: string;
}

export type BreadcrumbItemType = BreadcrumbItem;
