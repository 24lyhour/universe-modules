<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import type { InertiaForm } from '@inertiajs/vue3';
import { ref } from 'vue';

export interface PortfolioFormData {
    title: string;
    slug: string;
    description: string;
    content: string;
    featured_image: string;
    category: string;
    industry: string;
    experience_level: string;
    location: string;
    tags: string[];
    client_name: string;
    project_url: string;
    project_date: string;
    is_featured: boolean;
    is_active: boolean;
    sort_order: number;
}

const model = defineModel<InertiaForm<PortfolioFormData>>({ required: true });

const tagInput = ref('');

const generateSlug = (title: string) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
};

const handleTitleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    model.value.title = target.value;
    model.value.slug = generateSlug(target.value);
};

const addTag = () => {
    if (tagInput.value && !model.value.tags.includes(tagInput.value.trim())) {
        model.value.tags.push(tagInput.value.trim());
        tagInput.value = '';
    }
};

const removeTag = (tag: string) => {
    model.value.tags = model.value.tags.filter((t) => t !== tag);
};
</script>

<template>
    <div class="space-y-4">
        <!-- Title & Slug -->
        <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
                <Label for="title">Title <span class="text-destructive">*</span></Label>
                <Input
                    id="title"
                    v-model="model.title"
                    placeholder="Project Title"
                    @input="handleTitleChange"
                />
                <p v-if="model.errors.title" class="text-sm text-destructive">
                    {{ model.errors.title }}
                </p>
            </div>
            <div class="space-y-2">
                <Label for="slug">Slug <span class="text-destructive">*</span></Label>
                <Input id="slug" v-model="model.slug" placeholder="project-title" />
                <p v-if="model.errors.slug" class="text-sm text-destructive">
                    {{ model.errors.slug }}
                </p>
            </div>
        </div>

        <!-- Description -->
        <div class="space-y-2">
            <Label for="description">Description</Label>
            <textarea
                id="description"
                v-model="model.description"
                placeholder="Brief description of the project"
                rows="3"
                class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
        </div>

        <!-- Content -->
        <div class="space-y-2">
            <Label for="content">Content</Label>
            <textarea
                id="content"
                v-model="model.content"
                placeholder="Detailed content about the project"
                rows="4"
                class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
        </div>

        <!-- Category & Industry -->
        <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
                <Label for="category">Category</Label>
                <Input id="category" v-model="model.category" placeholder="Web Development" />
            </div>
            <div class="space-y-2">
                <Label for="industry">Industry</Label>
                <Input id="industry" v-model="model.industry" placeholder="Technology" />
            </div>
        </div>

        <!-- Client & Project Date -->
        <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
                <Label for="client_name">Client Name</Label>
                <Input id="client_name" v-model="model.client_name" placeholder="Client Company" />
            </div>
            <div class="space-y-2">
                <Label for="project_date">Project Date</Label>
                <Input id="project_date" v-model="model.project_date" type="date" />
            </div>
        </div>

        <!-- Experience Level & Location -->
        <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
                <Label for="experience_level">Experience Level</Label>
                <Input id="experience_level" v-model="model.experience_level" placeholder="Senior / Junior / Mid" />
            </div>
            <div class="space-y-2">
                <Label for="location">Location</Label>
                <Input id="location" v-model="model.location" placeholder="Remote / New York" />
            </div>
        </div>

        <!-- Project URL -->
        <div class="space-y-2">
            <Label for="project_url">Project URL</Label>
            <Input id="project_url" v-model="model.project_url" placeholder="https://example.com" />
        </div>

        <!-- Featured Image -->
        <div class="space-y-2">
            <Label for="featured_image">Featured Image URL</Label>
            <Input id="featured_image" v-model="model.featured_image" placeholder="https://example.com/image.jpg" />
            <div v-if="model.featured_image" class="mt-2 aspect-video overflow-hidden rounded-lg border bg-muted">
                <img
                    :src="model.featured_image"
                    alt="Preview"
                    class="h-full w-full object-cover"
                    @error="(e: Event) => (e.target as HTMLImageElement).style.display = 'none'"
                />
            </div>
        </div>

        <!-- Tags -->
        <div class="space-y-2">
            <Label for="tags">Tags</Label>
            <div class="flex gap-2">
                <Input
                    id="tags"
                    v-model="tagInput"
                    placeholder="Add a tag"
                    @keydown.enter.prevent="addTag"
                />
                <Button type="button" variant="outline" @click="addTag">Add</Button>
            </div>
            <div v-if="model.tags.length > 0" class="mt-2 flex flex-wrap gap-2">
                <span
                    v-for="tag in model.tags"
                    :key="tag"
                    class="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                >
                    {{ tag }}
                    <button
                        type="button"
                        class="ml-1 rounded-full p-0.5 hover:bg-primary/20"
                        @click="removeTag(tag)"
                    >
                        &times;
                    </button>
                </span>
            </div>
        </div>

        <!-- Sort Order -->
        <div class="space-y-2">
            <Label for="sort_order">Sort Order</Label>
            <Input id="sort_order" v-model.number="model.sort_order" type="number" placeholder="0" />
        </div>

        <!-- Checkboxes -->
        <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
                <Checkbox
                    id="is_active"
                    :checked="model.is_active"
                    @update:checked="model.is_active = $event"
                />
                <Label for="is_active" class="cursor-pointer">Active</Label>
            </div>
            <div class="flex items-center space-x-2">
                <Checkbox
                    id="is_featured"
                    :checked="model.is_featured"
                    @update:checked="model.is_featured = $event"
                />
                <Label for="is_featured" class="cursor-pointer">Featured</Label>
            </div>
        </div>
    </div>
</template>
