<script setup lang="ts">
import NavDynamicModules from '@/components/NavDynamicModules.vue';
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
import * as report from '@/routes/report';
import { type AppPageProps, type NavItem, type NavModuleItem } from '@/types';
import { Link, usePage } from '@inertiajs/vue3';
import {
    Building2,
    CalendarDays,
    CreditCard,
    FileText,
    Hotel,
    LayoutGrid,
    ListOrdered,
    MonitorPlay,
    UtensilsCrossed,
    Users,
} from 'lucide-vue-next';
import { computed } from 'vue';
import AppLogo from './AppLogo.vue';

const page = usePage<AppPageProps>();

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
];

// Static module items (modules that don't use MenuService yet)
const staticModuleItems: NavModuleItem[] = [
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
        title: 'Report',
        icon: FileText,
        items: [
            { title: 'All Reports', href: report.index() },
            { title: 'Create Report', href: report.create() },
        ],
    },
];

// Get dynamic menu items from backend via MenuService
const dynamicModuleItems = computed(() => page.props.menus?.primary || []);
const footerNavItems = computed(() => page.props.menus?.footer || []);
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
            <NavMain :items="mainNavItems" label="Dashboard" />
            <!-- Static modules (hardcoded) -->
            <NavModules :items="staticModuleItems" label="Modules" />
            <!-- Dynamic modules from MenuService (Portfolio, etc.) -->
            <NavDynamicModules v-if="dynamicModuleItems.length > 0" :items="dynamicModuleItems" />
        </SidebarContent>

        <SidebarFooter>
            <NavDynamicModules v-if="footerNavItems.length > 0" :items="footerNavItems" label="Settings" />
            <NavUser />
        </SidebarFooter>
    </Sidebar>
    <slot />
</template>
