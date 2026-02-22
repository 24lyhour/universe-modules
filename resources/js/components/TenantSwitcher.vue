<script setup lang="ts">
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar';
import type { Tenant } from '@/types';
import { router } from '@inertiajs/vue3';
import { Building2, Check, ChevronsUpDown, School, Store } from 'lucide-vue-next';
import { computed } from 'vue';

interface TenantOption {
    id: number;
    type: string;
    name: string;
    is_primary: boolean;
}

interface Props {
    tenant: Tenant;
    availableTenants?: TenantOption[];
}

const props = withDefaults(defineProps<Props>(), {
    availableTenants: () => [],
});

const { isMobile, state } = useSidebar();

const tenantIcon = computed(() => {
    switch (props.tenant.tenant_type) {
        case 'School':
            return School;
        case 'Outlet':
            return Store;
        default:
            return Building2;
    }
});

const getTenantIcon = (type: string) => {
    switch (type) {
        case 'School':
            return School;
        case 'Outlet':
            return Store;
        default:
            return Building2;
    }
};

const getInitials = (name: string) => {
    return name
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
};

const switchTenant = (tenantOption: TenantOption) => {
    router.post('/tenant/switch', {
        tenant_type: tenantOption.type,
        tenant_id: tenantOption.id,
    }, {
        preserveScroll: true,
        onSuccess: () => {
            router.reload();
        },
    });
};

const hasMultipleTenants = computed(() => props.availableTenants.length > 1);
</script>

<template>
    <SidebarMenu v-if="tenant.has_tenant">
        <SidebarMenuItem>
            <!-- If user has multiple tenants, show dropdown -->
            <DropdownMenu v-if="hasMultipleTenants">
                <DropdownMenuTrigger as-child>
                    <SidebarMenuButton
                        size="lg"
                        class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                        <div
                            class="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"
                        >
                            <component :is="tenantIcon" class="size-4" />
                        </div>
                        <div v-if="state !== 'collapsed'" class="grid flex-1 text-left text-sm leading-tight">
                            <span class="truncate font-semibold">{{ tenant.tenant_name }}</span>
                            <span class="truncate text-xs text-muted-foreground">
                                {{ tenant.tenant_type }}
                            </span>
                        </div>
                        <ChevronsUpDown v-if="state !== 'collapsed'" class="ml-auto size-4" />
                    </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    class="w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                    :side="isMobile ? 'bottom' : state === 'collapsed' ? 'right' : 'bottom'"
                    align="start"
                    :side-offset="4"
                >
                    <DropdownMenuLabel class="text-xs text-muted-foreground">
                        Switch Organization
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        v-for="tenantOption in availableTenants"
                        :key="`${tenantOption.type}-${tenantOption.id}`"
                        class="gap-2 p-2"
                        @click="switchTenant(tenantOption)"
                    >
                        <Avatar class="size-8 rounded-lg">
                            <AvatarFallback class="rounded-lg">
                                {{ getInitials(tenantOption.name) }}
                            </AvatarFallback>
                        </Avatar>
                        <div class="grid flex-1 text-left text-sm leading-tight">
                            <span class="truncate font-semibold">{{ tenantOption.name }}</span>
                            <span class="truncate text-xs text-muted-foreground">
                                {{ tenantOption.type }}
                                <span v-if="tenantOption.is_primary" class="text-primary">(Primary)</span>
                            </span>
                        </div>
                        <Check
                            v-if="tenant.tenant_id === tenantOption.id && tenant.tenant_type === tenantOption.type"
                            class="ml-auto size-4"
                        />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <!-- If user has single tenant, just display -->
            <SidebarMenuButton
                v-else
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
                        {{ tenant.tenant_type }}
                    </span>
                </div>
            </SidebarMenuButton>
        </SidebarMenuItem>
    </SidebarMenu>
</template>
