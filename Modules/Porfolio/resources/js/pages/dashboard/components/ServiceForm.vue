<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import type { InertiaForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import { Plus, Trash2 } from 'lucide-vue-next';

export interface ServiceFormData {
    title: string;
    description: string;
    content: string;
    icon: string;
    image: string;
    features: string[];
    price: number | null;
    price_unit: string;
    is_featured: boolean;
    is_active: boolean;
    sort_order: number;
}

const model = defineModel<InertiaForm<ServiceFormData>>({ required: true });

const featureInput = ref('');

const addFeature = () => {
    if (featureInput.value && !model.value.features.includes(featureInput.value.trim())) {
        model.value.features.push(featureInput.value.trim());
        featureInput.value = '';
    }
};

const removeFeature = (feature: string) => {
    model.value.features = model.value.features.filter((f) => f !== feature);
};
</script>

<template>
    <div class="space-y-6">
        <!-- Basic Info -->
        <div class="space-y-4">
            <h3 class="text-sm font-medium text-muted-foreground">Basic Information</h3>
            <div class="grid gap-4 sm:grid-cols-2">
                <div class="space-y-2">
                    <Label for="title">Title <span class="text-destructive">*</span></Label>
                    <Input id="title" v-model="model.title" placeholder="Service Title" />
                    <p v-if="model.errors.title" class="text-sm text-destructive">{{ model.errors.title }}</p>
                </div>
                <div class="space-y-2">
                    <Label for="sort_order">Sort Order</Label>
                    <Input id="sort_order" v-model.number="model.sort_order" type="number" placeholder="0" />
                </div>
            </div>
            <div class="space-y-2">
                <Label for="description">Description</Label>
                <textarea
                    id="description"
                    v-model="model.description"
                    placeholder="Brief description of the service"
                    rows="2"
                    class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
            </div>
            <div class="space-y-2">
                <Label for="content">Content</Label>
                <textarea
                    id="content"
                    v-model="model.content"
                    placeholder="Detailed service description"
                    rows="4"
                    class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
            </div>
        </div>

        <!-- Media -->
        <div class="space-y-4">
            <h3 class="text-sm font-medium text-muted-foreground">Media</h3>
            <div class="grid gap-4 sm:grid-cols-2">
                <div class="space-y-2">
                    <Label for="icon">Icon</Label>
                    <Input id="icon" v-model="model.icon" placeholder="Icon name or emoji" />
                    <p class="text-xs text-muted-foreground">e.g., "code", "design", or emoji like "🎨"</p>
                </div>
                <div class="space-y-2">
                    <Label for="image">Image URL</Label>
                    <Input id="image" v-model="model.image" placeholder="https://example.com/image.jpg" />
                </div>
            </div>
            <div v-if="model.image" class="mt-2 aspect-video max-w-xs overflow-hidden rounded-lg border bg-muted">
                <img :src="model.image" alt="Preview" class="h-full w-full object-cover" />
            </div>
        </div>

        <!-- Pricing -->
        <div class="space-y-4">
            <h3 class="text-sm font-medium text-muted-foreground">Pricing</h3>
            <div class="grid gap-4 sm:grid-cols-2">
                <div class="space-y-2">
                    <Label for="price">Price</Label>
                    <Input id="price" v-model.number="model.price" type="number" step="0.01" placeholder="0.00" />
                </div>
                <div class="space-y-2">
                    <Label for="price_unit">Price Unit</Label>
                    <Input id="price_unit" v-model="model.price_unit" placeholder="e.g., hour, project, month" />
                </div>
            </div>
        </div>

        <!-- Features -->
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium text-muted-foreground">Features</h3>
            </div>
            <div class="flex gap-2">
                <Input
                    v-model="featureInput"
                    placeholder="Add a feature"
                    @keydown.enter.prevent="addFeature"
                />
                <Button type="button" variant="outline" @click="addFeature">
                    <Plus class="mr-1 h-3 w-3" /> Add
                </Button>
            </div>
            <div v-if="model.features.length > 0" class="space-y-2">
                <div
                    v-for="(feature, index) in model.features"
                    :key="index"
                    class="flex items-center justify-between gap-2 rounded-lg border p-2"
                >
                    <span class="text-sm">{{ feature }}</span>
                    <Button type="button" variant="ghost" size="icon" class="h-8 w-8" @click="removeFeature(feature)">
                        <Trash2 class="h-4 w-4 text-destructive" />
                    </Button>
                </div>
            </div>
            <p v-else class="text-sm text-muted-foreground">No features added yet.</p>
        </div>

        <!-- Options -->
        <div class="space-y-4">
            <h3 class="text-sm font-medium text-muted-foreground">Options</h3>
            <div class="flex flex-wrap items-center gap-6">
                <div class="flex items-center space-x-2">
                    <Checkbox id="is_active" :checked="model.is_active" @update:checked="model.is_active = $event" />
                    <Label for="is_active" class="cursor-pointer">Active</Label>
                </div>
                <div class="flex items-center space-x-2">
                    <Checkbox id="is_featured" :checked="model.is_featured" @update:checked="model.is_featured = $event" />
                    <Label for="is_featured" class="cursor-pointer">Featured</Label>
                </div>
            </div>
        </div>
    </div>
</template>
