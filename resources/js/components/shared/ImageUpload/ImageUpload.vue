<script setup lang="ts">
import { ref, computed } from 'vue';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ImagePlus, X, Upload } from 'lucide-vue-next';

interface Props {
    label?: string;
    multiple?: boolean;
    accept?: string;
    maxSize?: number; // in MB
    maxFiles?: number;
    error?: string;
}

const props = withDefaults(defineProps<Props>(), {
    label: 'Images',
    multiple: true,
    accept: 'image/*',
    maxSize: 5,
    maxFiles: 10,
});

const model = defineModel<string[]>({ default: () => [] });

const fileInput = ref<HTMLInputElement | null>(null);
const isDragging = ref(false);
const uploadError = ref('');

const canAddMore = computed(() => {
    return props.multiple ? model.value.length < props.maxFiles : model.value.length < 1;
});

const openFileDialog = () => {
    fileInput.value?.click();
};

const handleFiles = (files: FileList | null) => {
    if (!files) return;
    uploadError.value = '';

    const validFiles: File[] = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Check file type
        if (!file.type.startsWith('image/')) {
            uploadError.value = 'Only image files are allowed';
            continue;
        }

        // Check file size
        if (file.size > props.maxSize * 1024 * 1024) {
            uploadError.value = `File size must be less than ${props.maxSize}MB`;
            continue;
        }

        // Check max files
        if (!props.multiple && model.value.length >= 1) {
            break;
        }
        if (props.multiple && model.value.length + validFiles.length >= props.maxFiles) {
            uploadError.value = `Maximum ${props.maxFiles} files allowed`;
            break;
        }

        validFiles.push(file);
    }

    // Convert files to base64 URLs
    validFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target?.result) {
                model.value = [...model.value, e.target.result as string];
            }
        };
        reader.readAsDataURL(file);
    });
};

const handleFileSelect = (event: Event) => {
    const input = event.target as HTMLInputElement;
    handleFiles(input.files);
    // Reset input so same file can be selected again
    input.value = '';
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

const removeImage = (index: number) => {
    model.value = model.value.filter((_, i) => i !== index);
};
</script>

<template>
    <div class="space-y-3">
        <Label v-if="label">{{ label }}</Label>

        <!-- Upload Area -->
        <div
            v-if="canAddMore"
            class="relative cursor-pointer rounded-lg border-2 border-dashed p-6 text-center transition-colors"
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

            <div class="flex flex-col items-center gap-2">
                <div class="rounded-full bg-muted p-3">
                    <Upload class="h-6 w-6 text-muted-foreground" />
                </div>
                <div class="space-y-1">
                    <p class="text-sm font-medium">
                        Drop images here or click to upload
                    </p>
                    <p class="text-xs text-muted-foreground">
                        {{ multiple ? `Up to ${maxFiles} images` : 'Single image' }}, max {{ maxSize }}MB each
                    </p>
                </div>
            </div>
        </div>

        <!-- Error Message -->
        <p v-if="uploadError || error" class="text-sm text-destructive">
            {{ uploadError || error }}
        </p>

        <!-- Image Preview Grid -->
        <div v-if="model.length > 0" class="grid grid-cols-3 gap-3 sm:grid-cols-4">
            <div
                v-for="(image, index) in model"
                :key="index"
                class="group relative aspect-square overflow-hidden rounded-lg border bg-muted"
            >
                <img
                    :src="image"
                    alt="Product image"
                    class="h-full w-full object-cover"
                />
                <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    class="absolute right-1 top-1 h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                    @click.stop="removeImage(index)"
                >
                    <X class="h-3 w-3" />
                </Button>
                <div
                    v-if="index === 0"
                    class="absolute bottom-1 left-1 rounded bg-primary px-1.5 py-0.5 text-[10px] font-medium text-primary-foreground"
                >
                    Main
                </div>
            </div>

            <!-- Add More Button -->
            <div
                v-if="canAddMore && model.length > 0"
                class="flex aspect-square cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 transition-colors hover:border-primary/50 hover:bg-muted/50"
                @click="openFileDialog"
            >
                <ImagePlus class="h-6 w-6 text-muted-foreground" />
            </div>
        </div>
    </div>
</template>
