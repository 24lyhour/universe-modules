<script setup lang="ts">
import { computed } from 'vue';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-vue-next';

interface Props {
    currentPage: number;
    lastPage: number;
    maxVisiblePages?: number;
}

const props = withDefaults(defineProps<Props>(), {
    maxVisiblePages: 5,
});

const emit = defineEmits<{
    pageChange: [page: number];
}>();

const visiblePages = computed(() => {
    const pages: number[] = [];
    const maxVisible = props.maxVisiblePages;
    const current = props.currentPage;
    const last = props.lastPage;

    if (last <= maxVisible) {
        for (let i = 1; i <= last; i++) {
            pages.push(i);
        }
    } else {
        const half = Math.floor(maxVisible / 2);
        let start = Math.max(1, current - half);
        let end = Math.min(last, start + maxVisible - 1);

        if (end - start < maxVisible - 1) {
            start = Math.max(1, end - maxVisible + 1);
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
    }

    return pages;
});

const canGoPrev = computed(() => props.currentPage > 1);
const canGoNext = computed(() => props.currentPage < props.lastPage);

const goToPage = (page: number) => {
    if (page >= 1 && page <= props.lastPage && page !== props.currentPage) {
        emit('pageChange', page);
    }
};
</script>

<template>
    <div class="flex items-center gap-1">
        <!-- First Page -->
        <Button
            v-if="lastPage > maxVisiblePages"
            variant="outline"
            size="icon"
            class="h-8 w-8"
            :disabled="!canGoPrev"
            @click="goToPage(1)"
        >
            <ChevronsLeft class="h-4 w-4" />
        </Button>

        <!-- Previous -->
        <Button
            variant="outline"
            size="icon"
            class="h-8 w-8"
            :disabled="!canGoPrev"
            @click="goToPage(currentPage - 1)"
        >
            <ChevronLeft class="h-4 w-4" />
        </Button>

        <!-- Page Numbers -->
        <Button
            v-for="page in visiblePages"
            :key="page"
            :variant="page === currentPage ? 'default' : 'outline'"
            size="icon"
            class="h-8 w-8"
            @click="goToPage(page)"
        >
            {{ page }}
        </Button>

        <!-- Next -->
        <Button
            variant="outline"
            size="icon"
            class="h-8 w-8"
            :disabled="!canGoNext"
            @click="goToPage(currentPage + 1)"
        >
            <ChevronRight class="h-4 w-4" />
        </Button>

        <!-- Last Page -->
        <Button
            v-if="lastPage > maxVisiblePages"
            variant="outline"
            size="icon"
            class="h-8 w-8"
            :disabled="!canGoNext"
            @click="goToPage(lastPage)"
        >
            <ChevronsRight class="h-4 w-4" />
        </Button>
    </div>
</template>
