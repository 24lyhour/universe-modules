import { InertiaLinkProps } from '@inertiajs/vue3';
import type { LucideIcon } from 'lucide-vue-next';

export interface Auth {
    user: User;
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

export type AppPageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    menus: Menus;
};

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

export type BreadcrumbItemType = BreadcrumbItem;
