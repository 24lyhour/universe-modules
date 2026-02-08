<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { Upload, Image, X, Check, Search, RefreshCw } from 'lucide-vue-next';

export interface MediaItem {
    id: number;
    uuid?: string;
    name: string;
    file_name: string;
    url: string;
    thumb_url?: string;
    mime_type: string;
    size: number;
    size_formatted: string;
    collection_name: string;
    created_at: string;
}

interface Props {
    multiple?: boolean;
    maxSelect?: number;
    accept?: string;
    maxSize?: number;
}

const props = withDefaults(defineProps<Props>(), {
    multiple: true,
    maxSelect: 10,
    accept: 'image/*',
    maxSize: 5,
});

const open = defineModel<boolean>('open', { default: false });

const emit = defineEmits<{
    select: [urls: string[]];
    cancel: [];
}>();

const activeTab = ref<'upload' | 'library'>('library');
const mediaItems = ref<MediaItem[]>([]);
const selectedItems = ref<MediaItem[]>([]);
const isLoading = ref(false);
const searchQuery = ref('');
const uploadError = ref('');
const isDragging = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);
const uploadingFiles = ref<File[]>([]);
const uploadProgress = ref<number>(0);

const filteredMedia = computed(() => {
    if (!searchQuery.value) return mediaItems.value;
    const query = searchQuery.value.toLowerCase();
    return mediaItems.value.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.file_name.toLowerCase().includes(query)
    );
});

const canSelectMore = computed(() => {
    return props.multiple ? selectedItems.value.length < props.maxSelect : selectedItems.value.length < 1;
});

const isSelected = (item: MediaItem) => {
    return selectedItems.value.some(s => s.id === item.id);
};

const toggleSelect = (item: MediaItem) => {
    if (isSelected(item)) {
        selectedItems.value = selectedItems.value.filter(s => s.id !== item.id);
    } else if (canSelectMore.value) {
        if (props.multiple) {
            selectedItems.value = [...selectedItems.value, item];
        } else {
            selectedItems.value = [item];
        }
    }
};

const fetchMedia = async () => {
    isLoading.value = true;
    try {
        const response = await fetch('/dashboard/media?type=image', {
            headers: {
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: 'same-origin',
        });

        if (response.ok) {
            const data = await response.json();
            mediaItems.value = data.data || [];
        } else {
            console.error('Failed to fetch media');
        }
    } catch (error) {
        console.error('Error fetching media:', error);
    } finally {
        isLoading.value = false;
    }
};

const handleFileSelect = (event: Event) => {
    const input = event.target as HTMLInputElement;
    handleFiles(input.files);
    input.value = '';
};

const handleFiles = (files: FileList | null) => {
    if (!files) return;
    uploadError.value = '';

    const validFiles: File[] = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (!file.type.startsWith('image/')) {
            uploadError.value = 'Only image files are allowed';
            continue;
        }

        if (file.size > props.maxSize * 1024 * 1024) {
            uploadError.value = `File size must be less than ${props.maxSize}MB`;
            continue;
        }

        validFiles.push(file);
    }

    if (validFiles.length > 0) {
        uploadFiles(validFiles);
    }
};

const uploadFiles = async (files: File[]) => {
    uploadingFiles.value = files;
    uploadProgress.value = 0;

    try {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const formData = new FormData();
            formData.append('file', file);
            formData.append('collection', 'products');

            const response = await fetch('/dashboard/media/upload', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                },
                body: formData,
                credentials: 'same-origin',
            });

            if (response.ok) {
                const data = await response.json();
                if (data.data) {
                    mediaItems.value = [data.data, ...mediaItems.value];
                    if (canSelectMore.value) {
                        selectedItems.value = [...selectedItems.value, data.data];
                    }
                }
            } else {
                const errorData = await response.json().catch(() => ({}));
                uploadError.value = errorData.message || `Upload failed (${response.status})`;
                console.error('Upload failed:', errorData);
            }

            uploadProgress.value = ((i + 1) / files.length) * 100;
        }

        activeTab.value = 'library';
    } catch (error) {
        console.error('Error uploading file:', error);
        uploadError.value = error instanceof Error ? error.message : 'Failed to upload file';
    } finally {
        uploadingFiles.value = [];
        uploadProgress.value = 0;
    }
};

const handleDrop = (event: DragEvent) => {
    isDragging.value = false;
    handleFiles(event.dataTransfer?.files ?? null);
};

const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
    isDragging.value = true;
};

const handleDragLeave = () => {
    isDragging.value = false;
};

const openFileDialog = () => {
    fileInput.value?.click();
};

const handleSelect = () => {
    const urls = selectedItems.value.map(item => item.url);
    emit('select', urls);
    open.value = false;
    selectedItems.value = [];
};

const handleCancel = () => {
    emit('cancel');
    open.value = false;
    selectedItems.value = [];
};

const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Fetch media when modal opens
watch(open, (isOpen) => {
    if (isOpen) {
        fetchMedia();
    }
});
</script>

<template>
    <Dialog v-model:open="open">
        <DialogContent class="sm:max-w-[900px] max-h-[85vh] flex flex-col p-0">
            <DialogHeader class="px-6 pt-6 pb-4 border-b">
                <DialogTitle>Media Library</DialogTitle>
                <DialogDescription>
                    Select images from your library or upload new ones
                </DialogDescription>
            </DialogHeader>

            <!-- Tabs -->
            <div class="flex border-b px-6">
                <button
                    type="button"
                    class="px-4 py-2.5 text-sm font-medium border-b-2 transition-colors"
                    :class="activeTab === 'upload'
                        ? 'border-primary text-primary'
                        : 'border-transparent text-muted-foreground hover:text-foreground'"
                    @click="activeTab = 'upload'"
                >
                    <Upload class="inline-block w-4 h-4 mr-2" />
                    Upload files
                </button>
                <button
                    type="button"
                    class="px-4 py-2.5 text-sm font-medium border-b-2 transition-colors"
                    :class="activeTab === 'library'
                        ? 'border-primary text-primary'
                        : 'border-transparent text-muted-foreground hover:text-foreground'"
                    @click="activeTab = 'library'"
                >
                    <Image class="inline-block w-4 h-4 mr-2" />
                    Media library
                </button>
            </div>

            <!-- Content -->
            <div class="flex-1 overflow-hidden">
                <!-- Upload Tab -->
                <div v-if="activeTab === 'upload'" class="p-6">
                    <div
                        class="relative cursor-pointer rounded-lg border-2 border-dashed p-12 text-center transition-colors"
                        :class="[
                            isDragging
                                ? 'border-primary bg-primary/5'
                                : 'border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/50'
                        ]"
                        @click="openFileDialog"
                        @drop.prevent="handleDrop"
                        @dragover="handleDragOver"
                        @dragleave="handleDragLeave"
                    >
                        <input
                            ref="fileInput"
                            type="file"
                            :accept="accept"
                            :multiple="multiple"
                            class="hidden"
                            @change="handleFileSelect"
                        />

                        <div class="flex flex-col items-center gap-4">
                            <div class="rounded-full bg-muted p-4">
                                <Upload class="h-8 w-8 text-muted-foreground" />
                            </div>
                            <div class="space-y-2">
                                <p class="text-lg font-medium">
                                    Drop files to upload
                                </p>
                                <p class="text-sm text-muted-foreground">
                                    or click to select files
                                </p>
                                <p class="text-xs text-muted-foreground">
                                    Maximum file size: {{ maxSize }}MB
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Upload Progress -->
                    <div v-if="uploadingFiles.length > 0" class="mt-4 space-y-2">
                        <p class="text-sm font-medium">Uploading {{ uploadingFiles.length }} file(s)...</p>
                        <div class="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                                class="h-full bg-primary transition-all duration-300"
                                :style="{ width: `${uploadProgress}%` }"
                            />
                        </div>
                    </div>

                    <p v-if="uploadError" class="mt-4 text-sm text-destructive">
                        {{ uploadError }}
                    </p>
                </div>

                <!-- Library Tab -->
                <div v-if="activeTab === 'library'" class="flex flex-col h-[400px]">
                    <!-- Search & Refresh -->
                    <div class="flex items-center gap-2 px-6 py-3 border-b">
                        <div class="relative flex-1">
                            <Search class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                v-model="searchQuery"
                                placeholder="Search media..."
                                class="pl-9"
                            />
                        </div>
                        <Button variant="outline" size="icon" @click="fetchMedia" :disabled="isLoading">
                            <RefreshCw class="h-4 w-4" :class="{ 'animate-spin': isLoading }" />
                        </Button>
                    </div>

                    <!-- Media Grid -->
                    <ScrollArea class="flex-1 px-6 py-4">
                        <!-- Loading State -->
                        <div v-if="isLoading" class="grid grid-cols-5 gap-3">
                            <Skeleton v-for="i in 10" :key="i" class="aspect-square rounded-lg" />
                        </div>

                        <!-- Empty State -->
                        <div v-else-if="filteredMedia.length === 0" class="flex flex-col items-center justify-center h-full text-center py-12">
                            <Image class="h-12 w-12 text-muted-foreground mb-4" />
                            <p class="text-sm font-medium">No media found</p>
                            <p class="text-sm text-muted-foreground">
                                {{ searchQuery ? 'Try a different search term' : 'Upload some images to get started' }}
                            </p>
                        </div>

                        <!-- Media Items -->
                        <div v-else class="grid grid-cols-5 gap-3">
                            <div
                                v-for="item in filteredMedia"
                                :key="item.id"
                                class="group relative aspect-square cursor-pointer rounded-lg overflow-hidden border-2 transition-all"
                                :class="isSelected(item)
                                    ? 'border-primary ring-2 ring-primary/20'
                                    : 'border-transparent hover:border-muted-foreground/50'"
                                @click="toggleSelect(item)"
                            >
                                <img
                                    :src="item.thumb_url || item.url"
                                    :alt="item.name"
                                    class="h-full w-full object-cover"
                                />

                                <!-- Selected Overlay -->
                                <div
                                    v-if="isSelected(item)"
                                    class="absolute inset-0 bg-primary/20 flex items-center justify-center"
                                >
                                    <div class="rounded-full bg-primary p-1">
                                        <Check class="h-4 w-4 text-primary-foreground" />
                                    </div>
                                </div>

                                <!-- Hover Overlay -->
                                <div
                                    v-else
                                    class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                                >
                                    <div class="rounded-full bg-white/90 p-1">
                                        <Check class="h-4 w-4 text-gray-600" />
                                    </div>
                                </div>

                                <!-- File Info on Hover -->
                                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p class="text-xs text-white truncate">{{ item.name }}</p>
                                    <p class="text-[10px] text-white/70">{{ item.size_formatted || formatBytes(item.size) }}</p>
                                </div>
                            </div>
                        </div>
                    </ScrollArea>
                </div>
            </div>

            <!-- Footer -->
            <DialogFooter class="px-6 py-4 border-t">
                <div class="flex items-center justify-between w-full">
                    <p class="text-sm text-muted-foreground">
                        {{ selectedItems.length }} {{ selectedItems.length === 1 ? 'item' : 'items' }} selected
                    </p>
                    <div class="flex gap-2">
                        <Button variant="outline" @click="handleCancel">
                            Cancel
                        </Button>
                        <Button
                            :disabled="selectedItems.length === 0"
                            @click="handleSelect"
                        >
                            Select
                        </Button>
                    </div>
                </div>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
