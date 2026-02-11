<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import type { InertiaForm } from '@inertiajs/vue3';
import { Plus, Trash2 } from 'lucide-vue-next';

export interface HeaderFormData {
    title: string;
    logo: string;
    logo_alt: string;
    navigation: { label: string; url: string; target?: string }[];
    actions: { label: string; url: string; variant?: string }[];
    style: string;
    position: string;
    background_color: string;
    text_color: string;
    is_transparent: boolean;
    show_search: boolean;
    show_language_switcher: boolean;
    is_active: boolean;
    sort_order: number;
}

const model = defineModel<InertiaForm<HeaderFormData>>({ required: true });

const styleOptions = [
    { value: 'default', label: 'Default' },
    { value: 'minimal', label: 'Minimal' },
    { value: 'centered', label: 'Centered' },
    { value: 'split', label: 'Split' },
];

const positionOptions = [
    { value: 'fixed', label: 'Fixed' },
    { value: 'sticky', label: 'Sticky' },
    { value: 'static', label: 'Static' },
    { value: 'absolute', label: 'Absolute' },
];

const addNavItem = () => {
    model.value.navigation.push({ label: '', url: '', target: '_self' });
};

const removeNavItem = (index: number) => {
    model.value.navigation.splice(index, 1);
};

const addActionItem = () => {
    model.value.actions.push({ label: '', url: '', variant: 'primary' });
};

const removeActionItem = (index: number) => {
    model.value.actions.splice(index, 1);
};
</script>

<template>
    <div class="space-y-6">
        <!-- Basic Info -->
        <div class="space-y-4">
            <h3 class="text-sm font-medium text-muted-foreground">Basic Information</h3>
            <div class="grid gap-4 sm:grid-cols-2">
                <div class="space-y-2">
                    <Label for="title">Title</Label>
                    <Input id="title" v-model="model.title" placeholder="Main Header" />
                    <p v-if="model.errors.title" class="text-sm text-destructive">{{ model.errors.title }}</p>
                </div>
                <div class="space-y-2">
                    <Label for="sort_order">Sort Order</Label>
                    <Input id="sort_order" v-model.number="model.sort_order" type="number" placeholder="0" />
                </div>
            </div>
        </div>

        <!-- Logo -->
        <div class="space-y-4">
            <h3 class="text-sm font-medium text-muted-foreground">Logo</h3>
            <div class="grid gap-4 sm:grid-cols-2">
                <div class="space-y-2">
                    <Label for="logo">Logo URL</Label>
                    <Input id="logo" v-model="model.logo" placeholder="https://example.com/logo.png" />
                </div>
                <div class="space-y-2">
                    <Label for="logo_alt">Logo Alt Text</Label>
                    <Input id="logo_alt" v-model="model.logo_alt" placeholder="Company Logo" />
                </div>
            </div>
            <div v-if="model.logo" class="mt-2 h-12 w-auto overflow-hidden rounded border bg-muted p-2">
                <img :src="model.logo" :alt="model.logo_alt || 'Logo Preview'" class="h-full w-auto object-contain" />
            </div>
        </div>

        <!-- Style & Position -->
        <div class="space-y-4">
            <h3 class="text-sm font-medium text-muted-foreground">Appearance</h3>
            <div class="grid gap-4 sm:grid-cols-2">
                <div class="space-y-2">
                    <Label for="style">Style</Label>
                    <select
                        id="style"
                        v-model="model.style"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        <option value="" disabled>Select style</option>
                        <option v-for="option in styleOptions" :key="option.value" :value="option.value">
                            {{ option.label }}
                        </option>
                    </select>
                </div>
                <div class="space-y-2">
                    <Label for="position">Position</Label>
                    <select
                        id="position"
                        v-model="model.position"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        <option value="" disabled>Select position</option>
                        <option v-for="option in positionOptions" :key="option.value" :value="option.value">
                            {{ option.label }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="grid gap-4 sm:grid-cols-2">
                <div class="space-y-2">
                    <Label for="background_color">Background Color</Label>
                    <Input id="background_color" v-model="model.background_color" placeholder="#ffffff" />
                </div>
                <div class="space-y-2">
                    <Label for="text_color">Text Color</Label>
                    <Input id="text_color" v-model="model.text_color" placeholder="#000000" />
                </div>
            </div>
        </div>

        <!-- Navigation Items -->
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium text-muted-foreground">Navigation Items</h3>
                <Button type="button" variant="outline" size="sm" @click="addNavItem">
                    <Plus class="mr-1 h-3 w-3" /> Add Item
                </Button>
            </div>
            <div v-if="model.navigation.length > 0" class="space-y-3">
                <div v-for="(item, index) in model.navigation" :key="index" class="flex items-center gap-2 rounded-lg border p-3">
                    <div class="flex-1 grid gap-2 sm:grid-cols-3">
                        <Input v-model="item.label" placeholder="Label" />
                        <Input v-model="item.url" placeholder="URL" />
                        <select
                            v-model="item.target"
                            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                            <option value="_self">Same Tab</option>
                            <option value="_blank">New Tab</option>
                        </select>
                    </div>
                    <Button type="button" variant="ghost" size="icon" @click="removeNavItem(index)">
                        <Trash2 class="h-4 w-4 text-destructive" />
                    </Button>
                </div>
            </div>
            <p v-else class="text-sm text-muted-foreground">No navigation items added yet.</p>
        </div>

        <!-- Action Buttons -->
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium text-muted-foreground">Action Buttons</h3>
                <Button type="button" variant="outline" size="sm" @click="addActionItem">
                    <Plus class="mr-1 h-3 w-3" /> Add Action
                </Button>
            </div>
            <div v-if="model.actions.length > 0" class="space-y-3">
                <div v-for="(item, index) in model.actions" :key="index" class="flex items-center gap-2 rounded-lg border p-3">
                    <div class="flex-1 grid gap-2 sm:grid-cols-3">
                        <Input v-model="item.label" placeholder="Label" />
                        <Input v-model="item.url" placeholder="URL" />
                        <select
                            v-model="item.variant"
                            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                            <option value="primary">Primary</option>
                            <option value="secondary">Secondary</option>
                            <option value="outline">Outline</option>
                        </select>
                    </div>
                    <Button type="button" variant="ghost" size="icon" @click="removeActionItem(index)">
                        <Trash2 class="h-4 w-4 text-destructive" />
                    </Button>
                </div>
            </div>
            <p v-else class="text-sm text-muted-foreground">No action buttons added yet.</p>
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
                    <Checkbox id="is_transparent" :checked="model.is_transparent" @update:checked="model.is_transparent = $event" />
                    <Label for="is_transparent" class="cursor-pointer">Transparent</Label>
                </div>
                <div class="flex items-center space-x-2">
                    <Checkbox id="show_search" :checked="model.show_search" @update:checked="model.show_search = $event" />
                    <Label for="show_search" class="cursor-pointer">Show Search</Label>
                </div>
                <div class="flex items-center space-x-2">
                    <Checkbox id="show_language_switcher" :checked="model.show_language_switcher" @update:checked="model.show_language_switcher = $event" />
                    <Label for="show_language_switcher" class="cursor-pointer">Language Switcher</Label>
                </div>
            </div>
        </div>
    </div>
</template>
