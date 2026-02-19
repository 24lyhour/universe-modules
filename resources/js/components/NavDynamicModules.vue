<script setup lang="ts">
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarSeparator,
} from '@/components/ui/sidebar';
import { type MenuItem } from '@/types';
import { Link, usePage } from '@inertiajs/vue3';
import {
    ArrowLeftRight,
    Briefcase,
    Building2,
    CalendarDays,
    ChevronRight,
    CreditCard,
    FileText,
    Hotel,
    Layers,
    LayoutGrid,
    ListOrdered,
    LogIn,
    Mail,
    MessageSquareQuote,
    MonitorPlay,
    Package,
    PanelBottom,
    PanelTop,
    Settings,
    Tags,
    UtensilsCrossed,
    Users,
    Wallet,
    Wrench,
    PlusCircle,
    type LucideIcon,
} from 'lucide-vue-next';

defineProps<{
    items: MenuItem[];
    label?: string;
}>();

const page = usePage();

const iconMap: Record<string, LucideIcon> = {
    ArrowLeftRight,
    Briefcase,
    Building2,
    CalendarDays,
    CreditCard,
    FileText,
    Hotel,
    Layers,
    LayoutGrid,
    ListOrdered,
    LogIn,
    Mail,
    MessageSquareQuote,
    MonitorPlay,
    Package,
    PanelBottom,
    PanelTop,
    Settings,
    Tags,
    UtensilsCrossed,
    Users,
    Wallet,
    Wrench,
    PlusCircle,
};

const getIcon = (iconName: string | null | undefined): LucideIcon | null => {
    if (!iconName) return null;
    return iconMap[iconName] || null;
};

const isRouteActive = (route: string | null): boolean => {
    if (!route) return false;
    const currentUrl = page.url;
    const routePattern = route.replace('.*', '').replace('.', '/');
    return currentUrl.includes(routePattern);
};

const isModuleActive = (item: MenuItem): boolean => {
    if (isRouteActive(item.route)) return true;
    return item.items.some((subItem) => isRouteActive(subItem.route));
};
</script>

<template>
    <SidebarSeparator class="mx-0" />
    <SidebarGroup class="px-2 py-0">
        <SidebarGroupLabel>{{ label || 'Modules' }}</SidebarGroupLabel>
        <SidebarMenu>
            <Collapsible
                v-for="item in items"
                :key="item.id"
                as-child
                :default-open="isModuleActive(item)"
                class="group/collapsible"
            >
                <SidebarMenuItem>
                    <CollapsibleTrigger as-child>
                        <SidebarMenuButton
                            :tooltip="item.title"
                            :is-active="isModuleActive(item)"
                        >
                            <component :is="getIcon(item.icon)" />
                            <span>{{ item.title }}</span>
                            <ChevronRight
                                class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                            />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub>
                            <SidebarMenuSubItem
                                v-for="subItem in item.items"
                                :key="subItem.title"
                            >
                                <SidebarMenuSubButton
                                    as-child
                                    :is-active="isRouteActive(subItem.route)"
                                >
                                    <Link :href="subItem.url" class="flex items-center gap-2">
                                        <component v-if="getIcon(subItem.icon)" :is="getIcon(subItem.icon)" class="h-4 w-4" />
                                        <span>{{ subItem.title }}</span>
                                    </Link>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem>
            </Collapsible>
        </SidebarMenu>
    </SidebarGroup>
</template>
