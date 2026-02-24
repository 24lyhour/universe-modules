<script setup lang="ts">
import { Head, Link, router, usePage } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TableReusable, StatsCard } from '@/components/shared';
import type { TableColumn, PaginationData } from '@/components/shared';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Activity,
    ArrowLeft,
    LogIn,
    LogOut,
    AlertTriangle,
    Monitor,
    Globe,
    Calendar,
    Shield,
    MoreHorizontal,
    Ban,
    CheckCircle,
    Power,
    Download,
    Trash2,
    UserX,
} from 'lucide-vue-next';
import { ref, computed } from 'vue';
import type { BreadcrumbItem } from '@/types';

// Import modal components
import DeleteModal from './Delete.vue';
import SuspendModal from './Suspend.vue';
import UnsuspendModal from './Unsuspend.vue';
import ForceLogoutModal from './ForceLogout.vue';
import ClearLogsModal from './ClearLogs.vue';

interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    suspended_at?: string | null;
}

interface ActivityLog {
    id: number;
    log_name: string;
    description: string;
    event: string;
    properties: {
        ip_address?: string;
        user_agent?: string;
        browser?: string;
        platform?: string;
        email?: string;
        guard?: string;
        roles?: string[];
        reason?: string;
        target_user?: {
            id: number;
            name: string;
            email: string;
        };
    };
    causer: User | null;
    created_at: string;
}

interface Stats {
    total_logins: number;
    total_logouts: number;
    failed_logins: number;
    today_logins: number;
}

interface SuspiciousUser {
    email: string;
    failed_count: number;
}

interface Props {
    activities: {
        data: ActivityLog[];
        meta: {
            current_page: number;
            last_page: number;
            per_page: number;
            total: number;
        };
    };
    users: User[];
    stats: Stats;
    suspiciousUsers: SuspiciousUser[];
    filters: {
        event?: string | null;
        user_id?: string | null;
        date_from?: string | null;
        date_to?: string | null;
    };
}

const props = defineProps<Props>();
const page = usePage();
const currentUser = computed(() => page.props.auth?.user as User | undefined);

const breadcrumbItems: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Settings', href: '/dashboard/settings' },
    { title: 'Activity Log', href: '/dashboard/settings/activity-log' },
];

const eventFilter = ref(props.filters?.event || 'all');
const userFilter = ref(props.filters?.user_id || 'all');
const dateFrom = ref(props.filters?.date_from || '');
const dateTo = ref(props.filters?.date_to || '');

// Dialog states
const showSuspendDialog = ref(false);
const showUnsuspendDialog = ref(false);
const showForceLogoutDialog = ref(false);
const showDeleteDialog = ref(false);
const showClearLogsDialog = ref(false);
const selectedUser = ref<User | null>(null);

// Table columns
const columns: TableColumn<ActivityLog>[] = [
    { key: 'user', label: 'User' },
    { key: 'roles', label: 'Roles' },
    { key: 'event', label: 'Event' },
    { key: 'details', label: 'Details' },
    { key: 'ip_address', label: 'IP Address' },
    { key: 'created_at', label: 'Time' },
    { key: 'actions', label: '' },
];

// Pagination
const pagination = computed<PaginationData>(() => ({
    current_page: props.activities.meta.current_page,
    last_page: props.activities.meta.last_page,
    per_page: props.activities.meta.per_page,
    total: props.activities.meta.total,
}));

const getInitials = (name: string) => {
    return name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
};

const getEventIcon = (event: string) => {
    switch (event) {
        case 'login':
            return LogIn;
        case 'logout':
            return LogOut;
        case 'failed_login':
            return AlertTriangle;
        case 'suspended':
            return Ban;
        case 'unsuspended':
            return CheckCircle;
        case 'force_logout':
            return Power;
        case 'clear_logs':
            return Trash2;
        default:
            return Activity;
    }
};

const getEventVariant = (event: string): 'default' | 'secondary' | 'destructive' | 'outline' => {
    switch (event) {
        case 'login':
            return 'default';
        case 'logout':
            return 'secondary';
        case 'failed_login':
        case 'suspended':
            return 'destructive';
        case 'unsuspended':
            return 'default';
        case 'force_logout':
        case 'clear_logs':
            return 'outline';
        default:
            return 'outline';
    }
};

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(date);
};

const formatEventLabel = (event: string) => {
    return event.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
};

const applyFilters = (page = 1) => {
    router.get('/dashboard/settings/activity-log', {
        event: eventFilter.value !== 'all' ? eventFilter.value : undefined,
        user_id: userFilter.value !== 'all' ? userFilter.value : undefined,
        date_from: dateFrom.value || undefined,
        date_to: dateTo.value || undefined,
        page,
        per_page: props.activities.meta.per_page,
    }, {
        preserveState: true,
        preserveScroll: true,
    });
};

const clearFilters = () => {
    eventFilter.value = 'all';
    userFilter.value = 'all';
    dateFrom.value = '';
    dateTo.value = '';
    router.get('/dashboard/settings/activity-log', {}, {
        preserveState: true,
        preserveScroll: true,
    });
};

const handleEventFilter = (value: string | number | boolean | bigint | Record<string, unknown> | null | undefined) => {
    eventFilter.value = String(value);
    applyFilters();
};

const handleUserFilter = (value: string | number | boolean | bigint | Record<string, unknown> | null | undefined) => {
    userFilter.value = String(value);
    applyFilters();
};

const handlePageChange = (page: number) => {
    applyFilters(page);
};

const handlePerPageChange = (perPage: number) => {
    router.get('/dashboard/settings/activity-log', {
        event: eventFilter.value !== 'all' ? eventFilter.value : undefined,
        user_id: userFilter.value !== 'all' ? userFilter.value : undefined,
        date_from: dateFrom.value || undefined,
        date_to: dateTo.value || undefined,
        per_page: perPage,
    }, {
        preserveState: true,
        preserveScroll: true,
    });
};

const hasActiveFilters = computed(() => {
    return eventFilter.value !== 'all' ||
           userFilter.value !== 'all' ||
           dateFrom.value ||
           dateTo.value;
});

// User Actions
const openSuspendDialog = (user: User) => {
    selectedUser.value = user;
    showSuspendDialog.value = true;
};

const openUnsuspendDialog = (user: User) => {
    selectedUser.value = user;
    showUnsuspendDialog.value = true;
};

const openForceLogoutDialog = (user: User) => {
    selectedUser.value = user;
    showForceLogoutDialog.value = true;
};

const openDeleteDialog = (user: User) => {
    selectedUser.value = user;
    showDeleteDialog.value = true;
};

const exportLogs = () => {
    const params = new URLSearchParams();
    if (eventFilter.value !== 'all') params.append('event', eventFilter.value);
    if (userFilter.value !== 'all') params.append('user_id', userFilter.value);
    if (dateFrom.value) params.append('date_from', dateFrom.value);
    if (dateTo.value) params.append('date_to', dateTo.value);

    window.location.href = `/dashboard/settings/activity-log/export?${params.toString()}`;
};

const canPerformAction = (user: User | null) => {
    if (!user) return false;
    // Allow showing actions even if currentUser is not loaded yet
    // The backend will prevent self-actions anyway
    if (!currentUser.value) return true;
    return user.id !== currentUser.value.id;
};
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">
        <Head title="Activity Log" />

        <div class="flex h-full flex-1 flex-col gap-6 p-6">
            <!-- Header -->
            <div class="flex items-center gap-4">
                <Button variant="ghost" size="icon" as-child>
                    <Link href="/dashboard/settings">
                        <ArrowLeft class="h-4 w-4" />
                    </Link>
                </Button>
                <div class="flex-1">
                    <h1 class="text-2xl font-bold tracking-tight flex items-center gap-2">
                        <Activity class="h-6 w-6" />
                        Activity Log
                    </h1>
                    <p class="text-muted-foreground">Monitor user login activity and security events</p>
                </div>
                <div class="flex gap-2">
                    <Button variant="outline" size="sm" @click="exportLogs">
                        <Download class="mr-2 h-4 w-4" />
                        Export
                    </Button>
                    <Button variant="outline" size="sm" @click="showClearLogsDialog = true">
                        <Trash2 class="mr-2 h-4 w-4" />
                        Clear Old Logs
                    </Button>
                </div>
            </div>

            <!-- Stats -->
            <div class="grid gap-4 md:grid-cols-4">
                <StatsCard
                    title="Total Logins"
                    :value="stats.total_logins"
                    :icon="LogIn"
                />
                <StatsCard
                    title="Total Logouts"
                    :value="stats.total_logouts"
                    :icon="LogOut"
                    variant="secondary"
                />
                <StatsCard
                    title="Failed Logins"
                    :value="stats.failed_logins"
                    :icon="AlertTriangle"
                    variant="warning"
                />
                <StatsCard
                    title="Today's Logins"
                    :value="stats.today_logins"
                    :icon="Calendar"
                    variant="success"
                />
            </div>

            <!-- Suspicious Users Warning -->
            <Card v-if="suspiciousUsers.length > 0" class="border-destructive/50 bg-destructive/5">
                <CardHeader class="pb-3">
                    <CardTitle class="flex items-center gap-2 text-destructive">
                        <AlertTriangle class="h-5 w-5" />
                        Security Warning
                    </CardTitle>
                    <CardDescription>
                        The following accounts have 3+ failed login attempts in the last 24 hours
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div class="flex flex-wrap gap-2">
                        <Badge
                            v-for="user in suspiciousUsers"
                            :key="user.email"
                            variant="destructive"
                            class="text-sm"
                        >
                            {{ user.email }}
                            <span class="ml-1 rounded-full bg-destructive-foreground/20 px-1.5 text-xs">
                                {{ user.failed_count }} failed
                            </span>
                        </Badge>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div class="flex items-center justify-between">
                        <div>
                            <CardTitle>Login Activity</CardTitle>
                            <CardDescription>
                                {{ props.activities.meta.total }} activities recorded
                            </CardDescription>
                        </div>
                        <Button
                            v-if="hasActiveFilters"
                            variant="outline"
                            size="sm"
                            @click="clearFilters"
                        >
                            Clear Filters
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <!-- Filters -->
                    <div class="flex flex-wrap gap-4 mb-6">
                        <Select :model-value="eventFilter" @update:model-value="handleEventFilter">
                            <SelectTrigger class="w-[160px]">
                                <SelectValue placeholder="Event type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Events</SelectItem>
                                <SelectItem value="login">Login</SelectItem>
                                <SelectItem value="logout">Logout</SelectItem>
                                <SelectItem value="failed_login">Failed Login</SelectItem>
                                <SelectItem value="suspended">Suspended</SelectItem>
                                <SelectItem value="unsuspended">Unsuspended</SelectItem>
                                <SelectItem value="force_logout">Force Logout</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select :model-value="userFilter" @update:model-value="handleUserFilter">
                            <SelectTrigger class="w-[200px]">
                                <SelectValue placeholder="Filter by user" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Users</SelectItem>
                                <SelectItem
                                    v-for="user in users"
                                    :key="user.id"
                                    :value="String(user.id)"
                                >
                                    {{ user.name }}
                                </SelectItem>
                            </SelectContent>
                        </Select>

                        <div class="flex items-center gap-2">
                            <Input
                                v-model="dateFrom"
                                type="date"
                                class="w-[150px]"
                                placeholder="From"
                                @change="applyFilters()"
                            />
                            <span class="text-muted-foreground">to</span>
                            <Input
                                v-model="dateTo"
                                type="date"
                                class="w-[150px]"
                                placeholder="To"
                                @change="applyFilters()"
                            />
                        </div>
                    </div>

                    <!-- Activity Table -->
                    <TableReusable
                        :data="activities.data"
                        :columns="columns"
                        :pagination="pagination"
                        :searchable="false"
                        empty-message="No activity logs found"
                        @page-change="handlePageChange"
                        @per-page-change="handlePerPageChange"
                    >
                        <!-- User Cell -->
                        <template #cell-user="{ item }">
                            <div v-if="item.causer" class="flex items-center gap-3">
                                <div class="relative">
                                    <Avatar class="h-8 w-8">
                                        <AvatarImage v-if="item.causer.avatar" :src="item.causer.avatar" />
                                        <AvatarFallback>{{ getInitials(item.causer.name) }}</AvatarFallback>
                                    </Avatar>
                                    <div
                                        v-if="item.causer.suspended_at"
                                        class="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full border-2 border-background"
                                        title="Suspended"
                                    />
                                </div>
                                <div>
                                    <div class="font-medium flex items-center gap-2">
                                        {{ item.causer.name }}
                                        <Badge v-if="item.causer.suspended_at" variant="destructive" class="text-xs">
                                            <UserX class="mr-1 h-3 w-3" />
                                            Suspended
                                        </Badge>
                                    </div>
                                    <div class="text-xs text-muted-foreground">{{ item.causer.email }}</div>
                                </div>
                            </div>
                            <div v-else class="flex items-center gap-3">
                                <Avatar class="h-8 w-8">
                                    <AvatarFallback>?</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div class="font-medium text-muted-foreground">
                                        {{ item.properties?.email || 'Unknown' }}
                                    </div>
                                    <div class="text-xs text-muted-foreground">Guest</div>
                                </div>
                            </div>
                        </template>

                        <!-- Roles Cell -->
                        <template #cell-roles="{ item }">
                            <div v-if="item.properties?.roles?.length" class="flex flex-wrap gap-1">
                                <Badge
                                    v-for="role in item.properties.roles"
                                    :key="role"
                                    :variant="role === 'super-admin' ? 'default' : 'secondary'"
                                    class="text-xs"
                                >
                                    <Shield class="mr-1 h-3 w-3" />
                                    {{ role }}
                                </Badge>
                            </div>
                            <span v-else class="text-xs text-muted-foreground">-</span>
                        </template>

                        <!-- Event Cell -->
                        <template #cell-event="{ item }">
                            <Badge :variant="getEventVariant(item.event)">
                                <component
                                    :is="getEventIcon(item.event)"
                                    class="mr-1 h-3 w-3"
                                />
                                {{ formatEventLabel(item.event) }}
                            </Badge>
                        </template>

                        <!-- Details Cell -->
                        <template #cell-details="{ item }">
                            <div class="flex flex-col gap-1">
                                <div class="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span v-if="item.properties?.browser" class="flex items-center gap-1">
                                        <Globe class="h-3 w-3" />
                                        {{ item.properties.browser }}
                                    </span>
                                    <span v-if="item.properties?.platform" class="flex items-center gap-1">
                                        <Monitor class="h-3 w-3" />
                                        {{ item.properties.platform }}
                                    </span>
                                </div>
                                <div v-if="item.properties?.target_user" class="text-xs text-muted-foreground">
                                    Target: {{ item.properties.target_user.name }}
                                </div>
                                <div v-if="item.properties?.reason" class="text-xs text-destructive">
                                    Reason: {{ item.properties.reason }}
                                </div>
                            </div>
                        </template>

                        <!-- IP Address Cell -->
                        <template #cell-ip_address="{ item }">
                            <code class="text-xs bg-muted px-2 py-1 rounded">
                                {{ item.properties?.ip_address || '-' }}
                            </code>
                        </template>

                        <!-- Time Cell -->
                        <template #cell-created_at="{ item }">
                            <span class="text-sm text-muted-foreground">
                                {{ formatDate(item.created_at) }}
                            </span>
                        </template>

                        <!-- Actions Cell -->
                        <template #cell-actions="{ item }">
                            <DropdownMenu v-if="item.causer">
                                <DropdownMenuTrigger as-child>
                                    <Button variant="ghost" size="icon" class="h-8 w-8">
                                        <MoreHorizontal class="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <template v-if="canPerformAction(item.causer)">
                                        <DropdownMenuItem
                                            v-if="!item.causer.suspended_at"
                                            @click="openSuspendDialog(item.causer)"
                                            class="text-destructive"
                                        >
                                            <Ban class="mr-2 h-4 w-4" />
                                            Suspend User
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            v-else
                                            @click="openUnsuspendDialog(item.causer)"
                                        >
                                            <CheckCircle class="mr-2 h-4 w-4" />
                                            Unsuspend User
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem @click="openForceLogoutDialog(item.causer)">
                                            <Power class="mr-2 h-4 w-4" />
                                            Force Logout
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem
                                            @click="openDeleteDialog(item.causer)"
                                            class="text-destructive"
                                        >
                                            <Trash2 class="mr-2 h-4 w-4" />
                                            Delete User
                                        </DropdownMenuItem>
                                    </template>
                                    <div v-else class="px-2 py-1.5 text-sm text-muted-foreground">
                                        This is you
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </template>
                    </TableReusable>
                </CardContent>
            </Card>
        </div>

        <!-- Modals -->
        <ClearLogsModal
            v-model:open="showClearLogsDialog"
        />
        <SuspendModal
            v-model:open="showSuspendDialog"
            :user="selectedUser"
            @suspended="selectedUser = null"
        />
        <UnsuspendModal
            v-model:open="showUnsuspendDialog"
            :user="selectedUser"
            @unsuspended="selectedUser = null"
        />
        <ForceLogoutModal
            v-model:open="showForceLogoutDialog"
            :user="selectedUser"
            @logged-out="selectedUser = null"
        />
        <DeleteModal
            v-model:open="showDeleteDialog"
            :user="selectedUser"
            @deleted="selectedUser = null"
        />
    </AppLayout>
</template>
