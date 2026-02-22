<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar';
import type { AppPageProps, Tenant } from '@/types';
import { usePage } from '@inertiajs/vue3';
import { Building2, Globe, School, Shield, Store } from 'lucide-vue-next';
import { computed } from 'vue';

interface Props {
    tenant: Tenant;
}

const props = defineProps<Props>();
const page = usePage<AppPageProps>();
const { state } = useSidebar();

// Check if user is super-admin
const isSuperAdmin = computed(() => {
    return page.props.auth.roles?.includes('super-admin') ?? false;
});

const tenantIcon = computed(() => {
    if (isSuperAdmin.value && !props.tenant.has_tenant) {
        return Shield;
    }
    switch (props.tenant.tenant_type) {
        case 'School':
            return School;
        case 'Outlet':
            return Store;
        default:
            return Building2;
    }
});

const tenantTypeLabel = computed(() => {
    switch (props.tenant.tenant_type) {
        case 'School':
            return 'School';
        case 'Outlet':
            return 'Outlet';
        case 'Company':
            return 'Company';
        default:
            return 'Organization';
    }
});
</script>

<template>
    <!-- User with assigned tenant -->
    <SidebarMenu v-if="tenant.has_tenant">
        <SidebarMenuItem>
            <SidebarMenuButton
                size="lg"
                class="cursor-default hover:bg-transparent"
                :class="{ 'justify-center': state === 'collapsed' }"
            >
                <div
                    class="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"
                >
                    <component :is="tenantIcon" class="size-4" />
                </div>
                <div v-if="state !== 'collapsed'" class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">{{ tenant.tenant_name }}</span>
                    <span class="truncate text-xs text-muted-foreground">
                        {{ tenantTypeLabel }}
                    </span>
                </div>
            </SidebarMenuButton>
        </SidebarMenuItem>
    </SidebarMenu>

    <!-- Super Admin without tenant - show All Organizations -->
    <SidebarMenu v-else-if="isSuperAdmin">
        <SidebarMenuItem>
            <SidebarMenuButton
                size="lg"
                class="cursor-default hover:bg-transparent"
                :class="{ 'justify-center': state === 'collapsed' }"
            >
                <div
                    class="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 text-white"
                >
                    <Shield class="size-4" />
                </div>
                <div v-if="state !== 'collapsed'" class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">All Organizations</span>
                    <Badge variant="secondary" class="w-fit text-xs">Super Admin</Badge>
                </div>
            </SidebarMenuButton>
        </SidebarMenuItem>
    </SidebarMenu>

    <!-- Regular user without tenant -->
    <SidebarMenu v-else>
        <SidebarMenuItem>
            <SidebarMenuButton
                size="lg"
                class="cursor-default hover:bg-transparent"
                :class="{ 'justify-center': state === 'collapsed' }"
            >
                <div
                    class="flex aspect-square size-8 items-center justify-center rounded-lg bg-muted text-muted-foreground"
                >
                    <Globe class="size-4" />
                </div>
                <div v-if="state !== 'collapsed'" class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-medium text-muted-foreground">No Organization</span>
                    <span class="truncate text-xs text-muted-foreground">Contact admin to assign</span>
                </div>
            </SidebarMenuButton>
        </SidebarMenuItem>
    </SidebarMenu>
</template>
