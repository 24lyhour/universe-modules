<script setup lang="ts">
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Pencil, ExternalLink, Calendar, MapPin, Building2, Tag, Eye } from 'lucide-vue-next';
import { Link } from '@inertiajs/vue3';
import { useModal } from 'momentum-modal';
import { computed } from 'vue';
import * as porfolio from '@/routes/porfolio';

interface Portfolio {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    content: string | null;
    featured_image: string | null;
    category: string | null;
    industry: string | null;
    experience_level: string | null;
    location: string | null;
    tags: string[] | null;
    client_name: string | null;
    project_url: string | null;
    project_date: string | null;
    is_featured: boolean;
    is_active: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
}

interface Props {
    portfolio: Portfolio;
}

const props = defineProps<Props>();

// useModal from momentum-modal package
const { show, close, redirect } = useModal();

// Create a computed property for v-model:open binding
const isOpen = computed({
    get: () => show.value,
    set: (val: boolean) => {
        if (!val) {
            close();
            redirect();
        }
    },
});

const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

const previewPortfolio = () => {
    window.open(`/portfolio/${props.portfolio.slug}`, '_blank');
};
</script>

<template>
    <Dialog v-model:open="isOpen">
        <DialogContent class="max-w-3xl max-h-[90vh] p-0">
            <DialogHeader class="px-6 pt-6 pb-0">
                <div class="flex items-start justify-between">
                    <div>
                        <DialogTitle class="text-xl">{{ portfolio.title }}</DialogTitle>
                        <DialogDescription>{{ portfolio.slug }}</DialogDescription>
                    </div>
                    <div class="flex items-center gap-2">
                        <span
                            :class="[
                                'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
                                portfolio.is_active
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                                    : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
                            ]"
                        >
                            {{ portfolio.is_active ? 'Active' : 'Inactive' }}
                        </span>
                        <span
                            v-if="portfolio.is_featured"
                            class="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                        >
                            Featured
                        </span>
                    </div>
                </div>
            </DialogHeader>

            <ScrollArea class="max-h-[calc(90vh-180px)]">
                <div class="px-6 py-4 space-y-6">
                    <!-- Featured Image -->
                    <div v-if="portfolio.featured_image" class="aspect-video overflow-hidden rounded-lg">
                        <img
                            :src="portfolio.featured_image"
                            :alt="portfolio.title"
                            class="h-full w-full object-cover"
                        />
                    </div>

                    <!-- Description -->
                    <div v-if="portfolio.description">
                        <Label class="text-sm font-medium text-muted-foreground">Description</Label>
                        <p class="mt-1 text-sm">{{ portfolio.description }}</p>
                    </div>

                    <!-- Content -->
                    <div v-if="portfolio.content">
                        <Label class="text-sm font-medium text-muted-foreground">Content</Label>
                        <div class="mt-1 prose prose-sm dark:prose-invert max-w-none">
                            {{ portfolio.content }}
                        </div>
                    </div>

                    <Separator />

                    <!-- Project Details Grid -->
                    <div class="grid grid-cols-2 gap-4">
                        <div v-if="portfolio.category">
                            <Label class="text-xs text-muted-foreground flex items-center gap-1">
                                <Tag class="h-3 w-3" /> Category
                            </Label>
                            <p class="text-sm font-medium">{{ portfolio.category }}</p>
                        </div>

                        <div v-if="portfolio.industry">
                            <Label class="text-xs text-muted-foreground flex items-center gap-1">
                                <Building2 class="h-3 w-3" /> Industry
                            </Label>
                            <p class="text-sm font-medium">{{ portfolio.industry }}</p>
                        </div>

                        <div v-if="portfolio.client_name">
                            <Label class="text-xs text-muted-foreground">Client</Label>
                            <p class="text-sm font-medium">{{ portfolio.client_name }}</p>
                        </div>

                        <div v-if="portfolio.project_date">
                            <Label class="text-xs text-muted-foreground flex items-center gap-1">
                                <Calendar class="h-3 w-3" /> Project Date
                            </Label>
                            <p class="text-sm font-medium">{{ formatDate(portfolio.project_date) }}</p>
                        </div>

                        <div v-if="portfolio.location">
                            <Label class="text-xs text-muted-foreground flex items-center gap-1">
                                <MapPin class="h-3 w-3" /> Location
                            </Label>
                            <p class="text-sm font-medium">{{ portfolio.location }}</p>
                        </div>

                        <div v-if="portfolio.experience_level">
                            <Label class="text-xs text-muted-foreground">Experience Level</Label>
                            <p class="text-sm font-medium">{{ portfolio.experience_level }}</p>
                        </div>
                    </div>

                    <!-- Tags -->
                    <div v-if="portfolio.tags && portfolio.tags.length > 0">
                        <Label class="text-xs text-muted-foreground">Tags</Label>
                        <div class="mt-1 flex flex-wrap gap-2">
                            <span
                                v-for="tag in portfolio.tags"
                                :key="tag"
                                class="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                            >
                                {{ tag }}
                            </span>
                        </div>
                    </div>

                    <Separator />

                    <!-- Metadata -->
                    <div class="grid grid-cols-3 gap-4 text-sm">
                        <div>
                            <Label class="text-xs text-muted-foreground">Sort Order</Label>
                            <p class="font-medium">{{ portfolio.sort_order }}</p>
                        </div>
                        <div>
                            <Label class="text-xs text-muted-foreground">Created</Label>
                            <p class="font-medium">{{ formatDate(portfolio.created_at) }}</p>
                        </div>
                        <div>
                            <Label class="text-xs text-muted-foreground">Updated</Label>
                            <p class="font-medium">{{ formatDate(portfolio.updated_at) }}</p>
                        </div>
                    </div>
                </div>
            </ScrollArea>

            <!-- Footer Actions -->
            <div class="flex items-center justify-between gap-2 border-t px-6 py-4">
                <div class="flex gap-2">
                    <Button variant="outline" size="sm" @click="previewPortfolio">
                        <Eye class="mr-2 h-4 w-4" />
                        Preview
                    </Button>
                    <a
                        v-if="portfolio.project_url"
                        :href="portfolio.project_url"
                        target="_blank"
                        class="inline-flex"
                    >
                        <Button variant="outline" size="sm">
                            <ExternalLink class="mr-2 h-4 w-4" />
                            Visit Project
                        </Button>
                    </a>
                </div>
                <Link :href="porfolio.edit.url(portfolio.id)">
                    <Button size="sm">
                        <Pencil class="mr-2 h-4 w-4" />
                        Edit
                    </Button>
                </Link>
            </div>
        </DialogContent>
    </Dialog>
</template>
