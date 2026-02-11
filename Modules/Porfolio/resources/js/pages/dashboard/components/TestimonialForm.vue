<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import type { InertiaForm } from '@inertiajs/vue3';
import { Star } from 'lucide-vue-next';

export interface TestimonialFormData {
    name: string;
    position: string;
    company: string;
    avatar: string;
    content: string;
    rating: number;
    is_featured: boolean;
    is_active: boolean;
    sort_order: number;
}

const model = defineModel<InertiaForm<TestimonialFormData>>({ required: true });

const setRating = (rating: number) => {
    model.value.rating = rating;
};
</script>

<template>
    <div class="space-y-6">
        <!-- Client Info -->
        <div class="space-y-4">
            <h3 class="text-sm font-medium text-muted-foreground">Client Information</h3>
            <div class="grid gap-4 sm:grid-cols-2">
                <div class="space-y-2">
                    <Label for="name">Name <span class="text-destructive">*</span></Label>
                    <Input id="name" v-model="model.name" placeholder="John Doe" />
                    <p v-if="model.errors.name" class="text-sm text-destructive">{{ model.errors.name }}</p>
                </div>
                <div class="space-y-2">
                    <Label for="avatar">Avatar URL</Label>
                    <Input id="avatar" v-model="model.avatar" placeholder="https://example.com/avatar.jpg" />
                </div>
            </div>
            <div class="grid gap-4 sm:grid-cols-2">
                <div class="space-y-2">
                    <Label for="position">Position</Label>
                    <Input id="position" v-model="model.position" placeholder="CEO" />
                </div>
                <div class="space-y-2">
                    <Label for="company">Company</Label>
                    <Input id="company" v-model="model.company" placeholder="Acme Inc." />
                </div>
            </div>
            <div v-if="model.avatar" class="flex items-center gap-4">
                <div class="h-16 w-16 overflow-hidden rounded-full bg-muted">
                    <img :src="model.avatar" :alt="model.name || 'Avatar'" class="h-full w-full object-cover" />
                </div>
                <span class="text-sm text-muted-foreground">Avatar preview</span>
            </div>
        </div>

        <!-- Testimonial Content -->
        <div class="space-y-4">
            <h3 class="text-sm font-medium text-muted-foreground">Testimonial</h3>
            <div class="space-y-2">
                <Label for="content">Content <span class="text-destructive">*</span></Label>
                <textarea
                    id="content"
                    v-model="model.content"
                    placeholder="What the client said about your services..."
                    rows="4"
                    class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <p v-if="model.errors.content" class="text-sm text-destructive">{{ model.errors.content }}</p>
            </div>
        </div>

        <!-- Rating -->
        <div class="space-y-4">
            <h3 class="text-sm font-medium text-muted-foreground">Rating</h3>
            <div class="space-y-2">
                <Label>Rating <span class="text-destructive">*</span></Label>
                <div class="flex items-center gap-1">
                    <button
                        v-for="i in 5"
                        :key="i"
                        type="button"
                        class="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                        @click="setRating(i)"
                    >
                        <Star
                            class="h-8 w-8 transition-colors"
                            :class="i <= model.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300 hover:text-yellow-400'"
                        />
                    </button>
                    <span class="ml-2 text-sm text-muted-foreground">{{ model.rating }} / 5</span>
                </div>
            </div>
        </div>

        <!-- Settings -->
        <div class="space-y-4">
            <h3 class="text-sm font-medium text-muted-foreground">Settings</h3>
            <div class="space-y-2">
                <Label for="sort_order">Sort Order</Label>
                <Input id="sort_order" v-model.number="model.sort_order" type="number" placeholder="0" class="w-32" />
            </div>
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
