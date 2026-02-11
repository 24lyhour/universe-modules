<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import type { InertiaForm } from '@inertiajs/vue3';
import { Plus, Trash2 } from 'lucide-vue-next';

export interface FooterFormData {
    title: string;
    description: string;
    copyright_text: string;
    logo: string;
    social_links: { platform: string; url: string; icon?: string }[];
    contact_email: string;
    contact_phone: string;
    contact_address: string;
    quick_links: { label: string; url: string }[];
    newsletter_enabled: boolean;
    newsletter_title: string;
    newsletter_description: string;
    columns: { title: string; links: { label: string; url: string }[] }[];
    is_active: boolean;
    sort_order: number;
}

const model = defineModel<InertiaForm<FooterFormData>>({ required: true });

const addSocialLink = () => {
    model.value.social_links.push({ platform: '', url: '', icon: '' });
};

const removeSocialLink = (index: number) => {
    model.value.social_links.splice(index, 1);
};

const addQuickLink = () => {
    model.value.quick_links.push({ label: '', url: '' });
};

const removeQuickLink = (index: number) => {
    model.value.quick_links.splice(index, 1);
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
                    <Input id="title" v-model="model.title" placeholder="Main Footer" />
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
                    placeholder="Brief description for the footer section"
                    rows="2"
                    class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
            </div>
            <div class="space-y-2">
                <Label for="copyright_text">Copyright Text</Label>
                <Input id="copyright_text" v-model="model.copyright_text" placeholder="© 2024 Company Name. All rights reserved." />
            </div>
        </div>

        <!-- Logo -->
        <div class="space-y-4">
            <h3 class="text-sm font-medium text-muted-foreground">Logo</h3>
            <div class="space-y-2">
                <Label for="logo">Logo URL</Label>
                <Input id="logo" v-model="model.logo" placeholder="https://example.com/logo.png" />
            </div>
            <div v-if="model.logo" class="mt-2 h-12 w-auto overflow-hidden rounded border bg-muted p-2">
                <img :src="model.logo" alt="Logo Preview" class="h-full w-auto object-contain" />
            </div>
        </div>

        <!-- Contact Info -->
        <div class="space-y-4">
            <h3 class="text-sm font-medium text-muted-foreground">Contact Information</h3>
            <div class="grid gap-4 sm:grid-cols-2">
                <div class="space-y-2">
                    <Label for="contact_email">Email</Label>
                    <Input id="contact_email" v-model="model.contact_email" type="email" placeholder="contact@example.com" />
                </div>
                <div class="space-y-2">
                    <Label for="contact_phone">Phone</Label>
                    <Input id="contact_phone" v-model="model.contact_phone" placeholder="+1 234 567 890" />
                </div>
            </div>
            <div class="space-y-2">
                <Label for="contact_address">Address</Label>
                <textarea
                    id="contact_address"
                    v-model="model.contact_address"
                    placeholder="123 Main St, City, Country"
                    rows="2"
                    class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
            </div>
        </div>

        <!-- Social Links -->
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium text-muted-foreground">Social Links</h3>
                <Button type="button" variant="outline" size="sm" @click="addSocialLink">
                    <Plus class="mr-1 h-3 w-3" /> Add Link
                </Button>
            </div>
            <div v-if="model.social_links.length > 0" class="space-y-3">
                <div v-for="(item, index) in model.social_links" :key="index" class="flex items-center gap-2 rounded-lg border p-3">
                    <div class="flex-1 grid gap-2 sm:grid-cols-3">
                        <Input v-model="item.platform" placeholder="Platform (e.g., Facebook)" />
                        <Input v-model="item.url" placeholder="URL" />
                        <Input v-model="item.icon" placeholder="Icon (optional)" />
                    </div>
                    <Button type="button" variant="ghost" size="icon" @click="removeSocialLink(index)">
                        <Trash2 class="h-4 w-4 text-destructive" />
                    </Button>
                </div>
            </div>
            <p v-else class="text-sm text-muted-foreground">No social links added yet.</p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium text-muted-foreground">Quick Links</h3>
                <Button type="button" variant="outline" size="sm" @click="addQuickLink">
                    <Plus class="mr-1 h-3 w-3" /> Add Link
                </Button>
            </div>
            <div v-if="model.quick_links.length > 0" class="space-y-3">
                <div v-for="(item, index) in model.quick_links" :key="index" class="flex items-center gap-2 rounded-lg border p-3">
                    <div class="flex-1 grid gap-2 sm:grid-cols-2">
                        <Input v-model="item.label" placeholder="Label" />
                        <Input v-model="item.url" placeholder="URL" />
                    </div>
                    <Button type="button" variant="ghost" size="icon" @click="removeQuickLink(index)">
                        <Trash2 class="h-4 w-4 text-destructive" />
                    </Button>
                </div>
            </div>
            <p v-else class="text-sm text-muted-foreground">No quick links added yet.</p>
        </div>

        <!-- Newsletter -->
        <div class="space-y-4">
            <h3 class="text-sm font-medium text-muted-foreground">Newsletter</h3>
            <div class="flex items-center space-x-2">
                <Checkbox id="newsletter_enabled" :checked="model.newsletter_enabled" @update:checked="model.newsletter_enabled = $event" />
                <Label for="newsletter_enabled" class="cursor-pointer">Enable Newsletter Section</Label>
            </div>
            <div v-if="model.newsletter_enabled" class="grid gap-4 sm:grid-cols-2">
                <div class="space-y-2">
                    <Label for="newsletter_title">Newsletter Title</Label>
                    <Input id="newsletter_title" v-model="model.newsletter_title" placeholder="Subscribe to our newsletter" />
                </div>
                <div class="space-y-2">
                    <Label for="newsletter_description">Newsletter Description</Label>
                    <Input id="newsletter_description" v-model="model.newsletter_description" placeholder="Get the latest updates" />
                </div>
            </div>
        </div>

        <!-- Options -->
        <div class="space-y-4">
            <h3 class="text-sm font-medium text-muted-foreground">Options</h3>
            <div class="flex items-center space-x-2">
                <Checkbox id="is_active" :checked="model.is_active" @update:checked="model.is_active = $event" />
                <Label for="is_active" class="cursor-pointer">Active</Label>
            </div>
        </div>
    </div>
</template>
