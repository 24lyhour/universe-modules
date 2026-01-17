<script setup lang="ts">
import NavFooter from '@/components/NavFooter.vue';
import NavMain from '@/components/NavMain.vue';
import NavModules from '@/components/NavModules.vue';
import NavUser from '@/components/NavUser.vue';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import * as blog from '@/routes/blog';
import * as booking from '@/routes/booking';
import * as company from '@/routes/company';
import * as customer from '@/routes/customer';
import * as hotel from '@/routes/hotel';
import * as menu from '@/routes/menu';
import * as movice from '@/routes/movice';
import * as order from '@/routes/order';
import * as payment from '@/routes/payment';
import * as porfolio from '@/routes/porfolio';
import * as report from '@/routes/report';
import { type NavItem, type NavModuleItem } from '@/types';
import { Link } from '@inertiajs/vue3';
import {
    BookOpen,
    Briefcase,
    Building2,
    CalendarDays,
    CreditCard,
    FileText,
    Folder,
    Hotel,
    LayoutGrid,
    ListOrdered,
    MonitorPlay,
    UtensilsCrossed,
    Users,
} from 'lucide-vue-next';
import AppLogo from './AppLogo.vue';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
];

const moduleNavItems: NavModuleItem[] = [
    {
        title: 'Blog',
        icon: FileText,
        items: [
            { title: 'All Blogs', href: blog.index() },
            { title: 'Create Blog', href: blog.create() },
        ],
    },
    {
        title: 'Booking',
        icon: CalendarDays,
        items: [
            { title: 'All Bookings', href: booking.index() },
            { title: 'Create Booking', href: booking.create() },
        ],
    },
    {
        title: 'Company',
        icon: Building2,
        items: [
            { title: 'All Companies', href: company.index() },
            { title: 'Create Company', href: company.create() },
        ],
    },
    {
        title: 'Customer',
        icon: Users,
        items: [
            { title: 'All Customers', href: customer.index() },
            { title: 'Create Customer', href: customer.create() },
        ],
    },
    {
        title: 'Hotel',
        icon: Hotel,
        items: [
            { title: 'All Hotels', href: hotel.index() },
            { title: 'Create Hotel', href: hotel.create() },
        ],
    },
    {
        title: 'Menu',
        icon: UtensilsCrossed,
        items: [
            { title: 'All Menus', href: menu.index() },
            { title: 'Create Menu', href: menu.create() },
        ],
    },
    {
        title: 'Movie',
        icon: MonitorPlay,
        items: [
            { title: 'All Movies', href: movice.index() },
            { title: 'Create Movie', href: movice.create() },
        ],
    },
    {
        title: 'Order',
        icon: ListOrdered,
        items: [
            { title: 'All Orders', href: order.index() },
            { title: 'Create Order', href: order.create() },
        ],
    },
    {
        title: 'Payment',
        icon: CreditCard,
        items: [
            { title: 'All Payments', href: payment.index() },
            { title: 'Create Payment', href: payment.create() },
        ],
    },
    {
        title: 'Portfolio',
        icon: Briefcase,
        items: [
            { title: 'All Portfolios', href: porfolio.index() },
            { title: 'Create Portfolio', href: porfolio.create() },
        ],
    },
    {
        title: 'Report',
        icon: FileText,
        items: [
            { title: 'All Reports', href: report.index() },
            { title: 'Create Report', href: report.create() },
        ],
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Github Repo',
        href: 'https://github.com/laravel/vue-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#vue',
        icon: BookOpen,
    },
];
</script>

<template>
    <Sidebar collapsible="icon" variant="inset">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child>
                        <Link :href="dashboard()">
                            <AppLogo />
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
            <NavMain :items="mainNavItems" />
            <NavModules :items="moduleNavItems" label="Modules" />

        </SidebarContent>

        <SidebarFooter>
            <NavFooter :items="footerNavItems" />
            <NavUser />
        </SidebarFooter>
    </Sidebar>
    <slot />
</template>
