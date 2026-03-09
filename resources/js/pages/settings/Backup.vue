<script setup lang="ts">
import { Head, router, usePage } from '@inertiajs/vue3';
import { ref, computed } from 'vue';
import { toast } from 'vue-sonner';

import HeadingSmall from '@/components/HeadingSmall.vue';
import { type BreadcrumbItem } from '@/types';

import AppLayout from '@/layouts/AppLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
    Database,
    Download,
    Trash2,
    RefreshCw,
    HardDrive,
    MoreHorizontal,
    Archive,
    Loader2,
} from 'lucide-vue-next';

interface Backup {
    name: string;
    path: string;
    size: string;
    size_bytes: number;
    created_at: string;
    created_at_human: string;
}

interface Props {
    backupList: Backup[];
    totalSize: string;
    backupCount: number;
    diskSpace: {
        free: string;
        total: string;
    };
}

const props = defineProps<Props>();

const page = usePage();

const breadcrumbItems: BreadcrumbItem[] = [
    {
        title: 'Backup',
        href: '/settings/backup',
    },
];

const isCreating = ref(false);
const isCleaning = ref(false);
const deleteDialog = ref(false);
const selectedBackup = ref<Backup | null>(null);

const flash = computed(() => page.props.flash as { success?: string; error?: string });

// Watch for flash messages
if (flash.value?.success) {
    toast.success(flash.value.success);
}
if (flash.value?.error) {
    toast.error(flash.value.error);
}

const createBackup = (type: 'db' | 'full') => {
    isCreating.value = true;
    router.post('/settings/backup', { type }, {
        preserveScroll: true,
        onSuccess: () => {
            toast.success('Backup created successfully.');
        },
        onError: () => {
            toast.error('Failed to create backup.');
        },
        onFinish: () => {
            isCreating.value = false;
        },
    });
};

const downloadBackup = (backup: Backup) => {
    window.location.href = `/settings/backup/download?path=${encodeURIComponent(backup.path)}`;
};

const confirmDelete = (backup: Backup) => {
    selectedBackup.value = backup;
    deleteDialog.value = true;
};

const deleteBackup = () => {
    if (!selectedBackup.value) return;

    router.delete('/settings/backup', {
        data: { path: selectedBackup.value.path },
        preserveScroll: true,
        onSuccess: () => {
            toast.success('Backup deleted successfully.');
            deleteDialog.value = false;
            selectedBackup.value = null;
        },
        onError: () => {
            toast.error('Failed to delete backup.');
        },
    });
};

const cleanupBackups = () => {
    isCleaning.value = true;
    router.post('/settings/backup/cleanup', {}, {
        preserveScroll: true,
        onSuccess: () => {
            toast.success('Old backups cleaned up.');
        },
        onError: () => {
            toast.error('Failed to cleanup backups.');
        },
        onFinish: () => {
            isCleaning.value = false;
        },
    });
};
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">
        <Head title="Backup" />

        <SettingsLayout>
            <div class="space-y-6">
                <HeadingSmall
                    title="Database Backup"
                    description="Manage your database backups"
                />

                <!-- Stats Cards -->
                <div class="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader class="flex flex-row items-center justify-between pb-2">
                            <CardTitle class="text-sm font-medium">Total Backups</CardTitle>
                            <Archive class="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div class="text-2xl font-bold">{{ backupCount }}</div>
                            <p class="text-xs text-muted-foreground">backup files</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader class="flex flex-row items-center justify-between pb-2">
                            <CardTitle class="text-sm font-medium">Storage Used</CardTitle>
                            <Database class="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div class="text-2xl font-bold">{{ totalSize }}</div>
                            <p class="text-xs text-muted-foreground">total backup size</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader class="flex flex-row items-center justify-between pb-2">
                            <CardTitle class="text-sm font-medium">Disk Space</CardTitle>
                            <HardDrive class="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div class="text-2xl font-bold">{{ diskSpace.free }}</div>
                            <p class="text-xs text-muted-foreground">free of {{ diskSpace.total }}</p>
                        </CardContent>
                    </Card>
                </div>

                <!-- Actions -->
                <Card>
                    <CardHeader>
                        <CardTitle>Create Backup</CardTitle>
                        <CardDescription>
                            Create a new backup of your database or full application.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="flex flex-wrap gap-3">
                        <Button
                            @click="createBackup('db')"
                            :disabled="isCreating"
                        >
                            <Loader2 v-if="isCreating" class="mr-2 h-4 w-4 animate-spin" />
                            <Database v-else class="mr-2 h-4 w-4" />
                            Database Backup
                        </Button>
                        <Button
                            variant="outline"
                            @click="createBackup('full')"
                            :disabled="isCreating"
                        >
                            <Loader2 v-if="isCreating" class="mr-2 h-4 w-4 animate-spin" />
                            <Archive v-else class="mr-2 h-4 w-4" />
                            Full Backup
                        </Button>
                        <Button
                            variant="secondary"
                            @click="cleanupBackups"
                            :disabled="isCleaning"
                        >
                            <Loader2 v-if="isCleaning" class="mr-2 h-4 w-4 animate-spin" />
                            <RefreshCw v-else class="mr-2 h-4 w-4" />
                            Cleanup Old Backups
                        </Button>
                    </CardContent>
                </Card>

                <!-- Backup List -->
                <Card>
                    <CardHeader>
                        <CardTitle>Backup History</CardTitle>
                        <CardDescription>
                            View and manage your existing backups.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div v-if="backupList.length === 0" class="text-center py-8 text-muted-foreground">
                            No backups found. Create your first backup above.
                        </div>

                        <Table v-else>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>File Name</TableHead>
                                    <TableHead>Size</TableHead>
                                    <TableHead>Created</TableHead>
                                    <TableHead class="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow v-for="backup in backupList" :key="backup.path">
                                    <TableCell class="font-medium">
                                        <div class="flex items-center gap-2">
                                            <Archive class="h-4 w-4 text-muted-foreground" />
                                            {{ backup.name }}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="secondary">{{ backup.size }}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div class="flex flex-col">
                                            <span class="text-sm">{{ backup.created_at_human }}</span>
                                            <span class="text-xs text-muted-foreground">{{ backup.created_at }}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell class="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger as-child>
                                                <Button variant="ghost" size="icon">
                                                    <MoreHorizontal class="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem @click="downloadBackup(backup)">
                                                    <Download class="mr-2 h-4 w-4" />
                                                    Download
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    class="text-destructive focus:text-destructive"
                                                    @click="confirmDelete(backup)"
                                                >
                                                    <Trash2 class="mr-2 h-4 w-4" />
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </SettingsLayout>

        <!-- Delete Confirmation Dialog -->
        <AlertDialog v-model:open="deleteDialog">
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Delete Backup</AlertDialogTitle>
                    <AlertDialogDescription>
                        Are you sure you want to delete this backup?
                        <span v-if="selectedBackup" class="font-medium block mt-2">
                            {{ selectedBackup.name }}
                        </span>
                        This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        class="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        @click="deleteBackup"
                    >
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </AppLayout>
</template>
