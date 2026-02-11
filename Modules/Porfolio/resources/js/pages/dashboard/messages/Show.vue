<script setup lang="ts">
import { ModalView } from '@/components/shared';
import { useModal } from 'momentum-modal';
import { computed } from 'vue';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/vue3';
import { Mail, Phone, Calendar, Globe, CheckCircle, Reply } from 'lucide-vue-next';
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
    user_agent: string | null;
    created_at: string;
    updated_at: string;
}

interface Props {
    message: ContactMessage;
}

const props = defineProps<Props>();

const { show, close, redirect } = useModal();

const isOpen = computed({
    get: () => show.value,
    set: (val: boolean) => {
        if (!val) {
            close();
            redirect();
        }
    },
});

const handleClose = () => {
    close();
    redirect();
};

const handleMarkAsReplied = () => {
    router.post(porfolio.messages.markAsReplied.url(props.message.id), {}, {
        preserveState: true,
    });
};

const handleReplyEmail = () => {
    window.location.href = `mailto:${props.message.email}?subject=Re: ${props.message.subject || 'Your inquiry'}`;
};

const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};
</script>

<template>
    <ModalView
        v-model:open="isOpen"
        title="Message Details"
        :description="`From ${message.name}`"
        max-width="lg"
        :show-edit-button="false"
        close-text="Close"
        @close="handleClose"
    >
        <div class="space-y-6">
            <!-- Sender Info -->
            <div class="rounded-lg border p-4 space-y-3">
                <h3 class="text-sm font-medium text-muted-foreground">Contact Information</h3>
                <div class="grid gap-3 sm:grid-cols-2">
                    <div class="flex items-center gap-2">
                        <Mail class="h-4 w-4 text-muted-foreground" />
                        <a :href="`mailto:${message.email}`" class="text-sm text-primary hover:underline">
                            {{ message.email }}
                        </a>
                    </div>
                    <div v-if="message.phone" class="flex items-center gap-2">
                        <Phone class="h-4 w-4 text-muted-foreground" />
                        <a :href="`tel:${message.phone}`" class="text-sm hover:underline">
                            {{ message.phone }}
                        </a>
                    </div>
                    <div class="flex items-center gap-2">
                        <Calendar class="h-4 w-4 text-muted-foreground" />
                        <span class="text-sm">{{ formatDate(message.created_at) }}</span>
                    </div>
                    <div v-if="message.ip_address" class="flex items-center gap-2">
                        <Globe class="h-4 w-4 text-muted-foreground" />
                        <span class="text-sm text-muted-foreground">{{ message.ip_address }}</span>
                    </div>
                </div>
            </div>

            <!-- Status -->
            <div class="flex items-center gap-3">
                <span :class="[
                    'inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold',
                    message.is_read
                        ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
                ]">
                    {{ message.is_read ? 'Read' : 'Unread' }}
                </span>
                <span v-if="message.is_replied" class="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800 dark:bg-green-900 dark:text-green-100">
                    <CheckCircle class="h-4 w-4" />
                    Replied
                </span>
            </div>

            <!-- Subject -->
            <div v-if="message.subject" class="space-y-2">
                <h3 class="text-sm font-medium text-muted-foreground">Subject</h3>
                <p class="font-medium">{{ message.subject }}</p>
            </div>

            <!-- Message Content -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-muted-foreground">Message</h3>
                <div class="rounded-lg bg-muted p-4">
                    <p class="whitespace-pre-wrap text-sm">{{ message.message }}</p>
                </div>
            </div>
        </div>

        <template #footer>
            <div class="flex items-center justify-end gap-3 w-full">
                <Button variant="outline" @click="handleClose">
                    Close
                </Button>
                <Button v-if="!message.is_replied" variant="outline" @click="handleMarkAsReplied">
                    <CheckCircle class="mr-2 h-4 w-4" />
                    Mark as Replied
                </Button>
                <Button @click="handleReplyEmail">
                    <Reply class="mr-2 h-4 w-4" />
                    Reply via Email
                </Button>
            </div>
        </template>
    </ModalView>
</template>
