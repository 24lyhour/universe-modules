<script setup lang="ts">
import NavDynamicModules from '@/components/NavDynamicModules.vue';
import NavMain from '@/components/NavMain.vue';
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
import { type AppPageProps, type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/vue3';
import { LayoutGrid } from 'lucide-vue-next';
import { computed } from 'vue';
import AppLogo from './AppLogo.vue';

const page = usePage<AppPageProps>();

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard.url(),
        icon: LayoutGrid,
    },
];

/**
 * computed the permissions
 */
const dynamicModuleItems = computed(() => page.props.menus?.primary || []);
const footerNavItems = computed(() => page.props.menus?.footer || []);
</script>

<template>
    <Sidebar collapsible="icon" variant="inset">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child>
                        <Link :href="dashboard.url()">
                            <AppLogo />
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
            <NavMain :items="mainNavItems" label="Platform" />
            <!-- Dynamic modules from MenuService (filtered by user permissions) -->
            <NavDynamicModules v-if="dynamicModuleItems.length > 0" :items="dynamicModuleItems" label="Modules" />
        </SidebarContent>

        <SidebarFooter>
            <NavDynamicModules v-if="footerNavItems.length > 0" :items="footerNavItems" label="Settings" />
            <NavUser />
        </SidebarFooter>
    </Sidebar>
    <slot />
</template>
