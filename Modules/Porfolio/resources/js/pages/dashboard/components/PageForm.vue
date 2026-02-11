<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import type { InertiaForm } from '@inertiajs/vue3';
import { ref } from 'vue';

export interface PageFormData {
    title: string;
    description: string;
    content: string;
    parent_id: number | null;
    header_id: number | null;
    footer_id: number | null;
    meta_title: string;
    meta_description: string;
    meta_keywords: string[];
    featured_image: string;
    template: string;
    layout: string;
    settings: Record<string, unknown>;
    is_homepage: boolean;
    is_active: boolean;
    is_in_menu: boolean;
    menu_order: number;
}

interface Props {
    headers: { id: number; title: string }[];
    footers: { id: number; title: string }[];
    pages: { id: number; title: string }[];
    templates: string[];
}

const props = defineProps<Props>();
const model = defineModel<InertiaForm<PageFormData>>({ required: true });

const keywordInput = ref('');

const addKeyword = () => {
    if (keywordInput.value && !model.value.meta_keywords.includes(keywordInput.value.trim())) {
        model.value.meta_keywords.push(keywordInput.value.trim());
        keywordInput.value = '';
    }
};

const removeKeyword = (keyword: string) => {
    model.value.meta_keywords = model.value.meta_keywords.filter((k) => k !== keyword);
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
                    <Input id="title" v-model="model.title" placeholder="Page Title" />
                    <p v-if="model.errors.title" class="text-sm text-destructive">{{ model.errors.title }}</p>
                </div>
                <div class="space-y-2">
                    <Label for="menu_order">Menu Order</Label>
                    <Input id="menu_order" v-model.number="model.menu_order" type="number" placeholder="0" />
                </div>
            </div>
            <div class="space-y-2">
                <Label for="description">Description</Label>
                <textarea
                    id="description"
                    v-model="model.description"
                    placeholder="Brief description of the page"
                    rows="2"
                    class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
            </div>
            <div class="space-y-2">
                <Label for="content">Content</Label>
                <textarea
                    id="content"
                    v-model="model.content"
                    placeholder="Page content (HTML supported)"
                    rows="5"
                    class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 font-mono"
                />
            </div>
        </div>

        <!-- Layout & Template -->
        <div class="space-y-4">
            <h3 class="text-sm font-medium text-muted-foreground">Layout & Template</h3>
            <div class="grid gap-4 sm:grid-cols-2">
                <div class="space-y-2">
                    <Label for="template">Template <span class="text-destructive">*</span></Label>
                    <select
                        id="template"
                        v-model="model.template"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        <option value="" disabled>Select template</option>
                        <option v-for="template in templates" :key="template" :value="template">
                            {{ template }}
                        </option>
                    </select>
                </div>
                <div class="space-y-2">
                    <Label for="layout">Layout</Label>
                    <select
                        id="layout"
                        v-model="model.layout"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        <option value="" disabled>Select layout</option>
                        <option value="default">Default</option>
                        <option value="full-width">Full Width</option>
                        <option value="sidebar-left">Sidebar Left</option>
                        <option value="sidebar-right">Sidebar Right</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Parent & Components -->
        <div class="space-y-4">
            <h3 class="text-sm font-medium text-muted-foreground">Hierarchy & Components</h3>
            <div class="grid gap-4 sm:grid-cols-3">
                <div class="space-y-2">
                    <Label for="parent_id">Parent Page</Label>
                    <select
                        id="parent_id"
                        v-model="model.parent_id"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        <option :value="null">None</option>
                        <option v-for="page in pages" :key="page.id" :value="page.id">
                            {{ page.title }}
                        </option>
                    </select>
                </div>
                <div class="space-y-2">
                    <Label for="header_id">Header</Label>
                    <select
                        id="header_id"
                        v-model="model.header_id"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        <option :value="null">Default</option>
                        <option v-for="header in headers" :key="header.id" :value="header.id">
                            {{ header.title || `Header #${header.id}` }}
                        </option>
                    </select>
                </div>
                <div class="space-y-2">
                    <Label for="footer_id">Footer</Label>
                    <select
                        id="footer_id"
                        v-model="model.footer_id"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        <option :value="null">Default</option>
                        <option v-for="footer in footers" :key="footer.id" :value="footer.id">
                            {{ footer.title || `Footer #${footer.id}` }}
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <!-- SEO -->
        <div class="space-y-4">
            <h3 class="text-sm font-medium text-muted-foreground">SEO Settings</h3>
            <div class="grid gap-4 sm:grid-cols-2">
                <div class="space-y-2">
                    <Label for="meta_title">Meta Title</Label>
                    <Input id="meta_title" v-model="model.meta_title" placeholder="SEO title" />
                </div>
                <div class="space-y-2">
                    <Label for="featured_image">Featured Image URL</Label>
                    <Input id="featured_image" v-model="model.featured_image" placeholder="https://example.com/image.jpg" />
                </div>
            </div>
            <div class="space-y-2">
                <Label for="meta_description">Meta Description</Label>
                <textarea
                    id="meta_description"
                    v-model="model.meta_description"
                    placeholder="SEO description (150-160 characters recommended)"
                    rows="2"
                    class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
            </div>
            <div class="space-y-2">
                <Label for="meta_keywords">Meta Keywords</Label>
                <div class="flex gap-2">
                    <Input
                        id="meta_keywords"
                        v-model="keywordInput"
                        placeholder="Add a keyword"
                        @keydown.enter.prevent="addKeyword"
                    />
                    <Button type="button" variant="outline" @click="addKeyword">Add</Button>
                </div>
                <div v-if="model.meta_keywords.length > 0" class="mt-2 flex flex-wrap gap-2">
                    <span
                        v-for="keyword in model.meta_keywords"
                        :key="keyword"
                        class="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                    >
                        {{ keyword }}
                        <button
                            type="button"
                            class="ml-1 rounded-full p-0.5 hover:bg-primary/20"
                            @click="removeKeyword(keyword)"
                        >
                            &times;
                        </button>
                    </span>
                </div>
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
                    <Checkbox id="is_homepage" :checked="model.is_homepage" @update:checked="model.is_homepage = $event" />
                    <Label for="is_homepage" class="cursor-pointer">Set as Homepage</Label>
                </div>
                <div class="flex items-center space-x-2">
                    <Checkbox id="is_in_menu" :checked="model.is_in_menu" @update:checked="model.is_in_menu = $event" />
                    <Label for="is_in_menu" class="cursor-pointer">Show in Menu</Label>
                </div>
            </div>
        </div>
    </div>
</template>
