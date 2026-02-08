<script setup lang="ts">
import { ref, computed } from 'vue';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ImagePlus, X } from 'lucide-vue-next';
import { MediaLibraryModal } from '../MediaLibrary';

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

const showMediaLibrary = ref(false);

const canAddMore = computed(() => {
    return props.multiple ? model.value.length < props.maxFiles : model.value.length < 1;
});

const openMediaLibrary = () => {
    showMediaLibrary.value = true;
};

const handleMediaSelect = (urls: string[]) => {
    const availableSlots = props.multiple
        ? props.maxFiles - model.value.length
        : model.value.length < 1 ? 1 : 0;

    const urlsToAdd = urls.slice(0, availableSlots);
    model.value = [...model.value, ...urlsToAdd];
    showMediaLibrary.value = false;
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
            class="relative cursor-pointer rounded-lg border-2 border-dashed p-6 text-center transition-colors border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/50"
            @click="openMediaLibrary"
        >
            <div class="flex flex-col items-center gap-2">
                <div class="rounded-full bg-muted p-3">
                    <ImagePlus class="h-6 w-6 text-muted-foreground" />
                </div>
                <div class="space-y-1">
                    <p class="text-sm font-medium">
                        Click to select images from Media Library
                    </p>
                    <p class="text-xs text-muted-foreground">
                        {{ multiple ? `Up to ${maxFiles} images` : 'Single image' }}, max {{ maxSize }}MB each
                    </p>
                </div>
            </div>
        </div>

        <!-- Error Message -->
        <p v-if="error" class="text-sm text-destructive">
            {{ error }}
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
                @click="openMediaLibrary"
            >
                <ImagePlus class="h-6 w-6 text-muted-foreground" />
            </div>
        </div>

        <!-- Media Library Modal -->
        <MediaLibraryModal
            v-model:open="showMediaLibrary"
            :multiple="multiple"
            :max-select="multiple ? maxFiles - model.length : 1"
            :accept="accept"
            :max-size="maxSize"
            @select="handleMediaSelect"
        />
    </div>
</template>
