<script setup lang="ts">
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
    useSidebar,
} from '@/components/ui/sidebar';
import { type MenuItem } from '@/types';
import { Link, usePage } from '@inertiajs/vue3';
import {
    Activity,
    ArrowLeftRight,
    BookOpen,
    Briefcase,
    Building2,
    CalendarDays,
    ChevronRight,
    ClipboardCheck,
    CreditCard,
    FileText,
    GraduationCap,
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
    QrCode,
    Settings,
    Shield,
    Tags,
    UtensilsCrossed,
    Users,
    Wallet,
    Wrench,
    PlusCircle,
    School,
    DoorOpen,
    type LucideIcon,
} from 'lucide-vue-next';
import { ref, computed, onUnmounted } from 'vue';

defineProps<{
    items: MenuItem[];
    label?: string;
}>();

const page = usePage();
const { state, isMobile } = useSidebar();
const isCollapsed = computed(() => state.value === 'collapsed' && !isMobile.value);

const openMenus = ref<Record<string, boolean>>({});
const closeTimers = ref<Record<string, ReturnType<typeof setTimeout>>>({});
const HOVER_DELAY = 300; // Industry standard: 200-400ms

/**
 * Clear any pending close timer for this item
 * @param itemId 
 */
const handleMouseEnter = (itemId: string) => {

    if (closeTimers.value[itemId]) {
        clearTimeout(closeTimers.value[itemId]);
        delete closeTimers.value[itemId];
    }

    Object.keys(openMenus.value).forEach(key => {
        if (key !== itemId && openMenus.value[key]) {
            openMenus.value[key] = false;
        }
    });

    if (isCollapsed.value) {
        openMenus.value[itemId] = true;
    }
};

/**
 * Add delay before closing to allow mouse to move to dropdown
 * @param itemId 
 */
const handleMouseLeave = (itemId: string) => {
    if (isCollapsed.value) {
        closeTimers.value[itemId] = setTimeout(() => {
            openMenus.value[itemId] = false;
            delete closeTimers.value[itemId];
        }, HOVER_DELAY);
    }
};

/**
 * User clicked outside or pressed escape - allow close
 * @param itemId 
 * @param val 
 */
const handleOpenChange = (itemId: string, val: boolean) => {

    if (!val && !closeTimers.value[itemId]) {

        openMenus.value[itemId] = false;
    }
};

onUnmounted(() => {
    Object.values(closeTimers.value).forEach(clearTimeout);
});

const iconMap: Record<string, LucideIcon> = {
    Activity,
    ArrowLeftRight,
    BookOpen,
    Briefcase,
    Building2,
    CalendarDays,
    ClipboardCheck,
    CreditCard,
    FileText,
    GraduationCap,
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
    QrCode,
    Settings,
    Shield,
    Tags,
    UtensilsCrossed,
    Users,
    Wallet,
    Wrench,
    PlusCircle,
    School,
    DoorOpen,
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
            <!-- Collapsed state: Show dropdown on hover -->
            <template v-if="isCollapsed">
                <SidebarMenuItem
                    v-for="item in items"
                    :key="item.id"
                    @pointerenter="handleMouseEnter(item.id)"
                    @pointerleave="handleMouseLeave(item.id)"
                >
                    <DropdownMenu
                        :open="openMenus[item.id] || false"
                        :modal="false"
                        @update:open="(val: boolean) => handleOpenChange(item.id, val)"
                    >
                        <DropdownMenuTrigger as-child>
                            <SidebarMenuButton
                                :is-active="isModuleActive(item)"
                                class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                            >
                                <component :is="getIcon(item.icon)" />
                                <span>{{ item.title }}</span>
                                <ChevronRight class="ml-auto" />
                            </SidebarMenuButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            side="right"
                            align="start"
                            :side-offset="4"
                            class="min-w-56 rounded-lg"
                            @pointerenter="handleMouseEnter(item.id)"
                            @pointerleave="handleMouseLeave(item.id)"
                        >
                            <DropdownMenuLabel class="text-muted-foreground text-xs">
                                {{ item.title }}
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                v-for="subItem in item.items"
                                :key="subItem.title"
                                as-child
                            >
                                <Link
                                    :href="subItem.url"
                                    class="flex items-center gap-2"
                                    :class="{ 'bg-accent': isRouteActive(subItem.route) }"
                                >
                                    <component
                                        v-if="getIcon(subItem.icon)"
                                        :is="getIcon(subItem.icon)"
                                        class="h-4 w-4"
                                    />
                                    <span>{{ subItem.title }}</span>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </template>

            <!-- Expanded state: Show collapsible menu -->
            <template v-else>
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
            </template>
        </SidebarMenu>
    </SidebarGroup>
</template>
