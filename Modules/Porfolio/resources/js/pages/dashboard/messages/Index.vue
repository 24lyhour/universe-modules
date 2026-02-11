<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    TableReusable,
    ModalConfirm,
    type TableColumn,
    type TableAction,
} from '@/components/shared';
import { router } from '@inertiajs/vue3';
import { ref, computed, type VNode } from 'vue';
import { Eye, Trash2, Mail, MailOpen, CheckCircle, Filter } from 'lucide-vue-next';
import * as porfolio from '@/routes/porfolio';

interface ContactMessage {
    id: number;
    uuid: string;
    name: string;
    email: string;
    phone: string | null;
    subject: string | null;
    message: string;
    is_read: boolean;
    is_replied: boolean;
    read_at: string | null;
    replied_at: string | null;
    ip_address: string | null;
    created_at: string;
    updated_at: string;
}

interface Props {
    messages: {
        data: ContactMessage[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    unreadCount: number;
}

const props = defineProps<Props>();

defineOptions({
    layout: (h: (type: unknown, props: unknown, children: unknown) => VNode, page: VNode) =>
        h(AppLayout, { breadcrumbs: [
            { title: 'Dashboard', href: '/dashboard' },
            { title: 'Messages', href: '/dashboard/messages' },
        ]}, () => page),
});

const searchQuery = ref('');
const showUnreadOnly = ref(false);

const filteredMessages = computed(() => {
    let data = props.messages.data;

    if (showUnreadOnly.value) {
        data = data.filter((item) => !item.is_read);
    }

    if (!searchQuery.value) {
        return data;
    }
    const query = searchQuery.value.toLowerCase();
    return data.filter(
        (item) =>
            item.name.toLowerCase().includes(query) ||
            item.email.toLowerCase().includes(query) ||
            item.subject?.toLowerCase().includes(query) ||
            item.message.toLowerCase().includes(query)
    );
});

const columns: TableColumn<ContactMessage>[] = [
    { key: 'name', label: 'From', width: '25%' },
    { key: 'subject', label: 'Subject' },
    { key: 'is_read', label: 'Status' },
    { key: 'created_at', label: 'Date' },
];

const isDeleteModalOpen = ref(false);
const isDeleting = ref(false);
const selectedMessage = ref<ContactMessage | null>(null);

const handleView = (item: ContactMessage) => {
    router.visit(porfolio.messages.show.url(item.id));
};

const openDeleteModal = (message: ContactMessage) => {
    selectedMessage.value = message;
    isDeleteModalOpen.value = true;
};

const handleDelete = () => {
    if (!selectedMessage.value) return;
    isDeleting.value = true;
    router.delete(porfolio.messages.destroy.url(selectedMessage.value.id), {
        onSuccess: () => {
            isDeleteModalOpen.value = false;
            selectedMessage.value = null;
        },
        onFinish: () => {
            isDeleting.value = false;
        },
    });
};

const handleMarkAsRead = (item: ContactMessage) => {
    router.post(porfolio.messages.markAsRead.url(item.id));
};

const handleMarkAsReplied = (item: ContactMessage) => {
    router.post(porfolio.messages.markAsReplied.url(item.id));
};

const handlePageChange = (page: number) => {
    router.get(porfolio.messages.index.url(), { page }, { preserveState: true });
};

const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};

const tableActions: TableAction<ContactMessage>[] = [
    {
        label: 'View',
        icon: Eye,
        onClick: (item) => handleView(item),
    },
    {
        label: 'Mark as Read',
        icon: MailOpen,
        onClick: (item) => handleMarkAsRead(item),
        show: (item) => !item.is_read,
    },
    {
        label: 'Mark as Replied',
        icon: CheckCircle,
        onClick: (item) => handleMarkAsReplied(item),
        show: (item) => !item.is_replied,
    },
    {
        label: 'Delete',
        icon: Trash2,
        onClick: (item) => openDeleteModal(item),
        variant: 'destructive',
        separator: true,
    },
];
</script>

<template>
    <div class="flex flex-1 flex-col gap-4 p-4">
        <Card>
            <CardHeader>
                <div class="flex items-center justify-between">
                    <div>
                        <CardTitle class="flex items-center gap-2">
                            Messages
                            <span v-if="unreadCount > 0" class="inline-flex items-center justify-center rounded-full bg-red-500 px-2 py-0.5 text-xs font-medium text-white">
                                {{ unreadCount }}
                            </span>
                        </CardTitle>
                        <CardDescription>Contact form submissions and inquiries</CardDescription>
                    </div>
                    <Button
                        variant="outline"
                        :class="{ 'bg-primary text-primary-foreground': showUnreadOnly }"
                        @click="showUnreadOnly = !showUnreadOnly"
                    >
                        <Filter class="mr-2 h-4 w-4" />
                        {{ showUnreadOnly ? 'Show All' : 'Unread Only' }}
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <TableReusable
                    v-model:search-query="searchQuery"
                    :data="filteredMessages"
                    :columns="columns"
                    :actions="tableActions"
                    :pagination="messages"
                    search-placeholder="Search messages..."
                    empty-message="No messages found."
                    @page-change="handlePageChange"
                >
                    <template #cell-name="{ item }">
                        <div class="flex items-center gap-3">
                            <div class="flex h-10 w-10 items-center justify-center rounded-full" :class="item.is_read ? 'bg-muted' : 'bg-primary/10'">
                                <Mail v-if="!item.is_read" class="h-5 w-5 text-primary" />
                                <MailOpen v-else class="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div>
                                <div class="font-medium" :class="{ 'font-bold': !item.is_read }">{{ item.name }}</div>
                                <div class="text-sm text-muted-foreground">{{ item.email }}</div>
                            </div>
                        </div>
                    </template>

                    <template #cell-subject="{ item }">
                        <div>
                            <div :class="{ 'font-semibold': !item.is_read }">
                                {{ item.subject || '(No subject)' }}
                            </div>
                            <div class="text-sm text-muted-foreground line-clamp-1">
                                {{ item.message }}
                            </div>
                        </div>
                    </template>

                    <template #cell-is_read="{ item }">
                        <div class="flex flex-col gap-1">
                            <span :class="[
                                'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold w-fit',
                                item.is_read
                                    ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
                                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
                            ]">
                                {{ item.is_read ? 'Read' : 'Unread' }}
                            </span>
                            <span v-if="item.is_replied" class="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 w-fit dark:bg-green-900 dark:text-green-100">
                                <CheckCircle class="h-3 w-3" />
                                Replied
                            </span>
                        </div>
                    </template>

                    <template #cell-created_at="{ item }">
                        <span class="text-sm text-muted-foreground">{{ formatDate(item.created_at) }}</span>
                    </template>
                </TableReusable>
            </CardContent>
        </Card>
    </div>

    <ModalConfirm
        v-model:open="isDeleteModalOpen"
        title="Delete Message"
        :description="`Are you sure you want to delete the message from '${selectedMessage?.name}'? This action cannot be undone.`"
        confirm-text="Delete"
        variant="danger"
        :loading="isDeleting"
        @confirm="handleDelete"
    />
</template>
