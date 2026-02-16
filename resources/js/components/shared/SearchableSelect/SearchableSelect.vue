<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Check, ChevronsUpDown, Search, X } from 'lucide-vue-next';
import { cn } from '@/lib/utils';

export interface SearchableSelectOption {
    value: string | number;
    label: string;
    description?: string;
}

interface Props {
    options: SearchableSelectOption[];
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    placeholder: 'Select an option...',
    searchPlaceholder: 'Search...',
    emptyMessage: 'No results found.',
    disabled: false,
});

const modelValue = defineModel<string | number | null>({ default: null });

const isOpen = ref(false);
const searchQuery = ref('');
const containerRef = ref<HTMLElement | null>(null);

// Filter options based on search query
const filteredOptions = computed(() => {
    if (!searchQuery.value) return props.options;
    const query = searchQuery.value.toLowerCase();
    return props.options.filter(
        (option) =>
            option.label.toLowerCase().includes(query) ||
            option.description?.toLowerCase().includes(query)
    );
});

// Get selected option
const selectedOption = computed(() => {
    if (modelValue.value === null || modelValue.value === undefined) return null;
    return props.options.find((opt) => opt.value === modelValue.value) || null;
});

// Toggle dropdown
const toggleOpen = () => {
    if (props.disabled) return;
    isOpen.value = !isOpen.value;
    if (isOpen.value) {
        searchQuery.value = '';
    }
};

// Select an option
const selectOption = (option: SearchableSelectOption) => {
    modelValue.value = option.value;
    isOpen.value = false;
    searchQuery.value = '';
};

// Clear selection
const clearSelection = (e: Event) => {
    e.stopPropagation();
    modelValue.value = null;
};

// Close on click outside
const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.value && !containerRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    }
};

// Add/remove click listener
watch(isOpen, (open) => {
    if (open) {
        document.addEventListener('click', handleClickOutside);
    } else {
        document.removeEventListener('click', handleClickOutside);
    }
});
</script>

<template>
    <div ref="containerRef" class="relative w-full">
        <!-- Trigger Button -->
        <Button
            type="button"
            variant="outline"
            role="combobox"
            :aria-expanded="isOpen"
            :disabled="disabled"
            class="w-full justify-between font-normal"
            @click="toggleOpen"
        >
            <span :class="cn('truncate', !selectedOption && 'text-muted-foreground')">
                {{ selectedOption?.label || placeholder }}
            </span>
            <div class="flex items-center gap-1">
                <X
                    v-if="selectedOption && !disabled"
                    class="h-4 w-4 shrink-0 opacity-50 hover:opacity-100"
                    @click="clearSelection"
                />
                <ChevronsUpDown class="h-4 w-4 shrink-0 opacity-50" />
            </div>
        </Button>

        <!-- Dropdown -->
        <div
            v-show="isOpen"
            class="absolute z-50 mt-1 w-full rounded-md border bg-popover shadow-lg"
        >
            <!-- Search Input -->
            <div class="flex items-center border-b px-3">
                <Search class="mr-2 h-4 w-4 shrink-0 opacity-50" />
                <Input
                    v-model="searchQuery"
                    :placeholder="searchPlaceholder"
                    class="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    @click.stop
                />
            </div>

            <!-- Options List -->
            <ScrollArea class="max-h-[200px]">
                <div class="p-1">
                    <div
                        v-if="filteredOptions.length === 0"
                        class="py-6 text-center text-sm text-muted-foreground"
                    >
                        {{ emptyMessage }}
                    </div>
                    <div
                        v-for="option in filteredOptions"
                        :key="option.value"
                        :class="cn(
                            'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
                            'hover:bg-accent hover:text-accent-foreground',
                            modelValue === option.value && 'bg-accent'
                        )"
                        @click="selectOption(option)"
                    >
                        <Check
                            :class="cn(
                                'mr-2 h-4 w-4',
                                modelValue === option.value ? 'opacity-100' : 'opacity-0'
                            )"
                        />
                        <div class="flex flex-col">
                            <span>{{ option.label }}</span>
                            <span v-if="option.description" class="text-xs text-muted-foreground">
                                {{ option.description }}
                            </span>
                        </div>
                    </div>
                </div>
            </ScrollArea>
        </div>
    </div>
</template>
